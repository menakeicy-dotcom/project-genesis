"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/server/db";
import { getViewer } from "@/server/access";
import { upsertTree } from "@/server/seeds/lib";
import { INGLES_SPEC } from "@/server/seeds/ingles";
import { PROGRAMACION_SPEC } from "@/server/seeds/programacion";
import { MATEMATICAS_SPEC } from "@/server/seeds/matematicas";
import { MUSICA_SPEC } from "@/server/seeds/musica";
import { CIENCIA_SPEC } from "@/server/seeds/ciencia";

/** Resultado de publicar el catálogo desde la interfaz del fundador. */
export type PublishResult = {
  ok?: true;
  published?: number;
  error?: string;
};

/**
 * Publica (siembra) las 5 disciplinas en la base de datos con el motor genérico
 * de sembrado. Solo el fundador/admin puede ejecutarla. Es idempotente y no
 * destructiva (upsert por slug), así que puede reejecutarse sin perder progreso.
 *
 * Existe para no depender de URLs, claves ni variables de entorno: la fundadora
 * publica el catálogo con un clic desde la propia app.
 */
export async function seedCatalog(): Promise<PublishResult> {
  const viewer = await getViewer();
  if (!viewer.isAdmin) {
    return { error: "Solo el fundador puede publicar el catálogo." };
  }

  try {
    await upsertTree(db, INGLES_SPEC);
    await upsertTree(db, PROGRAMACION_SPEC);
    await upsertTree(db, MATEMATICAS_SPEC);
    await upsertTree(db, MUSICA_SPEC);
    await upsertTree(db, CIENCIA_SPEC);
  } catch (e) {
    const message = e instanceof Error ? e.message : "Error desconocido.";
    return { error: `No se pudo publicar el catálogo: ${message}` };
  }

  const published = await db.tree.count({ where: { status: "PUBLISHED" } });

  // Refresca las pantallas que dependen del estado del catálogo.
  revalidatePath("/explore");
  revalidatePath("/dashboard");
  revalidatePath("/profile");

  return { ok: true, published };
}
