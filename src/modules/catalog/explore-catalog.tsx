"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { DisciplineCard } from "@/components/discipline-card";
import {
  AVAILABILITY_BADGE,
  type DisciplineAvailability,
  type DisciplineView,
} from "@/modules/catalog/disciplines";

/**
 * Navegador de disciplinas PREPARADO PARA UN CATÁLOGO GRANDE (decenas o cientos).
 *
 * En vez de una cuadrícula plana, ofrece: búsqueda instantánea, filtros por
 * estado y SECCIONES por disponibilidad —para escanear, no para leer todo—.
 * Recibe las vistas ya resueltas en el servidor (`getDisciplineViews`), así que
 * aquí no hay lógica de permisos ni de disponibilidad: solo presentación y
 * filtrado en cliente (O(n), suficiente para un catálogo de disciplinas).
 */

/** Normaliza para buscar sin acentos ni mayúsculas. */
function norm(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

type Filter = "all" | DisciplineAvailability;

const SECTION_ORDER: DisciplineAvailability[] = ["available", "review", "soon"];
const SECTION_TITLE: Record<DisciplineAvailability, string> = {
  available: "Disponibles",
  review: "En revisión",
  soon: "Próximamente",
};

export function ExploreCatalog({ views }: { views: DisciplineView[] }) {
  const [query, setQuery] = useState("");

  // Estados presentes (para no mostrar filtros/secciones vacíos).
  const present = useMemo(() => {
    const set = new Set<DisciplineAvailability>();
    for (const v of views) set.add(v.availability);
    return SECTION_ORDER.filter((s) => set.has(s));
  }, [views]);

  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    const q = norm(query.trim());
    return views.filter((v) => {
      if (filter !== "all" && v.availability !== filter) return false;
      if (!q) return true;
      const d = v.discipline;
      return (
        norm(d.name).includes(q) ||
        norm(d.tagline).includes(q) ||
        norm(d.description).includes(q)
      );
    });
  }, [views, query, filter]);

  const sections = useMemo(
    () =>
      SECTION_ORDER.map((s) => ({
        key: s,
        title: SECTION_TITLE[s],
        items: filtered.filter((v) => v.availability === s),
      })).filter((sec) => sec.items.length > 0),
    [filtered],
  );

  return (
    <div className="mt-6">
      {/* Búsqueda + filtros */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Busca una disciplina…"
            aria-label="Buscar disciplinas"
            className="pl-9"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Borrar búsqueda"
              className="text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2 rounded p-1"
            >
              <X className="size-4" />
            </button>
          )}
        </div>
        {present.length > 1 && (
          <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Filtrar por estado">
            <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>
              Todo
            </FilterChip>
            {present.map((s) => (
              <FilterChip
                key={s}
                active={filter === s}
                onClick={() => setFilter(s)}
              >
                {AVAILABILITY_BADGE[s].label}
              </FilterChip>
            ))}
          </div>
        )}
      </div>

      {/* Resultados por secciones */}
      {sections.length === 0 ? (
        <p className="text-muted-foreground mt-10 text-center text-sm">
          No hay disciplinas que coincidan con «{query}».
        </p>
      ) : (
        <div className="mt-6 space-y-8">
          {sections.map((sec) => (
            <section key={sec.key}>
              <div className="mb-3 flex items-baseline gap-2">
                <h2 className="text-sm font-semibold tracking-wide uppercase">
                  {sec.title}
                </h2>
                <span className="text-muted-foreground text-xs">
                  {sec.items.length}
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sec.items.map((v) => (
                  <DisciplineCard key={v.discipline.slug} view={v} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
        active
          ? "border-primary bg-primary/10 text-primary"
          : "border-border text-muted-foreground hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}
