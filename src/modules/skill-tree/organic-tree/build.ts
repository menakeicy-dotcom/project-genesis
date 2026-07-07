/**
 * Generación PROCEDURAL de un árbol estilizado (arte primero).
 *
 * Filosofía: el árbol es una ilustración orgánica bella por sí misma —tronco que
 * se bifurca de forma natural en ramas que se afinan, terminando en una copa de
 * hojas—. Aunque quites las hojas, la silueta de ramas sigue siendo un árbol.
 * Las habilidades se colocan luego sobre "anclas" (puntos de la copa) como hojas
 * interactivas. El DAG de prerrequisitos vive en el motor, no en el dibujo.
 *
 * Todo se genera en un espacio virtual fijo (VW×VH) y de forma DETERMINISTA a
 * partir de una semilla, para que el mismo árbol se vea siempre igual y las
 * anclas coincidan con el overlay interactivo (posicionado en %).
 */

export const VW = 1000;
export const VH = 1250;

export interface Pt {
  x: number;
  y: number;
}
export interface Limb {
  p0: Pt;
  c: Pt;
  p1: Pt;
  w0: number;
  w1: number;
  depth: number;
}
export interface DecoLeaf {
  x: number;
  y: number;
  r: number;
  ang: number;
  hue: number;
}
export interface TreeArt {
  limbs: Limb[];
  leaves: DecoLeaf[];
  anchors: Pt[]; // centros de racimo candidatos para habilidades
}

function mulberry(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function hashSeed(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** Construye el árbol (sin dibujar). */
export function buildTree(seed: number): TreeArt {
  const rand = mulberry(seed);
  const limbs: Limb[] = [];
  const leaves: DecoLeaf[] = [];
  const anchors: Pt[] = [];

  function cluster(
    x: number,
    y: number,
    dir: number,
    scale: number,
    count: number,
  ) {
    anchors.push({ x, y });
    for (let i = 0; i < count; i++) {
      const a = dir + (rand() - 0.5) * 2.4;
      const d = rand() * 26 * scale;
      leaves.push({
        x: x + Math.cos(a) * d,
        y: y + Math.sin(a) * d,
        r: (7 + rand() * 7) * scale,
        hue: rand(),
        ang: a,
      });
    }
  }

  function branch(
    x: number,
    y: number,
    angle: number,
    len: number,
    width: number,
    depth: number,
  ) {
    const curve = (rand() - 0.5) * 0.5;
    const ex = x + Math.cos(angle) * len;
    const ey = y + Math.sin(angle) * len;
    const mid = {
      x: (x + ex) / 2 + Math.cos(angle + Math.PI / 2) * len * curve,
      y: (y + ey) / 2 + Math.sin(angle + Math.PI / 2) * len * curve,
    };
    const w1 = width * 0.68;
    limbs.push({
      p0: { x, y },
      c: mid,
      p1: { x: ex, y: ey },
      w0: width,
      w1,
      depth,
    });

    if (depth <= 0 || width < 3.2) {
      cluster(
        ex,
        ey,
        angle,
        Math.min(1.4, 0.7 + (5 - depth) * 0.12),
        10 + ((rand() * 8) | 0),
      );
      return;
    }
    const nb = width > 18 ? 2 : rand() < 0.35 ? 3 : 2;
    const spread = 0.38 + rand() * 0.22;
    for (let i = 0; i < nb; i++) {
      const frac = i / (nb - 1) - 0.5; // nb ∈ {2,3}
      const na = angle + frac * spread * 2 + (rand() - 0.5) * 0.25;
      const nl = len * (0.72 + rand() * 0.12);
      const t = 0.82 + rand() * 0.18;
      branch(lerp(x, ex, t), lerp(y, ey, t), na, nl, w1, depth - 1);
    }
    if (depth < 5 && rand() < 0.5) {
      cluster(
        lerp(x, ex, 0.6),
        lerp(y, ey, 0.6),
        angle + (rand() < 0.5 ? 1 : -1),
        0.6,
        4,
      );
    }
  }

  branch(VW / 2, VH - 90, -Math.PI / 2, 300, 48, 9);
  return { limbs, leaves, anchors };
}

/**
 * Selecciona `n` anclas bien repartidas por la copa (muestreo uniforme sobre las
 * anclas ordenadas de dentro/abajo hacia fuera/arriba), para asignarles
 * habilidades ordenadas por nivel (las básicas más cerca del tronco).
 */
export function pickAnchors(art: TreeArt, n: number): Pt[] {
  const sorted = [...art.anchors].sort((a, b) => b.y - a.y); // de abajo hacia arriba
  if (n >= sorted.length) return sorted;
  const out: Pt[] = [];
  const step = sorted.length / n;
  for (let i = 0; i < n; i++) out.push(sorted[Math.floor(i * step)]!);
  return out;
}
