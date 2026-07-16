"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Flame, RotateCcw, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import { Exercise } from "@/modules/skill-tree/lesson";
import type { PracticeItem } from "@/modules/skill-tree/lesson";
import { recordReviewAction } from "@/modules/review/actions";

/** Tarjeta de repaso (forma que entrega el servidor; solo lo que usa la UI). */
export interface ReviewCard {
  skillId: string;
  slug: string;
  title: string;
  treeSlug: string;
  categoryIcon: string;
  categoryName: string;
  box: number;
  practice: PracticeItem[];
}

/** Máximo de preguntas por habilidad en una sesión (evita fatiga). */
const PER_SKILL = 3;

interface Question {
  card: ReviewCard;
  item: PracticeItem;
}

export function ReviewSession({ cards }: { cards: ReviewCard[] }) {
  const router = useRouter();
  const reduce = useReducedMotion();
  const [isPending, startTransition] = useTransition();

  const questions = useMemo<Question[]>(
    () =>
      cards.flatMap((card) =>
        card.practice.slice(0, PER_SKILL).map((item) => ({ card, item })),
      ),
    [cards],
  );

  const [i, setI] = useState(0);
  const [graded, setGraded] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  // Resultado por habilidad: aciertos / total.
  const [perSkill, setPerSkill] = useState<Record<string, { c: number; t: number }>>({});
  const [finished, setFinished] = useState(false);
  const [xpEarned, setXpEarned] = useState(0);

  const q = questions[i];
  const pct = Math.round((i / Math.max(1, questions.length)) * 100);

  const onGraded = (card: ReviewCard, correct: boolean) => {
    setGraded(true);
    setPerSkill((m) => {
      const cur = m[card.skillId] ?? { c: 0, t: 0 };
      return { ...m, [card.skillId]: { c: cur.c + (correct ? 1 : 0), t: cur.t + 1 } };
    });
    if (correct) {
      setCorrectCount((v) => v + 1);
      setStreak((s) => {
        const ns = s + 1;
        setBestStreak((b) => Math.max(b, ns));
        return ns;
      });
    } else {
      setStreak(0);
    }
  };

  const next = () => {
    if (i + 1 >= questions.length) return finish();
    setGraded(false);
    setI((v) => v + 1);
  };

  const finish = () => {
    startTransition(async () => {
      // Persiste el resultado por habilidad (programa el próximo repaso + XP).
      const results = await Promise.all(
        Object.entries(perSkill).map(([skillId, r]) =>
          recordReviewAction(skillId, r.c, r.t),
        ),
      );
      const xp = results.reduce(
        (sum, r) => sum + (r && "xp" in r && typeof r.xp === "number" ? r.xp : 0),
        0,
      );
      setXpEarned(xp);
      setFinished(true);
      router.refresh();
    });
  };

  if (questions.length === 0) return null;

  if (finished) {
    const skills = Object.entries(perSkill);
    const byId = new Map(cards.map((c) => [c.skillId, c]));
    return (
      <div className="border-border bg-card mt-6 rounded-2xl border p-6 text-center">
        <motion.div
          initial={reduce ? undefined : { scale: 0, rotate: -20 }}
          animate={reduce ? undefined : { scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="bg-growth/15 text-growth mx-auto flex size-20 items-center justify-center rounded-full text-4xl"
        >
          🧠
        </motion.div>
        <h2 className="mt-4 text-xl font-bold">¡Repaso completado!</h2>
        <p className="text-muted-foreground mt-1 text-sm">
          Acertaste {correctCount} de {questions.length} · mejor racha {bestStreak}
        </p>
        <div className="text-primary mt-3 inline-flex items-center gap-1.5 text-lg font-bold">
          <Sparkles className="size-5" /> +{xpEarned} XP
        </div>
        <ul className="mt-5 space-y-2 text-left">
          {skills.map(([id, r]) => {
            const c = byId.get(id);
            const passed = r.t > 0 && r.c / r.t >= 0.6;
            return (
              <li
                key={id}
                className="border-border flex items-center justify-between gap-3 rounded-xl border px-4 py-2.5 text-sm"
              >
                <span className="flex items-center gap-2">
                  <span>{c?.categoryIcon}</span>
                  <span className="font-medium">{c?.title ?? "Habilidad"}</span>
                </span>
                <span className={cn("font-semibold", passed ? "text-growth" : "text-amber-600 dark:text-amber-400")}>
                  {r.c}/{r.t}
                </span>
              </li>
            );
          })}
        </ul>
        <div className="mt-6 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => router.push("/dashboard")}
            className="text-primary hover:bg-primary/10 rounded-lg px-4 py-2 text-sm font-medium"
          >
            Volver al panel
          </button>
          <button
            type="button"
            onClick={() => router.refresh()}
            className="bg-primary text-primary-foreground inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold"
          >
            <RotateCcw className="size-4" /> Repasar más
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      data-testid="review-session"
      className="border-border bg-card mt-6 overflow-hidden rounded-2xl border"
    >
      <div className="border-border border-b p-4">
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="text-muted-foreground font-medium">
            Pregunta {i + 1} de {questions.length}
          </span>
          <span className="flex items-center gap-3">
            <span className="text-growth inline-flex items-center gap-1 font-semibold">
              <Check className="size-3.5" /> {correctCount}
            </span>
            <span
              className={cn(
                "inline-flex items-center gap-1 font-semibold",
                streak >= 2 ? "text-primary" : "text-muted-foreground",
              )}
            >
              <Flame className="size-3.5" /> {streak}
            </span>
          </span>
        </div>
        <div className="bg-muted h-2 w-full overflow-hidden rounded-full">
          <motion.div
            className="bg-primary h-full rounded-full"
            animate={{ width: `${pct}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          />
        </div>
      </div>

      <div className="relative min-h-[18rem] p-5 sm:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.22 }}
          >
            <div className="text-muted-foreground mb-3 flex items-center gap-2 text-xs font-semibold tracking-wide uppercase">
              <span>{q!.card.categoryIcon}</span>
              <span>{q!.card.title}</span>
            </div>
            {/* key con el índice fuerza remonta => estado limpio por pregunta */}
            <Exercise
              key={i}
              item={q!.item}
              onGraded={(correct) => onGraded(q!.card, correct)}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="border-border flex items-center justify-end border-t p-4">
        <button
          type="button"
          onClick={next}
          disabled={!graded || isPending}
          className="bg-primary text-primary-foreground inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isPending
            ? "Guardando…"
            : i + 1 >= questions.length
              ? "Terminar repaso"
              : "Siguiente"}
          <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
