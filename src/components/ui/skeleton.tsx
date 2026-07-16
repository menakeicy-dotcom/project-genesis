import { cn } from "@/lib/utils";

/**
 * Skeleton reutilizable: un bloque con brillo (shimmer) que ocupa el hueco del
 * contenido mientras carga. Da sensación de rapidez y evita saltos de layout.
 * Respeta prefers-reduced-motion (el brillo se detiene). Agnóstico de contenido.
 */
export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("bg-muted st-shimmer rounded-md", className)}
    />
  );
}
