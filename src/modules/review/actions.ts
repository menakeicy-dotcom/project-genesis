"use server";

import { revalidatePath } from "next/cache";

import { auth } from "@/auth";
import { recordReview } from "@/modules/review/services";

/** Registra el resultado de repasar una habilidad para el usuario autenticado. */
export async function recordReviewAction(
  skillId: string,
  correct: number,
  total: number,
) {
  const session = await auth();
  if (!session?.user) return { error: "Necesitas iniciar sesión." };
  try {
    const result = await recordReview(session.user.id, skillId, correct, total);
    revalidatePath("/dashboard");
    revalidatePath("/repaso");
    return { success: true, ...result };
  } catch (e) {
    return { error: e instanceof Error ? e.message : "No se pudo registrar." };
  }
}
