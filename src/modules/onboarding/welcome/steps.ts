import { WELCOME_CATEGORIES } from "./categories";

/**
 * Máquina de estados de la introducción, en pasos discretos. Mantener aquí la
 * definición (y no dispersa en los componentes) hace el flujo fácil de leer y
 * de ajustar.
 *
 *  0 → aparece la semilla
 *  1 → la semilla brilla + texto "Bienvenido a SkillTree"
 *  2 → germina: crece el brote y el tronco
 *  3.. → nace cada categoría (una por paso), como una hoja en su rama
 *  FINAL → la cámara se aleja: árbol completo + mensaje y botones
 */
export const STEP = {
  SEED: 0,
  WELCOME: 1,
  GERMINATE: 2,
  /** El primer paso de categoría. La categoría `i` corresponde a `CATEGORY + i`. */
  CATEGORY: 3,
} as const;

/** Primer paso en el que el tronco ya está creciendo/crecido. */
export const TRUNK_STEP = STEP.GERMINATE;

/** Paso final (mensaje + botones). Va justo después de la última categoría. */
export const FINAL_STEP = STEP.CATEGORY + WELCOME_CATEGORIES.length;

/**
 * Duración (ms) de cada paso antes de avanzar al siguiente. El índice es el
 * paso de origen. El paso final no avanza solo (espera al usuario).
 */
export const STEP_DURATIONS: readonly number[] = [
  1200, // 0 → 1  la semilla se asienta
  2600, // 1 → 2  se lee el título y la semilla brilla
  2400, // 2 → 3  crece el tronco antes de la primera rama
  3000, // 3 → 4  categoría 1
  3000, // 4 → 5  categoría 2
  3000, // 5 → 6  categoría 3
  3000, // 6 → 7  categoría 4 → escena final
];

/** Índice de la categoría activa en un paso dado, o -1 si no hay ninguna. */
export function activeCategoryIndex(step: number): number {
  const i = step - STEP.CATEGORY;
  return i >= 0 && i < WELCOME_CATEGORIES.length ? i : -1;
}
