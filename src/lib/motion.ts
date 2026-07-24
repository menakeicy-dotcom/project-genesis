/**
 * SISTEMA DE MOVIMIENTO de SkillTree — una sola gramática para todo.
 *
 * El objetivo no es "animar cosas", es que la plataforma se sienta VIVA y
 * COHERENTE: mismos tiempos, mismas curvas y misma intención en cada pantalla.
 * Principio (Ori/Monument Valley/Apple HIG): el movimiento comunica causa y
 * efecto; nunca es decoración. Todo lo que se mueve lo hace con propósito.
 *
 * Reglas:
 * - Solo `transform` y `opacity` (baratos en GPU, nunca provocan reflow).
 * - Duraciones cortas para respuesta; curvas con una salida suave y orgánica
 *   (como una hoja que se asienta), no lineales ni robóticas.
 * - Respetar SIEMPRE `prefers-reduced-motion` (los componentes usan
 *   `useReducedMotion` de framer-motion y caen a un estado instantáneo).
 */

/** Duraciones base (segundos). */
export const DURATION = {
  fast: 0.18,
  base: 0.32,
  slow: 0.6,
} as const;

/** Curvas de aceleración con carácter propio. */
export const EASE = {
  /** Salida suave estándar (deceleración natural). */
  out: [0.22, 1, 0.36, 1] as [number, number, number, number],
  /** Entrada+salida equilibrada. */
  inOut: [0.65, 0, 0.35, 1] as [number, number, number, number],
  /** "Crecimiento": un pequeño rebasamiento orgánico, como algo que brota. */
  grow: [0.34, 1.32, 0.64, 1] as [number, number, number, number],
} as const;

/** Muelle suave para elementos que "asientan" (barras, anillos, insignias). */
export const SPRING_SOFT = { type: "spring", stiffness: 140, damping: 18 } as const;

/**
 * Variantes de aparición reutilizables (framer-motion). Un elemento surge
 * desde ligeramente abajo con un desvanecido: la sensación es que "crece" en su
 * sitio, no que se desliza de fuera.
 */
export const revealVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE.out },
  },
};

/** Contenedor que escalona la aparición de sus hijos (efecto "cascada"). */
export const staggerContainer = (stagger = 0.06, delay = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});
