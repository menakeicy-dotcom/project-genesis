import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Clock, Lock, Sparkles } from "lucide-react";

import { auth } from "@/auth";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ui/progress-bar";
import { DisciplineIcon } from "@/components/discipline-icon";
import { getStrand } from "@/modules/progress/services";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ treeSlug: string; branch: string }>;
}): Promise<Metadata> {
  const { treeSlug, branch } = await params;
  const session = await auth();
  const data = await getStrand(session!.user.id, treeSlug, branch);
  return { title: data ? data.label : "Habilidad" };
}

export default async function StrandPage({
  params,
}: {
  params: Promise<{ treeSlug: string; branch: string }>;
}) {
  const { treeSlug, branch } = await params;
  const session = await auth();
  const data = await getStrand(session!.user.id, treeSlug, branch);
  if (!data) notFound();

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10">
      <Link
        href={`/trees/${treeSlug}`}
        className="text-muted-foreground inline-flex items-center gap-1.5 text-sm hover:underline"
      >
        ← <DisciplineIcon slug={data.categorySlug} className="size-4" />{" "}
        {data.treeTitle}
      </Link>

      <h1 className="mt-4 text-2xl font-bold tracking-tight">{data.label}</h1>
      <p className="text-muted-foreground mt-1 text-sm">
        Avanza nivel a nivel: completa un nivel para desbloquear el siguiente.
      </p>

      <div className="mt-4">
        <div className="text-muted-foreground mb-2 flex justify-between text-sm">
          <span>
            {data.completed}/{data.total} completadas
          </span>
          <span>{data.pct}%</span>
        </div>
        <ProgressBar
          value={data.pct}
          tone={data.pct === 100 ? "growth" : "primary"}
        />
      </div>

      <div className="mt-8 space-y-8">
        {data.levels.map((level) => (
          <section key={level.tier}>
            <div className="mb-3 flex items-center gap-2">
              <h2 className="text-sm font-semibold tracking-wide uppercase">
                Nivel {level.label}
              </h2>
              {!level.unlocked && (
                <Badge variant="neutral">
                  <Lock className="size-3" /> Bloqueado
                </Badge>
              )}
            </div>

            {!level.unlocked && (
              <p className="text-muted-foreground mb-3 text-sm">
                Completa el nivel anterior para desbloquearlo.
              </p>
            )}

            <div className="space-y-2">
              {level.skills.map((s) => {
                const done = s.state === "completed";
                const locked = s.state === "locked";
                return (
                  <Link
                    key={s.slug}
                    href={`/trees/${treeSlug}/skills/${s.slug}`}
                    className={
                      "border-border flex items-center justify-between gap-3 rounded-xl border p-4 " +
                      (locked
                        ? "opacity-70 transition-colors hover:border-border"
                        : "st-interactive hover:border-primary")
                    }
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={
                          "flex size-8 shrink-0 items-center justify-center rounded-lg " +
                          (done
                            ? "bg-growth/15 text-growth"
                            : locked
                              ? "bg-muted text-muted-foreground"
                              : "bg-primary/15 text-primary")
                        }
                      >
                        {done ? (
                          <Check className="size-4" />
                        ) : locked ? (
                          <Lock className="size-3.5" />
                        ) : (
                          <Sparkles className="size-4" />
                        )}
                      </span>
                      <div>
                        <div className="text-sm font-medium">{s.title}</div>
                        <div className="text-muted-foreground flex items-center gap-2 text-xs">
                          <span>{s.xp} XP</span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="size-3" /> {s.minutes} min
                          </span>
                          {done && <span className="text-growth">Completada</span>}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
