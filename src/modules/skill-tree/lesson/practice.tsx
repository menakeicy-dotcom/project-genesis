"use client";

import { useMemo, useState } from "react";
import { Check, X } from "lucide-react";

import { cn } from "@/lib/utils";
import type { PracticeItem } from "./types";

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // quita tildes
    .replace(/[.,!?;:'"()]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function ChoiceQuestion({
  item,
  index,
}: {
  item: Extract<PracticeItem, { kind: "choice" }>;
  index: number;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const answered = picked !== null;
  const correct = picked === item.answer;
  return (
    <li className="border-border bg-card rounded-lg border p-4">
      <p className="text-sm font-medium">
        <span className="text-muted-foreground mr-1.5">{index + 1}.</span>
        {item.q}
      </p>
      <div className="mt-3 grid gap-2">
        {item.options.map((opt, i) => {
          const isAnswer = i === item.answer;
          const isPicked = i === picked;
          return (
            <button
              key={i}
              type="button"
              disabled={answered}
              onClick={() => setPicked(i)}
              className={cn(
                "flex items-center justify-between gap-2 rounded-md border px-3 py-2 text-left text-sm transition-colors",
                !answered && "border-border hover:border-primary",
                answered && isAnswer && "border-growth/50 bg-growth/10",
                answered &&
                  isPicked &&
                  !isAnswer &&
                  "border-destructive/50 bg-destructive/10",
                answered &&
                  !isAnswer &&
                  !isPicked &&
                  "border-border opacity-60",
              )}
            >
              <span>{opt}</span>
              {answered && isAnswer && (
                <Check className="text-growth size-4 shrink-0" />
              )}
              {answered && isPicked && !isAnswer && (
                <X className="text-destructive size-4 shrink-0" />
              )}
            </button>
          );
        })}
      </div>
      {answered && (
        <div className="mt-3 text-sm">
          <p className={cn("font-medium", correct ? "text-growth" : "text-destructive")}>
            {correct ? "¡Correcto! 🌱" : "Casi. Repásalo:"}
          </p>
          {item.why && <p className="text-muted-foreground mt-1">{item.why}</p>}
        </div>
      )}
    </li>
  );
}

function FillQuestion({
  item,
  index,
}: {
  item: Extract<PracticeItem, { kind: "fill" }>;
  index: number;
}) {
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);
  const accepted = useMemo(() => item.accept.map(normalize), [item.accept]);
  const correct = checked && accepted.includes(normalize(value));
  return (
    <li className="border-border bg-card rounded-lg border p-4">
      <p className="text-sm font-medium">
        <span className="text-muted-foreground mr-1.5">{index + 1}.</span>
        {item.q}
      </p>
      <form
        className="mt-3 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          setChecked(true);
        }}
      >
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setChecked(false);
          }}
          placeholder="Tu respuesta…"
          className="border-border focus-visible:border-primary w-full rounded-md border bg-transparent px-3 py-2 text-sm outline-none"
        />
        <button
          type="submit"
          className="bg-primary text-primary-foreground rounded-md px-3 py-2 text-sm font-medium"
        >
          Comprobar
        </button>
      </form>
      {item.hint && !checked && (
        <p className="text-muted-foreground mt-2 text-xs">Pista: {item.hint}</p>
      )}
      {checked && (
        <div className="mt-3 text-sm">
          <p className={cn("font-medium", correct ? "text-growth" : "text-destructive")}>
            {correct ? "¡Correcto! 🌱" : "Aún no."}
          </p>
          {!correct && (
            <p className="text-muted-foreground mt-1">
              Respuesta válida: <strong>{item.accept[0]}</strong>
            </p>
          )}
          {item.why && <p className="text-muted-foreground mt-1">{item.why}</p>}
        </div>
      )}
    </li>
  );
}

export function Practice({ items }: { items: PracticeItem[] }) {
  return (
    <ol className="space-y-3">
      {items.map((item, i) =>
        item.kind === "choice" ? (
          <ChoiceQuestion key={i} item={item} index={i} />
        ) : (
          <FillQuestion key={i} item={item} index={i} />
        ),
      )}
    </ol>
  );
}
