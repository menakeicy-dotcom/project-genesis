import type { ReactNode } from "react";
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Lightbulb,
  ListChecks,
  PencilLine,
  Quote,
  Sparkles,
} from "lucide-react";

import type { Lesson, LessonCompare, LessonExample, LessonSection } from "./types";
import { Practice } from "./practice";
import { SelfCheck } from "./self-check";

/** Un bloque de la lección con identidad propia (icono + etiqueta + aire). */
function Band({
  icon,
  label,
  hint,
  children,
}: {
  icon: ReactNode;
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-12 first:mt-8">
      <div className="mb-4 flex items-center gap-2.5">
        <span className="bg-muted text-foreground flex size-8 items-center justify-center rounded-lg">
          {icon}
        </span>
        <div>
          <h2 className="text-sm font-semibold tracking-wide uppercase">
            {label}
          </h2>
          {hint && <p className="text-muted-foreground text-xs">{hint}</p>}
        </div>
      </div>
      {children}
    </section>
  );
}

function Example({ ex }: { ex: LessonExample }) {
  return (
    <div className="border-border bg-muted/40 rounded-lg border p-3">
      <p className="text-sm font-medium">{ex.en}</p>
      {ex.ipa && (
        <p className="text-muted-foreground mt-0.5 font-mono text-xs">
          {ex.ipa}
        </p>
      )}
      {ex.es && <p className="text-muted-foreground mt-0.5 text-sm">{ex.es}</p>}
      {ex.note && (
        <p className="text-muted-foreground mt-1 border-t border-dashed pt-1 text-xs italic">
          {ex.note}
        </p>
      )}
    </div>
  );
}

function Compare({ c }: { c: LessonCompare }) {
  const col = (
    side: LessonCompare["left"],
    accent: "primary" | "neutral",
  ) => (
    <div
      className={
        accent === "primary"
          ? "border-primary/30 bg-primary/5 rounded-xl border p-4"
          : "border-border bg-muted/40 rounded-xl border p-4"
      }
    >
      <h4
        className={
          accent === "primary"
            ? "text-primary text-sm font-semibold"
            : "text-foreground text-sm font-semibold"
        }
      >
        {side.title}
      </h4>
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
        {col(c.left, "primary")}
        {col(c.right, "neutral")}
      </div>
      {c.note && (
        <p className="text-muted-foreground mt-2 text-center text-xs">
          {c.note}
        </p>
      )}
    </div>
  );
}

/** Una tarjeta de "Aprende" (idea → detalle → ejemplos → más → consejo). */
function SectionCard({ sec }: { sec: LessonSection }) {
  return (
    <div className="border-border bg-card rounded-xl border p-5">
      <h3 className="text-base font-semibold">{sec.h}</h3>

      {sec.tldr && (
        <p className="border-primary/40 text-foreground mt-2 border-l-2 pl-3 text-sm font-medium">
          {sec.tldr}
        </p>
      )}

      {sec.body?.map((p, i) => (
        <p
          key={i}
          className="text-muted-foreground mt-2 text-sm leading-relaxed"
        >
          {p}
        </p>
      ))}

      {sec.bullets && sec.bullets.length > 0 && (
        <ul className="text-muted-foreground mt-2 list-disc space-y-1 pl-5 text-sm">
          {sec.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}

      {sec.compare && (
        <div className="mt-4">
          <Compare c={sec.compare} />
        </div>
      )}

      {sec.examples && sec.examples.length > 0 && (
        <div className="mt-3 space-y-2">
          {sec.examples.map((ex, i) => (
            <Example key={i} ex={ex} />
          ))}
        </div>
      )}

      {sec.more && sec.more.length > 0 && (
        <details className="group mt-3">
          <summary className="text-primary flex cursor-pointer list-none items-center gap-1 text-sm font-medium">
            <ChevronRight className="size-4 transition-transform group-open:rotate-90" />
            Saber más
          </summary>
          <div className="text-muted-foreground mt-2 space-y-2 pl-5 text-sm leading-relaxed">
            {sec.more.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </details>
      )}

      {sec.tip && (
        <p className="mt-3 flex gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-sm text-amber-700 dark:text-amber-300">
          <Lightbulb className="mt-0.5 size-4 shrink-0" />
          <span>{sec.tip}</span>
        </p>
      )}
    </div>
  );
}

export function SkillLesson({ lesson }: { lesson: Lesson }) {
  return (
    <div>
      {(lesson.intro || lesson.goal) && (
        <div className="border-primary/30 bg-primary/5 mt-6 rounded-xl border p-5">
          {lesson.intro && <p className="text-sm leading-relaxed">{lesson.intro}</p>}
          {lesson.goal && (
            <p className="text-primary mt-3 flex items-start gap-2 text-sm font-medium">
              <Sparkles className="mt-0.5 size-4 shrink-0" />
              <span>Al terminar podrás: {lesson.goal}</span>
            </p>
          )}
        </div>
      )}

      {/* APRENDE */}
      <Band
        icon={<BookOpen className="size-4" />}
        label="Aprende"
        hint="Ideas cortas, una tarjeta a la vez"
      >
        <div className="space-y-4">
          {lesson.sections.map((sec, i) => (
            <SectionCard key={i} sec={sec} />
          ))}
        </div>
      </Band>

      {/* EJEMPLOS (muestrario destacado, opcional) */}
      {lesson.examples && lesson.examples.length > 0 && (
        <Band
          icon={<Quote className="size-4" />}
          label="Ejemplos"
          hint="En contexto real"
        >
          <div className="grid gap-2 sm:grid-cols-2">
            {lesson.examples.map((ex, i) => (
              <Example key={i} ex={ex} />
            ))}
          </div>
        </Band>
      )}

      {/* PRACTICA (+ retroalimentación inmediata) */}
      {lesson.practice && lesson.practice.length > 0 && (
        <Band
          icon={<ListChecks className="size-4" />}
          label="Practica"
          hint="Responde y recibe corrección al instante"
        >
          <Practice items={lesson.practice} />
        </Band>
      )}

      {/* ACTIVIDAD */}
      {lesson.activity && (
        <Band
          icon={<PencilLine className="size-4" />}
          label="Actividad"
          hint="Produce algo tuyo"
        >
          <div className="border-border bg-card rounded-xl border p-5">
            <h3 className="text-base font-semibold">{lesson.activity.title}</h3>
            <ol className="text-muted-foreground mt-2 list-decimal space-y-1.5 pl-5 text-sm">
              {lesson.activity.steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
          </div>
        </Band>
      )}

      {/* RETROALIMENTACIÓN (autoevaluación) */}
      {lesson.selfCheck && lesson.selfCheck.length > 0 && (
        <Band
          icon={<CheckCircle2 className="size-4" />}
          label="¿Ya lo dominas?"
          hint="Marca lo que ya puedes hacer"
        >
          <SelfCheck items={lesson.selfCheck} />
        </Band>
      )}

      {/* RESUMEN */}
      {lesson.summary && lesson.summary.length > 0 && (
        <Band
          icon={<Sparkles className="size-4" />}
          label="Resumen"
          hint="Lo esencial para llevarte"
        >
          <ul className="border-border bg-card space-y-2 rounded-xl border p-5 text-sm">
            {lesson.summary.map((s, i) => (
              <li key={i} className="flex gap-2">
                <CheckCircle2 className="text-growth mt-0.5 size-4 shrink-0" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </Band>
      )}
    </div>
  );
}
