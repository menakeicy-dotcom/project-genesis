"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Sprout } from "lucide-react";

import { seedCatalog } from "@/modules/catalog/actions";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

/**
 * Botón que solo ve el fundador para PUBLICAR el catálogo con un clic.
 * Llama a la acción `seedCatalog` (idempotente) y refresca la vista al terminar.
 * Evita depender de URLs, claves o variables de entorno.
 */
export function PublishCatalogButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<
    { tone: "success" | "error"; text: string } | null
  >(null);

  function onClick() {
    setMessage(null);
    startTransition(async () => {
      const result = await seedCatalog();
      if (result.error) {
        setMessage({ tone: "error", text: result.error });
        return;
      }
      setMessage({
        tone: "success",
        text: `Catálogo publicado: ${result.published} disciplinas disponibles para todos.`,
      });
      router.refresh();
    });
  }

  return (
    <div className="border-primary/30 bg-primary/5 mt-4 rounded-lg border p-4">
      <p className="text-foreground text-sm font-medium">
        Publicar el catálogo
      </p>
      <p className="text-muted-foreground mt-1 text-sm">
        Carga las 5 disciplinas en la base de datos y las deja visibles para
        todos. Puedes pulsarlo las veces que quieras: no borra ningún progreso.
      </p>
      <Button
        type="button"
        onClick={onClick}
        disabled={isPending}
        className="mt-3"
      >
        <Sprout className="size-4" />
        {isPending ? "Publicando…" : "Publicar disciplinas"}
      </Button>
      {message && (
        <div className="mt-3">
          <Alert variant={message.tone === "success" ? "success" : "error"}>
            {message.text}
          </Alert>
        </div>
      )}
    </div>
  );
}
