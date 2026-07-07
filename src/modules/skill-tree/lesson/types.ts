/**
 * Modelo de CONTENIDO EDUCATIVO real de una habilidad (una "lección").
 *
 * Es distinto de la ficha pedagógica (objetivo, competencia, criterios…), que
 * describe la habilidad. La lección ENSEÑA: explica, da ejemplos, propone
 * mini-lecciones, preguntas de práctica autocorregibles y una actividad.
 *
 * Se guarda dentro de `Skill.content.lesson` (JSON) — no requiere cambios de
 * esquema— y la renderiza <SkillLesson/>. Es el mismo tipo que consumen el
 * seed (al sembrar) y la interfaz (al mostrar), para no divergir.
 */

/** Un ejemplo bilingüe (inglés → español), con pronunciación/nota opcional. */
export interface LessonExample {
  en: string;
  es?: string;
  ipa?: string;
  note?: string;
}

/** Una sección de mini-lección: explicación + ejemplos + consejo. */
export interface LessonSection {
  h: string;
  /** Párrafos de explicación (en español, claros y breves). */
  body?: string[];
  /** Puntos clave. */
  bullets?: string[];
  /** Ejemplos ilustrativos. */
  examples?: LessonExample[];
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
  /** Gancho: por qué esto importa / qué vas a poder hacer. */
  intro?: string;
  sections: LessonSection[];
  practice?: PracticeItem[];
  activity?: LessonActivity;
}
