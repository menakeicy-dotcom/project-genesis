import "server-only";

import { db } from "@/server/db";
import { visibleTreeStatuses } from "@/server/access";

/**
 * Servicios de lectura del catálogo (categorías y árboles). Única fuente de
 * datos de dominio para las pantallas; la UI no habla con Prisma directamente.
 *
 * La VISIBILIDAD depende del rol: un administrador (fundador) ve también los
 * borradores; el resto, solo lo publicado. Cada consulta pide los estados
 * visibles a `@/server/access`, así ninguna pantalla decide por su cuenta.
 */

/**
 * Conteo de árboles por categoría separando publicados y borradores. Base de la
 * disponibilidad de cada disciplina (ver `getDisciplineViews`).
 *
 * Escalable: agrega en la base de datos con `groupBy` (categoría × estado) en
 * lugar de traer todas las filas de árboles. Sigue siendo O(categorías×estados)
 * aunque existan miles de árboles.
 */
export async function getCategoryTreeCounts(): Promise<
  Map<string, { published: number; draft: number }>
> {
  const [cats, groups] = await Promise.all([
    db.category.findMany({ select: { id: true, slug: true } }),
    db.tree.groupBy({ by: ["categoryId", "status"], _count: { _all: true } }),
  ]);
  const slugById = new Map(cats.map((c) => [c.id, c.slug]));
  const map = new Map<string, { published: number; draft: number }>();
  for (const c of cats) map.set(c.slug, { published: 0, draft: 0 });
  for (const g of groups) {
    const slug = slugById.get(g.categoryId);
    if (!slug) continue;
    const entry = map.get(slug)!;
    if (g.status === "PUBLISHED") entry.published += g._count._all;
    else if (g.status === "DRAFT") entry.draft += g._count._all;
  }
  return map;
}

/** Categoría por slug, con sus árboles VISIBLES para el visitante. */
export async function getCategoryBySlug(slug: string) {
  return db.category.findUnique({
    where: { slug },
    include: {
      trees: {
        where: { status: { in: await visibleTreeStatuses() } },
        orderBy: { createdAt: "asc" },
        include: { _count: { select: { skills: true } } },
      },
    },
  });
}

/**
 * Árbol PUBLICADO por slug, con habilidades, prerrequisitos y recursos.
 * Los árboles en DRAFT/ARCHIVED no se devuelven: la capa de datos es la única
 * frontera de publicación, así ninguna página puede olvidar el guard.
 */
export async function getTreeBySlug(slug: string) {
  return db.tree.findFirst({
    where: { slug, status: { in: await visibleTreeStatuses() } },
    include: {
      category: true,
      skills: {
        orderBy: { order: "asc" },
        include: {
          prerequisites: true,
          resources: { orderBy: { order: "asc" } },
        },
      },
    },
  });
}

/**
 * Una habilidad concreta de un árbol PUBLICADO (pantalla de detalle).
 * Si el árbol no está publicado, no existe para el usuario (devuelve null).
 */
export async function getSkill(treeSlug: string, skillSlug: string) {
  const tree = await db.tree.findFirst({
    where: { slug: treeSlug, status: { in: await visibleTreeStatuses() } },
  });
  if (!tree) return null;

  return db.skill.findUnique({
    where: { treeId_slug: { treeId: tree.id, slug: skillSlug } },
    include: {
      tree: { include: { category: true } },
      resources: { orderBy: { order: "asc" } },
      prerequisites: { include: { prerequisite: true } },
    },
  });
}
