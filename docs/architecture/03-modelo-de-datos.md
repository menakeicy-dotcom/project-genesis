# 03 · Modelo de datos

> El esquema que sigue es **documentación de diseño**, no código de producción.
> Se implementará con Prisma cuando aprobemos la base.

## Entidades principales

```
Category 1───* Tree 1───* Skill *───* Skill      (prerrequisitos: grafo DAG)
                           │
                           *───* Resource         (recursos externos por skill)

User 1───* UserSkillProgress *───1 Skill          (progreso por habilidad)
User 1───* UserTreeEnrollment *───1 Tree          (inscripción + rollup)
User 1───* ActivityEvent                          (log append-only: XP, rachas)
```

### Category (categoría)
Agrupa árboles: Idiomas, Cocina, Música…
`id · slug · name · description · icon · color · order · createdAt`

### Tree (árbol de aprendizaje)
Una ruta de aprendizaje dentro de una categoría.
`id · categoryId · slug · title · description · difficulty · coverImage`
`· status(draft|published|archived) · visibility(public|private)`
`· authorId(nullable) · version · createdAt · updatedAt`

> `status`, `visibility`, `authorId` y `version` existen **desde el día 1** para
> soportar UGC y evolución sin migración traumática (ver ADR-0002).

### Skill (habilidad / nodo)
Cada nodo del árbol.
`id · treeId · slug · title · description · icon`
`· xpReward · estimatedMinutes · tier · positionX · positionY`
`· isRoot(bool) · createdAt`

- `positionX/positionY`: **posición diseñada a mano** del nodo en el lienzo
  (control estético "de videojuego"). Para árboles UGC futuros se podrá
  autocalcular con un algoritmo de layout.
- `isRoot`: nodos de entrada (sin prerrequisitos).

### SkillPrerequisite (aristas del grafo)
Relación *muchos-a-muchos* de Skill consigo misma. Define las **dependencias**.
`skillId · prerequisiteSkillId · group(nullable)`

- El `group` permite reglas **AND / OR**: prerrequisitos del mismo grupo se
  combinan con OR; grupos distintos, con AND. Por defecto (sin grupo) = AND de
  todos. Detalle en [04-arbol-de-habilidades](./04-arbol-de-habilidades.md).
- **Restricción crítica:** el grafo debe ser **acíclico** (se valida al crear/
  editar). Sin ciclos = siempre existe un orden de desbloqueo.

### Resource (recurso externo curado)
Lo que el usuario consume para aprender la habilidad.
`id · skillId · type(video|article|exercise|book|other) · title · url`
`· provider · durationMinutes · order · isOptional`

### User (usuario)
`id · email · name · avatarUrl · createdAt` (+ campos de Auth.js).

### UserSkillProgress (progreso por habilidad) — fuente de verdad
`id · userId · skillId · status(in_progress|completed) · startedAt · completedAt`

- **Solo guardamos hechos:** que una habilidad está *en progreso* o *completada*.
- Los estados **bloqueado** y **disponible** **NO se almacenan**: se **calculan**
  a partir de los prerrequisitos + lo completado. Esto evita estados obsoletos y
  simplifica el modelo (ver [05-progreso](./05-progreso-y-gamificacion.md)).

### UserTreeEnrollment (inscripción + rollup)
Denormalización para rendimiento: evita recalcular todo en cada pantalla.
`id · userId · treeId · enrolledAt · completedSkills · totalSkills`
`· earnedXp · level · lastActivityAt`

- Se actualiza **transaccionalmente** al completar una habilidad.

### ActivityEvent (registro de actividad) — append-only
`id · userId · type(skill_completed|tree_started|level_up|…) · payload(json)`
`· createdAt`

- Log inmutable que alimenta **rachas**, XP en el tiempo y analítica, sin
  ensuciar las tablas transaccionales. Barato y muy útil a futuro.

## Decisiones de diseño

1. **El árbol es un grafo (DAG), no un árbol estricto.** Ver documento 04.
2. **Estados derivados, no almacenados.** Guardamos solo completado/en progreso;
   lo disponible/bloqueado se calcula. Menos bugs, menos datos.
3. **Rollups denormalizados** (`UserTreeEnrollment`) para leer paneles rápido,
   mantenidos en transacción con la fuente de verdad.
4. **Campos de evolución desde el día 1** (`status`, `version`, `authorId`,
   `visibility`) para no repintar el esquema cuando llegue UGC.
5. **Textos traducibles previstos:** los campos de texto (`title`, `description`)
   se diseñarán pensando en i18n (tabla de traducciones o columnas por idioma)
   dado que "Idiomas" es categoría y el público es internacional.

## Índices y rendimiento (para la implementación)

- `Skill(treeId)`, `SkillPrerequisite(skillId)`, `SkillPrerequisite(prerequisiteSkillId)`.
- `UserSkillProgress(userId, skillId)` único; índice por `userId`.
- `UserTreeEnrollment(userId, treeId)` único.
- `ActivityEvent(userId, createdAt)` para rachas y feeds.
