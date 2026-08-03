import "server-only";

import type { Role } from "@prisma/client";

import { auth } from "@/auth";
import { isAdminEmail, isAdminRole } from "@/server/admin-emails";

/**
 * CONTROL DE ACCESO Y VISIBILIDAD — base de un sistema de roles.
 *
 * SkillTree distingue quién puede ver contenido NO publicado (borradores). Hoy
 * solo el/los fundador(es) —modo revisión previo al lanzamiento— pero está
 * pensado para crecer a un sistema de roles completo sin cambiar los sitios de
 * llamada: las consultas piden `visibleTreeStatuses()` y esta capa decide.
 *
 * El fundador se reconoce de forma ROBUSTA: por su rol ADMIN en la sesión (que
 * el JWT fuerza a partir de la lista blanca de correos) o directamente por su
 * correo. Así el acceso de revisión no depende del estado de la base de datos.
 */

// Reexport de utilidades puras para no cambiar los sitios de importación.
export {
  adminEmails,
  effectiveRole,
  isAdminEmail,
  isAdminRole,
  roleForNewUser,
} from "@/server/admin-emails";

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
    // Rol o correo: cualquiera de los dos basta para el modo fundador.
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
