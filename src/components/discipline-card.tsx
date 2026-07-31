import Link from "next/link";
import { Eye, Lock } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DisciplineIcon } from "@/components/discipline-icon";
import {
  AVAILABILITY_BADGE,
  type DisciplineView,
} from "@/modules/catalog/disciplines";

/**
 * Tarjeta de disciplina REUTILIZABLE. Una sola implementación para todo el
 * producto (Explorar en grande, Panel en compacto). Recibe la vista ya resuelta
 * (`getDisciplineViews`) —no calcula disponibilidad ni estados por su cuenta— y
 * enlaza sola si es navegable. Es un componente compartido (sin estado): sirve
 * tanto en Server Components como dentro de un Client Component.
 */
export function DisciplineCard({
  view,
  variant = "full",
}: {
  view: DisciplineView;
  variant?: "full" | "compact";
}) {
  const { discipline: d, viewable, availability, published, href } = view;
  const badge = AVAILABILITY_BADGE[availability];
  const underReview = availability === "review";

  const inner =
    variant === "compact" ? (
      <Card
        className={cn(
          "h-full overflow-hidden",
          viewable ? "st-interactive hover:border-primary" : "opacity-80",
        )}
      >
        <AccentStrip d={d} thin />
        <CardContent className="flex items-center gap-3 py-4">
          <IconTile slug={d.slug} float={viewable} size="sm" />
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-semibold">{d.name}</div>
            <div className="text-muted-foreground truncate text-xs">
              {d.tagline}
            </div>
          </div>
          <StateBadge badge={badge} viewable={viewable} review={underReview} />
        </CardContent>
      </Card>
    ) : (
      <Card
        className={cn(
          "group relative h-full overflow-hidden",
          viewable ? "st-interactive hover:border-primary" : "opacity-80",
        )}
      >
        <AccentStrip d={d} />
        <div className="flex flex-col gap-1.5 p-6 pb-4">
          <div className="mb-2 flex items-start justify-between">
            <IconTile slug={d.slug} float={viewable} />
            <StateBadge badge={badge} viewable={viewable} review={underReview} />
          </div>
          <h3 className="text-lg font-semibold tracking-tight">{d.name}</h3>
          <p className="text-primary text-xs font-semibold tracking-wide uppercase">
            {d.tagline}
          </p>
          <p className="text-muted-foreground text-sm">{d.description}</p>
          {viewable && (
            <p className="text-foreground mt-2 text-xs font-medium">
              {underReview
                ? "Ábrela para revisarla →"
                : `${published} ${published === 1 ? "árbol" : "árboles"} · empieza ahora →`}
            </p>
          )}
        </div>
      </Card>
    );

  return href ? (
    <Link
      href={href}
      className="block"
      aria-label={`${d.name} · ${badge.label}`}
    >
      {inner}
    </Link>
  ) : (
    <div
      className="cursor-default"
      aria-label={`${d.name} · ${badge.label}`}
      title={`${d.name} · ${badge.label}`}
    >
      {inner}
    </div>
  );
}

function AccentStrip({
  d,
  thin,
}: {
  d: DisciplineView["discipline"];
  thin?: boolean;
}) {
  return (
    <div
      className={thin ? "h-1 w-full" : "h-1.5 w-full"}
      style={{
        background: `linear-gradient(90deg, ${d.accent.from}, ${d.accent.to})`,
      }}
      aria-hidden
    />
  );
}

function IconTile({
  slug,
  float,
  size = "md",
}: {
  slug: string;
  float?: boolean;
  size?: "sm" | "md";
}) {
  return (
    <span
      className={cn(
        "bg-primary/10 text-primary flex items-center justify-center rounded-2xl",
        size === "sm" ? "size-10 rounded-xl" : "size-11",
        float && "st-float",
      )}
      aria-hidden
    >
      <DisciplineIcon slug={slug} className="size-5" />
    </span>
  );
}

function StateBadge({
  badge,
  viewable,
  review,
}: {
  badge: { label: string; tone: "growth" | "primary" | "neutral" };
  viewable: boolean;
  review: boolean;
}) {
  return (
    <Badge variant={badge.tone}>
      {!viewable && <Lock className="size-3" />}
      {review && <Eye className="size-3" />}
      {badge.label}
    </Badge>
  );
}
