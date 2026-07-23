import "server-only";

import { db } from "@/server/db";

/**
 * Servicios de lectura del catálogo (categorías y árboles). Única fuente de
 * datos de dominio para las pantallas; la UI no habla con Prisma directamente.
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

/** Categoría por slug, con sus árboles publicados. */
export async function getCategoryBySlug(slug: string) {
  return db.category.findUnique({
    where: { slug },
    include: {
      trees: {
        where: { status: "PUBLISHED" },
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
    where: { slug, status: "PUBLISHED" },
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
    where: { slug: treeSlug, status: "PUBLISHED" },
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
