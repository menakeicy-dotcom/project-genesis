/**
 * Layout del "árbol vivo": traduce los datos del motor (habilidades, niveles y
 * prerrequisitos) a una geometría ORGÁNICA de árbol. No dibuja el DAG: cada
 * habilidad es una hoja sobre una rama, y solo se traza la rama hacia su
 * prerrequisito principal (las dependencias múltiples las respeta el motor, no
 * se pintan). Es una función pura → fácil de testear y sin acceso a datos.
 */

import type { NodeState } from "@/modules/skill-tree/state";

export interface LeafInput {
  id: string;
  slug: string;
  title: string;
  xp: number;
  state: NodeState;
  tier: number;
  x: number; // posición horizontal "semilla" del autor (se reescala)
  parents: string[]; // prerrequisiteIds
}

export interface PlacedLeaf extends LeafInput {
  px: number;
  py: number;
}

export interface Branch {
  id: string;
  d: string; // trazo SVG de la rama (padre → hoja)
  tier: number;
  /** Estado del nodo hijo: colorea/anima la rama al crecer. */
  state: NodeState;
}

export interface TreeLayout {
  width: number;
  height: number;
  leaves: PlacedLeaf[];
  branches: Branch[];
  trunk: string;
  base: { x: number; y: number };
}

const VIEW_W = 920;
const MARGIN_X = 90;
const LEVEL_GAP = 150; // separación vertical entre niveles
const BASE_PAD = 120; // altura del tronco antes del primer nivel

/** Curva orgánica (cúbica) entre dos puntos, con una leve “S”. */
function organicPath(x1: number, y1: number, x2: number, y2: number): string {
  const dy = y2 - y1;
  const c1x = x1 + (x2 - x1) * 0.15;
  const c1y = y1 + dy * 0.45;
  const c2x = x1 + (x2 - x1) * 0.85;
  const c2y = y1 + dy * 0.55;
  return `M${x1.toFixed(1)},${y1.toFixed(1)} C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}`;
}

export function layoutTree(nodes: LeafInput[]): TreeLayout {
  if (nodes.length === 0) {
    return {
      width: VIEW_W,
      height: 400,
      leaves: [],
      branches: [],
      trunk: "",
      base: { x: VIEW_W / 2, y: 380 },
    };
  }

  const maxTier = Math.max(...nodes.map((n) => n.tier));
  const height = BASE_PAD + (maxTier + 1) * LEVEL_GAP + 120;
  const baseX = VIEW_W / 2;
  const baseY = height - 40;
  const trunkTopY = baseY - BASE_PAD;

  // Reescala la x "semilla" al ancho del lienzo (conserva la intención espacial).
  const xs = nodes.map((n) => n.x);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const spanX = maxX - minX || 1;
  const scaleX = (x: number) =>
    MARGIN_X + ((x - minX) / spanX) * (VIEW_W - MARGIN_X * 2);

  // Nivel (tier) → altura: los niveles profundos crecen hacia arriba (copa).
  const tierY = (t: number) => trunkTopY - t * LEVEL_GAP;

  const placed = new Map<string, PlacedLeaf>();
  const leaves: PlacedLeaf[] = nodes.map((n) => {
    const px = nodes.length === 1 ? baseX : scaleX(n.x);
    const py = tierY(n.tier);
    const p: PlacedLeaf = { ...n, px, py };
    placed.set(n.id, p);
    return p;
  });

  // Ramas: de la hoja hacia su prerrequisito principal (o el tronco si es raíz).
  const branches: Branch[] = leaves.map((leaf) => {
    const parentId = leaf.parents[0];
    const parent = parentId ? placed.get(parentId) : undefined;
    const fromX = parent ? parent.px : baseX;
    const fromY = parent ? parent.py : trunkTopY;
    return {
      id: leaf.id,
      d: organicPath(fromX, fromY, leaf.px, leaf.py),
      tier: leaf.tier,
      state: leaf.state,
    };
  });

  // Tronco: forma rellena y afinada (ancho en la base, estrecho arriba), con
  // una leve curva natural.
  const bw = 16; // semiancho en la base
  const tw = 5; // semiancho arriba
  const midY = (baseY + trunkTopY) / 2;
  const trunk =
    `M${baseX - bw},${baseY} ` +
    `C${baseX - bw + 1},${midY} ${baseX - tw - 2},${trunkTopY + 24} ${baseX - tw},${trunkTopY} ` +
    `L${baseX + tw},${trunkTopY} ` +
    `C${baseX + tw + 2},${trunkTopY + 24} ${baseX + bw - 1},${midY} ${baseX + bw},${baseY} Z`;

  return {
    width: VIEW_W,
    height,
    leaves,
    branches,
    trunk,
    base: { x: baseX, y: baseY },
  };
}
