"use client";

import { motion } from "framer-motion";

import { CategoryLeaf } from "./category-leaf";
import { WELCOME_CATEGORIES } from "./categories";
import { FOLIAGE } from "./foliage";
import { activeCategoryIndex, STEP } from "./steps";

const VIEW_W = 300;
const VIEW_H = 640;

/** Tronco relleno, más ancho en la base y afinándose hacia arriba (corteza). */
const TRUNK_D =
  "M136,604 C133,540 145,472 144,402 C143,342 146,300 148,256 L152,256 C154,300 157,342 156,402 C155,472 167,540 164,604 Z";

/** Ramas rellenas y afiladas (nacen gruesas del tronco y terminan en punta). */
const BRANCHES_D: readonly string[] = [
  // Música (baja izquierda)
  "M146,392 C120,386 96,378 78,356 C98,372 122,380 150,376 Z",
  // Cocina (baja derecha)
  "M154,388 C184,382 208,368 224,336 C206,360 178,376 150,372 Z",
  // Programación (alta izquierda)
  "M150,336 C126,308 108,280 96,246 C116,282 134,306 152,320 Z",
  // Idiomas (alta derecha)
  "M150,332 C176,302 192,270 208,230 C196,272 176,306 150,316 Z",
  // Copa central (prolongación del tronco)
  "M147,262 C148,238 149,222 150,204 C151,222 152,238 153,262 Z",
];

const SPROUT_D = "M150,602 C150,588 150,576 150,562";

/** Borde superior del rectángulo de revelado por paso (crece de abajo arriba). */
const REVEAL_TOP: readonly number[] = [560, 560, 470, 380, 320, 250, 195, 120];

/**
 * Encuadre de "cámara" por paso. El árbol aparece al germinar (paso 2) con un
 * leve acercamiento en la base y, a medida que crece, la cámara se aleja para
 * encuadrar el árbol completo. Movimiento suave, sin saltos.
 */
const CAMERA: readonly { scale: number; y: number }[] = [
  { scale: 1.16, y: 0 },
  { scale: 1.16, y: 0 },
  { scale: 1.16, y: 0 },
  { scale: 1.12, y: -8 },
  { scale: 1.07, y: -18 },
  { scale: 1.02, y: -30 },
  { scale: 0.98, y: -42 },
  { scale: 0.82, y: -140 },
];

function at<T>(arr: readonly T[], i: number): T {
  return arr[Math.min(Math.max(i, 0), arr.length - 1)] as T;
}

interface TreeAnimationProps {
  step: number;
  reduced?: boolean;
}

/**
 * El árbol de SkillTree: semilla → brote → tronco y ramas (que crecen de abajo
 * arriba) → follaje verde que va llenando la copa hasta formar un árbol
 * frondoso. La "cámara" acompaña el crecimiento subiendo y, al final, se aleja
 * para encuadrar el árbol completo.
 *
 * Verde = vida/crecimiento: por eso las hojas y los halos son verdes. El tronco
 * es de color corteza para que el verde resalte.
 */
