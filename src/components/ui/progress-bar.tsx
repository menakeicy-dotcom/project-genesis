"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";
import { SPRING_SOFT } from "@/lib/motion";

/**
 * Barra de progreso. El "crecimiento" (verde) se reserva para completado; el
 * avance parcial usa el verde principal.
 *
 * La barra CRECE desde cero al aparecer (muelle suave): el progreso se siente
 * como algo que avanza, no como un dato estático. Respeta
 * `prefers-reduced-motion` (aparece ya en su valor) y conserva la semántica
 * accesible en el contenedor.
 */
export function ProgressBar({
  value,
  className,
  tone = "primary",
}: {
  value: number;
  className?: string;
  tone?: "primary" | "growth";
}) {
  const reduce = useReducedMotion();
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div
      className={cn(
        "bg-muted h-2 w-full overflow-hidden rounded-full",
        className,
      )}
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <motion.div
        className={cn(
          "h-full rounded-full",
          tone === "growth" ? "bg-growth" : "bg-primary",
        )}
        initial={{ width: reduce ? `${pct}%` : 0 }}
        animate={{ width: `${pct}%` }}
        transition={reduce ? { duration: 0 } : SPRING_SOFT}
      />
    </div>
  );
}
