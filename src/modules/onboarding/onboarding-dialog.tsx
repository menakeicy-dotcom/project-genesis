"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const STORAGE_KEY = "skilltree.onboarded.v1";

const STEPS = [
  {
    emoji: "🌱",
    title: "Bienvenida a SkillTree",
    body: "Aprender aquí se siente como hacer crecer un árbol: desbloqueas habilidades una a una.",
  },
  {
    emoji: "🗺️",
    title: "Explora y elige un árbol",
    body: "Cada categoría tiene árboles de aprendizaje. Elige uno y empieza por sus raíces.",
  },
  {
    emoji: "⭐",
    title: "Completa habilidades y gana XP",
    body: "Al completar un nodo ganas experiencia, subes de nivel y se desbloquean los siguientes.",
  },
];

/**
 * Tutorial de primera vez: breve y omitible. Se muestra una sola vez
 * (persistido en localStorage). Los tutoriales contextuales vendrán después.
 */
export function OnboardingDialog() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setOpen(true);
  }, []);

  function close() {
    localStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  }

  if (!open) return null;
  const current = STEPS[step]!;
  const isLast = step === STEPS.length - 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="border-border bg-card text-card-foreground w-full max-w-md rounded-lg border p-6 shadow-lg">
        <div className="mb-4 text-4xl">{current.emoji}</div>
        <h2 className="text-xl font-semibold">{current.title}</h2>
        <p className="text-muted-foreground mt-2 text-sm">{current.body}</p>

        <div className="mt-4 flex justify-center gap-1.5">
          {STEPS.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-6 rounded-full ${
                i === step ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={close}>
            Omitir
          </Button>
          <Button
            size="sm"
            onClick={() => (isLast ? close() : setStep(step + 1))}
          >
            {isLast ? "Empezar" : "Siguiente"}
          </Button>
        </div>
      </div>
    </div>
  );
}
