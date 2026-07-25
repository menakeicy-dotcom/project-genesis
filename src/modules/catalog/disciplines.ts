/**
 * Catálogo de DISCIPLINAS de SkillTree (la visión del ecosistema).
 *
 * Fuente única y declarativa de las grandes áreas de conocimiento. La pantalla
 * "Explorar" se genera a partir de esta lista.
 *
 * IDENTIDAD: sin emojis de colores. El icono de cada disciplina es un contorno
 * (ver `DisciplineIcon`, resuelto por `slug`) y el acento es SIEMPRE un verde
 * —variaciones muy sutiles— para que todo pertenezca al mismo árbol.
 *
 * DISPONIBILIDAD: no se declara aquí. Se DERIVA del estado de publicación del
 * árbol en la base de datos y del rol del visitante (el fundador ve borradores
 * "En revisión"). `status` solo es la etiqueta pública por defecto de una
 * disciplina que el visitante aún no puede ver (hoja de ruta).
 */

export type DisciplineStatus = "available" | "development" | "soon";

export interface Discipline {
  slug: string;
  name: string;
  description: string;
  status: DisciplineStatus;
  /** Acento verde (from → to). Variaciones sutiles: todo es el mismo bosque. */
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
 * Orden pensado para la cuadrícula. Las cinco con contenido van primero; el
 * resto forma la hoja de ruta del ecosistema. Todos los acentos son verdes.
 */
export const DISCIPLINES: Discipline[] = [
  {
    slug: "idiomas",
    name: "Idiomas",
    description:
      "Aprende idiomas como se adquieren de verdad: por competencias que crecen. Inglés de A1 a C2.",
    status: "soon",
    accent: { from: "#34a06a", to: "#1f7d4a" },
    tagline: "Habla con el mundo",
  },
  {
    slug: "programacion",
    name: "Programación",
    description:
      "Del primer «Hello, world» a construir software real: lógica, lenguajes y buenas prácticas.",
    status: "soon",
    accent: { from: "#3fa96f", to: "#24864f" },
    tagline: "Crea con código",
  },
  {
    slug: "musica",
    name: "Música",
    description:
      "Oído, ritmo, lectura, armonía e improvisación: aprende a escuchar y a crear con cualquier instrumento o tu voz.",
    status: "soon",
    accent: { from: "#58b57e", to: "#2f8f57" },
    tagline: "Suena a ti",
  },
  {
    slug: "matematicas",
    name: "Matemáticas",
    description:
      "De la aritmética al cálculo: entender el porqué, no solo el cómo. Razona, no memorices.",
    status: "soon",
    accent: { from: "#2f9d63", to: "#1c7a45" },
    tagline: "Piensa con lógica",
  },
  {
    slug: "ciencia",
    name: "Ciencia",
    description:
      "Física, química, biología, la Tierra y el cosmos con pensamiento científico y evidencia.",
    status: "soon",
    accent: { from: "#46ad76", to: "#2a8f58" },
    tagline: "Entiende el universo",
  },
  {
    slug: "arte-diseno",
    name: "Arte y Diseño",
    description:
      "Dibujo, color, composición y diseño digital para crear con intención.",
    status: "soon",
    accent: { from: "#63b884", to: "#3c9a64" },
    tagline: "Da forma a tus ideas",
  },
  {
    slug: "cocina",
    name: "Cocina",
    description:
      "Técnicas, sabores y recetas: de lo básico a platos que impresionan.",
    status: "soon",
    accent: { from: "#3aa668", to: "#21824a" },
    tagline: "Cocina como un chef",
  },
  {
    slug: "negocios",
    name: "Negocios y Emprendimiento",
    description:
      "Modelos de negocio, finanzas y estrategia para lanzar y hacer crecer ideas.",
    status: "soon",
    accent: { from: "#4fb079", to: "#2d8c55" },
    tagline: "Convierte ideas en negocio",
  },
  {
    slug: "salud-fitness",
    name: "Salud y Fitness",
    description:
      "Entrenamiento, nutrición y hábitos para un cuerpo y una mente fuertes.",
    status: "soon",
    accent: { from: "#5cb782", to: "#369560" },
    tagline: "Cuerpo y mente fuertes",
  },
  {
    slug: "fotografia-video",
    name: "Fotografía y Video",
    description:
      "Luz, encuadre y edición para contar historias con imágenes.",
    status: "soon",
    accent: { from: "#42a870", to: "#268a52" },
    tagline: "Captura la historia",
  },
];
