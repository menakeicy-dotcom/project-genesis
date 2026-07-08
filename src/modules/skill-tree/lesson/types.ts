/**
 * Modelo de CONTENIDO EDUCATIVO real de una habilidad (una "lección").
 *
 * Es distinto de la ficha pedagógica (objetivo, competencia, criterios…), que
 * describe la habilidad. La lección ENSEÑA: explica, da ejemplos, propone
 * práctica autocorregible, una actividad, autoevaluación y un resumen.
 *
 * Se guarda dentro de `Skill.content.lesson` (JSON) — no requiere cambios de
 * esquema— y la renderiza <SkillLesson/>. Es el mismo tipo que consumen el
 * seed (al sembrar) y la interfaz (al mostrar), para no divergir.
 *
 * Diseño de la experiencia (no un PDF en HTML): tarjetas pequeñas, mucho aire,
 * títulos claros, cajas de ejemplo identificables, comparaciones visuales de
 * dos conceptos, resúmenes cortos antes de explicaciones largas y revelado
 * progresivo. Bloques con identidad propia en este orden:
 *   Aprende → Ejemplos → Practica → Actividad → Retroalimentación → Resumen.
 */

/** Un ejemplo bilingüe (inglés → español), con pronunciación/nota opcional. */
export interface LessonExample {
  en: string;
  es?: string;
  ipa?: string;
  note?: string;
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
  /** Ejemplos ilustrativos dentro de la sección. */
  examples?: LessonExample[];
  /** Comparación visual de dos conceptos. */
  compare?: LessonCompare;
  /** Detalle que se revela bajo demanda ("Saber más"), para no abrumar. */
  more?: string[];
  /** Consejo o aviso destacado (callout). */
  tip?: string;
}

/** Pregunta de práctica autocorregible. */
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
