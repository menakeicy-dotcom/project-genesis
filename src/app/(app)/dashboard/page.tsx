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
import { getUserDashboard } from "@/modules/progress/services";
import { getReviewSummary } from "@/modules/review/services";
import { hasSeenWelcome } from "@/modules/onboarding/services";
import { WelcomeGate } from "@/modules/onboarding/welcome";

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
  const [data, seenWelcome, review] = await Promise.all([
    getUserDashboard(userId),
    hasSeenWelcome(userId),
    getReviewSummary(userId),
  ]);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      {!seenWelcome && <WelcomeGate />}

      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Hola, {name} 👋</h1>
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
            <Flame className="size-3.5" /> {data.streak} días
          </Badge>
        </div>
      </div>

      {/* Resumen de nivel */}
      <Card className="mt-6">
        <CardContent className="pt-6">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-medium">Nivel {data.level}</span>
            <span className="text-muted-foreground">
              {data.current}/{data.needed} XP · {data.totalXp} XP totales
            </span>
          </div>
          <ProgressBar value={data.pct} />
        </CardContent>
      </Card>

      {/* Estadísticas rápidas */}
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          {
            icon: <Sparkles className="size-4" />,
            label: "XP total",
            value: data.totalXp,
          },
          {
            icon: <GraduationCap className="size-4" />,
            label: "Habilidades",
            value: data.completedSkills,
          },
          {
            icon: <Clock className="size-4" />,
            label: "Tiempo",
            value: fmtTime(data.minutes),
          },
          {
            icon: <Flame className="size-4" />,
            label: "Racha",
            value: `${data.streak} d`,
          },
        ].map((s) => (
          <Card key={s.label}>
            <CardContent className="py-4">
              <div className="text-muted-foreground flex items-center gap-1.5 text-xs">
                {s.icon}
                {s.label}
              </div>
              <div className="mt-1 text-xl font-bold">{s.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Próximo objetivo recomendado */}
      {data.nextObjective && (
        <Link href={data.nextObjective.href} className="mt-4 block">
          <Card className="hover:border-primary border-primary/30 bg-primary/5 transition-colors">
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
          <Card className="hover:border-primary transition-colors">
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
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {data.enrollments.map((e) => {
            const pct =
              e.totalSkills > 0
                ? Math.round((e.completedSkills / e.totalSkills) * 100)
                : 0;
            return (
              <Link key={e.id} href={`/trees/${e.tree.slug}`} className="block">
                <Card className="hover:border-primary h-full transition-colors">
                  <CardHeader>
                    <div className="text-muted-foreground flex items-center gap-2 text-sm">
                      <span>{e.tree.category.icon}</span>
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
            );
          })}
        </div>
      )}
    </div>
  );
}
