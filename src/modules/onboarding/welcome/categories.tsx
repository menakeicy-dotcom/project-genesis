import type { ReactNode } from "react";

/**
 * Una categoría de ejemplo mostrada en la animación de bienvenida.
 *
 * `icon` es un `ReactNode` a propósito: hoy es un emoji, pero mañana puede ser
 * una ilustración propia (`<CocinaIcon />`, un `<Image />`, un SVG…) sin tocar
 * la lógica de animación. La hoja (`CategoryLeaf`) solo pinta lo que reciba.
 */
export interface WelcomeCategory {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  /** Trazo SVG de la rama que la sostiene (viewBox 0 0 400 520). */
  branch: string;
  /** Punto (en el viewBox) donde nace y flota la hoja con el icono. */
  tip: { x: number; y: number };
}

/**
 * Envuelve un emoji como icono accesible-neutro. Se aísla aquí para que el día
 * que existan ilustraciones propias solo cambie esta función (o el campo
 * `icon` de cada categoría), nunca los componentes de animación.
 */
function emoji(char: string): ReactNode {
  return (
    <span aria-hidden="true" style={{ lineHeight: 1 }}>
      {char}
    </span>
  );
}

/**
 * Cuatro categorías de ejemplo, en orden de aparición.
 *
 * ⚠️ El emoji 🇨🇴 (Colombia) es un homenaje y SOLO se usa en esta introducción.
 * La categoría real de Idiomas dentro de la app usa un icono mundial (🌍),
 * porque enseñará múltiples idiomas.
 */
export const WELCOME_CATEGORIES: readonly WelcomeCategory[] = [
  {
    id: "musica",
    name: "Música",
    description: "Aprende instrumentos, teoría y composición.",
    icon: emoji("🎵"),
    branch: "M200,356 C176,344 146,334 120,309",
    tip: { x: 112, y: 300 },
  },
  {
    id: "cocina",
    name: "Cocina",
    description: "Desde recetas básicas hasta gastronomía profesional.",
    icon: emoji("🍳"),
    branch: "M200,356 C224,344 254,334 280,309",
    tip: { x: 288, y: 300 },
  },
  {
    id: "programacion",
    name: "Programación",
    description: "Crea aplicaciones, videojuegos e inteligencia artificial.",
    icon: emoji("💻"),
    branch: "M200,306 C176,278 158,250 146,219",
    tip: { x: 140, y: 210 },
  },
  {
    id: "idiomas",
    name: "Idiomas",
    description: "Aprende nuevos idiomas desde cero.",
    icon: emoji("🇨🇴"),
    branch: "M200,302 C224,274 242,246 254,215",
    tip: { x: 260, y: 206 },
  },
] as const;
