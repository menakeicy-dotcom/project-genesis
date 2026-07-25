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

/** Todas las categorías, con el número de árboles publicados. */
export async function getCategories() {
  const categories = await db.category.findMany({
    orderBy: { order: "asc" },
    include: {
      _count: { select: { trees: true } },
    },
  });
  return categories;
}

/**
 * Conteo de árboles por categoría separando publicados y borradores. Permite
 * decidir la disponibilidad de una disciplina según el rol (el fundador ve los
 * borradores como "En revisión"; el usuario normal no los ve).
 */
export async function getCategoryTreeCounts(): Promise<
  Map<string, { published: number; draft: number }>
> {
  const cats = await db.category.findMany({
    select: { slug: true, trees: { select: { status: true } } },
  });
  const map = new Map<string, { published: number; draft: number }>();
  for (const c of cats) {
    map.set(c.slug, {
      published: c.trees.filter((t) => t.status === "PUBLISHED").length,
      draft: c.trees.filter((t) => t.status === "DRAFT").length,
    });
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
