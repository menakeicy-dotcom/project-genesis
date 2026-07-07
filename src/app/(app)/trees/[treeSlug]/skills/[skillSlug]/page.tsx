import type { Metadata } from "next";
import type { ReactNode } from "react";
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
import { SkillLesson, type Lesson } from "@/modules/skill-tree/lesson";

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

const CEFR = ["Pre-A1", "A1", "A2", "B1", "B2", "C1", "C2"];
const DIFFICULTY_LABEL: Record<string, string> = {
  easy: "Dificultad baja",
  medium: "Dificultad media",
  hard: "Dificultad alta",
  expert: "Dificultad muy alta",
};
const BRANCH_LABEL: Record<string, string> = {
  estrategias: "Estrategias",
  pronunciacion: "Pronunciación",
  vocabulario: "Vocabulario",
  gramatica: "Gramática",
  escucha: "Comprensión auditiva",
  lectura: "Lectura",
  conversacion: "Conversación",
  escritura: "Escritura",
  cultura: "Cultura",
  fluidez: "Fluidez",
  hito: "Hito de nivel",
};

/** Contenido pedagógico enriquecido guardado en Skill.content (JSON). */
interface SkillContent {
  competency?: string;
  rationale?: string;
  commonErrors?: string[];
  masteryCriteria?: string[];
  exercises?: string[];
  assessments?: string[];
  lesson?: Lesson;
}

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

  const content = (skill.content ?? {}) as SkillContent;

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
        {skill.branch && (
          <Badge variant="outline">
            {BRANCH_LABEL[skill.branch] ?? skill.branch}
          </Badge>
        )}
        <Badge variant="neutral">Nivel {CEFR[skill.tier] ?? skill.tier}</Badge>
        {skill.difficulty && (
          <Badge variant="neutral">
            {DIFFICULTY_LABEL[skill.difficulty] ?? skill.difficulty}
          </Badge>
        )}
        <Badge variant="primary">
          <Sparkles className="size-3.5" /> {skill.xpReward} XP
        </Badge>
        <Badge variant="neutral">
          <Clock className="size-3.5" /> {skill.estimatedMinutes} min
        </Badge>
        {content.lesson && <Badge variant="growth">Lección interactiva</Badge>}
        {state === "completed" && <Badge variant="growth">Completada ✓</Badge>}
      </div>

      <p className="text-muted-foreground mt-5">{skill.description}</p>

      {content.lesson ? (
        <SkillLesson lesson={content.lesson} />
      ) : (
        <Alert variant="info" className="mt-6">
          El contenido interactivo de esta habilidad está en preparación.
          Debajo tienes su ficha pedagógica y recursos para empezar a trabajarla.
        </Alert>
      )}

      {(() => {
        const c = content;
        const hasLesson = !!c.lesson;
        const list = (items?: string[]) =>
          items && items.length ? (
            <ul className="list-disc space-y-1 pl-5">
              {items.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
          ) : null;
        const rows: { h: string; body: ReactNode }[] = [];
        if (skill.objective)
          rows.push({ h: "Objetivo de aprendizaje", body: skill.objective });
        if (c.competency)
          rows.push({ h: "Competencia que adquieres", body: c.competency });
        if (c.rationale)
          rows.push({ h: "Por qué existe (y aquí)", body: c.rationale });
        if (c.masteryCriteria?.length)
          rows.push({
            h: "Criterios de dominio",
            body: list(c.masteryCriteria),
          });
        if (c.commonErrors?.length)
          rows.push({ h: "Errores frecuentes", body: list(c.commonErrors) });
        // Cuando hay lección, sus ejercicios/actividad sustituyen a las sugerencias.
        if (!hasLesson && c.exercises?.length)
          rows.push({ h: "Ejercicios sugeridos", body: list(c.exercises) });
        if (!hasLesson && c.assessments?.length)
          rows.push({ h: "Cómo se evalúa", body: list(c.assessments) });
        if (rows.length === 0) return null;
        return (
          <div className="mt-8">
            <h2 className="mb-3 text-lg font-semibold">Ficha pedagógica</h2>
            <div className="space-y-4">
              {rows.map((r, i) => (
                <div key={i}>
                  <h3 className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                    {r.h}
                  </h3>
                  <div className="mt-1 text-sm">{r.body}</div>
                </div>
              ))}
            </div>
          </div>
        );
      })()}

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
