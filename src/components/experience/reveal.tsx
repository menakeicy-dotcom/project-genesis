"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { revealVariants, staggerContainer } from "@/lib/motion";

/**
 * Aparición viva de contenido. En vez de "estar ahí de golpe", los elementos
 * surgen desde ligeramente abajo, como si crecieran en su sitio. Usado para
 * cuadrículas (tarjetas, estadísticas, logros) crea un efecto cascada que hace
 * que entrar en una pantalla se sienta como algo que despierta.
 *
 * Accesibilidad: con `prefers-reduced-motion` se renderiza estático (sin
 * transform ni retardo), idéntico en contenido.
 */

/** Contenedor que escalona la aparición de sus `RevealItem`. */
export function RevealGroup({
  children,
  className,
  stagger = 0.06,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}

/** Un hijo del grupo (hereda el escalonado del contenedor). */
export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} variants={revealVariants}>
      {children}
    </motion.div>
  );
}

/** Aparición individual (fuera de un grupo). */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      variants={revealVariants}
      initial="hidden"
      animate="show"
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
