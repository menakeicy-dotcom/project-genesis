# PROJECT.md — Bitácora del proyecto

Documento vivo donde se registran **decisiones**, **progreso** y **próximos
pasos**. Se actualiza en cada hito relevante. Es la memoria del proyecto.

---

## 1. Visión

Construir un producto web que la gente quiera usar y por el que esté dispuesta
a pagar, con una base técnica escalable, limpia y mantenible.

### ⚠️ Decisión inmediata pendiente: definir el producto

La visión de negocio aún no está concretada. **Esto bloquea el inicio del
desarrollo de funcionalidad.** Opciones planteadas a la fundadora:

- **(A) Idea definida** — La fundadora describe el problema, el usuario y la
  propuesta de valor en una frase.
- **(B) Dirección sin detalle** — Se conoce el sector/problema general y se
  afina en conjunto.
- **(C) Propuesta del CTO** — Se investiga el mercado y se presentan 2-3 ideas
  con potencial de monetización para elegir.

> **Acción requerida:** elegir A, B o C para desbloquear el desarrollo.

---

## 2. Registro de decisiones (resumen)

Las decisiones de arquitectura completas viven en `docs/decisions/` (ADR).
Aquí queda solo el índice cronológico.

| Fecha | Decisión | Estado | Detalle |
|------------|------------------------------------------------|-----------|---------|
| 2026-06-30 | Crear base agnóstica al producto antes de codificar | ✅ Aceptada | Evita asumir requisitos. |
| 2026-06-30 | Stack tecnológico recomendado | ✅ Propuesta | [ADR-0001](./docs/decisions/0001-stack-tecnologico.md) |
| 2026-06-30 | Convención de commits: Conventional Commits | ✅ Aceptada | Trazabilidad y changelogs automáticos. |
| 2026-06-30 | Documentar decisiones como ADR | ✅ Aceptada | Historial de "por qué", no solo "qué". |

---

## 3. Progreso

### Hecho ✅
- Análisis del repositorio (estaba vacío, sin commits).
- `.gitignore` y `.editorconfig` para un proyecto Node/TypeScript moderno.
- `README.md` con propósito, estado, stack y estructura.
- `PROJECT.md` (este archivo) y `TODO.md`.
- Estructura de documentación (`docs/` + ADR).
- Recomendación de stack justificada (ADR-0001).

### En curso 🔄
- A la espera de la **definición del producto** por parte de la fundadora.

### Bloqueado ⛔
- Scaffold del stack → bloqueado hasta definir el producto.
- Desarrollo de funcionalidad → bloqueado hasta el scaffold.

---

## 4. Próximos pasos

1. **Definir el producto** (A/B/C arriba).
2. Confirmar/ajustar el stack del ADR-0001 a la luz del producto.
3. Generar el scaffold del proyecto (Next.js + TypeScript).
4. Configurar herramientas de calidad: ESLint, Prettier, Husky, lint-staged.
5. Configurar CI/CD con GitHub Actions (lint + test + build).
6. Diseñar el modelo de datos inicial y la arquitectura de carpetas de `src/`.
7. Implementar el primer flujo end-to-end del MVP (una sola funcionalidad).

---

## 5. Principios de trabajo (acordados con la fundadora)

- Nada de código apresurado.
- Antes de crear una función, evaluar si existe mejor alternativa.
- Arquitectura escalable y limpia.
- Todo el código documentado.
- Commits pequeños y con mensajes claros.
- Ante un problema, proponer la mejor solución **antes** de implementarla.
- Pensar siempre en rendimiento, seguridad y mantenibilidad.
- No asumir requisitos: ante falta de información, preguntar.
