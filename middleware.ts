import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";

/**
 * Middleware de autenticación. Usa la configuración edge-safe (sin Prisma) para
 * proteger rutas según `authConfig.callbacks.authorized`.
 */
export default NextAuth(authConfig).auth;

export const config = {
  // Ejecuta el middleware en todo salvo estáticos, imágenes y la API de auth.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
