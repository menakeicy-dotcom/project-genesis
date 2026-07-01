import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

/**
 * Layout de las páginas de autenticación: centrado, sobrio y responsive.
 * Coloca el logo arriba y el conmutador de tema en la esquina.
 */
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center px-4 py-12">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-sm">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
        {children}
      </div>
    </div>
  );
}
