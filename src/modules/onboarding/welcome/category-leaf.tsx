"use client";

import { motion } from "framer-motion";

import type { WelcomeCategory } from "./categories";

interface CategoryLeafProps {
  category: WelcomeCategory;
  /** Posición del centro de la hoja, en % del contenedor (0-100). */
  xPct: number;
  yPct: number;
  /** Si la hoja ya "nació" desde su rama. */
  born: boolean;
  /** Si es la categoría que se está presentando ahora (brilla más). */
  active: boolean;
  /** Sin movimiento: aparece estática, sin flotar ni respirar. */
  reduced?: boolean;
}

/**
 * El icono de una categoría, que nace como una hoja: brota desde la rama,
 * crece con un pequeño rebote, emite un brillo y luego queda flotando y
 * "respirando" muy suavemente. Todo se anima con transform/opacity para
 * mantener 60 FPS.
 *
 * Estructura en capas para poder combinar una animación de nacimiento (una
 * sola vez) con una de flotación (en bucle) sin que se pisen:
 *   posición → nacimiento → flotación → respiración → [glow + icono]
 */
export function CategoryLeaf({
  category,
  xPct,
  yPct,
  born,
  active,
  reduced = false,
}: CategoryLeafProps) {
  return (
    <div
      className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${xPct}%`, top: `${yPct}%` }}
    >
      {/* Nacimiento: brota desde la rama con un leve rebote. */}
      <motion.div
        initial={{ scale: 0, opacity: 0, y: 8 }}
        animate={
          born ? { scale: 1, opacity: 1, y: 0 } : { scale: 0, opacity: 0, y: 8 }
        }
        transition={{
          type: reduced ? "tween" : "spring",
          duration: reduced ? 0 : undefined,
          stiffness: 180,
          damping: 15,
        }}
      >
        {/* Flotación: sube y baja despacio, como suspendida en el aire. */}
        <motion.div
          animate={born && !reduced ? { y: [0, -6, 0] } : { y: 0 }}
          transition={{
            duration: 5,
            repeat: born && !reduced ? Infinity : 0,
            ease: "easeInOut",
          }}
        >
          {/* Respiración: escala muy sutil. */}
          <motion.div
            className="relative flex items-center justify-center"
            animate={born && !reduced ? { scale: [1, 1.05, 1] } : { scale: 1 }}
            transition={{
              duration: 4,
              repeat: born && !reduced ? Infinity : 0,
              ease: "easeInOut",
            }}
          >
            {/* Glow: halo detrás del icono. Anima opacidad (barato) en vez de
                box-shadow. Brilla más cuando la categoría está activa. */}
            <motion.span
              aria-hidden="true"
              className="absolute rounded-full"
              style={{
                width: 78,
                height: 78,
                background:
                  "radial-gradient(circle, rgba(96,165,250,0.55) 0%, rgba(96,165,250,0) 70%)",
              }}
              animate={{
                opacity: reduced
                  ? active
                    ? 0.6
                    : 0.3
                  : active
                    ? [0.45, 0.75, 0.45]
                    : [0.2, 0.35, 0.2],
              }}
              transition={{
                duration: 3.5,
                repeat: reduced ? 0 : Infinity,
                ease: "easeInOut",
              }}
            />

            {/* La hoja: un disco de vidrio con el icono (hoy emoji, mañana
                ilustración propia). */}
            <span
              className="relative flex items-center justify-center rounded-full border"
              style={{
                width: 52,
                height: 52,
                fontSize: 24,
                background: "rgba(255,255,255,0.07)",
                borderColor: active
                  ? "rgba(147,197,253,0.55)"
                  : "rgba(255,255,255,0.14)",
                backdropFilter: "blur(2px)",
              }}
            >
              {category.icon}
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
