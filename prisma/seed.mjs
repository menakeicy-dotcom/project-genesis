// Seed de CONTENIDO DE DEMOSTRACIÓN para el MVP navegable.
// ⚠️ Placeholder: no es un currículo curado ni aprobado (ver regla 10 / ADR-0002).
// Sirve para poder recorrer la experiencia de principio a fin.
//
// Ejecutar:  node prisma/seed.mjs   (con PRISMA_QUERY_ENGINE_LIBRARY apuntando
// al motor si el entorno no permite descargarlo).

import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const categories = [
  {
    slug: "idiomas",
    name: "Idiomas",
    icon: "🌍",
    description: "Aprende a comunicarte en nuevos idiomas.",
    order: 1,
  },
  {
    slug: "cocina",
    name: "Cocina",
    icon: "🍳",
    description: "Domina técnicas y recetas paso a paso.",
    order: 2,
  },
  {
    slug: "musica",
    name: "Música",
    icon: "🎸",
    description: "Toca instrumentos y entiende la teoría.",
    order: 3,
  },
  {
    slug: "programacion",
    name: "Programación",
    icon: "💻",
    description: "Construye software desde los fundamentos.",
    order: 4,
  },
  {
    slug: "arte",
    name: "Arte",
    icon: "🎨",
    description: "Desarrolla tu creatividad visual.",
    order: 5,
  },
  {
    slug: "fotografia",
    name: "Fotografía",
    icon: "📷",
    description: "Captura mejores imágenes.",
    order: 6,
  },
  {
    slug: "negocios",
    name: "Negocios",
    icon: "💼",
    description: "Emprende y gestiona proyectos.",
    order: 7,
  },
  {
    slug: "desarrollo-personal",
    name: "Desarrollo personal",
    icon: "🌟",
    description: "Hábitos, productividad y bienestar.",
    order: 8,
  },
];

