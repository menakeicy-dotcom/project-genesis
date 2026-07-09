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
  },
  {
    slug: "programacion",
    icon: "💻",
    name: "Programación",
    description:
      "Del primer «Hello, world» a construir software real: lógica, lenguajes y buenas prácticas.",
    status: "soon",
  },
  {
    slug: "musica",
    icon: "🎵",
    name: "Música",
    description:
      "Teoría, oído, ritmo e instrumento: toca y comprende la música desde cero.",
    status: "soon",
  },
  {
    slug: "arte-diseno",
    icon: "🎨",
    name: "Arte y Diseño",
    description:
      "Dibujo, color, composición y diseño digital para crear con intención.",
    status: "soon",
  },
  {
    slug: "cocina",
    icon: "🍳",
    name: "Cocina",
    description:
      "Técnicas, sabores y recetas: de lo básico a platos que impresionan.",
    status: "soon",
  },
  {
    slug: "negocios",
    icon: "📈",
    name: "Negocios y Emprendimiento",
    description:
      "Modelos de negocio, finanzas y estrategia para lanzar y hacer crecer ideas.",
    status: "soon",
  },
  {
    slug: "matematicas",
    icon: "🧮",
    name: "Matemáticas",
    description:
      "De la aritmética al cálculo: entender el porqué, no solo el cómo.",
    status: "soon",
  },
  {
    slug: "ciencia",
    icon: "🔬",
    name: "Ciencia",
    description:
      "Física, química y biología con pensamiento científico y curiosidad.",
    status: "soon",
  },
  {
    slug: "salud-fitness",
    icon: "🏋️",
    name: "Salud y Fitness",
    description:
      "Entrenamiento, nutrición y hábitos para un cuerpo y una mente fuertes.",
    status: "soon",
  },
  {
    slug: "fotografia-video",
    icon: "📷",
    name: "Fotografía y Video",
    description:
      "Luz, encuadre y edición para contar historias con imágenes.",
    status: "soon",
  },
];
