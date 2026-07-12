"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hojas cayendo por toda la interfaz: momentos discretos que hacen sentir que
 * el árbol está vivo. Muy pocas hojas, caída lenta con rotación, baja opacidad,
 * no bloquea clics y respeta prefers-reduced-motion.
 *
 * Se monta una sola vez en el layout raíz (cubre todas las páginas). El coste
 * es mínimo: como máximo unas pocas hojas activas, animadas solo con `transform`
 * (GPU) mediante el keyframe `stFall` de globals.css.
 */

interface Leaf {
  id: number;
  left: number; // %
  size: number; // px
  duration: number; // ms
  drift: number; // px (deriva horizontal)
  spin: number; // deg
  opacity: number;
  tint: string;
}

const TINTS = ["#3f9b57", "#4ea85f", "#68b97a", "#2f8f52"];

export function FallingLeaves() {
  const [mounted, setMounted] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  const nextId = useRef(1);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (!mounted || reduced) return;
    let active = true;
    const timers = new Set<ReturnType<typeof setTimeout>>();

    const make = (): Leaf => ({
      id: nextId.current++,
      left: 4 + Math.random() * 92,
      size: 10 + Math.random() * 9,
      duration: 9000 + Math.random() * 6000,
      drift: -40 + Math.random() * 100,
      spin: 200 + Math.random() * 240,
      opacity: 0.2 + Math.random() * 0.2,
      tint: TINTS[Math.floor(Math.random() * TINTS.length)]!,
    });

    const spawn = () => {
      if (!active) return;
      setLeaves((prev) => {
        if (prev.length >= 5) return prev;
        const add = [make()];
        if (Math.random() < 0.22 && prev.length < 4) add.push(make());
        return [...prev, ...add];
      });
      const next = 7000 + Math.random() * 11000; // 7–18 s
      const t = setTimeout(spawn, next);
      timers.add(t);
    };

    const t0 = setTimeout(spawn, 2500);
    timers.add(t0);
    return () => {
      active = false;
      timers.forEach(clearTimeout);
    };
  }, [mounted, reduced]);

  if (!mounted || reduced) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
    >
      {leaves.map((l) => (
        <span
          key={l.id}
          onAnimationEnd={() =>
            setLeaves((prev) => prev.filter((x) => x.id !== l.id))
          }
          style={
            {
              position: "absolute",
              top: 0,
              left: `${l.left}%`,
              width: l.size,
              height: l.size,
              color: l.tint,
              animation: `stFall ${l.duration}ms linear forwards`,
              ["--drift" as string]: `${l.drift}px`,
              ["--spin" as string]: `${l.spin}deg`,
              ["--leaf-opacity" as string]: String(l.opacity),
              willChange: "transform, opacity",
            } as React.CSSProperties
          }
        >
          <svg viewBox="0 0 24 24" width={l.size} height={l.size} fill="none">
            <path
              d="M12 2C6 5 3 10 4 20c9 1 15-4 16-13-4 0-7 1-9 4-1-4 0-7 1-9Z"
              fill="currentColor"
            />
            <path
              d="M6 18C10 14 14 10 18 8"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}
