import type { Role } from "@prisma/client";

/**
 * Lista blanca de ADMINISTRADORES (fundadores) y utilidades PURAS derivadas.
 *
 * Módulo sin dependencias de Prisma ni de `auth()`: es "edge-safe" y no crea
 * ciclos de importación, por lo que puede usarse tanto en el JWT (auth.config,
 * edge) como en la capa de acceso del servidor (access.ts, node).
 *
 * El fundador se identifica por su CORREO. Así el acceso de revisión NO depende
 * de que su `role` en la base de datos esté migrado a ADMIN (las migraciones ya
 * no corren dentro del build): basta con estar en esta lista blanca.
 */

/** Lista blanca por defecto (fundador). Se puede sobrescribir con ADMIN_EMAILS. */
const DEFAULT_ADMIN_EMAILS = ["keicymenapalacios@gmail.com"];

/** Correos con permiso de administrador (normalizados a minúsculas). */
export function adminEmails(): string[] {
  const fromEnv = (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  return (fromEnv.length ? fromEnv : DEFAULT_ADMIN_EMAILS).map((e) =>
    e.toLowerCase(),
  );
}

export function isAdminEmail(email?: string | null): boolean {
  return !!email && adminEmails().includes(email.toLowerCase());
}

export function isAdminRole(role?: Role | null): boolean {
  return role === "ADMIN";
}

/** Rol efectivo de un visitante a partir de su correo y su rol en BD. */
export function effectiveRole(email?: string | null, dbRole?: Role | null): Role {
  return isAdminEmail(email) ? "ADMIN" : (dbRole ?? "USER");
}

/** ¿El correo debe recibir rol ADMIN al registrarse? (arranque del fundador). */
export function roleForNewUser(email: string): Role {
  return isAdminEmail(email) ? "ADMIN" : "USER";
}
