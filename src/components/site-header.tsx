import Link from "next/link";

import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";

/**
 * Cabecera pública (páginas de marketing). Muestra el logo, el conmutador de
 * tema y accesos a iniciar sesión / registrarse.
 */
export function SiteHeader() {
  return (
    <header className="border-border bg-background/80 sticky top-0 z-40 w-full border-b backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <Logo />
        <nav className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <Link
            href="/login"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            Iniciar sesión
          </Link>
          <Link href="/register" className={buttonVariants({ size: "sm" })}>
            Empezar
          </Link>
        </nav>
      </div>
    </header>
  );
}
