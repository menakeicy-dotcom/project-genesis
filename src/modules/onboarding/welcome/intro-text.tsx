"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** Curva de easing suave y natural usada en toda la introducción. */
export const EASE_SOFT = [0.22, 1, 0.36, 1] as const;

interface IntroTextProps {
  children: ReactNode;
  className?: string;
  /** Retardo (s) antes de aparecer. */
  delay?: number;
  /** Duración (s) del fundido de entrada. */
  duration?: number;
}

/**
 * Texto que entra con un fundido suave y un leve deslizamiento hacia arriba.
 * Es la unidad tipográfica de la introducción (título, nombre, descripción).
 * Pensado para vivir dentro de un `<AnimatePresence>` para animar también la
 * salida.
 */
export function IntroText({
  children,
  className,
  delay = 0,
  duration = 0.9,
}: IntroTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration, ease: EASE_SOFT, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
