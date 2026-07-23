import "server-only";

import { db } from "@/server/db";
import type { PracticeItem } from "@/modules/skill-tree/lesson";

/**
 * REPASO INTELIGENTE — práctica de recuperación espaciada (retrieval + spacing).
 *
 * Basado en las dos técnicas con más respaldo empírico (Dunlosky et al., 2013):
 * hacer *quizzes* de recuerdo (testing effect) y espaciarlos en el tiempo
 * (spacing effect). Reutiliza la práctica que YA existe en cada lección
 * (`lesson.practice`), así toda disciplina —Inglés, Programación y las
 * futuras— gana repaso automáticamente, sin escribir contenido nuevo.
 *
 * El estado de programación NO usa una tabla nueva: se DERIVA del historial de
 * `ActivityEvent` (eventos `skill_reviewed`). Esto evita migraciones de esquema
 * y mantiene el motor agnóstico.
 */

/** Escalera de intervalos tipo Leitner, en días, por "caja" alcanzada. */
const LADDER_DAYS = [1, 3, 7, 16, 35, 60];
const DAY_MS = 86_400_000;
/** Umbral de aprobado de una sesión de repaso (para subir de caja). */
const PASS_RATIO = 0.6;

/** Días hasta el próximo repaso según la caja (0 = repasar ya). */
export function intervalDaysForBox(box: number): number {
  if (box <= 0) return 0;
  return LADDER_DAYS[Math.min(box, LADDER_DAYS.length) - 1]!;
}

interface ReviewEventPayload {
  skillId?: string;
  treeId?: string;
  correct?: number;
  total?: number;
  box?: number;
}

/** Una habilidad lista para repasar, con sus ítems de práctica. */
export interface ReviewCard {
  skillId: string;
  slug: string;
  title: string;
  treeSlug: string;
  categoryIcon: string;
  categoryName: string;
  box: number;
  practice: PracticeItem[];
}

interface LessonContent {
  lesson?: { practice?: PracticeItem[] };
}

/** Última "caja" y fecha de repaso por habilidad, a partir del historial. */
async function reviewStateBySkill(
  userId: string,
): Promise<Map<string, { box: number; at: Date }>> {
  const events = await db.activityEvent.findMany({
    where: { userId, type: "skill_reviewed" },
    orderBy: { createdAt: "asc" },
    select: { payload: true, createdAt: true },
  });
  const map = new Map<string, { box: number; at: Date }>();
  for (const e of events) {
    const p = (e.payload ?? {}) as ReviewEventPayload;
    if (!p.skillId) continue;
    map.set(p.skillId, { box: p.box ?? 1, at: e.createdAt });
  }
  return map;
}

/**
 * Habilidades COMPLETADAS con práctica disponible, anotadas con si están "due".
 * Una habilidad nunca repasada está lista desde el momento en que se completa
 * (primer recuerdo tras aprender); luego se espacia según la escalera.
 */
async function reviewableSkills(userId: string) {
  const done = await db.userSkillProgress.findMany({
    // Solo se repasa contenido PUBLICADO: si un árbol se despublica (pasa a
    // DRAFT/ARCHIVED), sus habilidades dejan de servirse en el repaso, igual
    // que dejan de verse en el catálogo y en las páginas de habilidad.
    where: { userId, status: "COMPLETED", skill: { tree: { status: "PUBLISHED" } } },
    select: {
      completedAt: true,
      skill: {
        select: {
          id: true,
          slug: true,
          title: true,
          content: true,
          tree: { select: { slug: true, category: { select: { icon: true, name: true } } } },
        },
      },
    },
  });

  const state = await reviewStateBySkill(userId);
  const now = Date.now();

  return done
    .map((row) => {
      const skill = row.skill;
      const content = (skill.content ?? {}) as LessonContent;
      const practice = content.lesson?.practice ?? [];
      if (practice.length === 0) return null;
      const st = state.get(skill.id);
      const box = st?.box ?? 0;
      const anchor = st?.at ?? row.completedAt ?? new Date(0);
      const dueAt = anchor.getTime() + intervalDaysForBox(box) * DAY_MS;
      return {
        card: {
          skillId: skill.id,
          slug: skill.slug,
          title: skill.title,
          treeSlug: skill.tree.slug,
          categoryIcon: skill.tree.category.icon,
          categoryName: skill.tree.category.name,
          box,
          practice,
        } as ReviewCard,
        due: now >= dueAt,
        dueAt,
      };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);
}

/** Resumen para el panel: cuántos repasos tocan y cuántos hay en total. */
export async function getReviewSummary(
  userId: string,
): Promise<{ due: number; total: number }> {
  const all = await reviewableSkills(userId);
  return { due: all.filter((x) => x.due).length, total: all.length };
}

/**
 * Tarjetas para una sesión de repaso: primero las "due" (más urgentes por caja
 * baja), y si no hay suficientes se completa con las más próximas a tocar, para
 * que la sesión nunca quede vacía si el usuario ya tiene material.
 */
export async function getReviewSession(
  userId: string,
  limit = 8,
): Promise<ReviewCard[]> {
  const all = await reviewableSkills(userId);
  const due = all
    .filter((x) => x.due)
    .sort((a, b) => a.card.box - b.card.box || a.dueAt - b.dueAt);
  const notDue = all
    .filter((x) => !x.due)
    .sort((a, b) => a.dueAt - b.dueAt);
  return [...due, ...notDue].slice(0, limit).map((x) => x.card);
}

/**
 * Registra el resultado de repasar una habilidad. Sube o baja de caja (Leitner),
 * otorga algo de XP si se aprueba y mantiene viva la racha. Idempotencia no es
 * crítica: cada repaso es un evento nuevo con su marca de tiempo.
 */
export async function recordReview(
  userId: string,
  skillId: string,
  correct: number,
  total: number,
): Promise<{ xp: number; passed: boolean; box: number }> {
  const skill = await db.skill.findUnique({
    where: { id: skillId },
    select: { treeId: true, xpReward: true, tree: { select: { status: true } } },
  });
  if (!skill) throw new Error("Habilidad no encontrada.");
  // Solo se repasa contenido publicado (coherente con el mazo de repaso).
  if (skill.tree.status !== "PUBLISHED") {
    throw new Error("Esta habilidad no está disponible.");
  }

  // Solo cuentan como repasables las ya completadas (no se puede repasar lo no aprendido).
  const progress = await db.userSkillProgress.findUnique({
    where: { userId_skillId: { userId, skillId } },
    select: { status: true },
  });
  if (progress?.status !== "COMPLETED") {
    throw new Error("Solo puedes repasar habilidades completadas.");
  }

  const state = await reviewStateBySkill(userId);
  const prevBox = state.get(skillId)?.box ?? 0;
  const passed = total > 0 && correct / total >= PASS_RATIO;
  const box = passed ? Math.min(prevBox + 1, LADDER_DAYS.length) : 1;
  const xp = passed ? Math.max(2, Math.round(skill.xpReward * 0.2)) : 0;

  await db.$transaction(async (tx) => {
    await tx.activityEvent.create({
      data: {
        userId,
        type: "skill_reviewed",
        payload: { skillId, treeId: skill.treeId, correct, total, box, xp },
      },
    });
    if (xp > 0) {
      await tx.userTreeEnrollment.update({
        where: { userId_treeId: { userId, treeId: skill.treeId } },
        data: { earnedXp: { increment: xp }, lastActivityAt: new Date() },
      });
    }
  });

  return { xp, passed, box };
}
