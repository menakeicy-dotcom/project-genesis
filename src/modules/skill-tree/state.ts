/**
 * Cálculo (puro) del estado de cada nodo del árbol para un usuario.
 * No accede a la base de datos: recibe la estructura + lo completado.
 * Regla: los estados NO se almacenan, se derivan (ver doc 04/05).
 */

export type NodeState = "completed" | "available" | "locked";

export interface SkillLike {
  id: string;
  isRoot: boolean;
  prerequisites: { prerequisiteId: string; group: string | null }[];
}

/**
 * Reglas de desbloqueo:
 * - Prerrequisitos sin grupo → todos obligatorios (AND).
 * - Prerrequisitos del mismo grupo → basta uno (OR).
 * - Grupos distintos → se combinan con AND.
 */
export function isUnlocked(skill: SkillLike, completed: Set<string>): boolean {
  if (skill.isRoot || skill.prerequisites.length === 0) return true;

  const ungrouped = skill.prerequisites.filter((p) => !p.group);
  if (!ungrouped.every((p) => completed.has(p.prerequisiteId))) return false;

  const groups = new Map<string, string[]>();
  for (const p of skill.prerequisites) {
    if (!p.group) continue;
    const list = groups.get(p.group) ?? [];
    list.push(p.prerequisiteId);
    groups.set(p.group, list);
  }
  for (const ids of groups.values()) {
    if (!ids.some((id) => completed.has(id))) return false;
  }
  return true;
}

/** Mapa skillId → estado, a partir del conjunto de habilidades completadas. */
export function computeNodeStates(
  skills: SkillLike[],
  completed: Set<string>,
): Map<string, NodeState> {
  const states = new Map<string, NodeState>();
  for (const skill of skills) {
    if (completed.has(skill.id)) {
      states.set(skill.id, "completed");
    } else if (isUnlocked(skill, completed)) {
      states.set(skill.id, "available");
    } else {
      states.set(skill.id, "locked");
    }
  }
  return states;
}
