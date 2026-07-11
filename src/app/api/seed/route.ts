import { NextResponse } from "next/server";

import { db } from "@/server/db";
import { seedIfEmpty } from "@/server/seed";
import { upsertEnglishTree } from "@/server/seeds/ingles";
import { upsertTree } from "@/server/seeds/lib";
import { PROGRAMACION_SPEC } from "@/server/seeds/programacion";

/**
 * Siembra el contenido de demostración. Protegida por SEED_SECRET y segura de
 * reejecutar (solo siembra si el catálogo está vacío).
 *
 * Uso:  GET /api/seed?key=TU_SEED_SECRET
 */
export async function GET(request: Request) {
  const secret = process.env.SEED_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "SEED_SECRET no está configurado." },
      { status: 500 },
    );
  }

  const key = new URL(request.url).searchParams.get("key");
  if (key !== secret) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }

  const result = await seedIfEmpty(db);
  // Los árboles "reales" se insertan/actualizan de forma idempotente mediante el
  // motor genérico de sembrado. Inglés conserva su propio upsert por ahora.
  const english = await upsertEnglishTree(db);
  const programacion = await upsertTree(db, PROGRAMACION_SPEC);

  return NextResponse.json({
    ok: true,
    demo: result.seeded ? "Contenido de demostración cargado." : "Ya existía.",
    english,
    programacion,
  });
}
