import bcrypt from "bcryptjs";

/**
 * Servicio de contraseñas. Aísla la librería de hashing detrás de funciones
 * propias: si algún día cambiamos bcrypt por argon2, solo se toca este archivo.
 */

const SALT_ROUNDS = 12;

/** Genera el hash de una contraseña en claro. */
export function hashPassword(plain: string): Promise<string> {
  return bcrypt.hash(plain, SALT_ROUNDS);
}

/** Verifica una contraseña en claro contra su hash. */
export function verifyPassword(plain: string, hash: string): Promise<boolean> {
  return bcrypt.compare(plain, hash);
}
