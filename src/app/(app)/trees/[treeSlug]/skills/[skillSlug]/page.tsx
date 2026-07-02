import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, Clock, ExternalLink, Sparkles } from "lucide-react";

import { auth } from "@/auth";
import { Alert } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getSkill } from "@/modules/catalog/services";
import { getCompletedSkillIds } from "@/modules/progress/services";
import { isUnlocked } from "@/modules/skill-tree/state";
import { CompleteSkillButton } from "@/modules/progress/components/complete-skill-button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ treeSlug: string; skillSlug: string }>;
}): Promise<Metadata> {
  const { treeSlug, skillSlug } = await params;
  const skill = await getSkill(treeSlug, skillSlug);
  return { title: skill?.title ?? "Habilidad" };
}

const RESOURCE_LABEL: Record<string, string> = {
  VIDEO: "Vídeo",
  ARTICLE: "Artículo",
  EXERCISE: "Ejercicio",
  BOOK: "Libro",
  OTHER: "Recurso",
};

export default async function SkillPage({
  params,
}: {
  params: Promise<{ treeSlug: string; skillSlug: string }>;
}) {
  const { treeSlug, skillSlug } = await params;
  const skill = await getSkill(treeSlug, skillSlug);
  if (!skill) notFound();

  const session = await auth();
  const userId = session!.user.id;
  const completed = await getCompletedSkillIds(userId, skill.treeId);

  const skillShape = {
    id: skill.id,
    isRoot: skill.isRoot,
    prerequisites: skill.prerequisites.map((p) => ({
      prerequisiteId: p.prerequisiteId,
      group: p.group,
    })),
  };

  const state = completed.has(skill.id)
    ? "completed"
    : isUnlocked(skillShape, completed)
      ? "available"
      : "locked";

  const missing = skill.prerequisites
    .filter((p) => !completed.has(p.prerequisiteId))
    .map((p) => p.prerequisite.title);

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10">
      <Link
        href={`/trees/${treeSlug}`}
        className="text-muted-foreground text-sm hover:underline"
      >
        ← {skill.tree.title}
      </Link>

      <div className="text-muted-foreground mt-4 flex items-center gap-2 text-sm">
        <span>{skill.tree.category.icon}</span>
        <span>{skill.tree.category.name}</span>
      </div>
      <h1 className="mt-1 text-2xl font-bold tracking-tight">{skill.title}</h1>

      <div className="mt-3 flex flex-wrap gap-2">
        <Badge variant="primary">
          <Sparkles className="size-3.5" /> {skill.xpReward} XP
        </Badge>
        <Badge variant="neutral">
          <Clock className="size-3.5" /> {skill.estimatedMinutes} min
        </Badge>
        {state === "completed" && <Badge variant="growth">Completada ✓</Badge>}
      </div>

      <p className="text-muted-foreground mt-5">{skill.description}</p>

      {/* Recursos */}
      <h2 className="mt-8 mb-3 flex items-center gap-2 text-lg font-semibold">
        <BookOpen className="size-5" /> Recursos
      </h2>
      {skill.resources.length === 0 ? (
        <p className="text-muted-foreground text-sm">
          Aún no hay recursos para esta habilidad.
        </p>
      ) : (
        <div className="space-y-2">
          {skill.resources.map((r) => (
            <a
              key={r.id}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="hover:border-primary transition-colors">
                <CardContent className="flex items-center justify-between gap-3 py-3">
                  <div>
                    <div className="text-sm font-medium">{r.title}</div>
                    <div className="text-muted-foreground text-xs">
                      {RESOURCE_LABEL[r.type] ?? "Recurso"}
                      {r.provider ? ` · ${r.provider}` : ""}
                      {r.durationMinutes ? ` · ${r.durationMinutes} min` : ""}
                    </div>
                  </div>
                  <ExternalLink className="text-muted-foreground size-4 shrink-0" />
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      )}

      {/* Acción */}
      <div className="mt-8">
        {state === "completed" && (
          <Alert variant="success">
            Ya completaste esta habilidad. ¡Bien hecho! 🌱
          </Alert>
        )}
        {state === "available" && <CompleteSkillButton skillId={skill.id} />}
        {state === "locked" && (
          <Alert variant="info">
            Esta habilidad está bloqueada. Antes debes completar:{" "}
            <strong>{missing.join(", ")}</strong>.
          </Alert>
        )}
      </div>
    </div>
  );
}
