import Link from "next/link";
import { TreeDeciduous } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Logotipo de SkillTree (provisional). El icono de árbol usa el verde de
 * "crecimiento"; el texto, el azul principal. El diseño final llegará después.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 font-semibold tracking-tight",
        className,
      )}
    >
      <TreeDeciduous className="text-growth size-6" aria-hidden />
      <span className="text-primary text-lg">SkillTree</span>
    </Link>
  );
}
