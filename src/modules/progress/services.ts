import "server-only";

import { db } from "@/server/db";
import {
  computeNodeStates,
  isUnlocked,
  type NodeState,
} from "@/modules/skill-tree/state";
import { levelForXp, levelProgress } from "@/modules/progress/xp";

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

/** Estado por nodo de un árbol para un usuario (o vacío si no hay sesión). */
export async function getTreeNodeStates(
  userId: string | undefined,
  treeId: string,
  skills: {
    id: string;
    isRoot: boolean;
    prerequisites: { prerequisiteId: string; group: string | null }[];
  }[],
): Promise<Map<string, NodeState>> {
  const completed = userId
    ? await completedSkillIds(userId, treeId)
    : new Set<string>();
  return computeNodeStates(skills, completed);
}

/** Inscripción del usuario en un árbol, si existe. */
export async function getEnrollment(userId: string, treeId: string) {
  return db.userTreeEnrollment.findUnique({
    where: { userId_treeId: { userId, treeId } },
  });
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
    include: { prerequisites: true },
  });
  if (!skill) throw new Error("Habilidad no encontrada.");

  const completed = await completedSkillIds(userId, skill.treeId);
  if (completed.has(skillId)) return; // ya completada

  // Verifica desbloqueo en el servidor (no confiar en el cliente).
  if (!isUnlocked(skill, completed)) {
    throw new Error("Esta habilidad aún está bloqueada.");
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
    include: { prerequisites: true },
  });
  const completed = await completedSkillIds(userId, treeId);
  const nextSkill = skills.find(
    (s) => !completed.has(s.id) && isUnlocked(s, completed),
  );
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
