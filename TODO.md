# TODO — Tareas pendientes

Lista priorizada. Convención de estado: `[ ]` pendiente · `[~]` en curso ·
`[x]` hecho · `[!]` bloqueado.

---

## 🔥 Prioridad 0 — Desbloquear el proyecto

- [!] **Definir el producto** — elegir opción A, B o C (ver `PROJECT.md` §1).
      *Bloquea todo lo demás.*

---

## 🟠 Prioridad 1 — Fundación técnica

- [x] Analizar el estado del repositorio.
- [x] Crear estructura profesional de documentación.
- [x] `README.md` con propósito y visión general.
- [x] `PROJECT.md` (bitácora de decisiones y progreso).
- [x] `TODO.md` (este archivo).
- [x] `.gitignore` adecuado para Node/TypeScript.
- [x] `.editorconfig` para estilo coherente.
- [x] Recomendación de stack justificada (ADR-0001).
- [ ] Confirmar el stack con la fundadora.

---

## 🟡 Prioridad 2 — Inicialización del stack (tras definir producto)

- [ ] Generar scaffold de Next.js + TypeScript.
- [ ] Configurar Tailwind CSS + shadcn/ui.
- [ ] Configurar ESLint + Prettier.
- [ ] Configurar Husky + lint-staged (calidad en pre-commit).
- [ ] Configurar Vitest (unitarios) y Playwright (e2e).
- [ ] Crear `.env.example` con las variables necesarias.
- [ ] Configurar GitHub Actions (lint + test + build).

---

## 🟢 Prioridad 3 — Arquitectura del MVP

- [ ] Definir el modelo de datos inicial (Prisma schema).
- [ ] Diseñar la estructura de carpetas de `src/`.
- [ ] Integrar autenticación (Auth.js).
- [ ] Integrar pagos/suscripciones (Stripe) si aplica al modelo de negocio.
- [ ] Implementar el primer flujo end-to-end de la funcionalidad principal.
- [ ] Documentar cómo levantar el proyecto en local (`docs/`).

---

## 🔵 Prioridad 4 — Preparación para producción

- [ ] Revisión de seguridad (secretos, validación de entradas, cabeceras).
- [ ] Observabilidad: logs y monitorización de errores.
- [ ] Estrategia de despliegue y entornos (dev/staging/prod).
- [ ] Definir la licencia del proyecto.
