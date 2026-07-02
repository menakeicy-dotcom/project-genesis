"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { markWelcomeSeenAction } from "@/modules/onboarding/actions";

/**
 * Animación de bienvenida cinematográfica de SkillTree.
 *
 * No es un tutorial: es una presentación emocional. Se muestra una sola vez
 * (la primera vez que el usuario entra tras registrarse). El estado "vista" se
 * guarda en la base de datos (ver `markWelcomeSeenAction`), no en el navegador,
 * para que no se repita en ningún dispositivo.
 *
 * Diseño técnico:
 * - Ligero: solo SVG + CSS (sin librerías de animación). El árbol es un puñado
 *   de trazos que "se dibujan" con `stroke-dashoffset`.
 * - Una máquina de estados por pasos (`step`) sincroniza el crecimiento del
 *   árbol con los textos de cada escena.
 * - Respeta `prefers-reduced-motion`: si el usuario lo pide, se salta a la
 *   escena final sin movimiento.
 */

/**
 * Las cinco categorías de ejemplo, en el orden pedido.
 *
 * ⚠️ IMPORTANTE: la bandera 🇨🇴 es un homenaje al país donde nació SkillTree y
 * SOLO debe aparecer en esta animación. La categoría real de Idiomas usa 🌍
 * (un idioma universal), como corresponde a su contenido.
 */
// Cada categoría lleva también la geometría de su rama (coordenadas en el
// viewBox 0 0 400 520): la rama nace del tronco y termina en `tip`, donde vive
// el icono. Mantener icono, frase y geometría juntos evita índices paralelos.
const CATEGORIES = [
  {
    icon: "🎵",
    name: "Música",
    phrase: "Aprende instrumentos, teoría musical y composición.",
    d: "M200,320 Q150,300 96,258",
    tip: { x: 96, y: 250 },
  },
  {
    icon: "🍳",
    name: "Cocina",
    phrase: "Desde recetas básicas hasta técnicas avanzadas.",
    d: "M200,320 Q250,300 304,258",
    tip: { x: 304, y: 250 },
  },
  {
    icon: "💻",
    name: "Programación",
    phrase: "Construye aplicaciones, videojuegos y sitios web.",
    d: "M200,250 Q152,205 118,158",
    tip: { x: 118, y: 150 },
  },
  {
    icon: "🇨🇴",
    name: "Idiomas",
    phrase: "Aprende nuevos idiomas y conecta con el mundo.",
    d: "M200,250 Q248,205 282,158",
    tip: { x: 282, y: 150 },
  },
  {
    icon: "🎨",
    name: "Diseño",
    phrase: "Desarrolla tu creatividad con diseño gráfico y digital.",
    d: "M200,210 Q200,165 200,120",
    tip: { x: 200, y: 112 },
  },
] as const;

const TRUNK_D = "M200,470 Q195,360 200,205";

/**
 * Duración (ms) de cada paso antes de avanzar al siguiente. El índice del array
 * es el paso de origen. La escena final (paso 11) no avanza automáticamente.
 */
const STEP_DURATIONS = [
  700, // 0 → 1  aparece la semilla
  1400, // 1 → 2  germina (brote)
  1000, // 2 → 3  texto "Bienvenido a SkillTree"
  2200, // 3 → 4  texto "El lugar donde crecerán tus habilidades."
  2200, // 4 → 5  se desvanecen los textos y crece el tronco
  1700, // 5 → 6  categoría 1
  2600, // 6 → 7  categoría 2
  2600, // 7 → 8  categoría 3
  2600, // 8 → 9  categoría 4
  2600, // 9 → 10 categoría 5
  2600, // 10 → 11 escena final
] as const;

