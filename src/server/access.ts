import "server-only";

import type { Role } from "@prisma/client";

import { auth } from "@/auth";

/**
 * CONTROL DE ACCESO Y VISIBILIDAD — base de un sistema de roles.
 *
 * SkillTree distingue quién puede ver contenido NO publicado (borradores). Hoy
 * solo el/los fundador(es) —modo revisión previo al lanzamiento— pero está
 * pensado para crecer a un sistema de roles completo (USER / CREATOR / ADMIN)
 * sin cambiar los sitios de llamada: las consultas piden `visibleTreeStatuses()`
 * y esta capa decide, no cada pantalla.
 *
 * El fundador se identifica por DOS vías (cinturón y tirantes), ninguna es un
 * hack: (1) su `role` en la base de datos es ADMIN, y (2) su correo está en una
 * lista blanca configurable (`ADMIN_EMAILS`). La lista blanca permite arrancar
 * el primer administrador sin tocar la base de datos a mano.
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

/** ¿El correo debe recibir rol ADMIN al registrarse? (arranque del fundador). */
export function roleForNewUser(email: string): Role {
  return isAdminEmail(email) ? "ADMIN" : "USER";
}

/** Contexto del visitante actual (sesión + si es administrador/fundador). */
export async function getViewer(): Promise<{
  userId: string | null;
  email: string | null;
  role: Role | null;
  isAdmin: boolean;
}> {
  const session = await auth();
  const email = session?.user?.email ?? null;
  const role = (session?.user?.role as Role | undefined) ?? null;
  return {
    userId: session?.user?.id ?? null,
    email,
    role,
    isAdmin: isAdminRole(role) || isAdminEmail(email),
  };
}

/** ¿El visitante actual puede ver contenido no publicado (borradores)? */
export async function canSeeDrafts(): Promise<boolean> {
  return (await getViewer()).isAdmin;
}

/**
 * Estados de árbol visibles para el visitante actual. Un administrador ve
 * también los BORRADORES (revisión); cualquier otro, solo lo PUBLICADO. Los
 * ARCHIVADOS no se muestran a nadie.
 */
export async function visibleTreeStatuses(): Promise<("PUBLISHED" | "DRAFT")[]> {
  return (await canSeeDrafts()) ? ["PUBLISHED", "DRAFT"] : ["PUBLISHED"];
}
