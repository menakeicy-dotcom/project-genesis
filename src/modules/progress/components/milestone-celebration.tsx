"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Sparkles, TreeDeciduous } from "lucide-react";

import { CountUp } from "@/components/experience/count-up";
import { SPRING_SOFT } from "@/lib/motion";

/**
 * MOMENTO DE HITO — la celebración de subir de nivel o completar una rama.
 *
 * Diseño (Journey/Ori): contenido, elegante, natural. Un aro de luz que florece
 * una vez, un símbolo que se asienta con un muelle suave y un número que crece.
 * Nada de confeti. Aparece sobre un velo tenue, se puede cerrar con clic o Esc y
 * se desvanece solo a los pocos segundos para no estorbar al árbol.
 *
 * Accesibilidad: `role="status"` + `aria-live`; con `prefers-reduced-motion` es
 * una tarjeta estática (sin floración ni muelles) que también se autocierra.
 */
export function MilestoneCelebration({
  level,
  strandLabel,
}: {
  /** Nuevo nivel alcanzado (si se subió de nivel). */
  level?: number;
  /** Etiqueta de la rama recién completada (si aplica). */
  strandLabel?: string;
}) {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setOpen(false), 4000);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  if (!level && !strandLabel) return null;
  const leveled = !!level;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => setOpen(false)}
          role="status"
          aria-live="polite"
        >
          {/* Velo suave: oscurece apenas para dar foco, sin cortar el bosque. */}
          <div className="bg-background/70 absolute inset-0 backdrop-blur-[2px]" />

          <motion.div
            className="border-growth/30 bg-card relative flex w-full max-w-sm flex-col items-center rounded-2xl border px-8 py-10 text-center shadow-xl"
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={reduce ? { duration: 0.15 } : SPRING_SOFT}
          >
            <div className="relative mb-4 flex items-center justify-center">
              {!reduce && (
                <>
                  <span className="st-bloom border-growth/50 absolute size-20 rounded-full border-2" />
                  <span
                    className="st-bloom border-growth/30 absolute size-20 rounded-full border-2"
                    style={{ animationDelay: "0.2s" }}
                  />
                </>
              )}
              <motion.span
                className="bg-growth/15 text-growth flex size-20 items-center justify-center rounded-full"
                initial={reduce ? undefined : { scale: 0, rotate: -25 }}
                animate={reduce ? undefined : { scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
              >
                {leveled ? (
                  <span className="text-3xl font-black">
                    <CountUp value={level!} duration={0.7} />
                  </span>
                ) : (
                  <TreeDeciduous className="size-9" />
                )}
              </motion.span>
            </div>

            <h2 className="text-xl font-bold tracking-tight">
              {leveled ? `¡Nivel ${level}!` : "¡Rama completada!"}
            </h2>
            <p className="text-muted-foreground mt-1 text-sm">
              {leveled ? (
                <>Tu árbol tiene más fuerza. Sigue creciendo.</>
              ) : (
                <>
                  Has dominado{" "}
                  <span className="text-foreground font-medium">
                    {strandLabel}
                  </span>
                  . Una rama entera de tu árbol.
                </>
              )}
            </p>
            <p className="text-muted-foreground/70 mt-4 inline-flex items-center gap-1 text-xs">
              <Sparkles className="size-3" /> Toca para continuar
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
