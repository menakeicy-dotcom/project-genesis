import "server-only";

import { db } from "@/server/db";
import {
  computeStrandStates,
  isUnlockedByStrand,
  type NodeState,
} from "@/modules/skill-tree/state";
import { levelForXp, levelProgress } from "@/modules/progress/xp";

/** Estado de una hebra en el árbol principal (todas abiertas). */
export type StrandState = "completed" | "progress" | "open";

/** Conjunto de IDs de habilidades completadas por un usuario en un árbol. */
async function completedSkillIds(
  userId: string,
  treeId: string,
): Promise<Set<string>> {
  const rows = await db.userSkillProgress.findMany({
    where: { userId, status: "COMPLETED", skill: { treeId } },
    select: { skillId: true },
  });
  return new Set(rows.map((r) => r.skillId));
}

/** IDs de habilidades completadas por el usuario en un árbol (público). */
export function getCompletedSkillIds(userId: string, treeId: string) {
  return completedSkillIds(userId, treeId);
}

/** Inscripción del usuario en un árbol, si existe. */
export async function getEnrollment(userId: string, treeId: string) {
  return db.userTreeEnrollment.findUnique({
    where: { userId_treeId: { userId, treeId } },
  });
}

/** Etiqueta de rama guardada en Skill.content (o la clave como respaldo). */
function branchLabelOf(content: unknown, key: string): string {
  const c = content as { branchLabel?: string } | null;
  return c?.branchLabel ?? key;
}
function levelLabelOf(content: unknown, tier: number): string {
  const c = content as { levelLabel?: string } | null;
  return c?.levelLabel ?? String(tier);
}

export interface StrandSummary {
  key: string;
  label: string;
  total: number;
  completed: number;
  pct: number;
  state: StrandState;
  /** Primera habilidad disponible de la hebra (para "continuar"). */
  nextSlug?: string;
}

/**
 * NIVEL 1 — las grandes habilidades (hebras) del árbol principal. Todas abiertas.
 * Cada una con su progreso. Reutilizable por cualquier disciplina.
 */
export async function getTreeStrands(userId: string, treeSlug: string) {
  // Solo árboles PUBLICADOS: los borradores no son visibles en ninguna página.
  const tree = await db.tree.findFirst({
    where: { slug: treeSlug, status: "PUBLISHED" },
    include: { category: true, skills: { orderBy: { order: "asc" } } },
  });
  if (!tree) return null;

  const completed = await completedSkillIds(userId, tree.id);
  const states = computeStrandStates(
    tree.skills.map((s) => ({ id: s.id, branch: s.branch, tier: s.tier })),
    completed,
  );

  const map = new Map<
    string,
    { key: string; label: string; order: number; total: number; done: number; nextSlug?: string }
  >();
  for (const s of tree.skills) {
    const key = s.branch ?? "otros";
    const e =
      map.get(key) ??
      {
        key,
        label: branchLabelOf(s.content, key),
        order: s.order,
        total: 0,
        done: 0,
        nextSlug: undefined as string | undefined,
      };
    e.total++;
    if (completed.has(s.id)) e.done++;
    if (!e.nextSlug && states.get(s.id) === "available") e.nextSlug = s.slug;
    e.order = Math.min(e.order, s.order);
    map.set(key, e);
  }

  const strands: StrandSummary[] = [...map.values()]
    .sort((a, b) => a.order - b.order)
    .map((e) => ({
      key: e.key,
      label: e.label,
      total: e.total,
      completed: e.done,
      pct: e.total ? Math.round((e.done / e.total) * 100) : 0,
      state: e.done === e.total ? "completed" : e.done > 0 ? "progress" : "open",
      nextSlug: e.nextSlug,
    }));

  return { tree, strands };
}

/**
 * NIVEL 2 — dentro de una hebra: niveles ordenados con sus habilidades y su
 * estado (progresión intra-hebra). Un nivel se desbloquea al completar el
 * anterior de la misma hebra.
 */
