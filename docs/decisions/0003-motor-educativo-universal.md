# ADR-0003: Motor educativo universal (un solo motor para todas las disciplinas)

- **Estado:** Aceptada
- **Fecha:** 2026-07-15
- **Decisores:** CTO (equipo de ingeniería)

## Contexto

Con dos disciplinas construidas (Inglés y Programación) se validó que el modelo
funciona. Pero el análisis comparativo reveló deuda y acoplamiento que impedían
que SkillTree fuera de verdad "un motor para enseñar cualquier cosa":

1. **Dos motores de sembrado.** Inglés tenía su propio `EnNode`,
   `validateEnglishTree`, `upsertEnglishTree` y `laneX`: una copia casi idéntica
   del motor genérico (`SeedNode`, `validateTree`, `upsertTree`) de `lib.ts`.
   Toda mejora había que hacerla dos veces.
2. **Acoplamiento al inglés en el modelo de contenido.** `LessonExample` tenía
   campos `en`/`es`/`ipa` (inglés → español + fonética). Programación los
   **abusaba**: metía títulos en `en`, explicaciones en `es` y **código** en el
   campo `ipa` (fonética) solo porque se renderizaba monoespaciado.
3. **Práctica monótona.** Solo existían `choice` y `fill`.
4. **Sin garantía de calidad para disciplinas futuras.** `validateTree` valida
   el grafo, pero nada medía si una disciplina alcanzaba el nivel pedagógico de
   Inglés/Programación.

## Opciones consideradas

1. **Mantener motores separados** — cero riesgo inmediato, pero condena a
   duplicar cada mejora y a que las disciplinas diverjan. Rechazada.
2. **Migrar todo a un motor genérico + estándar explícito** — un poco de riesgo
   al tocar Inglés, pero toda mejora futura beneficia a todas las disciplinas.
   Elegida.
3. **Reescribir el modelo de contenido de cero** — rompería el contenido
   existente (miles de líneas). Rechazada: se exige retrocompatibilidad.

## Decisión

Convertir SkillTree en un **motor universal retrocompatible**:

- **Un solo motor.** Inglés se declara como `INGLES_SPEC: TreeSpec` y se siembra
  con `upsertTree`, igual que Programación. Se elimina el motor duplicado
  (`validateEnglishTree`, `upsertEnglishTree`, `laneX`, `EnNode`/`Res` propios,
  `LANE`). `EnNode` queda como alias de `SeedNode`.
- **Modelo de contenido agnóstico.** `LessonExample` pasa a `text`/`sub`/`mono`/
  `term`/`note`, con `en`/`es`/`ipa` como **alias deprecados**. Se lee siempre
  con `viewExample()`. El contenido antiguo sigue funcionando sin tocarlo.
- **Ejercicios nuevos universales.** Se añaden `order` (ordenar) y `match`
  (emparejar) a `PracticeItem`, con corrección y XP en el reproductor. Sirven a
  cualquier área.
- **Estándar + linter.** Se documenta el estándar (`docs/architecture/08`) y se
  añade `lintTree(spec)`: cobertura de lecciones, avisos de calidad y métricas,
  expuestos en `/api/seed`. `STANDARD` centraliza el listón para todas.

## Consecuencias

- **Positivas:**
  - Una sola implementación de validación y sembrado; una mejora → todas las
    disciplinas.
  - Fin del acoplamiento al inglés; el código compartido no conoce CEFR.
  - Práctica más rica y menos carga cognitiva (variedad de ejercicios).
  - Toda disciplina futura tiene una vara de medir objetiva (linter).
- **Negativas / costes:**
  - Se pierden dos comprobaciones específicas de Inglés (continuidad de hebras
    hasta C2). Se asume: eran garantías de autoría de una sola vez; el DAG ya es
    estable y `validateTree` + `lintTree` cubren lo esencial.
- **Riesgos y mitigaciones:**
  - *Romper Inglés al migrar.* Mitigado: `positionX/Y` no lo usa la UI actual
    (renderiza por hebras), y se validó end-to-end (siembra + recorrido de
    lección en ambas disciplinas) tras el cambio.
  - *Contenido antiguo con campos deprecados.* Mitigado: `viewExample()` y los
    alias garantizan retrocompatibilidad; la migración del contenido es opcional
    y gradual.
