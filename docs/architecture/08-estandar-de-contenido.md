# 08 · Estándar de contenido de SkillTree

> El contrato que **toda disciplina** debe cumplir para tener la misma calidad
> que Inglés y Programación. Nace de comparar ambas disciplinas y extraer lo que
> es común (pertenece al **motor**) frente a lo que es propio de cada área
> (pertenece a la **disciplina**).

## Principio

El motor educativo es **agnóstico**. Una disciplina no programa comportamiento:
lo **declara** como datos (`TreeSpec`). El mismo motor valida, siembra, calcula
progreso y desbloqueos, y renderiza lecciones para cualquier área del
conocimiento. Si una mejora no beneficia a todas las disciplinas a la vez, no
pertenece al motor.

## Qué pertenece al motor vs. a la disciplina

| Pertenece al MOTOR (compartido)                              | Pertenece a la DISCIPLINA (datos)                     |
| ------------------------------------------------------------ | ----------------------------------------------------- |
| Validación del DAG, sembrado idempotente (`upsertTree`)      | Sus ramas, niveles, nodos y prerrequisitos            |
| Modelo de lección y reproductor (`LessonPlayer`)             | El contenido de cada lección                          |
| Tipos de ejercicio (choice, fill, order, match)              | Las preguntas concretas                               |
| Progresión (libertad entre ramas, niveles dentro de la rama) | Cuántas ramas y niveles usa                           |
| XP, niveles, logros, racha, estadísticas                     | La XP de cada nodo                                    |
| Linter de calidad (`lintTree`)                               | Cumplir el estándar                                   |

Las etiquetas de nivel/rama viven en `Skill.content` (`levelLabel`,
`branchLabel`): el motor **no** conoce CEFR ni ramas de Inglés.

---

## 1. Disciplina (`TreeSpec`)

```ts
{
  category: { slug, name, description, icon, order },
  tree:     { slug, title, description, difficulty },
  branches: Record<clave, etiqueta>,   // grandes competencias (hebras)
  levels:   string[],                  // etiquetas de nivel por índice (0..)
  nodes:    SeedNode[],                 // el DAG de habilidades
  lessons:  Record<slug, Lesson>,       // contenido interactivo por nodo
}
```

Reglas: `category`/`tree`/todos los `slug` únicos; al menos una raíz; el grafo
debe ser un DAG acíclico y **todo nodo alcanzable** desde una raíz. Lo valida
`validateTree` (bloqueante) antes de sembrar.

## 2. Habilidad (`SeedNode`) — obligatorio

```ts
{
  s, b, lv, t, d, o, c, w, df, m, xp,
  root?, pre[], er[], cr[], ex[], ev[], r[]
}
```

| Campo | Significado | Obligatorio |
| ----- | ----------- | ----------- |
| `s` `b` `lv` `t` `d` | slug, rama, nivel, título, descripción | ✅ |
| `o` | objetivo *can-do* ("al terminar podrás…") | ✅ |
| `c` | competencia que se adquiere | ✅ |
| `w` | justificación pedagógica + por qué va en esa posición | ✅ |
| `df` `m` `xp` | dificultad, minutos, recompensa XP (>0) | ✅ |
| `pre[]` | prerrequisitos (aristas del DAG) | ✅ (salvo raíz) |
| `er[]` | errores frecuentes | ✅ (≥1) |
| `cr[]` | criterios de dominio | ✅ (≥1) |
| `ex[]` `ev[]` | ejercicios y evaluaciones sugeridas | recomendado |
| `r[]` | recursos (fuentes reconocidas) | ✅ (≥1) |

## 3. Lección (`Lesson`)

```ts
{ intro?, goal?, sections[], examples?, practice?, activity?, selfCheck?, summary? }
```

- **sections** (≥2): tarjetas cortas. Cada una: `h`, `tldr?`, `body?`,
  `bullets?`, `code?`, `examples?`, `compare?`, `more?` (revelado bajo demanda),
  `tip?`.
- **practice** (≥1): ejercicios autocorregibles (ver §4).
- **activity**: producción real (no autocorregible).
- **selfCheck** / **summary**: autoevaluación marcable y cierre.

Orden pedagógico del reproductor:
`Intro → Aprende → Practica → Actividad → Resumen → Celebración`.

## 4. Ejercicio (`PracticeItem`) — agnóstico

| Tipo     | Uso | Corrección |
| -------- | --- | ---------- |
| `choice` | opción múltiple | índice correcto |
| `fill`   | escribir la respuesta | comparación normalizada (sin tildes/mayúsc.) |
| `order`  | ordenar pasos/elementos | secuencia exacta |
| `match`  | emparejar dos columnas | todas las parejas |

Todos aceptan `why?` (explicación tras responder). Todos otorgan una fracción de
la XP del nodo al acertar. Sirven igual para idiomas, código o teoría musical.

## 5. Ejemplo (`LessonExample`) — genérico

```ts
{ text?, sub?, mono?, term?, note? }   // + alias antiguos en/es/ipa
```

- `text`: texto principal · `sub`: traducción/explicación · `mono`:
  monoespaciado (código, fórmula o fonética) · `term`: etiqueta breve · `note`.
- Se lee siempre con `viewExample()`, que normaliza el contenido nuevo y el
  antiguo (`en`/`es`/`ipa`). **Ninguna disciplina depende del idioma inglés.**

## 6. Recurso (`SeedRes`)

`{ t: VIDEO|ARTICLE|EXERCISE|BOOK|OTHER, title, url, p }` — de fuentes
reconocidas y de acceso libre. Mínimo uno por habilidad.

## 7. Rama, nivel, progreso y desbloqueo

- **Rama (hebra):** gran competencia. Todas **abiertas** desde el inicio
  (libertad de elegir por dónde empezar).
- **Nivel:** índice `lv` → etiqueta en `levels[lv]`.
- **Progreso:** derivado, nunca almacenado como estado. Rollup de XP/completadas
  en `UserTreeEnrollment`.
- **Desbloqueo:** una habilidad está disponible si **todas las de su misma rama
  con nivel inferior están completadas** (`isUnlockedByStrand`). El primer nivel
  de cada rama está abierto. Se valida también en el servidor al completar.

## 8. Hito (`hito`)

Nodo especial de la rama `hito` que consolida un nivel. Mismo `SeedNode`; su
lección repasa e integra. Marca el salto de nivel de la disciplina.

---

## Linter de calidad (`lintTree`)

No bloquea el sembrado, pero mide el cumplimiento del estándar y lo expone en
`/api/seed`:

- **Cobertura de lecciones** (% de nodos con lección).
- **Avisos**: nodo sin objetivo/competencia/criterios/errores/recursos, XP no
  positiva, lección con <2 secciones o sin práctica, nodo aislado.
- **Métricas**: nº con práctica/resumen, tipos de ejercicio usados, media de
  secciones y de práctica por lección.

Subir el listón para **todas** las disciplinas a la vez = cambiar `STANDARD` en
`src/server/seeds/lib.ts`.

## Checklist para una disciplina nueva

1. Declara `XXX_SPEC: TreeSpec` en `src/server/seeds/xxx.ts`.
2. Escribe las lecciones en `src/server/seeds/xxx-lessons.ts`.
3. Añade `upsertTree(db, XXX_SPEC)` en `/api/seed`.
4. Ejecuta la siembra y revisa `quality.xxx`: cobertura alta y **0 avisos**.
5. No toques el motor salvo para mejoras que beneficien a **todas** las áreas.
