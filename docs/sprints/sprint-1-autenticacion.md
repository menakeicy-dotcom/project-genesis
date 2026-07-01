# Sprint 1 — Autenticación y base del proyecto

- **Estado:** Completado — pendiente de aprobación de la fundadora.
- **Fecha:** 2026-07-01.

## Objetivo

Sentar una base sólida y modular con el sistema de autenticación completo y el
esqueleto de la aplicación. **Sin** categorías, árboles, progreso ni
gamificación (eso llega en sprints posteriores).

## Qué incluye

- **Scaffold** Next.js 15 (App Router) + TypeScript + Tailwind CSS v4.
- **Autenticación** con Auth.js v5 (proveedor de credenciales):
  - Registro (con validación y hash de contraseña con bcrypt).
  - Inicio de sesión.
  - Recuperación de contraseña (token seguro de un solo uso, con expiración).
- **Modo claro / oscuro** (next-themes) desde el MVP. Azul principal; verde solo
  para "crecimiento".
- **Diseño responsive** y componentes de UI limpios (Button, Input, Card, etc.).
- **Rutas protegidas** mediante middleware (edge-safe) + verificación en el
  layout de la app.
- **Arquitectura modular** (`src/modules/auth`) preparada para futuros módulos.
- Calidad: ESLint + Prettier; `typecheck`, `lint` y `build` en verde.

## Estructura relevante

```
src/
├── auth.config.ts            # config edge-safe (middleware)
├── auth.ts                   # config Node (credenciales + Prisma)
├── middleware.ts (raíz)      # protección de rutas
├── app/
│   ├── (marketing)/          # landing pública
│   ├── (auth)/               # login, register, forgot/reset password
│   ├── (app)/dashboard/      # zona autenticada (placeholder)
│   └── api/auth/[...nextauth]
├── modules/auth/             # schemas, actions, services, components
├── components/ (ui, theme)   # design system base
└── server/db.ts              # cliente Prisma único
prisma/schema.prisma          # User, Account, Session, PasswordResetToken, Role
```

## Decisiones destacadas

1. **Auth.js v5 con configuración dividida** (`auth.config.ts` sin Prisma para el
   middleware en edge; `auth.ts` con Prisma en Node). Evita meter la BD en el
   edge runtime.
2. **Contraseñas con bcrypt** (12 rounds), aisladas en un servicio propio.
3. **Tokens de recuperación hasheados en BD** (solo se guarda el SHA-256), de un
   solo uso y con caducidad de 30 minutos.
4. **Anti-enumeración**: "he olvidado mi contraseña" responde igual exista o no
   el correo.
5. **Envío de correo tras una interfaz `Mailer`**: en desarrollo imprime el
   enlace en consola; en producción se enchufa un proveedor por configuración,
   sin tocar la lógica. Así no dependemos de una API de pago en el MVP.

## Cómo ejecutarlo (desarrollo)

1. `cp .env.example .env` y rellenar `DATABASE_URL` y `AUTH_SECRET`.
2. `pnpm db:push` (crea las tablas en PostgreSQL).
3. `pnpm dev`.

## Nota de entorno (Prisma)

En el entorno de ejecución remoto, el descargador de binarios de Prisma no
respeta el proxy de egress; los motores se obtuvieron manualmente para poder
verificar `generate`/`build`. En un entorno normal (local, Vercel) `prisma
generate` funciona sin intervención.

## Mejoras futuras (no incluidas, a propósito)

- Inicio de sesión automático tras el registro.
- Verificación de email.
- OAuth (Google/GitHub) — el esquema ya lo contempla.
- Límite de intentos (rate limiting) en login y recuperación.
- Adaptador de correo real (Resend/SMTP).
- Tests automatizados (Vitest + Playwright) del flujo de auth.
