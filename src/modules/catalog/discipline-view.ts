import "server-only";

import { getViewer } from "@/server/access";
import { getCategoryTreeCounts } from "@/modules/catalog/services";
import {
  DISCIPLINES,
  type DisciplineAvailability,
  type DisciplineView,
} from "@/modules/catalog/disciplines";

/**
 * ÚNICA FUENTE DE VERDAD de "qué disciplinas ve el visitante y en qué estado".
 *
 * Resuelve, para el usuario actual, la disponibilidad, el estado, la insignia
 * (vía el estado), los contadores y el enlace de CADA disciplina —una sola vez—
 * combinando el estado de publicación en la base de datos con el rol (permisos).
 * Explorar, Panel y Perfil consumen esto; ninguna pantalla recalcula nada.
 *
 * Escala a cientos de disciplinas: una consulta agregada (`getCategoryTreeCounts`)
 * + un recorrido en memoria de la lista declarativa del catálogo.
 */
export async function getDisciplineViews(): Promise<DisciplineView[]> {
  const [counts, viewer] = await Promise.all([
    getCategoryTreeCounts(),
    getViewer(),
  ]);

  const views = DISCIPLINES.map((discipline): DisciplineView => {
    const c = counts.get(discipline.slug);
    const published = c?.published ?? 0;
    const draft = c?.draft ?? 0;
    const viewable = published > 0 || (viewer.isAdmin && draft > 0);
    const availability: DisciplineAvailability =
      published > 0 ? "available" : viewable ? "review" : "soon";
    return {
      discipline,
      published,
      draft,
      viewable,
      availability,
      href: viewable ? `/explore/${discipline.slug}` : null,
    };
  });

  // Navegables primero (descubrimiento), preservando el orden del catálogo.
  return views.sort((a, b) => (a.viewable ? 0 : 1) - (b.viewable ? 0 : 1));
}
