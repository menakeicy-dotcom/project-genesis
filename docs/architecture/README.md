# Arquitectura de SkillTree

Documentación técnica que define la base del proyecto **antes de escribir código**.
Léela en orden:

1. [Arquitectura general](./01-arquitectura-general.md) — estilo, capas y flujo.
2. [Stack tecnológico](./02-stack-tecnologico.md) — tecnologías y por qué.
3. [Modelo de datos](./03-modelo-de-datos.md) — entidades y esquema de BD.
4. [Árbol de habilidades](./04-arbol-de-habilidades.md) — cómo se representa y
   renderiza el árbol.
5. [Progreso y gamificación](./05-progreso-y-gamificacion.md) — progreso del
   usuario, XP, niveles y rachas.
6. [Estructura de carpetas](./06-estructura-de-carpetas.md) — organización del
   código.
7. [Escalabilidad y crecimiento](./07-escalabilidad-y-crecimiento.md) — cómo
   crecer durante años.
8. [Estándar de contenido](./08-estandar-de-contenido.md) — el contrato que toda
   disciplina cumple para tener la misma calidad (motor universal).

> Las decisiones de producto que condicionan esta arquitectura están en
> [ADR-0002](../decisions/0002-definicion-producto-skilltree.md).

## Principios rectores

- **Simplicidad primero.** Un monolito modular bien organizado, no
  microservicios prematuros.
- **La UX manda.** Las decisiones técnicas sirven a una experiencia fluida y
  motivadora.
- **Modular y por dominios.** El código se organiza por _features_, con fronteras
  claras y reemplazables.
- **Preparado para crecer.** UGC, evaluación real, i18n y monetización están
  previstos en el diseño aunque no se construyan en el MVP.
- **Coste bajo.** Sin dependencias caras; sin APIs de pago en el núcleo.
