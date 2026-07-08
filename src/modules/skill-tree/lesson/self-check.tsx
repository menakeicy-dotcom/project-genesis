"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Autoevaluación marcable: el aprendiz confirma qué ya puede hacer.
 * Da retroalimentación de progreso sin nota ni castigo.
 */
export function SelfCheck({ items }: { items: string[] }) {
  const [done, setDone] = useState<boolean[]>(() => items.map(() => false));
  const count = done.filter(Boolean).length;
  const all = count === items.length;

  return (
    <div>
      <ul className="space-y-2">
        {items.map((item, i) => {
          const on = done[i];
          return (
            <li key={i}>
              <button
                type="button"
                onClick={() =>
                  setDone((d) => d.map((v, j) => (j === i ? !v : v)))
                }
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors",
                  on
                    ? "border-growth/50 bg-growth/10"
                    : "border-border hover:border-growth/40",
                )}
              >
                <span
                  className={cn(
                    "flex size-5 shrink-0 items-center justify-center rounded-md border",
                    on
                      ? "border-growth bg-growth text-growth-foreground"
                      : "border-border",
                  )}
                >
                  {on && <Check className="size-3.5" />}
                </span>
                <span className={cn(on && "text-foreground")}>{item}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <p className="text-muted-foreground mt-3 text-sm">
        {all ? (
          <span className="text-growth font-medium">
            ¡Listo! Dominas esta habilidad. 🌱
          </span>
        ) : (
          <>
            {count}/{items.length} marcadas — marca lo que ya puedes hacer.
          </>
        )}
      </p>
    </div>
  );
}
