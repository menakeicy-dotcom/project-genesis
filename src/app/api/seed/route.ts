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
 * Idempotente: cada disciplina se inserta/actualiza por slug (upsertTree),
 * preservando ids y progreso entre reejecuciones.
 *
 * ARRANQUE (bootstrap): si el catálogo está VACÍO (0 árboles), la siembra se
 * permite SIN clave —es una operación única, idempotente y con contenido fijo—,
 * para poder cargar el contenido en un entorno nuevo con una sola visita. En
 * cuanto existe contenido, se exige `SEED_SECRET` para volver a sembrar.
 *
 * Uso:  GET /api/seed            (solo si la base está vacía)
 *       GET /api/seed?key=SECRET (para re-sembrar cuando ya hay contenido)
 */
export async function GET(request: Request) {
  const existing = await db.tree.count();
  const isBootstrap = existing === 0;

  if (!isBootstrap) {
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
  }

  // Todas las disciplinas se insertan/actualizan de forma idempotente con el
  // MISMO motor genérico de sembrado (validación de DAG incluida). Cada spec
  // crea/actualiza su propia categoría por slug, así que no hace falta ningún
  // sembrado previo de catálogo.
  const ingles = await upsertTree(db, INGLES_SPEC);
  const programacion = await upsertTree(db, PROGRAMACION_SPEC);
  const matematicas = await upsertTree(db, MATEMATICAS_SPEC);
  const musica = await upsertTree(db, MUSICA_SPEC);
  const ciencia = await upsertTree(db, CIENCIA_SPEC);

  return NextResponse.json({
    ok: true,
    bootstrap: isBootstrap,
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
