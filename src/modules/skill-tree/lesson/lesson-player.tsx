"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Lightbulb,
  PartyPopper,
  Sparkles,
  Target,
  Wand2,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { CountUp } from "@/components/experience/count-up";
import { completeSkillAction } from "@/modules/progress/actions";
import { ArrowDown, ArrowUp } from "lucide-react";
import { viewExample } from "./types";
import { RichText } from "./rich-text";
import type { Lesson, LessonCompare, LessonExample, LessonSection, PracticeItem } from "./types";

/** Baraja determinista y estable (rota una posición): evita depender de random. */
function rotated<T>(arr: T[]): T[] {
  if (arr.length < 2) return arr.slice();
  return [...arr.slice(1), arr[0]!];
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[.,!?;:'"()]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

type Step =
  | { kind: "intro" }
  | { kind: "learn"; section: LessonSection }
  | { kind: "exercise"; item: PracticeItem; ex: number }
  | { kind: "activity" }
  | { kind: "summary" }
  | { kind: "finish" };

interface PlayerMeta {
  title: string;
  xpReward: number;
  rationale?: string;
  goal?: string;
}

export function LessonPlayer({
  lesson,
  meta,
  skillId,
  strandKey,
  treeSlug,
  next,
  alreadyCompleted,
}: {
  lesson: Lesson;
  meta: PlayerMeta;
  skillId: string;
  /** Clave de la hebra, para celebrar su hoja al volver al árbol. */
  strandKey: string;
  treeSlug: string;
  next: { href: string; title: string } | null;
  alreadyCompleted: boolean;
}) {
  const router = useRouter();
  const reduce = useReducedMotion();
  const [isPending, startTransition] = useTransition();

  const steps = useMemo<Step[]>(() => {
    const s: Step[] = [{ kind: "intro" }];
    lesson.sections.forEach((section) => s.push({ kind: "learn", section }));
    (lesson.practice ?? []).forEach((item, i) =>
      s.push({ kind: "exercise", item, ex: i }),
    );
    if (lesson.activity) s.push({ kind: "activity" });
    if ((lesson.summary && lesson.summary.length) || (lesson.selfCheck && lesson.selfCheck.length))
      s.push({ kind: "summary" });
    s.push({ kind: "finish" });
    return s;
  }, [lesson]);

  const nEx = lesson.practice?.length ?? 0;
  const xpChunk = nEx > 0 ? Math.max(1, Math.round((meta.xpReward * 0.6) / nEx)) : 0;

  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const [xp, setXp] = useState(0);
  const [bump, setBump] = useState(0);
  // Estado de los ejercicios, elevado para sobrevivir a ir/volver.
  const [pick, setPick] = useState<Record<number, number>>({});
  const [fill, setFill] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [awarded, setAwarded] = useState<Record<number, boolean>>({});
  // `order`: arreglo actual del usuario. `match`: izquierda→derecha elegida.
  const [ord, setOrd] = useState<Record<number, string[]>>({});
  const [match, setMatch] = useState<Record<number, Record<number, number>>>({});

  const step = steps[i]!;
  const pct = Math.round((i / (steps.length - 1)) * 100);

  const go = (delta: number) => {
    setDir(delta);
    setI((v) => Math.min(steps.length - 1, Math.max(0, v + delta)));
  };

  const award = (ex: number) => {
    if (awarded[ex]) return;
    setAwarded((a) => ({ ...a, [ex]: true }));
    setXp((v) => Math.min(meta.xpReward, v + xpChunk));
    setBump((b) => b + 1);
  };

  // ¿Está resuelto el ejercicio actual? (para habilitar "Continuar")
  const exerciseResolved = (st: Extract<Step, { kind: "exercise" }>): boolean => {
    if (st.item.kind === "choice") return pick[st.ex] !== undefined;
    return !!checked[st.ex];
  };
  const canContinue = step.kind !== "exercise" || exerciseResolved(step);

  const finish = (toTree: boolean) => {
    startTransition(async () => {
      let m: {
        leveledUp?: boolean;
        level?: number;
        strandCompleted?: string | null;
      } = {};
      if (!alreadyCompleted) {
        const res = await completeSkillAction(skillId);
        if (res && !("error" in res)) m = res;
      }
      const params = new URLSearchParams({ grew: strandKey });
      if (m.leveledUp && m.level) params.set("lvl", String(m.level));
      if (m.strandCompleted) params.set("rama", m.strandCompleted);
      const treeHref = `/trees/${treeSlug}?${params.toString()}`;
      // Un hito (subir de nivel o completar una rama) SIEMPRE lleva al árbol,
      // para no perderse el momento; si no, se respeta el botón elegido.
      const milestone = !!(m.leveledUp || m.strandCompleted);
      router.push(milestone || toTree ? treeHref : (next?.href ?? treeHref));
      router.refresh();
    });
  };

  // Navegación por teclado (menos fricción): Enter avanza / completa; ←/→ mueven.
  // No interfiere mientras se escribe en un campo de texto.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "Enter" || e.key === "ArrowRight") {
        if (step.kind === "finish") {
          if (!isPending) {
            e.preventDefault();
            finish(false);
          }
        } else if (canContinue) {
          e.preventDefault();
          go(1);
        }
      } else if (e.key === "ArrowLeft" && i > 0) {
        e.preventDefault();
        go(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, canContinue, i, isPending]);

  const slide = reduce
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, x: dir * 40 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: dir * -40 },
      };

  return (
    <div
      data-testid="lesson-player"
      className="border-border bg-card mt-6 overflow-hidden rounded-2xl border"
    >
      {/* Cabecera: progreso + XP */}
      <div className="border-border border-b p-4">
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="text-muted-foreground font-medium">
            Paso {i + 1} de {steps.length} · {pct}%
          </span>
          <motion.span
            key={bump}
            initial={reduce ? undefined : { scale: 1 }}
            animate={reduce ? undefined : { scale: [1, 1.25, 1] }}
            transition={{ duration: 0.35 }}
            className="text-primary inline-flex items-center gap-1 font-semibold"
          >
            <Sparkles className="size-3.5" /> {xp} XP
          </motion.span>
        </div>
        <div className="bg-muted h-2 w-full overflow-hidden rounded-full">
          <motion.div
            className="bg-primary h-full rounded-full"
            animate={{ width: `${pct}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          />
        </div>
      </div>

      {/* Cuerpo animado */}
      <div className="relative min-h-[22rem] p-5 sm:p-6">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={i}
            initial={slide.initial}
            animate={slide.animate}
            exit={slide.exit}
            transition={{ duration: 0.25 }}
          >
            {step.kind === "intro" && (
              <IntroStep lesson={lesson} meta={meta} />
            )}
            {step.kind === "learn" && <LearnStep section={step.section} />}
            {step.kind === "exercise" && (
              <ExerciseStep
                item={step.item}
                ex={step.ex}
                pick={pick}
                setPick={setPick}
                fill={fill}
                setFill={setFill}
                checked={checked}
                setChecked={setChecked}
                ord={ord}
                setOrd={setOrd}
                match={match}
                setMatch={setMatch}
                onCorrect={() => award(step.ex)}
              />
            )}
            {step.kind === "activity" && lesson.activity && (
              <ActivityStep activity={lesson.activity} />
            )}
            {step.kind === "summary" && <SummaryStep lesson={lesson} />}
            {step.kind === "finish" && (
              <FinishStep
                xp={meta.xpReward}
                next={next}
                reduce={!!reduce}
                alreadyCompleted={alreadyCompleted}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pie: navegación */}
      <div className="border-border flex items-center justify-between gap-3 border-t p-4">
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={i === 0}
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm disabled:opacity-40"
        >
          <ArrowLeft className="size-4" /> Atrás
        </button>

        {step.kind === "finish" ? (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => finish(true)}
              disabled={isPending}
              className="text-primary hover:bg-primary/10 rounded-lg px-3 py-2 text-sm font-medium disabled:opacity-60"
            >
              Ver mi árbol 🌿
            </button>
            <button
              type="button"
              onClick={() => finish(false)}
              disabled={isPending}
              className="bg-primary text-primary-foreground inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold disabled:opacity-60"
            >
              {isPending
                ? "Guardando…"
                : next
                  ? "Completar y continuar"
                  : "Completar"}
              {!isPending && <ChevronRight className="size-4" />}
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => go(1)}
            disabled={!canContinue}
            className="bg-primary text-primary-foreground inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40"
          >
            {step.kind === "exercise" && !canContinue ? "Responde para seguir" : "Continuar"}
            <ArrowRight className="size-4" />
          </button>
        )}
      </div>
    </div>
  );
}

/* ───────────────────────── Pasos ───────────────────────── */

function IntroStep({ lesson, meta }: { lesson: Lesson; meta: PlayerMeta }) {
  return (
    <div className="space-y-4">
      <div className="bg-primary/10 text-primary flex size-12 items-center justify-center rounded-2xl">
        <Wand2 className="size-6" />
      </div>
      {lesson.intro && <p className="text-base leading-relaxed">{lesson.intro}</p>}
      {(meta.goal || lesson.goal) && (
        <div className="border-primary/30 bg-primary/5 flex items-start gap-2 rounded-xl border p-4">
          <Target className="text-primary mt-0.5 size-5 shrink-0" />
          <div>
            <p className="text-xs font-semibold tracking-wide uppercase">Objetivo</p>
            <p className="mt-0.5 text-sm">Al terminar podrás {meta.goal ?? lesson.goal}</p>
          </div>
        </div>
      )}
      {meta.rationale && (
        <div className="border-border bg-muted/40 rounded-xl border p-4">
          <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
            ¿Para qué sirve?
          </p>
          <p className="mt-1 text-sm leading-relaxed">{meta.rationale}</p>
        </div>
      )}
    </div>
  );
}

function ExampleBox({ ex }: { ex: LessonExample }) {
  const v = viewExample(ex);
  return (
    <div className="border-border bg-muted/40 rounded-lg border p-3">
      {v.term && (
        <p className="text-primary mb-1 text-[0.7rem] font-semibold tracking-wide uppercase">
          {v.term}
        </p>
      )}
      <p className="text-sm font-medium">{v.text}</p>
      {v.mono && (
        <pre className="text-muted-foreground mt-1 overflow-x-auto font-mono text-xs whitespace-pre-wrap">
          {v.mono}
        </pre>
      )}
      {v.sub && <p className="text-muted-foreground mt-0.5 text-sm">{v.sub}</p>}
      {v.note && (
        <p className="text-muted-foreground mt-1 border-t border-dashed pt-1 text-xs italic">
          {v.note}
        </p>
      )}
    </div>
  );
}

function CompareBox({ c }: { c: LessonCompare }) {
  const col = (side: LessonCompare["left"], primary: boolean) => (
    <div
      className={cn(
        "rounded-xl border p-4",
        primary ? "border-primary/30 bg-primary/5" : "border-border bg-muted/40",
      )}
    >
      <h4 className={cn("text-sm font-semibold", primary && "text-primary")}>{side.title}</h4>
      <ul className="text-muted-foreground mt-2 space-y-1.5 text-sm">
        {side.points.map((p, i) => (
          <li key={i} className="flex gap-1.5">
            <span aria-hidden>·</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2">
        {col(c.left, true)}
        {col(c.right, false)}
      </div>
      {c.note && <p className="text-muted-foreground mt-2 text-center text-xs">{c.note}</p>}
    </div>
  );
}

function LearnStep({ section }: { section: LessonSection }) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">{section.h}</h3>
      {section.tldr && (
        <p className="border-primary/40 text-foreground border-l-2 pl-3 text-sm font-medium">
          <RichText text={section.tldr} />
        </p>
      )}
      {section.body?.map((p, i) => (
        <p key={i} className="text-muted-foreground text-sm leading-relaxed">
          <RichText text={p} />
        </p>
      ))}
      {section.bullets && section.bullets.length > 0 && (
        <ul className="text-muted-foreground list-disc space-y-1 pl-5 text-sm">
          {section.bullets.map((b, i) => (
            <li key={i}>
              <RichText text={b} />
            </li>
          ))}
        </ul>
      )}
      {section.code && (
        <pre className="border-border bg-muted/50 overflow-x-auto rounded-lg border p-3 font-mono text-xs leading-relaxed">
          <code>{section.code}</code>
        </pre>
      )}
      {section.compare && <CompareBox c={section.compare} />}
      {section.examples && section.examples.length > 0 && (
        <div className="space-y-2">
          {section.examples.map((ex, i) => (
            <ExampleBox key={i} ex={ex} />
          ))}
        </div>
      )}
      {section.more && section.more.length > 0 && (
        <details className="group border-border rounded-lg border px-3 py-2">
          <summary className="text-primary flex cursor-pointer list-none items-center gap-1 text-sm font-medium">
            <ChevronRight className="size-4 transition-transform group-open:rotate-90" />
            Saber más
          </summary>
          <div className="text-muted-foreground mt-2 space-y-2 text-sm leading-relaxed">
            {section.more.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </details>
      )}
      {section.tip && (
        <p className="flex gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-sm text-amber-700 dark:text-amber-300">
          <Lightbulb className="mt-0.5 size-4 shrink-0" />
          <span>
            <RichText text={section.tip} />
          </span>
        </p>
      )}
    </div>
  );
}

function ExerciseStep({
  item,
  ex,
  pick,
  setPick,
  fill,
  setFill,
  checked,
  setChecked,
  ord,
  setOrd,
  match,
  setMatch,
  onCorrect,
}: {
  item: PracticeItem;
  ex: number;
  pick: Record<number, number>;
  setPick: React.Dispatch<React.SetStateAction<Record<number, number>>>;
  fill: Record<number, string>;
  setFill: React.Dispatch<React.SetStateAction<Record<number, string>>>;
  checked: Record<number, boolean>;
  setChecked: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
  ord: Record<number, string[]>;
  setOrd: React.Dispatch<React.SetStateAction<Record<number, string[]>>>;
  match: Record<number, Record<number, number>>;
  setMatch: React.Dispatch<React.SetStateAction<Record<number, Record<number, number>>>>;
  onCorrect: () => void;
}) {
  const KIND_LABEL: Record<PracticeItem["kind"], string> = {
    choice: "Mini ejercicio",
    fill: "Escribe la respuesta",
    order: "Ordena los pasos",
    match: "Empareja",
  };
  return (
    <div className="space-y-4">
      <div className="text-muted-foreground flex items-center gap-2 text-xs font-semibold tracking-wide uppercase">
        <Target className="size-4" /> {KIND_LABEL[item.kind]}
      </div>
      <p className="text-base font-medium">
        <RichText text={item.q} />
      </p>

      {item.kind === "choice" && (
        <ChoiceUI item={item} ex={ex} pick={pick} setPick={setPick} onCorrect={onCorrect} />
      )}
      {item.kind === "fill" && (
        <FillUI
          item={item}
          ex={ex}
          fill={fill}
          setFill={setFill}
          checked={checked}
          setChecked={setChecked}
          onCorrect={onCorrect}
        />
      )}
      {item.kind === "order" && (
        <OrderUI
          item={item}
          ex={ex}
          ord={ord}
          setOrd={setOrd}
          checked={checked}
          setChecked={setChecked}
          onCorrect={onCorrect}
        />
      )}
      {item.kind === "match" && (
        <MatchUI
          item={item}
          ex={ex}
          match={match}
          setMatch={setMatch}
          checked={checked}
          setChecked={setChecked}
          onCorrect={onCorrect}
        />
      )}
    </div>
  );
}

function OrderUI({
  item,
  ex,
  ord,
  setOrd,
  checked,
  setChecked,
  onCorrect,
}: {
  item: Extract<PracticeItem, { kind: "order" }>;
  ex: number;
  ord: Record<number, string[]>;
  setOrd: React.Dispatch<React.SetStateAction<Record<number, string[]>>>;
  checked: Record<number, boolean>;
  setChecked: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
  onCorrect: () => void;
}) {
  // Arreglo inicial barajado (estable): rota el orden correcto una posición.
  const current = ord[ex] ?? rotated(item.items);
  const isChecked = !!checked[ex];
  const correct = current.every((v, i) => v === item.items[i]);

  const move = (from: number, to: number) => {
    if (isChecked || to < 0 || to >= current.length) return;
    const next = current.slice();
    const [it] = next.splice(from, 1);
    next.splice(to, 0, it!);
    setOrd((o) => ({ ...o, [ex]: next }));
  };

  return (
    <div className="space-y-2">
      <ul className="space-y-2">
        {current.map((label, i) => {
          const rightHere = isChecked && label === item.items[i];
          return (
            <li
              key={label}
              className={cn(
                "flex items-center gap-2 rounded-xl border px-3 py-2.5 text-sm",
                !isChecked && "border-border",
                rightHere && "border-growth/60 bg-growth/10",
                isChecked && !rightHere && "border-destructive/60 bg-destructive/10",
              )}
            >
              <span className="text-muted-foreground w-5 shrink-0 text-center font-mono text-xs">
                {i + 1}
              </span>
              <span className="flex-1">{label}</span>
              {!isChecked && (
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
              {isChecked && !rightHere && <X className="text-destructive size-4 shrink-0" />}
            </li>
          );
        })}
      </ul>
      {!isChecked ? (
        <button
          type="button"
          onClick={() => {
            setChecked((c) => ({ ...c, [ex]: true }));
            if (current.every((v, i) => v === item.items[i])) onCorrect();
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
  ex,
  match,
  setMatch,
  checked,
  setChecked,
  onCorrect,
}: {
  item: Extract<PracticeItem, { kind: "match" }>;
  ex: number;
  match: Record<number, Record<number, number>>;
  setMatch: React.Dispatch<React.SetStateAction<Record<number, Record<number, number>>>>;
  checked: Record<number, boolean>;
  setChecked: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
  onCorrect: () => void;
}) {
  const isChecked = !!checked[ex];
  const chosen = match[ex] ?? {};
  // Columna derecha barajada (estable). El valor guarda el índice de pareja
  // correcta al que pertenece cada etiqueta derecha.
  const rightOrder = rotated(item.pairs.map((_, i) => i));
  const allChosen = item.pairs.every((_, i) => chosen[i] !== undefined);
  const isRight = (leftIdx: number) => chosen[leftIdx] === leftIdx;
  const correct = item.pairs.every((_, i) => isRight(i));

  return (
    <div className="space-y-2">
      <div className="space-y-2">
        {item.pairs.map((pair, li) => (
          <div key={li} className="border-border rounded-xl border p-3">
            <p className="text-sm font-medium">{pair.left}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {rightOrder.map((ri) => {
                const picked = chosen[li] === ri;
                const showGood = isChecked && picked && ri === li;
                const showBad = isChecked && picked && ri !== li;
                return (
                  <button
                    key={ri}
                    type="button"
                    disabled={isChecked}
                    onClick={() => setMatch((m) => ({ ...m, [ex]: { ...m[ex], [li]: ri } }))}
                    className={cn(
                      "rounded-lg border px-2.5 py-1.5 text-xs transition-colors",
                      !picked && "border-border hover:border-primary",
                      picked && !isChecked && "border-primary bg-primary/10",
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
      {!isChecked ? (
        <button
          type="button"
          disabled={!allChosen}
          onClick={() => {
            setChecked((c) => ({ ...c, [ex]: true }));
            if (item.pairs.every((_, i) => chosen[i] === i)) onCorrect();
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

function ChoiceUI({
  item,
  ex,
  pick,
  setPick,
  onCorrect,
}: {
  item: Extract<PracticeItem, { kind: "choice" }>;
  ex: number;
  pick: Record<number, number>;
  setPick: React.Dispatch<React.SetStateAction<Record<number, number>>>;
  onCorrect: () => void;
}) {
  const picked = pick[ex];
  const answered = picked !== undefined;
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
            onClick={() => {
              setPick((p) => ({ ...p, [ex]: k }));
              if (k === item.answer) onCorrect();
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
            {answered && isPicked && !isAnswer && (
              <X className="text-destructive size-4 shrink-0" />
            )}
          </button>
        );
      })}
      {answered && <Feedback correct={correct} why={item.why} />}
    </div>
  );
}

function FillUI({
  item,
  ex,
  fill,
  setFill,
  checked,
  setChecked,
  onCorrect,
}: {
  item: Extract<PracticeItem, { kind: "fill" }>;
  ex: number;
  fill: Record<number, string>;
  setFill: React.Dispatch<React.SetStateAction<Record<number, string>>>;
  checked: Record<number, boolean>;
  setChecked: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
  onCorrect: () => void;
}) {
  const value = fill[ex] ?? "";
  const isChecked = !!checked[ex];
  const accepted = item.accept.map(normalize);
  const correct = accepted.includes(normalize(value));
  return (
    <div className="space-y-2">
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          setChecked((c) => ({ ...c, [ex]: true }));
          if (accepted.includes(normalize(value))) onCorrect();
        }}
      >
        <input
          value={value}
          onChange={(e) => {
            const v = e.target.value;
            setFill((f) => ({ ...f, [ex]: v }));
            setChecked((c) => ({ ...c, [ex]: false }));
          }}
          placeholder="Tu respuesta…"
          className="border-border focus-visible:border-primary w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none"
        />
        <button
          type="submit"
          className="bg-primary text-primary-foreground rounded-xl px-4 py-2 text-sm font-medium"
        >
          Comprobar
        </button>
      </form>
      {item.hint && !isChecked && (
        <p className="text-muted-foreground text-xs">Pista: {item.hint}</p>
      )}
      {isChecked && (
        <Feedback
          correct={correct}
          why={item.why}
          extra={!correct ? `Respuesta válida: ${item.accept[0]}` : undefined}
        />
      )}
    </div>
  );
}

function Feedback({
  correct,
  why,
  extra,
}: {
  correct: boolean;
  why?: string;
  extra?: string;
}) {
  return (
    <motion.div
      role="status"
      aria-live="polite"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "rounded-xl border p-3 text-sm",
        correct
          ? "border-growth/40 bg-growth/10"
          : "border-amber-500/40 bg-amber-500/10",
      )}
    >
      <p className={cn("flex items-center gap-1.5 font-semibold", correct ? "text-growth" : "text-amber-700 dark:text-amber-300")}>
        {correct ? (
          <>
            <PartyPopper className="size-4" /> ¡Correcto! +XP
          </>
        ) : (
          <>
            <Lightbulb className="size-4" /> No pasa nada, aprende esto:
          </>
        )}
      </p>
      {extra && <p className="text-muted-foreground mt-1">{extra}</p>}
      {why && (
        <p className="text-muted-foreground mt-1">
          <RichText text={why} />
        </p>
      )}
    </motion.div>
  );
}

function ActivityStep({ activity }: { activity: NonNullable<Lesson["activity"]> }) {
  return (
    <div className="space-y-3">
      <div className="text-muted-foreground flex items-center gap-2 text-xs font-semibold tracking-wide uppercase">
        <Wand2 className="size-4" /> Actividad
      </div>
      <h3 className="text-lg font-semibold">{activity.title}</h3>
      <ol className="text-muted-foreground list-decimal space-y-1.5 pl-5 text-sm">
        {activity.steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
      <p className="text-muted-foreground text-xs italic">
        Hazla a tu ritmo; cuando estés listo, continúa.
      </p>
    </div>
  );
}

function SummaryStep({ lesson }: { lesson: Lesson }) {
  return (
    <div className="space-y-4">
      <div className="text-muted-foreground flex items-center gap-2 text-xs font-semibold tracking-wide uppercase">
        <Sparkles className="size-4" /> Resumen
      </div>
      {lesson.summary && lesson.summary.length > 0 && (
        <ul className="space-y-2 text-sm">
          {lesson.summary.map((s, i) => (
            <li key={i} className="flex gap-2">
              <Check className="text-growth mt-0.5 size-4 shrink-0" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      )}
      {lesson.selfCheck && lesson.selfCheck.length > 0 && (
        <div className="border-border rounded-xl border p-4">
          <p className="text-xs font-semibold tracking-wide uppercase">¿Ya lo dominas?</p>
          <ul className="text-muted-foreground mt-2 space-y-1 text-sm">
            {lesson.selfCheck.map((c, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-growth">✓</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function FinishStep({
  xp,
  next,
  reduce,
  alreadyCompleted,
}: {
  xp: number;
  next: { href: string; title: string } | null;
  reduce: boolean;
  alreadyCompleted: boolean;
}) {
  return (
    <div className="flex flex-col items-center py-4 text-center">
      <div className="relative">
        {!reduce && (
          <span
            aria-hidden
            className="st-bloom border-growth/50 absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
          />
        )}
        {!reduce &&
          [0, 1, 2, 3, 4, 5].map((n) => (
            <motion.span
              key={n}
              className="bg-growth absolute left-1/2 top-1/2 size-2 rounded-full"
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 0],
                x: Math.cos((n / 6) * Math.PI * 2) * 70,
                y: Math.sin((n / 6) * Math.PI * 2) * 70,
              }}
              transition={{ duration: 1.1, delay: 0.15, repeat: Infinity, repeatDelay: 0.8 }}
            />
          ))}
        <motion.div
          initial={reduce ? undefined : { scale: 0, rotate: -30 }}
          animate={reduce ? undefined : { scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="bg-growth/15 text-growth flex size-20 items-center justify-center rounded-full text-4xl"
        >
          🌿
        </motion.div>
      </div>
      <h3 className="mt-4 text-xl font-bold">
        {alreadyCompleted ? "¡Habilidad repasada!" : "¡Nueva hoja desbloqueada!"}
      </h3>
      <p className="text-muted-foreground mt-1 text-sm">
        Has completado esta habilidad y tu árbol ha crecido.
      </p>
      <div className="text-primary mt-3 inline-flex items-center gap-1.5 text-lg font-bold">
        <Sparkles className="size-5" /> +<CountUp value={xp} /> XP
      </div>
      {next && (
        <p className="text-muted-foreground mt-4 text-sm">
          Siguiente hoja: <span className="text-foreground font-medium">{next.title}</span>
        </p>
      )}
    </div>
  );
}
