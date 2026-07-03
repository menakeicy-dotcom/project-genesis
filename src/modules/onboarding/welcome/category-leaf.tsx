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
 * El icono de una categoría, presentado como una hoja destacada: brota desde su
 * rama con un pequeño rebote (spring), proyecta una sombra suave (tacto) y un
 * halo verde de "vida", y luego queda flotando y respirando muy despacio.
 *
 * El brillo verde es intencional: el verde representa vida y crecimiento, y
 * estas hojas son justo eso. El icono en sí es un SVG propio (ver `icons.tsx`).
 *
 * Capas: posición → nacimiento (rebote) → flotación → respiración → glow+icono.
 * Todo se anima con transform/opacity para mantener 60 FPS.
 */
export function CategoryLeaf({
  category,
  xPct,
  yPct,
  born,
  active,
  reduced = false,
}: CategoryLeafProps) {
  const isFlag = category.id === "idiomas";

  return (
    <div
      className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${xPct}%`, top: `${yPct}%` }}
    >
      {/* Nacimiento: brota desde la rama con un leve rebote. */}
      <motion.div
        initial={{ scale: 0, opacity: 0, y: 10 }}
        animate={
          born
            ? { scale: 1, opacity: 1, y: 0 }
            : { scale: 0, opacity: 0, y: 10 }
        }
        transition={{
          type: reduced ? "tween" : "spring",
          duration: reduced ? 0 : undefined,
          stiffness: 200,
          damping: 14,
        }}
      >
        {/* Flotación suave. */}
        <motion.div
          animate={born && !reduced ? { y: [0, -5, 0] } : { y: 0 }}
          transition={{
            duration: 5,
            repeat: born && !reduced ? Infinity : 0,
            ease: "easeInOut",
          }}
        >
          {/* Respiración muy sutil. */}
          <motion.div
            className="relative flex items-center justify-center"
            animate={born && !reduced ? { scale: [1, 1.05, 1] } : { scale: 1 }}
            transition={{
              duration: 4,
              repeat: born && !reduced ? Infinity : 0,
              ease: "easeInOut",
            }}
          >
            {/* Halo de vida (verde). Anima opacidad (barato). */}
            <motion.span
              aria-hidden="true"
              className="absolute rounded-full"
              style={{
                width: 76,
                height: 76,
                background:
                  "radial-gradient(circle, rgba(34,197,94,0.6) 0%, rgba(34,197,94,0) 70%)",
              }}
              animate={{
                opacity: reduced
                  ? active
                    ? 0.6
                    : 0.32
                  : active
                    ? [0.5, 0.8, 0.5]
                    : [0.24, 0.4, 0.24],
              }}
              transition={{
                duration: 3.5,
                repeat: reduced ? 0 : Infinity,
                ease: "easeInOut",
              }}
            />

            {/* La hoja/insignia con el icono propio. */}
            <span
              className="relative flex items-center justify-center rounded-full"
              style={{
                width: 50,
                height: 50,
                padding: isFlag ? 0 : 12,
                color: "#ecfdf5",
                background:
                  "linear-gradient(150deg, rgba(22,163,74,0.32), rgba(6,78,59,0.5))",
                border: active
                  ? "1px solid rgba(134,239,172,0.7)"
                  : "1px solid rgba(134,239,172,0.28)",
                boxShadow:
                  "0 6px 16px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.14)",
                backdropFilter: "blur(2px)",
              }}
            >
              <span className="flex h-full w-full items-center justify-center">
                {category.icon}
              </span>
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
