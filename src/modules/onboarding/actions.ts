"use server";

import { auth } from "@/auth";
import { markWelcomeSeen as markWelcomeSeenService } from "@/modules/onboarding/services";

/**
 * Marca la animación de bienvenida como vista para el usuario autenticado.
 *
 * Se llama cuando el usuario termina la introducción o pulsa "Omitir". Es
 * idempotente: volver a llamarla no tiene efecto adverso.
 */
export async function markWelcomeSeenAction() {
  const session = await auth();
  if (!session?.user) return { error: "Necesitas iniciar sesión." };

  try {
    await markWelcomeSeenService(session.user.id);
  } catch {
    return { error: "No se pudo guardar el estado de la bienvenida." };
  }
  return { success: true };
}
