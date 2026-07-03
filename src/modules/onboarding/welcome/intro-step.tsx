"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

import { EASE_SOFT } from "./intro-text";

interface IntroStepProps {
  /** Si esta escena está activa (montada y visible). */
  active: boolean;
  children: ReactNode;
  className?: string;
}

/**
 * Contenedor de una "escena" superpuesta (título, descripción, mensaje final).
 * Monta y desmonta su contenido con un fundido cuando cambia `active`, de modo
 * que las transiciones entre escenas nunca sean bruscas.
 */
export function IntroStep({ active, children, className }: IntroStepProps) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: EASE_SOFT }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