// Cada árbol: skills con posición (x,y), prerrequisitos (por slug) y recursos.
const trees = [
  {
    categorySlug: "programacion",
    slug: "javascript-desde-cero",
    title: "JavaScript desde cero",
    description:
      "Los fundamentos de JavaScript, paso a paso, hasta manipular una página web.",
    difficulty: "beginner",
    skills: [
      {
        slug: "intro",
        title: "¿Qué es JavaScript?",
        desc: "Qué es, para qué sirve y cómo ejecutarlo.",
        xp: 10,
        min: 15,
        tier: 0,
        x: 250,
        y: 0,
        root: true,
        pre: [],
        res: [
          {
            t: "ARTICLE",
            title: "Primeros pasos con JavaScript",
            url: "https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps",
            p: "MDN",
          },
        ],
      },
      {
        slug: "variables",
        title: "Variables y tipos",
        desc: "let, const y los tipos de datos básicos.",
        xp: 15,
        min: 25,
        tier: 1,
        x: 90,
        y: 130,
        pre: ["intro"],
        res: [
          {
            t: "ARTICLE",
            title: "Variables",
            url: "https://javascript.info/variables",
            p: "javascript.info",
          },
        ],
      },
      {
        slug: "operadores",
        title: "Operadores",
        desc: "Operaciones aritméticas, lógicas y de comparación.",
        xp: 15,
        min: 20,
        tier: 1,
        x: 410,
        y: 130,
        pre: ["intro"],
        res: [
          {
            t: "ARTICLE",
            title: "Operadores",
            url: "https://javascript.info/operators",
            p: "javascript.info",
          },
        ],
      },
      {
        slug: "condicionales",
        title: "Condicionales",
        desc: "if / else y toma de decisiones.",
        xp: 20,
        min: 25,
        tier: 2,
        x: 90,
        y: 260,
        pre: ["variables"],
        res: [
          {
            t: "VIDEO",
            title: "Condicionales en JS",
            url: "https://www.freecodecamp.org/news/javascript-if-else-statement/",
            p: "freeCodeCamp",
          },
        ],
      },
      {
        slug: "funciones",
        title: "Funciones",
        desc: "Reutiliza código con funciones y parámetros.",
        xp: 25,
        min: 30,
        tier: 2,
        x: 410,
        y: 260,
        pre: ["variables", "operadores"],
        res: [
          {
            t: "ARTICLE",
            title: "Funciones",
            url: "https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions",
            p: "MDN",
          },
        ],
      },
      {
        slug: "bucles",
        title: "Bucles",
        desc: "Repite acciones con for y while.",
        xp: 20,
        min: 25,
        tier: 3,
        x: 90,
        y: 390,
        pre: ["condicionales"],
        res: [
          {
            t: "ARTICLE",
            title: "Bucles",
            url: "https://javascript.info/while-for",
            p: "javascript.info",
          },
        ],
      },
      {
        slug: "arrays",
        title: "Arrays",
        desc: "Colecciones de datos y sus métodos.",
        xp: 25,
        min: 30,
        tier: 3,
        x: 410,
        y: 390,
        pre: ["funciones"],
        res: [
          {
            t: "ARTICLE",
            title: "Arrays",
            url: "https://javascript.info/array",
            p: "javascript.info",
          },
        ],
      },
      {
        slug: "dom",
        title: "Manipular el DOM",
        desc: "Cambia la página web con JavaScript.",
        xp: 35,
        min: 40,
        tier: 4,
        x: 250,
        y: 520,
        pre: ["bucles", "arrays"],
        res: [
          {
            t: "ARTICLE",
            title: "Introducción al DOM",
            url: "https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction",
            p: "MDN",
          },
        ],
      },
    ],
  },
  {
    categorySlug: "musica",
    slug: "guitarra-para-principiantes",
    title: "Guitarra para principiantes",
    description:
      "De sostener la guitarra por primera vez a tocar tu primera canción.",
    difficulty: "beginner",
    skills: [
      {
        slug: "partes",
        title: "Partes de la guitarra",
        desc: "Conoce tu instrumento.",
        xp: 10,
        min: 15,
        tier: 0,
        x: 200,
        y: 0,
        root: true,
        pre: [],
        res: [
          {
            t: "VIDEO",
            title: "Beginner Guitar Basics",
            url: "https://www.justinguitar.com/",
            p: "JustinGuitar",
          },
        ],
      },
      {
        slug: "afinacion",
        title: "Afinación",
        desc: "Afina las seis cuerdas.",
        xp: 15,
        min: 15,
        tier: 1,
        x: 70,
        y: 130,
        pre: ["partes"],
        res: [
          {
            t: "ARTICLE",
            title: "How to tune a guitar",
            url: "https://www.fender.com/articles/how-to/how-to-tune-a-guitar",
            p: "Fender",
          },
        ],
      },
      {
        slug: "postura",
        title: "Postura y púa",
        desc: "Cómo sujetar la guitarra y la púa.",
        xp: 15,
        min: 15,
        tier: 1,
        x: 330,
        y: 130,
        pre: ["partes"],
        res: [
          {
            t: "VIDEO",
            title: "Holding the guitar",
            url: "https://www.justinguitar.com/",
            p: "JustinGuitar",
          },
        ],
      },
      {
        slug: "acordes",
        title: "Acordes básicos",
        desc: "Tus primeros acordes abiertos.",
        xp: 25,
        min: 40,
        tier: 2,
        x: 70,
        y: 260,
        pre: ["afinacion", "postura"],
        res: [
          {
            t: "VIDEO",
            title: "First chords",
            url: "https://www.justinguitar.com/",
            p: "JustinGuitar",
          },
        ],
      },
      {
        slug: "ritmo",
        title: "Ritmo y rasgueo",
        desc: "Patrones de rasgueo básicos.",
        xp: 20,
        min: 30,
        tier: 2,
        x: 330,
        y: 260,
        pre: ["postura"],
        res: [
          {
            t: "VIDEO",
            title: "Strumming basics",
            url: "https://www.andyguitar.co.uk/",
            p: "Andy Guitar",
          },
        ],
      },
      {
        slug: "cambios",
        title: "Cambios de acorde",
        desc: "Cambia entre acordes con fluidez.",
        xp: 25,
        min: 40,
        tier: 3,
        x: 70,
        y: 390,
        pre: ["acordes"],
        res: [
          {
            t: "VIDEO",
            title: "Chord changes",
            url: "https://www.justinguitar.com/",
            p: "JustinGuitar",
          },
        ],
      },
      {
        slug: "primera-cancion",
        title: "Tu primera canción",
        desc: "Junta todo y toca una canción.",
        xp: 40,
        min: 60,
        tier: 4,
        x: 200,
        y: 520,
        pre: ["cambios", "ritmo"],
        res: [
          {
            t: "VIDEO",
            title: "Easy first song",
            url: "https://www.andyguitar.co.uk/",
            p: "Andy Guitar",
          },
        ],
      },
    ],
  },
  {
    categorySlug: "cocina",
    slug: "cocina-basica",
    title: "Cocina básica",
    description: "Técnicas fundamentales para cocinar con confianza.",
    difficulty: "beginner",
    skills: [
      {
        slug: "seguridad",
        title: "Seguridad e higiene",
        desc: "Buenas prácticas en la cocina.",
        xp: 10,
        min: 15,
        tier: 0,
        x: 200,
        y: 0,
        root: true,
        pre: [],
        res: [
          {
            t: "ARTICLE",
            title: "Food safety basics",
            url: "https://www.bbcgoodfood.com/howto/guide/food-safety-basics",
            p: "BBC Good Food",
          },
        ],
      },
      {
        slug: "cuchillos",
        title: "Manejo del cuchillo",
        desc: "Cortes básicos y seguridad.",
        xp: 20,
        min: 30,
        tier: 1,
        x: 70,
        y: 130,
        pre: ["seguridad"],
        res: [
          {
            t: "VIDEO",
            title: "Knife skills",
            url: "https://www.seriouseats.com/knife-skills-how-to-use-a-chefs-knife",
            p: "Serious Eats",
          },
        ],
      },
      {
        slug: "fuego",
        title: "Control del fuego",
        desc: "Temperaturas y métodos de cocción.",
        xp: 20,
        min: 25,
        tier: 1,
        x: 330,
        y: 130,
        pre: ["seguridad"],
        res: [
          {
            t: "ARTICLE",
            title: "Cooking methods",
            url: "https://www.bbcgoodfood.com/howto",
            p: "BBC Good Food",
          },
        ],
      },
      {
        slug: "huevos",
        title: "Cocinar huevos",
        desc: "Fritos, revueltos y pochados.",
        xp: 25,
        min: 30,
        tier: 2,
        x: 70,
        y: 260,
        pre: ["cuchillos", "fuego"],
        res: [
          {
            t: "ARTICLE",
            title: "How to cook eggs",
            url: "https://www.seriouseats.com/how-to-make-scrambled-eggs",
            p: "Serious Eats",
          },
        ],
      },
      {
        slug: "arroz",
        title: "Cocer arroz",
        desc: "Arroz suelto y en su punto.",
        xp: 20,
        min: 25,
        tier: 2,
        x: 330,
        y: 260,
        pre: ["fuego"],
        res: [
          {
            t: "ARTICLE",
            title: "How to cook rice",
            url: "https://www.bbcgoodfood.com/howto/guide/how-cook-rice",
            p: "BBC Good Food",
          },
        ],
      },
      {
        slug: "primer-plato",
        title: "Tu primer plato completo",
        desc: "Combina técnicas en una receta.",
        xp: 40,
        min: 60,
        tier: 3,
        x: 200,
        y: 390,
        pre: ["huevos", "arroz"],
        res: [
          {
            t: "ARTICLE",
            title: "Easy recipes for beginners",
            url: "https://www.bbcgoodfood.com/recipes/collection/easy-recipes",
            p: "BBC Good Food",
          },
        ],
      },
    ],
  },
  {
    categorySlug: "idiomas",
    slug: "ingles-basico-a1",
    title: "Inglés básico (A1)",
    description: "Primeros pasos para comunicarte en inglés.",
    difficulty: "beginner",
    skills: [
      {
        slug: "alfabeto",
        title: "Alfabeto y sonidos",
        desc: "Letras y pronunciación básica.",
        xp: 10,
        min: 20,
        tier: 0,
        x: 200,
        y: 0,
        root: true,
        pre: [],
        res: [
          {
            t: "VIDEO",
            title: "The alphabet",
            url: "https://www.bbc.co.uk/learningenglish/",
            p: "BBC Learning English",
          },
        ],
      },
      {
        slug: "saludos",
        title: "Saludos y presentaciones",
        desc: "Preséntate y saluda.",
        xp: 15,
        min: 20,
        tier: 1,
        x: 70,
        y: 130,
        pre: ["alfabeto"],
        res: [
          {
            t: "ARTICLE",
            title: "Greetings",
            url: "https://learnenglish.britishcouncil.org/",
            p: "British Council",
          },
        ],
      },
      {
        slug: "numeros",
        title: "Números",
        desc: "Cuenta y usa cantidades.",
        xp: 15,
        min: 20,
        tier: 1,
        x: 330,
        y: 130,
        pre: ["alfabeto"],
        res: [
          {
            t: "ARTICLE",
            title: "Numbers",
            url: "https://learnenglish.britishcouncil.org/",
            p: "British Council",
          },
        ],
      },
      {
        slug: "presente-simple",
        title: "Presente simple",
        desc: "El tiempo verbal más usado.",
        xp: 25,
        min: 30,
        tier: 2,
        x: 70,
        y: 260,
        pre: ["saludos"],
        res: [
          {
            t: "ARTICLE",
            title: "Present simple",
            url: "https://learnenglish.britishcouncil.org/grammar",
            p: "British Council",
          },
        ],
      },
      {
        slug: "vocabulario",
        title: "Vocabulario esencial",
        desc: "Palabras del día a día.",
        xp: 20,
        min: 25,
        tier: 2,
        x: 330,
        y: 260,
        pre: ["numeros"],
        res: [
          {
            t: "VIDEO",
            title: "Everyday vocabulary",
            url: "https://www.bbc.co.uk/learningenglish/",
            p: "BBC Learning English",
          },
        ],
      },
      {
        slug: "conversacion",
        title: "Conversación básica",
        desc: "Mantén un diálogo simple.",
        xp: 35,
        min: 40,
        tier: 3,
        x: 200,
        y: 390,
        pre: ["presente-simple", "vocabulario"],
        res: [
          {
            t: "VIDEO",
            title: "Basic conversation",
            url: "https://www.bbc.co.uk/learningenglish/",
            p: "BBC Learning English",
          },
        ],
      },
    ],
  },
];