export async function getStrand(
  userId: string,
  treeSlug: string,
  branch: string,
) {
  // Solo árboles PUBLICADOS (cierra el acceso a ramas de borradores por URL).
  const tree = await db.tree.findFirst({
    where: { slug: treeSlug, status: "PUBLISHED" },
    include: {
      category: true,
      skills: { orderBy: [{ tier: "asc" }, { order: "asc" }] },
    },
  });
  if (!tree) return null;

  const completed = await completedSkillIds(userId, tree.id);
  const states = computeStrandStates(
    tree.skills.map((s) => ({ id: s.id, branch: s.branch, tier: s.tier })),
    completed,
  );

  const skills = tree.skills.filter((s) => (s.branch ?? "otros") === branch);
  if (skills.length === 0) return null;

  const levelsMap = new Map<
    number,
    {
      tier: number;
      label: string;
      skills: {
        slug: string;
        title: string;
        state: NodeState;
        xp: number;
        minutes: number;
        hasLesson: boolean;
      }[];
    }
  >();
  for (const s of skills) {
    const e =
      levelsMap.get(s.tier) ??
      { tier: s.tier, label: levelLabelOf(s.content, s.tier), skills: [] };
    const c = s.content as { lesson?: unknown } | null;
    e.skills.push({
      slug: s.slug,
      title: s.title,
      state: states.get(s.id) ?? "locked",
      xp: s.xpReward,
      minutes: s.estimatedMinutes,
      hasLesson: !!c?.lesson,
    });
    levelsMap.set(s.tier, e);
  }

  const levels = [...levelsMap.values()]
    .sort((a, b) => a.tier - b.tier)
    .map((l) => ({
      ...l,
      unlocked: l.skills.some((sk) => sk.state !== "locked"),
    }));

  const done = skills.filter((s) => completed.has(s.id)).length;
  return {
    treeSlug,
    treeTitle: tree.title,
    categoryIcon: tree.category.icon,
    branch,
    label: branchLabelOf(skills[0]!.content, branch),
    levels,
    total: skills.length,
    completed: done,
    pct: skills.length ? Math.round((done / skills.length) * 100) : 0,
  };
}

/** Inscribe al usuario en un árbol (idempotente). */
export async function enrollInTree(userId: string, treeId: string) {
  const totalSkills = await db.skill.count({ where: { treeId } });
  await db.userTreeEnrollment.upsert({
    where: { userId_treeId: { userId, treeId } },
    create: { userId, treeId, totalSkills },
    update: { totalSkills },
  });
}

/**
 * Marca una habilidad como completada. Valida que esté desbloqueada, otorga XP,
 * actualiza el rollup e inscribe automáticamente en el árbol si hiciera falta.
 * Todo en una transacción.
 */
export async function completeSkill(userId: string, skillId: string) {
  const skill = await db.skill.findUnique({
    where: { id: skillId },
    include: { tree: { select: { status: true } } },
  });
  if (!skill) throw new Error("Habilidad no encontrada.");
  // No se puede progresar en contenido no publicado (aunque no sea alcanzable
  // por la UI, el server action no debe confiar en ello).
  if (skill.tree.status !== "PUBLISHED") {
    throw new Error("Esta habilidad no está disponible.");
  }

  const completed = await completedSkillIds(userId, skill.treeId);
  if (completed.has(skillId)) return; // ya completada

  // Desbloqueo por progresión intra-hebra (no confiar en el cliente):
  // debe estar completo el nivel anterior de la MISMA rama.
  const treeSkills = await db.skill.findMany({
    where: { treeId: skill.treeId },
    select: { id: true, branch: true, tier: true },
  });
  if (!isUnlockedByStrand(skill, treeSkills, completed)) {
    throw new Error("Antes debes completar el nivel anterior de esta rama.");
  }

  const totalSkills = await db.skill.count({ where: { treeId: skill.treeId } });

  await db.$transaction(async (tx) => {
    await tx.userSkillProgress.upsert({
      where: { userId_skillId: { userId, skillId } },
      create: { userId, skillId, status: "COMPLETED", completedAt: new Date() },
      update: { status: "COMPLETED", completedAt: new Date() },
    });

    const completedCount = await tx.userSkillProgress.count({
      where: { userId, status: "COMPLETED", skill: { treeId: skill.treeId } },
    });

    await tx.userTreeEnrollment.upsert({
      where: { userId_treeId: { userId, treeId: skill.treeId } },
      create: {
        userId,
        treeId: skill.treeId,
        totalSkills,
        completedSkills: completedCount,
        earnedXp: skill.xpReward,
        lastActivityAt: new Date(),
      },
      update: {
        totalSkills,
        completedSkills: completedCount,
        earnedXp: { increment: skill.xpReward },
        lastActivityAt: new Date(),
      },
    });

    await tx.activityEvent.create({
      data: {
        userId,
        type: "skill_completed",
        payload: { skillId, treeId: skill.treeId, xp: skill.xpReward },
      },
    });
  });
}

