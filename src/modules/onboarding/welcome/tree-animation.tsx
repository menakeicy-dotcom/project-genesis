"use client";

import { motion } from "framer-motion";

import { Branch } from "./branch";
import { CategoryLeaf } from "./category-leaf";
import { WELCOME_CATEGORIES } from "./categories";
import { activeCategoryIndex, FINAL_STEP, STEP, TRUNK_STEP } from "./steps";

/** Trazo del tronco: una curva suave, nunca una línea recta. */
const TRUNK_D = "M200,478 C196,412 205,346 200,292 C198,272 201,258 200,244";
/** Semilla y primer brote, en la base del tronco. */
const SPROUT_D = "M200,478 C200,466 200,456 200,446";

const VIEW_W = 400;
const VIEW_H = 520;

interface TreeAnimationProps {
  step: number;
  reduced?: boolean;
}

/**
 * El árbol completo: semilla → brote → tronco → ramas → hojas (categorías).
 * Es puramente presentacional: recibe el `step` actual y deriva qué mostrar.
 * En la escena final la "cámara" se aleja un poco para encuadrar el árbol
 * entero por encima del mensaje.
 */
export function TreeAnimation({ step, reduced = false }: TreeAnimationProps) {
  const finalScene = step >= FINAL_STEP;
  const trunkGrown = step >= TRUNK_STEP;
  const seedVisible = step >= STEP.SEED;
  const seedGlowing = step >= STEP.WELCOME && step < STEP.GERMINATE;
  const activeIndex = activeCategoryIndex(step);

  return (
    <motion.div
      className="relative w-full"
      style={{ transformOrigin: "50% 82%" }}
      animate={{
        scale: finalScene ? 0.9 : 1.08,
        y: finalScene ? -46 : 0,
      }}
      transition={{ duration: reduced ? 0 : 2.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="mx-auto block h-auto w-full max-w-[360px]"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="branchGradient" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#3b6fd4" />
            <stop offset="100%" stopColor="#6ea8fe" />
          </linearGradient>
        </defs>

        {/* Suelo: un halo verde muy tenue (verde = crecimiento). */}
        <motion.ellipse
          cx="200"
          cy="486"
          rx="76"
          ry="11"
          fill="#22c55e"
          initial={{ opacity: 0 }}
          animate={{ opacity: seedVisible ? 0.12 : 0 }}
          transition={{ duration: reduced ? 0 : 1.2 }}
        />

        {/* Tronco. */}
        <Branch d={TRUNK_D} grown={trunkGrown} width={6} reduced={reduced} />

        {/* Ramas: cada una crece justo antes de nacer su categoría. */}
        {WELCOME_CATEGORIES.map((c, i) => (
          <Branch
            key={c.id}
            d={c.branch}
            grown={step >= STEP.CATEGORY + i}
            width={4}
            reduced={reduced}
          />
        ))}

        {/* Primer brote verde que asoma de la semilla antes de crecer el tronco. */}
        <motion.path
          d={SPROUT_D}
          stroke="#22c55e"
          strokeWidth={4}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: seedGlowing ? 1 : 0,
            opacity: trunkGrown ? 0 : seedGlowing ? 1 : 0,
          }}
          transition={{ duration: reduced ? 0 : 1 }}
        />

        {/* Semilla en la base. */}
        <motion.circle
          cx="200"
          cy="478"
          r="7"
          fill="#a9764a"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: seedVisible && !trunkGrown ? 1 : 0.4,
            opacity: seedVisible && !trunkGrown ? 1 : 0,
          }}
          transition={{ duration: reduced ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "200px 478px" }}
        />
        {/* Brillo suave de la semilla mientras germina. */}
        <motion.circle
          cx="200"
          cy="478"
          r="16"
          fill="#fde68a"
          animate={{ opacity: seedGlowing ? [0.15, 0.4, 0.15] : 0 }}
          transition={{
            duration: 2.4,
            repeat: seedGlowing && !reduced ? Infinity : 0,
            ease: "easeInOut",
          }}
          style={{ filter: "blur(4px)" }}
        />
      </svg>

      {/* Hojas (iconos de categoría) superpuestas sobre las puntas de las ramas. */}
      {WELCOME_CATEGORIES.map((c, i) => (
        <CategoryLeaf
          key={c.id}
          category={c}
          xPct={(c.tip.x / VIEW_W) * 100}
          yPct={(c.tip.y / VIEW_H) * 100}
          born={step >= STEP.CATEGORY + i}
          active={activeIndex === i}
          reduced={reduced}
        />
      ))}
    </motion.div>
  );
}
