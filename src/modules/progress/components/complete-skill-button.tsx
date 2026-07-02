"use client";

import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";
import { completeSkillAction } from "@/modules/progress/actions";

/** Botón para marcar una habilidad como completada. */
export function CompleteSkillButton({ skillId }: { skillId: string }) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="space-y-2">
      {error && <Alert variant="error">{error}</Alert>}
      <Button
        className="w-full"
        disabled={isPending}
        onClick={() =>
          startTransition(async () => {
            setError(null);
            const res = await completeSkillAction(skillId);
            if (res?.error) setError(res.error);
          })
        }
      >
        {isPending ? "Guardando…" : "Marcar como completada"}
      </Button>
    </div>
  );
}
