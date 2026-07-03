"use client";

import { motion } from "framer-motion";

/**
 * Motas de luz suaves (polen/bokeh) que suben muy despacio. Aportan profundidad
 * y refuerzan la sensación de que la "cámara" asciende. Muy ligeras: unas pocas
 * capas con opacidad/desplazamiento, sin coste real de rendimiento.
 */
const MOTES = [
  { left: "18%", top: "70%", size: 6, delay: 0, dur: 11, drift: -140 },
  { left: "80%", top: "78%", size: 5, delay: 1.5, dur: 13, drift: -160 },
  { left: "34%", top: "84%", size: 4, delay: 3, dur: 12, drift: -120 },
  { left: "66%", top: "66%", size: 7, delay: 2, dur: 14, drift: -180 },
  { left: "50%", top: "88%", size: 5, delay: 4.5, dur: 12, drift: -150 },
  { left: "12%", top: "60%", size: 4, delay: 5.5, dur: 15, drift: -130 },
  { left: "88%", top: "58%", size: 5, delay: 3.8, dur: 13, drift: -170 },
  { left: "42%", top: "74%", size: 6, delay: 6, dur: 12, drift: -140 },
];

export function Particles({ reduced = false }: { reduced?: boolean }) {
  if (reduced) return null;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {MOTES.map((m, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: m.left,
            top: m.top,
            width: m.size,
            height: m.size,
            background:
              "radial-gradient(circle, rgba(187,247,208,0.5) 0%, rgba(187,247,208,0) 70%)",
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.7, 0], y: m.drift }}
          transition={{
            duration: m.dur,
            delay: m.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
