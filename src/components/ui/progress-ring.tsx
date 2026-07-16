import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Anillo de progreso circular, REUTILIZABLE y ACCESIBLE.
 *
 * Sirve para cualquier progreso 0–100 (meta diaria, nivel, avance de un árbol o
 * de una rama). No depende de ninguna disciplina. Expone semántica
 * `role="progressbar"` para lectores de pantalla y respeta el tema.
 */
export function ProgressRing({
  value,
  size = 72,
  stroke = 8,
  tone = "primary",
  label,
  className,
  children,
}: {
  /** Progreso 0–100. */
  value: number;
  size?: number;
  stroke?: number;
  tone?: "primary" | "growth";
  /** Texto accesible (aria-label). Si falta, se usa "N% completado". */
  label?: string;
  className?: string;
  /** Contenido centrado (número, icono…). */
  children?: ReactNode;
}) {
  const pct = Math.max(0, Math.min(100, Math.round(value)));
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;
  const color = tone === "growth" ? "var(--growth)" : "var(--primary)";

  return (
    <div
      className={cn("relative inline-flex items-center justify-center", className)}
      style={{ width: size, height: size }}
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label ?? `${pct}% completado`}
    >
      <svg width={size} height={size} className="-rotate-90" aria-hidden>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--muted)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 600ms ease" }}
        />
      </svg>
      {children != null && (
        <span className="absolute inset-0 flex items-center justify-center">
          {children}
        </span>
      )}
    </div>
  );
}