export function TreeAnimation({ step, reduced = false }: TreeAnimationProps) {
  const trunkGrown = step >= STEP.GERMINATE;
  const seedVisible = step >= STEP.SEED;
  const seedGlowing = step >= STEP.WELCOME && step < STEP.GERMINATE;
  const activeIndex = activeCategoryIndex(step);

  const cam = at(CAMERA, step);
  const revealTop = at(REVEAL_TOP, step);

  return (
    <motion.div
      className="flex w-full justify-center"
      style={{ transformOrigin: "50% 92%" }}
      animate={{ scale: cam.scale, y: cam.y, opacity: trunkGrown ? 1 : 0 }}
      transition={{
        scale: { duration: reduced ? 0 : 2, ease: [0.22, 1, 0.36, 1] },
        y: { duration: reduced ? 0 : 2, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: reduced ? 0 : 1 },
      }}
    >
      {/* Caja que se ajusta al SVG para que las insignias se posicionen en % del
          propio árbol (no del contenedor a pantalla completa). */}
      <div className="relative h-[92vh] w-fit">
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          className="block h-full w-auto"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="barkGradient" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#4a3121" />
              <stop offset="100%" stopColor="#7c5836" />
            </linearGradient>
            <linearGradient id="leafGradient" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#15803d" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
            <linearGradient id="leafGradientLight" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#4ade80" />
            </linearGradient>
            <clipPath id="treeReveal">
              <motion.rect
                x="0"
                width={VIEW_W}
                initial={false}
                animate={{ y: revealTop, height: VIEW_H - revealTop }}
                transition={{
                  duration: reduced ? 0 : 1.7,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />
            </clipPath>
          </defs>

          {/* Suelo: halo verde muy tenue (vida). */}
          <motion.ellipse
            cx="150"
            cy="612"
            rx="72"
            ry="10"
            fill="#22c55e"
            initial={{ opacity: 0 }}
            animate={{ opacity: seedVisible ? 0.14 : 0 }}
            transition={{ duration: reduced ? 0 : 1.2 }}
          />

          {/* Tronco + ramas: se revelan de abajo arriba (crecen). */}
          <g clipPath="url(#treeReveal)">
            <path d={TRUNK_D} fill="url(#barkGradient)" />
            {BRANCHES_D.map((d, i) => (
              <path key={i} d={d} fill="url(#barkGradient)" />
            ))}
          </g>

          {/* Brote verde inicial que asoma de la semilla antes del tronco. */}
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

          {/* Follaje: hojas que brotan por pasos y forman la copa. */}
          <motion.g
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
            animate={reduced ? { rotate: 0 } : { rotate: [-1.2, 1.2, -1.2] }}
            transition={{
              duration: 9,
              repeat: reduced ? 0 : Infinity,
              ease: "easeInOut",
            }}
          >
            {FOLIAGE.map((leaf, i) => {
              const shown = step >= leaf.step;
              const delay = reduced ? 0 : (i % 6) * 0.05;
              return (
                <g
                  key={i}
                  transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.rot})`}
                >
                  <g
                    style={{
                      transformBox: "fill-box",
                      transformOrigin: "center",
                      transform: shown ? `scale(${leaf.scale})` : "scale(0)",
                      opacity: shown ? 0.96 : 0,
                      transition: reduced
                        ? "none"
                        : `transform 0.6s cubic-bezier(0.34,1.56,0.64,1) ${delay}s, opacity 0.5s ease ${delay}s`,
                    }}
                  >
                    <path
                      d="M0,-11 C5.6,-7 5.6,5 0,11 C-5.6,5 -5.6,-7 0,-11 Z"
                      fill={
                        leaf.tint > 0.6
                          ? "url(#leafGradientLight)"
                          : "url(#leafGradient)"
                      }
                    />
                    <path
                      d="M0,-8.5 L0,8.5"
                      stroke="rgba(6,60,30,0.35)"
                      strokeWidth="0.8"
                      strokeLinecap="round"
                    />
                  </g>
                </g>
              );
            })}
          </motion.g>

          {/* Semilla en la base. */}
          <motion.circle
            cx="150"
            cy="602"
            r="8"
            fill="#a9764a"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: seedVisible && !trunkGrown ? 1 : 0.4,
              opacity: seedVisible && !trunkGrown ? 1 : 0,
            }}
            transition={{
              duration: reduced ? 0 : 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: "150px 602px" }}
          />
          {/* Brillo cálido de la semilla al germinar. */}
          <motion.circle
            cx="150"
            cy="602"
            r="18"
            fill="#fde68a"
            animate={{ opacity: seedGlowing ? [0.15, 0.45, 0.15] : 0 }}
            transition={{
              duration: 2.4,
              repeat: seedGlowing && !reduced ? Infinity : 0,
              ease: "easeInOut",
            }}
            style={{ filter: "blur(4px)" }}
          />
        </svg>

        {/* Insignias de categoría (icono propio) sobre las puntas de las ramas. */}
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
      </div>
    </motion.div>
  );
}
