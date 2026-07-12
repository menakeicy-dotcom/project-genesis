"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { markWelcomeSeenAction } from "@/modules/onboarding/actions";
import { WELCOME_CATEGORIES } from "./categories";
import { IntroStep } from "./intro-step";
import { EASE_SOFT, IntroText } from "./intro-text";
import { MacroSeed } from "./macro-seed";
import { Particles } from "./particles";
import { TreeAnimation } from "./tree-animation";
import { activeCategoryIndex, FINAL_STEP, STEP, STEP_DURATIONS } from "./steps";

/**
 * Pantalla de bienvenida (onboarding) de SkillTree.
 *
 * Orquesta la experiencia: la máquina de estados por pasos, los textos de cada
 * escena, el árbol (`TreeAnimation`) y los botones finales. Se muestra una sola
 * vez por cuenta; al terminar u omitir, persiste el estado en la base de datos
 * (`markWelcomeSeenAction`) para no repetirse en ningún dispositivo.
 *
 * Respeta `prefers-reduced-motion`: salta directamente a la escena final,
 * estática, con el árbol ya formado.
 */
export function OnboardingScreen() {
  const prefersReduced = useReducedMotion();
  const reduced = !!prefersReduced;

  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);
  const [step, setStep] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Programa la línea de tiempo (o salta al final si se pide menos movimiento).
  useEffect(() => {
    if (reduced) {
      setStep(FINAL_STEP);
      return;
    }
    let acc = 0;
    STEP_DURATIONS.forEach((duration, i) => {
      acc += duration;
      timers.current.push(setTimeout(() => setStep(i + 1), acc));
    });
    const snapshot = timers.current;
    return () => snapshot.forEach(clearTimeout);
  }, [reduced]);

  const finish = useCallback(() => {
    timers.current.forEach(clearTimeout);
    setClosing(true);
    // Persiste "vista" en segundo plano; aunque falle la red, no reabrimos la
    // intro en esta sesión (no atrapamos al usuario).
    void markWelcomeSeenAction();
    window.setTimeout(() => setVisible(false), 700);
  }, []);

  // Permite omitir con Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") finish();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [finish]);

  const activeIndex = activeCategoryIndex(step);
  const activeCategory =
    activeIndex >= 0 ? WELCOME_CATEGORIES[activeIndex] : null;
  const finalScene = step >= FINAL_STEP;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Bienvenida a SkillTree"
          className="fixed inset-0 z-[60] flex items-center justify-center overflow-hidden"
          style={{
            // Ambiente de bosque al amanecer: un halo cálido de luz arriba y una
            // profundidad verde-oscura abajo, para que el árbol verde respire.
            background:
              "radial-gradient(120% 80% at 50% 6%, rgba(253,230,138,0.10) 0%, rgba(253,230,138,0) 40%), radial-gradient(ellipse at 50% 32%, #143128 0%, #0b1c17 48%, #050f0b 100%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: closing ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: EASE_SOFT }}
        >
          {/* Profundidad: motas de luz que ascienden. */}
          <Particles reduced={reduced} />
          {/* Viñeta suave para enfocar el centro. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 45%, transparent 55%, rgba(0,0,0,0.45) 100%)",
            }}
          />
          {/* Difuminado inferior: da legibilidad a los textos sobre el árbol. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%]"
            style={{
              background:
                "linear-gradient(to top, rgba(5,15,11,0.85) 0%, rgba(5,15,11,0.5) 40%, transparent 100%)",
            }}
          />
          {/* Omitir, discreto, durante las escenas previas a la final. */}
          {!finalScene && (
            <button
              type="button"
              onClick={finish}
              className="absolute top-5 right-5 z-10 rounded-full px-3 py-1.5 text-xs text-white/45 transition-colors hover:text-white/90"
            >
              Omitir introducción
            </button>
          )}

          <div className="relative flex h-full w-full max-w-[540px] flex-col items-center justify-center px-6">
            {/* El árbol (aparece al germinar). */}
            <TreeAnimation step={step} reduced={reduced} />

            {/* Escena 1: primer plano de la semilla, centrado. */}
            <IntroStep
              active={step < STEP.GERMINATE}
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
            >
              <div style={{ transform: "translateY(-24px)" }}>
                <MacroSeed
                  glowing={step >= STEP.WELCOME && step < STEP.GERMINATE}
                  reduced={reduced}
                />
              </div>
            </IntroStep>

            {/* Título de bienvenida, bajo la semilla. */}
            <IntroStep
              active={step === STEP.WELCOME}
              className="pointer-events-none absolute inset-x-0 top-[62%] px-8 text-center"
            >
              <IntroText>
                <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Bienvenido a SkillTree
                </h1>
              </IntroText>
            </IntroStep>

            {/* Escenas 2-3: nombre + descripción de la categoría activa. */}
            <div className="pointer-events-none absolute inset-x-0 bottom-[30%] px-8 text-center">
              <AnimatePresence mode="wait">
                {activeCategory && (
                  <IntroText key={activeCategory.id} duration={0.6}>
                    <p className="text-xl font-semibold text-white sm:text-2xl">
                      {activeCategory.name}
                    </p>
                    <p className="mx-auto mt-1.5 max-w-sm text-sm text-emerald-100/75 sm:text-base">
                      {activeCategory.description}
                    </p>
                  </IntroText>
                )}
              </AnimatePresence>
            </div>

            {/* Escena final: mensaje + botones. */}
            <IntroStep
              active={finalScene}
              className="absolute inset-x-0 bottom-[11%] flex flex-col items-center px-8 text-center"
            >
              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: EASE_SOFT, delay: 0.2 }}
                className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
              >
                Ahora es tu turno de crecer.
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: EASE_SOFT, delay: 0.5 }}
                className="mt-7 flex flex-col items-center gap-3"
              >
                <button
                  type="button"
                  onClick={finish}
                  className="inline-flex h-11 items-center justify-center rounded-md bg-[#15803d] px-6 text-base font-medium text-white shadow-sm transition-colors hover:bg-[#166534] focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none"
                >
                  🌱 Comenzar mi viaje
                </button>
                <button
                  type="button"
                  onClick={finish}
                  className="text-sm text-white/55 transition-colors hover:text-white/90"
                >
                  Omitir introducción
                </button>
              </motion.div>
            </IntroStep>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
