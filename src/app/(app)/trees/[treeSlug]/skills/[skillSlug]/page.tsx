import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BookOpen,
  ChevronRight,
  Clock,
  ExternalLink,
  Lock,
  Sparkles,
} from "lucide-react";

import { auth } from "@/auth";
import { Alert } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getSkill, getTreeBySlug } from "@/modules/catalog/services";
import { getCompletedSkillIds } from "@/modules/progress/services";
import { isUnlocked } from "@/modules/skill-tree/state";
import { CompleteSkillButton } from "@/modules/progress/components/complete-skill-button";
import { LessonPlayer, type Lesson } from "@/modules/skill-tree/lesson";

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
  /** Etiquetas propias de la disciplina (para no depender de CEFR ni de ramas de Inglés). */
  levelLabel?: string;
  branchLabel?: string;
}

/** Acordeón: mantiene fuera de la vista el texto largo hasta que se pide. */
function Accordion({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <details className="group border-border mt-3 rounded-xl border">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-4 py-3 text-sm font-semibold">
        <span className="flex items-center gap-2">
          {icon}
          {title}
        </span>
        <ChevronRight className="text-muted-foreground size-4 transition-transform group-open:rotate-90" />
      </summary>
      <div className="px-4 pb-4">{children}</div>
    </details>
  );
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
    .map((p) => ({ slug: p.prerequisite.slug, title: p.prerequisite.title }));

  const content = (skill.content ?? {}) as SkillContent;
  const isLocked = state === "locked";

  // Siguiente hoja sugerida: la que se desbloquea al completar ésta.
  let next: { href: string; title: string } | null = null;
  const tree = await getTreeBySlug(treeSlug);
  if (tree) {
    const completedPlus = new Set(completed);
    completedPlus.add(skill.id);
    const candidates = tree.skills
      .filter((s) => s.id !== skill.id && !completed.has(s.id))
      .filter((s) =>
        isUnlocked(
          {
            id: s.id,
            isRoot: s.isRoot,
            prerequisites: s.prerequisites.map((p) => ({
              prerequisiteId: p.prerequisiteId,
              group: p.group,
            })),
          },
          completedPlus,
        ),
      )
      .sort((a, b) => a.order - b.order);
    const pickNext =
      candidates.find((s) => s.order > skill.order) ?? candidates[0];
    if (pickNext)
      next = {
        href: `/trees/${treeSlug}/skills/${pickNext.slug}`,
        title: pickNext.title,
      };
  }

  // Filas de la ficha pedagógica (referencia, en acordeón).
  const fichaRows: { h: string; body: ReactNode }[] = [];
  const list = (items?: string[]) =>
    items && items.length ? (
      <ul className="list-disc space-y-1 pl-5">
        {items.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    ) : null;
  if (skill.objective)
    fichaRows.push({ h: "Objetivo de aprendizaje", body: skill.objective });
  if (content.competency)
    fichaRows.push({ h: "Competencia que adquieres", body: content.competency });
  if (content.rationale)
    fichaRows.push({ h: "Por qué existe (y aquí)", body: content.rationale });
  if (content.masteryCriteria?.length)
    fichaRows.push({
      h: "Criterios de dominio",
      body: list(content.masteryCriteria),
    });
  if (content.commonErrors?.length)
    fichaRows.push({
      h: "Errores frecuentes",
      body: list(content.commonErrors),
    });

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
            {content.branchLabel ?? BRANCH_LABEL[skill.branch] ?? skill.branch}
          </Badge>
        )}
        <Badge variant="neutral">
          Nivel {content.levelLabel ?? CEFR[skill.tier] ?? skill.tier}
        </Badge>
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
        {isLocked && (
          <Badge variant="neutral">
            <Lock className="size-3" /> Bloqueada
          </Badge>
        )}
        {state === "completed" && (
          <Badge variant="growth">Completada ✓</Badge>
        )}
      </div>

      <p className="text-muted-foreground mt-5">{skill.description}</p>

      {isLocked ? (
        <div className="mt-6 space-y-4">
          <Alert variant="info">
            <span className="flex items-start gap-2">
              <Lock className="mt-0.5 size-4 shrink-0" />
              <span>
                Esta es una <strong>vista previa</strong>. Desbloquea la lección
                completa cuando termines los requisitos de más abajo.
              </span>
            </span>
          </Alert>
          {(content.lesson?.goal || content.lesson?.intro) && (
            <div className="border-primary/30 bg-primary/5 rounded-xl border p-5">
              <h2 className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
                <Sparkles className="size-4" /> Qué aprenderás
              </h2>
              {content.lesson?.goal && (
                <p className="text-primary mt-2 text-sm font-medium">
                  Al terminar podrás {content.lesson.goal}
                </p>
              )}
              {content.lesson?.intro && (
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {content.lesson.intro}
                </p>
              )}
            </div>
          )}
          <Alert variant="info">
            <span className="flex items-center gap-2 font-medium">
              <Lock className="size-4 shrink-0" /> Para desbloquear esta
              habilidad, antes completa:
            </span>
            <ul className="mt-2 space-y-1">
              {missing.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/trees/${treeSlug}/skills/${p.slug}`}
                    className="text-primary hover:underline"
                  >
                    → {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Alert>
        </div>
      ) : content.lesson ? (
        <LessonPlayer
          lesson={content.lesson}
          meta={{
            title: skill.title,
            xpReward: skill.xpReward,
            rationale: content.rationale,
            goal: content.lesson.goal,
          }}
          skillId={skill.id}
          skillSlug={skill.slug}
          treeSlug={treeSlug}
          next={next}
          alreadyCompleted={state === "completed"}
        />
      ) : (
        <div className="mt-6 space-y-3">
          <Alert variant="info">
            El contenido interactivo de esta habilidad está en preparación.
          </Alert>
          <CompleteSkillButton skillId={skill.id} />
        </div>
      )}

      {/* Material de referencia, plegado para no saturar. */}
      {fichaRows.length > 0 && (
        <Accordion title="Ficha pedagógica">
          <div className="space-y-4">
            {fichaRows.map((r, i) => (
              <div key={i}>
                <h3 className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                  {r.h}
                </h3>
                <div className="mt-1 text-sm">{r.body}</div>
              </div>
            ))}
          </div>
        </Accordion>
      )}

      {skill.resources.length > 0 && (
        <Accordion
          title={`Recursos (${skill.resources.length})`}
          icon={<BookOpen className="size-4" />}
        >
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
        </Accordion>
      )}
    </div>
  );
}
