"use client";

import { useEffect, useState } from "react";

/**
 * Hojas verdes de FONDO: pequeñas, dispersas y muy sutiles, que aparecen y
 * desaparecen suavemente en su sitio (no caen). Viven detrás del contenido
 * (-z-10), no bloquean clics y respetan prefers-reduced-motion. Dan textura
 * viva a la página —especialmente al modo claro, que se sentía vacío— sin
 * distraer.
 *
 * Posiciones/tiempos fijos (deterministas): sin estado ni re-render; el coste
 * es nulo (solo animación CSS de opacity/transform en GPU).
 */

interface BgLeaf {
  x: number; // %
  y: number; // %
  size: number; // px
  rot: number; // deg
  op: number; // opacidad máxima (muy baja)
  dur: number; // s
  delay: number; // s
  tint: string;
}

// Repartidas por toda la pantalla, con ritmos distintos para que nunca
// parpadeen a la vez. Opacidad muy baja: presencia, no protagonismo.
const LEAVES: BgLeaf[] = [
  { x: 6, y: 18, size: 14, rot: -18, op: 0.11, dur: 12, delay: 0, tint: "#3f9b57" },
  { x: 15, y: 68, size: 11, rot: 24, op: 0.09, dur: 15, delay: 4, tint: "#4ea85f" },
  { x: 24, y: 38, size: 9, rot: 40, op: 0.08, dur: 13, delay: 8, tint: "#68b97a" },
  { x: 34, y: 82, size: 13, rot: -30, op: 0.1, dur: 16, delay: 2, tint: "#3f9b57" },
  { x: 44, y: 12, size: 10, rot: 10, op: 0.09, dur: 14, delay: 6, tint: "#4ea85f" },
  { x: 52, y: 60, size: 12, rot: -12, op: 0.1, dur: 11, delay: 9, tint: "#2f8f52" },
  { x: 62, y: 28, size: 9, rot: 32, op: 0.08, dur: 17, delay: 3, tint: "#68b97a" },
  { x: 71, y: 74, size: 14, rot: -22, op: 0.11, dur: 13, delay: 7, tint: "#3f9b57" },
  { x: 80, y: 44, size: 11, rot: 18, op: 0.09, dur: 15, delay: 1, tint: "#4ea85f" },
  { x: 88, y: 20, size: 10, rot: -36, op: 0.09, dur: 12, delay: 5, tint: "#2f8f52" },
  { x: 92, y: 66, size: 12, rot: 26, op: 0.1, dur: 16, delay: 10, tint: "#3f9b57" },
  { x: 40, y: 92, size: 9, rot: -8, op: 0.08, dur: 14, delay: 12, tint: "#68b97a" },
  // Segunda capa: más presencia repartida, mismos rangos discretos.
  { x: 10, y: 44, size: 8, rot: 14, op: 0.07, dur: 18, delay: 3, tint: "#68b97a" },
  { x: 29, y: 8, size: 11, rot: -26, op: 0.09, dur: 13, delay: 11, tint: "#4ea85f" },
  { x: 48, y: 34, size: 9, rot: 20, op: 0.08, dur: 15, delay: 7, tint: "#3f9b57" },
  { x: 58, y: 88, size: 12, rot: -16, op: 0.1, dur: 12, delay: 2, tint: "#2f8f52" },
  { x: 67, y: 52, size: 8, rot: 34, op: 0.07, dur: 17, delay: 9, tint: "#68b97a" },
  { x: 76, y: 14, size: 10, rot: -12, op: 0.09, dur: 14, delay: 5, tint: "#4ea85f" },
  { x: 84, y: 82, size: 11, rot: 22, op: 0.1, dur: 16, delay: 8, tint: "#3f9b57" },
  { x: 96, y: 40, size: 9, rot: -30, op: 0.08, dur: 13, delay: 13, tint: "#2f8f52" },
  { x: 20, y: 24, size: 10, rot: 8, op: 0.08, dur: 15, delay: 6, tint: "#3f9b57" },
  { x: 3, y: 78, size: 9, rot: -20, op: 0.07, dur: 18, delay: 10, tint: "#68b97a" },
];

export function BackgroundLeaves() {
  const [mounted, setMounted] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  if (!mounted || reduced) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {LEAVES.map((l, i) => (
        <span
          key={i}
          style={
            {
              position: "absolute",
              left: `${l.x}%`,
              top: `${l.y}%`,
              width: l.size,
              height: l.size,
              color: l.tint,
              opacity: 0,
              animation: `stLeafAppear ${l.dur}s ease-in-out ${l.delay}s infinite`,
              ["--o" as string]: String(l.op),
              ["--r" as string]: `${l.rot}deg`,
              willChange: "opacity, transform",
            } as React.CSSProperties
          }
        >
          <svg viewBox="0 0 24 24" width={l.size} height={l.size} fill="none">
            <path
              d="M12 2C6 5 3 10 4 20c9 1 15-4 16-13-4 0-7 1-9 4-1-4 0-7 1-9Z"
              fill="currentColor"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}
