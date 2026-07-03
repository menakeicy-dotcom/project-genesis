"use client";

import { motion } from "framer-motion";

interface BranchProps {
  /** Trazo SVG (viewBox 0 0 400 520). */
  d: string;
  /** Si la rama ya debe estar dibujada. */
  grown: boolean;
  /** Grosor del trazo. El tronco es más grueso que las ramas. */
  width?: number;
  /** Sin movimiento: dibuja al instante. */
  reduced?: boolean;
}

/**
 * Una rama (o el tronco) que "crece" dibujándose de la base a la punta.
 *
 * Usa el soporte nativo de Framer Motion para `pathLength`: anima el trazo sin
 * calcular longitudes a mano y de forma ligera (sin reflow). El resultado se
 * ve orgánico gracias a las curvas Bézier del propio trazo y al easing suave.
 */
export function Branch({ d, grown, width = 4, reduced = false }: BranchProps) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke="url(#branchGradient)"
      strokeWidth={width}
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{
        pathLength: grown ? 1 : 0,
        opacity: grown ? 1 : 0,
      }}
      transition={{
        pathLength: { duration: reduced ? 0 : 1.1, ease: [0.4, 0, 0.2, 1] },
        opacity: { duration: reduced ? 0 : 0.4 },
      }}
    />
  );
}
