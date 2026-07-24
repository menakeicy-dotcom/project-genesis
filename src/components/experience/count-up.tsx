"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

import { EASE } from "@/lib/motion";

/**
 * Cuenta ascendente para números con peso emocional (XP, nivel, habilidades…).
 * Ver el número "crecer" hasta su valor da una pequeña recompensa (Duolingo,
 * Steam). Se anima UNA vez al montar; respeta `prefers-reduced-motion`
 * (muestra el valor final al instante) y termina exactamente en `value`.
 */
export function CountUp({
  value,
  duration = 0.9,
  suffix = "",
  prefix = "",
  className,
}: {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    if (reduce || value === 0) return;

    let raf = 0;
    let startTs = 0;
    const [a, b, c, d] = EASE.out;
    // Bézier cúbica → progreso suave (misma curva que el resto del sistema).
    const bezier = (t: number) => {
      // Aproximación por muestreo (suficiente para un contador visual).
      const cx = 3 * a;
      const bx = 3 * (c - a) - cx;
      const ax = 1 - cx - bx;
      const cy = 3 * b;
      const by = 3 * (d - b) - cy;
      const ay = 1 - cy - by;
      let x = t;
      for (let i = 0; i < 5; i++) {
        const err = (ax * x + bx) * x * x + cx * x - t;
        const dv = (3 * ax * x + 2 * bx) * x + cx;
        if (Math.abs(dv) < 1e-6) break;
        x -= err / dv;
      }
      return ((ay * x + by) * x + cy) * x;
    };

    setDisplay(0);
    const tick = (ts: number) => {
      if (!startTs) startTs = ts;
      const p = Math.min(1, (ts - startTs) / (duration * 1000));
      setDisplay(Math.round(bezier(p) * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration, reduce]);

  return (
    <span className={className}>
      {prefix}
      {display.toLocaleString("es")}
      {suffix}
    </span>
  );
}
