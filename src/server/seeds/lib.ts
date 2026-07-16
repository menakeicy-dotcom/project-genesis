/**
 * Motor de sembrado GENÉRICO de árboles de habilidades (reutilizable por
 * CUALQUIER disciplina, no solo Inglés).
 *
 * Una disciplina se define de forma declarativa como un `TreeSpec`: categoría,
 * metadatos del árbol, ramas (hebras de competencia), niveles y una lista de
 * nodos con sus prerrequisitos, ficha pedagógica y lección. Este módulo:
 *   - valida el grafo (prerequisitos existentes, aciclicidad, alcanzabilidad,
 *     un único punto de entrada raíz);
 *   - lo siembra en la arquitectura existente (Category → Tree → Skill →
 *     SkillPrerequisite → Resource) de forma idempotente.
 *
 * El contenido pedagógico enriquecido vive en `Skill.content` (JSON): incluye
 * competencia, justificación, errores, criterios, ejercicios/evaluaciones
 * sugeridos, la lección interactiva y las etiquetas de nivel/rama propias de la
 * disciplina (para que el UI no dependa de CEFR ni de ramas de Inglés).
 */

import type { Prisma, PrismaClient } from "@prisma/client";

import type { Lesson } from "@/modules/skill-tree/lesson";

export type SeedResType = "VIDEO" | "ARTICLE" | "EXERCISE" | "BOOK" | "OTHER";

export interface SeedRes {
  t: SeedResType;
  title: string;
  url: string;
  p: string;
}

export interface SeedNode {
  s: string; // slug
  b: string; // clave de rama
  lv: number; // índice de nivel (0..)
  t: string; // título
  d: string; // descripción
  o: string; // objetivo (can-do)
  c: string; // competencia
  w: string; // justificación + razón de posición
  df: "easy" | "medium" | "hard" | "expert";
  m: number; // minutos estimados
  xp: number;
  root?: boolean;
  pre: string[]; // prerrequisitos (slugs)
  er: string[]; // errores frecuentes
  cr: string[]; // criterios de dominio
  ex: string[]; // ejercicios sugeridos
  ev: string[]; // evaluaciones sugeridas
  r: SeedRes[]; // recursos
}

export interface TreeSpec {
  category: {
    slug: string;
    name: string;
    description: string;
    icon: string;
    order: number;
  };
  tree: {
    slug: string;
    title: string;
    description: string;
    difficulty: string;
    /**
     * Estado de publicación. Por defecto "PUBLISHED". Una disciplina en
     * construcción se siembra como "DRAFT": queda íntegra en la base de datos
     * pero NO es visible para el usuario (el catálogo solo muestra PUBLISHED y
     * las páginas de árbol/habilidad devuelven 404 para no publicadas).
     */
    status?: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  };
  /** clave de rama → etiqueta legible. */
  branches: Record<string, string>;
  /** índice de nivel → etiqueta legible (p. ej. ["Fundamentos","Básico",…]). */
  levels: string[];
  nodes: SeedNode[];
  /** slug → lección interactiva (opcional; sin ella, la habilidad muestra ficha). */
  lessons: Record<string, Lesson>;
}

export interface ValidationResult {
  ok: boolean;
  errors: string[];
  stats: { nodes: number; roots: number; withLesson: number };
}

/**
 * Resultado del LINTER DE CALIDAD del estándar SkillTree. No bloquea el
 * sembrado (a diferencia de `validateTree`), pero mide si una disciplina cumple
 * el estándar de calidad: cobertura de lecciones y de campos pedagógicos, y
 * riqueza de cada lección (práctica, resumen, ejemplos…). Sirve para que toda
 * disciplina FUTURA mantenga el mismo nivel que Inglés y Programación.
 */
export interface LintResult {
  /** Cobertura global (0–100) de lecciones sobre el total de nodos. */
  lessonCoverage: number;
  warnings: string[];
  /** Métricas agregadas útiles para el informe/panel de autoría. */
  metrics: {
    nodes: number;
    withLesson: number;
    withPractice: number;
    withSummary: number;
    practiceKinds: Record<string, number>;
    avgSectionsPerLesson: number;
    avgPracticePerLesson: number;
  };
}

/**
 * ESTÁNDAR SkillTree — criterios mínimos de una ficha de habilidad.
 * Cambiar aquí sube (o baja) el listón para TODAS las disciplinas a la vez.
 */
const STANDARD = {
  minMasteryCriteria: 1,
  minCommonErrors: 1,
  minResources: 1,
  minSectionsPerLesson: 2,
  minPracticePerLesson: 1,
};

