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
import { RevealGroup, RevealItem } from "@/components/experience/reveal";
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

      <RevealGroup
        className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        stagger={0.05}
      >
        {DISCIPLINES.map((d) => {
          const meta = STATUS_META[d.status];
          const available = d.status === "available";
          const trees = treeCount.get(d.slug) ?? 0;

          const inner = (
            <Card
              className={
                "group relative h-full overflow-hidden transition-all " +
                (available
                  ? "hover:-translate-y-0.5 hover:shadow-lg"
                  : "opacity-80")
              }
            >
              {/* Acento de identidad: franja superior con el degradado propio. */}
              <div
                className="h-1.5 w-full"
                style={{
                  background: `linear-gradient(90deg, ${d.accent.from}, ${d.accent.to})`,
                }}
                aria-hidden
              />
              {/* Halo sutil del color al pasar el ratón. */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(120% 80% at 15% 0%, ${d.accent.from}22, transparent 60%)`,
                }}
                aria-hidden
              />
              <CardHeader>
                <div className="mb-2 flex items-start justify-between">
                  <span
                    className={
                      "flex size-12 items-center justify-center rounded-2xl text-2xl shadow-sm" +
                      // La "semilla" de una disciplina disponible respira sutilmente:
                      // atrae la mirada hacia lo que se puede empezar ahora.
                      (available ? " st-float" : "")
                    }
                    style={{
                      background: `linear-gradient(135deg, ${d.accent.from}, ${d.accent.to})`,
                    }}
                    aria-hidden
                  >
                    {d.icon}
                  </span>
                  <Badge variant={meta.tone}>
                    {!available && <Lock className="size-3" />}
                    {meta.label}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{d.name}</CardTitle>
                <p
                  className="text-xs font-semibold tracking-wide uppercase"
                  style={{ color: d.accent.to }}
                >
                  {d.tagline}
                </p>
                <CardDescription className="mt-1">
                  {d.description}
                </CardDescription>
                {available && trees > 0 && (
                  <p className="text-foreground mt-2 text-xs font-medium">
                    {trees} {trees === 1 ? "árbol" : "árboles"} · empieza ahora →
                  </p>
                )}
              </CardHeader>
            </Card>
          );

          return available ? (
            <RevealItem key={d.slug}>
              <Link
                href={`/explore/${d.slug}`}
                className="block"
                aria-label={`${d.name} · disponible`}
              >
                {inner}
              </Link>
            </RevealItem>
          ) : (
            <RevealItem key={d.slug}>
              <div
                className="cursor-default"
                aria-label={`${d.name} · ${meta.label}`}
                title={`${d.name} · ${meta.label}`}
              >
                {inner}
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </div>
  );
}
