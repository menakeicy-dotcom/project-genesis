"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  HelpCircle,
  Leaf,
  Lock,
  Map,
  Sparkles,
  Sprout,
  TreeDeciduous,
  X,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Tutorial "¿Cómo funciona SkillTree?": explica en pocos pasos el árbol, las
 * hojas, el desbloqueo, el XP y cómo avanzar. Se puede saltar y volver a ver.
 *
 * - Botón siempre disponible para reproducirlo.
 * - Se auto-abre una sola vez por navegador (localStorage) cuando `autoOpen`.
 * - Respeta prefers-reduced-motion.
 */

const SLIDES: { Icon: LucideIcon; title: string; text: string }[] = [
  {
    Icon: TreeDeciduous,
    title: "Bienvenido a SkillTree",
    text: "Aprende cualquier habilidad como un árbol que crece contigo. Nada de listas aburridas: un camino vivo.",
  },
  {
    Icon: Map,
    title: "El árbol es tu mapa",
    text: "Cada árbol es una disciplina. El tronco son los cimientos y las ramas, las áreas que dominarás.",
  },
  {
    Icon: Leaf,
    title: "Las hojas son habilidades",
    text: "Toca una hoja para abrir su lección interactiva y empezar a aprender, paso a paso.",
  },
  {
    Icon: Lock,
    title: "Desbloquea tu camino",
    text: "Completa una habilidad para abrir las siguientes. Si una está bloqueada, verás justo qué te falta.",
  },
  {
    Icon: Sparkles,
    title: "Gana XP y sube de nivel",
    text: "Cada habilidad completada te da XP. Acumúlala para subir de nivel y ver crecer tu progreso.",
  },
  {
    Icon: Sprout,
    title: "Haz crecer tu árbol",
    text: "Sigue la hoja que brilla —es tu próxima habilidad disponible— y observa cómo brota una hoja nueva. ¡Empecemos!",
  },
];

const SEEN_KEY = "st_howitworks_v1";

export function HowItWorks({ autoOpen = false }: { autoOpen?: boolean }) {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [i, setI] = useState(0);

  useEffect(() => {
    if (!autoOpen) return;
    try {
      if (!localStorage.getItem(SEEN_KEY)) setOpen(true);
    } catch {
      /* localStorage no disponible: no forzamos */
    }
  }, [autoOpen]);

  const close = () => {
    setOpen(false);
    setI(0);
    try {
      localStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  const last = i === SLIDES.length - 1;
  const slide = SLIDES[i]!;

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setI(0);
          setOpen(true);
        }}
        className="text-muted-foreground hover:text-foreground hover:border-primary inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-medium transition-colors"
      >
        <HelpCircle className="size-3.5" /> ¿Cómo funciona?
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Cómo funciona SkillTree"
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={close}
              aria-hidden
            />
            <motion.div
              className="border-border bg-card relative w-full max-w-md overflow-hidden rounded-2xl border shadow-xl"
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 8 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <button
                type="button"
                onClick={close}
                aria-label="Cerrar"
                className="text-muted-foreground hover:text-foreground absolute right-3 top-3 z-10"
              >
                <X className="size-5" />
              </button>

              <div className="px-6 pt-10 pb-6 text-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={i}
                    initial={reduce ? { opacity: 0 } : { opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.22 }}
                  >
                    <div className="bg-primary/10 text-primary mx-auto mb-4 flex size-20 items-center justify-center rounded-3xl">
                      <slide.Icon className="size-9" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-xl font-bold tracking-tight">
                      {slide.title}
                    </h2>
                    <p className="text-muted-foreground mx-auto mt-2 max-w-xs text-sm leading-relaxed">
                      {slide.text}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Puntos de progreso */}
                <div className="mt-6 flex items-center justify-center gap-1.5">
                  {SLIDES.map((_, k) => (
                    <span
                      key={k}
                      className={cn(
                        "h-1.5 rounded-full transition-all",
                        k === i ? "bg-primary w-5" : "bg-muted w-1.5",
                      )}
                    />
                  ))}
                </div>
              </div>

              <div className="border-border flex items-center justify-between border-t px-4 py-3">
                <button
                  type="button"
                  onClick={close}
                  className="text-muted-foreground hover:text-foreground px-2 py-1 text-sm"
                >
                  Saltar
                </button>
                <div className="flex items-center gap-2">
                  {i > 0 && (
                    <button
                      type="button"
                      onClick={() => setI((v) => v - 1)}
                      className="text-foreground rounded-lg px-3 py-1.5 text-sm"
                    >
                      Atrás
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => (last ? close() : setI((v) => v + 1))}
                    className="bg-primary text-primary-foreground rounded-lg px-4 py-1.5 text-sm font-semibold"
                  >
                    {last ? "Empezar" : "Siguiente"}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
