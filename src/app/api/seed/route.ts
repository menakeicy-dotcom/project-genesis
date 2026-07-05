import { NextResponse } from "next/server";

import { db } from "@/server/db";
import { seedIfEmpty } from "@/server/seed";
import { upsertEnglishTree } from "@/server/seeds/ingles";

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
  // El árbol de Inglés se inserta/actualiza de forma idempotente, exista o no
  // ya el catálogo de demostración (es el primer árbol "real" de SkillTree).
  const english = await upsertEnglishTree(db);

  return NextResponse.json({
    ok: true,
    demo: result.seeded ? "Contenido de demostración cargado." : "Ya existía.",
    english,
  });
}
