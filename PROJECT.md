# PROJECT.md — Bitácora del proyecto

Documento vivo donde se registran **decisiones**, **progreso** y **próximos
pasos**. Es la memoria del proyecto.

---

## 1. Visión

**SkillTree** es una plataforma para aprender cualquier habilidad mediante
**árboles de aprendizaje visuales**, inspirados en los árboles de habilidades de
los videojuegos. Aprender debe sentirse divertido, visual y motivador.

- **Categorías:** Idiomas, Cocina, Música, Programación, Arte, Fotografía,
  Negocios, Desarrollo personal (ampliable).
- **Unidad central:** el *árbol de habilidades* — un grafo de micro-habilidades
  que se desbloquean progresivamente.
- **Prioridades:** experiencia de usuario, diseño limpio y profesional,
  crecimiento por módulos.

---

## 2. Decisiones de producto clave (⚠️ confirmar)

Tomadas como valores por defecto sensatos para un MVP de una fundadora en
solitario. Detalle y alternativas en
[ADR-0002](./docs/decisions/0002-definicion-producto-skilltree.md).

| # | Decisión | Valor por defecto (MVP) | Evolución |
|---|---|---|---|
| 1 | Autoría de los árboles | Curados por el equipo | Preparado para UGC (comunidad) |
| 2 | Contenido de cada habilidad | Curación de recursos externos + descripción propia | Contenido propio/quizzes después |
| 3 | Validación de "desbloqueo" | Autoevaluación (marcar como completado) | Quizzes/retos/evidencias después |
| 4 | Monetización | Freemium (árboles gratis + Premium) | No bloquea la arquitectura |
| 5 | Plataforma | Web responsive (mobile-first), PWA-ready | App nativa a futuro |

---

## 3. Registro de decisiones (índice)

Decisiones completas en `docs/decisions/` (ADR).

| Fecha | Decisión | Estado | Detalle |
|------------|------------------------------------------------|-----------|---------|
| 2026-06-30 | Base agnóstica al producto antes de codificar | ✅ Aceptada | — |
| 2026-06-30 | Stack tecnológico base | ✅ Propuesta | [ADR-0001](./docs/decisions/0001-stack-tecnologico.md) |
| 2026-07-01 | Producto definido: **SkillTree** | ✅ Aceptada | [ADR-0002](./docs/decisions/0002-definicion-producto-skilltree.md) |
| 2026-07-01 | Árbol como **DAG** (grafo dirigido acíclico) | ✅ Propuesta | [Árbol de habilidades](./docs/architecture/04-arbol-de-habilidades.md) |
| 2026-07-01 | Arquitectura: **monolito modular** | ✅ Propuesta | [Arquitectura general](./docs/architecture/01-arquitectura-general.md) |

---

## 4. Progreso

### Hecho ✅
- Fundación del repo (docs base, git, convenciones).
- Tres rondas de investigación de mercado (`docs/research/`).
- **Producto definido: SkillTree.**
- Documentación técnica de arquitectura (en curso).

### En curso 🔄
- Redacción de la documentación técnica completa.

### Siguiente ⏭️
- Confirmar las decisiones de producto (§2).
- Scaffold del proyecto y modelo de datos.
- Desarrollo por módulos (ver `TODO.md`).

---

## 5. Principios de trabajo

- Nada de código apresurado; evaluar la mejor alternativa antes de crear algo.
- Arquitectura escalable y limpia; todo documentado.
- Commits pequeños y claros.
- Ante un problema, proponer la mejor solución antes de implementarla.
- Rendimiento, seguridad y mantenibilidad siempre presentes.
- No asumir requisitos: ante falta de información, preguntar.
