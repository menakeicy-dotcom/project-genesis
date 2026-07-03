/**
 * Follaje del árbol: muchas hojas pequeñas que van brotando a lo largo de toda
 * la animación hasta formar una copa frondosa al final.
 *
 * Las posiciones se generan de forma DETERMINISTA (con un generador
 * pseudoaleatorio con semilla fija), así que el resultado es siempre el mismo:
 * fácil de afinar y sin desajustes de hidratación. Coordenadas en el viewBox
 * 0 0 300 640, el mismo del árbol.
 */

export interface Leaf {
  x: number;
  y: number;
  /** Rotación en grados. */
  rot: number;
  /** Escala relativa (0.6–1.2 aprox.). */
  scale: number;
  /** Paso de la animación en el que brota esta hoja. */
  step: number;
  /** Tono de verde (0 = medio, 1 = más claro) para dar variedad. */
  tint: number;
}

/** Generador congruencial lineal simple, con semilla → secuencia estable. */
function makeRng(seed: number) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

interface Cluster {
  cx: number;
  cy: number;
  /** Radios horizontal y vertical de dispersión. */
  rx: number;
  ry: number;
  count: number;
  step: number;
}

/**
 * Grupos de hojas alrededor de las puntas de las ramas, la copa y el tronco.
 * El `step` escalona la aparición para que salgan hojas durante TODA la
 * animación y la copa se complete al final.
 */
const CLUSTERS: readonly Cluster[] = [
  // Primeros brotes junto al tronco (mientras germina).
  { cx: 150, cy: 440, rx: 30, ry: 40, count: 7, step: 2 },
  // Música (rama baja izquierda).
  { cx: 80, cy: 356, rx: 42, ry: 38, count: 13, step: 3 },
  // Cocina (rama baja derecha).
  { cx: 222, cy: 338, rx: 42, ry: 38, count: 13, step: 4 },
  // Programación (rama alta izquierda).
  { cx: 96, cy: 250, rx: 42, ry: 40, count: 13, step: 5 },
  // Idiomas (rama alta derecha).
  { cx: 208, cy: 232, rx: 42, ry: 40, count: 13, step: 6 },
  // Copa central: se completa al final y convierte el conjunto en un árbol
  // frondoso.
  { cx: 150, cy: 214, rx: 78, ry: 58, count: 30, step: 6 },
  { cx: 150, cy: 262, rx: 118, ry: 80, count: 34, step: 7 },
  { cx: 150, cy: 320, rx: 96, ry: 56, count: 20, step: 7 },
] as const;

function buildFoliage(): Leaf[] {
  const rng = makeRng(20240712);
  const leaves: Leaf[] = [];
  for (const c of CLUSTERS) {
    for (let i = 0; i < c.count; i++) {
      // Distribución radial suave (más densa hacia el centro del grupo).
      const angle = rng() * Math.PI * 2;
      const r = Math.sqrt(rng());
      leaves.push({
        x: c.cx + Math.cos(angle) * r * c.rx,
        y: c.cy + Math.sin(angle) * r * c.ry,
        rot: (rng() - 0.5) * 120,
        scale: 0.62 + rng() * 0.55,
        step: c.step,
        tint: rng(),
      });
    }
  }
  return leaves;
}

/** Todas las hojas del árbol, ya calculadas (estable entre render y render). */
export const FOLIAGE: readonly Leaf[] = buildFoliage();