/** Datos del panel principal del usuario. */
/**
 * Próximo objetivo recomendado: la primera habilidad disponible (desbloqueada y
 * sin completar) del árbol indicado, en orden. Es el "qué hago ahora".
 */
async function nextObjectiveFor(
  userId: string,
  treeId: string,
  treeSlug: string,
): Promise<{ title: string; href: string } | null> {
  const skills = await db.skill.findMany({
    where: { treeId },
    orderBy: { order: "asc" },
    select: { id: true, slug: true, title: true, branch: true, tier: true },
  });
  const completed = await completedSkillIds(userId, treeId);
  const states = computeStrandStates(skills, completed);

  // Progreso por hebra, para sugerir continuar una ya empezada.
  const branchDone = new Map<string, number>();
  for (const s of skills)
    if (completed.has(s.id))
      branchDone.set(s.branch ?? "", (branchDone.get(s.branch ?? "") ?? 0) + 1);

  const candidates = skills.filter((s) => states.get(s.id) === "available");
  candidates.sort((a, b) => {
    const pa = branchDone.get(a.branch ?? "") ?? 0;
    const pb = branchDone.get(b.branch ?? "") ?? 0;
    if (pb !== pa) return pb - pa; // hebra con más progreso primero
    return a.tier - b.tier; // luego el nivel más bajo
  });
  const nextSkill = candidates[0];
  return nextSkill
    ? {
        title: nextSkill.title,
        href: `/trees/${treeSlug}/skills/${nextSkill.slug}`,
      }
    : null;
}

export async function getUserDashboard(userId: string) {
  const enrollments = await db.userTreeEnrollment.findMany({
    where: { userId },
    orderBy: { lastActivityAt: "desc" },
    include: { tree: { include: { category: true } } },
  });

  const totalXp = enrollments.reduce((sum, e) => sum + e.earnedXp, 0);
  const completedSkills = enrollments.reduce(
    (sum, e) => sum + e.completedSkills,
    0,
  );

  // Tiempo estudiado ≈ minutos estimados de las habilidades completadas.
  const done = await db.userSkillProgress.findMany({
    where: { userId, status: "COMPLETED" },
    select: { skill: { select: { estimatedMinutes: true } } },
  });
  const minutes = done.reduce(
    (s, p) => s + (p.skill?.estimatedMinutes ?? 0),
    0,
  );

  // Próximo objetivo: en el árbol con actividad más reciente.
  const active = enrollments[0];
  const nextObjective = active
    ? await nextObjectiveFor(userId, active.treeId, active.tree.slug)
    : null;

  return {
    enrollments,
    totalXp,
    completedSkills,
    minutes,
    nextObjective,
    ...levelProgress(totalXp),
    streak: await currentStreak(userId),
  };
}

/** Perfil: el "árbol personal" del usuario, agrupado por categoría. */
export async function getUserProfile(userId: string) {
  const enrollments = await db.userTreeEnrollment.findMany({
    where: { userId },
    include: { tree: { include: { category: true } } },
  });

  const totalXp = enrollments.reduce((sum, e) => sum + e.earnedXp, 0);
  const completedSkills = enrollments.reduce(
    (sum, e) => sum + e.completedSkills,
    0,
  );
  const completedTrees = enrollments.filter(
    (e) => e.totalSkills > 0 && e.completedSkills >= e.totalSkills,
  ).length;

  // Ramas del árbol personal = categorías en las que el usuario tiene progreso.
  const branchesMap = new Map<
    string,
    {
      name: string;
      icon: string | null;
      xp: number;
      skills: number;
      total: number;
      trees: number;
    }
  >();
  for (const e of enrollments) {
    const cat = e.tree.category;
    const branch = branchesMap.get(cat.id) ?? {
      name: cat.name,
      icon: cat.icon,
      xp: 0,
      skills: 0,
      total: 0,
      trees: 0,
    };
    branch.xp += e.earnedXp;
    branch.skills += e.completedSkills;
    branch.total += e.totalSkills;
    branch.trees += 1;
    branchesMap.set(cat.id, branch);
  }

  const streak = await currentStreak(userId);
  const level = levelForXp(totalXp);

  const totalAll = enrollments.reduce((s, e) => s + e.totalSkills, 0);
  const overallPct =
    totalAll > 0 ? Math.round((completedSkills / totalAll) * 100) : 0;

  return {
    totalXp,
    level,
    streak,
    completedSkills,
    completedTrees,
    disciplinesStarted: branchesMap.size,
    overallPct,
    branches: [...branchesMap.values()].sort((a, b) => b.xp - a.xp),
    achievements: deriveAchievements({
      completedSkills,
      completedTrees,
      level,
      streak,
    }),
  };
}

