# TODO — Tareas pendientes

Estado: `[ ]` pendiente · `[~]` en curso · `[x]` hecho · `[!]` bloqueado.

---

## 🔥 Prioridad 0 — Diseño (fase actual)

- [x] Definir el producto (SkillTree).
- [~] Documentación técnica de arquitectura.
  - [x] Arquitectura general
  - [x] Stack tecnológico
  - [x] Modelo de datos
  - [x] Representación del árbol de habilidades
  - [x] Progreso y gamificación
  - [x] Estructura de carpetas
  - [x] Escalabilidad y crecimiento
- [ ] Confirmar con la fundadora las decisiones de producto (PROJECT.md §2).

---

## 🟠 Prioridad 1 — Inicialización (tras aprobar el diseño)

- [ ] Scaffold Next.js + TypeScript.
- [ ] Tailwind CSS + shadcn/ui (design system base).
- [ ] Prisma + PostgreSQL; primera migración del esquema.
- [ ] ESLint + Prettier + Husky + lint-staged.
- [ ] Vitest + Playwright.
- [ ] `.env.example` y configuración de entornos.
- [ ] GitHub Actions (lint + test + build).

---

## 🟡 Prioridad 2 — Módulos del MVP (uno por uno)

- [ ] **Módulo `auth`** — registro/login (Auth.js).
- [ ] **Módulo `catalog`** — categorías y árboles (listado + detalle).
- [ ] **Módulo `skill-tree`** — render interactivo del árbol (React Flow),
      estados de nodo (bloqueado/disponible/completado).
- [ ] **Módulo `progress`** — marcar habilidades, XP, niveles, rachas.
- [ ] **Módulo `users`** — perfil y panel de progreso.
- [ ] Seed de datos: 1 categoría + 1 árbol de ejemplo bien diseñado.

---

## 🟢 Prioridad 3 — Producción y crecimiento

- [ ] Panel de administración/curación de árboles.
- [ ] Internacionalización (i18n).
- [ ] Monetización (Stripe) — plan Premium.
- [ ] Observabilidad (logs, errores) y analítica de aprendizaje.
- [ ] Preparación para UGC (roles de autor, moderación, versionado de árboles).
- [ ] Revisión de seguridad y accesibilidad.
- [ ] Definir la licencia del proyecto.
