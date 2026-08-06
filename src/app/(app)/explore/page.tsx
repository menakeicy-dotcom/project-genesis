import type { Metadata } from "next";
import { Eye } from "lucide-react";

import { getDisciplineViews } from "@/modules/catalog/discipline-view";
import { ExploreCatalog } from "@/modules/catalog/explore-catalog";
import { PublishCatalogButton } from "@/modules/catalog/publish-catalog-button";
import { getViewer } from "@/server/access";

export const metadata: Metadata = { title: "Explorar" };

export default async function ExplorePage() {
  const [views, viewer] = await Promise.all([
    getDisciplineViews(),
    getViewer(),
  ]);
  const availableCount = views.filter((v) => v.availability === "available").length;
  const reviewCount = views.filter((v) => v.availability === "review").length;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold tracking-tight">
        Explora las disciplinas
      </h1>
      <p className="text-muted-foreground mt-1 max-w-2xl">
        SkillTree es un ecosistema de conocimiento en crecimiento. Cada
        disciplina es un bosque de habilidades por descubrir.
      </p>
      {/* Un usuario normal nunca ve borradores, así que "en revisión" implica
          modo fundador; el mensaje se deriva de las mismas vistas. */}
      {reviewCount > 0 ? (
        <p className="text-primary mt-2 inline-flex items-center gap-1.5 text-sm font-medium">
          <Eye className="size-4" /> Modo fundador · {reviewCount} en revisión
          (aún no públicas)
        </p>
      ) : availableCount > 0 ? (
        <p className="text-primary mt-2 text-sm font-medium">
          {availableCount} disciplinas disponibles · más en camino
        </p>
      ) : (
        <p className="text-muted-foreground mt-2 text-sm">
          Estamos afinando las primeras disciplinas. Muy pronto.
        </p>
      )}

      {/* Solo la fundadora, y solo mientras no haya nada publicado: publica el
          catálogo con un clic (sin URLs, claves ni variables de entorno). */}
      {viewer.isAdmin && availableCount === 0 && <PublishCatalogButton />}

      <ExploreCatalog views={views} />
    </div>
  );
}