/** Logros derivados (sin tabla, para el MVP). */
function deriveAchievements(stats: {
  completedSkills: number;
  completedTrees: number;
  level: number;
  streak: number;
}) {
  return [
    {
      key: "first-skill",
      label: "Primera habilidad",
      icon: "🌱",
      unlocked: stats.completedSkills >= 1,
    },
    {
      key: "ten-skills",
      label: "10 habilidades",
      icon: "🌿",
      unlocked: stats.completedSkills >= 10,
    },
    {
      key: "first-tree",
      label: "Primer árbol completado",
      icon: "🌳",
      unlocked: stats.completedTrees >= 1,
    },
    {
      key: "level-5",
      label: "Nivel 5",
      icon: "⭐",
      unlocked: stats.level >= 5,
    },
    {
      key: "streak-3",
      label: "Racha de 3 días",
      icon: "🔥",
      unlocked: stats.streak >= 3,
    },
    {
      key: "twenty-five-skills",
      label: "25 habilidades",
      icon: "🍃",
      unlocked: stats.completedSkills >= 25,
    },
    {
      key: "level-10",
      label: "Nivel 10",
      icon: "🌟",
      unlocked: stats.level >= 10,
    },
    {
      key: "streak-7",
      label: "Racha de 7 días",
      icon: "⚡",
      unlocked: stats.streak >= 7,
    },
  ];
}

/** Meta de XP diaria por defecto (motivación: un objetivo pequeño y alcanzable). */
const DAILY_GOAL_XP = 30;

/**
 * Meta diaria: XP conseguida HOY frente al objetivo. Cuenta la XP de cualquier
 * disciplina (completar habilidades + repasos), así el hábito es global y no
 * por árbol. Reutilizable por cualquier disciplina futura sin cambios.
 */
export async function getDailyGoal(userId: string): Promise<{
  earned: number;
  goal: number;
  pct: number;
  met: boolean;
}> {
  const today = new Date().toISOString().slice(0, 10);
  const start = new Date(`${today}T00:00:00.000Z`);
  const events = await db.activityEvent.findMany({
    where: {
      userId,
      createdAt: { gte: start },
      type: { in: ["skill_completed", "skill_reviewed"] },
    },
    select: { payload: true },
  });
  const earned = events.reduce((sum, e) => {
    const xp = (e.payload as { xp?: number } | null)?.xp;
    return sum + (typeof xp === "number" ? xp : 0);
  }, 0);
  const goal = DAILY_GOAL_XP;
  return {
    earned,
    goal,
    pct: goal > 0 ? Math.min(100, Math.round((earned / goal) * 100)) : 0,
    met: earned >= goal,
  };
}

/** Racha actual (días consecutivos con actividad, terminando hoy o ayer). */
async function currentStreak(userId: string): Promise<number> {
  const events = await db.activityEvent.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    select: { createdAt: true },
    take: 200,
  });
  if (events.length === 0) return 0;

  const days = new Set(
    events.map((e) => e.createdAt.toISOString().slice(0, 10)),
  );

  let streak = 0;
  const cursor = new Date();
  // Permite que la racha "siga viva" si hubo actividad hoy o ayer.
  const today = cursor.toISOString().slice(0, 10);
  const yesterday = new Date(cursor.getTime() - 86400000)
    .toISOString()
    .slice(0, 10);
  if (!days.has(today) && !days.has(yesterday)) return 0;
  if (!days.has(today)) cursor.setDate(cursor.getDate() - 1);

  while (days.has(cursor.toISOString().slice(0, 10))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}
