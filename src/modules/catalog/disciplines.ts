/**
 * Catálogo de DISCIPLINAS de SkillTree (la visión del ecosistema).
 *
 * Fuente única y declarativa de las grandes áreas de conocimiento que tendrá la
 * plataforma. La pantalla "Explorar" se genera a partir de esta lista: añadir
 * una disciplina nueva es añadir una entrada aquí —sin tocar la página—.
 *
 * `slug` enlaza con una Category real de la base de datos cuando la disciplina
 * está disponible (p. ej. "idiomas"). Mientras una disciplina no esté lista, se
 * muestra con su estado pero no navega. Cuando se construya, basta con cambiar
 * su `status` a "available".
 */

export type DisciplineStatus = "available" | "development" | "soon";

export interface Discipline {
  slug: string;
  icon: string;
  name: string;
  description: string;
  status: DisciplineStatus;
  /** Identidad visual: degradado propio (from → to) y una frase que la define. */
  accent: { from: string; to: string };
  tagline: string;
}

/** Metadatos de presentación de cada estado (etiqueta + tono visual). */
export const STATUS_META: Record<
  DisciplineStatus,
  { label: string; tone: "growth" | "primary" | "neutral" }
> = {
  available: { label: "Disponible", tone: "growth" },
  development: { label: "En desarrollo", tone: "primary" },
  soon: { label: "Próximamente", tone: "neutral" },
};

/**
 * Orden pensado para la cuadrícula. Idiomas va primero por ser la disciplina
 * disponible; el resto forma la hoja de ruta del ecosistema.
 */
export const DISCIPLINES: Discipline[] = [
  {
    slug: "idiomas",
    icon: "🌍",
    name: "Idiomas",
    description:
      "Aprende idiomas como se adquieren de verdad: por competencias que crecen. Inglés de A1 a C2 ya disponible.",
    status: "available",
    accent: { from: "#0ea5e9", to: "#14b8a6" },
    tagline: "Habla con el mundo",
  },
  {
    slug: "programacion",
    icon: "💻",
    name: "Programación",
    description:
      "Del primer «Hello, world» a construir software real: lógica, lenguajes y buenas prácticas.",
    status: "available",
    accent: { from: "#6366f1", to: "#8b5cf6" },
    tagline: "Crea con código",
  },
  {
    slug: "musica",
    icon: "🎵",
    name: "Música",
    description:
      "Oído, ritmo, lectura, armonía e improvisación: aprende a escuchar y a crear con cualquier instrumento o tu voz.",
    status: "available",
    accent: { from: "#a855f7", to: "#ec4899" },
    tagline: "Suena a ti",
  },
  {
    slug: "arte-diseno",
    icon: "🎨",
    name: "Arte y Diseño",
    description:
      "Dibujo, color, composición y diseño digital para crear con intención.",
    status: "soon",
    accent: { from: "#ec4899", to: "#f97316" },
    tagline: "Da forma a tus ideas",
  },
  {
    slug: "cocina",
    icon: "🍳",
    name: "Cocina",
    description:
      "Técnicas, sabores y recetas: de lo básico a platos que impresionan.",
    status: "soon",
    accent: { from: "#f97316", to: "#ef4444" },
    tagline: "Cocina como un chef",
  },
  {
    slug: "negocios",
    icon: "📈",
    name: "Negocios y Emprendimiento",
    description:
      "Modelos de negocio, finanzas y estrategia para lanzar y hacer crecer ideas.",
    status: "soon",
    accent: { from: "#10b981", to: "#059669" },
    tagline: "Convierte ideas en negocio",
  },
  {
    slug: "matematicas",
    icon: "🧮",
    name: "Matemáticas",
    description:
      "De la aritmética al cálculo: entender el porqué, no solo el cómo. Razona, no memorices.",
    status: "available",
    accent: { from: "#8b5cf6", to: "#6366f1" },
    tagline: "Piensa con lógica",
  },
  {
    slug: "ciencia",
    icon: "🧪",
    name: "Ciencia",
    description:
      "Física, química, biología, la Tierra y el cosmos con pensamiento científico y evidencia.",
    status: "available",
    accent: { from: "#06b6d4", to: "#3b82f6" },
    tagline: "Entiende el universo",
  },
  {
    slug: "salud-fitness",
    icon: "🏋️",
    name: "Salud y Fitness",
    description:
      "Entrenamiento, nutrición y hábitos para un cuerpo y una mente fuertes.",
    status: "soon",
    accent: { from: "#f43f5e", to: "#f97316" },
    tagline: "Cuerpo y mente fuertes",
  },
  {
    slug: "fotografia-video",
    icon: "📷",
    name: "Fotografía y Video",
    description:
      "Luz, encuadre y edición para contar historias con imágenes.",
    status: "soon",
    accent: { from: "#f59e0b", to: "#eab308" },
    tagline: "Captura la historia",
  },
];

/** Disciplinas ya disponibles (con contenido publicado y navegable). */
export const AVAILABLE_DISCIPLINES = DISCIPLINES.filter(
  (d) => d.status === "available",
);

/** Total de disciplinas disponibles (para textos tipo "3 de 5"). */
export const AVAILABLE_COUNT = AVAILABLE_DISCIPLINES.length;
