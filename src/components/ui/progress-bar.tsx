import { cn } from "@/lib/utils";

/**
 * Barra de progreso. El "crecimiento" (verde) se reserva para completado; el
 * avance parcial usa el azul principal.
 */
export function ProgressBar({
  value,
  className,
  tone = "primary",
}: {
  value: number;
  className?: string;
  tone?: "primary" | "growth";
}) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div
      className={cn(
        "bg-muted h-2 w-full overflow-hidden rounded-full",
        className,
      )}
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={cn(
          "h-full rounded-full transition-all",
          tone === "growth" ? "bg-growth" : "bg-primary",
        )}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
