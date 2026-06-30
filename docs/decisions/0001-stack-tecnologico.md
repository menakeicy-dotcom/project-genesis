# ADR-0001: Stack tecnológico

- **Estado:** Propuesta (pendiente de confirmación de la fundadora)
- **Fecha:** 2026-06-30
- **Decisores:** CTO + fundadora

## Contexto

Vamos a construir un **producto web moderno** orientado a ser usado por usuarios
reales y monetizado (probablemente vía suscripción / SaaS). El stack debe
optimizar tres objetivos del proyecto:

1. **Velocidad de validación** — llegar a un MVP utilizable cuanto antes.
2. **Escalabilidad y mantenibilidad** — crecer sin reescrituras.
3. **Seguridad y rendimiento** — adecuados para un producto de pago.

Además, debe permitir que un equipo pequeño (incluso una persona) sea
productivo, con un ecosistema maduro y contratación de talento sencilla.

> Esta es una **recomendación**. Algunas piezas (sobre todo pagos y auth)
> dependen del modelo de negocio, que aún está por definir.

## Decisión

### Lenguaje — TypeScript

Tipado estático de extremo a extremo (frontend, backend y modelo de datos).
Reduce errores en tiempo de ejecución, mejora el autocompletado y hace el
refactor seguro. Es el estándar de facto en web moderna.

### Framework — Next.js (App Router)

Framework full-stack sobre React. Permite tener **frontend y API en un único
proyecto**, con renderizado en servidor (SEO y rendimiento), Server Components,
y rutas de API integradas.

- **Por qué y no alternativas:** frente a una SPA con React + backend separado
  (Express/Nest), Next reduce la complejidad operativa (un solo despliegue) y
  acelera el MVP. Frente a Remix/SvelteKit/Astro, Next tiene el ecosistema más
  grande, mejor documentación y más talento disponible.

### Estilos / UI — Tailwind CSS + shadcn/ui

Tailwind permite construir UI consistente y responsive sin salir del marcado.
`shadcn/ui` aporta componentes accesibles (Radix) que **se copian al proyecto**
(no es una dependencia opaca), por lo que son totalmente personalizables.

### Base de datos — PostgreSQL

Relacional, robusta, transaccional y muy escalable. Soporta JSON cuando se
necesita flexibilidad. Estándar de la industria con hosting gestionado barato
(Neon, Supabase, RDS).

- **Por qué y no alternativas:** frente a NoSQL (MongoDB), la mayoría de
  productos SaaS tienen datos relacionales (usuarios, suscripciones, equipos);
  empezar relacional evita dolores futuros. PostgreSQL cubre además casos
  semi-estructurados con `jsonb`.

### ORM — Prisma

Acceso a datos **tipado**, con migraciones versionadas y un esquema declarativo
único como fuente de verdad. Excelente experiencia de desarrollo y encaja
naturalmente con TypeScript + PostgreSQL.

### Autenticación — Auth.js (NextAuth)

Estándar abierto, sin coste por usuario, con múltiples proveedores (email,
OAuth, etc.). Si más adelante se prioriza time-to-market sobre control, se
podría evaluar un servicio gestionado (Clerk) — quedaría como ADR futuro.

### Pagos — Stripe

Estándar de la industria para cobros y **suscripciones**, con buena tooling para
periodos de prueba, facturación y webhooks. Solo se integrará si el modelo de
negocio lo requiere.

### Testing — Vitest + Playwright

- **Vitest:** rápido, compatible con el ecosistema TS/Vite, para unitarios e
  integración.
- **Playwright:** pruebas end-to-end fiables en navegadores reales.

### Calidad de código — ESLint + Prettier + Husky + lint-staged

Linting y formateo automáticos, ejecutados en un hook de **pre-commit** para que
nada de baja calidad entre al repositorio.

### Hosting / despliegue — Vercel + Postgres gestionado

Despliegue continuo desde Git con fricción mínima, ideal para Next.js. La base
de datos en un proveedor gestionado (Neon/Supabase). Migrable a otro proveedor
si fuera necesario, ya que el stack no depende de servicios propietarios
exclusivos.

## Consecuencias

- **Positivas:**
  - Un solo lenguaje y un solo repositorio para todo: menos fricción.
  - Time-to-market rápido sin sacrificar escalabilidad.
  - Ecosistema enorme → fácil resolver problemas y contratar.
  - Tipado de extremo a extremo → menos bugs y refactors seguros.

- **Costes / deuda asumida:**
  - Cierto acoplamiento con el ecosistema Next/Vercel (mitigable: Next puede
    desplegarse en otros proveedores).
  - Curva de aprendizaje del App Router y los Server Components.

- **Riesgos y mitigaciones:**
  - *Vendor lock-in* → se eligen piezas portables y estándares abiertos.
  - Decisiones de auth/pagos dependientes del negocio → se confirmarán al
    definir el producto, sin bloquear la base.

## Pendiente de confirmar

- Modelo de negocio → define si entra Stripe y qué tipo de cobro.
- Necesidad real de SSR/SEO → confirma el peso de Next vs. una SPA.
- Gestor de paquetes (recomendado: **pnpm** por velocidad y eficiencia de disco).
