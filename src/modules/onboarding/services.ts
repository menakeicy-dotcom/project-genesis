import { db } from "@/server/db";

/**
 * Indica si el usuario ya vio la animación de bienvenida.
 *
 * La bienvenida cinematográfica se muestra una sola vez por cuenta (la primera
 * vez que se entra tras registrarse). Guardamos el estado en la base de datos
 * (columna `User.hasSeenWelcome`) en lugar de en `localStorage` para que la
 * decisión sea consistente en cualquier dispositivo o navegador.
 */
export async function hasSeenWelcome(userId: string): Promise<boolean> {
  const user = await db.user.findUnique({
    where: { id: userId },
    select: { hasSeenWelcome: true },
  });
  // Si por alguna razón no se encuentra el usuario, no forzamos la animación.
  return user?.hasSeenWelcome ?? true;
}

/** Marca la animación de bienvenida como vista para un usuario. */
export async function markWelcomeSeen(userId: string): Promise<void> {
  await db.user.update({
    where: { id: userId },
    data: { hasSeenWelcome: true },
  });
}
