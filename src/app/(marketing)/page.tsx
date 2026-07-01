import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

/**
 * Landing provisional. No es el diseño final: comunica la propuesta de valor y
 * lleva a registrarse. Se rediseñará más adelante.
 */
export default function HomePage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-24 text-center sm:py-32">
      <span className="border-border bg-muted text-muted-foreground mb-4 rounded-full border px-3 py-1 text-sm">
        Aprender debe sentirse como hacer crecer un árbol 🌳
      </span>

      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Aprende cualquier habilidad{" "}
        <span className="text-primary">como si subieras de nivel</span>
      </h1>

      <p className="text-muted-foreground mt-6 max-w-xl text-lg">
        SkillTree convierte el aprendizaje en árboles visuales de habilidades.
        Desbloquea nodos, gana experiencia y observa cómo crece tu progreso.
      </p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link href="/register" className={buttonVariants({ size: "lg" })}>
          Empezar gratis
        </Link>
        <Link
          href="/login"
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          Ya tengo cuenta
        </Link>
      </div>
    </section>
  );
}
