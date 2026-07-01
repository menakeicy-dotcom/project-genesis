# ADR-0002: Definición de producto — SkillTree

- **Estado:** Aceptada
- **Fecha:** 2026-07-01
- **Decisores:** CTO + fundadora

## Contexto

Tras tres rondas de investigación, la fundadora define el producto: **SkillTree**,
una plataforma para aprender habilidades mediante árboles de aprendizaje visuales
al estilo de los videojuegos. Este ADR fija el alcance del MVP y las decisiones de
producto que **condicionan la arquitectura**, para no asumir requisitos en
silencio.

## Decisiones de producto

### D1. Autoría de los árboles — *Curado por el equipo (MVP)*
- **Opciones:** (A) curado por el equipo/expertos; (B) UGC desde el día 1;
  (C) híbrido.
- **Decisión:** empezar **curado** (A) para garantizar calidad y simplificar el
  MVP, pero **modelar los datos para soportar UGC** (C) sin reescritura: los
  árboles tienen `autor`, `estado` (borrador/publicado) y `visibilidad`.
- **Por qué:** la calidad del contenido es el corazón del producto; UGC exige
  moderación y editor, que no deben bloquear el lanzamiento.

### D2. Contenido de cada habilidad — *Curación de recursos externos*
- **Opciones:** (A) enlazar recursos externos (vídeos, artículos, ejercicios) +
  descripción propia; (B) contenido propio alojado; (C) mixto.
- **Decisión:** (A) para el MVP. Cada habilidad tiene una descripción breve
  propia y una lista curada de **recursos externos**.
- **Por qué:** coste casi nulo, sin alojar vídeo caro, y foco en lo que
  diferencia (la estructura del árbol y la experiencia), no en producir contenido.

### D3. Validación de desbloqueo — *Autoevaluación (MVP)*
- **Opciones:** (A) el usuario marca "completado"; (B) quizzes/retos automáticos;
  (C) evidencias/proyectos revisados.
- **Decisión:** (A) para el MVP; la arquitectura deja el punto de extensión para
  añadir (B) y (C) por habilidad.
- **Por qué:** desbloquea la experiencia completa (árbol + progreso + motivación)
  con mínimo esfuerzo; la evaluación real se añade donde aporte valor.

### D4. Monetización — *Freemium*
- Árboles gratuitos + suscripción **Premium** (árboles avanzados, analíticas de
  progreso, sin límites). No condiciona la arquitectura central; se integra
  (Stripe) cuando haya tracción.

### D5. Plataforma — *Web responsive, mobile-first, PWA-ready*
- Una web excelente en móvil y escritorio antes que apps nativas.

## Alcance del MVP

Incluye: catálogo de categorías y árboles, render interactivo de un árbol,
desbloqueo por prerrequisitos, progreso del usuario con XP/niveles/rachas, y
autenticación.

**Fuera del MVP:** editor de árboles para la comunidad, quizzes automáticos,
pagos, i18n completa, apps nativas. Todo ello queda **previsto** en el diseño.

## Consecuencias

- **Positivas:** MVP alcanzable en semanas; coste operativo bajo; base preparada
  para crecer (UGC, evaluación, i18n) sin reescribir.
- **Costes/deuda:** el contenido curado inicial es trabajo manual; la
  autoevaluación no garantiza dominio real (aceptable en MVP).
- **A confirmar por la fundadora:** D1–D5.
