import {
  Atom,
  Briefcase,
  Camera,
  ChefHat,
  Code2,
  Dumbbell,
  FlaskConical,
  Languages,
  Leaf,
  Music2,
  Palette,
  Sigma,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Icono de una disciplina/categoría en estilo CONTORNO (lucide), resuelto por
 * `slug`. Sustituye a los emojis de colores por una iconografía limpia y
 * coherente —como un mapa escolar—, del color que herede (currentColor).
 *
 * Las categorías de la base de datos comparten slug con las disciplinas, así
 * que este mismo mapa sirve para el catálogo, el perfil, el árbol y el panel.
 */
const BY_SLUG: Record<string, LucideIcon> = {
  idiomas: Languages,
  programacion: Code2,
  musica: Music2,
  matematicas: Sigma,
  ciencia: FlaskConical,
  "arte-diseno": Palette,
  arte: Palette,
  cocina: ChefHat,
  negocios: Briefcase,
  "salud-fitness": Dumbbell,
  salud: Dumbbell,
  "fotografia-video": Camera,
  fotografia: Camera,
  ciencias: Atom,
};

/** Devuelve el componente de icono para un slug (hoja por defecto). */
export function disciplineIcon(slug: string): LucideIcon {
  return BY_SLUG[slug] ?? Leaf;
}

export function DisciplineIcon({
  slug,
  className,
  strokeWidth = 1.75,
}: {
  slug: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Icon = disciplineIcon(slug);
  return (
    <Icon className={cn("size-5", className)} strokeWidth={strokeWidth} aria-hidden />
  );
}
