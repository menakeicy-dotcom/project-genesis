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
      "El presente en inglés tiene DOS formas y no son intercambiables: el presente simple (rutinas y hechos) y el presente continuo (lo que ocurre ahora). Confundirlos es el error clásico de principiante.",
    sections: [
      {
        h: "Presente simple: rutinas, hechos, verdades",
        body: [
          "Se usa para lo habitual y lo general. Ojo con la tercera persona (he/she/it): el verbo añade -s.",
        ],
        examples: [
          { en: "I work every day.", es: "Trabajo todos los días." },
          { en: "She works in a bank.", es: "Ella trabaja en un banco.", note: "he/she/it → verbo + s." },
          { en: "Water boils at 100°C.", es: "El agua hierve a 100°C.", note: "Verdad general." },
        ],
      },
      {
        h: "Presente continuo: ahora mismo",
        body: [
          "Se forma con am/is/are + verbo-ing. Describe algo que sucede en este momento o temporalmente.",
        ],
        examples: [
          { en: "I am working now.", es: "Estoy trabajando ahora." },
          { en: "They are eating.", es: "Están comiendo." },
          { en: "She is studying this week.", es: "Está estudiando esta semana (temporal)." },
        ],
        tip: "Pista rápida: 'every day / usually / always' → presente simple. 'now / at the moment / right now' → presente continuo.",
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
  },
};
