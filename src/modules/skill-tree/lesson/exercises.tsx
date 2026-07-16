"use client";

/**
 * `<Exercise>` — un ejercicio autocorregible AUTOCONTENIDO y REUTILIZABLE.
 *
 * Renderiza cualquier `PracticeItem` (choice, fill, order, match), gestiona su
 * propio estado (respuesta, comprobado, correcto) y avisa del resultado con
 * `onGraded(correct)`. Es de un solo paso (sin navegación atrás), ideal para el
 * repaso espaciado y cualquier quiz ligero.
 *
 * El reproductor de lecciones (`LessonPlayer`) mantiene su propia versión con
 * estado elevado porque necesita restaurar respuestas al ir/volver entre pasos;
 * este componente cubre el resto de la plataforma sin duplicar ese caso.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUp, Check, Lightbulb, PartyPopper, X } from "lucide-react";

import { cn } from "@/lib/utils";
import type { PracticeItem } from "./types";

export function normalizeAnswer(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[.,!?;:'"()]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Baraja determinista y estable (rota una posición). */
function rotated<T>(arr: T[]): T[] {
  if (arr.length < 2) return arr.slice();
  return [...arr.slice(1), arr[0]!];
}

function Feedback({ correct, why, extra }: { correct: boolean; why?: string; extra?: string }) {
  return (
    <motion.div
      role="status"
      aria-live="polite"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "rounded-xl border p-3 text-sm",
        correct ? "border-growth/40 bg-growth/10" : "border-amber-500/40 bg-amber-500/10",
      )}
    >
      <p
        className={cn(
          "flex items-center gap-1.5 font-semibold",
          correct ? "text-growth" : "text-amber-700 dark:text-amber-300",
        )}
      >
        {correct ? (
          <>
            <PartyPopper className="size-4" /> ¡Correcto!
          </>
        ) : (
          <>
            <Lightbulb className="size-4" /> Repasa esto:
          </>
        )}
      </p>
      {extra && <p className="text-muted-foreground mt-1">{extra}</p>}
      {why && <p className="text-muted-foreground mt-1">{why}</p>}
    </motion.div>
  );
}

export function Exercise({
  item,
  onGraded,
}: {
  item: PracticeItem;
  /** Se llama UNA vez, cuando el usuario comprueba su respuesta. */
  onGraded?: (correct: boolean) => void;
}) {
  const [done, setDone] = useState(false);
  const grade = (correct: boolean) => {
    if (done) return;
    setDone(true);
    onGraded?.(correct);
  };

  return (
    <div className="space-y-4">
      <p className="text-base font-medium">{item.q}</p>
      {item.kind === "choice" && <ChoiceUI item={item} onGrade={grade} />}
      {item.kind === "fill" && <FillUI item={item} onGrade={grade} />}
      {item.kind === "order" && <OrderUI item={item} onGrade={grade} />}
      {item.kind === "match" && <MatchUI item={item} onGrade={grade} />}
    </div>
  );
}

function ChoiceUI({
  item,
  onGrade,
}: {
  item: Extract<PracticeItem, { kind: "choice" }>;
  onGrade: (correct: boolean) => void;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const answered = picked !== null;
  const correct = picked === item.answer;
  return (
    <div className="space-y-2">
      {item.options.map((opt, k) => {
        const isAnswer = k === item.answer;
        const isPicked = k === picked;
        return (
          <button
            key={k}
            type="button"
            disabled={answered}
            aria-pressed={isPicked}
            aria-label={
              answered && isAnswer
                ? `${opt} (respuesta correcta)`
                : answered && isPicked
                  ? `${opt} (tu respuesta, incorrecta)`
                  : opt
            }
            onClick={() => {
              setPicked(k);
              onGrade(k === item.answer);
            }}
            className={cn(
              "flex w-full items-center justify-between gap-2 rounded-xl border px-4 py-3 text-left text-sm transition-colors",
              !answered && "border-border hover:border-primary",
              answered && isAnswer && "border-growth/60 bg-growth/10",
              answered && isPicked && !isAnswer && "border-destructive/60 bg-destructive/10",
              answered && !isAnswer && !isPicked && "border-border opacity-60",
            )}
          >
            <span>{opt}</span>
            {answered && isAnswer && <Check className="text-growth size-4 shrink-0" />}
            {answered && isPicked && !isAnswer && <X className="text-destructive size-4 shrink-0" />}
          </button>
        );
      })}
      {answered && <Feedback correct={correct} why={item.why} />}
    </div>
  );
}

function FillUI({
  item,
  onGrade,
}: {
  item: Extract<PracticeItem, { kind: "fill" }>;
  onGrade: (correct: boolean) => void;
}) {
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);
  const accepted = item.accept.map(normalizeAnswer);
  const correct = accepted.includes(normalizeAnswer(value));
  return (
    <div className="space-y-2">
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (checked) return;
          setChecked(true);
          onGrade(accepted.includes(normalizeAnswer(value)));
        }}
      >
        <input
          value={value}
          disabled={checked}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Tu respuesta…"
          className="border-border focus-visible:border-primary w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none disabled:opacity-70"
        />
        <button
          type="submit"
          disabled={checked}
          className="bg-primary text-primary-foreground rounded-xl px-4 py-2 text-sm font-medium disabled:opacity-50"
        >
          Comprobar
        </button>
      </form>
      {item.hint && !checked && <p className="text-muted-foreground text-xs">Pista: {item.hint}</p>}
      {checked && (
        <Feedback
          correct={correct}
          why={item.why}
          extra={!correct ? `Respuesta válida: ${item.accept[0]}` : undefined}
        />
      )}
    </div>
  );
}

