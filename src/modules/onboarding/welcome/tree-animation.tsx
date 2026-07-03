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

/** Copa central (prolongación del tronco); crece junto al tronco. */
const CROWN = {
  d: "M147,262 C148,238 149,222 150,204 C151,222 152,238 153,262 Z",
  ox: 150,
  oy: 262,
};

/**
 * Ramas de categoría (mismo orden que WELCOME_CATEGORIES). Cada una crece por
 * separado escalando desde su punto de unión al tronco (`ox,oy`), de modo que
 * parece extenderse hacia afuera, una tras otra.
 */
const BRANCHES: readonly { d: string; ox: number; oy: number }[] = [
  {
    d: "M146,392 C120,386 96,378 78,356 C98,372 122,380 150,376 Z",
    ox: 148,
    oy: 386,
  },
  {
    d: "M154,388 C184,382 208,368 224,336 C206,360 178,376 150,372 Z",
    ox: 152,
    oy: 384,
  },
  {
    d: "M150,336 C126,308 108,280 96,246 C116,282 134,306 152,320 Z",
    ox: 150,
    oy: 332,
  },
  {
    d: "M150,332 C176,302 192,270 208,230 C196,272 176,306 150,316 Z",
    ox: 150,
    oy: 328,
  },
];

/** Encuadre de "cámara" por paso: se aleja al final para ver el árbol entero. */
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
 * El árbol de SkillTree, vivo y en crecimiento. El tronco brota y crece, cada
 * rama se extiende una tras otra (con su hoja y su burbuja), y al final la
 * cámara se aleja para encuadrar el árbol completo. Todo el árbol se flexiona
 * apenas, como mecido por una brisa, y las burbujas acompañan ese movimiento
 * además de su propia deriva.
 *
 * Verde = vida/crecimiento; el tronco es color corteza para que resalte.
 */
export function TreeAnimation({ step, reduced = false }: TreeAnimationProps) {
  const trunkGrown = step >= STEP.GERMINATE;
  const seedVisible = step >= STEP.SEED;
  const activeIndex = activeCategoryIndex(step);

  const cam = at(CAMERA, step);

  const grow = { duration: reduced ? 0 : 2, ease: [0.22, 1, 0.36, 1] as const };
  const branchGrow = {
    duration: reduced ? 0 : 1,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <motion.div
      className="flex w-full justify-center"
      style={{ transformOrigin: "50% 92%" }}
      animate={{ scale: cam.scale, y: cam.y, opacity: trunkGrown ? 1 : 0 }}
      transition={{
        scale: grow,
        y: grow,
        opacity: { duration: reduced ? 0 : 1 },
      }}
    >
      {/* Flexión suave del árbol completo (ramas + burbujas acompañan). */}
      <motion.div
        className="relative h-[92vh] w-fit"
        style={{ transformOrigin: "50% 100%" }}
        animate={reduced ? { rotate: 0 } : { rotate: [-0.6, 0.7, -0.6] }}
        transition={{
          duration: 10,
          repeat: reduced ? 0 : Infinity,
          ease: "easeInOut",
        }}
      >
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

          {/* Tronco: brota y crece hacia arriba (escala desde la base). */}
          <motion.g
            style={{ transformBox: "view-box", transformOrigin: "150px 604px" }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{
              scaleY: trunkGrown ? 1 : 0,
              opacity: trunkGrown ? 1 : 0,
            }}
            transition={{
              scaleY: grow,
              opacity: { duration: reduced ? 0 : 0.4 },
            }}
          >
            <path d={TRUNK_D} fill="url(#barkGradient)" />
          </motion.g>

          {/* Copa central: crece con el tronco. */}
          <motion.g
            style={{
              transformBox: "view-box",
              transformOrigin: `${CROWN.ox}px ${CROWN.oy}px`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: trunkGrown ? 1 : 0, opacity: trunkGrown ? 1 : 0 }}
            transition={{
              scale: branchGrow,
              opacity: { duration: reduced ? 0 : 0.4 },
            }}
          >
            <path d={CROWN.d} fill="url(#barkGradient)" />
          </motion.g>

          {/* Ramas de categoría: cada una crece por separado, una tras otra. */}
          {BRANCHES.map((b, i) => {
            const grown = step >= STEP.CATEGORY + i;
            return (
              <motion.g
                key={i}
                style={{
                  transformBox: "view-box",
                  transformOrigin: `${b.ox}px ${b.oy}px`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: grown ? 1 : 0, opacity: grown ? 1 : 0 }}
                transition={{
                  scale: branchGrow,
                  opacity: { duration: reduced ? 0 : 0.4 },
                }}
              >
                <path d={b.d} fill="url(#barkGradient)" />
              </motion.g>
            );
          })}

          {/* Follaje: hojas que brotan por pasos y forman la copa. Cada hoja
              tiene un aleteo propio y desincronizado (rotación mínima), para que
              toda la copa se sienta viva, como mecida por la brisa. */}
          <g>
            {FOLIAGE.map((leaf, i) => {
              const shown = step >= leaf.step;
              const bornDelay = reduced ? 0 : (i % 6) * 0.05;
              // Aleteo continuo, desincronizado por hoja.
              const flutterDur = 3.6 + (i % 5) * 0.7; // 3.6–6.4 s
              const flutterDelay = -((i % 9) * 0.6); // fase distinta
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
                        : `transform 0.6s cubic-bezier(0.34,1.4,0.64,1) ${bornDelay}s, opacity 0.5s ease ${bornDelay}s`,
                    }}
                  >
                    <g
                      style={{
                        transformBox: "fill-box",
                        transformOrigin: "50% 90%",
                        animation:
                          reduced || !shown
                            ? undefined
                            : `stLeafFlutter ${flutterDur}s ease-in-out ${flutterDelay}s infinite`,
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
                </g>
              );
            })}
          </g>
        </svg>

        {/* Burbujas de categoría (nodos) sobre las puntas de las ramas.
            Acompañan la flexión del árbol (van dentro del mismo contenedor). */}
        {WELCOME_CATEGORIES.map((c, i) => (
          <CategoryLeaf
            key={c.id}
            category={c}
            index={i}
            xPct={(c.tip.x / VIEW_W) * 100}
            yPct={(c.tip.y / VIEW_H) * 100}
            born={step >= STEP.CATEGORY + i}
            active={activeIndex === i}
            reduced={reduced}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
