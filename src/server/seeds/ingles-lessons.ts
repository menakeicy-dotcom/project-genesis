/**
 * CONTENIDO EDUCATIVO REAL del árbol de Inglés (lecciones que enseñan).
 *
 * Cada entrada es una `Lesson` (ver `@/modules/skill-tree/lesson`) que se
 * fusiona en `Skill.content.lesson` al sembrar. Separado de `ingles.ts` (que
 * define la estructura del árbol y las fichas) para mantener el archivo del
 * árbol legible y poder crecer el contenido por niveles sin fricción.
 *
 * Base pedagógica: descriptores CEFR (can-do), Cambridge English, British
 * Council LearnEnglish, Oxford 3000 (frecuencia) y práctica ELT estándar.
 * Cobertura de esta iteración: todo el tronco A1 (Pre-A1 + A1). Los niveles
 * A2→C2 conservan su ficha y se irán convirtiendo en lección progresivamente.
 */

import type { Lesson } from "@/modules/skill-tree/lesson";

export const EN_LESSONS: Record<string, Lesson> = {
  // ─────────────────────────── Pre-A1 · Fundación ───────────────────────────
  "est-como-aprender": {
    intro:
      "Antes de aprender inglés, aprende a aprenderlo. Diez minutos aquí te ahorran meses de esfuerzo mal dirigido. Un idioma no se 'estudia' como historia: se adquiere con exposición constante y uso.",
    sections: [
      {
        h: "Cómo se adquiere realmente una lengua",
        body: [
          "Adquirimos una lengua sobre todo al entender mensajes: escuchar y leer cosas que comprendemos con un poco de esfuerzo (lo que Krashen llama input comprensible). La gramática memorizada sin exposición casi no produce habla real.",
          "Por eso este árbol empieza por el oído y el vocabulario, no por reglas. Las reglas llegan cuando ya has oído el patrón muchas veces y solo necesitas ordenarlo.",
        ],
        bullets: [
          "Poco y a diario supera a mucho de vez en cuando: 20–30 min diarios baten a 3 horas el domingo.",
          "La constancia importa más que el método perfecto.",
          "Equivocarte es parte del proceso, no un fallo: es la señal de que estás usando la lengua.",
        ],
      },
      {
        h: "El filtro afectivo: la ansiedad bloquea",
        body: [
          "Cuando estudias con miedo a equivocarte o con vergüenza, tu cerebro aprende peor (el 'filtro afectivo' sube y bloquea la entrada). Bajarlo —jugar, tolerar el error, buscar contenido que te guste— acelera todo.",
        ],
        tip: "Elige contenido en inglés sobre temas que ya te apasionan. La motivación intrínseca es el mejor 'truco' de estudio que existe.",
      },
      {
        h: "Define tu meta y tu rutina",
        body: [
          "Una meta vaga ('quiero aprender inglés') no guía. Una meta concreta sí: nivel objetivo del marco europeo (A1, A2, B1…), fecha y para qué (viajar, trabajo, series).",
        ],
        examples: [
          {
            en: "Goal: reach A2 by December to travel.",
            es: "Meta: llegar a A2 en diciembre para viajar.",
            note: "Concreta, medible y con fecha.",
          },
        ],
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Qué produce más aprendizaje real de una lengua?",
        options: [
          "Memorizar listas de reglas gramaticales sin oír el idioma",
          "Entender mensajes (escuchar/leer) de forma constante",
          "Traducir palabra por palabra en tu cabeza",
        ],
        answer: 1,
        why: "El input comprensible y constante es el motor de la adquisición; la gramática ordena lo que ya has oído.",
      },
      {
        kind: "choice",
        q: "¿Cuál es la mejor rutina para un principiante?",
        options: [
          "3 horas seguidas cada domingo",
          "25 minutos todos los días",
          "Estudiar solo cuando 'te apetece'",
        ],
        answer: 1,
        why: "La práctica distribuida (poco y a diario) consolida mejor la memoria que las sesiones maratón.",
      },
      {
        kind: "choice",
        q: "Una buena meta de aprendizaje es…",
        options: [
          "'Quiero hablar inglés perfecto'",
          "'Quiero aprender algún día'",
          "'Llegar a A2 en 4 meses para viajar'",
        ],
        answer: 2,
        why: "Nivel + fecha + propósito la hacen concreta y medible.",
      },
    ],
    activity: {
      title: "Tu plan en 3 líneas",
      steps: [
        "Escribe tu meta CEFR (por ejemplo, A2) y una fecha realista.",
        "Decide cuántos minutos al día vas a dedicar (empieza pequeño: 20–25).",
        "Elige 1 fuente de input que te guste (una serie, un canal, un podcast) para exponerte desde ya.",
      ],
    },
  },

  "fon-percepcion": {
    intro:
      "No puedes pronunciar —ni entender— un sonido que tu oído no distingue. El español tiene 5 vocales; el inglés, más de diez. Este es el paso que casi todos saltan… y por eso 'fosilizan' su acento. Aquí entrenas el oído primero.",
    sections: [
      {
        h: "Pares mínimos: dos palabras, un solo sonido de diferencia",
        body: [
          "Un par mínimo son dos palabras que solo se distinguen por un sonido. Entrenar a oír la diferencia (percepción) reprograma tu oído antes de que intentes producir el sonido.",
        ],
        examples: [
          {
            en: "ship /ʃɪp/  —  sheep /ʃiːp/",
            es: "barco — oveja",
            note: "/ɪ/ es corta y relajada; /iː/ es larga y tensa. No son la 'i' española.",
          },
          {
            en: "bat /bæt/  —  vat /væt/",
            es: "murciélago — cuba",
            note: "En inglés /b/ y /v/ son sonidos distintos (labios juntos vs. labio y dientes).",
          },
          {
            en: "thin /θɪn/  —  tin /tɪn/",
            es: "delgado — lata",
            note: "'th' /θ/ (lengua entre los dientes) no existe en español.",
          },
        ],
      },
      {
        h: "Las tres trampas para hispanohablantes",
        bullets: [
          "Vocales largas vs. cortas: /iː/–/ɪ/, /uː/–/ʊ/. El español no las distingue.",
          "/b/ vs. /v/: en español suenan casi igual; en inglés, no.",
          "'th' (/θ/ y /ð/): think, this. Se hace con la lengua entre los dientes.",
        ],
        tip: "Escucha con audífonos y con los ojos cerrados. Sin ver los subtítulos, tu oído trabaja más.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Cuál es la diferencia entre 'ship' y 'sheep'?",
        options: [
          "El sonido de la consonante inicial",
          "La vocal: corta /ɪ/ frente a larga /iː/",
          "No hay diferencia real",
        ],
        answer: 1,
        why: "ship /ʃɪp/ lleva vocal corta; sheep /ʃiːp/ lleva vocal larga y tensa.",
      },
      {
        kind: "choice",
        q: "El sonido 'th' de 'think' se produce…",
        options: [
          "Con los labios juntos, como una 'p'",
          "Con la lengua entre los dientes",
          "Igual que la 's' española",
        ],
        answer: 1,
        why: "/θ/ es una fricativa dental: la punta de la lengua asoma entre los dientes.",
      },
      {
        kind: "choice",
        q: "¿Por qué entrenar la percepción ANTES de la pronunciación?",
        options: [
          "Porque es más divertido",
          "Porque no puedes producir bien un sonido que no distingues al oírlo",
          "No hace falta, se aprende produciendo",
        ],
        answer: 1,
        why: "La percepción guía la producción; entrenar el oído (HVPT) previene la fosilización del acento.",
      },
    ],
    activity: {
      title: "Tres pares mínimos al día",
      steps: [
        "Abre el IPA interactivo de la U. de Iowa (en Recursos) y escucha ship/sheep, bat/vat, thin/tin.",
        "Cierra los ojos y pide a alguien (o a un audio aleatorio) que diga una de las dos; adivina cuál es.",
        "Apunta los pares que aún confundes para repasarlos mañana.",
      ],
    },
  },

  "lec-alfabeto": {
    intro:
      "El inglés no se lee 'como se escribe'. La misma letra suena distinto en palabras distintas (through, tough, though). Aquí aprendes las reglas básicas letra-sonido (phonics) para poder leer palabras nuevas en voz alta con una pronunciación razonable.",
    sections: [
      {
        h: "Vocales: no son las españolas",
        body: [
          "Cada vocal inglesa tiene un sonido 'corto' y uno 'largo' (que suele coincidir con el nombre de la letra). La 'e' final muda suele alargar la vocal anterior.",
        ],
        examples: [
          { en: "cat /kæt/  vs.  cake /keɪk/", es: "gato vs. pastel", note: "La 'e' final muda vuelve larga la 'a'." },
          { en: "sit /sɪt/  vs.  site /saɪt/", es: "sentarse vs. sitio", note: "Misma regla con la 'i'." },
          { en: "not /nɒt/  vs.  note /nəʊt/", es: "no vs. nota", note: "Y con la 'o'." },
        ],
      },
      {
        h: "Combinaciones y letras mudas",
        bullets: [
          "'sh' = /ʃ/ (shoe), 'ch' = /tʃ/ (chair), 'th' = /θ/ o /ð/ (think, this).",
          "Letras mudas: know (la 'k'), hour (la 'h'), write (la 'w').",
          "'ee' e 'ea' suelen ser /iː/: see, sea, tree, read.",
        ],
        tip: "Cuando dudes, escucha la palabra en el diccionario (el altavoz de Cambridge/Oxford) y repítela. Tu meta no es adivinar la regla, es asociar forma escrita ↔ sonido.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "La 'e' muda al final de 'cake' hace que…",
        options: [
          "La palabra termine en sonido 'e'",
          "La vocal anterior se pronuncie larga (/eɪ/)",
          "No cambie nada",
        ],
        answer: 1,
        why: "La 'e' final es muda pero alarga la vocal: cat /kæt/ → cake /keɪk/.",
      },
      {
        kind: "choice",
        q: "¿En cuál hay una letra MUDA?",
        options: ["cat", "know", "sit"],
        answer: 1,
        why: "En 'know' la 'k' inicial no se pronuncia: /nəʊ/.",
      },
      {
        kind: "fill",
        q: "'sea' y 'see' comparten el sonido vocálico largo. Escríbelo en símbolo IPA (pista: la 'i' larga).",
        accept: ["/iː/", "iː", "i:", "/i:/"],
        hint: "Es la vocal de 'sheep'.",
        why: "Ambas se pronuncian con /iː/, la vocal larga.",
      },
    ],
    activity: {
      title: "Leer y comprobar",
      steps: [
        "Elige 10 palabras nuevas cortas.",
        "Léelas en voz alta intentando aplicar las reglas.",
        "Comprueba cada una con el audio del diccionario y corrige las que fallaste.",
      ],
    },
  },

  "voc-supervivencia": {
    intro:
      "Con 100 palabras y fórmulas puedes sobrevivir a tu primera interacción real en inglés: saludar, pedir ayuda, decir que no entiendes. Esto te da victorias inmediatas y ancla los sonidos a significados desde el primer día.",
    sections: [
      {
        h: "Saludos y cortesía",
        examples: [
          { en: "Hello. / Hi.", es: "Hola.", ipa: "/həˈloʊ/ /haɪ/" },
          { en: "Good morning / afternoon / evening.", es: "Buenos días / buenas tardes / buenas noches." },
          { en: "Please. / Thank you. / You're welcome.", es: "Por favor. / Gracias. / De nada." },
          { en: "Sorry. / Excuse me.", es: "Perdón (disculpa). / Con permiso (para pedir paso o atención)." },
        ],
      },
      {
        h: "Fórmulas de emergencia (¡las más útiles!)",
        body: [
          "Estas frases mantienen viva la conversación cuando no entiendes. Memorízalas como bloques, sin analizarlas.",
        ],
        examples: [
          { en: "I don't understand.", es: "No entiendo.", ipa: "/aɪ doʊnt ˌʌndərˈstænd/" },
          { en: "Can you repeat that, please?", es: "¿Puedes repetir eso, por favor?" },
          { en: "How do you say ___ in English?", es: "¿Cómo se dice ___ en inglés?" },
          { en: "Can you speak more slowly, please?", es: "¿Puedes hablar más despacio, por favor?" },
        ],
        tip: "Estas cuatro frases son tu red de seguridad. Con ellas puedes tener una conversación real aunque tu inglés sea mínimo.",
      },
      {
        h: "Presentarte",
        examples: [
          { en: "My name is Ana. / I'm Ana.", es: "Me llamo Ana. / Soy Ana." },
          { en: "Nice to meet you.", es: "Encantado/a de conocerte." },
          { en: "I'm from Colombia.", es: "Soy de Colombia." },
        ],
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "No entiendes lo que te dicen. ¿Qué frase usas?",
        options: ["You're welcome.", "I don't understand.", "Nice to meet you."],
        answer: 1,
        why: "'I don't understand' = No entiendo. Es tu red de seguridad número uno.",
      },
      {
        kind: "choice",
        q: "Alguien te da las gracias ('Thank you'). Respondes:",
        options: ["Please.", "Sorry.", "You're welcome."],
        answer: 2,
        why: "'You're welcome' = De nada, la respuesta estándar a 'Thank you'.",
      },
      {
        kind: "fill",
        q: "Traduce al inglés: «Me llamo ___» (usa tu nombre o 'Ana').",
        accept: [
          "my name is ana",
          "i'm ana",
          "im ana",
          "i am ana",
          "my name is",
          "i'm",
        ],
        hint: "Dos formas válidas: 'My name is…' o 'I'm…'.",
        why: "Ambas son correctas: 'My name is Ana' o 'I'm Ana'.",
      },
      {
        kind: "fill",
        q: "Quieres que la persona hable más despacio. Completa: «Can you speak more ___, please?»",
        accept: ["slowly"],
        hint: "Adverbio de 'slow'.",
        why: "'slowly' (despacio). El adverbio se forma con -ly.",
      },
    ],
    activity: {
      title: "Tu presentación de 5 frases",
      steps: [
        "Escribe 5 frases para presentarte: saludo, nombre, de dónde eres, una frase de cortesía y una de emergencia.",
        "Grábate diciéndolas en voz alta.",
        "Escúchate y repite hasta que salgan sin leer.",
      ],
    },
  },

  // ─────────────────────────────── A1 · núcleo ───────────────────────────────
  "est-srs": {
    intro:
      "Aprendemos rápido y olvidamos rápido: es la 'curva del olvido'. La repetición espaciada (SRS) te hace repasar cada palabra justo antes de olvidarla, con el mínimo esfuerzo. Es el motor de memoria de todo tu inglés.",
    sections: [
      {
        h: "Por qué funciona",
        body: [
          "Si repasas una palabra hoy, mañana, en 3 días, en una semana… cada repaso exitoso alarga el intervalo siguiente. Recordar con esfuerzo (no releer) es lo que fija la memoria: es el 'efecto de testing'.",
        ],
        bullets: [
          "Tarjeta = una cara con la pregunta (inglés/audio/imagen) y otra con la respuesta.",
          "Programas como Anki calculan solos cuándo toca repasar cada tarjeta.",
          "Intenta recordar ANTES de girar la tarjeta: el esfuerzo es el que enseña.",
        ],
      },
      {
        h: "Cómo hacer buenas tarjetas",
        bullets: [
          "Incluye AUDIO siempre (una palabra sin sonido es media palabra).",
          "Aprende la palabra en una frase corta con contexto, no aislada.",
          "Una idea por tarjeta. Si es ambigua, se vuelve confusa.",
          "No dejes acumular repasos: 10–15 min diarios bastan.",
        ],
        tip: "Empieza por vocabulario de alta frecuencia (Oxford 3000): son las palabras que cubren la mayoría de lo que oirás y leerás.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Qué es lo que más fija una palabra en la memoria?",
        options: [
          "Releer la respuesta muchas veces",
          "Intentar recordarla con esfuerzo antes de ver la respuesta",
          "Escribirla una vez y pasar página",
        ],
        answer: 1,
        why: "El 'efecto de testing': el recuerdo activo con esfuerzo consolida mucho más que la relectura pasiva.",
      },
      {
        kind: "choice",
        q: "Una buena tarjeta de vocabulario debería incluir…",
        options: [
          "Solo la palabra en inglés y su traducción",
          "Audio y una frase de contexto",
          "La definición completa del diccionario",
        ],
        answer: 1,
        why: "Audio + contexto conectan sonido, forma y significado; la traducción sola es frágil.",
      },
      {
        kind: "choice",
        q: "¿Por qué empezar por vocabulario de alta frecuencia?",
        options: [
          "Porque son las palabras más difíciles",
          "Porque cubren la mayor parte de lo que se oye y se lee",
          "Porque son las más largas",
        ],
        answer: 1,
        why: "Unas 2.000–3.000 familias de palabras cubren la mayoría del lenguaje cotidiano; priorizarlas rinde más.",
      },
    ],
    activity: {
      title: "Monta tu primer mazo",
      steps: [
        "Instala Anki (o similar) e importa o crea un mazo de las palabras de 'supervivencia'.",
        "Añade audio a cada tarjeta.",
        "Repasa 10 minutos hoy y comprométete a repetir mañana. Mantén la racha 2 semanas.",
      ],
    },
  },

  "fon-produccion": {
    intro:
      "Ya distingues los sonidos con el oído; ahora los produces. La meta de A1 no es 'acento perfecto', sino ser INTELIGIBLE: que te entiendan sin esfuerzo. Unos pocos sonidos bien hechos logran eso.",
    sections: [
      {
        h: "Los sonidos que más te delatan (y arreglan)",
        examples: [
          { en: "think, three, bath", es: "'th' sordo /θ/: lengua entre los dientes, sale aire." },
          { en: "this, mother, they", es: "'th' sonoro /ð/: igual, pero con voz." },
          { en: "very, van, victory", es: "/v/: labio inferior toca los dientes (no es 'b')." },
          { en: "sheep vs. ship", es: "vocal larga /iː/ vs. corta /ɪ/." },
        ],
      },
      {
        h: "La consonante final SÍ se pronuncia",
        body: [
          "En español casi no terminamos palabras en consonante fuerte. En inglés, la consonante final cambia el significado y hay que pronunciarla.",
        ],
        examples: [
          { en: "car vs. card", es: "coche vs. tarjeta", note: "La /d/ final no se come." },
          { en: "wor**k**, nee**d**, ba**g**", es: "Termina la palabra con la consonante clara." },
        ],
        tip: "Graba tu voz y compárala con el diccionario. Oírte a ti mismo es la forma más rápida de corregir.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "La meta de pronunciación en A1 es…",
        options: [
          "Sonar exactamente como un nativo",
          "Ser inteligible: que te entiendan sin esfuerzo",
          "Eliminar todo acento",
        ],
        answer: 1,
        why: "La inteligibilidad es el objetivo realista y prioritario; el acento se pule después.",
      },
      {
        kind: "choice",
        q: "Para el sonido /v/ de 'very'…",
        options: [
          "Juntas los dos labios (como 'b')",
          "El labio inferior toca los dientes de arriba",
          "Sacas la lengua entre los dientes",
        ],
        answer: 1,
        why: "/v/ es labiodental: labio inferior + dientes superiores, con voz. No es /b/.",
      },
      {
        kind: "choice",
        q: "¿Qué diferencia 'car' de 'card'?",
        options: [
          "Nada, suenan igual",
          "La consonante final /d/, que sí se pronuncia",
          "El acento",
        ],
        answer: 1,
        why: "La consonante final distingue significados en inglés; no se omite.",
      },
    ],
    activity: {
      title: "Sombra y graba (shadowing)",
      steps: [
        "Elige una frase corta con 'th' o /v/ (p. ej. 'I think this is very good').",
        "Escúchala y repítela imitando el sonido, no la ortografía.",
        "Grábate, compara con el original y repite 3 veces.",
      ],
    },
  },

  "voc-nucleo-1": {
    intro:
      "Aquí construyes tus primeras 500–800 palabras: las que aparecen todo el tiempo. Con este núcleo entiendes y produces frases sobre ti, tu día y tu entorno. Organízalas por temas para retenerlas mejor.",
    sections: [
      {
        h: "Bloques temáticos de alta frecuencia",
        bullets: [
          "Personas y familia: mother, father, friend, people, man, woman, child.",
          "Números, días, meses: one…ten, Monday…Sunday, January…December.",
          "Tiempo y rutina: day, week, morning, night, now, today, tomorrow.",
          "Verbos esenciales: be, have, do, go, want, like, need, make, work, eat.",
          "Adjetivos base: good, bad, big, small, new, old, happy, hot, cold.",
        ],
      },
      {
        h: "Palabras gramaticales (function words)",
        body: [
          "Las palabras más frecuentes no son 'sustantivos bonitos', sino conectores y artículos que sostienen la frase. Domínalas pronto.",
        ],
        examples: [
          { en: "the, a, an", es: "artículos: 'the' (el/la determinado), 'a/an' (un/una)." },
          { en: "and, but, or, because", es: "conectores: y, pero, o, porque." },
          { en: "in, on, at, to, from, with", es: "preposiciones frecuentes." },
        ],
        tip: "'a' se usa antes de sonido consonante (a book) y 'an' antes de sonido vocal (an apple). Es por el SONIDO, no la letra: an hour, a university.",
      },
    ],
    practice: [
      {
        kind: "fill",
        q: "Completa con 'a' o 'an': «I have ___ apple.»",
        accept: ["an"],
        hint: "¿'apple' empieza con sonido vocal o consonante?",
        why: "'an' antes de sonido vocal: an apple.",
      },
      {
        kind: "fill",
        q: "Completa con 'a' o 'an': «She is ___ teacher.»",
        accept: ["a"],
        hint: "'teacher' empieza con sonido /t/.",
        why: "'a' antes de sonido consonante: a teacher.",
      },
      {
        kind: "choice",
        q: "¿Cuál es un conector (function word)?",
        options: ["because", "apple", "happy"],
        answer: 0,
        why: "'because' (porque) une ideas; 'apple' y 'happy' son de contenido.",
      },
      {
        kind: "choice",
        q: "¿Por qué priorizar palabras de alta frecuencia?",
        options: [
          "Porque son las más largas y difíciles",
          "Porque aparecen constantemente y te dan la mayor comprensión por palabra aprendida",
          "Porque suenan mejor",
        ],
        answer: 1,
        why: "Aprender primero lo frecuente maximiza cuánto entiendes por cada palabra estudiada.",
      },
    ],
    activity: {
      title: "Mapa temático de 30 palabras",
      steps: [
        "Elige 3 temas (p. ej. familia, comida, rutina).",
        "Escribe 10 palabras por tema con su audio en tu SRS.",
        "Escribe una frase corta usando 3 palabras de cada tema.",
      ],
    },
  },

  "gra-oracion": {
    intro:
      "El inglés tiene un orden fijo: Sujeto + Verbo + Objeto (SVO). A diferencia del español, casi nunca se omite el sujeto. Dominar este esqueleto te permite construir miles de frases correctas.",
    sections: [
      {
        h: "Sujeto + Verbo + Objeto",
        examples: [
          { en: "I  drink  coffee.", es: "Yo bebo café.", note: "Sujeto (I) + verbo (drink) + objeto (coffee)." },
          { en: "She  reads  books.", es: "Ella lee libros." },
          { en: "We  study  English.", es: "Nosotros estudiamos inglés." },
        ],
      },
      {
        h: "El sujeto NO se omite",
        body: [
          "En español decimos 'Está lloviendo' sin sujeto. En inglés hace falta un sujeto siempre; a veces se usa 'it' vacío.",
        ],
        examples: [
          { en: "It is raining.", es: "Está lloviendo.", note: "'It' es un sujeto obligatorio aunque no signifique nada." },
          { en: "It is cold today.", es: "Hace frío hoy." },
        ],
        tip: "Regla de oro del principiante: toda oración en inglés necesita un sujeto y un verbo. Si falta uno, la frase está incompleta.",
      },
      {
        h: "El verbo 'to be' (ser/estar)",
        examples: [
          { en: "I am a student.", es: "Soy estudiante.", note: "am con 'I'." },
          { en: "You are happy.", es: "Estás feliz / Eres feliz.", note: "are con you/we/they." },
          { en: "He is here.", es: "Él está aquí.", note: "is con he/she/it." },
        ],
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Cuál tiene el orden correcto en inglés?",
        options: ["Coffee I drink.", "I drink coffee.", "Drink I coffee."],
        answer: 1,
        why: "Sujeto (I) + Verbo (drink) + Objeto (coffee).",
      },
      {
        kind: "fill",
        q: "Completa con la forma de 'to be': «She ___ a doctor.»",
        accept: ["is"],
        hint: "he/she/it → ?",
        why: "Con he/she/it se usa 'is': She is a doctor.",
      },
      {
        kind: "fill",
        q: "Traduce usando el sujeto vacío 'it': «Está lloviendo.»",
        accept: ["it is raining", "it's raining", "its raining"],
        hint: "Necesitas un sujeto: 'it'.",
        why: "El inglés exige sujeto: 'It is raining'.",
      },
      {
        kind: "choice",
        q: "¿Qué le falta a la frase «Is a student.»?",
        options: ["Un objeto", "El sujeto (p. ej. 'She')", "Nada, está bien"],
        answer: 1,
        why: "Falta el sujeto: 'She is a student'. En inglés el sujeto es obligatorio.",
      },
    ],
    activity: {
      title: "Diez frases SVO sobre ti",
      steps: [
        "Escribe 10 frases sobre tu vida con la estructura Sujeto + Verbo + Objeto.",
        "Subraya el sujeto y el verbo de cada una.",
        "Revisa que ninguna se quede sin sujeto.",
      ],
    },
  },

  "gra-preguntas": {
    intro:
      "Preguntar es la mitad de una conversación. En inglés las preguntas no se hacen solo con la entonación: se reordena la frase y muchas veces aparece el auxiliar 'do/does'. Aquí aprendes el mecanismo.",
    sections: [
      {
        h: "Preguntas de sí/no con 'do' y 'does'",
        body: [
          "Con la mayoría de los verbos, la pregunta empieza por 'Do' (I/you/we/they) o 'Does' (he/she/it). El verbo principal vuelve a su forma base.",
        ],
        examples: [
          { en: "Do you like coffee?", es: "¿Te gusta el café?" },
          { en: "Does she work here?", es: "¿Ella trabaja aquí?", note: "Con 'does', el verbo pierde la -s: work, no works." },
          { en: "Are you ready?", es: "¿Estás listo?", note: "Con 'to be' NO se usa 'do': se invierte el verbo." },
        ],
      },
      {
        h: "Preguntas con Wh- (información)",
        bullets: [
          "What = qué · Where = dónde · When = cuándo · Who = quién · Why = por qué · How = cómo.",
        ],
        examples: [
          { en: "Where do you live?", es: "¿Dónde vives?" },
          { en: "What does he want?", es: "¿Qué quiere él?" },
          { en: "How are you?", es: "¿Cómo estás?", note: "Con 'to be', sin 'do'." },
        ],
        tip: "Orden de la pregunta Wh-: palabra Wh- + auxiliar (do/does/are) + sujeto + verbo. Ej.: Where (Wh) + do (aux) + you (sujeto) + live (verbo)?",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Cuál es correcta?",
        options: ["Does she works here?", "Does she work here?", "Do she work here?"],
        answer: 1,
        why: "Con 'does', el verbo principal va en forma base (work), sin -s.",
      },
      {
        kind: "fill",
        q: "Completa: «___ you like tea?» (auxiliar para 'you')",
        accept: ["do"],
        hint: "I/you/we/they → ?",
        why: "Con 'you' el auxiliar es 'Do': Do you like tea?",
      },
      {
        kind: "choice",
        q: "Quieres preguntar el lugar donde alguien vive. Empiezas por:",
        options: ["What", "Where", "When"],
        answer: 1,
        why: "'Where' = dónde: Where do you live?",
      },
      {
        kind: "fill",
        q: "Ordena la pregunta con 'to be': «you / are / how» →",
        accept: ["how are you", "how are you?"],
        hint: "Con 'to be' no se usa 'do'.",
        why: "'How are you?' — con el verbo 'to be' se invierte sin auxiliar.",
      },
    ],
    activity: {
      title: "Entrevista de 6 preguntas",
      steps: [
        "Escribe 3 preguntas de sí/no (con do/does o to be) y 3 preguntas Wh-.",
        "Úsalas para 'entrevistar' a alguien (o a ti mismo por escrito).",
        "Comprueba que el auxiliar y el orden sean correctos.",
      ],
    },
  },

  "gra-presente": {
    intro:
      "El presente en inglés tiene DOS formas y no significan lo mismo. Elegir mal es el error clásico de principiante… y es facilísimo de arreglar con una regla visual.",
    goal: "decidir entre presente simple y continuo sin dudar.",
    sections: [
      {
        h: "Presente simple",
        tldr: "Para lo que es habitual, permanente o siempre verdad.",
        body: [
          "Rutinas, hechos y verdades generales. Ojo con la tercera persona (he/she/it): el verbo añade -s.",
        ],
        examples: [
          { en: "I work every day.", es: "Trabajo todos los días." },
          { en: "She works in a bank.", es: "Ella trabaja en un banco.", note: "he/she/it → verbo + s." },
          { en: "Water boils at 100°C.", es: "El agua hierve a 100°C.", note: "Verdad general." },
        ],
        more: [
          "Negación e interrogación usan do/does: I don't work / Does she work?",
          "Con he/she/it la -s puede cambiar la ortografía: study → studies, go → goes, watch → watches.",
        ],
      },
      {
        h: "Presente continuo",
        tldr: "Para lo que ocurre ahora mismo o es temporal.",
        body: [
          "Se forma con am/is/are + verbo-ing. Describe la acción en curso o una situación pasajera.",
        ],
        examples: [
          { en: "I am working now.", es: "Estoy trabajando ahora." },
          { en: "They are eating.", es: "Están comiendo." },
          { en: "She is studying this week.", es: "Está estudiando esta semana (temporal)." },
        ],
      },
      {
        h: "Simple vs. continuo, de un vistazo",
        tldr: "La misma frase cambia de sentido según la forma.",
        compare: {
          left: {
            title: "Present Simple",
            points: [
              "Rutina / permanente / verdad general",
              "Señales: every day, usually, always, never",
              "I work here. → Trabajo aquí (siempre).",
            ],
          },
          right: {
            title: "Present Continuous",
            points: [
              "Ahora mismo / temporal / en curso",
              "Señales: now, at the moment, right now, today",
              "I'm working here. → Estoy trabajando aquí (estos días).",
            ],
          },
          note: "Regla de oro: ¿es tu vida en general → simple; ¿es lo que pasa ahora → continuo.",
        },
        tip: "Verbos de estado (like, want, know, need, love) casi nunca van en continuo: se dice 'I want', no 'I am wanting'.",
      },
    ],
    practice: [
      {
        kind: "fill",
        q: "Presente simple, 3ª persona: «He ___ (play) football on Sundays.»",
        accept: ["plays"],
        hint: "he/she/it añade -s.",
        why: "Con he/she/it el presente simple añade -s: plays.",
      },
      {
        kind: "choice",
        q: "«Look! The baby ___ .» (ahora mismo)",
        options: ["sleeps", "is sleeping", "sleep"],
        answer: 1,
        why: "Algo que ocurre en este momento → presente continuo: is sleeping.",
      },
      {
        kind: "choice",
        q: "«I ___ coffee every morning.»",
        options: ["am drinking", "drink", "drinks"],
        answer: 1,
        why: "Rutina ('every morning') → presente simple: I drink.",
      },
      {
        kind: "fill",
        q: "Presente continuo: «They ___ (watch) TV now.»",
        accept: ["are watching"],
        hint: "am/is/are + verbo-ing.",
        why: "They are watching TV now.",
      },
    ],
    activity: {
      title: "Mi rutina y mi ahora",
      steps: [
        "Escribe 5 frases sobre tu rutina en presente simple.",
        "Escribe 3 frases sobre lo que está pasando a tu alrededor ahora en presente continuo.",
        "Marca las -s de la tercera persona y los -ing.",
      ],
    },
    selfCheck: [
      "Sé cuándo usar presente simple y cuándo continuo.",
      "Añado -s en la 3ª persona del simple (she works).",
      "Formo el continuo con am/is/are + -ing.",
      "No pongo verbos de estado (want, know) en continuo.",
    ],
    summary: [
      "Simple = habitual/permanente; continuo = ahora/temporal.",
      "3ª persona del simple: verbo + -s.",
      "Continuo: am/is/are + verbo-ing.",
      "Pistas: every day → simple; now → continuo.",
    ],
  },

  "aud-instrucciones": {
    intro:
      "El primer objetivo de escucha (A1) es entender instrucciones y frases cotidianas dichas despacio y con claridad: números, direcciones, precios, órdenes simples. No necesitas entender cada palabra, solo la idea clave.",
    sections: [
      {
        h: "Palabras 'ancla' que debes cazar",
        body: [
          "En una instrucción, unas pocas palabras cargan el significado (números, lugares, verbos de acción). Enfócate en cazarlas y deja pasar el relleno.",
        ],
        examples: [
          { en: "Turn left / right. Go straight.", es: "Gira a la izquierda/derecha. Sigue recto." },
          { en: "It's five dollars.", es: "Son cinco dólares.", note: "Caza el número: five." },
          { en: "Open your book on page ten.", es: "Abre el libro en la página diez." },
        ],
      },
      {
        h: "Estrategia: idea global, no cada palabra",
        bullets: [
          "Escucha primero para la idea general; no te bloquees en una palabra desconocida.",
          "Usa el contexto (dónde estás, con quién) para predecir lo que oirás.",
          "Vuelve a escuchar el mismo audio varias veces: cada pasada entiendes más.",
        ],
        tip: "Empieza con audio graduado (British Council, ELLLO nivel bajo). Es input comprensible: hecho para tu nivel.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Oyes: «Turn left and go straight.» ¿Qué haces?",
        options: [
          "Giras a la derecha y paras",
          "Giras a la izquierda y sigues recto",
          "Vuelves atrás",
        ],
        answer: 1,
        why: "left = izquierda, go straight = seguir recto.",
      },
      {
        kind: "choice",
        q: "No entiendes UNA palabra en medio de una instrucción. Lo mejor es:",
        options: [
          "Detenerte y bloquearte hasta descifrarla",
          "Seguir y captar la idea general con las palabras clave",
          "Abandonar el audio",
        ],
        answer: 1,
        why: "La comprensión global no exige entender el 100%: caza las palabras ancla.",
      },
      {
        kind: "fill",
        q: "«Open your book on page ___.» Si oyes 'ten', ¿qué número es?",
        accept: ["10", "ten", "diez"],
        hint: "ten = ?",
        why: "ten = 10.",
      },
    ],
    activity: {
      title: "Escucha en 3 pasadas",
      steps: [
        "Elige un audio corto y graduado (nivel principiante).",
        "Primera pasada: capta el tema. Segunda: caza números/lugares/acciones. Tercera: con transcripción.",
        "Anota 3 palabras nuevas para tu SRS.",
      ],
    },
  },

  "lec-frases": {
    intro:
      "Leer en A1 es reconocer palabras, frases y señales cotidianas: carteles, menús, mensajes cortos. Ya conoces la relación letra-sonido; ahora la aplicas a texto real y breve.",
    sections: [
      {
        h: "Señales y avisos cotidianos",
        examples: [
          { en: "OPEN / CLOSED", es: "ABIERTO / CERRADO" },
          { en: "PUSH / PULL", es: "EMPUJAR / TIRAR (en puertas)" },
          { en: "EXIT / ENTRANCE", es: "SALIDA / ENTRADA" },
          { en: "NO SMOKING", es: "PROHIBIDO FUMAR" },
        ],
      },
      {
        h: "Leer por palabras clave",
        body: [
          "No leas letra a letra ni traduzcas todo. Reconoce la palabra completa de un vistazo y usa la situación para deducir el resto.",
        ],
        examples: [
          {
            en: "Sale: 50% off all shoes today!",
            es: "Rebaja: ¡50% de descuento en todos los zapatos hoy!",
            note: "Palabras clave: Sale, 50% off, shoes, today.",
          },
        ],
        tip: "Cuando veas una palabra desconocida, pregúntate: ¿necesito ESA palabra para entender el mensaje? Muchas veces, no.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Un cartel en la puerta dice «PULL». ¿Qué haces?",
        options: ["Empujar la puerta", "Tirar de la puerta", "Tocar el timbre"],
        answer: 1,
        why: "PULL = tirar. PUSH = empujar.",
      },
      {
        kind: "choice",
        q: "«NO SMOKING» significa:",
        options: ["No hay humo", "Prohibido fumar", "Zona de fumadores"],
        answer: 1,
        why: "NO SMOKING = prohibido fumar.",
      },
      {
        kind: "fill",
        q: "«50% off» en una tienda significa 50% de ___ .",
        accept: ["descuento", "rebaja", "off", "discount"],
        hint: "Es algo bueno para tu bolsillo.",
        why: "'off' aquí indica descuento: 50% de descuento.",
      },
    ],
    activity: {
      title: "Caza de carteles",
      steps: [
        "Busca 5 imágenes de señales o menús en inglés (o obsérvalos en tu ciudad/app).",
        "Escribe qué significan sin traducir palabra por palabra.",
        "Anota las palabras nuevas que se repiten.",
      ],
    },
  },

  "ora-preguntas-simples": {
    intro:
      "Hablar en A1 es intercambiar información básica: responder y hacer preguntas simples sobre ti, tu día y tu entorno. Aquí unes el vocabulario, el orden SVO y las preguntas en interacción real.",
    sections: [
      {
        h: "Responder sobre ti",
        examples: [
          { en: "— Where are you from?  — I'm from Colombia.", es: "— ¿De dónde eres? — Soy de Colombia." },
          { en: "— What do you do?  — I'm a student.", es: "— ¿A qué te dedicas? — Soy estudiante." },
          { en: "— How old are you?  — I'm 25.", es: "— ¿Cuántos años tienes? — Tengo 25." },
        ],
      },
      {
        h: "Mantener el turno con fórmulas",
        body: [
          "No necesitas frases largas. Con respuestas cortas y algunas fórmulas puedes sostener una conversación real.",
        ],
        bullets: [
          "Gana tiempo: 'Let me think…', 'Well…', 'Hmm…'.",
          "Devuelve la pregunta: 'And you?', 'What about you?'.",
          "Confirma: 'Yes, exactly.', 'That's right.'.",
        ],
        tip: "Regla del principiante: es mejor una frase corta y correcta que una larga y bloqueada. La fluidez se construye con bloques que ya dominas.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "— «Where are you from?» ¿Respuesta natural?",
        options: ["I'm 20 years old.", "I'm from Mexico.", "I'm a teacher."],
        answer: 1,
        why: "'Where are you from?' pregunta el origen → 'I'm from…'.",
      },
      {
        kind: "choice",
        q: "Te preguntan algo y quieres devolver la misma pregunta. Dices:",
        options: ["Goodbye.", "And you?", "I don't understand."],
        answer: 1,
        why: "'And you?' devuelve la pregunta y mantiene la conversación.",
      },
      {
        kind: "fill",
        q: "Completa la pregunta por la edad: «How ___ are you?»",
        accept: ["old"],
        hint: "old = viejo/edad.",
        why: "'How old are you?' = ¿Cuántos años tienes?",
      },
    ],
    activity: {
      title: "Mini diálogo de presentación",
      steps: [
        "Escribe un diálogo de 6 turnos presentándote y preguntando a la otra persona.",
        "Léelo en voz alta interpretando los dos papeles.",
        "Grábate y comprueba que las preguntas y respuestas encajan.",
      ],
    },
  },

  "esc-frases": {
    intro:
      "Escribir en A1 es rellenar datos personales y redactar frases simples y conectadas: un formulario, una nota, una presentación breve. Aquí se cimenta la escritura y la ortografía básica.",
    sections: [
      {
        h: "Datos personales (formularios)",
        examples: [
          { en: "First name / Last name (surname)", es: "Nombre / Apellido" },
          { en: "Date of birth", es: "Fecha de nacimiento" },
          { en: "Address / Phone number / Email", es: "Dirección / Teléfono / Correo" },
          { en: "Nationality", es: "Nacionalidad" },
        ],
      },
      {
        h: "Mayúsculas y puntuación básicas",
        bullets: [
          "El pronombre 'I' (yo) va SIEMPRE en mayúscula, en cualquier posición.",
          "Nombres propios, países, idiomas y días van con mayúscula: Monday, English, Colombia.",
          "Toda oración empieza con mayúscula y termina en punto.",
        ],
        examples: [
          { en: "My name is Ana and I am from Colombia.", es: "Me llamo Ana y soy de Colombia.", note: "Mayúscula en I, Ana, Colombia." },
        ],
        tip: "Conecta frases simples con 'and', 'but' y 'because' para que tu texto fluya, en vez de dejar frases sueltas.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Cuál está escrita correctamente?",
        options: [
          "my name is ana and i am from colombia.",
          "My name is Ana and I am from Colombia.",
          "My Name Is Ana And I Am From Colombia.",
        ],
        answer: 1,
        why: "Mayúscula inicial, en 'I', y en nombres propios (Ana, Colombia); el resto en minúscula.",
      },
      {
        kind: "fill",
        q: "El pronombre 'yo' en inglés, escrito correctamente, es:",
        accept: ["I"],
        hint: "Una sola letra… siempre en mayúscula.",
        why: "'I' se escribe siempre en mayúscula.",
      },
      {
        kind: "choice",
        q: "En un formulario, 'Surname' pide tu…",
        options: ["Nombre", "Apellido", "Dirección"],
        answer: 1,
        why: "Surname = last name = apellido.",
      },
    ],
    activity: {
      title: "Tu perfil en 4 frases",
      steps: [
        "Escribe 4 frases con tus datos: nombre, origen, ocupación y algo que te gusta.",
        "Conéctalas con and/but/because.",
        "Revisa mayúsculas, la 'I' y los puntos finales.",
      ],
    },
  },

  "cul-cortesia": {
    intro:
      "Comunicar no es solo gramática: es hacerlo de forma apropiada. En inglés, la cortesía y ciertas fórmulas evitan sonar brusco. Un pequeño ajuste cultural cambia por completo la impresión que das.",
    sections: [
      {
        h: "'Please' y 'thank you' no son opcionales",
        body: [
          "En cultura anglosajona, pedir sin 'please' suena a orden. 'Thank you' se usa muchísimo, incluso por cosas pequeñas.",
        ],
        examples: [
          { en: "A coffee. → Can I have a coffee, please?", es: "Un café. → ¿Me pones un café, por favor?", note: "La segunda es la apropiada." },
          { en: "Give me that. → Could you pass me that, please?", es: "Dame eso. → ¿Podrías pasarme eso, por favor?" },
        ],
      },
      {
        h: "Fórmulas que suavizan",
        bullets: [
          "'Could you…?' y 'Can I…?' son más corteses que el imperativo directo.",
          "'Excuse me' para llamar la atención o pedir paso; 'Sorry' para disculparte.",
          "'How are you?' suele ser un saludo, no una pregunta literal: responde breve ('Fine, thanks. And you?').",
        ],
        tip: "Sonreír, dar las gracias y usar 'please' te abren puertas. La cortesía compensa un inglés todavía imperfecto.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "En una cafetería, la forma más apropiada es:",
        options: ["Give me a coffee.", "Coffee.", "Can I have a coffee, please?"],
        answer: 2,
        why: "'Can I have…, please?' es cortés; el imperativo directo suena brusco.",
      },
      {
        kind: "choice",
        q: "Quieres pasar entre la gente. Dices:",
        options: ["Sorry?", "Excuse me.", "Thank you."],
        answer: 1,
        why: "'Excuse me' pide paso o atención; 'Sorry' es para disculparse.",
      },
      {
        kind: "choice",
        q: "Alguien te saluda con «How are you?». Normalmente esperas:",
        options: [
          "Un relato largo de tu día",
          "Una respuesta breve: 'Fine, thanks. And you?'",
          "Que no respondas nada",
        ],
        answer: 1,
        why: "Suele ser un saludo social; se responde breve y se devuelve.",
      },
    ],
    activity: {
      title: "Reescribe con cortesía",
      steps: [
        "Toma 3 órdenes directas (Give me…, Open the window, Wait).",
        "Reescríbelas con 'Could you…, please?' o 'Can I…, please?'.",
        "Practica decirlas en voz alta con tono amable.",
      ],
    },
  },

  "hito-a1": {
    intro:
      "¡Llegaste al primer hito! A1 significa que puedes entender y usar expresiones cotidianas y frases básicas, presentarte y hacer preguntas simples sobre datos personales. Este nodo repasa y confirma todo lo anterior.",
    sections: [
      {
        h: "¿Qué puedes hacer ya? (descriptores CEFR A1)",
        bullets: [
          "Comprendes y usas expresiones cotidianas y frases muy básicas.",
          "Te presentas y presentas a otros; preguntas y respondes sobre datos personales (dónde vives, qué conoces, qué tienes).",
          "Interactúas de forma sencilla si la otra persona habla despacio y con claridad.",
        ],
      },
      {
        h: "Repaso integrado",
        body: [
          "Antes de avanzar a A2, comprueba que el esqueleto está firme: SVO con sujeto obligatorio, presente simple vs. continuo, preguntas con do/does y Wh-, y tu núcleo de vocabulario con buena pronunciación de los sonidos difíciles.",
        ],
        tip: "Si algo de esto aún te cuesta, vuelve a esa hoja del árbol. Un A1 sólido hace que A2 sea mucho más fácil: no hay prisa por avanzar con cimientos flojos.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Repaso: ¿cuál es correcta?",
        options: ["She don't like tea.", "She doesn't like tea.", "She not like tea."],
        answer: 1,
        why: "Tercera persona con negación: doesn't + verbo base.",
      },
      {
        kind: "choice",
        q: "«Right now I ___ English.» (en este momento)",
        options: ["study", "am studying", "studies"],
        answer: 1,
        why: "Acción en curso → presente continuo: am studying.",
      },
      {
        kind: "fill",
        q: "Completa la pregunta: «___ do you live?» (lugar)",
        accept: ["where"],
        hint: "Wh- de lugar.",
        why: "'Where do you live?' = ¿Dónde vives?",
      },
      {
        kind: "fill",
        q: "Preséntate en inglés: «___ name is …» (posesivo 'mi')",
        accept: ["my"],
        hint: "Posesivo de 'I'.",
        why: "'My name is…' = Me llamo…",
      },
      {
        kind: "choice",
        q: "Forma cortés de pedir algo:",
        options: ["Give me water.", "Water now.", "Could I have some water, please?"],
        answer: 2,
        why: "'Could I have…, please?' es la fórmula cortés.",
      },
    ],
    activity: {
      title: "Autoevaluación A1",
      steps: [
        "Grábate 1 minuto presentándote y contando tu rutina.",
        "Escucha: ¿usaste SVO con sujeto, presente correcto y buena pronunciación de th/v?",
        "Marca en tu lista qué descriptores A1 ya dominas y cuáles repasar antes de A2.",
      ],
    },
    selfCheck: [
      "Me presento y doy datos personales.",
      "Hago y respondo preguntas simples (do/does, wh-).",
      "Uso el presente simple y continuo correctamente.",
      "Pronuncio de forma inteligible los sonidos difíciles (th, v, vocales largas).",
    ],
    summary: [
      "A1 = sobrevivir: saludar, presentarte, preguntar y responder lo básico.",
      "Esqueleto firme: SVO con sujeto, presente, preguntas con do/does y wh-.",
      "Cimientos sólidos hacen que A2 sea mucho más fácil.",
    ],
  },

  // ─────────────────────────────── A2 · núcleo ───────────────────────────────
  "est-tolerancia": {
    intro:
      "El mayor freno del principiante no es la gramática: es querer entender el 100% y bloquearse en cada palabra nueva. Aprender a tolerar lo desconocido te deja disfrutar del input… y así aprendes más rápido.",
    goal: "seguir un audio o texto entendiendo la idea global sin traducir ni bloquearte.",
    sections: [
      {
        h: "Entender no es traducir",
        tldr: "Tu meta es captar el mensaje, no descifrar cada palabra.",
        body: [
          "Cuando traduces mentalmente palabra por palabra, vas lento y te pierdes. El objetivo es 'pescar' la idea principal aunque se te escapen detalles.",
        ],
        tip: "Pon los subtítulos en inglés, nunca en español. Los de tu idioma apagan tu escucha.",
      },
      {
        h: "Deduce por contexto",
        tldr: "Las palabras de alrededor te revelan la desconocida.",
        body: [
          "Antes de mirar el diccionario, adivina el significado por el contexto. Aciertas más de lo que crees.",
        ],
        examples: [
          {
            en: "The weather was awful, so we stayed home.",
            es: "El tiempo estaba horrible, así que nos quedamos en casa.",
            note: "No sabías 'awful'? El 'so we stayed home' te dice que es algo malo.",
          },
        ],
        more: [
          "Usa los cognados: information, important, possible… se parecen al español.",
          "Fíjate en la forma: 'un-happy' = no feliz; 'care-ful' = lleno de cuidado.",
        ],
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "No entiendes una palabra en medio de un vídeo. Lo mejor es:",
        options: [
          "Pausar y buscarla en el diccionario cada vez",
          "Seguir y deducir por el contexto",
          "Reiniciar el vídeo desde el principio",
        ],
        answer: 1,
        why: "Deducir por contexto mantiene el flujo y entrena la comprensión real.",
      },
      {
        kind: "choice",
        q: "«The soup was delicious, I ate it all.» 'delicious' probablemente significa…",
        options: ["asqueroso", "delicioso", "frío"],
        answer: 1,
        why: "Si se lo comió todo, la sopa era buena: 'delicious' = delicioso (además es cognado).",
      },
      {
        kind: "choice",
        q: "¿Qué subtítulos te ayudan a aprender más?",
        options: ["En español", "En inglés", "Sin subtítulos siempre"],
        answer: 1,
        why: "Los subtítulos en inglés conectan sonido y forma escrita; los de tu idioma apagan la escucha.",
      },
    ],
    activity: {
      title: "Ver y resumir",
      steps: [
        "Elige un vídeo corto en inglés sobre algo que te guste, con subtítulos en inglés.",
        "Míralo entero sin pausar. Tolera lo que no entiendas.",
        "Escribe en 2 frases de qué trataba. No importa si fallaste detalles.",
      ],
    },
    selfCheck: [
      "Sigo un vídeo/audio sin traducir en mi cabeza.",
      "Deduzco palabras nuevas por el contexto antes de buscarlas.",
      "No me bloqueo cuando no entiendo una palabra.",
    ],
    summary: [
      "Capta la idea global; los detalles llegan con la exposición.",
      "Deduce por contexto y cognados antes de usar el diccionario.",
      "Subtítulos en inglés, no en español.",
    ],
  },

  "fon-acento": {
    intro:
      "En inglés, cada palabra tiene UNA sílaba fuerte. Poner el acento donde no va puede hacerte ininteligible aunque los sonidos sean correctos. Es un ajuste pequeño con un efecto enorme.",
    goal: "colocar el acento en la sílaba correcta de las palabras frecuentes.",
    sections: [
      {
        h: "La sílaba fuerte manda",
        tldr: "Una sílaba se pronuncia más larga, alta y clara; el resto se relaja.",
        body: [
          "Las sílabas sin acento se reducen al sonido 'schwa' /ə/ (una 'e' floja). Por eso 'banana' suena /bəˈnɑːnə/: solo la del medio es fuerte.",
        ],
        examples: [
          { en: "baNAna", ipa: "/bəˈnɑːnə/", es: "banana", note: "Acento en la 2ª sílaba." },
          { en: "COMputer → comPUter", ipa: "/kəmˈpjuːtər/", es: "computadora", note: "Acento en 'pu'." },
          { en: "imPORtant", ipa: "/ɪmˈpɔːrtnt/", es: "importante" },
        ],
      },
      {
        h: "Mismo escrito, distinto acento",
        tldr: "El acento puede distinguir un sustantivo de un verbo.",
        compare: {
          left: {
            title: "Sustantivo — acento al principio",
            points: [
              "a REcord /ˈrekɔːrd/ — un disco/registro",
              "a PREsent /ˈpreznt/ — un regalo",
              "an INcrease /ˈɪnkriːs/ — un aumento",
            ],
          },
          right: {
            title: "Verbo — acento al final",
            points: [
              "to reCORD /rɪˈkɔːrd/ — grabar",
              "to preSENT /prɪˈzent/ — presentar",
              "to inCREASE /ɪnˈkriːs/ — aumentar",
            ],
          },
          note: "Regla útil (no absoluta): sustantivo → acento delante; verbo → acento detrás.",
        },
        tip: "Al aprender una palabra nueva, memoriza también DÓNDE va su acento. El diccionario lo marca con una ' antes de la sílaba fuerte.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Dónde va el acento en 'important'?",
        options: ["IM-portant", "im-POR-tant", "impor-TANT"],
        answer: 1,
        why: "imPORtant: la sílaba fuerte es 'por'.",
      },
      {
        kind: "choice",
        q: "«I want to ___ this song.» (verbo) ¿Cómo se acentúa 'record'?",
        options: ["REcord", "reCORD"],
        answer: 1,
        why: "Como verbo, el acento va al final: reCORD.",
      },
      {
        kind: "choice",
        q: "Las sílabas SIN acento suelen reducirse al sonido…",
        options: ["/iː/ largo", "schwa /ə/", "/r/ fuerte"],
        answer: 1,
        why: "El inglés reduce las sílabas átonas a la schwa /ə/.",
      },
    ],
    activity: {
      title: "Marca el acento",
      steps: [
        "Elige 10 palabras de 2-3 sílabas que uses a menudo.",
        "Marca en cuál sílaba crees que va el acento.",
        "Comprueba con el audio del diccionario y corrige.",
      ],
    },
    selfCheck: [
      "Identifico la sílaba fuerte de una palabra.",
      "Reduzco las sílabas átonas (schwa).",
      "Distingo el acento de sustantivo vs. verbo (REcord/reCORD).",
    ],
    summary: [
      "Cada palabra inglesa tiene una sílaba fuerte; el resto se relaja.",
      "Colocar mal el acento afecta la comprensión más que un sonido imperfecto.",
      "Sustantivo → acento delante; verbo → acento detrás (tendencia).",
    ],
  },

  "voc-nucleo-2": {
    intro:
      "Con ~2000 palabras frecuentes entiendes la mayoría de las conversaciones y textos cotidianos. La clave a este nivel no es solo sumar palabras: es aprender cómo se combinan (colocaciones) y los phrasal verbs.",
    goal: "manejar ~2000 palabras de uso diario y sus combinaciones más comunes.",
    sections: [
      {
        h: "Colocaciones: las palabras van en pareja",
        tldr: "Aprende grupos de palabras, no palabras sueltas.",
        body: [
          "Los nativos dicen 'make a decision' y 'do homework', no al revés. Aprender la combinación evita sonar raro y acelera el habla.",
        ],
        compare: {
          left: {
            title: "make (crear/producir)",
            points: ["make a decision", "make a mistake", "make friends", "make money"],
          },
          right: {
            title: "do (realizar una tarea)",
            points: ["do homework", "do the dishes", "do exercise", "do business"],
          },
          note: "No hay regla perfecta: memoriza la pareja como un bloque.",
        },
      },
      {
        h: "Phrasal verbs: verbo + partícula",
        tldr: "Un verbo común + una preposición forma un significado nuevo.",
        body: [
          "Son muy frecuentes en el habla real. 'Get up' no es 'obtener arriba': es 'levantarse'.",
        ],
        examples: [
          { en: "get up", es: "levantarse" },
          { en: "turn on / turn off", es: "encender / apagar" },
          { en: "look for", es: "buscar" },
          { en: "give up", es: "rendirse" },
        ],
        more: [
          "Muchos son separables: 'turn the light on' = 'turn on the light'.",
          "Con pronombre van SIEMPRE en medio: 'turn it on' (nunca 'turn on it').",
        ],
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Cuál es la colocación correcta?",
        options: ["do a decision", "make a decision", "take a decision (US neutro)"],
        answer: 1,
        why: "'make a decision' es la forma estándar (tomar una decisión).",
      },
      {
        kind: "fill",
        q: "Completa el phrasal verb: «I ___ up at 7 every day.» (levantarse)",
        accept: ["get", "wake"],
        hint: "get / wake …",
        why: "'get up' = levantarse (también 'wake up' = despertarse).",
      },
      {
        kind: "choice",
        q: "Con pronombre, el phrasal verb separable va…",
        options: [
          "turn on it",
          "turn it on",
          "da igual el orden",
        ],
        answer: 1,
        why: "Con pronombre, la partícula va detrás: 'turn it on'.",
      },
    ],
    activity: {
      title: "5 colocaciones + 5 phrasal verbs",
      steps: [
        "Elige un tema (trabajo, casa, estudio).",
        "Anota 5 colocaciones y 5 phrasal verbs de ese tema en tu SRS, con una frase de ejemplo.",
        "Úsalos en un texto corto de 4-5 frases.",
      ],
    },
    selfCheck: [
      "Aprendo palabras en combinación, no sueltas.",
      "Reconozco y uso phrasal verbs comunes.",
      "Coloco el pronombre en medio del phrasal verb separable.",
    ],
    summary: [
      "~2000 palabras cubren la mayoría de lo cotidiano.",
      "Aprende colocaciones (make/do…) como bloques.",
      "Los phrasal verbs son clave en el habla real.",
    ],
  },

  "gra-pasado": {
    intro:
      "Para contar tu día, tu fin de semana o tu vida necesitas el pasado simple. Tiene una parte fácil (los verbos regulares) y una que se memoriza (los irregulares), pero el mecanismo de preguntas y negaciones es único y sencillo.",
    goal: "narrar hechos terminados en el pasado.",
    sections: [
      {
        h: "Verbos regulares: + -ed",
        tldr: "La mayoría forman el pasado añadiendo -ed.",
        body: [
          "work → worked, play → played, live → lived. Ojo con la pronunciación de -ed: no siempre suena igual.",
        ],
        examples: [
          { en: "worked, liked, stopped", ipa: "/t/", es: "tras sonido sordo suena /t/." },
          { en: "played, lived, opened", ipa: "/d/", es: "tras sonido sonoro suena /d/." },
          { en: "wanted, needed, decided", ipa: "/ɪd/", es: "tras /t/ o /d/ suena /ɪd/ (sílaba extra)." },
        ],
      },
      {
        h: "Verbos irregulares: se memorizan",
        tldr: "Los más frecuentes no siguen la regla; apréndelos como bloque.",
        compare: {
          left: {
            title: "Regulares (+ed)",
            points: ["work → worked", "play → played", "watch → watched"],
          },
          right: {
            title: "Irregulares (memoria)",
            points: ["go → went", "have → had", "see → saw", "make → made"],
          },
          note: "Los irregulares suelen ser los verbos más usados. Prioriza los 50 más comunes.",
        },
      },
      {
        h: "Preguntas y negaciones: did / didn't",
        tldr: "Con 'did', el verbo principal vuelve a su forma base.",
        body: [
          "El pasado se marca UNA sola vez, en 'did'. Por eso el verbo principal pierde su forma de pasado.",
        ],
        examples: [
          { en: "Did you go to the party?", es: "¿Fuiste a la fiesta?", note: "go, no went." },
          { en: "I didn't see him.", es: "No lo vi.", note: "see, no saw." },
        ],
        tip: "Error clásico: 'I didn't went'. Correcto: 'I didn't go'. El 'did' ya lleva el pasado.",
      },
    ],
    practice: [
      {
        kind: "fill",
        q: "Pasado de 'go': «Yesterday I ___ to school.»",
        accept: ["went"],
        hint: "Es irregular.",
        why: "go → went (irregular).",
      },
      {
        kind: "choice",
        q: "¿Cuál es correcta?",
        options: ["I didn't saw the film.", "I didn't see the film.", "I don't saw the film."],
        answer: 1,
        why: "Con 'didn't', el verbo va en base: see (no saw).",
      },
      {
        kind: "choice",
        q: "¿Cómo suena la '-ed' de 'wanted'?",
        options: ["/t/", "/d/", "/ɪd/ (sílaba extra)"],
        answer: 2,
        why: "Tras /t/ o /d/, la -ed suena /ɪd/ y añade una sílaba: want-ed.",
      },
      {
        kind: "fill",
        q: "Pasado de 'be' con 'they': «They ___ happy.»",
        accept: ["were"],
        hint: "was / were …",
        why: "I/he/she/it → was; you/we/they → were.",
      },
    ],
    activity: {
      title: "Cuenta tu fin de semana",
      steps: [
        "Escribe 6 frases sobre lo que hiciste el fin de semana pasado.",
        "Subraya los verbos: marca cuáles son regulares (-ed) y cuáles irregulares.",
        "Convierte una frase en pregunta con 'Did…?' y otra en negación con 'didn't'.",
      ],
    },
    selfCheck: [
      "Formo el pasado regular con -ed y lo pronuncio bien.",
      "Conozco los irregulares más comunes (went, had, saw…).",
      "Uso did/didn't + verbo base en preguntas y negaciones.",
      "Uso was/were correctamente.",
    ],
    summary: [
      "Regulares: + -ed (con 3 sonidos: /t/, /d/, /ɪd/).",
      "Irregulares: se memorizan; son los más usados.",
      "Preguntas/negaciones: did/didn't + verbo base.",
    ],
  },

  "gra-futuro": {
    intro:
      "El inglés tiene dos formas principales de hablar del futuro, y elegir bien comunica tu intención. La diferencia entre 'will' y 'going to' es sutil pero muy útil.",
    goal: "elegir entre 'will' y 'going to' según la situación.",
    sections: [
      {
        h: "will vs. going to, de un vistazo",
        tldr: "'going to' = ya lo tenías pensado; 'will' = lo decides ahora.",
        compare: {
          left: {
            title: "will + verbo base",
            points: [
              "Decisión en el momento: I'll help you!",
              "Predicción/opinión: I think it will rain.",
              "Promesas y ofertas: I'll call you tonight.",
            ],
          },
          right: {
            title: "be going to + verbo",
            points: [
              "Plan ya decidido: I'm going to study medicine.",
              "Predicción con evidencia: Look at the clouds — it's going to rain.",
              "Intención: We're going to travel this summer.",
            ],
          },
          note: "Los dos son 'futuro', pero cuentan cosas distintas sobre tu intención.",
        },
      },
      {
        h: "Un tercer recurso: presente continuo",
        tldr: "Para citas y planes ya organizados con hora/lugar.",
        examples: [
          { en: "I'm meeting Ana at 6.", es: "Quedo con Ana a las 6.", note: "Cita concreta ya acordada." },
          { en: "We're flying to Madrid on Friday.", es: "Volamos a Madrid el viernes." },
        ],
        more: [
          "'shall' existe pero es formal/británico y poco frecuente hoy (Shall I open the window?).",
        ],
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "«This bag is heavy.» «Don't worry, I ___ carry it.» (te ofreces AHORA)",
        options: ["am going to", "will", "carry"],
        answer: 1,
        why: "Decisión/ofrecimiento en el momento → 'will': I'll carry it.",
      },
      {
        kind: "choice",
        q: "«Why are you buying eggs?» «I ___ make a cake.» (plan ya decidido)",
        options: ["will", "am going to", "make"],
        answer: 1,
        why: "Plan/intención previa → 'going to': I'm going to make a cake.",
      },
      {
        kind: "choice",
        q: "«Look at those black clouds! It ___ rain.» (evidencia visible)",
        options: ["will", "is going to", "rains"],
        answer: 1,
        why: "Predicción con evidencia presente → 'going to'.",
      },
      {
        kind: "fill",
        q: "Cita concreta (presente continuo): «I ___ (meet) the doctor at 5.»",
        accept: ["am meeting", "'m meeting"],
        hint: "am/is/are + -ing.",
        why: "Planes con hora fija → presente continuo: I'm meeting the doctor at 5.",
      },
    ],
    activity: {
      title: "Tus planes y predicciones",
      steps: [
        "Escribe 3 frases con 'going to' sobre planes que ya tienes.",
        "Escribe 2 frases con 'will' (una predicción y un ofrecimiento).",
        "Escribe 1 cita concreta con presente continuo.",
      ],
    },
    selfCheck: [
      "Uso 'will' para decisiones del momento, predicciones y ofertas.",
      "Uso 'going to' para planes e intenciones previas.",
      "Uso el presente continuo para citas concretas.",
    ],
    summary: [
      "will = lo decides ahora / predicción / promesa.",
      "going to = plan previo / predicción con evidencia.",
      "Presente continuo = citas y planes con hora fija.",
    ],
  },

  "gra-conectores": {
    intro:
      "Los conectores convierten frases sueltas en ideas que fluyen. Con cinco o seis básicos, tu inglés deja de sonar entrecortado.",
    goal: "unir ideas con and, but, or, so, because y although.",
    sections: [
      {
        h: "Los conectores esenciales",
        tldr: "Cada uno indica una relación distinta entre ideas.",
        bullets: [
          "and = y (añade) · but = pero (contrasta) · or = o (alternativa)",
          "because = porque (causa) · so = así que (resultado/consecuencia)",
          "although = aunque (concesión)",
        ],
        examples: [
          { en: "I was tired, so I went to bed.", es: "Estaba cansado, así que me fui a la cama.", note: "so → resultado." },
          { en: "I went to bed because I was tired.", es: "Me fui a la cama porque estaba cansado.", note: "because → causa." },
        ],
      },
      {
        h: "because vs. so: ojo con el orden",
        tldr: "Dicen lo mismo… pero al revés.",
        compare: {
          left: {
            title: "because (causa)",
            points: [
              "Introduce el motivo.",
              "Result + because + causa.",
              "I stayed home because it rained.",
            ],
          },
          right: {
            title: "so (resultado)",
            points: [
              "Introduce la consecuencia.",
              "Causa + so + result.",
              "It rained, so I stayed home.",
            ],
          },
          note: "Misma idea, distinto foco y orden.",
        },
        tip: "No empieces una frase formal con 'And' o 'But' al escribir; en el habla es normal, en textos cuida el registro.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "«I wanted to go out, ___ it was raining.»",
        options: ["so", "but", "because"],
        answer: 1,
        why: "Hay un contraste (quería salir / llovía) → 'but'.",
      },
      {
        kind: "choice",
        q: "«She studied a lot, ___ she passed the exam.»",
        options: ["because", "but", "so"],
        answer: 2,
        why: "Causa + resultado → 'so' (así que aprobó).",
      },
      {
        kind: "fill",
        q: "Causa: «I'm happy ___ it's Friday.» (porque)",
        accept: ["because"],
        hint: "Introduce el motivo.",
        why: "'because' introduce la causa.",
      },
    ],
    activity: {
      title: "Une tus ideas",
      steps: [
        "Escribe 3 pares de frases cortas relacionadas.",
        "Únelas usando un conector distinto en cada par (and/but, because/so, although).",
        "Léelas en voz alta: ¿suenan más fluidas?",
      ],
    },
    selfCheck: [
      "Uso and/but/or para añadir, contrastar y dar alternativas.",
      "Distingo because (causa) de so (resultado) y su orden.",
      "Uso although para concesiones.",
    ],
    summary: [
      "Conectores = frases que fluyen en vez de frases sueltas.",
      "because introduce la causa; so, el resultado (orden inverso).",
      "although = aunque (concesión).",
    ],
  },

  "aud-conversaciones": {
    intro:
      "El siguiente salto de escucha es entender conversaciones lentas y claras sobre temas conocidos: planes, compras, direcciones. No necesitas cada palabra: necesitas la información clave.",
    goal: "captar la información esencial de conversaciones cotidianas lentas y claras.",
    sections: [
      {
        h: "Caza las 'palabras de contenido'",
        tldr: "El significado vive en sustantivos, verbos y números; el resto es relleno.",
        body: [
          "El inglés acentúa las palabras con carga de significado y reduce el resto. Entrena tu oído para engancharte a esas palabras fuertes.",
        ],
        examples: [
          {
            en: "Can you meet me at the STAtion at SEven?",
            es: "¿Puedes verme en la ESTAción a las SIEte?",
            note: "Las palabras clave (station, seven) suenan más fuertes.",
          },
        ],
      },
      {
        h: "Escucha por tarea, no por perfección",
        tldr: "Escucha con una pregunta concreta en mente.",
        bullets: [
          "¿Dónde quedan? ¿A qué hora? ¿Cuánto cuesta? Busca ESO.",
          "Predice: si es un restaurante, oirás precios y comidas.",
          "Reescucha: cada pasada rellena huecos.",
        ],
        tip: "Empieza con audio graduado (British Council A2, ELLLO nivel bajo) y sube poco a poco. Debe costarte un poco, no ahogarte.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "En una conversación, ¿qué palabras cargan el significado?",
        options: [
          "Artículos y preposiciones (the, at, of)",
          "Sustantivos, verbos y números (station, meet, seven)",
          "Todas por igual",
        ],
        answer: 1,
        why: "Las 'content words' llevan el significado y se pronuncian más fuertes.",
      },
      {
        kind: "choice",
        q: "La mejor forma de escuchar un diálogo cotidiano es:",
        options: [
          "Intentar traducir cada palabra",
          "Escuchar buscando una información concreta (hora, lugar, precio)",
          "Escuchar una sola vez y rendirte si fallas",
        ],
        answer: 1,
        why: "Escuchar 'por tarea' enfoca tu atención en lo que importa.",
      },
    ],
    activity: {
      title: "Escucha con misión",
      steps: [
        "Elige un diálogo corto A2 (con transcripción).",
        "Antes de oír, decide 2 datos que buscarás (hora, lugar, precio…).",
        "Escucha 2 veces sin leer, anota los datos, y comprueba con la transcripción.",
      ],
    },
    selfCheck: [
      "Me engancho a las palabras de contenido.",
      "Escucho buscando información concreta.",
      "Entiendo la idea de una conversación lenta y clara sin traducir.",
    ],
    summary: [
      "El significado está en las palabras fuertes (content words).",
      "Escucha con una pregunta concreta en mente.",
      "Reescuchar y usar audio graduado acelera el progreso.",
    ],
  },

  "lec-cotidiano": {
    intro:
      "Leer a nivel A2 es entender textos cortos y útiles: correos, anuncios, horarios, menús, instrucciones. La técnica correcta depende de para qué lees.",
    goal: "leer textos cotidianos cortos y encontrar la información que necesitas.",
    sections: [
      {
        h: "Skimming vs. scanning",
        tldr: "Dos formas de leer rápido según tu objetivo.",
        compare: {
          left: {
            title: "Skimming (vistazo)",
            points: [
              "Leer por encima para captar la IDEA general.",
              "'¿De qué trata este correo?'",
              "Miras título, primera frase, palabras destacadas.",
            ],
          },
          right: {
            title: "Scanning (búsqueda)",
            points: [
              "Buscar un DATO concreto sin leer todo.",
              "'¿A qué hora sale el tren?'",
              "Tus ojos saltan a números, nombres, horas.",
            ],
          },
          note: "No siempre hay que leer palabra por palabra.",
        },
      },
      {
        h: "Pistas del formato",
        tldr: "La forma del texto ya te dice mucho.",
        bullets: [
          "Un correo tiene saludo, cuerpo y despedida.",
          "Un anuncio destaca precio, fecha y oferta.",
          "Un horario se lee en filas y columnas.",
        ],
        tip: "No busques cada palabra en el diccionario. Si el texto se entiende sin ella, sigue.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Quieres saber solo a qué hora abre una tienda. Usas…",
        options: ["Skimming", "Scanning", "Leer todo palabra por palabra"],
        answer: 1,
        why: "Buscar un dato concreto (la hora) es scanning.",
      },
      {
        kind: "choice",
        q: "Quieres saber de qué trata un artículo en 10 segundos. Usas…",
        options: ["Skimming", "Scanning", "Traducir el primer párrafo entero"],
        answer: 0,
        why: "Captar la idea general por encima es skimming.",
      },
      {
        kind: "fill",
        q: "En un correo, la parte final que se despide (Best regards, See you…) se llama la ___ .",
        accept: ["despedida", "cierre", "closing", "firma"],
        hint: "Lo contrario del saludo.",
        why: "Es la despedida/cierre del correo.",
      },
    ],
    activity: {
      title: "Lee con propósito",
      steps: [
        "Busca un texto real corto en inglés (un menú, un anuncio, un horario).",
        "Haz skimming: escribe en 1 frase de qué trata.",
        "Haz scanning: encuentra 2 datos concretos (precio, hora, condición).",
      ],
    },
    selfCheck: [
      "Hago skimming para captar la idea general.",
      "Hago scanning para encontrar un dato concreto.",
      "Uso el formato del texto como pista.",
    ],
    summary: [
      "Skimming = idea general; scanning = dato concreto.",
      "El formato (correo, anuncio, horario) te orienta.",
      "No necesitas cada palabra para entender.",
    ],
  },

  "ora-cotidiana": {
    intro:
      "A2 es donde empiezas a 'defenderte': pedir en un café, comprar, preguntar direcciones, hacer planes. Son intercambios con un guion bastante predecible, y eso juega a tu favor.",
    goal: "desenvolverte en situaciones cotidianas transaccionales.",
    sections: [
      {
        h: "Situaciones con guion",
        tldr: "Muchas conversaciones cotidianas siguen un patrón fijo.",
        body: [
          "En una cafetería, la interacción es casi siempre la misma. Si aprendes el guion, lo demás es cambiar palabras.",
        ],
        examples: [
          { en: "— Can I have a coffee, please? — Sure. Anything else? — No, thanks. How much is it?", es: "Pedir en un café: pedir → ¿algo más? → no, gracias → ¿cuánto es?" },
          { en: "Excuse me, how do I get to the station?", es: "Perdona, ¿cómo llego a la estación?" },
        ],
      },
      {
        h: "Gana tiempo y mantén el turno",
        tldr: "No necesitas frases perfectas: necesitas seguir en la conversación.",
        bullets: [
          "Ganar tiempo: 'Well…', 'Let me think…', 'Uhm…'.",
          "Pedir ayuda: 'Sorry, could you repeat that?'.",
          "Confirmar: 'OK', 'Got it', 'That makes sense'.",
        ],
        tip: "Es mejor una frase corta y clara que quedarte callado buscando la perfecta. La fluidez se construye con bloques que ya dominas.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Quieres pedir direcciones educadamente. Empiezas con:",
        options: ["Hey! Station?", "Excuse me, how do I get to…?", "Where station."],
        answer: 1,
        why: "'Excuse me, how do I get to…?' es claro y cortés.",
      },
      {
        kind: "choice",
        q: "No entendiste lo que te dijeron. Dices:",
        options: ["Sorry, could you repeat that?", "Goodbye.", "Yes, of course."],
        answer: 0,
        why: "Pedir repetición mantiene viva la conversación.",
      },
      {
        kind: "fill",
        q: "Preguntar el precio: «How ___ is it?»",
        accept: ["much"],
        hint: "Para cantidades incontables/precio.",
        why: "'How much is it?' = ¿Cuánto cuesta?",
      },
    ],
    activity: {
      title: "Role-play de café",
      steps: [
        "Escribe el guion de pedir algo en un café (4-6 turnos).",
        "Represéntalo en voz alta haciendo los dos papeles.",
        "Cámbialo a otra situación (comprar una entrada, pedir direcciones).",
      ],
    },
    selfCheck: [
      "Manejo el guion de situaciones cotidianas (café, tienda, direcciones).",
      "Uso frases para ganar tiempo y pedir repetición.",
      "Pregunto el precio y datos básicos con naturalidad.",
    ],
    summary: [
      "Las conversaciones cotidianas siguen guiones predecibles.",
      "Aprende el patrón y cambia solo las palabras.",
      "Mantener el turno importa más que la perfección.",
    ],
  },

  "esc-mensajes": {
    intro:
      "Escribir un mensaje o un correo simple es una de las cosas más útiles del A2. Lo importante no es solo la gramática: es el tono correcto según a quién escribes.",
    goal: "escribir mensajes y correos simples con el registro adecuado.",
    sections: [
      {
        h: "La estructura de un correo simple",
        tldr: "Saludo → mensaje → despedida. Siempre.",
        bullets: [
          "Saludo: Hi Ana, / Hello, / Dear Mr Smith,",
          "Cuerpo: 2-4 frases claras, una idea cada una.",
          "Despedida: Best, / Thanks, / Kind regards,",
        ],
        examples: [
          {
            en: "Hi Tom,\nThanks for your message. I can meet on Friday at 5. See you then!\nBest,\nAna",
            es: "Un correo informal completo: saludo, respuesta clara y despedida.",
          },
        ],
      },
      {
        h: "Informal vs. formal",
        tldr: "El mismo mensaje cambia de ropa según a quién va.",
        compare: {
          left: {
            title: "Informal (amigos)",
            points: ["Hi Sam! / Hey", "contracciones: I'm, can't", "Thanks! / See ya!"],
          },
          right: {
            title: "Formal (trabajo, desconocidos)",
            points: ["Dear Mr/Ms…", "sin contracciones: I am, cannot", "Kind regards, / Sincerely,"],
          },
          note: "Ante la duda, tira a algo neutro y educado.",
        },
        tip: "Empieza cada oración con mayúscula y termina con punto. La 'I' (yo) siempre va en mayúscula.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Escribes a un profesor que no conoces bien. Saludo apropiado:",
        options: ["Hey!", "Dear Mr Smith,", "Yo,"],
        answer: 1,
        why: "En contexto formal se usa 'Dear + apellido'.",
      },
      {
        kind: "choice",
        q: "Despedida INFORMAL adecuada para un amigo:",
        options: ["Yours sincerely,", "Best regards,", "Thanks! See you!"],
        answer: 2,
        why: "Con amigos, un cierre relajado ('Thanks! See you!') encaja.",
      },
      {
        kind: "fill",
        q: "Corrige la mayúscula del pronombre 'yo': «tomorrow ___ will call you.»",
        accept: ["I"],
        hint: "Siempre en mayúscula.",
        why: "'I' se escribe siempre en mayúscula.",
      },
    ],
    activity: {
      title: "Dos versiones del mismo correo",
      steps: [
        "Escribe un correo corto invitando a alguien a un plan.",
        "Haz una versión informal (para un amigo) y otra formal (para un compañero de trabajo).",
        "Compara: ¿qué cambió en saludo, contracciones y despedida?",
      ],
    },
    selfCheck: [
      "Estructuro un correo: saludo, cuerpo, despedida.",
      "Ajusto el registro (informal vs. formal).",
      "Cuido mayúsculas, la 'I' y la puntuación.",
    ],
    summary: [
      "Todo correo: saludo → mensaje claro → despedida.",
      "El registro cambia según a quién escribes.",
      "Neutro y educado es la apuesta segura.",
    ],
  },

  "cul-normas": {
    intro:
      "Hablar bien no basta si rompes normas sociales sin querer. La cultura anglosajona valora la cortesía indirecta, el 'small talk' y ciertos hábitos que conviene conocer para no parecer brusco.",
    goal: "comportarte de forma socialmente adecuada en interacciones cotidianas.",
    sections: [
      {
        h: "La indirecta es cortesía",
        tldr: "En inglés se pide 'de lado', no de frente.",
        body: [
          "Pedir algo de forma directa puede sonar a orden. Las formas indirectas suenan educadas y son la norma.",
        ],
        examples: [
          { en: "Open the window. → Could you open the window, please?", es: "Abre la ventana → ¿Podrías abrir la ventana, por favor?" },
          { en: "I want water. → Could I have some water, please?", es: "Quiero agua → ¿Me podrías dar agua, por favor?" },
        ],
      },
      {
        h: "Small talk y '¿cómo estás?'",
        tldr: "Charlar de nada es parte del protocolo, no pérdida de tiempo.",
        bullets: [
          "'How are you?' suele ser un saludo: responde breve ('Good, thanks. You?').",
          "El clima es un tema seguro para romper el hielo.",
          "Gracias y 'please' se usan mucho más que en español.",
        ],
        tip: "Puntualidad, turnos de palabra y respetar la fila (queue) se valoran mucho en culturas anglosajonas.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Forma más apropiada de pedir ayuda a un desconocido:",
        options: ["Help me.", "Could you help me, please?", "You, help."],
        answer: 1,
        why: "La forma indirecta con 'could' + 'please' es la cortés.",
      },
      {
        kind: "choice",
        q: "Alguien te saluda con «How are you?». Normalmente esperas:",
        options: [
          "Un relato largo de tus problemas",
          "Una respuesta breve y devolver el saludo",
          "Silencio",
        ],
        answer: 1,
        why: "Suele ser un saludo social: 'Good, thanks. You?'.",
      },
      {
        kind: "choice",
        q: "Un tema seguro para 'small talk' con un desconocido es:",
        options: ["Su salario", "El clima", "Su religión"],
        answer: 1,
        why: "El clima es neutro y universalmente aceptado para romper el hielo.",
      },
    ],
    activity: {
      title: "Suaviza y saluda",
      steps: [
        "Toma 3 peticiones directas y reescríbelas de forma indirecta y cortés.",
        "Escribe un mini 'small talk' de 4 turnos empezando por el clima.",
        "Practícalo en voz alta con tono amable.",
      ],
    },
    selfCheck: [
      "Uso formas indirectas para pedir cosas.",
      "Respondo al 'How are you?' como saludo social.",
      "Sé iniciar small talk con temas seguros.",
    ],
    summary: [
      "La cortesía indirecta es la norma, no la excepción.",
      "'How are you?' suele ser saludo, no pregunta literal.",
      "Small talk, puntualidad y respetar la fila importan.",
    ],
  },

  "flu-automatizar": {
    intro:
      "Saber una regla no es lo mismo que usarla sin pensar. La fluidez nace de automatizar bloques de lenguaje mediante repetición activa. La técnica estrella se llama shadowing.",
    goal: "automatizar frases y sonar más natural y rápido al hablar.",
    sections: [
      {
        h: "Habla en bloques, no palabra por palabra",
        tldr: "Los nativos ensamblan trozos prefabricados ('chunks').",
        body: [
          "Frases como 'Do you know what I mean?' o 'I'd like to…' se dicen de un tirón. Aprenderlas enteras te hace más rápido que construirlas palabra por palabra.",
        ],
        examples: [
          { en: "I'd like to…", es: "Me gustaría…", note: "Un bloque para pedir con cortesía." },
          { en: "What do you think about…?", es: "¿Qué opinas de…?" },
        ],
      },
      {
        h: "Shadowing: imita como una sombra",
        tldr: "Repite a la vez que el audio, copiando ritmo y entonación.",
        bullets: [
          "Escucha una frase corta y repítela imitando el sonido, no la ortografía.",
          "Hazlo a la vez que el audio ('en sombra'), pisando su ritmo.",
          "Repite la misma frase hasta que salga sin esfuerzo.",
        ],
        tip: "Copia la MÚSICA del idioma: dónde sube y baja la voz, qué palabras se acentúan. No solo los sonidos sueltos.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Qué es 'shadowing'?",
        options: [
          "Traducir un texto en voz alta",
          "Repetir imitando el audio a la vez, copiando ritmo y entonación",
          "Leer en silencio muchas veces",
        ],
        answer: 1,
        why: "Shadowing = imitar el audio 'como una sombra', ritmo incluido.",
      },
      {
        kind: "choice",
        q: "Hablar en 'chunks' (bloques) te ayuda a…",
        options: [
          "Sonar más lento y cuidadoso",
          "Ganar velocidad y naturalidad",
          "Memorizar más reglas gramaticales",
        ],
        answer: 1,
        why: "Los bloques prefabricados se dicen de un tirón: más fluidez.",
      },
    ],
    activity: {
      title: "Shadowing de 60 segundos",
      steps: [
        "Elige un clip de audio claro de 20-30 segundos con transcripción.",
        "Escúchalo entero una vez. Luego repítelo 'en sombra' 3 veces imitando el ritmo.",
        "Grábate y compara tu ritmo y entonación con el original.",
      ],
    },
    selfCheck: [
      "Aprendo y uso bloques de lenguaje ('chunks').",
      "Practico shadowing copiando ritmo y entonación.",
      "Digo mis frases habituales sin construirlas palabra por palabra.",
    ],
    summary: [
      "La fluidez = automatizar bloques, no traducir en el momento.",
      "Shadowing: imita el audio a la vez, con su música.",
      "Copia ritmo y entonación, no solo los sonidos.",
    ],
  },

  "hito-a2": {
    intro:
      "¡Segundo hito alcanzado! A2 significa que ya te 'defiendes' en situaciones cotidianas simples. Este nodo repasa e integra todo el nivel antes de dar el gran salto a B1 (la independencia).",
    goal: "confirmar que dominas el nivel A2 antes de avanzar a B1.",
    sections: [
      {
        h: "¿Qué puedes hacer ya? (descriptores CEFR A2)",
        tldr: "Te desenvuelves en tareas sencillas y cotidianas.",
        bullets: [
          "Comprendes frases y expresiones frecuentes sobre temas cercanos (familia, compras, trabajo).",
          "Te comunicas en tareas simples y habituales que requieren un intercambio directo de información.",
          "Describes tu entorno, tu pasado y tus planes con frases sencillas.",
        ],
      },
      {
        h: "Repaso integrado",
        tldr: "Antes de B1, comprueba que el nivel A2 está firme.",
        body: [
          "Los pilares del A2 son: pasado simple (regular/irregular, did), futuro (will vs going to), conectores, ~2000 palabras con colocaciones, acento léxico y desenvolverte en situaciones cotidianas.",
        ],
        tip: "Si algo aún cojea, vuelve a esa hoja del árbol. Un A2 firme hace que B1 —donde empiezas a ser independiente— sea mucho más llevadero.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Repaso pasado: ¿cuál es correcta?",
        options: ["I didn't went.", "I didn't go.", "I don't went."],
        answer: 1,
        why: "did/didn't + verbo base: I didn't go.",
      },
      {
        kind: "choice",
        q: "«Look at the clouds! It ___ rain.»",
        options: ["will", "is going to", "rains"],
        answer: 1,
        why: "Predicción con evidencia → going to.",
      },
      {
        kind: "choice",
        q: "«I was tired, ___ I went to bed.»",
        options: ["because", "so", "but"],
        answer: 1,
        why: "Causa + resultado → 'so'.",
      },
      {
        kind: "fill",
        q: "Colocación correcta: «I need to ___ a decision.» (tomar)",
        accept: ["make"],
        hint: "make / do …",
        why: "'make a decision' es la colocación estándar.",
      },
      {
        kind: "choice",
        q: "Acento del verbo 'record':",
        options: ["REcord", "reCORD"],
        answer: 1,
        why: "Como verbo, el acento va al final: reCORD.",
      },
    ],
    activity: {
      title: "Autoevaluación A2",
      steps: [
        "Grábate 2 minutos contando qué hiciste ayer y qué planes tienes.",
        "Escucha: ¿usaste pasado correcto, futuro adecuado y conectores?",
        "Marca qué descriptores A2 dominas y cuáles repasar antes de B1.",
      ],
    },
    selfCheck: [
      "Cuento hechos pasados con el pasado simple.",
      "Hablo de planes y predicciones con will/going to.",
      "Uno ideas con conectores (because, so, but…).",
      "Me desenvuelvo en situaciones cotidianas (compras, direcciones).",
    ],
    summary: [
      "A2 = defenderte en lo cotidiano: pasado, futuro, conectores y ~2000 palabras.",
      "Repasa los pilares antes de avanzar.",
      "Un A2 firme hace de B1 (la independencia) un salto natural.",
    ],
  },

  // ─────────────────────────────── B1 · núcleo ───────────────────────────────
  "est-compensacion": {
    intro:
      "En B1 empiezas a ser independiente: quieres decir cosas más complejas de las que tu vocabulario permite. Las estrategias de compensación son los 'trucos' que usan los buenos aprendices para no callarse cuando les falta una palabra.",
    goal: "seguir comunicando aunque no sepas la palabra exacta.",
    sections: [
      {
        h: "Rodea la palabra que no sabes",
        tldr: "Si no sabes la palabra, descríbela: no te quedes en silencio.",
        body: [
          "Un aprendiz de B1 no sabe todas las palabras, pero sabe salir del paso. La paráfrasis (explicar con otras palabras) es la estrategia número uno.",
        ],
        examples: [
          { en: "I don't know the word… it's the thing you use to open a bottle.", es: "No sé la palabra… es la cosa que usas para abrir una botella (= corkscrew).", note: "Describes la función y te entienden." },
          { en: "It's a kind of… / It's similar to… / It's used for…", es: "Es una especie de… / Es parecido a… / Sirve para…", note: "Fórmulas para rodear." },
        ],
      },
      {
        h: "Pide ayuda dentro de la conversación",
        tldr: "El interlocutor es tu diccionario vivo.",
        bullets: [
          "'What's the word for…?' — pides la palabra que te falta.",
          "'How do you say … in English?' — cuando la tienes en español.",
          "'Sorry, do you mean…?' — confirmas que entendiste.",
        ],
        tip: "Los mejores aprendices no son los que más saben, sino los que más se atreven a comunicar con lo que tienen. Arriésgate.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Olvidaste la palabra 'umbrella'. ¿Qué haces?",
        options: [
          "Te callas hasta recordarla",
          "La describes: 'the thing you use when it rains'",
          "Cambias de idioma",
        ],
        answer: 1,
        why: "Parafrasear (describir la función) mantiene viva la comunicación.",
      },
      {
        kind: "choice",
        q: "Necesitas una palabra que no sabes en inglés. Preguntas:",
        options: ["What's the word for…?", "Goodbye.", "I don't understand."],
        answer: 0,
        why: "'What's the word for…?' pide justo la palabra que te falta.",
      },
    ],
    activity: {
      title: "Describe 5 objetos sin nombrarlos",
      steps: [
        "Elige 5 objetos cotidianos.",
        "Descríbelos en inglés SIN decir su nombre (función, forma, uso).",
        "Pide a alguien (o adivina tú) qué objeto es.",
      ],
    },
    selfCheck: [
      "Parafraseo cuando no sé una palabra.",
      "Pido la palabra o una aclaración dentro de la conversación.",
      "No me bloqueo ni cambio de idioma al primer obstáculo.",
    ],
    summary: [
      "Comunicar > saberlo todo: rodea la palabra que falta.",
      "Paráfrasis + pedir ayuda son tus dos herramientas.",
      "Atreverte es lo que más acelera tu progreso.",
    ],
  },

  "fon-ritmo": {
    intro:
      "El español es 'silábico' (cada sílaba dura casi lo mismo). El inglés es 'acentual': las sílabas fuertes marcan el ritmo y las débiles se comprimen. Entender esto es lo que hace que dejes de sonar 'a español' y empieces a entender el habla rápida.",
    goal: "hablar y entender con el ritmo natural del inglés (habla conectada).",
    sections: [
      {
        h: "El ritmo lo marcan las sílabas fuertes",
        tldr: "Las palabras con significado suenan fuertes; el resto se aplasta.",
        body: [
          "En una frase, sustantivos, verbos y adjetivos se acentúan; artículos, preposiciones y auxiliares se debilitan. El tiempo entre golpes fuertes es casi constante.",
        ],
        examples: [
          {
            en: "I'll GO to the SHOP and BUY some BREAD.",
            es: "Las mayúsculas marcan los golpes fuertes; lo demás se comprime.",
          },
        ],
      },
      {
        h: "Formas débiles y encadenamiento (linking)",
        tldr: "Las palabras se pegan y las funcionales se reducen.",
        compare: {
          left: {
            title: "Forma fuerte (aislada)",
            points: ["to /tuː/", "and /ænd/", "can /kæn/", "of /ɒv/"],
          },
          right: {
            title: "Forma débil (en la frase)",
            points: ["to /tə/", "and /ən/", "can /kən/", "of /əv/"],
          },
          note: "Por eso 'fish and chips' suena 'fish-en-chips'.",
        },
        more: [
          "Linking consonante→vocal: 'an apple' suena 'a-napple'; 'turn it on' suena 'tur-ni-ton'.",
          "No intentes pronunciar cada palabra por separado: el habla natural va encadenada.",
        ],
        tip: "Escuchar te resultará más fácil cuando ACEPTES que 'want to' suena 'wanna' y 'going to' suena 'gonna'. No es descuido: es el ritmo real.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "En «I can SWIM», la palabra 'can' normalmente…",
        options: ["Suena fuerte /kæn/", "Se reduce a /kən/", "Desaparece del todo"],
        answer: 1,
        why: "'can' afirmativo va en forma débil /kən/; el golpe fuerte es 'swim'.",
      },
      {
        kind: "choice",
        q: "¿Por qué 'an apple' suena como 'a-napple'?",
        options: [
          "Por un error de pronunciación",
          "Por el encadenamiento (linking) consonante→vocal",
          "Porque la 'n' es muda",
        ],
        answer: 1,
        why: "La consonante final se une a la vocal siguiente: linking natural.",
      },
      {
        kind: "choice",
        q: "El ritmo del inglés se basa en…",
        options: [
          "Que cada sílaba dure lo mismo",
          "Golpes en las sílabas fuertes, con las débiles comprimidas",
          "Hablar siempre muy lento",
        ],
        answer: 1,
        why: "El inglés es de ritmo acentual (stress-timed).",
      },
    ],
    activity: {
      title: "Golpea el ritmo",
      steps: [
        "Elige una frase de 8-10 palabras de un audio.",
        "Da una palmada en cada sílaba FUERTE mientras la dices.",
        "Comprime lo demás entre palmadas. Compara con el audio original.",
      ],
    },
    selfCheck: [
      "Acentúo las palabras de contenido y comprimo las funcionales.",
      "Reconozco formas débiles (to /tə/, and /ən/, can /kən/).",
      "Encadeno las palabras en vez de separarlas.",
    ],
    summary: [
      "Inglés = ritmo acentual: golpes fuertes a intervalos regulares.",
      "Las palabras funcionales se reducen (formas débiles).",
      "El habla va encadenada: aceptar 'gonna/wanna' mejora tu escucha.",
    ],
  },

  "voc-3000": {
    intro:
      "Alcanzar 3.000–4.000 familias de palabras es el umbral en que puedes leer y escuchar contenido nativo cómodo (cubre ~95% de un texto general). El foco ahora es la precisión: colocaciones, matices y palabras que se parecen pero engañan.",
    goal: "manejar ~3-4k palabras con precisión de colocación y matiz.",
    sections: [
      {
        h: "Colocaciones más finas",
        tldr: "A este nivel importa la palabra EXACTA que acompaña.",
        examples: [
          { en: "heavy rain / strong wind", es: "lluvia fuerte / viento fuerte", note: "No 'strong rain' ni 'heavy wind'." },
          { en: "make an effort · pay attention · take a risk", es: "hacer un esfuerzo · prestar atención · correr un riesgo" },
        ],
      },
      {
        h: "Falsos amigos (¡cuidado!)",
        tldr: "Se parecen al español pero significan otra cosa.",
        compare: {
          left: {
            title: "Parece… (español)",
            points: ["actually ≠ actualmente", "library ≠ librería", "assist ≠ asistir a", "sensible ≠ sensible"],
          },
          right: {
            title: "…pero significa (inglés)",
            points: ["actually = en realidad", "library = biblioteca", "assist = ayudar", "sensible = sensato"],
          },
          note: "Actualmente = currently; librería = bookshop; asistir a = attend; sensible = sensitive.",
        },
        tip: "Cuando una palabra 'suena' a español, desconfía un segundo y comprueba: los falsos amigos son una fuente típica de errores en B1.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "«There was ___ rain last night.» (mucha lluvia)",
        options: ["strong", "heavy", "big"],
        answer: 1,
        why: "Colocación fija: 'heavy rain' (no 'strong rain').",
      },
      {
        kind: "choice",
        q: "'Actually' significa…",
        options: ["actualmente", "en realidad", "actualizar"],
        answer: 1,
        why: "Falso amigo: 'actually' = en realidad. 'Actualmente' = currently.",
      },
      {
        kind: "fill",
        q: "«I go to the ___ to borrow books.» (biblioteca)",
        accept: ["library"],
        hint: "No es 'librería' (bookshop).",
        why: "'library' = biblioteca. 'librería' = bookshop.",
      },
    ],
    activity: {
      title: "Cazador de colocaciones",
      steps: [
        "Lee un texto corto nativo (noticia, artículo).",
        "Subraya 5 colocaciones (adjetivo+nombre, verbo+nombre).",
        "Anótalas en tu SRS como bloque, no como palabras sueltas.",
      ],
    },
    selfCheck: [
      "Elijo la colocación exacta (heavy rain, make an effort).",
      "Detecto falsos amigos antes de usarlos.",
      "Aprendo vocabulario nuevo en bloques y con matiz.",
    ],
    summary: [
      "3-4k palabras = leer/escuchar contenido nativo con comodidad.",
      "La precisión de colocación distingue B1 de A2.",
      "Ojo con los falsos amigos (actually, library, assist).",
    ],
  },

  "gra-aspecto": {
    intro:
      "Aquí está el concepto que más cuesta a los hispanohablantes: cuándo usar el present perfect ('I have done') y cuándo el past simple ('I did'). En español los límites son otros, así que hay que reaprender la lógica, no traducir.",
    goal: "distinguir present perfect de past simple sin traducir del español.",
    sections: [
      {
        h: "La pregunta clave: ¿importa CUÁNDO?",
        tldr: "Past simple = momento terminado; present perfect = conexión con el ahora.",
        body: [
          "Si el momento pasado está terminado y definido (yesterday, in 2019, last week), usas past simple. Si lo que importa es el resultado, la experiencia o un tiempo aún abierto, usas present perfect.",
        ],
        compare: {
          left: {
            title: "Past Simple — I did",
            points: [
              "Momento terminado y concreto",
              "Señales: yesterday, ago, last week, in 2020",
              "I saw her yesterday.",
            ],
          },
          right: {
            title: "Present Perfect — I have done",
            points: [
              "Experiencia / resultado / tiempo abierto",
              "Señales: ever, never, just, already, yet, so far",
              "I have seen that film. (en mi vida)",
            ],
          },
          note: "Regla de oro: con tiempo terminado NUNCA uses present perfect.",
        },
      },
      {
        h: "for y since (desde cuándo)",
        tldr: "El present perfect mide lo que empezó antes y sigue ahora.",
        examples: [
          { en: "I have lived here for five years.", es: "Vivo aquí desde hace cinco años (y sigo).", note: "for + duración." },
          { en: "I have known her since 2018.", es: "La conozco desde 2018.", note: "since + punto de inicio." },
        ],
        more: [
          "for + periodo (for two hours, for a long time); since + momento (since Monday, since I was a child).",
          "Ojo: 'I live here since 2018' es un error típico; lo correcto es 'I have lived here since 2018'.",
        ],
        tip: "Error clásico: 'I have seen her yesterday'. Como 'yesterday' es tiempo terminado → 'I saw her yesterday'.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "«I ___ to Paris in 2019.» (año terminado)",
        options: ["have been", "went", "have gone"],
        answer: 1,
        why: "Tiempo terminado y concreto (in 2019) → past simple: went.",
      },
      {
        kind: "choice",
        q: "«___ you ever ___ sushi?» (experiencia en tu vida)",
        options: ["Did / eat", "Have / eaten", "Do / eat"],
        answer: 1,
        why: "Experiencia sin tiempo concreto → present perfect: Have you ever eaten…?",
      },
      {
        kind: "fill",
        q: "Completa con for/since: «I've studied English ___ three years.»",
        accept: ["for"],
        hint: "¿duración o punto de inicio?",
        why: "'for' + duración (three years).",
      },
      {
        kind: "choice",
        q: "¿Cuál es correcta?",
        options: [
          "I have finished the report yesterday.",
          "I finished the report yesterday.",
          "I finish the report yesterday.",
        ],
        answer: 1,
        why: "Con 'yesterday' (tiempo terminado) va past simple: I finished.",
      },
    ],
    activity: {
      title: "Tu vida vs. tu ayer",
      steps: [
        "Escribe 3 experiencias de tu vida con present perfect (I have…, ever/never).",
        "Escribe 3 hechos concretos del pasado con past simple (ago, last…, in…).",
        "Añade una frase con for y otra con since.",
      ],
    },
    selfCheck: [
      "Uso past simple con tiempos terminados (yesterday, in 2019).",
      "Uso present perfect para experiencia/resultado/tiempo abierto.",
      "Distingo for (duración) de since (punto de inicio).",
      "No mezclo present perfect con expresiones de tiempo terminado.",
    ],
    summary: [
      "¿El momento está terminado y definido? → past simple.",
      "¿Cuenta la experiencia o el resultado ahora? → present perfect.",
      "for + duración; since + punto de inicio.",
      "Nunca present perfect + yesterday/ago/last.",
    ],
  },

  "gra-condicional": {
    intro:
      "Los condicionales te dejan hablar de posibilidades, consecuencias e hipótesis: 'si pasa esto, pasa aquello'. Son una escalera de tres peldaños, de lo más real a lo más imaginario. Dominarlos multiplica lo que puedes expresar.",
    goal: "expresar condiciones reales e hipotéticas con la estructura correcta.",
    sections: [
      {
        h: "La escalera de los condicionales",
        tldr: "Tres tipos según cuán real o imaginaria sea la condición.",
        compare: {
          left: {
            title: "Cero y Primero (reales)",
            points: [
              "0: verdad general — If you heat ice, it melts.",
              "1: futuro posible — If it rains, I will stay home.",
              "Estructura 1: If + presente, will + base.",
            ],
          },
          right: {
            title: "Segundo (hipotético)",
            points: [
              "Imaginario/improbable — If I won the lottery, I would travel.",
              "Estructura: If + pasado, would + base.",
              "Presente o futuro irreal, no pasado real.",
            ],
          },
          note: "Cuanto más 'atrás' pones el verbo, más irreal es la hipótesis.",
        },
      },
      {
        h: "Detalles que marcan la diferencia",
        tldr: "El segundo condicional usa 'were' para todos y no lleva 'would' en el 'if'.",
        examples: [
          { en: "If I were you, I would apologize.", es: "Si yo fuera tú, me disculparía.", note: "'were' con todas las personas en el 2º condicional." },
          { en: "If it rains, we will cancel. (real)  vs  If it rained, we would cancel. (hipotético)", es: "Compara la posibilidad real con la hipótesis." },
        ],
        more: [
          "Nunca 'if' + would: se dice 'If I had money' (no 'If I would have').",
          "La coma va cuando la frase empieza por 'if'; si va al final, sin coma: 'I would travel if I won the lottery.'",
        ],
        tip: "Piensa en la probabilidad: ¿puede pasar de verdad? → 1º condicional (will). ¿Es un sueño o improbable? → 2º condicional (would).",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "«If it ___ tomorrow, we will cancel the trip.» (posible)",
        options: ["rains", "rained", "will rain"],
        answer: 0,
        why: "1er condicional (real): If + presente, will + base.",
      },
      {
        kind: "choice",
        q: "«If I ___ rich, I would buy a house.» (hipótesis)",
        options: ["am", "was/were", "will be"],
        answer: 1,
        why: "2º condicional: If + pasado (were/was), would + base. Se prefiere 'were'.",
      },
      {
        kind: "choice",
        q: "¿Cuál es correcta?",
        options: [
          "If I would have time, I would help.",
          "If I had time, I would help.",
          "If I have time, I would help.",
        ],
        answer: 1,
        why: "En el 'if' no va 'would': If I had time, I would help.",
      },
      {
        kind: "fill",
        q: "Verdad general (0 condicional): «If you heat water, it ___ .» (hervir)",
        accept: ["boils"],
        hint: "Presente simple, verdad de siempre.",
        why: "Condicional cero: If + presente, presente.",
      },
    ],
    activity: {
      title: "Real vs. sueño",
      steps: [
        "Escribe 2 planes reales para esta semana con 1er condicional (If…, will).",
        "Escribe 2 hipótesis imaginarias con 2º condicional (If…, would).",
        "Escribe 1 frase con 'If I were you…' dando un consejo.",
      ],
    },
    selfCheck: [
      "Uso el 1er condicional para posibilidades reales (will).",
      "Uso el 2º condicional para hipótesis (would + pasado).",
      "Digo 'If I were you' y evito 'if + would'.",
      "Coloco la coma según el orden de la frase.",
    ],
    summary: [
      "0 = verdad general; 1 = futuro posible (will); 2 = hipótesis (would).",
      "Más 'atrás' el verbo = más irreal.",
      "En el 'if' nunca va 'would'; usa 'were' para todos en el 2º.",
    ],
  },

  "gra-subordinacion": {
    intro:
      "Para que tus frases dejen de ser cortas y sueltas, necesitas unirlas con oraciones de relativo ('the man WHO called', 'the city WHERE I live'). Añaden información sin empezar una frase nueva y suben tu nivel de inmediato.",
    goal: "unir ideas con oraciones de relativo (who, which, that, where, whose).",
    sections: [
      {
        h: "Los pronombres relativos",
        tldr: "Cada uno introduce información sobre un tipo de palabra.",
        bullets: [
          "who → personas · which → cosas · that → personas o cosas (informal)",
          "where → lugares · when → tiempos · whose → posesión (cuyo)",
        ],
        examples: [
          { en: "The woman who lives next door is a doctor.", es: "La mujer que vive al lado es doctora." },
          { en: "This is the house where I grew up.", es: "Esta es la casa donde crecí." },
          { en: "That's the student whose project won.", es: "Ese es el estudiante cuyo proyecto ganó." },
        ],
      },
      {
        h: "Especificativas vs. explicativas (¡la coma cambia todo!)",
        tldr: "Sin comas: información esencial. Con comas: información extra.",
        compare: {
          left: {
            title: "Especificativa (sin comas)",
            points: [
              "Identifica de cuál hablas: es esencial.",
              "Admite 'that' y se puede omitir si es objeto.",
              "The book that I bought is great.",
            ],
          },
          right: {
            title: "Explicativa (con comas)",
            points: [
              "Añade un dato extra que puedes quitar.",
              "NO admite 'that'; no se omite el pronombre.",
              "My brother, who lives in Paris, is a chef.",
            ],
          },
          note: "Prueba: si puedes quitar la parte y la frase sigue teniendo sentido, van comas.",
        },
        more: [
          "En especificativas de objeto, el relativo se puede omitir: 'The book (that) I bought'.",
          "En explicativas nunca se usa 'that' ni se omite el pronombre.",
        ],
        tip: "Piensa la coma como un paréntesis: si la información es un 'por cierto…', va entre comas (explicativa).",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "«The man ___ called you is my boss.» (persona)",
        options: ["which", "who", "where"],
        answer: 1,
        why: "Para personas se usa 'who' (o 'that' informal).",
      },
      {
        kind: "choice",
        q: "«This is the restaurant ___ we met.» (lugar)",
        options: ["which", "who", "where"],
        answer: 2,
        why: "Para lugares se usa 'where'.",
      },
      {
        kind: "choice",
        q: "¿Cuál es una explicativa correcta (información extra)?",
        options: [
          "My mother that is a nurse works nights.",
          "My mother, who is a nurse, works nights.",
          "My mother who is a nurse, works nights.",
        ],
        answer: 1,
        why: "Explicativa: comas a ambos lados y 'who' (nunca 'that').",
      },
      {
        kind: "fill",
        q: "Posesión: «She's the writer ___ books I love.» (cuyo/cuya)",
        accept: ["whose"],
        hint: "Relativo de posesión.",
        why: "'whose' = cuyo/cuya (posesión).",
      },
    ],
    activity: {
      title: "Une con relativas",
      steps: [
        "Escribe 4 pares de frases donde la segunda describa algo de la primera.",
        "Únelas con who/which/that/where/whose.",
        "Marca cuáles son especificativas (sin comas) y cuáles explicativas (con comas).",
      ],
    },
    selfCheck: [
      "Elijo el relativo correcto (who/which/that/where/whose).",
      "Distingo especificativas (sin comas) de explicativas (con comas).",
      "Omito el relativo objeto en especificativas cuando procede.",
      "No uso 'that' en las explicativas.",
    ],
    summary: [
      "Relativos: who (personas), which (cosas), that (ambos), where (lugares), whose (posesión).",
      "Sin comas = esencial; con comas = información extra.",
      "En explicativas, nunca 'that' ni omisión del pronombre.",
    ],
  },

  "aud-podcasts": {
    intro:
      "En B1 tu escucha da un salto: de audio hecho para estudiantes a audio graduado y podcasts para aprendices intermedios, y de ahí hacia contenido más natural. La estrategia cambia: ya no cazas datos sueltos, sigues un hilo largo.",
    goal: "seguir el hilo de audio graduado y podcasts para nivel intermedio.",
    sections: [
      {
        h: "De escucha intensiva a extensiva",
        tldr: "Combina escuchar mucho (por placer) con escuchar a fondo (para aprender).",
        compare: {
          left: {
            title: "Extensiva (cantidad)",
            points: [
              "Mucho input agradable, sin parar.",
              "Entrenas el oído y el ritmo.",
              "No pasa nada si pierdes detalles.",
            ],
          },
          right: {
            title: "Intensiva (profundidad)",
            points: [
              "Un fragmento corto, a fondo.",
              "Con transcripción, repitiendo.",
              "Anotas y aprendes lo nuevo.",
            ],
          },
          note: "Ambas se complementan: volumen + precisión.",
        },
      },
      {
        h: "Cómo elegir el nivel correcto",
        tldr: "Debe costarte un poco, no ahogarte (input i+1).",
        bullets: [
          "Empieza con podcasts para aprendices (velocidad y vocabulario controlados).",
          "Sube cuando entiendas ~80% sin transcripción.",
          "Reescucha: la 2ª y 3ª vez entiendes mucho más.",
        ],
        tip: "Escucha sobre temas que YA conoces: el conocimiento previo rellena los huecos de idioma.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "La escucha 'extensiva' consiste en…",
        options: [
          "Analizar un fragmento corto con transcripción",
          "Escuchar mucho contenido agradable sin obsesionarte con los detalles",
          "Memorizar diálogos",
        ],
        answer: 1,
        why: "Extensiva = volumen de input agradable; entrena oído y ritmo.",
      },
      {
        kind: "choice",
        q: "¿Cuándo subir de nivel de podcast?",
        options: [
          "Cuando entiendes el 100% sin esfuerzo",
          "Cuando entiendes ~80% sin transcripción",
          "Cuando no entiendes casi nada, para forzarte",
        ],
        answer: 1,
        why: "El nivel ideal (i+1) te reta un poco; ~80% de comprensión es buena señal.",
      },
    ],
    activity: {
      title: "Un podcast, dos escuchas",
      steps: [
        "Elige un episodio corto de un podcast para aprendices intermedios.",
        "Escúchalo entero una vez por placer (extensiva).",
        "Vuelve a un minuto con transcripción y anota 5 expresiones nuevas (intensiva).",
      ],
    },
    selfCheck: [
      "Combino escucha extensiva e intensiva.",
      "Elijo material que me reta sin ahogarme (~80% comprensible).",
      "Sigo el hilo de un audio largo sin traducir.",
    ],
    summary: [
      "Extensiva (cantidad) + intensiva (profundidad) se complementan.",
      "Elige nivel i+1: te cuesta un poco, no te ahoga.",
      "El tema conocido rellena los huecos de idioma.",
    ],
  },

  "lec-extensiva": {
    intro:
      "La lectura extensiva —leer mucho y fácil, por placer— es una de las herramientas más potentes y subestimadas para adquirir vocabulario y gramática de forma natural. En B1, los graded readers son tu mejor aliado.",
    goal: "leer libros graduados con fluidez y disfrute, adquiriendo lengua sin esfuerzo consciente.",
    sections: [
      {
        h: "Leer fácil, leer mucho",
        tldr: "El secreto no es leer difícil, sino leer mucho y cómodo.",
        body: [
          "Si en una página hay más de 2-3 palabras que no entiendes, el libro es demasiado difícil para lectura extensiva. Baja de nivel: el objetivo es fluidez, no sufrimiento.",
        ],
        examples: [
          { en: "Graded readers", es: "Libros adaptados por niveles (A1, A2, B1…), ideales para leer sin diccionario." },
        ],
      },
      {
        h: "No traduzcas, no pares",
        tldr: "Deduce por contexto y sigue avanzando.",
        bullets: [
          "Elige temas que te enganchen: la motivación sostiene el hábito.",
          "Usa el diccionario solo si la palabra se repite y bloquea el sentido.",
          "Lee un poco cada día: el volumen es lo que hace el efecto.",
        ],
        tip: "La lectura extensiva funciona porque ves las palabras frecuentes muchísimas veces en contexto real: eso fija el significado mejor que memorizar listas.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Para lectura extensiva, un libro es adecuado si por página hay…",
        options: [
          "10-15 palabras nuevas",
          "2-3 palabras nuevas como mucho",
          "Ninguna palabra nueva jamás",
        ],
        answer: 1,
        why: "Con 2-3 palabras nuevas por página lees con fluidez y aún aprendes.",
      },
      {
        kind: "choice",
        q: "Encuentras una palabra desconocida. Lo ideal en lectura extensiva es:",
        options: [
          "Parar y buscarla siempre",
          "Deducir por contexto y seguir (buscarla solo si se repite y bloquea)",
          "Abandonar el libro",
        ],
        answer: 1,
        why: "Mantener el flujo y deducir es la esencia de la lectura extensiva.",
      },
    ],
    activity: {
      title: "Empieza un graded reader",
      steps: [
        "Elige un graded reader de tu nivel (o uno por debajo) sobre un tema que te guste.",
        "Lee 15 minutos sin diccionario, deduciendo por contexto.",
        "Al terminar, anota solo 3 palabras que se repitieron y te parecieron útiles.",
      ],
    },
    selfCheck: [
      "Elijo lecturas fáciles y agradables (pocas palabras nuevas).",
      "Deduzco por contexto sin parar a traducir.",
      "Mantengo un hábito de lectura diaria.",
    ],
    summary: [
      "Lee mucho y fácil: el volumen adquiere lengua sin esfuerzo consciente.",
      "2-3 palabras nuevas por página es el punto justo.",
      "No traduzcas ni pares: deduce y disfruta.",
    ],
  },

  "ora-narrar": {
    intro:
      "El aprendiz B1 ya no solo responde: cuenta. Narrar una experiencia, una anécdota o una película exige encadenar hechos en el tiempo con soltura. Es donde tu habla empieza a sonar 'de verdad'.",
    goal: "narrar experiencias y contar historias con secuencia y tiempos correctos.",
    sections: [
      {
        h: "Ordena los hechos en el tiempo",
        tldr: "Los conectores de secuencia guían al que escucha.",
        bullets: [
          "First / Then / After that / Later / Finally — para ordenar.",
          "One day… / Suddenly… / In the end… — para dar vida a la anécdota.",
        ],
        examples: [
          { en: "First we arrived, then we had lunch, and after that we explored the city.", es: "Primero llegamos, luego comimos y después exploramos la ciudad." },
        ],
      },
      {
        h: "Pasado + fondo: simple vs. continuo",
        tldr: "El pasado continuo pinta el 'decorado'; el simple, la acción.",
        compare: {
          left: {
            title: "Past continuous (fondo)",
            points: [
              "La escena en marcha: It was raining…",
              "Acción larga interrumpida: I was cooking when…",
            ],
          },
          right: {
            title: "Past simple (acción)",
            points: [
              "El hecho puntual: …the phone rang.",
              "Secuencia de acciones: I opened, I saw, I left.",
            ],
          },
          note: "«I was walking home when I saw an old friend.» — fondo + acción.",
        },
        tip: "Cuenta primero, corrige después. Si te paras a pulir cada verbo, pierdes el hilo. La fluidez narrativa se entrena narrando.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "«I ___ (walk) home when it started to rain.» (fondo en marcha)",
        options: ["walked", "was walking", "walk"],
        answer: 1,
        why: "Acción de fondo en curso → pasado continuo: was walking.",
      },
      {
        kind: "choice",
        q: "Conector para CERRAR una historia:",
        options: ["First", "Suddenly", "In the end"],
        answer: 2,
        why: "'In the end' / 'Finally' cierran la narración.",
      },
      {
        kind: "fill",
        q: "«I was reading when the phone ___ (ring).» (acción puntual)",
        accept: ["rang"],
        hint: "Irregular, past simple.",
        why: "La acción puntual que interrumpe va en past simple: rang.",
      },
    ],
    activity: {
      title: "Cuenta una anécdota",
      steps: [
        "Piensa en algo que te pasó (gracioso, raro, memorable).",
        "Cuéntalo en voz alta en 1 minuto usando conectores de secuencia.",
        "Incluye al menos una frase con 'was/were + -ing' + past simple (fondo + acción).",
      ],
    },
    selfCheck: [
      "Ordeno los hechos con conectores de secuencia.",
      "Combino pasado continuo (fondo) y simple (acción).",
      "Narro una experiencia de 1 minuto sin bloquearme.",
    ],
    summary: [
      "Secuencia: first / then / after that / finally.",
      "Continuo = decorado; simple = acción y secuencia.",
      "Narra fluido primero; pule después.",
    ],
  },

  "esc-textos": {
    intro:
      "Escribir en B1 es producir textos conectados y con estructura: un correo de opinión, una reseña, una carta. Ya no son frases sueltas: es un texto con introducción, desarrollo y cierre que se sostiene solo.",
    goal: "escribir textos conectados de opinión con estructura clara.",
    sections: [
      {
        h: "Estructura de párrafos",
        tldr: "Un texto claro tiene principio, cuerpo y final.",
        bullets: [
          "Introducción: presenta el tema y tu postura.",
          "Cuerpo: una idea por párrafo, con ejemplos o razones.",
          "Conclusión: resume y cierra.",
        ],
      },
      {
        h: "Conectores de discurso",
        tldr: "Guían al lector por tu razonamiento.",
        examples: [
          { en: "In my opinion, … / I think that…", es: "Para introducir tu postura." },
          { en: "For example, … / For instance, …", es: "Para ejemplificar." },
          { en: "However, … / On the other hand, …", es: "Para contrastar." },
          { en: "In conclusion, … / To sum up, …", es: "Para cerrar." },
        ],
        more: [
          "No empieces frases con 'And'/'But' en textos formales: usa 'In addition' / 'However'.",
          "Varía los conectores: repetir 'also' cinco veces empobrece el texto.",
        ],
        tip: "Antes de escribir, haz un mini-esquema de 3 puntos. Un texto planificado se lee mucho mejor que uno improvisado.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Conector para INTRODUCIR un ejemplo:",
        options: ["However", "For example", "In conclusion"],
        answer: 1,
        why: "'For example / For instance' introducen ejemplos.",
      },
      {
        kind: "choice",
        q: "Conector para CONTRASTAR dos ideas:",
        options: ["Therefore", "However", "Firstly"],
        answer: 1,
        why: "'However / On the other hand' marcan contraste.",
      },
      {
        kind: "fill",
        q: "Para cerrar un texto de opinión: «___ conclusion, …» (en)",
        accept: ["in"],
        hint: "In ___ conclusion.",
        why: "'In conclusion' cierra el texto.",
      },
    ],
    activity: {
      title: "Texto de opinión (120 palabras)",
      steps: [
        "Elige un tema polémico simple (¿mascotas en el trabajo? ¿colegio en casa?).",
        "Haz un esquema: intro (postura), 2 razones con ejemplo, conclusión.",
        "Escríbelo usando al menos 4 conectores de discurso distintos.",
      ],
    },
    selfCheck: [
      "Estructuro el texto en introducción, cuerpo y conclusión.",
      "Uso conectores de discurso variados (however, for example, in conclusion).",
      "Planifico con un esquema antes de escribir.",
    ],
    summary: [
      "Texto = introducción + cuerpo (una idea por párrafo) + conclusión.",
      "Los conectores de discurso guían al lector.",
      "Planificar en 3 puntos mejora cualquier texto.",
    ],
  },

  "cul-registro": {
    intro:
      "En B1 ya no basta con ser correcto: hay que ser adecuado. El mismo mensaje se dice distinto a un amigo, a un jefe o en un examen. Elegir el registro correcto es una competencia tan importante como la gramática.",
    goal: "adaptar el registro (formal/informal) al contexto y al interlocutor.",
    sections: [
      {
        h: "Formal, neutro e informal",
        tldr: "Cambian el vocabulario, las contracciones y las fórmulas.",
        compare: {
          left: {
            title: "Informal",
            points: [
              "Contracciones: I'm, don't, wanna",
              "Phrasal verbs: find out, put off",
              "Kids, stuff, guys",
            ],
          },
          right: {
            title: "Formal",
            points: [
              "Formas completas: I am, do not",
              "Verbos latinos: discover, postpone",
              "Children, items, colleagues",
            ],
          },
          note: "Muchos phrasal verbs tienen un equivalente formal de una palabra.",
        },
      },
      {
        h: "Cortesía indirecta según el contexto",
        tldr: "Cuanto más formal o delicado, más indirecto.",
        examples: [
          { en: "Give me the report. → Could you send me the report when you have a moment?", es: "Directo → cortés y adecuado en el trabajo." },
          { en: "I want to complain. → I'm afraid I'd like to make a complaint.", es: "Suavizar con 'I'm afraid' / 'I'd like to'." },
        ],
        tip: "Ante la duda con un desconocido o en el trabajo, tira a neutro-formal: es más fácil relajar el tono después que recuperar una mala primera impresión.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Versión FORMAL de 'find out':",
        options: ["get", "discover", "check out"],
        answer: 1,
        why: "'discover' es el equivalente formal de 'find out'.",
      },
      {
        kind: "choice",
        q: "Escribes a un cliente. ¿Qué frase es adecuada?",
        options: [
          "Send me the money ASAP.",
          "Could you please process the payment when possible?",
          "Gimme the cash.",
        ],
        answer: 1,
        why: "Registro formal + cortesía indirecta: 'Could you please…?'.",
      },
      {
        kind: "choice",
        q: "Versión FORMAL de 'postpone the meeting' frente a 'put off':",
        options: ["put off = formal", "postpone = formal", "son idénticos en registro"],
        answer: 1,
        why: "'postpone' es formal; 'put off' es el phrasal informal.",
      },
    ],
    activity: {
      title: "Sube y baja el registro",
      steps: [
        "Escribe un mensaje informal a un amigo pidiéndole un favor.",
        "Reescríbelo en versión formal para un compañero de trabajo.",
        "Marca qué cambiaste: contracciones, phrasal verbs, fórmulas de cortesía.",
      ],
    },
    selfCheck: [
      "Reconozco vocabulario informal vs. formal.",
      "Sustituyo phrasal verbs por su equivalente formal cuando conviene.",
      "Ajusto la cortesía a la formalidad del contexto.",
    ],
    summary: [
      "Ser correcto no basta: hay que ser adecuado.",
      "Formal ↔ informal cambia vocabulario, contracciones y fórmulas.",
      "Con desconocidos o en el trabajo, tira a neutro-formal.",
    ],
  },

  "flu-conversacional": {
    intro:
      "La fluidez conversacional no es hablar rápido: es mantener una conversación sin bloqueos, con reacciones naturales y sin traducir en tu cabeza. En B1 empiezas a sentir que 'sigues el ritmo' de una charla real.",
    goal: "mantener una conversación fluida reaccionando de forma natural.",
    sections: [
      {
        h: "Reacciona, no solo respondas",
        tldr: "Las respuestas cortas y las reacciones mantienen viva la charla.",
        examples: [
          { en: "Really? / That's great! / Oh no! / Me too. / So do I.", es: "Reacciones que muestran que escuchas y devuelven energía." },
          { en: "— I love jazz. — Do you? So do I!", es: "Respuestas eco (do you? / so do I) suenan muy naturales." },
        ],
      },
      {
        h: "Fillers: ganar tiempo sin callarte",
        tldr: "Pequeñas muletillas te dan un segundo para pensar en inglés.",
        bullets: [
          "Well… / You know… / Let me think… / Actually…",
          "I mean… — para reformular lo que acabas de decir.",
          "…, right? / …, you know? — para mantener el contacto.",
        ],
        more: [
          "Los fillers son naturales y los usan los nativos: no son 'errores'.",
          "Abusar de ellos suena inseguro; úsalos para respirar, no en cada frase.",
        ],
        tip: "Deja de traducir del español: piensa en bloques que ya dominas y lánzalos. La fluidez es un hábito, y se entrena hablando mucho, no estudiando más gramática.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "— «I went to Japan last year.» Reacción natural:",
        options: ["Yes.", "Oh really? That's amazing!", "I don't understand."],
        answer: 1,
        why: "Una reacción ('Oh really? That's amazing!') muestra interés y da fluidez.",
      },
      {
        kind: "choice",
        q: "— «I love coffee.» — «___ I!» (yo también)",
        options: ["So do", "So am", "Too do"],
        answer: 0,
        why: "'So do I' = yo también (con verbos que usan 'do').",
      },
      {
        kind: "choice",
        q: "Los 'fillers' (well…, you know…) sirven para…",
        options: [
          "Rellenar sin decir nada útil, y son errores",
          "Ganar un segundo para pensar sin cortar la conversación",
          "Sonar más formal",
        ],
        answer: 1,
        why: "Son naturales y te dan tiempo para pensar en inglés sin quedarte mudo.",
      },
    ],
    activity: {
      title: "Charla de 3 minutos",
      steps: [
        "Elige un tema cotidiano y habla (contigo mismo o con alguien) 3 minutos sin parar.",
        "Usa al menos 3 reacciones (Really? / Me too / That's great) y 2 fillers.",
        "No te pares a corregir: el objetivo es no bloquearte.",
      ],
    },
    selfCheck: [
      "Reacciono a lo que oigo (Really?, Me too, So do I).",
      "Uso fillers para ganar tiempo sin bloquearme.",
      "Mantengo una charla sin traducir en mi cabeza.",
    ],
    summary: [
      "Fluidez = no bloquearse, no hablar rápido.",
      "Reacciona y usa respuestas eco (So do I).",
      "Los fillers son naturales: úsalos para respirar.",
    ],
  },

  "hito-b1": {
    intro:
      "¡Tercer hito: la independencia! B1 significa que puedes desenvolverte solo en la mayoría de situaciones de viaje, entender textos y charlas sobre temas conocidos, y expresar experiencias, opiniones y planes. Este nodo integra y confirma todo el nivel.",
    goal: "confirmar que eres un usuario independiente antes de dar el salto a B2.",
    sections: [
      {
        h: "¿Qué puedes hacer ya? (descriptores CEFR B1)",
        tldr: "Eres un usuario independiente en contextos conocidos.",
        bullets: [
          "Comprendes las ideas principales de textos claros sobre temas conocidos (trabajo, estudio, ocio).",
          "Te desenvuelves en la mayoría de situaciones de un viaje.",
          "Produces textos sencillos y coherentes; narras experiencias, planes y opiniones y das razones breves.",
        ],
      },
      {
        h: "Repaso integrado",
        tldr: "Antes de B2, comprueba que los pilares de B1 están firmes.",
        body: [
          "Los pilares del B1 son: present perfect vs past simple, los condicionales (0/1/2), las oraciones de relativo, ~3-4k palabras con matiz, el ritmo del inglés y narrar/opinar con soltura.",
        ],
        tip: "El salto a B2 es sobre todo de MATIZ y naturalidad. Un B1 firme —especialmente el aspecto perfecto y los condicionales— hace que B2 sea cuestión de pulir, no de reaprender.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Repaso aspecto: «I ___ Tokyo three times.» (experiencia)",
        options: ["visited", "have visited", "was visiting"],
        answer: 1,
        why: "Experiencia sin tiempo concreto → present perfect: have visited.",
      },
      {
        kind: "choice",
        q: "Condicional: «If I ___ more time, I would learn piano.»",
        options: ["have", "had", "will have"],
        answer: 1,
        why: "2º condicional (hipótesis): If + pasado, would + base.",
      },
      {
        kind: "choice",
        q: "Relativa: «The city ___ I was born is small.»",
        options: ["which", "where", "who"],
        answer: 1,
        why: "Para lugares se usa 'where'.",
      },
      {
        kind: "fill",
        q: "for/since: «I've known him ___ 2015.»",
        accept: ["since"],
        hint: "¿punto de inicio o duración?",
        why: "'since' + punto de inicio (2015).",
      },
      {
        kind: "choice",
        q: "¿Cuál es correcta?",
        options: [
          "I have seen her last week.",
          "I saw her last week.",
          "I seen her last week.",
        ],
        answer: 1,
        why: "Con 'last week' (tiempo terminado) → past simple: I saw her.",
      },
    ],
    activity: {
      title: "Autoevaluación B1",
      steps: [
        "Grábate 3 minutos: cuenta una experiencia (present perfect + past simple) y una hipótesis (2º condicional).",
        "Escucha: ¿usaste bien el aspecto, los condicionales y alguna relativa?",
        "Marca qué descriptores B1 dominas y cuáles repasar antes de B2.",
      ],
    },
    selfCheck: [
      "Distingo present perfect de past simple con seguridad.",
      "Manejo los condicionales 0, 1 y 2.",
      "Uso oraciones de relativo para dar detalle.",
      "Narro, opino y doy razones con soltura.",
    ],
    summary: [
      "B1 = independencia: te desenvuelves solo en temas conocidos.",
      "Pilares: aspecto perfecto, condicionales, relativas, ~3-4k palabras.",
      "B2 será pulir el matiz, no reaprender: llega con un B1 firme.",
    ],
  },

  // ─────────────────────────────── B2 · fluidez funcional ───────────────────
  "fon-entonacion": {
    intro:
      "La entonación es la melodía de la frase, y comunica tanto como las palabras. La misma frase, con distinta música, suena sincera, sarcástica, dudosa o cortante. En B2 empiezas a controlar esa capa.",
    goal: "usar la entonación para transmitir actitud e intención, no solo información.",
    sections: [
      {
        h: "Dos melodías básicas: sube o baja",
        tldr: "La voz que baja cierra; la que sube abre o pregunta.",
        compare: {
          left: {
            title: "Entonación descendente ↓",
            points: [
              "Afirmaciones seguras: I live in Madrid. ↓",
              "Preguntas wh-: Where do you live? ↓",
              "Suena firme, concluido.",
            ],
          },
          right: {
            title: "Entonación ascendente ↑",
            points: [
              "Preguntas de sí/no: Do you live here? ↑",
              "Duda o cortesía: I'm not sure… ↑",
              "Suena abierto, tentativo.",
            ],
          },
          note: "Una entonación plana suena aburrida o brusca; varía la melodía.",
        },
      },
      {
        h: "Question tags: la melodía cambia el sentido",
        tldr: "El mismo tag es pregunta real o busca acuerdo según suba o baje.",
        examples: [
          { en: "It's cold, isn't it? ↓", es: "Hace frío, ¿verdad? (no espero respuesta: busco acuerdo)." },
          { en: "You locked the door, didn't you? ↑", es: "Cerraste la puerta, ¿no? (pregunta real, hay duda)." },
        ],
        tip: "Copia la entonación de series y podcasts imitando en voz alta (shadowing). La melodía se pega más por imitación que por reglas.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "«Where do you work?» suele terminar con entonación…",
        options: ["ascendente ↑", "descendente ↓", "plana"],
        answer: 1,
        why: "Las preguntas con wh- (información) suelen bajar al final.",
      },
      {
        kind: "choice",
        q: "«Do you like it?» (sí/no) suele terminar con entonación…",
        options: ["ascendente ↑", "descendente ↓", "plana"],
        answer: 0,
        why: "Las preguntas de sí/no suelen subir al final.",
      },
      {
        kind: "choice",
        q: "«Nice weather, isn't it?» con tag descendente ↓ significa que…",
        options: [
          "Realmente dudas del tiempo que hace",
          "Buscas acuerdo, no una respuesta",
          "Estás enfadado",
        ],
        answer: 1,
        why: "El tag descendente busca confirmación/acuerdo, no información nueva.",
      },
    ],
    activity: {
      title: "Una frase, tres actitudes",
      steps: [
        "Elige una frase neutra (p. ej. 'You did that.').",
        "Dila y grábate tres veces: como afirmación segura, como pregunta incrédula y con sarcasmo.",
        "Escúchate: ¿la melodía cambia el significado?",
      ],
    },
    selfCheck: [
      "Bajo la voz en afirmaciones y preguntas wh-.",
      "Subo la voz en preguntas de sí/no y al dudar.",
      "Uso los question tags con la melodía adecuada.",
    ],
    summary: [
      "La entonación comunica actitud, no solo palabras.",
      "Baja ↓ = cierre/seguridad; sube ↑ = apertura/pregunta.",
      "El tag sube (pregunta real) o baja (busca acuerdo).",
    ],
  },

  "voc-5000": {
    intro:
      "Cruzar las ~5000 palabras es entrar en el terreno de las expresiones idiomáticas. Ya no basta con traducir: hay significados que solo existen como bloque. Dominar idioms y matices es lo que hace que suenes natural, no 'de libro'.",
    goal: "comprender y usar expresiones idiomáticas frecuentes con naturalidad.",
    sections: [
      {
        h: "Los idioms no se traducen palabra por palabra",
        tldr: "El significado del grupo no es la suma de sus palabras.",
        compare: {
          left: {
            title: "Literal (engaña)",
            points: [
              "break the ice → 'romper el hielo'",
              "under the weather → 'bajo el clima'",
              "a piece of cake → 'un trozo de pastel'",
            ],
          },
          right: {
            title: "Significado real",
            points: [
              "romper la tensión inicial",
              "sentirse pachucho / enfermo",
              "algo muy fácil (pan comido)",
            ],
          },
          note: "Apréndelos como un bloque, con su significado, no por sus partes.",
        },
        examples: [
          { en: "Let's break the ice with a game.", es: "Rompamos el hielo con un juego." },
          { en: "It cost an arm and a leg.", es: "Costó un ojo de la cara." },
        ],
      },
      {
        h: "Úsalos con criterio",
        tldr: "Un idiom mal usado suena peor que no usarlo.",
        bullets: [
          "Apréndelos en contexto real (series, lectura), no en listas sueltas.",
          "Fíjate en el registro: muchos idioms son informales.",
          "Al principio, reconócelos al oírlos; úsalos solo cuando estés seguro.",
        ],
        tip: "No fuerces idioms en cada frase: los nativos los usan con moderación. La naturalidad es equilibrio, no acumulación.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "«The exam was a piece of cake.» significa que fue…",
        options: ["delicioso", "muy fácil", "muy difícil"],
        answer: 1,
        why: "'a piece of cake' = pan comido, muy fácil.",
      },
      {
        kind: "choice",
        q: "«I'm feeling under the weather.» significa que…",
        options: ["te gusta la lluvia", "te sientes enfermo/pachucho", "tienes frío"],
        answer: 1,
        why: "'under the weather' = sentirse indispuesto.",
      },
      {
        kind: "fill",
        q: "Idiom para 'costar carísimo': «It cost an arm and a ___ .»",
        accept: ["leg"],
        hint: "arm and a …",
        why: "'cost an arm and a leg' = costar un ojo de la cara.",
      },
    ],
    activity: {
      title: "Cinco idioms en contexto",
      steps: [
        "Busca 5 idioms nuevos en algo que estés viendo o leyendo.",
        "Anota cada uno con su significado y una frase de ejemplo del contexto real.",
        "Escribe un mini-diálogo usando 2 de ellos correctamente.",
      ],
    },
    selfCheck: [
      "Reconozco idioms frecuentes al oírlos/leerlos.",
      "Entiendo que su significado no es literal.",
      "Uso idioms con moderación y en el registro adecuado.",
    ],
    summary: [
      "Los idioms se aprenden como bloque, no palabra por palabra.",
      "Contexto y registro importan más que la cantidad.",
      "Reconócelos primero; úsalos cuando estés seguro.",
    ],
  },

  "gra-avanzada": {
    intro:
      "Dos estructuras separan un B1 competente de un B2 natural: la voz pasiva (para poner el foco en la acción, no en quién la hace) y el estilo indirecto (para contar lo que otros dijeron). Con ellas tu inglés gana precisión y registro.",
    goal: "manejar la pasiva y el estilo indirecto con soltura.",
    sections: [
      {
        h: "Voz pasiva: el foco en la acción",
        tldr: "Se forma con be + participio; el 'quién' pasa a segundo plano.",
        compare: {
          left: {
            title: "Activa (foco en quién)",
            points: [
              "Someone stole my bike.",
              "They built the bridge in 1990.",
              "Importa el agente.",
            ],
          },
          right: {
            title: "Pasiva (foco en qué)",
            points: [
              "My bike was stolen.",
              "The bridge was built in 1990.",
              "El agente es desconocido o irrelevante.",
            ],
          },
          note: "Añade el agente con 'by' solo si aporta: '…was written by Orwell'.",
        },
      },
      {
        h: "Estilo indirecto: contar lo que se dijo",
        tldr: "Al reportar, los tiempos suelen 'retroceder' un paso.",
        examples: [
          { en: "\"I am tired.\" → She said she was tired.", es: "presente → pasado (backshift)." },
          { en: "\"I will call you.\" → He said he would call me.", es: "will → would." },
          { en: "\"Where do you live?\" → She asked where I lived.", es: "pregunta → orden de afirmación, sin 'do', sin '?'." },
        ],
        more: [
          "Cambian también los marcadores: now→then, today→that day, tomorrow→the next day.",
          "No hace falta retroceder si lo dicho sigue siendo verdad: 'She said she lives in Rome' es aceptable.",
          "Reported questions: sin inversión ni 'do': 'He asked if I was ready' (no 'was I ready').",
        ],
        tip: "Error típico: mantener el orden de pregunta al reportar ('She asked where do I live' ✗). Correcto: 'She asked where I lived'.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Pasiva de «They built this house in 1980.»",
        options: [
          "This house built in 1980.",
          "This house was built in 1980.",
          "This house is building in 1980.",
        ],
        answer: 1,
        why: "Pasiva en pasado: was/were + participio → was built.",
      },
      {
        kind: "choice",
        q: "Reporta: «I am hungry» (she said)…",
        options: ["She said she is hungry.", "She said she was hungry.", "She said I am hungry."],
        answer: 1,
        why: "Backshift: presente → pasado: She said she was hungry.",
      },
      {
        kind: "choice",
        q: "Reporta la pregunta «Do you like tea?» (he asked)…",
        options: [
          "He asked do I like tea.",
          "He asked if I liked tea.",
          "He asked if did I like tea.",
        ],
        answer: 1,
        why: "Reported question: 'if' + orden de afirmación, sin 'do': if I liked tea.",
      },
      {
        kind: "fill",
        q: "Reporta: «I will help you» → «She said she ___ help me.»",
        accept: ["would"],
        hint: "will → ?",
        why: "will retrocede a 'would'.",
      },
    ],
    activity: {
      title: "Reporta y transforma",
      steps: [
        "Toma 3 frases directas (una afirmación, una pregunta, una promesa).",
        "Repórtalas con said/asked aplicando el backshift.",
        "Reescribe 2 frases activas en pasiva y comenta por qué la pasiva encaja.",
      ],
    },
    selfCheck: [
      "Formo la pasiva con be + participio y sé cuándo usarla.",
      "Aplico el backshift en el estilo indirecto.",
      "Reporto preguntas sin inversión ni 'do'.",
      "Ajusto los marcadores de tiempo (now→then, tomorrow→the next day).",
    ],
    summary: [
      "Pasiva = foco en la acción; agente con 'by' solo si aporta.",
      "Estilo indirecto: los tiempos retroceden un paso.",
      "Reported questions: orden de afirmación, sin 'do' ni '?'.",
    ],
  },

  "aud-nativo": {
    intro:
      "El gran salto de B2: pasar de audio pensado para estudiantes a contenido real hecho para nativos —series, películas, pódcasts auténticos— a velocidad natural. Da vértigo al principio; con estrategia, se conquista.",
    goal: "comprender contenido nativo a velocidad natural sobre temas conocidos.",
    sections: [
      {
        h: "Acepta el habla conectada",
        tldr: "Los nativos no separan palabras: las funden.",
        body: [
          "Ya sabes que 'want to' suena 'wanna' y 'going to' suena 'gonna'. A velocidad nativa esto es la norma, no la excepción. Dejar de esperar palabras 'separadas' desbloquea tu comprensión.",
        ],
        examples: [
          { en: "What are you doing? → 'Whatcha doin'?'", es: "El habla rápida comprime y funde." },
          { en: "I don't know → 'I dunno'", es: "Reducciones habituales." },
        ],
      },
      {
        h: "Estrategia para no ahogarte",
        tldr: "Redundancia y contexto hacen el trabajo pesado.",
        bullets: [
          "El mensaje se repite de varias formas: no necesitas cada palabra.",
          "Elige temas y formatos que te gusten: la motivación sostiene el hábito.",
          "Subtítulos en inglés primero; luego quítalos y confía en el oído.",
        ],
        tip: "Reescuchar un mismo clip 2-3 veces enseña más que ver diez clips una vez. La repetición revela lo que se te escapó.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "A velocidad nativa, 'going to' normalmente suena…",
        options: ["go-ing to (separado)", "gonna", "no se pronuncia"],
        answer: 1,
        why: "El habla conectada lo reduce a 'gonna'; es lo normal, no descuido.",
      },
      {
        kind: "choice",
        q: "No entiendes una palabra en una serie. Lo mejor es:",
        options: [
          "Pausar y buscarla siempre",
          "Confiar en la redundancia y el contexto y seguir",
          "Poner subtítulos en tu idioma",
        ],
        answer: 1,
        why: "El contenido nativo repite la idea; el contexto suele bastar.",
      },
    ],
    activity: {
      title: "Serie sin red",
      steps: [
        "Elige una escena de 3-4 minutos de una serie que te guste.",
        "Míralas con subtítulos en inglés; luego repite la misma escena SIN subtítulos.",
        "Anota 3 reducciones o expresiones que hayas cazado (gonna, kinda, wanna…).",
      ],
    },
    selfCheck: [
      "Entiendo la idea de contenido nativo a velocidad normal.",
      "Reconozco reducciones del habla conectada.",
      "Uso contexto y redundancia en vez de traducir cada palabra.",
    ],
    summary: [
      "El habla nativa funde palabras: acéptalo y tu oído se abre.",
      "Contexto y redundancia hacen el trabajo pesado.",
      "Reescuchar > ver mucho una sola vez.",
    ],
  },

  "lec-prosa": {
    intro:
      "Leer prosa nativa —una novela, buena prensa— pide algo más que entender palabras: pide leer entre líneas, captar el tono y no rendirte ante vocabulario denso. Es lectura para adultos, sobre temas de adultos.",
    goal: "leer prosa nativa infiriendo significado, tono e intención.",
    sections: [
      {
        h: "Leer entre líneas (inferencia)",
        tldr: "El texto sugiere más de lo que dice literalmente.",
        examples: [
          {
            en: "She smiled, but her eyes stayed cold.",
            es: "Sonrió, pero sus ojos siguieron fríos.",
            note: "El texto no dice 'era falsa': lo infieres.",
          },
        ],
        body: [
          "En prosa nativa, la intención, el sarcasmo o el estado de ánimo casi nunca se explican: se sugieren. Pregúntate: ¿qué NO se dice pero se da a entender?",
        ],
      },
      {
        h: "Vocabulario denso sin bloquearte",
        tldr: "Distingue la palabra que importa de la que puedes saltarte.",
        bullets: [
          "Si una palabra no cambia el sentido de la frase, sigue.",
          "Deduce por raíz y contexto antes de buscar.",
          "Marca (no busques) las palabras que se repiten; esas sí valen la pena.",
        ],
        tip: "Elige tu primera novela nativa por interés y con una versión que ya conozcas (una historia vista en cine ayuda muchísimo).",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "«He said he was fine, closing the door a little too hard.» El texto sugiere que…",
        options: [
          "Estaba realmente bien",
          "No estaba bien (el portazo lo delata)",
          "Tenía prisa",
        ],
        answer: 1,
        why: "La inferencia: la acción contradice sus palabras.",
      },
      {
        kind: "choice",
        q: "Ante mucho vocabulario nuevo en una página, lo eficaz es:",
        options: [
          "Buscar cada palabra en el diccionario",
          "Saltar las que no cambian el sentido y deducir el resto",
          "Abandonar el texto",
        ],
        answer: 1,
        why: "Priorizar el sentido global mantiene el flujo de lectura.",
      },
    ],
    activity: {
      title: "Lee y deduce el subtexto",
      steps: [
        "Lee un pasaje corto de prosa nativa (novela o reportaje).",
        "Escribe en 1-2 frases qué SUGIERE el texto que no dice literalmente.",
        "Anota solo las palabras nuevas que se repitieron.",
      ],
    },
    selfCheck: [
      "Infiero intención y tono más allá de lo literal.",
      "No me bloqueo con vocabulario denso.",
      "Distingo la palabra clave de la prescindible.",
    ],
    summary: [
      "La prosa nativa sugiere; lee entre líneas.",
      "Salta lo prescindible, deduce, marca lo que se repite.",
      "Elige lecturas por interés para sostener el hábito.",
    ],
  },

  "ora-debatir": {
    intro:
      "Debatir es defender tu postura y responder a las de otros con respeto. En inglés, el desacuerdo directo suena agresivo: la habilidad B2 es argumentar con firmeza pero con cortesía, matizando y cediendo terreno cuando toca.",
    goal: "expresar y defender opiniones, y discrepar con cortesía.",
    sections: [
      {
        h: "Opinar con matices (hedging)",
        tldr: "Suavizar la afirmación suena más maduro y creíble.",
        compare: {
          left: {
            title: "Tajante",
            points: ["This is wrong.", "You're mistaken.", "That's a bad idea."],
          },
          right: {
            title: "Matizado (hedging)",
            points: [
              "I'm not sure that's quite right.",
              "I tend to think that…",
              "That might not be the best approach.",
            ],
          },
          note: "El matiz no es debilidad: es registro. Suena más persuasivo.",
        },
      },
      {
        h: "Discrepar sin ofender",
        tldr: "Reconoce el punto del otro antes de rebatir.",
        examples: [
          { en: "I see your point, but have you considered…?", es: "Entiendo tu punto, pero ¿has considerado…?" },
          { en: "That's a fair point. However, …", es: "Es un buen argumento. Sin embargo, …" },
          { en: "I'm afraid I don't quite agree.", es: "Me temo que no estoy del todo de acuerdo." },
        ],
        tip: "La fórmula ganadora: reconoce (I see your point) → discrepa suave (but/however) → aporta tu razón. Nunca empieces con un 'No, you're wrong'.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Forma más cortés de discrepar:",
        options: [
          "No, that's wrong.",
          "I see your point, but I'm not so sure.",
          "You don't understand.",
        ],
        answer: 1,
        why: "Reconocer + matizar es la forma cortés y persuasiva de discrepar.",
      },
      {
        kind: "choice",
        q: "¿Cuál es un ejemplo de 'hedging' (matizar)?",
        options: [
          "This is definitely the only solution.",
          "I tend to think this could help.",
          "Everyone knows I'm right.",
        ],
        answer: 1,
        why: "'I tend to think… could…' suaviza la afirmación (hedging).",
      },
      {
        kind: "choice",
        q: "Empezar un desacuerdo con «No, you're wrong» en inglés suena…",
        options: ["educado", "agresivo/brusco", "neutral"],
        answer: 1,
        why: "El desacuerdo directo se percibe como agresivo; conviene suavizar.",
      },
    ],
    activity: {
      title: "Mini-debate",
      steps: [
        "Elige un tema con dos posturas (p. ej. teletrabajo sí/no).",
        "Escribe tu opinión con hedging y 2 argumentos.",
        "Escribe una réplica cortés a la postura contraria (reconoce → discrepa → razona).",
      ],
    },
    selfCheck: [
      "Matizo mis opiniones (hedging) en vez de afirmar tajante.",
      "Reconozco el punto del otro antes de rebatir.",
      "Discrepo con fórmulas corteses (I'm afraid…, However…).",
    ],
    summary: [
      "Hedging = firmeza con cortesía; suena más persuasivo.",
      "Discrepar: reconoce → suaviza → razona.",
      "El desacuerdo directo suena agresivo en inglés.",
    ],
  },

  "esc-argumentativo": {
    intro:
      "Un texto argumentativo defiende una tesis con estructura: no es opinar sin más, es construir un caso. En B2 escribes ensayos y correos detallados que se sostienen por su lógica y su cohesión.",
    goal: "escribir textos argumentativos claros, estructurados y cohesionados.",
    sections: [
      {
        h: "La estructura del argumento",
        tldr: "Tesis → argumentos → contraargumento → conclusión.",
        bullets: [
          "Introducción con una tesis clara (tu postura en una frase).",
          "Cada párrafo: una idea, con razón y ejemplo.",
          "Un párrafo que reconoce la postura contraria y la rebate.",
          "Conclusión que reafirma sin repetir textualmente.",
        ],
      },
      {
        h: "Cohesión: que las ideas 'peguen'",
        tldr: "Los conectores de discurso guían al lector por tu lógica.",
        examples: [
          { en: "Firstly, … Moreover, …", es: "añadir / secuenciar" },
          { en: "However, … Nevertheless, …", es: "contrastar" },
          { en: "Therefore, … Consequently, …", es: "concluir/consecuencia" },
          { en: "For instance, … In particular, …", es: "ejemplificar" },
        ],
        more: [
          "Sube el registro con subordinación: 'Although the cost is high, the benefits outweigh it' suena más maduro que dos frases sueltas.",
          "Evita empezar frases con And/But en registro formal; usa Moreover/However.",
        ],
        tip: "Planifica en un esquema de 4 puntos antes de escribir. La estructura clara vale más que las palabras elegantes.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Conector para introducir una CONSECUENCIA:",
        options: ["However", "Therefore", "For instance"],
        answer: 1,
        why: "'Therefore/Consequently' introducen la consecuencia.",
      },
      {
        kind: "choice",
        q: "En un ensayo argumentativo, reconocer la postura contraria…",
        options: [
          "Debilita tu texto",
          "Lo refuerza: muestra que consideraste otras vistas",
          "Está prohibido",
        ],
        answer: 1,
        why: "El contraargumento rebatido fortalece la argumentación.",
      },
      {
        kind: "fill",
        q: "Conector de contraste formal (no 'but'): «..., ___, the plan failed.»",
        accept: ["however", "nevertheless"],
        hint: "Empieza por H o N.",
        why: "'However/Nevertheless' contrastan en registro formal.",
      },
    ],
    activity: {
      title: "Ensayo breve (150-180 palabras)",
      steps: [
        "Elige una postura sobre un tema polémico.",
        "Esquema: tesis, 2 argumentos con ejemplo, 1 contraargumento rebatido, conclusión.",
        "Redáctalo usando al menos 5 conectores de discurso distintos.",
      ],
    },
    selfCheck: [
      "Abro con una tesis clara.",
      "Doy una idea por párrafo con razón y ejemplo.",
      "Incluyo y rebato un contraargumento.",
      "Cohesiono con conectores de discurso variados.",
    ],
    summary: [
      "Argumentar = construir un caso, no solo opinar.",
      "Tesis → argumentos → contraargumento → conclusión.",
      "La cohesión (conectores + subordinación) sube el registro.",
    ],
  },

  "cul-humor": {
    intro:
      "El humor y la ironía son el último gran filtro cultural. La cultura anglosajona —muy en especial la británica— adora el understatement y el sarcasmo: decir lo contrario de lo que se piensa, con cara seria. Captarlo es sentirte por fin 'dentro'.",
    goal: "reconocer ironía, sarcasmo y understatement, y no tomarlos al pie de la letra.",
    sections: [
      {
        h: "Ironía y sarcasmo: decir lo contrario",
        tldr: "Las palabras dicen A; el tono y el contexto dicen lo opuesto.",
        compare: {
          left: {
            title: "Literal",
            points: [
              "«Lovely weather!» = hace buen tiempo",
              "«Great, just great.» = está contento",
            ],
          },
          right: {
            title: "Irónico (contexto opuesto)",
            points: [
              "«Lovely weather!» bajo un diluvio = qué asco de tiempo",
              "«Great, just great.» tras un problema = qué desastre",
            ],
          },
          note: "La clave está en el desajuste entre lo dicho y la situación.",
        },
      },
      {
        h: "Understatement: quitar hierro",
        tldr: "Se dice menos de lo que se siente, sobre todo en inglés británico.",
        examples: [
          { en: "\"It's not bad.\"", es: "Puede significar 'está muy bien'." },
          { en: "\"We have a bit of a problem.\"", es: "A menudo = tenemos un problemón." },
          { en: "\"I'm a little tired.\" (tras 24h sin dormir)", es: "= estoy agotadísimo." },
        ],
        tip: "Ante una frase 'demasiado suave' o 'demasiado entusiasta' para la situación, sospecha ironía o understatement. El tono manda sobre las palabras.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Llueve a cántaros y alguien dice «Lovely weather!». Probablemente…",
        options: ["Le encanta la lluvia", "Es ironía: se queja del tiempo", "Se equivocó de palabra"],
        answer: 1,
        why: "El desajuste con la situación señala ironía.",
      },
      {
        kind: "choice",
        q: "Un británico dice «It's not bad» de tu trabajo. Suele significar…",
        options: ["Es mediocre", "Está bastante bien (understatement)", "Es horrible"],
        answer: 1,
        why: "El understatement británico suele decir menos de lo que valora.",
      },
      {
        kind: "choice",
        q: "¿Qué delata la ironía?",
        options: [
          "El significado literal de las palabras",
          "El desajuste entre lo dicho, el tono y el contexto",
          "La gramática de la frase",
        ],
        answer: 1,
        why: "La ironía vive en la contradicción entre palabras y situación/tono.",
      },
    ],
    activity: {
      title: "Caza la ironía",
      steps: [
        "Busca una escena de comedia británica (o un sketch) con subtítulos.",
        "Identifica 3 frases irónicas o de understatement y anota qué significan de verdad.",
        "Escribe 2 frases irónicas tuyas para una situación cotidiana.",
      ],
    },
    selfCheck: [
      "Detecto ironía por el desajuste con el contexto.",
      "Interpreto el understatement (not bad = bastante bien).",
      "No tomo al pie de la letra frases 'demasiado suaves' o entusiastas.",
    ],
    summary: [
      "Ironía = decir lo contrario; lo delata el contexto y el tono.",
      "Understatement = decir menos de lo que se siente (muy británico).",
      "Cuando lo dicho no encaja con la situación, sospecha humor.",
    ],
  },

  "hito-b2": {
    intro:
      "¡Cuarto hito: fluidez funcional! B2 significa que te comunicas con naturalidad y espontaneidad, entiendes contenido nativo y defiendes tus ideas con matices. Este nodo integra todo el nivel antes del salto a C1.",
    goal: "confirmar que dominas B2 antes de avanzar a C1.",
    sections: [
      {
        h: "¿Qué puedes hacer ya? (descriptores CEFR B2)",
        tldr: "Interactúas con fluidez y espontaneidad; defiendes puntos de vista.",
        bullets: [
          "Comprendes las ideas principales de textos complejos y contenido nativo sobre temas variados.",
          "Te comunicas con un grado de fluidez que hace posible la interacción normal con nativos sin tensión.",
          "Produces textos claros y detallados y defiendes un punto de vista con pros y contras.",
        ],
      },
      {
        h: "Repaso integrado",
        tldr: "Antes de C1, comprueba que el matiz B2 está firme.",
        body: [
          "Los pilares del B2 son: pasiva y estilo indirecto, ~5000 palabras con idioms, entonación expresiva, comprensión de contenido nativo, debatir con hedging y escribir argumentando.",
        ],
        tip: "C1 va de precisión y flexibilidad: mediar, matizar y adaptar el registro. Un B2 firme hace que C1 sea afinar el instrumento, no cambiarlo.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Pasiva: «Someone has stolen my phone.» →",
        options: [
          "My phone has stolen.",
          "My phone has been stolen.",
          "My phone was stealing.",
        ],
        answer: 1,
        why: "Present perfect pasivo: has/have been + participio.",
      },
      {
        kind: "choice",
        q: "Estilo indirecto: «I can swim» (she said)…",
        options: ["She said she can swim.", "She said she could swim.", "She said I can swim."],
        answer: 1,
        why: "can → could (backshift).",
      },
      {
        kind: "choice",
        q: "«It's not bad» de un británico suele ser…",
        options: ["una crítica dura", "un elogio (understatement)", "una pregunta"],
        answer: 1,
        why: "Understatement británico: suele valorar más de lo que dice.",
      },
      {
        kind: "choice",
        q: "Forma cortés de discrepar:",
        options: ["You're wrong.", "I see your point, but…", "That's stupid."],
        answer: 1,
        why: "Reconocer + matizar es la fórmula cortés.",
      },
    ],
    activity: {
      title: "Autoevaluación B2",
      steps: [
        "Escribe un párrafo argumentativo (opinión + contraargumento) sobre un tema de actualidad.",
        "Grábate 2 minutos defendiéndolo con hedging y reaccionando a la postura opuesta.",
        "Marca qué descriptores B2 dominas y cuáles repasar antes de C1.",
      ],
    },
    selfCheck: [
      "Uso pasiva y estilo indirecto con naturalidad.",
      "Reconozco idioms, ironía y understatement.",
      "Debato con hedging y cortesía.",
      "Escribo textos argumentativos cohesionados.",
    ],
    summary: [
      "B2 = fluidez funcional: naturalidad, contenido nativo y matiz.",
      "Pilares: pasiva, estilo indirecto, idioms, debate, argumentación.",
      "C1 será afinar (mediar, matizar, adaptar), no reaprender.",
    ],
  },

  // ─────────────────────────────── C1 · dominio operativo ───────────────────
  "est-mediacion": {
    intro:
      "Mediar (una competencia central del CEFR 2020) es tender puentes: resumir, reformular y explicar información para que otros la entiendan, y facilitar el entendimiento entre personas. Es lo que hace un usuario avanzado que ya no solo 'usa' la lengua, sino que la pone al servicio de otros.",
    goal: "reformular, resumir y facilitar la comunicación para terceros.",
    sections: [
      {
        h: "Mediar un texto: resumir y reformular",
        tldr: "Tomas información compleja y la haces accesible.",
        body: [
          "Mediar no es traducir: es captar lo esencial de un texto o charla y transmitirlo con tus palabras, adaptándolo a quien te escucha.",
        ],
        examples: [
          { en: "So, in short, the report says that costs rose because of energy prices.", es: "Resumir lo esencial de un informe largo." },
          { en: "What she means is that we should wait.", es: "Reformular/aclarar lo que otro quiso decir." },
        ],
      },
      {
        h: "Mediar la comunicación: facilitar",
        tldr: "Ayudas a que otros se entiendan entre sí.",
        bullets: [
          "Aclarar: 'Let me put that another way…'.",
          "Comprobar entendimiento: 'Does that make sense?', 'So you mean…?'.",
          "Tender puentes culturales: explicar un matiz que el otro no capta.",
        ],
        tip: "Mediar bien exige empatía lingüística: pensar qué sabe y qué no sabe tu interlocutor, y ajustar el mensaje a eso.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Mediar un texto significa…",
        options: [
          "Traducirlo palabra por palabra",
          "Captar lo esencial y reformularlo para quien te escucha",
          "Leerlo en voz alta tal cual",
        ],
        answer: 1,
        why: "Mediar = transmitir lo esencial con tus palabras, adaptado al receptor.",
      },
      {
        kind: "choice",
        q: "Frase útil para reformular y aclarar:",
        options: ["Let me put that another way…", "Goodbye.", "I don't care."],
        answer: 0,
        why: "'Let me put that another way' reformula para facilitar el entendimiento.",
      },
    ],
    activity: {
      title: "Resume y reformula",
      steps: [
        "Lee o escucha un contenido complejo de 3-4 minutos.",
        "Resúmelo en 4 frases para alguien que no lo ha visto.",
        "Reformula el punto más difícil con una analogía o un ejemplo sencillo.",
      ],
    },
    selfCheck: [
      "Resumo información compleja con mis palabras.",
      "Reformulo y aclaro lo que otros quieren decir.",
      "Ajusto el mensaje a lo que sabe mi interlocutor.",
    ],
    summary: [
      "Mediar = tender puentes, no traducir.",
      "Resume lo esencial y reformula para el receptor.",
      "Exige empatía lingüística: ajustar a quién te escucha.",
    ],
  },

  "fon-naturalidad": {
    intro:
      "La naturalidad es el habla conectada real: sonidos que se caen, se funden y se reducen. Un C1 no pronuncia palabra por palabra 'de libro'; fluye. Entender y producir estas reducciones es lo que separa lo correcto de lo natural.",
    goal: "hablar y entender con las reducciones y enlaces del habla real.",
    sections: [
      {
        h: "Elisión y asimilación",
        tldr: "Sonidos que desaparecen o se contagian entre palabras.",
        examples: [
          { en: "next day → 'nex day'", es: "elisión: se cae la /t/." },
          { en: "ten bikes → 'tem bikes'", es: "asimilación: /n/ → /m/ ante /b/." },
          { en: "handbag → 'hambag'", es: "asimilación dentro de la palabra." },
        ],
      },
      {
        h: "Reducciones frecuentes",
        tldr: "El habla rápida comprime grupos enteros.",
        compare: {
          left: {
            title: "Cuidada (dictado)",
            points: ["going to", "want to", "did you", "kind of"],
          },
          right: {
            title: "Natural (habla real)",
            points: ["gonna", "wanna", "didja", "kinda"],
          },
          note: "No son 'inglés incorrecto': son el registro hablado normal.",
        },
        tip: "Objetivo C1: producir estas reducciones tú mismo, no solo reconocerlas. Grábate y compáralo con un modelo nativo.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "En habla natural, «What do you want?» a menudo suena…",
        options: ["What do you want (cada palabra)", "'Whaddya want?'", "no cambia"],
        answer: 1,
        why: "Reducción y enlace habituales: 'Whaddya want?'.",
      },
      {
        kind: "choice",
        q: "'next day' pronunciado 'nex day' es un ejemplo de…",
        options: ["elisión (caída de /t/)", "un error", "entonación"],
        answer: 0,
        why: "Elisión: en grupos de consonantes, una suele caerse.",
      },
    ],
    activity: {
      title: "Reducciones en acción",
      steps: [
        "Elige 5 frases con 'going to / want to / did you'.",
        "Dilas primero cuidadas y luego con la reducción natural (gonna, wanna, didja).",
        "Grábate y compáralo con un clip nativo.",
      ],
    },
    selfCheck: [
      "Reconozco elisiones y asimilaciones al escuchar.",
      "Produzco reducciones naturales (gonna, wanna, didja).",
      "Mi habla fluye enlazada, no palabra por palabra.",
    ],
    summary: [
      "Habla natural = sonidos que caen, se funden y se reducen.",
      "gonna/wanna/didja son registro hablado normal.",
      "Meta C1: producirlas, no solo reconocerlas.",
    ],
  },

  "voc-8000": {
    intro:
      "Alrededor de las 8000 palabras el vocabulario deja de ser 'cuántas sabes' y pasa a ser 'cuál eliges'. Entran los sinónimos con matices de registro, la jerga y el lenguaje coloquial. Es la diferencia entre entenderlo todo y decirlo exactamente.",
    goal: "elegir la palabra precisa según registro y matiz, incluida la jerga.",
    sections: [
      {
        h: "Sinónimos no son intercambiables",
        tldr: "Cada 'sinónimo' lleva un registro y un matiz distintos.",
        compare: {
          left: {
            title: "Mismo concepto…",
            points: ["kids", "get", "buy", "ask for"],
          },
          right: {
            title: "…distinto registro",
            points: ["children / offspring (formal)", "obtain / acquire (formal)", "purchase (formal)", "request (formal)"],
          },
          note: "Elige según el contexto: informal con amigos, formal en un informe.",
        },
      },
      {
        h: "Jerga y coloquialismos",
        tldr: "El lenguaje informal real amplía tu comprensión de nativos.",
        examples: [
          { en: "That's awesome / cool / sick!", es: "informal: ¡genial!" },
          { en: "I'm knackered. (BrE) / I'm beat.", es: "estoy hecho polvo/agotado." },
          { en: "It's a rip-off.", es: "es un timo/robo." },
        ],
        tip: "La jerga cambia por región y generación, y envejece rápido. Reconócela para entender; úsala con cautela si no estás seguro del contexto.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Versión FORMAL de 'buy':",
        options: ["get", "purchase", "grab"],
        answer: 1,
        why: "'purchase' es el registro formal de 'buy'.",
      },
      {
        kind: "choice",
        q: "«I'm knackered» (inglés británico) significa…",
        options: ["estoy emocionado", "estoy agotado", "estoy enfadado"],
        answer: 1,
        why: "'knackered' (BrE, coloquial) = agotado, hecho polvo.",
      },
      {
        kind: "choice",
        q: "A este nivel, dominar vocabulario es sobre todo…",
        options: [
          "saber más palabras que nadie",
          "elegir la palabra precisa según registro y matiz",
          "usar siempre las palabras más largas",
        ],
        answer: 1,
        why: "C1 = precisión y adecuación de registro, no acumulación.",
      },
    ],
    activity: {
      title: "Tres registros de una idea",
      steps: [
        "Elige una idea simple (p. ej. 'estoy cansado').",
        "Exprésala en tres registros: coloquial, neutro y formal.",
        "Anota 5 coloquialismos nuevos que hayas oído esta semana con su registro.",
      ],
    },
    selfCheck: [
      "Elijo entre sinónimos según registro y matiz.",
      "Reconozco jerga y coloquialismos frecuentes.",
      "Uso el lenguaje informal con conciencia del contexto.",
    ],
    summary: [
      "~8000 palabras: la clave es CUÁL eliges, no cuántas sabes.",
      "Los sinónimos difieren en registro y matiz.",
      "Reconoce la jerga; úsala con cautela.",
    ],
  },

  "aud-conferencias": {
    intro:
      "Seguir una conferencia o una clase académica exige mantener el hilo de un argumento largo, distinguir lo principal de lo secundario y, a menudo, tomar notas a la vez. Las señales del discurso son tu mapa.",
    goal: "seguir discurso académico extenso e identificar su estructura.",
    sections: [
      {
        h: "Las señales del discurso (signposting)",
        tldr: "El ponente te dice dónde estás con frases-guía.",
        examples: [
          { en: "First, I'll outline… / Moving on to… / To sum up…", es: "estructura: apertura → transición → cierre." },
          { en: "The key point here is… / This brings me to…", es: "marca lo importante y las transiciones." },
          { en: "However, some argue that…", es: "introduce una objeción o matiz." },
        ],
      },
      {
        h: "Tomar notas sin perder el hilo",
        tldr: "Anota ideas y relaciones, no cada palabra.",
        bullets: [
          "Capta la tesis y los puntos que la sostienen.",
          "Usa símbolos y abreviaturas (→, =, ↑, b/c).",
          "Deja huecos: los rellenas al reescuchar o preguntar.",
        ],
        tip: "Escucha para la ESTRUCTURA: si sabes que viene 'un ejemplo' o 'una conclusión', entiendes mejor aunque falles palabras.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "«This brings me to my next point…» en una charla indica…",
        options: ["una conclusión final", "una transición a otra idea", "un ejemplo"],
        answer: 1,
        why: "Es una señal de transición entre puntos.",
      },
      {
        kind: "choice",
        q: "Al tomar notas de una conferencia conviene anotar…",
        options: [
          "cada palabra del ponente",
          "las ideas clave y sus relaciones, con abreviaturas",
          "solo el título",
        ],
        answer: 1,
        why: "Notas eficaces = ideas y relaciones, no dictado literal.",
      },
    ],
    activity: {
      title: "Escucha académica con notas",
      steps: [
        "Elige una charla (p. ej. una TED talk) de 6-8 minutos con transcripción.",
        "Toma notas de la tesis y 3 puntos de apoyo usando abreviaturas.",
        "Comprueba con la transcripción qué señales de discurso marcaron cada parte.",
      ],
    },
    selfCheck: [
      "Identifico las señales de discurso (signposting).",
      "Distingo la tesis de los puntos de apoyo.",
      "Tomo notas de ideas y relaciones sin perder el hilo.",
    ],
    summary: [
      "Las señales de discurso son el mapa de la charla.",
      "Escucha para la estructura, no para cada palabra.",
      "Notas = ideas y relaciones con abreviaturas.",
    ],
  },

  "lec-especializado": {
    intro:
      "Leer textos especializados y de análisis (académicos, técnicos, ensayos) exige seguir una argumentación densa, distinguir hechos de opiniones y evaluar la postura del autor. Ya no solo comprendes: valoras críticamente.",
    goal: "comprender y evaluar críticamente textos densos y especializados.",
    sections: [
      {
        h: "Hecho vs. opinión vs. postura del autor",
        tldr: "Distingue lo que se afirma como dato de lo que se defiende.",
        examples: [
          { en: "Studies show that… (hecho reportado)", es: "afirmación basada en evidencia." },
          { en: "It could be argued that… / Arguably…", es: "el autor marca que es una interpretación." },
          { en: "Critics claim… but the evidence suggests…", es: "el autor toma partido." },
        ],
      },
      {
        h: "Vocabulario técnico en contexto",
        tldr: "No busques todo: deduce por el andamiaje del texto.",
        bullets: [
          "Los textos académicos definen sus términos clave: búscalos ahí.",
          "La nominalización ('the implementation of…') es señal de registro formal.",
          "Fíjate en los conectores lógicos: revelan la estructura del argumento.",
        ],
        tip: "Lee críticamente: pregúntate ¿qué defiende el autor?, ¿con qué evidencia?, ¿qué deja fuera? Comprender no es aceptar.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "«It could be argued that…» señala que lo que sigue es…",
        options: ["un hecho comprobado", "una interpretación/opinión matizada", "una cita textual"],
        answer: 1,
        why: "Es una fórmula de hedging: marca interpretación, no hecho.",
      },
      {
        kind: "choice",
        q: "Leer críticamente un ensayo implica preguntarte…",
        options: [
          "solo qué significan las palabras",
          "qué defiende el autor, con qué evidencia y qué omite",
          "cuántas páginas tiene",
        ],
        answer: 1,
        why: "La lectura crítica evalúa tesis, evidencia y omisiones.",
      },
    ],
    activity: {
      title: "Disecciona un argumento",
      steps: [
        "Lee un artículo de opinión o un abstract académico.",
        "Escribe: tesis del autor, 2 evidencias que usa y 1 posible objeción que omite.",
        "Marca 3 fórmulas de hedging o de postura que hayas encontrado.",
      ],
    },
    selfCheck: [
      "Distingo hechos de opiniones y de la postura del autor.",
      "Deduzco el vocabulario técnico por el contexto.",
      "Evalúo críticamente tesis, evidencia y omisiones.",
    ],
    summary: [
      "Distingue hecho, opinión y postura del autor.",
      "El texto académico define sus términos y marca su lógica.",
      "Comprender no es aceptar: lee críticamente.",
    ],
  },

  "ora-persuadir": {
    intro:
      "Persuadir y exponer con eficacia es hablar para mover a alguien: una presentación, una propuesta, un discurso. En C1 estructuras tu mensaje y usas recursos retóricos que hacen que se te escuche y se te recuerde.",
    goal: "exponer y persuadir con estructura y recursos retóricos.",
    sections: [
      {
        h: "Estructura que persuade",
        tldr: "Gancho → mensaje claro → apoyo → llamada a la acción.",
        bullets: [
          "Abre con un gancho (dato, pregunta, historia breve).",
          "Un mensaje central, no cinco: la claridad persuade.",
          "Apoya con evidencia y ejemplos concretos.",
          "Cierra con una llamada a la acción memorable.",
        ],
      },
      {
        h: "Recursos retóricos",
        tldr: "Ciertos patrones hacen tu mensaje más potente.",
        examples: [
          { en: "Rule of three: clear, simple, effective.", es: "la regla de tres suena rotunda." },
          { en: "Rhetorical question: Why does this matter?", es: "pregunta retórica que engancha." },
          { en: "Contrast: It's not about cost — it's about value.", es: "el contraste marca el punto." },
        ],
        tip: "Compara informar y persuadir: informar transmite datos; persuadir los ordena hacia una conclusión y apela también a la emoción, no solo a la razón.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "«clear, simple, effective» es un ejemplo de…",
        options: ["pregunta retórica", "regla de tres", "understatement"],
        answer: 1,
        why: "Tres elementos en serie: la 'rule of three', muy persuasiva.",
      },
      {
        kind: "choice",
        q: "Una presentación persuasiva debería tener…",
        options: [
          "cinco mensajes centrales a la vez",
          "un mensaje central claro, bien apoyado",
          "solo datos, sin estructura",
        ],
        answer: 1,
        why: "Un único mensaje claro persuade más que muchos difusos.",
      },
      {
        kind: "choice",
        q: "La diferencia entre informar y persuadir es que persuadir…",
        options: [
          "solo transmite datos neutros",
          "ordena el mensaje hacia una conclusión y apela también a la emoción",
          "evita cualquier estructura",
        ],
        answer: 1,
        why: "Persuadir dirige la información hacia una conclusión y suma emoción a la razón.",
      },
    ],
    activity: {
      title: "Discurso de 2 minutos",
      steps: [
        "Elige algo que quieras 'vender' (una idea, un plan).",
        "Estructúralo: gancho, mensaje central, 2 apoyos, llamada a la acción.",
        "Grábalo usando al menos un recurso retórico (regla de tres, contraste o pregunta retórica).",
      ],
    },
    selfCheck: [
      "Estructuro mi mensaje (gancho → central → apoyo → acción).",
      "Uso recursos retóricos (regla de tres, contraste, preguntas).",
      "Distingo informar de persuadir y apelo también a la emoción.",
    ],
    summary: [
      "Persuadir = estructura clara + un mensaje central + emoción.",
      "Recursos: regla de tres, contraste, pregunta retórica.",
      "Cierra con una llamada a la acción memorable.",
    ],
  },

  "esc-complejo": {
    intro:
      "Escribir textos complejos y bien estructurados —un informe, una propuesta, un ensayo extenso— exige coherencia global: que todo el documento, no solo cada párrafo, avance hacia un objetivo. Es arquitectura, no solo redacción.",
    goal: "escribir documentos extensos coherentes y bien estructurados.",
    sections: [
      {
        h: "Arquitectura del documento",
        tldr: "Estructura clara y párrafos temáticos que encajan.",
        bullets: [
          "Informe: introducción, secciones con encabezados, hallazgos, conclusión/recomendaciones.",
          "Cada párrafo empieza con una frase-tema que anuncia su idea.",
          "Las secciones se enlazan: cada una prepara la siguiente.",
        ],
      },
      {
        h: "Registro formal y cohesión",
        tldr: "La nominalización y los conectores dan formalidad y flujo.",
        examples: [
          { en: "We decided to… → The decision was made to…", es: "nominalización: más formal e impersonal." },
          { en: "This suggests that… / In light of these findings…", es: "conectores que enlazan secciones." },
        ],
        more: [
          "Evita la voz demasiado personal en informes: prefiere impersonal/pasiva cuando aporte objetividad.",
          "Coherencia global: revisa que la conclusión responda a lo planteado en la introducción.",
        ],
        tip: "Escribe primero el esqueleto (títulos y una frase por sección). Un documento largo se gana en la planificación, no en la redacción.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "La 'frase-tema' de un párrafo sirve para…",
        options: [
          "decorar el inicio",
          "anunciar la idea principal del párrafo",
          "cerrar el documento",
        ],
        answer: 1,
        why: "La topic sentence anuncia de qué trata el párrafo y guía al lector.",
      },
      {
        kind: "choice",
        q: "«The decision was made to expand» frente a «We decided to expand» es más…",
        options: ["informal", "formal e impersonal (nominalización)", "incorrecto"],
        answer: 1,
        why: "La nominalización/pasiva aporta formalidad e impersonalidad.",
      },
      {
        kind: "choice",
        q: "La 'coherencia global' de un documento significa que…",
        options: [
          "cada párrafo es correcto por separado",
          "todo el documento avanza hacia un objetivo y la conclusión responde a la introducción",
          "usa palabras difíciles",
        ],
        answer: 1,
        why: "Coherencia global = el conjunto, no solo las partes, tiene sentido y dirección.",
      },
    ],
    activity: {
      title: "Esqueleto de un informe",
      steps: [
        "Elige un tema para un informe corto (un problema y su solución).",
        "Escribe solo el esqueleto: títulos de sección + una frase-tema por sección.",
        "Desarrolla una sección cuidando registro formal y cohesión.",
      ],
    },
    selfCheck: [
      "Estructuro documentos con secciones y frases-tema.",
      "Uso registro formal (nominalización, impersonal) cuando conviene.",
      "Cuido la coherencia global: la conclusión responde a la introducción.",
    ],
    summary: [
      "Textos largos = arquitectura, no solo redacción.",
      "Frase-tema por párrafo; secciones que se enlazan.",
      "Planifica el esqueleto antes de redactar.",
    ],
  },

  "cul-referentes": {
    intro:
      "Entender de verdad a los nativos exige captar sus referentes: alusiones a la historia, la política, la cultura pop y la actualidad que ellos dan por sabidas. Sin ese contexto, entiendes las palabras pero te pierdes el chiste, la crítica o el guiño.",
    goal: "reconocer alusiones y referentes culturales frecuentes.",
    sections: [
      {
        h: "Alusiones que se dan por sabidas",
        tldr: "Frases que remiten a algo cultural sin explicarlo.",
        examples: [
          { en: "It's his Achilles' heel.", es: "su punto débil (referencia clásica)." },
          { en: "That's a catch-22.", es: "un círculo vicioso sin salida (novela de Heller)." },
          { en: "Big Brother is watching.", es: "vigilancia total (Orwell, 1984)." },
        ],
      },
      {
        h: "Actualidad y cultura pop",
        tldr: "El humor y la crítica usan referentes del momento.",
        bullets: [
          "Series, cine y música son fuente constante de referencias.",
          "La política y las noticias alimentan chistes y titulares.",
          "Muchos idioms nacen de deportes (a level playing field, to throw in the towel).",
        ],
        tip: "Cuando no captes una referencia, búscala: cada una que aprendes desbloquea muchos chistes y titulares futuros. Es inversión, no curiosidad ociosa.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "«That's his Achilles' heel» significa que es su…",
        options: ["punto fuerte", "punto débil/vulnerable", "mejor amigo"],
        answer: 1,
        why: "Referencia clásica: el talón de Aquiles = punto vulnerable.",
      },
      {
        kind: "choice",
        q: "«Big Brother is watching» alude a…",
        options: [
          "un programa de cocina",
          "la vigilancia total (1984 de Orwell)",
          "un hermano mayor real",
        ],
        answer: 1,
        why: "Referente cultural de la novela '1984' de George Orwell.",
      },
    ],
    activity: {
      title: "Diario de referentes",
      steps: [
        "Durante una semana, anota 5 alusiones culturales que oigas o leas (series, prensa).",
        "Investiga el origen de cada una.",
        "Escribe una frase propia usando una de ellas correctamente.",
      ],
    },
    selfCheck: [
      "Reconozco alusiones culturales frecuentes.",
      "Investigo los referentes que no capto.",
      "Entiendo el guiño/crítica detrás de la referencia, no solo las palabras.",
    ],
    summary: [
      "Los referentes se dan por sabidos: sin ellos te pierdes el matiz.",
      "Vienen de historia, literatura, deporte, política y cultura pop.",
      "Cada referente aprendido desbloquea muchos futuros.",
    ],
  },

  "flu-pensar": {
    intro:
      "El último salto de fluidez es dejar de traducir: pensar directamente en inglés. Cuando tu monólogo interno ocurre en el idioma, la lengua deja de ser una tarea y se vuelve una segunda piel.",
    goal: "pensar en inglés y reducir la traducción mental a cero.",
    sections: [
      {
        h: "El monólogo interno",
        tldr: "Narra tu día por dentro en inglés.",
        body: [
          "Traducir del español añade un paso que te frena. Entrenar el pensamiento directo elimina ese cuello de botella. Empieza por narrar acciones simples mentalmente: 'I'm making coffee. It's too hot.'",
        ],
      },
      {
        h: "Automatiza para liberar la mente",
        tldr: "Lo automático deja tu atención libre para las ideas.",
        bullets: [
          "Cuanto más automatizados tus bloques (chunks), menos traduces.",
          "Rodea la palabra que no sabes en inglés, no vuelvas al español.",
          "Rodéate del idioma: móvil, notas y listas en inglés.",
        ],
        tip: "Si te sorprendes traduciendo, no te frustres: redirígete al inglés directo. Es un músculo; se fortalece con repetición diaria, no con teoría.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Pensar en inglés ayuda a la fluidez porque…",
        options: [
          "elimina el paso extra de traducir del español",
          "hace la gramática más difícil",
          "obliga a hablar más lento",
        ],
        answer: 0,
        why: "Quitar la traducción intermedia elimina el cuello de botella.",
      },
      {
        kind: "choice",
        q: "Si no sabes una palabra mientras piensas en inglés, lo mejor es…",
        options: [
          "volver al español y traducir",
          "rodearla en inglés (describirla) y seguir",
          "detenerte por completo",
        ],
        answer: 1,
        why: "Mantenerte en inglés (parafraseando) refuerza el pensamiento directo.",
      },
    ],
    activity: {
      title: "Un día en inglés (por dentro)",
      steps: [
        "Elige 3 momentos del día (café, trayecto, cena).",
        "Narra mentalmente lo que haces SOLO en inglés durante 2 minutos cada uno.",
        "Cuando falte una palabra, rodéala en inglés; anótala después para tu SRS.",
      ],
    },
    selfCheck: [
      "Narro acciones cotidianas mentalmente en inglés.",
      "Evito traducir del español al hablar.",
      "Rodeo en inglés las palabras que me faltan.",
    ],
    summary: [
      "Fluidez plena = pensar en inglés, no traducir.",
      "El monólogo interno y la automatización eliminan el cuello de botella.",
      "Es un músculo: se entrena a diario.",
    ],
  },

  "hito-c1": {
    intro:
      "¡Quinto hito: dominio operativo! C1 significa que usas la lengua con flexibilidad y eficacia para fines sociales, académicos y profesionales, y te expresas sin buscar demasiado las palabras. Este nodo integra todo el nivel antes del tramo final, C2.",
    goal: "confirmar que dominas C1 antes de aspirar a la maestría (C2).",
    sections: [
      {
        h: "¿Qué puedes hacer ya? (descriptores CEFR C1)",
        tldr: "Usas la lengua con flexibilidad y eficacia, casi sin esfuerzo.",
        bullets: [
          "Comprendes textos largos y exigentes y captas el sentido implícito.",
          "Te expresas con fluidez y espontaneidad sin buscar de forma evidente las palabras.",
          "Produces textos claros, bien estructurados y detallados sobre temas complejos.",
        ],
      },
      {
        h: "Repaso integrado",
        tldr: "Antes de C2, comprueba que la flexibilidad C1 está firme.",
        body: [
          "Los pilares del C1 son: mediar y reformular, naturalidad en el habla conectada, ~8000 palabras con precisión de registro, seguir discurso académico, leer críticamente, persuadir, escribir documentos complejos y pensar en inglés.",
        ],
        tip: "C2 no añade 'más gramática': añade sutileza, matiz y naturalidad casi nativa. Un C1 firme convierte C2 en pulir el arte, no aprender la técnica.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Mediar significa…",
        options: [
          "traducir literalmente",
          "reformular/resumir para facilitar el entendimiento de otros",
          "hablar más rápido",
        ],
        answer: 1,
        why: "Mediar = tender puentes reformulando y resumiendo para el receptor.",
      },
      {
        kind: "choice",
        q: "Registro formal de 'buy':",
        options: ["get", "purchase", "grab"],
        answer: 1,
        why: "'purchase' es el registro formal.",
      },
      {
        kind: "choice",
        q: "«It could be argued that…» marca…",
        options: ["un hecho", "una interpretación matizada (hedging)", "una orden"],
        answer: 1,
        why: "Fórmula de hedging: señala interpretación, no hecho.",
      },
      {
        kind: "choice",
        q: "La 'regla de tres' (clear, simple, effective) es un recurso…",
        options: ["gramatical", "retórico/persuasivo", "de pronunciación"],
        answer: 1,
        why: "Es un recurso retórico que da fuerza al mensaje.",
      },
    ],
    activity: {
      title: "Autoevaluación C1",
      steps: [
        "Escribe un texto estructurado de ~200 palabras defendiendo una postura compleja.",
        "Grábate 3 minutos exponiéndola con recursos retóricos y sin traducir.",
        "Marca qué descriptores C1 dominas y cuáles pulir antes de C2.",
      ],
    },
    selfCheck: [
      "Medio y reformulo para otros.",
      "Hablo con naturalidad (habla conectada) sin traducir.",
      "Elijo el registro y la palabra precisos.",
      "Persuado y escribo documentos complejos y cohesionados.",
    ],
    summary: [
      "C1 = dominio operativo: flexibilidad y eficacia casi sin esfuerzo.",
      "Pilares: mediación, naturalidad, precisión, persuasión, pensar en inglés.",
      "C2 será pulir el arte (sutileza y matiz), no aprender técnica nueva.",
    ],
  },

  // ─────────────────────────────── C2 · maestría ────────────────────────────
  "fon-nativo": {
    intro:
      "En C2 tu pronunciación ya es inteligible sin esfuerzo; el objetivo es pulir: prosodia, ritmo y matices que te acercan a un hablante competente. No se trata de 'perder acento', sino de que tu música inglesa sea tan natural que deje de distraer.",
    goal: "pulir prosodia y ritmo hasta un habla natural y sin esfuerzo para el oyente.",
    sections: [
      {
        h: "Elige y sé consistente con un modelo",
        tldr: "Coherencia de acento importa más que 'cuál' elijas.",
        body: [
          "Mezclar rasgos de acento británico y americano en la misma frase distrae. Elige un modelo de referencia (p. ej. inglés británico estándar o americano general) y sé consistente en vocales y ritmo.",
        ],
        examples: [
          { en: "schedule: /ˈʃedjuːl/ (BrE) vs /ˈskedʒuːl/ (AmE)", es: "elige uno y mantenlo." },
        ],
      },
      {
        h: "La prosodia es el último 10%",
        tldr: "Ritmo, acento de la frase y melodía te dan naturalidad total.",
        bullets: [
          "Acento de frase: la palabra más importante lleva el golpe fuerte y puede cambiar el sentido.",
          "Formas débiles impecables: la fluidez vive en las sílabas átonas bien reducidas.",
          "Enlace y ritmo natural, sin pausas 'de dictado'.",
        ],
        tip: "Graba y compara microfragmentos con un modelo nativo. En C2, el progreso está en detalles finos que solo se oyen al comparar de cerca.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "En C2, la meta de pronunciación es…",
        options: [
          "eliminar por completo cualquier acento",
          "pulir prosodia y ritmo para un habla natural y consistente",
          "hablar lo más rápido posible",
        ],
        answer: 1,
        why: "C2 = naturalidad y consistencia, no borrar la identidad del hablante.",
      },
      {
        kind: "choice",
        q: "Mezclar rasgos británicos y americanos en la misma frase…",
        options: ["suena más culto", "distrae y resta naturalidad", "es obligatorio en C2"],
        answer: 1,
        why: "La consistencia de modelo es clave para sonar natural.",
      },
    ],
    activity: {
      title: "Afinado fino",
      steps: [
        "Elige un modelo de acento y un clip de 20 segundos.",
        "Haz shadowing centrándote en el acento de frase y las formas débiles.",
        "Grábate, compara microfragmento a microfragmento y ajusta.",
      ],
    },
    selfCheck: [
      "Mantengo un modelo de acento consistente.",
      "Coloco bien el acento de frase.",
      "Reduzco las sílabas átonas con naturalidad.",
    ],
    summary: [
      "C2 = pulir, no borrar acento: naturalidad y consistencia.",
      "La prosodia (ritmo, acento de frase, melodía) es el último 10%.",
      "El progreso fino se oye comparando de cerca con un modelo.",
    ],
  },

  "voc-matiz": {
    intro:
      "El léxico casi nativo no es saber más palabras: es sentir su connotación. 'Slim', 'slender' y 'skinny' significan 'delgado', pero una halaga y otra insulta. En C2 eliges la palabra por el matiz exacto que quieres transmitir.",
    goal: "elegir palabras por su connotación y matiz precisos.",
    sections: [
      {
        h: "Connotación: el aura de la palabra",
        tldr: "Sinónimos denotan lo mismo pero connotan distinto.",
        compare: {
          left: {
            title: "Connotación positiva/neutra",
            points: ["slim, slender (elogio)", "confident (seguro)", "thrifty (ahorrador)", "curious (interesado)"],
          },
          right: {
            title: "Connotación negativa",
            points: ["skinny, scrawny (crítica)", "arrogant (arrogante)", "stingy (tacaño)", "nosy (entrometido)"],
          },
          note: "Denotan casi lo mismo; el matiz cambia el mensaje y tu intención.",
        },
      },
      {
        h: "Colocación de precisión e idiomaticidad",
        tldr: "Lo natural es decir exactamente lo que un nativo diría.",
        examples: [
          { en: "a strong argument (no 'a powerful argument' en muchos contextos)", es: "la colocación exacta suena nativa." },
          { en: "deeply grateful / bitterly disappointed", es: "intensificadores que 'pegan' con su adjetivo." },
        ],
        tip: "Fíjate en las connotaciones al leer/escuchar nativos: anota por qué eligieron ESA palabra y no su sinónimo. El matiz se adquiere por exposición atenta.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Para HALAGAR a alguien por estar delgado, dirías…",
        options: ["You look skinny.", "You look slim.", "You look scrawny."],
        answer: 1,
        why: "'slim/slender' tienen connotación positiva; 'skinny/scrawny', negativa.",
      },
      {
        kind: "choice",
        q: "'Stingy' frente a 'thrifty' para describir a alguien con el dinero:",
        options: [
          "Son idénticos",
          "'thrifty' es positivo (ahorrador); 'stingy' es negativo (tacaño)",
          "'stingy' es un elogio",
        ],
        answer: 1,
        why: "Misma idea, connotación opuesta: thrifty (+) vs stingy (−).",
      },
      {
        kind: "choice",
        q: "Dominar vocabulario en C2 consiste sobre todo en…",
        options: [
          "acumular palabras raras",
          "elegir por connotación y colocación precisas",
          "usar siempre términos técnicos",
        ],
        answer: 1,
        why: "C2 = precisión de matiz y naturalidad, no rareza.",
      },
    ],
    activity: {
      title: "Escala de connotaciones",
      steps: [
        "Elige 3 adjetivos y busca 2-3 sinónimos de cada uno.",
        "Ordénalos de connotación positiva a negativa.",
        "Escribe una frase donde el matiz elegido cambie la intención.",
      ],
    },
    selfCheck: [
      "Distingo connotación positiva/negativa entre sinónimos.",
      "Elijo la palabra por el matiz que quiero transmitir.",
      "Uso colocaciones de precisión que suenan nativas.",
    ],
    summary: [
      "Los sinónimos denotan igual pero connotan distinto.",
      "C2 = elegir por matiz e intención, no por rareza.",
      "El matiz se adquiere observando por qué el nativo eligió ESA palabra.",
    ],
  },

  "aud-cualquier": {
    intro:
      "La cima de la comprensión: entender cualquier acento y registro sin esfuerzo, incluso con ruido, habla rápida o coloquialismos. Ya no dependes de un inglés 'estándar y claro': te adaptas a la variedad real del mundo.",
    goal: "comprender cualquier acento y registro, incluso en condiciones difíciles.",
    sections: [
      {
        h: "La variedad de acentos",
        tldr: "El inglés real es escocés, irlandés, indio, australiano… no solo el de los cursos.",
        bullets: [
          "Cada acento tiene patrones propios de vocales y ritmo; la exposición los 'sintoniza'.",
          "Unos minutos de adaptación bastan cuando ya tienes una base sólida.",
          "El contexto compensa lo que un acento nuevo te dificulta al principio.",
        ],
        examples: [
          { en: "AmE 'water' /ˈwɑːɾər/ vs BrE /ˈwɔːtə/ vs algunas variantes con 't' glotal", es: "la misma palabra, mundos distintos." },
        ],
      },
      {
        h: "Registro extremo: muy formal o muy coloquial",
        tldr: "Del discurso académico al argot callejero.",
        tip: "Expón tu oído a propósito a lo incómodo: un acento que te cueste, un pódcast muy coloquial. La incomodidad controlada es donde crece la comprensión.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Ante un acento regional nuevo (p. ej. escocés), lo normal en C2 es…",
        options: [
          "no entender nada nunca",
          "necesitar unos minutos de adaptación y luego seguir bien",
          "pedir que cambien de acento",
        ],
        answer: 1,
        why: "Con base sólida, el oído se sintoniza a un acento nuevo en poco tiempo.",
      },
      {
        kind: "choice",
        q: "¿Qué ayuda más a comprender un acento difícil?",
        options: [
          "Evitarlo siempre",
          "Exposición deliberada y apoyarse en el contexto",
          "Subtítulos en tu idioma",
        ],
        answer: 1,
        why: "La exposición sintoniza el oído; el contexto rellena los huecos.",
      },
    ],
    activity: {
      title: "Tour de acentos",
      steps: [
        "Elige 3 clips con acentos distintos (p. ej. escocés, indio, australiano).",
        "Escucha 2 minutos de cada uno sin subtítulos y resume la idea.",
        "Anota 2 rasgos que notaste en cada acento (vocal, ritmo, 'r').",
      ],
    },
    selfCheck: [
      "Me adapto a acentos regionales tras unos minutos.",
      "Comprendo registros extremos (académico y muy coloquial).",
      "Uso el contexto para compensar dificultad de acento o ruido.",
    ],
    summary: [
      "El inglés real es muchos acentos: la exposición sintoniza el oído.",
      "Con base sólida, adaptarse a un acento nuevo es cuestión de minutos.",
      "El contexto compensa acento, ruido y coloquialismos.",
    ],
  },

  "lec-cualquier": {
    intro:
      "Leer cualquier texto —literario, abstracto, filosófico, técnico— con aprecio por su estilo. En C2 no solo comprendes ideas difíciles: percibes CÓMO están escritas y por qué el autor eligió esa forma.",
    goal: "leer y apreciar cualquier texto, incluidos los literarios y abstractos.",
    sections: [
      {
        h: "Texto abstracto y denso",
        tldr: "Sigues ideas complejas sin apoyo concreto.",
        body: [
          "Un ensayo filosófico o un texto teórico avanza por conceptos, no por ejemplos. La clave es sostener la línea del argumento y tolerar la abstracción sin exigir que 'se aterrice' todo.",
        ],
      },
      {
        h: "Apreciar el estilo",
        tldr: "El CÓMO comunica tanto como el QUÉ.",
        examples: [
          { en: "Metáfora, ritmo de la prosa, ironía sostenida", es: "recursos que cargan de significado la forma." },
          { en: "A short, blunt sentence after long ones hits hard.", es: "el ritmo sintáctico crea efecto." },
        ],
        tip: "Al leer literatura, pregúntate por qué el autor eligió esa palabra, ese ritmo, ese punto de vista. Leer como escritor multiplica lo que captas.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "En un texto abstracto/filosófico, la estrategia clave es…",
        options: [
          "exigir un ejemplo concreto para cada idea",
          "sostener la línea del argumento y tolerar la abstracción",
          "saltarte los conectores",
        ],
        answer: 1,
        why: "El texto abstracto avanza por conceptos; hay que seguir el hilo lógico.",
      },
      {
        kind: "choice",
        q: "Una frase corta y seca tras varias largas suele buscar…",
        options: ["un error de estilo", "un efecto de énfasis/impacto", "rellenar espacio"],
        answer: 1,
        why: "El contraste de ritmo sintáctico crea énfasis: es recurso de estilo.",
      },
    ],
    activity: {
      title: "Lee como escritor",
      steps: [
        "Elige un pasaje literario que te guste.",
        "Identifica 2 recursos de estilo (metáfora, ritmo, ironía, punto de vista).",
        "Explica en 2 frases qué EFECTO logra cada recurso.",
      ],
    },
    selfCheck: [
      "Sigo textos abstractos sin necesitar ejemplos concretos.",
      "Aprecio recursos de estilo y su efecto.",
      "Leo 'como escritor', atento al cómo y no solo al qué.",
    ],
    summary: [
      "C2 lee cualquier texto, incluido el abstracto y el literario.",
      "El estilo (cómo) comunica tanto como el contenido (qué).",
      "Leer como escritor multiplica lo que captas.",
    ],
  },

  "ora-adaptar": {
    intro:
      "La cumbre del habla: adaptar el lenguaje al contexto con total sutileza. Decir sin decir, insinuar, suavizar, bromear con tacto. En C2 manejas la implicatura y el tono como un hablante competente, sin esfuerzo aparente.",
    goal: "adaptar registro, tono e implicatura al contexto con sutileza.",
    sections: [
      {
        h: "Implicatura: decir sin decir",
        tldr: "Comunicas más de lo que las palabras afirman.",
        examples: [
          { en: "It's getting late… (= deberíamos irnos)", es: "insinúas sin ordenar." },
          { en: "That's… an interesting choice. (posible crítica velada)", es: "el tono marca lo implícito." },
        ],
      },
      {
        h: "Diplomacia y agilidad de registro",
        tldr: "Cambias de tono al vuelo según con quién hablas.",
        bullets: [
          "Suavizar malas noticias: 'I'm afraid there might be a slight issue…'.",
          "Del humor con amigos a la formalidad con un cliente en segundos.",
          "El tono y la elección de palabras hacen el trabajo fino, no el volumen.",
        ],
        tip: "La sutileza es cultural: observa cómo los nativos rechazan, critican o piden favores 'de lado'. La forma indirecta suele ser la más eficaz.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "«It's getting late…» en una visita suele implicar…",
        options: ["que quieres saber la hora", "que sugieres terminar/irse", "que tienes sueño literal"],
        answer: 1,
        why: "Implicatura: se sugiere terminar sin decirlo directamente.",
      },
      {
        kind: "choice",
        q: "Dar una mala noticia con tacto en inglés suena como…",
        options: [
          "There's a huge problem, your fault.",
          "I'm afraid there might be a slight issue…",
          "This is bad.",
        ],
        answer: 1,
        why: "Suavizar con 'I'm afraid… might… slight' es diplomacia de registro.",
      },
    ],
    activity: {
      title: "Di lo mismo de tres formas",
      steps: [
        "Elige un mensaje delicado (rechazar una invitación, criticar una idea).",
        "Exprésalo de tres formas: directa, diplomática e implícita.",
        "Decide cuál usarías con un amigo, un jefe y un desconocido.",
      ],
    },
    selfCheck: [
      "Uso la implicatura para sugerir sin afirmar.",
      "Suavizo mensajes delicados con diplomacia.",
      "Cambio de registro y tono al vuelo según el contexto.",
    ],
    summary: [
      "C2 adapta registro, tono e implicatura con sutileza.",
      "La implicatura comunica más de lo que se dice.",
      "La forma indirecta suele ser la más eficaz y elegante.",
    ],
  },

  "esc-estilo": {
    intro:
      "Escribir con estilo es tener voz: que un texto tuyo se reconozca, se adecúe a su género y logre un efecto buscado. En C2 no solo escribes correcto y claro: escribes bien, con intención estética y control del registro.",
    goal: "escribir con voz propia, adecuación de género y recursos de estilo.",
    sections: [
      {
        h: "Voz y adecuación al género",
        tldr: "Cada género pide un tono; tu voz lo habita sin romperlo.",
        bullets: [
          "Un artículo de opinión, un relato y un informe tienen 'reglas' de tono distintas.",
          "La voz propia se nota en el ritmo, la elección léxica y el punto de vista.",
          "Adecuar el registro no es borrar tu voz: es afinarla al contexto.",
        ],
      },
      {
        h: "Recursos y economía",
        tldr: "El buen estilo suele ser claridad + ritmo + concisión.",
        examples: [
          { en: "Vary sentence length for rhythm.", es: "alterna frases largas y cortas." },
          { en: "Cut every word that doesn't earn its place.", es: "edita: menos es más." },
        ],
        more: [
          "Recursos: metáfora medida, paralelismo, contraste, la frase corta de remate.",
          "Evita el exceso: el adorno que no aporta, resta. La contención es estilo.",
        ],
        tip: "Escribe, luego recorta. La mayoría de los textos mejoran quitando el 20% de las palabras. Editar es donde nace el estilo.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Adecuar el registro a un género significa…",
        options: [
          "escribir siempre igual",
          "afinar tono y forma al contexto sin perder tu voz",
          "usar las palabras más largas",
        ],
        answer: 1,
        why: "Adecuación = ajustar al género conservando voz propia.",
      },
      {
        kind: "choice",
        q: "Un principio central del buen estilo es…",
        options: [
          "añadir cuantos más adornos mejor",
          "claridad, ritmo y concisión (cortar lo que no aporta)",
          "usar solo frases largas",
        ],
        answer: 1,
        why: "La economía y el ritmo son núcleo del estilo eficaz.",
      },
      {
        kind: "choice",
        q: "Alternar frases largas y cortas sirve para…",
        options: ["confundir al lector", "crear ritmo y énfasis", "alargar el texto"],
        answer: 1,
        why: "La variación de longitud crea ritmo y controla el énfasis.",
      },
    ],
    activity: {
      title: "Edita para dar estilo",
      steps: [
        "Escribe un párrafo sobre un tema libre.",
        "Recórtalo un 20% sin perder sentido.",
        "Alterna una frase corta de remate al final y compara el efecto.",
      ],
    },
    selfCheck: [
      "Adecúo tono y forma al género conservando mi voz.",
      "Uso recursos de estilo con medida.",
      "Edito para lograr claridad, ritmo y concisión.",
    ],
    summary: [
      "Estilo = voz propia + adecuación al género + efecto buscado.",
      "Claridad, ritmo y concisión son el núcleo.",
      "Editar (recortar) es donde nace el estilo.",
    ],
  },

  "cul-intercultural": {
    intro:
      "La competencia intercultural crítica es la maestría cultural: no solo conocer 'la cultura anglosajona', sino mediar entre culturas con conciencia de tus propios sesgos, sin caer en estereotipos. Es ver la lengua como una ventana a muchas formas de pensar.",
    goal: "mediar entre culturas con conciencia crítica y sin estereotipos.",
    sections: [
      {
        h: "Más allá del estereotipo",
        tldr: "No hay 'una' cultura anglosajona: hay variedad y matices.",
        body: [
          "El inglés es lengua materna y franca de cientos de millones de personas con culturas muy distintas. Generalizar ('los ingleses son…') falsea la realidad; la mirada crítica reconoce la diversidad interna.",
        ],
      },
      {
        h: "Conciencia de los propios sesgos",
        tldr: "Interpretas al otro desde tu cultura sin darte cuenta.",
        bullets: [
          "Lo que en una cultura es cortesía, en otra puede ser distancia o excesiva franqueza.",
          "Mediar es explicar esos matices en ambas direcciones.",
          "La humildad cultural (asumir que no lo sabes todo) evita malentendidos.",
        ],
        tip: "Ante un choque cultural, pregunta antes de juzgar: '¿es esto lo habitual aquí?'. La curiosidad respetuosa es la clave de la competencia intercultural.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "La competencia intercultural crítica implica…",
        options: [
          "memorizar reglas de 'la cultura inglesa'",
          "reconocer la diversidad y tus propios sesgos, sin estereotipar",
          "adoptar por completo otra cultura",
        ],
        answer: 1,
        why: "Es conciencia crítica de la diversidad y de los sesgos propios.",
      },
      {
        kind: "choice",
        q: "Ante un comportamiento cultural que te choca, lo más maduro es…",
        options: [
          "juzgarlo desde tu cultura",
          "preguntar y contextualizar antes de juzgar",
          "asumir que está mal",
        ],
        answer: 1,
        why: "La curiosidad respetuosa evita malentendidos y estereotipos.",
      },
    ],
    activity: {
      title: "Puente cultural",
      steps: [
        "Piensa en un malentendido cultural (real o posible) entre tu cultura y una angloparlante.",
        "Explícalo en inglés desde AMBOS puntos de vista, sin juzgar.",
        "Propón cómo lo mediarías para que las dos partes se entiendan.",
      ],
    },
    selfCheck: [
      "Reconozco la diversidad interna de las culturas angloparlantes.",
      "Soy consciente de mis propios sesgos culturales.",
      "Medio entre culturas explicando matices en ambas direcciones.",
    ],
    summary: [
      "No hay 'una' cultura anglosajona: cuidado con el estereotipo.",
      "Interpretamos al otro desde nuestra cultura: sé consciente del sesgo.",
      "Mediar con humildad y curiosidad es la maestría cultural.",
    ],
  },

  "hito-c2": {
    intro:
      "¡Hito final: maestría! C2 significa que comprendes prácticamente todo lo que lees y oyes sin esfuerzo, te expresas con espontaneidad, precisión y matices sutiles, y reconstruyes ideas de fuentes diversas con coherencia. Has recorrido el árbol entero.",
    goal: "confirmar la maestría del idioma en todas sus competencias.",
    sections: [
      {
        h: "¿Qué puedes hacer ya? (descriptores CEFR C2)",
        tldr: "Dominio casi total: comprendes todo y te expresas con matiz.",
        bullets: [
          "Comprendes con facilidad prácticamente todo lo que lees u oyes.",
          "Resumes y reconstruyes información de fuentes diversas de forma coherente.",
          "Te expresas espontáneamente, con gran fluidez y precisión, matizando significados incluso en situaciones complejas.",
        ],
      },
      {
        h: "El aprendizaje no termina",
        tldr: "La maestría se mantiene usando la lengua, no guardándola.",
        body: [
          "Incluso los nativos siguen aprendiendo palabras y matices toda su vida. Mantener C2 es seguir leyendo, escuchando, hablando y escribiendo sobre temas cada vez más variados.",
        ],
        tip: "Ahora usa el idioma como herramienta para otra cosa que te apasione: estudia, trabaja o crea EN inglés. El mejor mantenimiento es vivir en la lengua.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Matiz: para HALAGAR que alguien es delgado…",
        options: ["skinny", "slender", "scrawny"],
        answer: 1,
        why: "'slender/slim' tienen connotación positiva; 'skinny/scrawny', negativa.",
      },
      {
        kind: "choice",
        q: "«It's getting late…» en una visita implica…",
        options: ["preguntar la hora", "sugerir terminar la visita", "hablar del reloj"],
        answer: 1,
        why: "Implicatura: sugerir sin decirlo directamente.",
      },
      {
        kind: "choice",
        q: "La competencia intercultural crítica evita…",
        options: ["la diversidad", "los estereotipos y el sesgo no consciente", "el inglés formal"],
        answer: 1,
        why: "Reconoce diversidad y sesgos propios, sin estereotipar.",
      },
      {
        kind: "choice",
        q: "El mejor modo de MANTENER un C2 es…",
        options: [
          "dejar de practicar, ya está dominado",
          "seguir usando la lengua para cosas que te importan",
          "repasar solo gramática básica",
        ],
        answer: 1,
        why: "La maestría se mantiene viviendo en la lengua, no guardándola.",
      },
    ],
    activity: {
      title: "Vive en inglés",
      steps: [
        "Elige un proyecto real que harás EN inglés (un curso, un blog, un club de lectura).",
        "Define cómo el inglés será la herramienta, no el objetivo.",
        "Empieza hoy: la maestría se mantiene usándola.",
      ],
    },
    selfCheck: [
      "Comprendo casi todo lo que leo y oigo sin esfuerzo.",
      "Me expreso con precisión, matiz y espontaneidad.",
      "Reconstruyo información de fuentes diversas con coherencia.",
      "Uso el inglés como herramienta para otras metas.",
    ],
    summary: [
      "C2 = maestría: comprensión casi total y expresión con matiz.",
      "El aprendizaje no termina; se mantiene usando la lengua.",
      "Vive en inglés: que sea la herramienta, no el objetivo.",
    ],
  },
};