const FINAL_STEP = 11;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export function WelcomeIntro() {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);
  const [step, setStep] = useState(0);
  const reduced = usePrefersReducedMotion();
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Programa la línea de tiempo de la animación (o salta al final si el usuario
  // prefiere movimiento reducido).
  useEffect(() => {
    if (reduced) {
      setStep(FINAL_STEP);
      return;
    }
    let acc = 0;
    STEP_DURATIONS.forEach((duration, i) => {
      acc += duration;
      timers.current.push(setTimeout(() => setStep(i + 1), acc));
    });
    const snapshot = timers.current;
    return () => snapshot.forEach(clearTimeout);
  }, [reduced]);

  const finish = useCallback(async () => {
    // Detiene cualquier avance pendiente y cierra con un suave desvanecido.
    timers.current.forEach(clearTimeout);
    setClosing(true);
    // Persiste "vista" en segundo plano; aunque falle la red, no reabrimos la
    // intro en esta sesión (evita atrapar al usuario).
    void markWelcomeSeenAction();
    setTimeout(() => setVisible(false), 650);
  }, []);

  // Permite omitir con la tecla Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") void finish();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [finish]);

  if (!visible) return null;

  const dur = (ms: number) => (reduced ? 0 : ms);

  const seedVisible = step >= 1;
  const sproutVisible = step >= 2;
  const welcome1 = step >= 3 && step <= 4;
  const welcome2 = step >= 4 && step <= 4;
  const trunkGrown = step >= 5;
  const finalScene = step >= FINAL_STEP;
  const activeCategory = step >= 6 && step <= 10 ? step - 6 : -1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Bienvenida a SkillTree"
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, #0f2540 0%, #0a1626 45%, #060d18 100%)",
        opacity: closing ? 0 : 1,
        transition: "opacity 600ms ease",
      }}
    >
      {/* Botón discreto para omitir durante las escenas previas a la final. */}
      {!finalScene && (
        <button
          type="button"
          onClick={finish}
          className="absolute top-4 right-4 z-10 rounded-full px-3 py-1.5 text-xs text-white/50 transition-colors hover:text-white/90"
        >
          Omitir introducción
        </button>
      )}

      <div className="relative flex h-full w-full max-w-[520px] flex-col items-center justify-center px-6">
        {/* ─── El árbol (SVG) ─────────────────────────────────────────── */}
        <div
          className="relative w-full"
          style={{
            // En la escena final la "cámara" se aleja y sube un poco para que
            // el árbol completo quede por encima del mensaje y los botones.
            transform: finalScene
              ? "translateY(-9%) scale(0.92)"
              : "scale(1.12)",
            transformOrigin: "50% 78%",
            transition: `transform ${dur(2200)}ms cubic-bezier(0.22, 1, 0.36, 1)`,
          }}
        >
          <svg
            viewBox="0 0 400 520"
            className="mx-auto block h-auto w-full max-w-[380px]"
            fill="none"
            aria-hidden="true"
          >
            {/* Suelo: un halo suave donde se planta la semilla. */}
            <ellipse
              cx="200"
              cy="474"
              rx="70"
              ry="10"
              fill="#22c55e"
              style={{
                opacity: seedVisible ? 0.12 : 0,
                transition: `opacity ${dur(1200)}ms ease`,
              }}
            />

            {/* Tronco: se "dibuja" hacia arriba con stroke-dashoffset. */}
            <path
              d={TRUNK_D}
              stroke="#4b7bd6"
              strokeWidth="6"
              strokeLinecap="round"
              pathLength={1}
              style={{
                strokeDasharray: 1,
                strokeDashoffset: trunkGrown ? 0 : 1,
                transition: `stroke-dashoffset ${dur(1800)}ms cubic-bezier(0.4, 0, 0.2, 1)`,
              }}
            />

            {/* Ramas: cada una crece justo antes de revelar su categoría. */}
            {CATEGORIES.map((c, i) => {
              const grown = step >= 6 + i;
              return (
                <path
                  key={i}
                  d={c.d}
                  stroke="#3f6ac2"
                  strokeWidth="4"
                  strokeLinecap="round"
                  pathLength={1}
                  style={{
                    strokeDasharray: 1,
                    strokeDashoffset: grown ? 0 : 1,
                    transition: `stroke-dashoffset ${dur(900)}ms cubic-bezier(0.4, 0, 0.2, 1)`,
                  }}
                />
              );
            })}

            {/* Semilla / brote en la base. */}
            <circle
              cx="200"
              cy="470"
              r="7"
              fill="#8b5e3c"
              style={{
                opacity: seedVisible && !trunkGrown ? 1 : 0,
                transform: sproutVisible ? "scale(1)" : "scale(0.4)",
                transformOrigin: "200px 470px",
                transition: `opacity ${dur(700)}ms ease, transform ${dur(900)}ms ease`,
              }}
            />
            {/* Primer brote verde (crecimiento) que asoma de la semilla. */}
            <path
              d="M200,470 Q200,450 200,436"
              stroke="#22c55e"
              strokeWidth="4"
              strokeLinecap="round"
              pathLength={1}
              style={{
                strokeDasharray: 1,
                strokeDashoffset: sproutVisible && !trunkGrown ? 0 : 1,
                opacity: trunkGrown ? 0 : 1,
                transition: `stroke-dashoffset ${dur(1000)}ms ease, opacity ${dur(600)}ms ease`,
              }}
            />
          </svg>

          {/* Iconos de categoría en la punta de cada rama (se quedan fijos y
              forman la copa del árbol en la escena final). */}
          {CATEGORIES.map((c, i) => {
            const shown = step >= 6 + i;
            const isActive = activeCategory === i;
            const left = (c.tip.x / 400) * 100;
            const top = (c.tip.y / 520) * 100;
            return (
              <div
                key={i}
                className="pointer-events-none absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: 46,
                  height: 46,
                  fontSize: 22,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: isActive
                    ? "0 0 22px 4px rgba(59,130,246,0.45)"
                    : "0 0 0 0 rgba(0,0,0,0)",
                  opacity: shown ? 1 : 0,
                  transform: `translate(-50%, -50%) scale(${
                    shown ? (isActive ? 1.12 : 1) : 0.3
                  })`,
                  transition: `opacity ${dur(700)}ms ease, transform ${dur(700)}ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow ${dur(500)}ms ease`,
                }}
              >
                <span aria-hidden="true">{c.icon}</span>
              </div>
            );
          })}
        </div>

        {/* ─── Escena 1: textos de bienvenida ─────────────────────────── */}
        <div className="pointer-events-none absolute inset-x-0 top-[26%] px-8 text-center">
          <h1
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            style={{
              opacity: welcome1 ? 1 : 0,
              transform: welcome1 ? "translateY(0)" : "translateY(12px)",
              transition: `opacity ${dur(900)}ms ease, transform ${dur(900)}ms ease`,
            }}
          >
            Bienvenido a SkillTree
          </h1>
          <p
            className="mx-auto mt-3 max-w-xs text-base text-blue-100/80 sm:text-lg"
            style={{
              opacity: welcome2 ? 1 : 0,
              transform: welcome2 ? "translateY(0)" : "translateY(12px)",
              transition: `opacity ${dur(900)}ms ease ${dur(150)}ms, transform ${dur(900)}ms ease ${dur(150)}ms`,
            }}
          >
            El lugar donde crecerán tus habilidades.
          </p>
        </div>

        {/* ─── Escenas 2-3: nombre + frase de la categoría activa ──────── */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[16%] px-8 text-center">
          {CATEGORIES.map((c, i) => {
            const isActive = activeCategory === i;
            return (
              <div
                key={i}
                className="absolute inset-x-0 px-8"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "translateY(0)" : "translateY(10px)",
                  transition: `opacity ${dur(700)}ms ease, transform ${dur(700)}ms ease`,
                }}
              >
                <p className="text-xl font-semibold text-white sm:text-2xl">
                  <span aria-hidden="true" className="mr-2">
                    {c.icon}
                  </span>
                  {c.name}
                </p>
                <p className="mx-auto mt-1 max-w-sm text-sm text-blue-100/75 sm:text-base">
                  {c.phrase}
                </p>
              </div>
            );
          })}
        </div>

        {/* ─── Escena 4: mensaje final + botones ───────────────────────── */}
        <div
          className="absolute inset-x-0 bottom-[12%] flex flex-col items-center px-8 text-center"
          style={{
            opacity: finalScene ? 1 : 0,
            transform: finalScene ? "translateY(0)" : "translateY(16px)",
            transition: `opacity ${dur(1000)}ms ease, transform ${dur(1000)}ms ease`,
            pointerEvents: finalScene ? "auto" : "none",
          }}
        >
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Ahora es tu turno de hacerlo crecer.
          </h2>
          <div className="mt-6 flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={finish}
              className="inline-flex h-11 items-center justify-center rounded-md bg-[#2563eb] px-6 text-base font-medium text-white shadow-sm transition-colors hover:bg-[#1d4ed8] focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none"
            >
              🌱 Comenzar mi viaje
            </button>
            <button
              type="button"
              onClick={finish}
              className="text-sm text-white/60 transition-colors hover:text-white/90"
            >
              Omitir introducción
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
