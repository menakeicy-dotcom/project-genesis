import type { Metadata } from "next";
import Link from "next/link";
import { Flame, Sparkles } from "lucide-react";

import { auth } from "@/auth";
import { buttonVariants } from "@/components/ui/button";
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
import { hasSeenWelcome } from "@/modules/onboarding/services";
import { WelcomeGate } from "@/modules/onboarding/welcome";

export const metadata: Metadata = { title: "Panel" };

export default async function DashboardPage() {
  const session = await auth();
  const userId = session!.user.id;
  const name = session?.user?.name ?? "de nuevo";
  const [data, seenWelcome] = await Promise.all([
    getUserDashboard(userId),
    hasSeenWelcome(userId),
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
        <div className="flex gap-2">
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
