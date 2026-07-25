import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Clock,
  Flame,
  GraduationCap,
  Sparkles,
  Target,
} from "lucide-react";

import { auth } from "@/auth";
import { buttonVariants } from "@/components/ui/button";
import { HowItWorks } from "@/modules/onboarding/how-it-works";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ui/progress-bar";
import { ProgressRing } from "@/components/ui/progress-ring";
import { CountUp } from "@/components/experience/count-up";
import { RevealGroup, RevealItem } from "@/components/experience/reveal";
import { getDailyGoal, getUserDashboard } from "@/modules/progress/services";
import { getReviewSummary } from "@/modules/review/services";
import { hasSeenWelcome } from "@/modules/onboarding/services";
import { WelcomeGate } from "@/modules/onboarding/welcome";
import { DISCIPLINES } from "@/modules/catalog/disciplines";
import { getCategoryTreeCounts } from "@/modules/catalog/services";
import { DisciplineIcon } from "@/components/discipline-icon";
import { getViewer } from "@/server/access";

export const metadata: Metadata = { title: "Panel" };

/** Formatea minutos como "45 min" o "2 h 10 min". */
function fmtTime(min: number): string {
  if (min <= 0) return "0 min";
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h} h ${m} min` : `${h} h`;
}

export default async function DashboardPage() {
  const session = await auth();
  const userId = session!.user.id;
  const name = session?.user?.name ?? "de nuevo";
  const [data, seenWelcome, review, daily, counts, viewer] = await Promise.all([
    getUserDashboard(userId),
    hasSeenWelcome(userId),
    getReviewSummary(userId),
    getDailyGoal(userId),
    getCategoryTreeCounts(),
    getViewer(),
  ]);

  // Descubrimiento entre disciplinas: las que el visitante PUEDE ver (publicadas;
  // el fundador también borradores) y aún no ha empezado. Convierte el panel en
  // una puerta a todo el ecosistema, no solo a lo ya iniciado.
  const startedSlugs = new Set(
    data.enrollments.map((e) => e.tree.category.slug),
  );
  const toDiscover = DISCIPLINES.filter((d) => {
    const c = counts.get(d.slug);
    const viewable =
      (c?.published ?? 0) > 0 || (viewer.isAdmin && (c?.draft ?? 0) > 0);
    return viewable && !startedSlugs.has(d.slug);
  });

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      {!seenWelcome && <WelcomeGate />}

      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Hola, {name}</h1>
          <p className="text-muted-foreground mt-1">
            Sigue haciendo crecer tu árbol de aprendizaje.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <HowItWorks autoOpen={seenWelcome} />
          <Badge variant="primary">
            <Sparkles className="size-3.5" /> Nivel {data.level}
          </Badge>
          <Badge variant="growth">
            <Flame
              className={data.streak > 0 ? "st-float size-3.5" : "size-3.5"}
            />{" "}
            {data.streak} días
          </Badge>
        </div>
      </div>

      {/* Resumen de nivel + meta diaria */}
      <Card className="mt-6">
        <CardContent className="flex flex-col gap-5 pt-6 sm:flex-row sm:items-center">
          <div className="min-w-0 flex-1">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-medium">Nivel {data.level}</span>
              <span className="text-muted-foreground">
                {data.current}/{data.needed} XP ·{" "}
                <CountUp value={data.totalXp} /> XP totales
              </span>
            </div>
            <ProgressBar value={data.pct} />
          </div>
          <div className="flex items-center gap-3 sm:border-l sm:pl-5">
            <ProgressRing
              value={daily.pct}
              tone={daily.met ? "growth" : "primary"}
              label={`Meta diaria: ${daily.earned} de ${daily.goal} XP hoy`}
            >
              <span className="text-sm font-bold">{daily.pct}%</span>
            </ProgressRing>
            <div className="text-sm">
              <div className="font-semibold">Meta diaria</div>
              <div className="text-muted-foreground">
                {daily.met ? (
                  <span className="text-growth font-medium">¡Cumplida!</span>
                ) : (
                  `${daily.earned}/${daily.goal} XP hoy`
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Estadísticas rápidas */}
      <RevealGroup className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          {
            icon: <Sparkles className="size-4" />,
            label: "XP total",
            value: <CountUp value={data.totalXp} />,
          },
          {
            icon: <GraduationCap className="size-4" />,
            label: "Habilidades",
            value: <CountUp value={data.completedSkills} />,
          },
          {
            icon: <Clock className="size-4" />,
            label: "Tiempo",
            value: fmtTime(data.minutes),
          },
          {
            icon: <Flame className="size-4" />,
            label: "Racha",
            value: (
              <>
                <CountUp value={data.streak} /> d
              </>
            ),
          },
        ].map((s) => (
          <RevealItem key={s.label}>
            <Card className="h-full">
              <CardContent className="py-4">
                <div className="text-muted-foreground flex items-center gap-1.5 text-xs">
                  {s.icon}
                  {s.label}
                </div>
                <div className="mt-1 text-xl font-bold">{s.value}</div>
              </CardContent>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>

      {/* Próximo objetivo recomendado */}
      {data.nextObjective && (
        <Link href={data.nextObjective.href} className="mt-4 block">
          <Card className="st-interactive hover:border-primary border-primary/30 bg-primary/5">
            <CardContent className="flex items-center justify-between gap-3 py-4">
              <div className="flex items-center gap-3">
                <span className="bg-primary/15 text-primary flex size-10 items-center justify-center rounded-xl">
                  <Target className="size-5" />
                </span>
                <div>
                  <div className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                    Tu próximo objetivo
                  </div>
                  <div className="text-sm font-medium">
                    {data.nextObjective.title}
                  </div>
                </div>
              </div>
              <ArrowRight className="text-primary size-5 shrink-0" />
            </CardContent>
          </Card>
        </Link>
      )}

      {/* Repaso inteligente: solo si hay algo que repasar */}
      {review.total > 0 && (
        <Link href="/repaso" className="mt-4 block">
          <Card className="st-interactive hover:border-primary">
            <CardContent className="flex items-center justify-between gap-3 py-4">
              <div className="flex items-center gap-3">
                <span className="bg-primary/15 text-primary flex size-10 items-center justify-center rounded-xl">
                  <Brain className="size-5" />
                </span>
                <div>
                  <div className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                    Repaso inteligente
                  </div>
                  <div className="text-sm font-medium">
                    {review.due > 0
                      ? `${review.due} ${review.due === 1 ? "repaso te toca" : "repasos te tocan"} hoy`
                      : "Repasa para no olvidar lo aprendido"}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {review.due > 0 && <Badge variant="primary">{review.due}</Badge>}
                <ArrowRight className="text-primary size-5 shrink-0" />
              </div>
            </CardContent>
          </Card>
        </Link>
      )}

      {/* Tus árboles */}
      <div className="mt-8 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Tus árboles</h2>
        <Link
          href="/explore"
          className={buttonVariants({ variant: "outline", size: "sm" })}
        >
          Explorar más
        </Link>
      </div>

      {data.enrollments.length === 0 ? (
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Aún no has empezado ningún árbol</CardTitle>
            <CardDescription>
              Explora las categorías y elige tu primera habilidad para aprender.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/explore" className={buttonVariants()}>
              Explorar categorías
            </Link>
          </CardContent>
        </Card>
      ) : (
        <RevealGroup className="mt-4 grid gap-4 sm:grid-cols-2">
          {data.enrollments.map((e) => {
            const pct =
              e.totalSkills > 0
                ? Math.round((e.completedSkills / e.totalSkills) * 100)
                : 0;
            return (
              <RevealItem key={e.id}>
              <Link href={`/trees/${e.tree.slug}`} className="block">
                <Card className="st-interactive hover:border-primary h-full">
                  <CardHeader>
                    <div className="text-muted-foreground flex items-center gap-2 text-sm">
                      <DisciplineIcon
                        slug={e.tree.category.slug}
                        className="size-4"
                      />
                      <span>{e.tree.category.name}</span>
                    </div>
                    <CardTitle className="text-base">{e.tree.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-muted-foreground mb-2 flex justify-between text-sm">
                      <span>
                        {e.completedSkills}/{e.totalSkills} habilidades
                      </span>
                      <span>{pct}%</span>
                    </div>
                    <ProgressBar
                      value={pct}
                      tone={pct === 100 ? "growth" : "primary"}
                    />
                  </CardContent>
                </Card>
              </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>
      )}

      {/* Descubre más disciplinas: puerta al resto del ecosistema. */}
      {toDiscover.length > 0 && (
        <>
          <div className="mt-8 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Descubre más disciplinas</h2>
            <Link
              href="/explore"
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              Ver todas
            </Link>
          </div>
          <RevealGroup className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {toDiscover.map((d) => (
              <RevealItem key={d.slug}>
                <Link
                  href={`/explore/${d.slug}`}
                  className="block"
                  aria-label={`Explorar ${d.name}`}
                >
                  <Card className="st-interactive hover:border-primary h-full overflow-hidden">
                    <div
                      className="h-1 w-full"
                      style={{
                        background: `linear-gradient(90deg, ${d.accent.from}, ${d.accent.to})`,
                      }}
                      aria-hidden
                    />
                    <CardContent className="flex items-center gap-3 py-4">
                      <span
                        className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-xl"
                        aria-hidden
                      >
                        <DisciplineIcon slug={d.slug} className="size-5" />
                      </span>
                      <div className="min-w-0">
                        <div className="truncate text-sm font-semibold">
                          {d.name}
                        </div>
                        <div className="text-muted-foreground truncate text-xs">
                          {d.tagline}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </>
      )}
    </div>
  );
}
