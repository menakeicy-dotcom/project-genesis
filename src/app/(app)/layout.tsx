import Link from "next/link";
import { redirect } from "next/navigation";
import { Eye } from "lucide-react";

import { auth } from "@/auth";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { logout } from "@/modules/auth/actions";
import { isAdminEmail, isAdminRole } from "@/server/access";

const NAV = [
  { href: "/dashboard", label: "Panel" },
  { href: "/explore", label: "Explorar" },
  { href: "/repaso", label: "Repaso" },
  { href: "/profile", label: "Perfil" },
];

/**
 * Layout de la aplicación autenticada: cabecera con navegación principal,
 * usuario y cierre de sesión. El middleware ya protege estas rutas; aquí
 * verificamos la sesión de nuevo (defensa en profundidad).
 */
export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session?.user) redirect("/login");
  const isFounder =
    isAdminRole(session.user.role) || isAdminEmail(session.user.email);

  return (
    <div className="flex min-h-dvh flex-col">
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <header className="border-border bg-background/80 sticky top-0 z-40 w-full border-b backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4">
          <div className="flex items-center gap-6">
            <Logo />
            <nav className="hidden items-center gap-1 sm:flex">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-md px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2">
            {isFounder && (
              <Badge variant="primary" title="Ves también el contenido en revisión">
                <Eye className="size-3" /> Modo fundador
              </Badge>
            )}
            <span className="text-muted-foreground hidden text-sm md:inline">
              {session.user.name ?? session.user.email}
            </span>
            <ThemeToggle />
            <form action={logout}>
              <Button type="submit" variant="outline" size="sm">
                Salir
              </Button>
            </form>
          </div>
        </div>
        {/* Navegación en móvil */}
        <nav className="border-border flex items-center gap-1 border-t px-4 py-2 sm:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-md px-3 py-1.5 text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      <main id="main" className="flex-1">
        {children}
      </main>
    </div>
  );
}
