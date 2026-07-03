import type { ReactNode } from "react";

/**
 * Iconos propios de las categorías de la introducción.
 *
 * Son SVG dibujados a medida (no emojis del sistema) para un acabado coherente
 * y premium. Los monocromos usan `currentColor`, así que heredan el color de la
 * hoja que los contiene; la bandera es el único con color propio (homenaje).
 *
 * Están aislados aquí a propósito: el día que existan ilustraciones definitivas
 * solo se sustituye este archivo (o el campo `icon` de cada categoría), sin
 * tocar la lógica de animación.
 */

const BASE = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** 🎵 Música — una nota con dos cabezas unidas por una plica. */
export function MusicIcon(): ReactNode {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true">
      <path d="M9 16.5V6l9-2v9" {...BASE} />
      <ellipse cx="6.5" cy="16.5" rx="2.6" ry="2.2" fill="currentColor" />
      <ellipse cx="15.5" cy="14.5" rx="2.6" ry="2.2" fill="currentColor" />
    </svg>
  );
}

/** 🍳 Cocina — un gorro de chef. */
export function ChefHatIcon(): ReactNode {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true">
      <path
        d="M7 14.5a3.6 3.6 0 1 1 .4-7.18A4.2 4.2 0 0 1 16.6 6.9 3.6 3.6 0 1 1 17 14.5Z"
        fill="currentColor"
        opacity="0.92"
      />
      <path
        d="M7.5 14.5h9v2.6a1.6 1.6 0 0 1-1.6 1.6H9.1a1.6 1.6 0 0 1-1.6-1.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** 💻 Programación — chevrones de código con una barra. */
export function CodeIcon(): ReactNode {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true">
      <path d="M8 8.5 4 12l4 3.5" {...BASE} strokeWidth={1.9} />
      <path d="M16 8.5 20 12l-4 3.5" {...BASE} strokeWidth={1.9} />
      <path d="M13.5 6.5 10.5 17.5" {...BASE} strokeWidth={1.9} />
    </svg>
  );
}

/**
 * 🇨🇴 Idiomas — la bandera de Colombia (homenaje), SOLO para la introducción.
 * En la app real la categoría Idiomas usa un icono mundial.
 * Proporciones: amarillo (mitad), azul (cuarto), rojo (cuarto).
 */
export function ColombiaFlagIcon(): ReactNode {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true">
      <defs>
        <clipPath id="welcome-flag-co">
          <rect x="3.5" y="6.5" width="17" height="11" rx="2.4" />
        </clipPath>
      </defs>
      <g clipPath="url(#welcome-flag-co)">
        <rect x="3.5" y="6.5" width="17" height="5.5" fill="#FCD116" />
        <rect x="3.5" y="12" width="17" height="2.75" fill="#003893" />
        <rect x="3.5" y="14.75" width="17" height="2.75" fill="#CE1126" />
      </g>
      <rect
        x="3.5"
        y="6.5"
        width="17"
        height="11"
        rx="2.4"
        fill="none"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="0.8"
      />
    </svg>
  );
}
