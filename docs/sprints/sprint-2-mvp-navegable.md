# Sprint 2 — MVP navegable (cobertura)

- **Estado:** Completado — pendiente de aprobación.
- **Fecha:** 2026-07-02.
- **Objetivo:** de "profundidad" a "cobertura": todas las pantallas principales
  existen y están conectadas, con funciones básicas pero un recorrido completo.

## Recorrido de principio a fin (verificado en ejecución)

registro → inicio de sesión → onboarding → **explorar** categorías → **categoría**
→ **árbol interactivo** (React Flow) → **habilidad** (recursos + completar) →
XP/desbloqueo → **panel** con progreso → **perfil** (árbol personal, ramas,
logros).

## Pantallas añadidas

- `/dashboard` — saludo, nivel/XP, racha, tus árboles con progreso, estado vacío.
- `/explore` y `/explore/[categoría]` — catálogo de categorías y árboles.
- `/trees/[árbol]` — árbol interactivo con estados por nodo
  (completado/disponible/bloqueado) y barra de progreso.
- `/trees/[árbol]/skills/[habilidad]` — descripción, recursos externos y acción
  "completar".
- `/profile` — el árbol personal: ramas por categoría, XP, nivel, racha, logros.
- Onboarding de primera vez (breve y omitible).

## Modelo de datos (añadido)

Category · Tree · Skill · SkillPrerequisite (aristas del DAG) · Resource ·
UserSkillProgress · UserTreeEnrollment (rollup) · ActivityEvent.
Estados de nodo **derivados**, no almacenados (docs 04/05).

## Decisiones y notas

- **Contenido de demostración** (regla 10): el seed es _placeholder_ para poder
  navegar; los currículos reales se investigarán y propondrán para aprobación.
- **PostgreSQL real** usado en el entorno (arrancado localmente) para verificar
  el flujo completo, no solo compilar.
- Calidad: `typecheck`, `lint` y `build` en verde.

## Deuda asumida (pulido posterior, según prioridad de la fundadora)

- Refinamiento visual, animaciones de "desbloqueo", celebraciones de XP.
- Estados `in_progress` visibles, tutoriales contextuales, layout automático de
  árboles UGC, tests e2e automatizados, adaptador de correo real.

## Cómo ejecutarlo

`cp .env.example .env` (ajustar `DATABASE_URL`, `AUTH_SECRET`) →
`pnpm db:push` → `pnpm db:seed` → `pnpm dev`.
