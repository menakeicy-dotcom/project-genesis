import { NextResponse } from "next/server";

import { db } from "@/server/db";
import { INGLES_SPEC } from "@/server/seeds/ingles";
import { lintTree, upsertTree, type TreeSpec } from "@/server/seeds/lib";
import { PROGRAMACION_SPEC } from "@/server/seeds/programacion";
import { MATEMATICAS_SPEC } from "@/server/seeds/matematicas";
import { MUSICA_SPEC } from "@/server/seeds/musica";
import { CIENCIA_SPEC } from "@/server/seeds/ciencia";

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
 * Siembra el catálogo real de SkillTree con el motor genérico de sembrado.
 * Protegida por SEED_SECRET e idempotente: cada disciplina se inserta/actualiza
 * por slug (upsertTree), preservando ids y progreso entre reejecuciones.
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

  // Todas las disciplinas se insertan/actualizan de forma idempotente con el
  // MISMO motor genérico de sembrado (validación de DAG incluida). Cada spec
  // crea/actualiza su propia categoría por slug, así que no hace falta ningún
  // sembrado previo de catálogo.
  const ingles = await upsertTree(db, INGLES_SPEC);
  const programacion = await upsertTree(db, PROGRAMACION_SPEC);
  // Las cinco disciplinas se siembran en DRAFT (revisión del fundador previa al
  // lanzamiento): solo ADMIN las ve. Publicar = cambiar status en su spec.
  const matematicas = await upsertTree(db, MATEMATICAS_SPEC);
  const musica = await upsertTree(db, MUSICA_SPEC);
  const ciencia = await upsertTree(db, CIENCIA_SPEC);

  return NextResponse.json({
    ok: true,
    ingles,
    programacion,
    matematicas,
    musica,
    ciencia,
    quality: {
      ingles: quality(INGLES_SPEC),
      programacion: quality(PROGRAMACION_SPEC),
      matematicas: quality(MATEMATICAS_SPEC),
      musica: quality(MUSICA_SPEC),
      ciencia: quality(CIENCIA_SPEC),
    },
  });
}
