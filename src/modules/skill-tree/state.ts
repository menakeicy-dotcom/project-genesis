/**
 * Cálculo (puro) del estado de cada nodo del árbol para un usuario.
 * No accede a la base de datos: recibe la estructura + lo completado.
 * Regla: los estados NO se almacenan, se derivan (ver doc 04/05).
 */

export type NodeState = "completed" | "available" | "locked";

/**
 * ── MODELO DE PROGRESIÓN DEFINITIVO ──────────────────────────────────────────
 * El árbol principal representa las GRANDES habilidades (hebras/ramas), no un
 * orden obligatorio. La libertad vive entre hebras: puedes empezar cualquiera.
 * La progresión vive DENTRO de cada hebra: un nivel se desbloquea al completar
 * el nivel anterior de esa MISMA hebra.
 *
 * Regla (pura, agnóstica de disciplina): una habilidad está disponible si todas
 * las de su misma hebra con `tier` inferior están completadas. El primer nivel
 * de cada hebra está abierto desde el inicio.
 */
export interface TierSkill {
  id: string;
  branch: string | null;
  tier: number;
}

/** ¿Está desbloqueada según la progresión intra-hebra? */
export function isUnlockedByStrand(
  skill: TierSkill,
  treeSkills: TierSkill[],
  completed: Set<string>,
): boolean {
  return !treeSkills.some(
    (s) =>
      s.branch === skill.branch &&
      s.tier < skill.tier &&
      !completed.has(s.id),
  );
}

/** Mapa skillId → estado usando la progresión intra-hebra. */
export function computeStrandStates(
  treeSkills: TierSkill[],
  completed: Set<string>,
): Map<string, NodeState> {
  const states = new Map<string, NodeState>();
  for (const s of treeSkills) {
    states.set(
      s.id,
      completed.has(s.id)
        ? "completed"
        : isUnlockedByStrand(s, treeSkills, completed)
          ? "available"
          : "locked",
    );
  }
  return states;
}
