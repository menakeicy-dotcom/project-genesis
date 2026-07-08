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
};