async function main() {
  console.log("🌱 Seed: limpiando dominio…");
  await db.skillPrerequisite.deleteMany();
  await db.resource.deleteMany();
  await db.userSkillProgress.deleteMany();
  await db.userTreeEnrollment.deleteMany();
  await db.skill.deleteMany();
  await db.tree.deleteMany();
  await db.category.deleteMany();

  const catId = {};
  for (const c of categories) {
    const created = await db.category.create({ data: c });
    catId[c.slug] = created.id;
  }
  console.log(`🌱 ${categories.length} categorías.`);

  for (const t of trees) {
    const tree = await db.tree.create({
      data: {
        categoryId: catId[t.categorySlug],
        slug: t.slug,
        title: t.title,
        description: t.description,
        difficulty: t.difficulty,
        status: "PUBLISHED",
      },
    });

    const skillId = {};
    let order = 0;
    for (const s of t.skills) {
      const created = await db.skill.create({
        data: {
          treeId: tree.id,
          slug: s.slug,
          title: s.title,
          description: s.desc,
          xpReward: s.xp,
          estimatedMinutes: s.min,
          tier: s.tier,
          positionX: s.x,
          positionY: s.y,
          isRoot: !!s.root,
          order: order++,
          resources: {
            create: (s.res ?? []).map((r, i) => ({
              type: r.t,
              title: r.title,
              url: r.url,
              provider: r.p ?? null,
              order: i,
            })),
          },
        },
      });
      skillId[s.slug] = created.id;
    }

    for (const s of t.skills) {
      for (const pre of s.pre) {
        await db.skillPrerequisite.create({
          data: { skillId: skillId[s.slug], prerequisiteId: skillId[pre] },
        });
      }
    }
    console.log(`🌳 Árbol "${t.title}" (${t.skills.length} habilidades).`);
  }

  console.log("✅ Seed completado.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
