import { GraduationCap, Lightbulb, PencilLine } from "lucide-react";

import type { Lesson, LessonExample } from "./types";
import { Practice } from "./practice";

function Example({ ex }: { ex: LessonExample }) {
  return (
    <div className="border-border/70 rounded-md border-l-2 bg-muted/40 px-3 py-2">
      <p className="text-sm font-medium">{ex.en}</p>
      {ex.ipa && (
        <p className="text-muted-foreground font-mono text-xs">{ex.ipa}</p>
      )}
      {ex.es && <p className="text-muted-foreground text-sm">{ex.es}</p>}
      {ex.note && (
        <p className="text-muted-foreground mt-0.5 text-xs italic">{ex.note}</p>
      )}
    </div>
  );
}

export function SkillLesson({ lesson }: { lesson: Lesson }) {
  return (
    <section className="mt-8">
      <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
        <GraduationCap className="size-5" /> Lección
      </h2>

      {lesson.intro && (
        <p className="border-primary/40 bg-primary/5 text-foreground rounded-md border-l-2 px-4 py-3 text-sm">
          {lesson.intro}
        </p>
      )}

      <div className="mt-5 space-y-6">
        {lesson.sections.map((sec, i) => (
          <div key={i}>
            <h3 className="text-base font-semibold">{sec.h}</h3>
            {sec.body?.map((p, j) => (
              <p key={j} className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {p}
              </p>
            ))}
            {sec.bullets && sec.bullets.length > 0 && (
              <ul className="text-muted-foreground mt-2 list-disc space-y-1 pl-5 text-sm">
                {sec.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            )}
            {sec.examples && sec.examples.length > 0 && (
              <div className="mt-3 space-y-2">
                {sec.examples.map((ex, j) => (
                  <Example key={j} ex={ex} />
                ))}
              </div>
            )}
            {sec.tip && (
              <p className="border-growth/40 bg-growth/5 text-foreground mt-3 flex gap-2 rounded-md border px-3 py-2 text-sm">
                <Lightbulb className="text-growth mt-0.5 size-4 shrink-0" />
                <span>{sec.tip}</span>
              </p>
            )}
          </div>
        ))}
      </div>

      {lesson.practice && lesson.practice.length > 0 && (
        <div className="mt-8">
          <h3 className="mb-3 text-base font-semibold">Practica lo aprendido</h3>
          <Practice items={lesson.practice} />
        </div>
      )}

      {lesson.activity && (
        <div className="border-border mt-8 rounded-lg border p-4">
          <h3 className="flex items-center gap-2 text-base font-semibold">
            <PencilLine className="size-4" /> Actividad · {lesson.activity.title}
          </h3>
          <ol className="text-muted-foreground mt-2 list-decimal space-y-1 pl-5 text-sm">
            {lesson.activity.steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </div>
      )}
    </section>
  );
}
