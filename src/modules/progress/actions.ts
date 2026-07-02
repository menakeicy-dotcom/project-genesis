"use server";

import { revalidatePath } from "next/cache";

import { auth } from "@/auth";
import {
  completeSkill as completeSkillService,
  enrollInTree as enrollInTreeService,
} from "@/modules/progress/services";
import { db } from "@/server/db";

/** Inscribe al usuario autenticado en un árbol. */
export async function enrollAction(treeId: string, treeSlug: string) {
  const session = await auth();
  if (!session?.user) return { error: "Necesitas iniciar sesión." };

  await enrollInTreeService(session.user.id, treeId);
  revalidatePath(`/trees/${treeSlug}`);
  revalidatePath("/dashboard");
  return { success: true };
}

/** Marca una habilidad como completada para el usuario autenticado. */
export async function completeSkillAction(skillId: string) {
  const session = await auth();
  if (!session?.user) return { error: "Necesitas iniciar sesión." };

  try {
    await completeSkillService(session.user.id, skillId);
  } catch (e) {
    return { error: e instanceof Error ? e.message : "No se pudo completar." };
  }

  // Revalida las vistas afectadas.
  const skill = await db.skill.findUnique({
    where: { id: skillId },
    include: { tree: true },
  });
  if (skill) {
    revalidatePath(`/trees/${skill.tree.slug}`);
    revalidatePath(`/trees/${skill.tree.slug}/skills/${skill.slug}`);
  }
  revalidatePath("/dashboard");
  revalidatePath("/profile");
  return { success: true };
}
