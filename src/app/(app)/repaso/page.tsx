import type { Metadata } from "next";
import Link from "next/link";
import { Brain, Sprout, Sparkles } from "lucide-react";

import { auth } from "@/auth";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getReviewSession } from "@/modules/review/services";
import { ReviewSession } from "@/modules/review/review-session";

export const metadata: Metadata = { title: "Repaso" };

/**
 * Repaso inteligente: recuperación espaciada sobre las habilidades ya
 * completadas. Nutre la sesión de la práctica que vive en cada lección, así
 * cualquier disciplina se repasa sin contenido extra.
 */
export default async function RepasoPage() {
  const session = await auth();
  const userId = session!.user.id;
  const cards = await getReviewSession(userId, 8);

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10">
      <div className="flex items-center gap-3">
        <span className="bg-primary/15 text-primary flex size-11 items-center justify-center rounded-2xl">
          <Brain className="size-6" />
        </span>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Repaso inteligente</h1>
          <p className="text-muted-foreground text-sm">
            Recordar es lo que fija lo aprendido. Repasa un poco cada día.
          </p>
        </div>
      </div>

      {cards.length === 0 ? (
        <Card className="mt-8">
          <CardContent className="flex flex-col items-center gap-3 py-12 text-center">
            <span className="bg-primary/10 text-primary flex size-14 items-center justify-center rounded-full">
              <Sprout className="size-7" strokeWidth={1.75} />
            </span>
            <p className="text-base font-medium">Aún no hay nada que repasar</p>
            <p className="text-muted-foreground max-w-sm text-sm">
              Completa habilidades en tus árboles y volverán aquí para que las
              recuerdes en el momento justo. El repaso hace que no se te olviden.
            </p>
            <Link href="/dashboard" className={buttonVariants({ className: "mt-2" })}>
              <Sparkles className="size-4" /> Ir a aprender
            </Link>
          </CardContent>
        </Card>
      ) : (
        <ReviewSession cards={cards} />
      )}
    </div>
  );
}
