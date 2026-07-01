import { createHash, randomBytes } from "crypto";

/**
 * Servicio de tokens de recuperación de contraseña.
 *
 * Seguridad: al usuario se le envía el token EN CLARO (en el enlace), pero en la
 * base de datos solo guardamos su HASH (SHA-256). Así, aunque se filtre la BD,
 * los tokens no son utilizables. Son de un solo uso y con expiración.
 */

/** Minutos de validez del token de recuperación. */
export const RESET_TOKEN_TTL_MINUTES = 30;

/** Genera un token en claro (para el enlace) y su hash (para la BD). */
export function createResetToken(): { token: string; tokenHash: string } {
  const token = randomBytes(32).toString("hex");
  return { token, tokenHash: hashToken(token) };
}

/** Calcula el hash determinista de un token para buscarlo/compararlo en la BD. */
export function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

/** Fecha de expiración a partir de ahora. */
export function resetTokenExpiry(): Date {
  return new Date(Date.now() + RESET_TOKEN_TTL_MINUTES * 60 * 1000);
}
