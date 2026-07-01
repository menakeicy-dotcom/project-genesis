# Architecture Decision Records (ADR)

Un **ADR** documenta una decisión arquitectónica importante junto con su
contexto y consecuencias. Responde a la pregunta *"¿por qué se hizo así?"*
meses o años después.

## Reglas

1. Cada decisión relevante = un archivo numerado: `NNNN-titulo-corto.md`.
2. Los ADR son **inmutables**: una vez aceptados no se editan. Si una decisión
   cambia, se crea un ADR nuevo que **sustituye** (supersedes) al anterior.
3. Estados posibles: `Propuesta`, `Aceptada`, `Rechazada`, `Sustituida`.

## Índice

| ADR | Título | Estado |
|------|--------------------------------------|-----------|
| [0001](./0001-stack-tecnologico.md) | Stack tecnológico | Propuesta |
| [0002](./0002-definicion-producto-skilltree.md) | Definición de producto — SkillTree | Aceptada |

## Crear un ADR nuevo

Copia [`0000-plantilla.md`](./0000-plantilla.md), renómbralo con el siguiente
número disponible y rellénalo.
