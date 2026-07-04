import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { auth } from "@/auth";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ui/progress-bar";
import { getTreeBySlug } from "@/modules/catalog/services";
import { getEnrollment, getTreeNodeStates } from "@/modules/progress/services";
import { EnrollButton } from "@/modules/progress/components/enroll-button";
import { LivingTree } from "@/modules/skill-tree/living-tree";

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
}: {
  params: Promise<{ treeSlug: string }>;
}) {
  const { treeSlug } = await params;
  const tree = await getTreeBySlug(treeSlug);
  if (!tree) notFound();

  const session = await auth();
  const userId = session!.user.id;

  const skillsForState = tree.skills.map((s) => ({
    id: s.id,
    isRoot: s.isRoot,
    prerequisites: s.prerequisites.map((p) => ({
      prerequisiteId: p.prerequisiteId,
      group: p.group,
    })),
  }));

  const states = await getTreeNodeStates(userId, tree.id, skillsForState);
  const enrollment = await getEnrollment(userId, tree.id);

  const nodes = tree.skills.map((s) => ({
    id: s.id,
    title: s.title,
    xp: s.xpReward,
    state: states.get(s.id) ?? "locked",
    slug: s.slug,
    tier: s.tier,
    x: s.positionX,
    parents: s.prerequisites.map((p) => p.prerequisiteId),
  }));

  const total = tree.skills.length;
  const completed = nodes.filter((n) => n.state === "completed").length;
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
            <Badge variant="neutral">{total} habilidades</Badge>
          </div>
        </div>
        {!enrollment && <EnrollButton treeId={tree.id} treeSlug={tree.slug} />}
      </div>

      <div className="mt-6">
        <div className="text-muted-foreground mb-2 flex justify-between text-sm">
          <span>
            {completed}/{total} completadas
          </span>
          <span>{pct}%</span>
        </div>
        <ProgressBar value={pct} tone={pct === 100 ? "growth" : "primary"} />
      </div>

      <p className="text-muted-foreground mt-6 mb-3 text-sm">
        Toca una hoja para abrir esa habilidad. Tu árbol crece a medida que
        completas nuevas ramas.
      </p>

      <LivingTree nodes={nodes} treeSlug={tree.slug} />
    </div>
  );
}