function OrderUI({
  item,
  onGrade,
}: {
  item: Extract<PracticeItem, { kind: "order" }>;
  onGrade: (correct: boolean) => void;
}) {
  const [current, setCurrent] = useState<string[]>(() => rotated(item.items));
  const [checked, setChecked] = useState(false);
  const correct = current.every((v, i) => v === item.items[i]);
  const move = (from: number, to: number) => {
    if (checked || to < 0 || to >= current.length) return;
    const next = current.slice();
    const [it] = next.splice(from, 1);
    next.splice(to, 0, it!);
    setCurrent(next);
  };
  return (
    <div className="space-y-2">
      <ul className="space-y-2">
        {current.map((label, i) => {
          const rightHere = checked && label === item.items[i];
          return (
            <li
              key={label}
              className={cn(
                "flex items-center gap-2 rounded-xl border px-3 py-2.5 text-sm",
                !checked && "border-border",
                rightHere && "border-growth/60 bg-growth/10",
                checked && !rightHere && "border-destructive/60 bg-destructive/10",
              )}
            >
              <span className="text-muted-foreground w-5 shrink-0 text-center font-mono text-xs">
                {i + 1}
              </span>
              <span className="flex-1">{label}</span>
              {!checked && (
                <span className="flex shrink-0 gap-1">
                  <button
                    type="button"
                    aria-label="Subir"
                    onClick={() => move(i, i - 1)}
                    disabled={i === 0}
                    className="hover:text-primary text-muted-foreground disabled:opacity-30"
                  >
                    <ArrowUp className="size-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Bajar"
                    onClick={() => move(i, i + 1)}
                    disabled={i === current.length - 1}
                    className="hover:text-primary text-muted-foreground disabled:opacity-30"
                  >
                    <ArrowDown className="size-4" />
                  </button>
                </span>
              )}
              {rightHere && <Check className="text-growth size-4 shrink-0" />}
              {checked && !rightHere && <X className="text-destructive size-4 shrink-0" />}
            </li>
          );
        })}
      </ul>
      {!checked ? (
        <button
          type="button"
          onClick={() => {
            setChecked(true);
            onGrade(current.every((v, i) => v === item.items[i]));
          }}
          className="bg-primary text-primary-foreground rounded-xl px-4 py-2 text-sm font-medium"
        >
          Comprobar
        </button>
      ) : (
        <Feedback
          correct={correct}
          why={item.why}
          extra={!correct ? `Orden correcto: ${item.items.join(" → ")}` : undefined}
        />
      )}
    </div>
  );
}

function MatchUI({
  item,
  onGrade,
}: {
  item: Extract<PracticeItem, { kind: "match" }>;
  onGrade: (correct: boolean) => void;
}) {
  const [chosen, setChosen] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const rightOrder = rotated(item.pairs.map((_, i) => i));
  const allChosen = item.pairs.every((_, i) => chosen[i] !== undefined);
  const correct = item.pairs.every((_, i) => chosen[i] === i);
  return (
    <div className="space-y-2">
      <div className="space-y-2">
        {item.pairs.map((pair, li) => (
          <div key={li} className="border-border rounded-xl border p-3">
            <p className="text-sm font-medium">{pair.left}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {rightOrder.map((ri) => {
                const picked = chosen[li] === ri;
                const showGood = checked && picked && ri === li;
                const showBad = checked && picked && ri !== li;
                return (
                  <button
                    key={ri}
                    type="button"
                    disabled={checked}
                    onClick={() => setChosen((m) => ({ ...m, [li]: ri }))}
                    className={cn(
                      "rounded-lg border px-2.5 py-1.5 text-xs transition-colors",
                      !picked && "border-border hover:border-primary",
                      picked && !checked && "border-primary bg-primary/10",
                      showGood && "border-growth/60 bg-growth/10",
                      showBad && "border-destructive/60 bg-destructive/10",
                    )}
                  >
                    {item.pairs[ri]!.right}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {!checked ? (
        <button
          type="button"
          disabled={!allChosen}
          onClick={() => {
            setChecked(true);
            onGrade(item.pairs.every((_, i) => chosen[i] === i));
          }}
          className="bg-primary text-primary-foreground rounded-xl px-4 py-2 text-sm font-medium disabled:opacity-40"
        >
          Comprobar
        </button>
      ) : (
        <Feedback
          correct={correct}
          why={item.why}
          extra={
            !correct
              ? `Correcto: ${item.pairs.map((p) => `${p.left} → ${p.right}`).join("; ")}`
              : undefined
          }
        />
      )}
    </div>
  );
}
