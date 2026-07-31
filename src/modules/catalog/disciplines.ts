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
 * árbol y del rol del visitante en `getDisciplineViews()` (única fuente de
 * verdad). Este fichero solo aporta METADATOS de presentación (nombre, lema,
 * descripción, acento) y el vocabulario de estados/insignias.
 */

export interface Discipline {
  slug: string;
  name: string;
  description: string;
  /** Acento verde (from → to). Variaciones sutiles: todo es el mismo bosque. */
  accent: { from: string; to: string };
  tagline: string;
}

/**
 * Estado de una disciplina PARA UN VISITANTE (derivado, no declarado):
 * - `available`: tiene contenido publicado → cualquiera puede empezarla.
 * - `review`: solo borrador, visible únicamente para el fundador (revisión).
 * - `soon`: aún sin contenido visible → hoja de ruta.
 */
export type DisciplineAvailability = "available" | "review" | "soon";

/** Insignia (etiqueta + tono) de cada estado. Única fuente para TODA la app. */
export const AVAILABILITY_BADGE: Record<
  DisciplineAvailability,
  { label: string; tone: "growth" | "primary" | "neutral" }
> = {
  available: { label: "Disponible", tone: "growth" },
  review: { label: "En revisión", tone: "primary" },
  soon: { label: "Próximamente", tone: "neutral" },
};

/**
 * Vista de una disciplina resuelta para el visitante actual. Es lo que consumen
 * Explorar, Panel y Perfil —todos la MISMA— para no recalcular disponibilidad,
 * estados, insignias, contadores ni enlaces en cada pantalla.
 */
export interface DisciplineView {
  discipline: Discipline;
  /** Nº de árboles publicados / en borrador de esta disciplina. */
  published: number;
  draft: number;
  /** ¿El visitante puede abrirla? */
  viewable: boolean;
  availability: DisciplineAvailability;
  /** Ruta de navegación si es visible; null si no. */
  href: string | null;
}

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
    accent: { from: "#34a06a", to: "#1f7d4a" },
    tagline: "Habla con el mundo",
  },
  {
    slug: "programacion",
    name: "Programación",
    description:
      "Del primer «Hello, world» a construir software real: lógica, lenguajes y buenas prácticas.",
    accent: { from: "#3fa96f", to: "#24864f" },
    tagline: "Crea con código",
  },
  {
    slug: "musica",
    name: "Música",
    description:
      "Oído, ritmo, lectura, armonía e improvisación: aprende a escuchar y a crear con cualquier instrumento o tu voz.",
    accent: { from: "#58b57e", to: "#2f8f57" },
    tagline: "Suena a ti",
  },
  {
    slug: "matematicas",
    name: "Matemáticas",
    description:
      "De la aritmética al cálculo: entender el porqué, no solo el cómo. Razona, no memorices.",
    accent: { from: "#2f9d63", to: "#1c7a45" },
    tagline: "Piensa con lógica",
  },
  {
    slug: "ciencia",
    name: "Ciencia",
    description:
      "Física, química, biología, la Tierra y el cosmos con pensamiento científico y evidencia.",
    accent: { from: "#46ad76", to: "#2a8f58" },
    tagline: "Entiende el universo",
  },
  {
    slug: "arte-diseno",
    name: "Arte y Diseño",
    description:
      "Dibujo, color, composición y diseño digital para crear con intención.",
    accent: { from: "#63b884", to: "#3c9a64" },
    tagline: "Da forma a tus ideas",
  },
  {
    slug: "cocina",
    name: "Cocina",
    description:
      "Técnicas, sabores y recetas: de lo básico a platos que impresionan.",
    accent: { from: "#3aa668", to: "#21824a" },
    tagline: "Cocina como un chef",
  },
  {
    slug: "negocios",
    name: "Negocios y Emprendimiento",
    description:
      "Modelos de negocio, finanzas y estrategia para lanzar y hacer crecer ideas.",
    accent: { from: "#4fb079", to: "#2d8c55" },
    tagline: "Convierte ideas en negocio",
  },
  {
    slug: "salud-fitness",
    name: "Salud y Fitness",
    description:
      "Entrenamiento, nutrición y hábitos para un cuerpo y una mente fuertes.",
    accent: { from: "#5cb782", to: "#369560" },
    tagline: "Cuerpo y mente fuertes",
  },
  {
    slug: "fotografia-video",
    name: "Fotografía y Video",
    description:
      "Luz, encuadre y edición para contar historias con imágenes.",
    accent: { from: "#42a870", to: "#268a52" },
    tagline: "Captura la historia",
  },
];
