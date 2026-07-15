import { NextResponse } from "next/server";

import { db } from "@/server/db";
import { seedIfEmpty } from "@/server/seed";
import { INGLES_SPEC } from "@/server/seeds/ingles";
import { lintTree, upsertTree, type TreeSpec } from "@/server/seeds/lib";
import { PROGRAMACION_SPEC } from "@/server/seeds/programacion";

/** Resumen de calidad de una disciplina según el estándar SkillTree. */
function quality(spec: TreeSpec) {
  const l = lintTree(spec);
  return {
    lessonCoverage: `${l.lessonCoverage}%`,
    metrics: l.metrics,
    warnings: l.warnings.length,
    sample: l.warnings.slice(0, 8),
  };
}

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
  // Todas las disciplinas se insertan/actualizan de forma idempotente con el
  // MISMO motor genérico de sembrado (validación de DAG incluida).
  const english = await upsertTree(db, INGLES_SPEC);
  const programacion = await upsertTree(db, PROGRAMACION_SPEC);

  return NextResponse.json({
    ok: true,
    demo: result.seeded ? "Contenido de demostración cargado." : "Ya existía.",
    english,
    programacion,
    quality: {
      english: quality(INGLES_SPEC),
      programacion: quality(PROGRAMACION_SPEC),
    },
  });
}