/** Analiza una disciplina contra el estándar de calidad (no bloqueante). */
export function lintTree(spec: TreeSpec): LintResult {
  const warnings: string[] = [];
  const nodes = spec.nodes;
  const practiceKinds: Record<string, number> = {};

  // Nodos aislados: sin prerrequisitos, sin dependientes y no raíz (huérfanos
  // que no conectan con el DAG). Señal de calidad universal.
  const hasDependents = new Set<string>();
  for (const n of nodes) for (const p of n.pre) hasDependents.add(p);
  for (const n of nodes)
    if (n.pre.length === 0 && !hasDependents.has(n.s) && !n.root)
      warnings.push(`${n.s}: nodo aislado (no conecta con ninguna otra habilidad).`);
  let withLesson = 0;
  let withPractice = 0;
  let withSummary = 0;
  let totalSections = 0;
  let totalPractice = 0;

  for (const n of nodes) {
    // Ficha pedagógica: campos que el estándar considera obligatorios.
    if (!n.o?.trim()) warnings.push(`${n.s}: sin objetivo de aprendizaje.`);
    if (!n.c?.trim()) warnings.push(`${n.s}: sin competencia declarada.`);
    if ((n.cr?.length ?? 0) < STANDARD.minMasteryCriteria)
      warnings.push(`${n.s}: sin criterios de dominio.`);
    if ((n.er?.length ?? 0) < STANDARD.minCommonErrors)
      warnings.push(`${n.s}: sin errores frecuentes.`);
    if ((n.r?.length ?? 0) < STANDARD.minResources)
      warnings.push(`${n.s}: sin recursos.`);
    if (n.xp <= 0) warnings.push(`${n.s}: XP no positiva.`);

    const lesson = spec.lessons[n.s];
    if (!lesson) continue;
    withLesson++;
    const sections = lesson.sections?.length ?? 0;
    const practice = lesson.practice?.length ?? 0;
    totalSections += sections;
    totalPractice += practice;
    if (practice > 0) withPractice++;
    if ((lesson.summary?.length ?? 0) > 0) withSummary++;
    if (sections < STANDARD.minSectionsPerLesson)
      warnings.push(`${n.s}: la lección tiene menos de ${STANDARD.minSectionsPerLesson} secciones.`);
    if (practice < STANDARD.minPracticePerLesson)
      warnings.push(`${n.s}: la lección no tiene práctica autocorregible.`);
    for (const p of lesson.practice ?? [])
      practiceKinds[p.kind] = (practiceKinds[p.kind] ?? 0) + 1;
  }

  return {
    lessonCoverage: nodes.length ? Math.round((withLesson / nodes.length) * 100) : 0,
    warnings,
    metrics: {
      nodes: nodes.length,
      withLesson,
      withPractice,
      withSummary,
      practiceKinds,
      avgSectionsPerLesson: withLesson ? +(totalSections / withLesson).toFixed(1) : 0,
      avgPracticePerLesson: withLesson ? +(totalPractice / withLesson).toFixed(1) : 0,
    },
  };
}

/** Valida el grafo de un árbol antes de sembrarlo. */
export function validateTree(spec: TreeSpec): ValidationResult {
  const errors: string[] = [];
  const nodes = spec.nodes;
  const bySlug = new Map(nodes.map((n) => [n.s, n]));

  // Slugs únicos.
  if (bySlug.size !== nodes.length) {
    const seen = new Set<string>();
    for (const n of nodes) {
      if (seen.has(n.s)) errors.push(`Slug duplicado: ${n.s}`);
      seen.add(n.s);
    }
  }

  // Prerrequisitos existentes + ramas y niveles válidos.
  for (const n of nodes) {
    if (!spec.branches[n.b]) errors.push(`Rama desconocida en ${n.s}: ${n.b}`);
    if (n.lv < 0 || n.lv >= spec.levels.length)
      errors.push(`Nivel fuera de rango en ${n.s}: ${n.lv}`);
    for (const p of n.pre) {
      if (!bySlug.has(p)) errors.push(`Prerrequisito inexistente ${p} en ${n.s}`);
    }
  }

  const roots = nodes.filter((n) => n.root || n.pre.length === 0);
  if (roots.length === 0) errors.push("No hay ningún nodo raíz (sin prerrequisitos).");

  // Aciclicidad (Kahn).
  const indeg = new Map(nodes.map((n) => [n.s, n.pre.length]));
  const children = new Map<string, string[]>();
  for (const n of nodes)
    for (const p of n.pre)
      if (bySlug.has(p)) children.set(p, [...(children.get(p) ?? []), n.s]);
  const queue = nodes.filter((n) => (indeg.get(n.s) ?? 0) === 0).map((n) => n.s);
  let processed = 0;
  while (queue.length) {
    const cur = queue.shift()!;
    processed++;
    for (const ch of children.get(cur) ?? []) {
      indeg.set(ch, (indeg.get(ch) ?? 0) - 1);
      if ((indeg.get(ch) ?? 0) === 0) queue.push(ch);
    }
  }
  if (processed !== nodes.length)
    errors.push("El grafo tiene ciclos (no es un DAG).");

  // Alcanzabilidad desde las raíces.
  const reachable = new Set<string>(roots.map((r) => r.s));
  const stack = [...reachable];
  while (stack.length) {
    const cur = stack.pop()!;
    for (const ch of children.get(cur) ?? [])
      if (!reachable.has(ch)) {
        reachable.add(ch);
        stack.push(ch);
      }
  }
  for (const n of nodes)
    if (!reachable.has(n.s))
      errors.push(`Nodo inalcanzable desde una raíz: ${n.s}`);

  return {
    ok: errors.length === 0,
    errors,
    stats: {
      nodes: nodes.length,
      roots: roots.length,
      withLesson: nodes.filter((n) => spec.lessons[n.s]).length,
    },
  };
}

