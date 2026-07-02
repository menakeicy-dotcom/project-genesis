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

/** Árbol por slug, con habilidades, prerrequisitos y recursos. */
export async function getTreeBySlug(slug: string) {
  return db.tree.findUnique({
    where: { slug },
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

/** Una habilidad concreta dentro de un árbol (para la pantalla de detalle). */
export async function getSkill(treeSlug: string, skillSlug: string) {
  const tree = await db.tree.findUnique({ where: { slug: treeSlug } });
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
