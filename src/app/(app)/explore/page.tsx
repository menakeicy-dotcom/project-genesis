import type { Metadata } from "next";
import Link from "next/link";
import { Lock } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getCategories } from "@/modules/catalog/services";
import { DISCIPLINES, STATUS_META } from "@/modules/catalog/disciplines";

export const metadata: Metadata = { title: "Explorar" };

export default async function ExplorePage() {
  // Cuenta de árboles publicados por categoría real (para las disponibles).
  const categories = await getCategories();
  const treeCount = new Map(categories.map((c) => [c.slug, c._count.trees]));

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold tracking-tight">
        Explora las disciplinas
      </h1>
      <p className="text-muted-foreground mt-1 max-w-2xl">
        SkillTree es un ecosistema de conocimiento en crecimiento. Cada
        disciplina es un bosque de habilidades por descubrir. Empezamos por
        Idiomas; las demás están en camino.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {DISCIPLINES.map((d) => {
          const meta = STATUS_META[d.status];
          const available = d.status === "available";
          const trees = treeCount.get(d.slug) ?? 0;

          const inner = (
            <Card
              className={
                available
                  ? "hover:border-primary h-full transition-colors"
                  : "h-full opacity-70"
              }
            >
              <CardHeader>
                <div className="mb-2 flex items-start justify-between">
                  <span className="text-4xl" aria-hidden>
                    {d.icon}
                  </span>
                  <Badge variant={meta.tone}>
                    {!available && <Lock className="size-3" />}
                    {meta.label}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{d.name}</CardTitle>
                <CardDescription>{d.description}</CardDescription>
                {available && trees > 0 && (
                  <p className="text-muted-foreground mt-1 text-xs">
                    {trees} {trees === 1 ? "árbol" : "árboles"} · empieza ahora →
                  </p>
                )}
              </CardHeader>
            </Card>
          );

          return available ? (
            <Link
              key={d.slug}
              href={`/explore/${d.slug}`}
              className="block"
              aria-label={`${d.name} · disponible`}
            >
              {inner}
            </Link>
          ) : (
            <div
              key={d.slug}
              className="cursor-default"
              aria-label={`${d.name} · ${meta.label}`}
              title={`${d.name} · ${meta.label}`}
            >
              {inner}
            </div>
          );
        })}
      </div>
    </div>
  );
}
