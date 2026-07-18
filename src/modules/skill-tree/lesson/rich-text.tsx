import { Fragment } from "react";

/**
 * `<RichText>` — renderiza texto de lección con CÓDIGO EN LÍNEA reutilizable y
 * AGNÓSTICO de disciplina: cualquier fragmento entre backticks `así` se muestra
 * en monoespaciado con fondo sutil.
 *
 * Sirve a todas las disciplinas: `print()` en Programación, `f(x)` en
 * Matemáticas, un acorde como `Do-Mi-Sol` en Música, una partícula en Inglés.
 * Es una mejora universal del motor, no exclusiva de ninguna disciplina.
 *
 * Diseño conservador y sin dependencias: SOLO transforma los backticks (que en
 * el contenido actual ya se usan para código y hoy se ven como texto literal).
 * No toca `_` (evita romper snake_case) ni `^` (la notación usa unicode). El
 * texto sin backticks pasa intacto.
 */
export function RichText({ text }: { text: string }) {
  if (!text.includes("`")) return <>{text}</>;
  const parts = text.split(/(`[^`]+`)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.length >= 2 && p.startsWith("`") && p.endsWith("`") ? (
          <code
            key={i}
            className="border-border bg-muted/60 rounded border px-1 py-0.5 font-mono text-[0.85em]"
          >
            {p.slice(1, -1)}
          </code>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </>
  );
}
