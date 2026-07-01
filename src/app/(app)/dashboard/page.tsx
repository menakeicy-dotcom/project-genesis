import type { Metadata } from "next";

import { auth } from "@/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = { title: "Tu espacio" };

/**
 * Panel provisional tras iniciar sesión. En el Sprint 1 solo confirma que la
 * autenticación funciona. Aquí vivirá, más adelante, el árbol personal del
 * usuario (sprints posteriores).
 */
export default async function DashboardPage() {
  const session = await auth();
  const name = session?.user?.name ?? "de nuevo";

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12">
      <h1 className="text-2xl font-bold tracking-tight">Hola, {name} 👋</h1>
      <p className="text-muted-foreground mt-1">
        Tu sesión está activa. Aquí crecerá tu árbol de aprendizaje.
      </p>

      <Card className="mt-8 max-w-xl">
        <CardHeader>
          <CardTitle>Tu árbol personal llegará pronto</CardTitle>
          <CardDescription>
            El Sprint 1 sienta las bases (cuenta, sesión, tema claro/oscuro).
            Las categorías, los árboles y el progreso se construirán en los
            siguientes sprints.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          Nada de esto está implementado todavía, y es intencional: primero, una
          base sólida.
        </CardContent>
      </Card>
    </div>
  );
}
