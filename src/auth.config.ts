import type { NextAuthConfig } from "next-auth";
import type { Role } from "@prisma/client";

import { isAdminEmail } from "@/server/admin-emails";

/**
 * Configuración base de Auth.js, SIN proveedores ni acceso a base de datos.
 *
 * Es "edge-safe": la usa el middleware para proteger rutas sin arrastrar Prisma
 * al edge runtime. La configuración completa (con el proveedor de credenciales
 * y Prisma) vive en `src/auth.ts` y se ejecuta en Node.
 */

const AUTH_ROUTES = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
];

/** Rutas que requieren sesión iniciada. */
const PROTECTED_PREFIXES = ["/dashboard"];

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [], // se añaden en src/auth.ts
  callbacks: {
    /**
     * Controla el acceso a las rutas desde el middleware.
     * - Sin sesión en ruta protegida → redirige a /login.
     * - Con sesión en una página de auth → redirige a /dashboard.
     */
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const { pathname } = nextUrl;

      const isProtected = PROTECTED_PREFIXES.some((p) =>
        pathname.startsWith(p),
      );
      const isAuthRoute = AUTH_ROUTES.some((p) => pathname.startsWith(p));

      if (isProtected) return isLoggedIn;

      if (isAuthRoute && isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }

      return true;
    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        if (user.email) token.email = user.email;
      }
      // El fundador (lista blanca de correos) es ADMIN aunque su rol en la base
      // de datos no lo sea. Se reevalúa en CADA token, así las sesiones ya
      // iniciadas también se actualizan sin volver a entrar y sin depender de
      // migraciones (que ya no corren dentro del build).
      if (isAdminEmail(token.email)) token.role = "ADMIN";
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as Role;
        if (token.email) session.user.email = token.email;
      }
      return session;
    },
  },
} satisfies NextAuthConfig;
