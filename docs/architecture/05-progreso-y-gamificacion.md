# 05 · Progreso del usuario y gamificación

El progreso es lo que hace que SkillTree "enganche". Diseño pensado para ser
**correcto, barato de calcular y motivador**.

## Qué guardamos (y qué no)

- **Fuente de verdad:** `UserSkillProgress` — solo hechos: una habilidad está
  *en progreso* o *completada*, con marcas de tiempo.
- **No guardamos** "bloqueado" ni "disponible": se **derivan** de los
  prerrequisitos + lo completado (ver doc 04). Regla: *nunca almacenar lo que se
  puede calcular de forma barata y sin ambigüedad.*
- **Rollups** (`UserTreeEnrollment`): contadores por árbol (habilidades
  completadas, XP, nivel, última actividad) para pintar paneles sin recorrer todo.
- **Eventos** (`ActivityEvent`): log append-only de lo que ocurre; base de rachas
  y analítica.

## Completar una habilidad (transacción)

Al marcar una habilidad como completada:

```
BEGIN
  1. Crear/actualizar UserSkillProgress → completed (completedAt = ahora)
  2. Sumar skill.xpReward a UserTreeEnrollment.earnedXp
  3. Recalcular nivel del árbol a partir de la XP
  4. Incrementar completedSkills; actualizar lastActivityAt
  5. Insertar ActivityEvent(skill_completed) (+ level_up si sube de nivel)
COMMIT
→ revalidar la vista del árbol (nodos que ahora cumplen prerrequisitos pasan a
  'available')
```

La transacción garantiza que XP, contadores y eventos **nunca queden
descuadrados**.

## XP y niveles

- Cada `Skill` otorga `xpReward` (p. ej. proporcional a la dificultad/tiempo).
- **XP por árbol** y **XP global** (suma de árboles).
- **Nivel** a partir de una curva creciente. Propuesta inicial (ajustable):

  ```
  xpNecesaria(nivel) = 100 * nivel^1.5
  ```

  Curva suave al principio (recompensa temprana) y más exigente después. El
  cálculo es puro y se puede probar con tests.

## Rachas (streaks)

- Se calculan desde `ActivityEvent`: días consecutivos con al menos una
  actividad.
- No se guarda un contador frágil que haya que "resetear a medianoche"; se
  **deriva** de los eventos (día actual vs último día activo). Robusto ante
  zonas horarias y reinicios.

## Insignias / logros (previsto, no MVP)

- Tabla `Achievement` (definición) + `UserAchievement` (obtenidos).
- Se otorgan reaccionando a `ActivityEvent` (p. ej. "primer árbol completado",
  "racha de 7 días", "100 habilidades").
- Diseño desacoplado: añadir logros nuevos no toca la lógica de completar
  habilidades.

## Rendimiento y consistencia

- **Lecturas de panel:** usan rollups → O(1) por árbol.
- **Vista del árbol:** estructura cacheada + progreso superpuesto.
- **Escrituras:** transaccionales y poco frecuentes (completar una habilidad).
- **Reconstrucción:** como los rollups derivan de hechos y eventos, siempre se
  pueden **recomputar** desde cero si hiciera falta (seguridad ante bugs).

## Motivación (UX)

La gamificación no es solo datos; la experiencia debe **celebrar** el avance:
animación al desbloquear, XP que sube, nodo que "se ilumina", progreso del árbol
visible. Eso se construye sobre este modelo, que expone justo esos eventos.