/**
 * Siembra (idempotente y NO destructiva) el árbol de una disciplina.
 *
 * Actualiza cada habilidad POR SLUG (upsert) en vez de borrar y recrear el
 * árbol entero. Así los `Skill.id` se conservan entre siembras, y con ellos el
 * PROGRESO del usuario (UserSkillProgress, inscripciones, eventos de repaso),
 * que cuelga de esos ids. Actualizar el contenido ya no borra lo aprendido.
 *
 * Solo se eliminan las habilidades que dejan de existir en el spec. Los
 * prerrequisitos y recursos (sin datos de usuario asociados) se regeneran.
 */
export async function upsertTree(
  db: PrismaClient,
  spec: TreeSpec,
): Promise<{
  tree: string;
  skills: number;
  prerequisites: number;
  removed: number;
}> {
  const check = validateTree(spec);
  if (!check.ok) {
    throw new Error(
      `Árbol "${spec.tree.slug}" inválido:\n- ${check.errors.join("\n- ")}`,
    );
  }

  const category = await db.category.upsert({
    where: { slug: spec.category.slug },
    update: {
      name: spec.category.name,
      description: spec.category.description,
      icon: spec.category.icon,
      order: spec.category.order,
    },
    create: { ...spec.category },
  });

  const branchKeys = Object.keys(spec.branches);
  const laneX = (b: string) => Math.max(0, branchKeys.indexOf(b)) * 160;
  const status = spec.tree.status ?? "PUBLISHED";

  const treeData = {
    categoryId: category.id,
    title: spec.tree.title,
    description: spec.tree.description,
    difficulty: spec.tree.difficulty,
    status,
  } as const;
  const tree = await db.tree.upsert({
    where: { slug: spec.tree.slug },
    update: treeData,
    create: { slug: spec.tree.slug, ...treeData },
  });

  // Elimina SOLO las habilidades que ya no están en el spec (su progreso se va
  // con ellas, que es lo correcto: el contenido dejó de existir).
  const specSlugs = spec.nodes.map((n) => n.s);
  const removedRes = await db.skill.deleteMany({
    where: { treeId: tree.id, slug: { notIn: specSlugs } },
  });

  // Upsert por slug: conserva el id (y el progreso) de las que permanecen.
  const idBySlug: Record<string, string> = {};
  let order = 0;
  for (const n of spec.nodes) {
    const data = {
      title: n.t,
      description: n.d,
      objective: n.o,
      branch: n.b,
      difficulty: n.df,
      tier: n.lv,
      xpReward: n.xp,
      estimatedMinutes: n.m,
      positionX: laneX(n.b),
      positionY: n.lv * 130,
      isRoot: !!n.root,
      order: order++,
      content: {
        competency: n.c,
        rationale: n.w,
        commonErrors: n.er,
        masteryCriteria: n.cr,
        exercises: n.ex,
        assessments: n.ev,
        levelLabel: spec.levels[n.lv],
        branchLabel: spec.branches[n.b],
        ...(spec.lessons[n.s] ? { lesson: spec.lessons[n.s] } : {}),
      } as unknown as Prisma.InputJsonValue,
    };
    const skill = await db.skill.upsert({
      where: { treeId_slug: { treeId: tree.id, slug: n.s } },
      update: data,
      create: { treeId: tree.id, slug: n.s, ...data },
    });
    idBySlug[n.s] = skill.id;
  }

  // Recursos y prerrequisitos no guardan datos de usuario: se regeneran.
  await db.resource.deleteMany({ where: { skill: { treeId: tree.id } } });
  for (const n of spec.nodes) {
    if (n.r.length === 0) continue;
    await db.resource.createMany({
      data: n.r.map((res, i) => ({
        skillId: idBySlug[n.s]!,
        type: res.t,
        title: res.title,
        url: res.url,
        provider: res.p,
        order: i,
      })),
    });
  }

  await db.skillPrerequisite.deleteMany({
    where: { skill: { treeId: tree.id } },
  });
  let prerequisites = 0;
  for (const n of spec.nodes) {
    for (const pre of n.pre) {
      await db.skillPrerequisite.create({
        data: { skillId: idBySlug[n.s]!, prerequisiteId: idBySlug[pre]! },
      });
      prerequisites++;
    }
  }

  return {
    tree: tree.slug,
    skills: spec.nodes.length,
    prerequisites,
    removed: removedRes.count,
  };
}
