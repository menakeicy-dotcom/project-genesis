import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { logout } from "@/modules/auth/actions";

/**
 * Layout de la aplicación autenticada. El middleware ya protege estas rutas;
 * aquí verificamos la sesión de nuevo (defensa en profundidad) y mostramos la
 * cabecera con el usuario y el cierre de sesión.
 */
export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session?.user) redirect("/login");

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="border-border bg-background/80 sticky top-0 z-40 w-full border-b backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
          <Logo />
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground hidden text-sm sm:inline">
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
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
