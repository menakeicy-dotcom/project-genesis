import type { Metadata } from "next";
import Link from "next/link";
import { Eye, Lock } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DisciplineIcon } from "@/components/discipline-icon";
import { RevealGroup, RevealItem } from "@/components/experience/reveal";
import { getCategoryTreeCounts } from "@/modules/catalog/services";
import { getViewer } from "@/server/access";
import { DISCIPLINES, STATUS_META } from "@/modules/catalog/disciplines";

export const metadata: Metadata = { title: "Explorar" };

export default async function ExplorePage() {
  const [counts, viewer] = await Promise.all([
    getCategoryTreeCounts(),
    getViewer(),
  ]);
  const isAdmin = viewer.isAdmin;

  // Estado de cada disciplina para ESTE visitante. La disponibilidad se deriva
  // del estado de publicación + rol: el fundador ve los borradores "En revisión".
  const view = DISCIPLINES.map((d) => {
    const c = counts.get(d.slug);
    const published = c?.published ?? 0;
    const draft = c?.draft ?? 0;
    const viewable = published > 0 || (isAdmin && draft > 0);
    const underReview = viewable && published === 0; // borrador visible al admin
    return { d, published, draft, viewable, underReview };
  });
  // Viewable primero (descubrimiento).
  view.sort((a, b) => (a.viewable ? 0 : 1) - (b.viewable ? 0 : 1));

  const publishedCount = view.filter((v) => v.published > 0).length;
  const reviewCount = view.filter((v) => v.underReview).length;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold tracking-tight">
        Explora las disciplinas
      </h1>
      <p className="text-muted-foreground mt-1 max-w-2xl">
        SkillTree es un ecosistema de conocimiento en crecimiento. Cada
        disciplina es un bosque de habilidades por descubrir.
      </p>
      {isAdmin ? (
        <p className="text-primary mt-2 inline-flex items-center gap-1.5 text-sm font-medium">
          <Eye className="size-4" /> Modo fundador · {reviewCount} en revisión
          (aún no públicas)
        </p>
      ) : publishedCount > 0 ? (
        <p className="text-primary mt-2 text-sm font-medium">
          {publishedCount} disciplinas disponibles · más en camino
        </p>
      ) : (
        <p className="text-muted-foreground mt-2 text-sm">
          Estamos afinando las primeras disciplinas. Muy pronto.
        </p>
      )}

      <RevealGroup
        className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        stagger={0.05}
      >
        {view.map(({ d, published, viewable, underReview }) => {
          const badge = viewable
            ? underReview
              ? { label: "En revisión", tone: "primary" as const }
              : { label: "Disponible", tone: "growth" as const }
            : STATUS_META[d.status];

          const inner = (
            <Card
              className={
                "group relative h-full overflow-hidden " +
                (viewable ? "st-interactive hover:border-primary" : "opacity-80")
              }
            >
              {/* Acento de identidad: franja superior con un verde sutil. */}
              <div
                className="h-1.5 w-full"
                style={{
                  background: `linear-gradient(90deg, ${d.accent.from}, ${d.accent.to})`,
                }}
                aria-hidden
              />
              <CardHeader>
                <div className="mb-2 flex items-start justify-between">
                  <span
                    className={
                      "bg-primary/10 text-primary flex size-11 items-center justify-center rounded-2xl" +
                      (viewable ? " st-float" : "")
                    }
                    aria-hidden
                  >
                    <DisciplineIcon slug={d.slug} className="size-5" />
                  </span>
                  <Badge variant={badge.tone}>
                    {!viewable && <Lock className="size-3" />}
                    {underReview && <Eye className="size-3" />}
                    {badge.label}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{d.name}</CardTitle>
                <p className="text-primary text-xs font-semibold tracking-wide uppercase">
                  {d.tagline}
                </p>
                <CardDescription className="mt-1">
                  {d.description}
                </CardDescription>
                {viewable && (
                  <p className="text-foreground mt-2 text-xs font-medium">
                    {underReview
                      ? "Ábrela para revisarla →"
                      : `${published} ${published === 1 ? "árbol" : "árboles"} · empieza ahora →`}
                  </p>
                )}
              </CardHeader>
            </Card>
          );

          return (
            <RevealItem key={d.slug}>
              {viewable ? (
                <Link
                  href={`/explore/${d.slug}`}
                  className="block"
                  aria-label={`${d.name} · ${badge.label}`}
                >
                  {inner}
                </Link>
              ) : (
                <div
                  className="cursor-default"
                  aria-label={`${d.name} · ${badge.label}`}
                  title={`${d.name} · ${badge.label}`}
                >
                  {inner}
                </div>
              )}
            </RevealItem>
          );
        })}
      </RevealGroup>
    </div>
  );
}
