import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export const metadata = { title: "Página no encontrada" };

/**
 * Página 404 con identidad de SkillTree (en español). Sustituye al 404 genérico
 * de Next.js (que estaba en inglés) en toda la aplicación: enlaces no válidos y
 * contenido no publicado (p. ej. disciplinas en construcción) muestran esto.
 */
export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col items-center justify-center px-4 py-16 text-center">
      <div className="bg-primary/10 text-primary flex size-20 items-center justify-center rounded-3xl text-5xl">
        🌱
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight">
        Aquí todavía no crece nada
      </h1>
      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
        No encontramos esta página. Puede que el enlace sea antiguo o que este
        contenido aún no esté disponible.
      </p>
      <div className="mt-6 flex items-center gap-2">
        <Link href="/dashboard" className={buttonVariants()}>
          Ir a mi panel
        </Link>
        <Link
          href="/explore"
          className={buttonVariants({ variant: "outline" })}
        >
          Explorar
        </Link>
      </div>
    </div>
  );
}
