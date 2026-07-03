import type { ReactNode } from "react";

import { ChefHatIcon, CodeIcon, ColombiaFlagIcon, MusicIcon } from "./icons";

/**
 * Una categoría de ejemplo mostrada en la animación de bienvenida.
 *
 * `icon` es un `ReactNode` a propósito: hoy es un icono propio (SVG), pero
 * mañana puede ser una ilustración definitiva sin tocar la animación. La hoja
 * (`CategoryLeaf`) solo pinta lo que reciba.
 */
export interface WelcomeCategory {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  /** Punto (en el viewBox 0 0 300 640) donde crece esta categoría. */
  tip: { x: number; y: number };
}

/**
 * Cuatro categorías de ejemplo, en orden de aparición.
 *
 * ⚠️ El icono de Idiomas es la bandera de Colombia: es un homenaje y SOLO se usa
 * en esta introducción. La categoría real de Idiomas dentro de la app usa un
 * icono mundial (🌍), porque enseñará múltiples idiomas.
 */
export const WELCOME_CATEGORIES: readonly WelcomeCategory[] = [
  {
    id: "musica",
    name: "Música",
    description: "Aprende instrumentos, teoría y composición.",
    icon: <MusicIcon />,
    tip: { x: 78, y: 356 },
  },
  {
    id: "cocina",
    name: "Cocina",
    description: "Desde recetas básicas hasta gastronomía profesional.",
    icon: <ChefHatIcon />,
    tip: { x: 224, y: 336 },
  },
  {
    id: "programacion",
    name: "Programación",
    description: "Crea aplicaciones, videojuegos e inteligencia artificial.",
    icon: <CodeIcon />,
    tip: { x: 96, y: 246 },
  },
  {
    id: "idiomas",
    name: "Idiomas",
    description: "Aprende nuevos idiomas desde cero.",
    icon: <ColombiaFlagIcon />,
    tip: { x: 208, y: 230 },
  },
] as const;
