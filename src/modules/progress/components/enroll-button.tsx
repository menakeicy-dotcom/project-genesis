"use client";

import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { enrollAction } from "@/modules/progress/actions";

/** Botón para inscribirse en un árbol. */
export function EnrollButton({
  treeId,
  treeSlug,
}: {
  treeId: string;
  treeSlug: string;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          await enrollAction(treeId, treeSlug);
        })
      }
    >
      {isPending ? "Empezando…" : "Empezar este árbol"}
    </Button>
  );
}
