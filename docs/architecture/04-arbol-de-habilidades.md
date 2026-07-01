# 04 · Cómo representamos el árbol de habilidades

Esta es la pieza conceptual central de SkillTree.

## No es un "árbol", es un DAG

Aunque lo llamemos "árbol de habilidades" (como en los videojuegos),
técnicamente lo modelamos como un **grafo dirigido acíclico (DAG)**:

- **Dirigido:** las dependencias tienen sentido (A debe hacerse antes que B).
- **Acíclico:** no hay ciclos → siempre hay un orden válido de desbloqueo.
- **No es un árbol estricto** porque una habilidad puede tener **varios
  prerrequisitos** (varios "padres") y varios caminos pueden **converger** en una
  habilidad avanzada. Un árbol clásico no permite múltiples padres; un DAG sí, y
  refleja mejor cómo se aprende de verdad.

```
        [Fundamentos]
          /        \
   [Ritmo]        [Notas]
          \        /
        [Lectura de partituras]   ← converge (2 prerrequisitos)
                 │
        [Tocar tu primera canción]
```

### Representación en datos

- **Nodos** = `Skill`.
- **Aristas** = filas en `SkillPrerequisite` (`skillId` depende de
  `prerequisiteSkillId`).
- **Posiciones** = `positionX/positionY` en cada `Skill`, diseñadas a mano para
  un layout bonito y legible (como un skill tree de videojuego).

## Reglas de desbloqueo

Una habilidad está **disponible** cuando se cumplen sus prerrequisitos:

- **AND (por defecto):** deben completarse **todos** los prerrequisitos.
- **OR (opcional):** con el campo `group`, los prerrequisitos del **mismo grupo**
  se satisfacen si se completa **al menos uno**; **grupos distintos** se combinan
  con AND.

Ejemplo: "Habilidad X requiere (A **o** B) **y** C" →
`(A, grupo 1) (B, grupo 1) (C, grupo 2)`.

**Estados de un nodo (calculados, no almacenados):**

| Estado        | Condición                                                                          |
| ------------- | ---------------------------------------------------------------------------------- |
| `completed`   | Existe `UserSkillProgress` completado para el usuario.                             |
| `in_progress` | Existe progreso iniciado y no completado.                                          |
| `available`   | No completado, pero **todos** sus prerrequisitos (según AND/OR) están completados. |
| `locked`      | No completado y con prerrequisitos sin cumplir.                                    |

Los nodos `isRoot` (sin prerrequisitos) están **siempre disponibles**.

## Cálculo del estado del árbol para un usuario

Pseudo-algoritmo (se ejecuta en la capa de servicios del servidor):

```
1. Cargar todos los Skill del árbol y sus SkillPrerequisite.
2. Cargar el conjunto de skillIds COMPLETADOS por el usuario en ese árbol.
3. Para cada skill:
     - si está en completados → 'completed'
     - si tiene progreso iniciado → 'in_progress'
     - si es root o cumple la regla AND/OR de prerrequisitos → 'available'
     - en otro caso → 'locked'
4. Devolver nodos + aristas + estado, listos para React Flow.
```

Coste: un árbol tiene decenas/cientos de nodos → cabe en memoria y se resuelve en
una pasada. Se puede cachear la estructura (estática) y superponer solo el
progreso (dinámico).

## Validación al crear/editar un árbol

- **Sin ciclos:** rechazar cualquier arista que introduzca un ciclo (detección
  con recorrido en profundidad / orden topológico).
- **Conectividad:** avisar si hay nodos inalcanzables (sin camino desde una raíz).
- **Al menos una raíz** por árbol.

## Renderizado (React Flow)

- Cada `Skill` → un **nodo personalizado** con su icono, título, XP y un estilo
  según el estado (bloqueado en gris/candado, disponible resaltado, completado
  con check dorado).
- Cada `SkillPrerequisite` → una **arista** (con estilo distinto si ya está
  desbloqueada).
- Funciones nativas de React Flow: zoom, desplazamiento, minimapa, ajustar a
  pantalla.
- **La posición viene del dato** (`positionX/Y`), no se recalcula, para respetar
  el diseño artesanal del árbol.

## Extensiones futuras (previstas, no en el MVP)

- **Layout automático** (dagre/ELK) para árboles creados por la comunidad.
- **Requisitos avanzados:** desbloqueo por XP mínima, por insignias, o por
  aprobar un quiz (D3 del ADR-0002).
- **Ramas opcionales / especializaciones** dentro de un mismo árbol.
