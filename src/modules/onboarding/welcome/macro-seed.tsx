"use client";

import { motion } from "framer-motion";

interface MacroSeedProps {
  /** La semilla emite su brillo (justo antes de germinar). */
  glowing: boolean;
  reduced?: boolean;
}

/**
 * Primer plano macro de la semilla, protagonista de la apertura. Llena el
 * centro de la pantalla, late suavemente y emite un brillo cálido antes de
 * germinar. Es un elemento propio (no el árbol) para que el encuadre sea
 * siempre correcto; luego se funde con el árbol que crece.
 */
export function MacroSeed({ glowing, reduced = false }: MacroSeedProps) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Halo cálido. */}
      <motion.span
        aria-hidden="true"
        className="absolute rounded-full"
        style={{
          width: 300,
          height: 300,
          background:
            "radial-gradient(circle, rgba(253,230,138,0.28) 0%, rgba(253,230,138,0) 68%)",
        }}
        animate={{
          opacity: reduced
            ? 0.5
            : glowing
              ? [0.4, 0.75, 0.4]
              : [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 3,
          repeat: reduced ? 0 : Infinity,
          ease: "easeInOut",
        }}
      />

      {/* La semilla, con un latido muy sutil. */}
      <motion.svg
        width="150"
        height="200"
        viewBox="0 0 150 200"
        fill="none"
        aria-hidden="true"
        animate={reduced ? { scale: 1 } : { scale: [1, 1.03, 1] }}
        transition={{
          duration: 3.4,
          repeat: reduced ? 0 : Infinity,
          ease: "easeInOut",
        }}
      >
        <defs>
          <linearGradient id="seedGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a9764a" />
            <stop offset="100%" stopColor="#5b3a22" />
          </linearGradient>
        </defs>

        {/* Brote verde que asoma al germinar. */}
        <motion.path
          d="M75,64 C75,44 75,34 75,22"
          stroke="#22c55e"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: glowing ? 1 : 0,
            opacity: glowing ? 1 : 0,
          }}
          transition={{ duration: reduced ? 0 : 1.1, ease: "easeOut" }}
        />

        {/* Cuerpo de la semilla (forma de gota). */}
        <path
          d="M75,60 C104,80 100,168 75,178 C50,168 46,80 75,60 Z"
          fill="url(#seedGradient)"
        />
        {/* Reflejo suave. */}
        <ellipse cx="66" cy="98" rx="9" ry="20" fill="rgba(255,255,255,0.16)" />
      </motion.svg>
    </div>
  );
}
