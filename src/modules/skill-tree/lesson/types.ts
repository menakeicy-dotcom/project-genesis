/**
 * Modelo de CONTENIDO EDUCATIVO real de una habilidad (una "lección").
 *
 * Es distinto de la ficha pedagógica (objetivo, competencia, criterios…), que
 * describe la habilidad. La lección ENSEÑA: explica, da ejemplos, propone
 * práctica autocorregible, una actividad, autoevaluación y un resumen.
 *
 * Se guarda dentro de `Skill.content.lesson` (JSON) — no requiere cambios de
 * esquema— y la renderiza el `LessonPlayer`. Es el mismo tipo que consumen el
 * seed (al sembrar) y la interfaz (al mostrar), para no divergir.
 *
 * Diseño de la experiencia (no un PDF en HTML): tarjetas pequeñas, mucho aire,
 * títulos claros, cajas de ejemplo identificables, comparaciones visuales de
 * dos conceptos, resúmenes cortos antes de explicaciones largas y revelado
 * progresivo. Bloques con identidad propia en este orden:
 *   Aprende → Ejemplos → Practica → Actividad → Retroalimentación → Resumen.
 */

/**
 * Un ejemplo ilustrativo, AGNÓSTICO de disciplina.
 *
 * Modelo genérico:
 *   - `text` : texto principal (una frase, un concepto, un título).
 *   - `sub`  : texto secundario (traducción, explicación o aclaración).
 *   - `mono` : línea monoespaciada (código, fórmula o transcripción fonética).
 *   - `term` : etiqueta breve opcional (categoría/tipo del ejemplo).
 *   - `note` : nota al pie.
 *
 * Alias retrocompatibles: el contenido antiguo (Inglés/Programación) usa
 * `en`/`es`/`ipa`, que siguen funcionando. Usa `viewExample()` para leer
 * cualquier ejemplo de forma uniforme, prefiriendo los campos genéricos.
 */
export interface LessonExample {
  /** Texto principal (frase, concepto, título). Genérico. */
  text?: string;
  /** Texto secundario: traducción, explicación o aclaración. */
  sub?: string;
  /** Línea monoespaciada: código, fórmula o transcripción fonética. */
  mono?: string;
  /** Etiqueta breve opcional (categoría/tipo del ejemplo). */
  term?: string;
  /** Nota al pie. */
  note?: string;

  // ── Alias retrocompatibles (no usar en contenido nuevo) ──
  /** @deprecated usa `text`. */
  en?: string;
  /** @deprecated usa `sub`. */
  es?: string;
  /** @deprecated usa `mono`. */
  ipa?: string;
}

/** Vista normalizada de un ejemplo (campos genéricos, con fallback a los alias). */
export interface ExampleView {
  text: string;
  sub?: string;
  mono?: string;
  term?: string;
  note?: string;
}

/** Normaliza un ejemplo (nuevo o antiguo) a la vista genérica que usa la UI. */
export function viewExample(ex: LessonExample): ExampleView {
  return {
    text: ex.text ?? ex.en ?? "",
    sub: ex.sub ?? ex.es,
    mono: ex.mono ?? ex.ipa,
    term: ex.term,
    note: ex.note,
  };
}

/** Comparación visual de dos conceptos que se confunden (A vs B). */
export interface LessonCompare {
  left: { title: string; points: string[] };
  right: { title: string; points: string[] };
  note?: string;
}

/** Una sección de mini-lección (una "tarjeta" de aprendizaje). */
export interface LessonSection {
  h: string;
  /** Resumen de UNA línea que precede a la explicación (idea antes que detalle). */
  tldr?: string;
  /** Párrafos de explicación (breves; menos es más). */
  body?: string[];
  /** Puntos clave. */
  bullets?: string[];
  /** Bloque de código/fórmula multilínea (monoespaciado). Neutro de lenguaje. */
  code?: string;
  /** Ejemplos ilustrativos dentro de la sección. */
  examples?: LessonExample[];
  /** Comparación visual de dos conceptos. */
  compare?: LessonCompare;
  /** Detalle que se revela bajo demanda ("Saber más"), para no abrumar. */
  more?: string[];
  /** Consejo o aviso destacado (callout). */
  tip?: string;
}

/**
 * Pregunta de práctica autocorregible. Tipos AGNÓSTICOS de disciplina:
 *   - `choice` : opción múltiple (una correcta).
 *   - `fill`   : escribir la respuesta (una o varias aceptadas).
 *   - `order`  : ordenar pasos/elementos en la secuencia correcta.
 *   - `match`  : emparejar conceptos de dos columnas.
 * Sirven igual para gramática, código, teoría musical o cualquier área.
 */
export type PracticeItem =
  | {
      kind: "choice";
      q: string;
      options: string[];
      /** Índice (0-based) de la opción correcta. */
      answer: number;
      why?: string;
    }
  | {
      kind: "fill";
      q: string;
      /** Respuestas aceptadas (se comparan normalizadas: minúsculas, sin tildes/espacios extra). */
      accept: string[];
      hint?: string;
      why?: string;
    }
  | {
      kind: "order";
      q: string;
      /** Elementos en su orden CORRECTO (la UI los baraja al presentarlos). */
      items: string[];
      why?: string;
    }
  | {
      kind: "match";
      q: string;
      /** Parejas correctas izquierda↔derecha (la UI baraja la columna derecha). */
      pairs: { left: string; right: string }[];
      why?: string;
    };

/** Una actividad de producción real (hablar/escribir), no autocorregible. */
export interface LessonActivity {
  title: string;
  steps: string[];
}

/** La lección completa integrada en la página de la habilidad. */
export interface Lesson {
  /** Gancho: por qué esto importa (1–2 frases). */
  intro?: string;
  /** "Al terminar podrás…" — la meta en una frase. */
  goal?: string;
  /** Bloque APRENDE: mini-lecciones en tarjetas. */
  sections: LessonSection[];
  /** Bloque EJEMPLOS: muestrario destacado (opcional; si no, van en las secciones). */
  examples?: LessonExample[];
  /** Bloque PRACTICA: preguntas autocorregibles (la retroalimentación es inmediata). */
  practice?: PracticeItem[];
  /** Bloque ACTIVIDAD: producción real. */
  activity?: LessonActivity;
  /** Bloque RETROALIMENTACIÓN: autoevaluación marcable ("¿ya lo dominas?"). */
  selfCheck?: string[];
  /** Bloque RESUMEN: ideas clave para llevarte. */
  summary?: string[];
}
