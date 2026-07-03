"use client";

import { motion } from "framer-motion";

import type { WelcomeCategory } from "./categories";

interface CategoryLeafProps {
  category: WelcomeCategory;
  /** Índice de la categoría (0-3): desincroniza el movimiento entre burbujas. */
  index: number;
  /** Posición del centro de la burbuja, en % del contenedor (0-100). */
  xPct: number;
  yPct: number;
  /** Si la burbuja ya "nació" desde su rama. */
  born: boolean;
  /** Si es la categoría que se está presentando ahora (brilla más). */
  active: boolean;
  /** Sin movimiento: aparece estática, sin flotar. */
  reduced?: boolean;
}

/**
 * Nodo de habilidad dentro de una burbuja circular.
 *
 * La burbuja NUNCA queda quieta: en cuanto nace empieza un movimiento flotante
 * muy sutil (2–5 px), lento y con una levísima rotación, como una hoja mecida
 * por la brisa. Cada burbuja usa parámetros distintos según su índice, así que
 * nunca están sincronizadas.
 *
 * Capas (todas con transform/opacity, para 60 FPS):
 *   posición → nacimiento (aparición suave) → deriva flotante → glow + icono.
 */
export function CategoryLeaf({
  category,
  index,
  xPct,
  yPct,
  born,
  active,
  reduced = false,
}: CategoryLeafProps) {
  const isFlag = category.id === "idiomas";

  // Parámetros de deriva propios de cada burbuja (desfasados entre sí).
  const ampY = 3 + (index % 3); // 3–5 px
  const ampX = 2 + (index % 2); // 2–3 px
  const rot = 1.4 + (index % 2) * 0.8; // grados
  const floatDur = 6 + (index % 4) * 0.9; // 6–8.7 s
  const floatDelay = -(index * 1.7); // fase distinta desde el inicio
  const glowDur = 3.4 + (index % 3) * 0.7;

  return (
    <div
      className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${xPct}%`, top: `${yPct}%` }}
    >
      {/* Nacimiento: aparición suave con un mínimo sobreimpulso (sin rebote). */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={born ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{
          duration: reduced ? 0 : 0.7,
          ease: [0.22, 1, 0.36, 1],
          scale: reduced
            ? { duration: 0 }
            : { duration: 0.7, ease: [0.34, 1.4, 0.64, 1] },
        }}
      >
        {/* Deriva flotante continua y desincronizada. */}
        <motion.div
          animate={
            born && !reduced
              ? {
                  x: [0, ampX, 0, -ampX, 0],
                  y: [0, -ampY, 0, ampY * 0.6, 0],
                  rotate: [0, rot, 0, -rot, 0],
                }
              : { x: 0, y: 0, rotate: 0 }
          }
          transition={{
            duration: floatDur,
            delay: floatDelay,
            repeat: born && !reduced ? Infinity : 0,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        >
          <div className="relative flex items-center justify-center">
            {/* Halo de vida (verde). Desincronizado también. */}
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
                    : [0.22, 0.4, 0.22],
              }}
              transition={{
                duration: glowDur,
                delay: floatDelay,
                repeat: reduced ? 0 : Infinity,
                ease: "easeInOut",
              }}
            />

            {/* La burbuja de vidrio con el icono propio. */}
            <span
              className="relative flex items-center justify-center rounded-full"
              style={{
                width: 50,
                height: 50,
                padding: isFlag ? 0 : 12,
                color: "#ecfdf5",
                background:
                  "linear-gradient(150deg, rgba(22,163,74,0.34), rgba(6,78,59,0.52))",
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
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
