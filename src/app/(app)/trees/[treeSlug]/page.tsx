import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { auth } from "@/auth";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ui/progress-bar";
import { getTreeBySlug } from "@/modules/catalog/services";
import { getEnrollment, getTreeStrands } from "@/modules/progress/services";
import { EnrollButton } from "@/modules/progress/components/enroll-button";
import { OrganicTree } from "@/modules/skill-tree/organic-tree";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ treeSlug: string }>;
}): Promise<Metadata> {
  const { treeSlug } = await params;
  const tree = await getTreeBySlug(treeSlug);
  return { title: tree?.title ?? "Árbol" };
}

export default async function TreePage({
  params,
  searchParams,
}: {
  params: Promise<{ treeSlug: string }>;
  searchParams: Promise<{ grew?: string }>;
}) {
  const { treeSlug } = await params;
  const { grew } = await searchParams;

  const session = await auth();
  const userId = session!.user.id;

  // getTreeStrands solo devuelve árboles PUBLICADOS; un borrador → 404.
  const data = await getTreeStrands(userId, treeSlug);
  if (!data) notFound();
  const { tree, strands } = data;

  const enrollment = await getEnrollment(userId, tree.id);

  const total = strands.reduce((s, b) => s + b.total, 0);
  const completed = strands.reduce((s, b) => s + b.completed, 0);
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <Link
        href={`/explore/${tree.category.slug}`}
        className="text-muted-foreground text-sm hover:underline"
      >
        ← {tree.category.icon} {tree.category.name}
      </Link>

      <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-2xl">
          <h1 className="text-2xl font-bold tracking-tight">{tree.title}</h1>
          <p className="text-muted-foreground mt-1">{tree.description}</p>
          <div className="mt-3 flex gap-2">
            <Badge variant="outline">{tree.difficulty}</Badge>
            <Badge variant="neutral">{strands.length} grandes habilidades</Badge>
          </div>
        </div>
        {!enrollment && <EnrollButton treeId={tree.id} treeSlug={tree.slug} />}
      </div>

      <div className="mt-6">
        <div className="text-muted-foreground mb-2 flex justify-between text-sm">
          <span>{completed}/{total} habilidades completadas</span>
          <span>{pct}%</span>
        </div>
        <ProgressBar value={pct} tone={pct === 100 ? "growth" : "primary"} />
      </div>

      <p className="text-muted-foreground mt-6 mb-3 text-sm">
        Tú decides qué aprender hoy. Cada hoja es una gran habilidad: elige la que
        quieras: dentro, avanzarás nivel a nivel.
      </p>

      <OrganicTree strands={strands} treeSlug={tree.slug} grew={grew} />

      {/* Acceso por lista (accesible y como respaldo del árbol). */}
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {strands.map((b) => (
          <Link
            key={b.key}
            href={`/trees/${tree.slug}/rama/${b.key}`}
            className="border-border hover:border-primary st-interactive block rounded-xl border p-4"
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold">{b.label}</span>
              <Badge
                variant={
                  b.state === "completed"
                    ? "growth"
                    : b.state === "progress"
                      ? "primary"
                      : "neutral"
                }
              >
                {b.completed}/{b.total}
              </Badge>
            </div>
            <div className="mt-3">
              <ProgressBar
                value={b.pct}
                tone={b.state === "completed" ? "growth" : "primary"}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
