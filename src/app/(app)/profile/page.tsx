import type { Metadata } from "next";
import Link from "next/link";
import { Flame, Sparkles, Trophy } from "lucide-react";

import { auth } from "@/auth";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getUserProfile } from "@/modules/progress/services";

export const metadata: Metadata = { title: "Perfil" };

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <Card>
      <CardContent className="py-4 text-center">
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-muted-foreground text-xs">{label}</div>
      </CardContent>
    </Card>
  );
}

export default async function ProfilePage() {
  const session = await auth();
  const name = session?.user?.name ?? session?.user?.email ?? "Tú";
  const profile = await getUserProfile(session!.user.id);

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10">
      <div className="flex items-center gap-4">
        <div className="bg-primary/10 text-primary flex size-16 items-center justify-center rounded-full text-2xl font-bold">
          {name.charAt(0).toUpperCase()}
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{name}</h1>
          <p className="text-muted-foreground">
            Tu árbol de aprendizaje cuenta tu historia.
          </p>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Nivel" value={profile.level} />
        <Stat label="XP total" value={profile.totalXp} />
        <Stat label="Racha (días)" value={profile.streak} />
        <Stat label="Habilidades" value={profile.completedSkills} />
      </div>

      {/* Ramas (categorías) */}
      <h2 className="mt-10 flex items-center gap-2 text-lg font-semibold">
        <Sparkles className="text-primary size-5" /> Ramas de tu árbol
      </h2>
      {profile.branches.length === 0 ? (
        <Card className="mt-4">
          <CardContent className="py-8 text-center">
            <p className="text-muted-foreground">
              Aún no tienes ramas. Completa habilidades para que crezca tu
              árbol.
            </p>
            <Link href="/explore" className={`mt-4 ${buttonVariants()}`}>
              Explorar categorías
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {profile.branches.map((b) => (
            <Card key={b.name}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <span className="text-xl">{b.icon}</span> {b.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground flex gap-4 text-sm">
                <span>
                  <Flame className="text-growth mr-1 inline size-4" />
                  {b.xp} XP
                </span>
                <span>{b.skills} habilidades</span>
                <span>
                  {b.trees} {b.trees === 1 ? "árbol" : "árboles"}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Logros */}
      <h2 className="mt-10 flex items-center gap-2 text-lg font-semibold">
        <Trophy className="text-primary size-5" /> Logros
      </h2>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {profile.achievements.map((a) => (
          <Card
            key={a.key}
            className={a.unlocked ? "" : "opacity-40 grayscale"}
          >
            <CardContent className="py-4 text-center">
              <div className="text-3xl">{a.icon}</div>
              <div className="mt-1 text-xs font-medium">{a.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
