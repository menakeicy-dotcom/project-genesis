/**
 * Lecciones interactivas de **Música** (disciplina en construcción, DRAFT).
 *
 * Mismo modelo `Lesson` y mismo estándar que Inglés, Programación y Matemáticas:
 * intro → aprende → practica (choice/fill/order/match) → actividad →
 * autoevaluación → resumen. La notación se representa con texto y bloques
 * monoespaciados que el motor ya renderiza (figuras, notas, intervalos, acordes).
 * El repaso espaciado funciona desde el primer momento porque hay práctica.
 *
 * Enfoque pedagógico: "sound before symbol" (Gordon/Kodály/Suzuki) — el oído y
 * el ritmo antes que la lectura; comprender e IMITAR antes que memorizar.
 * Fuentes de referencia: Berklee, ABRSM, musictheory.net, teoria.com, Ableton.
 */

import type { Lesson } from "@/modules/skill-tree/lesson";

export const MUS_LESSONS: Record<string, Lesson> = {
  // ─────────────────────────── Escucha y oído ───────────────────────────
  "mus-que-es": {
    intro:
      "Muchos creen que aprender música es aprender a leer partituras. Pero los niños hablan años antes de leer, y los músicos han tocado siglos antes de escribir. La música se aprende igual que una lengua: escuchando e imitando primero. Al símbolo se llega después del sonido.",
    goal: "entender que la música se aprende escuchando y haciendo, no memorizando símbolos.",
    sections: [
      {
        h: "Sonido antes que símbolo",
        tldr: "Primero se oye e imita; leer viene después, como en tu lengua materna.",
        body: [
          "La investigación en educación musical (Gordon, Kodály, Suzuki) coincide: el oído y el ritmo se desarrollan antes que la lectura. Si intentas leer sin haber escuchado, la partitura es un jeroglífico.",
          "'Audiar' es oír música en tu mente, sin que suene. Es la habilidad central del músico, y se entrena escuchando con atención.",
        ],
      },
      {
        h: "El talento es un mito útil de desmontar",
        tldr: "La musicalidad se construye con escucha y práctica, no es un don mágico.",
        tip: "Nadie 'nace sin oído'. Como el idioma, la música se adquiere con exposición y práctica. Empezar tarde no es un problema: la constancia sí importa.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Según cómo se aprende música de verdad, ¿qué va primero?",
        options: [
          "leer partituras",
          "escuchar e imitar (el oído)",
          "memorizar las notas",
        ],
        answer: 1,
        why: "'Sonido antes que símbolo': el oído y la imitación preceden a la lectura.",
      },
      {
        kind: "choice",
        q: "'Audiar' significa…",
        options: [
          "leer muy rápido",
          "oír música en tu mente sin que suene",
          "tocar muy fuerte",
        ],
        answer: 1,
        why: "La audiation (Gordon) es imaginar el sonido internamente: la base del músico.",
      },
      {
        kind: "choice",
        q: "'No tengo oído para la música'…",
        options: [
          "es cierto: se nace con oído o no",
          "es un mito: la musicalidad se entrena",
          "significa que no puedes cantar nunca",
        ],
        answer: 1,
        why: "Como el idioma, el oído musical se desarrolla con práctica y exposición.",
      },
    ],
    activity: {
      title: "Escucha como músico",
      steps: [
        "Elige una canción que te encante.",
        "Escúchala una vez centrándote SOLO en cómo te hace sentir.",
        "Escúchala otra vez intentando 'audiar' la melodía en tu cabeza tras pausarla.",
      ],
    },
    selfCheck: [
      "Explico por qué el oído va antes que la lectura.",
      "Sé qué es audiar (oír en la mente).",
      "No creo que la música necesite un 'don' innato.",
    ],
    summary: [
      "La música se aprende como una lengua: oír e imitar primero.",
      "Audiar = oír música en la mente; es la habilidad central.",
      "La musicalidad se entrena; el 'talento' es un mito.",
    ],
  },

  "mus-escucha-activa": {
    intro:
      "Oír es pasivo; escuchar es una habilidad. Un músico no oye 'una canción': oye una batería marcando el pulso, un bajo moviéndose, una voz con su melodía y unos acordes de fondo. Aprender a separar esas capas es el primer superpoder del oído.",
    goal: "distinguir los elementos que forman una canción al escucharla.",
    sections: [
      {
        h: "Las capas de una canción",
        tldr: "Ritmo, melodía, armonía y timbre suenan a la vez; sepáralos con la atención.",
        bullets: [
          "Ritmo: el pulso y los patrones (batería, percusión).",
          "Melodía: la línea que tararearías (voz, instrumento principal).",
          "Armonía: los acordes que acompañan (guitarra, teclado).",
          "Timbre: el 'color' de cada instrumento (qué suena, no qué nota).",
        ],
      },
      {
        h: "Escuchar una capa a la vez",
        tldr: "Reescucha la misma canción siguiendo solo un instrumento cada vez.",
        tip: "El error típico es quedarse solo con la melodía o la letra. Prueba a escuchar una canción SOLO siguiendo la batería, luego solo el bajo. Oirás cosas que llevabas años ignorando.",
      },
    ],
    practice: [
      {
        kind: "match",
        q: "Empareja cada elemento con lo que escuchas:",
        pairs: [
          { left: "Ritmo", right: "El pulso y la batería" },
          { left: "Melodía", right: "La línea que tararearías" },
          { left: "Armonía", right: "Los acordes de acompañamiento" },
        ],
        why: "Separar capas es la base de la escucha activa.",
      },
      {
        kind: "choice",
        q: "El 'timbre' es…",
        options: [
          "lo aguda o grave que es una nota",
          "el color característico de cada instrumento",
          "la velocidad de la canción",
        ],
        answer: 1,
        why: "El timbre distingue una flauta de un violín aunque toquen la misma nota.",
      },
      {
        kind: "choice",
        q: "¿Qué diferencia oír de escuchar?",
        options: [
          "nada, son lo mismo",
          "escuchar es prestar atención con intención",
          "oír requiere auriculares",
        ],
        answer: 1,
        why: "La escucha activa es dirigir la atención a los elementos.",
      },
    ],
    activity: {
      title: "Disecciona una canción",
      steps: [
        "Elige una canción con banda (batería, bajo, voz…).",
        "Escúchala 3 veces siguiendo cada vez un instrumento distinto.",
        "Anota qué instrumentos identificas y qué hace cada uno.",
      ],
    },
    selfCheck: [
      "Separo ritmo, melodía y armonía al escuchar.",
      "Reconozco el timbre de algunos instrumentos.",
      "Escucho con intención, no de fondo.",
    ],
    summary: [
      "Escuchar es una habilidad; oír es pasivo.",
      "Capas: ritmo, melodía, armonía, timbre.",
      "Reescucha siguiendo una sola capa cada vez.",
    ],
  },

  "mus-oido-tono": {
    intro:
      "Antes de nombrar notas, tu oído debe distinguir lo más básico de la altura: ¿este sonido es más agudo o más grave que aquel? Parece obvio, pero es la base de la melodía, los intervalos y la lectura. Y ojo con una confusión clásica: agudo/grave no es lo mismo que fuerte/suave.",
    goal: "reconocer de oído si un sonido es más agudo o más grave que otro.",
    sections: [
      {
        h: "Altura: agudo vs. grave",
        tldr: "Agudo = 'fino/alto' (un silbido); grave = 'gordo/bajo' (un trueno).",
        body: [
          "La altura depende de la frecuencia: más vibraciones por segundo = más agudo. Una flauta suena aguda; un contrabajo, grave.",
        ],
        examples: [
          { text: "Voz de niño / soprano", mono: "AGUDO", sub: "Frecuencia alta." },
          { text: "Voz grave / bajo", mono: "GRAVE", sub: "Frecuencia baja." },
        ],
      },
      {
        h: "No confundas altura con volumen",
        tldr: "Un sonido agudo puede ser suave, y uno grave puede ser fortísimo.",
        tip: "Agudo/grave = qué NOTA es (altura). Fuerte/suave = cuánta ENERGÍA tiene (volumen). Un trueno es grave y fuerte; un mosquito, agudo y suave.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Un silbido comparado con un trueno es…",
        options: ["más grave", "más agudo", "igual de agudo"],
        answer: 1,
        why: "El silbido tiene frecuencia alta: es más agudo.",
      },
      {
        kind: "choice",
        q: "Agudo/grave se refiere a…",
        options: ["el volumen", "la altura (qué nota)", "el instrumento"],
        answer: 1,
        why: "Es la altura del sonido, no su volumen.",
      },
      {
        kind: "order",
        q: "Ordena de MÁS GRAVE a MÁS AGUDO:",
        items: ["Contrabajo", "Guitarra", "Flauta", "Silbido"],
        why: "De menor a mayor frecuencia.",
      },
    ],
    activity: {
      title: "Grave o agudo",
      steps: [
        "Canta la nota más grave que puedas y luego la más aguda.",
        "Con una app de piano, toca dos notas y di cuál es más aguda antes de mirar.",
        "Reto: distingue si una segunda nota SUBE o BAJA respecto a la primera.",
      ],
    },
    selfCheck: [
      "Distingo agudo de grave de oído.",
      "No confundo altura con volumen.",
      "Digo si una nota sube o baja respecto a otra.",
    ],
    summary: [
      "Altura: agudo (frecuencia alta) vs. grave (baja).",
      "Altura ≠ volumen: agudo/grave no es fuerte/suave.",
      "Distinguir subir/bajar es la base de la melodía.",
    ],
  },

  "mus-oido-intervalos": {
    intro:
      "Aquí ocurre la magia del oído: reconocer la DISTANCIA entre dos notas sin verlas. El truco de los profesionales no es memorizar sonidos abstractos, sino asociar cada intervalo al comienzo de una canción que ya conoces.",
    goal: "reconocer intervalos comunes usando canciones ancla.",
    sections: [
      {
        h: "Canciones ancla",
        tldr: "Cada intervalo 'suena como' el inicio de una canción famosa.",
        code: "Octava      → 'Somewhere over the rainbow' (Some-where)\nQuinta justa → 'Estrellita/Twinkle' (Twin-kle) o Star Wars\nCuarta justa → 'La Marcha nupcial' / himno\nTercera mayor→ 'Oh cuando los santos' / timbre feliz",
        body: [
          "Cuando oigas dos notas, tararea tus canciones ancla hasta que una 'encaje': ese es el intervalo.",
        ],
      },
      {
        h: "Por qué funciona",
        tldr: "El oído recuerda relaciones, no notas sueltas.",
        tip: "No intentes memorizar 'cómo suena una quinta' en abstracto. Ánclala a una canción tuya. El oído reconoce por comparación, no por memoria pura.",
      },
    ],
    practice: [
      {
        kind: "match",
        q: "Empareja cada intervalo con una canción ancla común:",
        pairs: [
          { left: "Octava", right: "Over the Rainbow" },
          { left: "Quinta justa", right: "Twinkle / Star Wars" },
          { left: "Tercera mayor", right: "Oh When the Saints" },
        ],
        why: "Anclar a canciones conocidas es el método estándar de ear training.",
      },
      {
        kind: "choice",
        q: "Para reconocer un intervalo de oído, lo mejor es…",
        options: [
          "memorizar su sonido en abstracto",
          "compararlo con una canción que ya conoces",
          "mirar la partitura",
        ],
        answer: 1,
        why: "El oído reconoce por comparación: usa canciones ancla.",
      },
      {
        kind: "choice",
        q: "Las dos primeras notas de 'Twinkle Twinkle' forman una…",
        options: ["octava", "quinta justa", "segunda"],
        answer: 1,
        why: "'Twin-kle' salta una quinta justa.",
      },
    ],
    activity: {
      title: "Tu diccionario de intervalos",
      steps: [
        "Elige TUS propias canciones ancla para octava, quinta y tercera.",
        "En una app de ear training (teoria.com), acierta 5 intervalos seguidos.",
        "Reto: saca de oído las dos primeras notas de una canción y nombra el intervalo.",
      ],
    },
    selfCheck: [
      "Tengo canciones ancla para 2-3 intervalos.",
      "Reconozco una octava y una quinta de oído.",
      "Uso la comparación, no la memoria abstracta.",
    ],
    summary: [
      "Un intervalo es la distancia entre dos notas.",
      "Se reconoce anclándolo a canciones conocidas.",
      "El oído compara; no memoriza sonidos sueltos.",
    ],
  },

  // ─────────────────────────── Ritmo y tempo ───────────────────────────
  "mus-pulso": {
    intro:
      "Cuando das palmas en un concierto o mueves el pie sin pensarlo, estás sintiendo el pulso: el latido constante bajo la música. Es lo primero que percibimos (los bebés se mueven con él) y el cimiento de todo el ritmo. Antes de contarlo, hay que SENTIRLO.",
    goal: "sentir y mantener un pulso constante.",
    sections: [
      {
        h: "El latido de la música",
        tldr: "El pulso es regular y constante, como el tic-tac de un reloj.",
        body: [
          "El pulso no cambia de velocidad dentro de una sección: es el marco estable sobre el que ocurre todo lo demás. El tempo es cuán rápido va ese pulso (lento, rápido).",
        ],
      },
      {
        h: "Pulso no es lo mismo que ritmo",
        tldr: "El pulso es constante; el ritmo son los patrones que bailan sobre él.",
        compare: {
          left: {
            title: "Pulso",
            points: ["Constante y regular", "El latido de fondo", "Lo marcas con el pie"],
          },
          right: {
            title: "Ritmo",
            points: ["Patrones variados", "Notas largas y cortas", "Baila sobre el pulso"],
          },
          note: "El pulso es el suelo; el ritmo, el baile encima.",
        },
        tip: "El error más común: acelerar en las partes fáciles y frenar en las difíciles. El pulso debe permanecer firme aunque el ritmo se complique.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "El pulso de una canción es…",
        options: [
          "un latido constante y regular",
          "los patrones de notas largas y cortas",
          "la parte más aguda",
        ],
        answer: 0,
        why: "El pulso es el latido estable; el ritmo son los patrones encima.",
      },
      {
        kind: "choice",
        q: "El 'tempo' es…",
        options: ["cuán rápido va el pulso", "el volumen", "el instrumento principal"],
        answer: 0,
        why: "Tempo = velocidad del pulso (lento/rápido).",
      },
      {
        kind: "choice",
        q: "Al tocar algo difícil, mucha gente tiende a…",
        options: [
          "mantener el pulso perfecto",
          "frenar sin darse cuenta",
          "subir el volumen",
        ],
        answer: 1,
        why: "Frenar en lo difícil rompe el pulso: hay que mantenerlo firme.",
      },
    ],
    activity: {
      title: "Siente el latido",
      steps: [
        "Pon tu canción favorita y marca el pulso con el pie o palmas.",
        "Baja el volumen a la mitad y sigue marcándolo: ¿mantienes la velocidad?",
        "Reto: marca el pulso mientras caminas al ritmo de la música.",
      ],
    },
    selfCheck: [
      "Siento y mantengo un pulso constante.",
      "Distingo pulso de ritmo.",
      "No acelero ni freno sin querer.",
    ],
    summary: [
      "El pulso es el latido constante de la música.",
      "El tempo es su velocidad.",
      "Pulso = suelo estable; ritmo = baile encima.",
    ],
  },

  "mus-compas": {
    intro:
      "Los pulsos no van sueltos: se agrupan y uno de ellos se siente más fuerte. Ese acento periódico crea el compás, y es lo que hace que un vals se sienta distinto de una marcha. Contar 'UN-dos-tres' o 'UN-dos-tres-cuatro' es sentir el compás.",
    goal: "identificar el compás de una canción (binario, ternario, cuaternario).",
    sections: [
      {
        h: "Agrupar pulsos con un acento",
        tldr: "El primer tiempo de cada compás se siente más fuerte (el 'UN').",
        code: "3/4 (vals):    UN dos tres | UN dos tres\n4/4 (pop/rock): UN dos tres cuatro | ...\n2/4 (marcha):  UN dos | UN dos",
        body: [
          "El número de arriba dice cuántos pulsos hay por compás. El 4/4 es tan común que se llama 'compás de compasillo'.",
        ],
      },
      {
        h: "El acento da carácter",
        tldr: "Ternario (3) se balancea; cuaternario (4) marcha.",
        tip: "Para hallar el compás, cuenta cuántos pulsos hay hasta que vuelve el acento fuerte. Si cuentas 1-2-3 y vuelve, es ternario; si 1-2-3-4, cuaternario.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "En un compás, ¿qué tiempo se siente más fuerte?",
        options: ["el último", "el primero", "ninguno"],
        answer: 1,
        why: "El primer tiempo lleva el acento principal.",
      },
      {
        kind: "choice",
        q: "Un vals se cuenta…",
        options: ["1-2 | 1-2", "1-2-3 | 1-2-3", "1-2-3-4"],
        answer: 1,
        why: "El vals es ternario: 3/4.",
      },
      {
        kind: "match",
        q: "Empareja cada compás con su cuenta:",
        pairs: [
          { left: "2/4", right: "1-2" },
          { left: "3/4", right: "1-2-3" },
          { left: "4/4", right: "1-2-3-4" },
        ],
        why: "El número de arriba = pulsos por compás.",
      },
    ],
    activity: {
      title: "Cuenta el compás",
      steps: [
        "Pon un vals y cuenta 1-2-3 sintiendo el acento en el 1.",
        "Pon una canción pop y comprueba que casi siempre es 1-2-3-4.",
        "Reto: encuentra una canción en 3/4 y otra en 4/4 tú mismo.",
      ],
    },
    selfCheck: [
      "Siento el acento del primer tiempo.",
      "Cuento correctamente 3/4 y 4/4.",
      "Distingo un compás ternario de uno cuaternario.",
    ],
    summary: [
      "El compás agrupa pulsos con un acento en el primero.",
      "El número de arriba = pulsos por compás.",
      "3/4 se balancea (vals); 4/4 marcha (pop/rock).",
    ],
  },

  "mus-figuras": {
    intro:
      "Si el pulso es el latido, las figuras dicen cuánto dura cada sonido: unas ocupan varios pulsos, otras se parten en trozos rápidos. Entender su duración RELATIVA (una vale el doble que otra) es más útil que memorizar nombres.",
    goal: "relacionar cada figura con su duración en pulsos.",
    sections: [
      {
        h: "Duraciones que se parten por la mitad",
        tldr: "Cada figura dura la mitad que la anterior.",
        code: "Redonda  = 4 pulsos   ●\nBlanca   = 2 pulsos   ○ ○\nNegra    = 1 pulso    ♩ ♩ ♩ ♩\nCorchea  = ½ pulso    ♪♪ ♪♪ ♪♪ ♪♪",
        body: [
          "En un compás de 4/4 cabe una redonda, o dos blancas, o cuatro negras, o ocho corcheas: todas suman 4 pulsos.",
        ],
      },
      {
        h: "Piénsalo en pulsos, no en nombres",
        tldr: "Lo importante es cuántos pulsos ocupa, no cómo se llama.",
        tip: "Regla de oro: una negra = 1 pulso (en 4/4). A partir de ahí, la blanca dura 2, la redonda 4 y la corchea ½. Es un sistema de mitades.",
      },
    ],
    practice: [
      {
        kind: "fill",
        q: "En 4/4, ¿cuántas negras caben en una redonda?",
        accept: ["4", "cuatro"],
        hint: "Redonda = 4 pulsos; negra = 1.",
        why: "4 negras (4 pulsos) = 1 redonda.",
      },
      {
        kind: "choice",
        q: "Una blanca dura…",
        options: ["1 pulso", "2 pulsos", "medio pulso"],
        answer: 1,
        why: "La blanca vale 2 pulsos (dos negras).",
      },
      {
        kind: "order",
        q: "Ordena de MÁS LARGA a MÁS CORTA:",
        items: ["Redonda", "Blanca", "Negra", "Corchea"],
        why: "Cada una dura la mitad de la anterior.",
      },
      {
        kind: "fill",
        q: "¿Cuántas corcheas caben en una negra?",
        accept: ["2", "dos"],
        hint: "La corchea es media negra.",
        why: "2 corcheas = 1 negra.",
      },
    ],
    activity: {
      title: "Palmea las figuras",
      steps: [
        "Marca un pulso constante con el pie.",
        "Palmea negras (una por pulso), luego blancas (una cada dos), luego corcheas (dos por pulso).",
        "Reto: alterna un compás de negras y otro de corcheas sin perder el pulso.",
      ],
    },
    selfCheck: [
      "Relaciono cada figura con su duración en pulsos.",
      "Sé que el sistema es de mitades.",
      "Palmeo negras y corcheas sobre un pulso.",
    ],
    summary: [
      "Las figuras indican duración; cada una es la mitad de la anterior.",
      "En 4/4: negra 1, blanca 2, redonda 4, corchea ½.",
      "Piensa en pulsos, no en nombres.",
    ],
  },

  "mus-subdivision": {
    intro:
      "Aquí el ritmo cobra vida. Subdividir es partir cada pulso en trozos iguales para colocar las notas con precisión. Y la síncopa —acentuar donde NO se espera— es lo que da groove: eso que te hace mover la cabeza sin querer.",
    goal: "subdividir el pulso y reconocer la síncopa.",
    sections: [
      {
        h: "Partir el pulso",
        tldr: "Cuenta los 'huecos' entre pulsos: 1-y-2-y-3-y-4-y.",
        code: "Pulso:      1     2     3     4\nSubdividido: 1 y   2 y   3 y   4 y   (corcheas)\nEn cuatro:  1 e y a 2 e y a ...     (semicorcheas)",
        body: [
          "Decir 'y' entre cada número te da la subdivisión en corcheas. Mantener esa rejilla interna es lo que hace un ritmo preciso.",
        ],
      },
      {
        h: "Síncopa: acentuar el contratiempo",
        tldr: "Poner el énfasis en el 'y' (tiempo débil) en vez de en el número.",
        tip: "La síncopa suena 'adelantada' o 'fuera'. Está en el corazón del funk, la salsa, el reggae. El secreto para no perderte: mantén el pulso firme con el pie mientras las manos hacen la síncopa.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Subdividir el pulso significa…",
        options: [
          "tocar más fuerte",
          "partirlo en partes iguales más pequeñas",
          "ir más lento",
        ],
        answer: 1,
        why: "Subdividir = dividir cada pulso en trozos iguales (p. ej. corcheas).",
      },
      {
        kind: "choice",
        q: "La síncopa consiste en acentuar…",
        options: [
          "siempre el primer tiempo",
          "los tiempos débiles ('y', contratiempos)",
          "el final de la canción",
        ],
        answer: 1,
        why: "La síncopa pone el acento donde no se espera: da groove.",
      },
      {
        kind: "order",
        q: "Ordena la subdivisión de un pulso en corcheas:",
        items: ["1", "y", "2", "y"],
        why: "El 'y' cae justo en el medio de cada pulso.",
      },
      {
        kind: "choice",
        q: "El truco para no perderte al sincopar es…",
        options: [
          "cerrar los ojos",
          "mantener el pulso firme con el pie",
          "tocar más rápido",
        ],
        answer: 1,
        why: "El pie sostiene el pulso mientras las manos sincopan.",
      },
    ],
    activity: {
      title: "Encuentra el groove",
      steps: [
        "Marca el pulso con el pie y di '1 y 2 y 3 y 4 y'.",
        "Ahora palmea solo en los 'y' (los contratiempos): eso es síncopa.",
        "Reto: escucha una canción de funk o reggae e identifica dónde caen los acentos.",
      ],
    },
    selfCheck: [
      "Subdivido el pulso en corcheas manteniéndolo.",
      "Reconozco y siento la síncopa.",
      "Sostengo el pulso con el pie mientras sincopo.",
    ],
    summary: [
      "Subdividir = partir el pulso en trozos iguales (1-y-2-y).",
      "La síncopa acentúa el tiempo débil: da groove.",
      "Mantén el pulso con el pie para no perderte.",
    ],
  },

  // ─────────────────────────── Lectura musical ───────────────────────────
  "mus-pentagrama": {
    intro:
      "Ahora que tu oído distingue agudo de grave, la lectura tiene sentido: el pentagrama es simplemente un mapa donde ARRIBA es agudo y ABAJO es grave. Cinco líneas y una llave (la clave) que fija la referencia. Es lo que oyes, dibujado.",
    goal: "entender cómo el pentagrama representa lo agudo y lo grave.",
    sections: [
      {
        h: "Cinco líneas: un mapa de altura",
        tldr: "Cuanto más arriba está una nota, más aguda suena.",
        code: "───────────  (más agudo)\n───────────\n───────────\n───────────\n───────────  (más grave)",
        body: [
          "Las notas se escriben sobre las líneas y en los espacios. Subir en el pentagrama = subir de altura. Es la misma idea de agudo/grave que ya oyes.",
        ],
      },
      {
        h: "La clave fija la referencia",
        tldr: "La clave de sol (la más común) ancla dónde está cada nota.",
        tip: "Sin clave, el pentagrama no dice qué notas son: solo alturas relativas. La clave de sol es la más habitual para melodías; la de fa, para graves. No leas sin mirar primero la clave.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Una nota escrita MÁS ARRIBA en el pentagrama suena…",
        options: ["más grave", "más aguda", "más fuerte"],
        answer: 1,
        why: "Arriba = agudo; es un mapa de altura.",
      },
      {
        kind: "choice",
        q: "¿Para qué sirve la clave?",
        options: [
          "para el volumen",
          "para fijar qué nota es cada línea/espacio",
          "para el tempo",
        ],
        answer: 1,
        why: "La clave da la referencia de altura (p. ej. clave de sol).",
      },
      {
        kind: "choice",
        q: "El pentagrama tiene…",
        options: ["cuatro líneas", "cinco líneas", "seis líneas"],
        answer: 1,
        why: "Penta = cinco líneas.",
      },
    ],
    activity: {
      title: "Dibuja el mapa",
      steps: [
        "Dibuja un pentagrama de cinco líneas y una clave de sol.",
        "Coloca dos notas: una arriba y otra abajo.",
        "Di en voz alta cuál suena más aguda (la de arriba) antes de tocarlas.",
      ],
    },
    selfCheck: [
      "Entiendo que arriba = agudo y abajo = grave.",
      "Sé para qué sirve la clave.",
      "Relaciono el pentagrama con lo que oigo.",
    ],
    summary: [
      "El pentagrama es un mapa: arriba agudo, abajo grave.",
      "Cinco líneas + espacios para las notas.",
      "La clave fija qué nota es cada posición.",
    ],
  },

  "mus-notas": {
    intro:
      "Solo hay siete nombres de notas —Do, Re, Mi, Fa, Sol, La, Si— que se repiten una y otra vez, más agudas o más graves. En el sistema anglosajón son C, D, E, F, G, A, B. Aprender a nombrarlas conecta lo que oyes, lo que lees y lo que tocas.",
    goal: "nombrar las notas en el pentagrama en clave de sol.",
    sections: [
      {
        h: "Siete nombres que se repiten",
        tldr: "Do-Re-Mi-Fa-Sol-La-Si y vuelta a empezar (una octava más arriba).",
        code: "Do  Re  Mi  Fa  Sol  La  Si  (Do)\n C   D   E   F   G    A   B   (C)",
        body: [
          "Al llegar a Si, la siguiente nota es otra vez Do, pero una octava más aguda. Por eso el mismo nombre aparece en varias alturas.",
        ],
      },
      {
        h: "Conecta nombre, sonido y posición",
        tldr: "No memorices posiciones a secas: canta el nombre mientras lo señalas.",
        tip: "El error clásico es memorizar 'dónde va cada nota' como puntos en un dibujo, sin sonido. Canta 'Do-Re-Mi' subiendo mientras las señalas: así el nombre se pega al oído, no solo a la vista.",
      },
    ],
    practice: [
      {
        kind: "order",
        q: "Ordena las notas subiendo desde Do:",
        items: ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"],
        why: "Es la secuencia base que se repite en cada octava.",
      },
      {
        kind: "match",
        q: "Empareja el nombre latino con el anglosajón:",
        pairs: [
          { left: "Do", right: "C" },
          { left: "Mi", right: "E" },
          { left: "Sol", right: "G" },
        ],
        why: "Do=C, Re=D, Mi=E, Fa=F, Sol=G, La=A, Si=B.",
      },
      {
        kind: "fill",
        q: "¿Qué nota viene después de Si subiendo?",
        accept: ["do", "do (octava)", "c"],
        hint: "Se vuelve a empezar, una octava más arriba.",
        why: "Tras Si vuelve Do, una octava más agudo.",
      },
    ],
    activity: {
      title: "Canta las notas",
      steps: [
        "Canta Do-Re-Mi-Fa-Sol-La-Si-Do subiendo (usa una app o un piano de guía).",
        "Señala cada nota en un pentagrama mientras la cantas.",
        "Reto: nombra 5 notas señaladas al azar sin dudar más de 2 segundos.",
      ],
    },
    selfCheck: [
      "Nombro las siete notas en orden.",
      "Convierto entre Do-Re-Mi y C-D-E.",
      "Relaciono el nombre con su sonido y posición.",
    ],
    summary: [
      "Siete nombres: Do-Re-Mi-Fa-Sol-La-Si, que se repiten.",
      "Equivalen a C-D-E-F-G-A-B.",
      "Canta el nombre mientras lo lees: une oído y vista.",
    ],
  },

  "mus-lectura-ritmica": {
    intro:
      "Leer música es leer DOS cosas a la vez: qué nota (altura) y cuánto dura (ritmo). Muchos principiantes leen las notas pero se olvidan de su duración, y el resultado no tiene pulso. Aquí unimos las figuras que ya conoces con el compás para leer ritmo de verdad.",
    goal: "leer y reproducir un ritmo escrito manteniendo el pulso.",
    sections: [
      {
        h: "Sílabas rítmicas",
        tldr: "Da un nombre a cada figura para 'hablar' el ritmo antes de tocarlo.",
        code: "Negra   = 'ta'\nCorcheas= 'ti-ti'\n\n4/4:  ta   ta   ti-ti  ta\n      1    2    3  +   4",
        body: [
          "Decir el ritmo en voz alta ('ta ta ti-ti ta') antes de tocarlo separa el problema del ritmo del de las notas. Es el método Kodály.",
        ],
      },
      {
        h: "El pulso manda",
        tldr: "Marca el pulso con el pie mientras lees; el ritmo encaja sobre él.",
        tip: "Primero lee SOLO el ritmo (con palmas o sílabas), luego añade las notas. Intentar todo a la vez es la causa número uno de frustración al leer.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Al leer música lees dos cosas: la altura y…",
        options: ["el volumen", "la duración (el ritmo)", "el instrumento"],
        answer: 1,
        why: "Qué nota (altura) y cuánto dura (ritmo).",
      },
      {
        kind: "match",
        q: "Empareja cada figura con su sílaba rítmica (Kodály):",
        pairs: [
          { left: "Negra", right: "ta" },
          { left: "Dos corcheas", right: "ti-ti" },
        ],
        why: "Las sílabas ayudan a 'hablar' el ritmo antes de tocarlo.",
      },
      {
        kind: "order",
        q: "Ordena los pasos para leer un compás:",
        items: [
          "Marcar el pulso con el pie",
          "Leer solo el ritmo con sílabas o palmas",
          "Añadir las notas (la altura)",
        ],
        why: "Separa ritmo y altura; el pulso primero.",
      },
      {
        kind: "choice",
        q: "El error más común al empezar a leer es…",
        options: [
          "leer las notas pero ignorar su duración",
          "marcar demasiado el pulso",
          "cantar en voz alta",
        ],
        answer: 0,
        why: "Sin la duración, la lectura pierde el pulso.",
      },
    ],
    activity: {
      title: "Habla el ritmo",
      steps: [
        "Marca el pulso con el pie.",
        "Lee un compás de 4/4 (ta ta ti-ti ta) en voz alta, luego con palmas.",
        "Reto: añade las notas cantando su nombre con la duración correcta.",
      ],
    },
    selfCheck: [
      "Leo altura y duración a la vez.",
      "Uso sílabas rítmicas para 'hablar' el ritmo.",
      "Marco el pulso mientras leo.",
    ],
    summary: [
      "Leer música = altura + duración.",
      "Habla el ritmo con sílabas (ta, ti-ti) antes de tocar.",
      "Separa ritmo y notas; el pulso primero.",
    ],
  },

  "mus-lectura-primera-vista": {
    intro:
      "La lectura a primera vista es tocar una pieza que ves por primera vez, sin pararte. Parece imposible, pero tiene técnica: mirar adelante, mantener el pulso pase lo que pase, y priorizar el flujo sobre la perfección. Es la habilidad que te deja tocar en grupo y aprender repertorio a gran velocidad.",
    goal: "leer a primera vista una melodía sencilla sin detenerte.",
    sections: [
      {
        h: "El pulso no se detiene",
        tldr: "Si fallas una nota, sigue: parar rompe la música, un error no.",
        body: [
          "En primera vista, mantener el pulso es más importante que acertar cada nota. Un tren no frena por un bache: tú tampoco.",
        ],
      },
      {
        h: "Mira adelante y prepárate",
        tldr: "Tus ojos van un poco por delante de lo que tocas.",
        code: "Rutina previa (30 s):\n1) Mira la clave y el compás\n2) Localiza la nota más aguda y la más grave\n3) Detecta el ritmo más difícil\n4) Elige un tempo LENTO que puedas sostener",
        tip: "El secreto profesional: elige un tempo tan lento que puedas tocar sin parar el pasaje MÁS difícil. La constancia del pulso impresiona más que la velocidad.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Si te equivocas de nota leyendo a primera vista, debes…",
        options: [
          "parar y repetir",
          "seguir manteniendo el pulso",
          "empezar de nuevo",
        ],
        answer: 1,
        why: "El flujo del pulso importa más que un error puntual.",
      },
      {
        kind: "choice",
        q: "¿Qué tempo eliges para leer a primera vista?",
        options: [
          "el más rápido posible",
          "uno lento que sostengas incluso en lo difícil",
          "el que marque la partitura, sí o sí",
        ],
        answer: 1,
        why: "Un tempo sostenible evita frenazos: prioriza la constancia.",
      },
      {
        kind: "order",
        q: "Ordena la rutina de 30 segundos antes de tocar:",
        items: [
          "Mirar la clave y el compás",
          "Localizar la nota más aguda y la más grave",
          "Detectar el ritmo más difícil",
          "Elegir un tempo lento sostenible",
        ],
        why: "Prepararte reduce las sorpresas al leer.",
      },
    ],
    activity: {
      title: "Primera vista sin frenar",
      steps: [
        "Toma una melodía nueva y sencilla (4 compases).",
        "Haz la rutina de 30 s: clave, compás, notas extremas, ritmo difícil.",
        "Tócala a un tempo lento SIN parar, aunque falles. Repite subiendo poco el tempo.",
      ],
    },
    selfCheck: [
      "Mantengo el pulso aunque falle una nota.",
      "Hago una lectura previa antes de tocar.",
      "Elijo un tempo lento y sostenible.",
    ],
    summary: [
      "Primera vista = tocar sin parar algo nuevo.",
      "El pulso no se detiene por un error.",
      "Prepárate 30 s y elige un tempo sostenible.",
    ],
  },

  // ─────────────────────────── Melodía y tono ───────────────────────────
  "mus-intervalos": {
    intro:
      "Un intervalo es la distancia entre dos notas, y es el ladrillo con el que se construye TODA la música: una melodía es una secuencia de intervalos, y un acorde, varios intervalos apilados. Medirlos bien empieza por un detalle que engaña a muchos: se cuenta contando la nota de partida.",
    goal: "entender y nombrar intervalos por su tamaño.",
    sections: [
      {
        h: "Contar incluyendo la nota de partida",
        tldr: "De Do a Sol hay una quinta: Do(1) Re(2) Mi(3) Fa(4) Sol(5).",
        code: "Do → Sol\nDo Re Mi Fa Sol\n 1  2  3  4  5   → quinta",
        body: [
          "El nombre del intervalo (segunda, tercera, quinta, octava) sale de contar los nombres de nota de una a otra, empezando por 1 en la de partida.",
        ],
      },
      {
        h: "El error del 'salto'",
        tldr: "No cuentes los pasos ENTRE notas; cuenta las notas, empezando por 1.",
        tip: "De Do a Re parece '1 paso', pero es una SEGUNDA (Do=1, Re=2). El fallo más común es olvidar contar la nota inicial. Empieza siempre por 1 en la nota de origen.",
      },
    ],
    practice: [
      {
        kind: "fill",
        q: "De Do a Sol, ¿qué intervalo hay? (escribe el número: 2ª, 3ª… solo el número)",
        accept: ["5", "quinta", "5ª"],
        hint: "Do Re Mi Fa Sol, contando desde 1.",
        why: "Do(1) Re(2) Mi(3) Fa(4) Sol(5) → quinta.",
      },
      {
        kind: "choice",
        q: "De Do a Re hay una…",
        options: ["primera", "segunda", "tercera"],
        answer: 1,
        why: "Do(1) Re(2): es una segunda (no un 'paso').",
      },
      {
        kind: "choice",
        q: "Al medir un intervalo, empiezas a contar…",
        options: [
          "en la nota de partida (1)",
          "en la nota siguiente",
          "en cero",
        ],
        answer: 0,
        why: "Se cuenta incluyendo la nota inicial como 1.",
      },
      {
        kind: "fill",
        q: "De Do al siguiente Do (arriba), ¿qué intervalo hay?",
        accept: ["8", "octava", "8ª"],
        hint: "Cuenta las 7 notas + vuelta a Do.",
        why: "Es una octava (8 nombres de nota).",
      },
    ],
    activity: {
      title: "Mide intervalos",
      steps: [
        "Escribe las notas Do-Re-Mi-Fa-Sol-La-Si-Do.",
        "Mide de Do a Mi, de Re a Sol y de Do a La contando desde 1.",
        "Reto: canta cada intervalo y comprueba si 'suena' pequeño o grande.",
      ],
    },
    selfCheck: [
      "Cuento intervalos incluyendo la nota de partida.",
      "Nombro segunda, tercera, quinta y octava.",
      "No confundo 'pasos' con nombre de intervalo.",
    ],
    summary: [
      "Un intervalo es la distancia entre dos notas.",
      "Se cuenta por nombres de nota, empezando por 1 en la inicial.",
      "Es el ladrillo de melodías y acordes.",
    ],
  },

  "mus-escalas": {
    intro:
      "Una escala es una escalera de notas construida con un patrón FIJO de pasos. El mismo patrón, empezando en cualquier nota, da una escala mayor (que suena luminosa, 'feliz'). Cambia el patrón y obtienes la menor ('melancólica'). Entender el patrón vale más que memorizar notas.",
    goal: "construir una escala mayor por su patrón de tonos y semitonos.",
    sections: [
      {
        h: "Tonos y semitonos",
        tldr: "El semitono es el paso más pequeño; el tono son dos semitonos.",
        body: [
          "Entre algunas notas hay un tono (T) y entre otras un semitono (S). La escala mayor sigue SIEMPRE el mismo patrón de tonos y semitonos, empieces donde empieces.",
        ],
      },
      {
        h: "El patrón de la escala mayor",
        tldr: "T-T-S-T-T-T-S (tono, tono, semitono, tono, tono, tono, semitono).",
        code: "Do mayor:  Do  Re  Mi  Fa  Sol  La  Si  Do\n patrón:     T   T   S   T   T   T   S\n(Mi→Fa y Si→Do son los semitonos)",
        tip: "Los dos semitonos de la escala mayor caen entre los grados 3-4 y 7-8. Memoriza el PATRÓN (T-T-S-T-T-T-S), no las notas: así construyes la escala mayor desde cualquier nota.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "El patrón de la escala mayor es…",
        options: ["T-T-S-T-T-T-S", "S-T-S-T-S-T-S", "T-T-T-T-T-T-T"],
        answer: 0,
        why: "Tono-Tono-Semitono-Tono-Tono-Tono-Semitono.",
      },
      {
        kind: "choice",
        q: "En Do mayor, los semitonos caen entre…",
        options: ["Do-Re y Fa-Sol", "Mi-Fa y Si-Do", "Re-Mi y Sol-La"],
        answer: 1,
        why: "Mi→Fa y Si→Do son los semitonos naturales.",
      },
      {
        kind: "order",
        q: "Ordena la escala de Do mayor subiendo:",
        items: ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"],
        why: "Es la escala mayor sin alteraciones.",
      },
      {
        kind: "choice",
        q: "¿Qué suena, en general, la escala mayor?",
        options: ["melancólica", "luminosa / alegre", "tenebrosa"],
        answer: 1,
        why: "La mayor suena luminosa; la menor, más melancólica.",
      },
    ],
    activity: {
      title: "Construye escalas",
      steps: [
        "Escribe la escala de Do mayor y marca dónde están los dos semitonos.",
        "Con una app de piano, tócala subiendo y bajando escuchando su color.",
        "Reto: aplica el patrón T-T-S-T-T-T-S empezando en Sol (necesitarás una alteración).",
      ],
    },
    selfCheck: [
      "Distingo tono de semitono.",
      "Conozco el patrón de la escala mayor.",
      "Construyo Do mayor y reconozco su sonido.",
    ],
    summary: [
      "Una escala es un patrón fijo de tonos y semitonos.",
      "Mayor = T-T-S-T-T-T-S (semitonos en 3-4 y 7-8).",
      "Memoriza el patrón, no las notas.",
    ],
  },

  "mus-tonalidad": {
    intro:
      "¿Por qué una melodía parece 'querer volver a casa'? Esa casa es la tónica: la nota central alrededor de la cual gira todo. La tonalidad es el sistema de gravedad de la música: unas notas se sienten estables (reposo) y otras, inquietas (tensión que pide resolver).",
    goal: "entender el concepto de tonalidad y su centro (la tónica).",
    sections: [
      {
        h: "La nota 'hogar'",
        tldr: "La tónica es donde la melodía descansa; suena a final, a resolución.",
        body: [
          "Canta 'cumpleaños feliz' y párate en cualquier nota que no sea la última: se siente incompleto. La última nota es (casi siempre) la tónica: el hogar.",
        ],
      },
      {
        h: "La armadura: alteraciones fijas",
        tldr: "Cada tonalidad tiene sus sostenidos/bemoles fijos, escritos al inicio.",
        tip: "Cuidado: la tónica NO es siempre la primera nota que suena. Una canción puede empezar en cualquier nota, pero 'gravita' hacia su tónica. Búscala por dónde DESCANSA la melodía, no por dónde empieza.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "La tónica es la nota…",
        options: [
          "más aguda de la melodía",
          "donde la melodía descansa (el 'hogar')",
          "la primera que suena, siempre",
        ],
        answer: 1,
        why: "La tónica es el centro de reposo; no necesariamente la primera nota.",
      },
      {
        kind: "choice",
        q: "Para encontrar la tónica de una melodía, te fijas en…",
        options: [
          "dónde empieza",
          "dónde descansa o termina",
          "la nota más fuerte",
        ],
        answer: 1,
        why: "La melodía 'gravita' hacia su tónica: descansa en ella.",
      },
      {
        kind: "choice",
        q: "La armadura (al inicio del pentagrama) indica…",
        options: [
          "el tempo",
          "las alteraciones fijas de la tonalidad",
          "el volumen",
        ],
        answer: 1,
        why: "La armadura fija qué notas van alteradas en toda la pieza.",
      },
    ],
    activity: {
      title: "Encuentra el hogar",
      steps: [
        "Canta una canción sencilla que conozcas.",
        "Párate en distintas notas y siente cuál da sensación de 'final'.",
        "Reto: comprueba que esa nota de reposo suele coincidir con la última de la canción.",
      ],
    },
    selfCheck: [
      "Explico qué es la tónica.",
      "Encuentro la nota de reposo de una melodía.",
      "Sé que la armadura fija las alteraciones.",
    ],
    summary: [
      "La tonalidad es el 'sistema de gravedad' de la música.",
      "La tónica es el hogar: donde la melodía descansa.",
      "No es la primera nota, sino hacia la que todo gravita.",
    ],
  },

  "mus-melodia-construccion": {
    intro:
      "Ha llegado el momento de crear. Una melodía no es notas al azar: es un viaje con dirección, con momentos de tensión y de reposo, que empieza y (sobre todo) termina en un lugar que suena 'completo'. Con las notas de una escala y unas pocas ideas, puedes componer melodías con sentido.",
    goal: "componer una melodía sencilla con sentido dentro de una escala.",
    sections: [
      {
        h: "Dirección: pasos y saltos",
        tldr: "Moverse por notas vecinas (pasos) suena fluido; los saltos, dramáticos.",
        body: [
          "Una buena melodía combina pasos (a la nota de al lado) que dan fluidez, con algún salto que añade interés. Demasiados saltos suenan aleatorios; solo pasos, monótonos.",
        ],
      },
      {
        h: "Tensión y reposo (empieza y termina en casa)",
        tldr: "Aléjate de la tónica para crear tensión y vuelve a ella para cerrar.",
        code: "Melodía en Do mayor (grados):\n 1  2  3  2 | 5  4  3  2 | 1\n(sale de la tónica, crea tensión y REPOSA en 1)",
        tip: "El truco para que una melodía suene 'terminada' es acabar en la tónica (grado 1). Si acabas en otra nota, sonará que la frase 'sigue'. Úsalo a propósito.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Para que una melodía suene 'completa', conviene terminar en…",
        options: ["cualquier nota", "la tónica (grado 1)", "la nota más aguda"],
        answer: 1,
        why: "La tónica da sensación de reposo y final.",
      },
      {
        kind: "choice",
        q: "Moverse a la nota de al lado (paso) frente a un salto grande da…",
        options: ["más fluidez", "más caos", "menos musicalidad"],
        answer: 0,
        why: "Los pasos dan fluidez; los saltos, interés puntual.",
      },
      {
        kind: "choice",
        q: "Una melodía SOLO de saltos grandes tiende a sonar…",
        options: ["fluida", "aleatoria/inconexa", "aburrida"],
        answer: 1,
        why: "Demasiados saltos rompen la sensación de línea.",
      },
      {
        kind: "order",
        q: "Ordena la forma de una frase melódica con sentido:",
        items: [
          "Empezar cerca de la tónica",
          "Alejarse para crear tensión",
          "Llegar a un punto culminante",
          "Volver y reposar en la tónica",
        ],
        why: "Salida → tensión → clímax → reposo en casa.",
      },
    ],
    activity: {
      title: "Compón tu primera melodía",
      steps: [
        "Usa solo las notas de Do mayor.",
        "Crea 4 compases combinando pasos y algún salto.",
        "Asegúrate de terminar en Do (la tónica) para que suene completa. Cántala o tócala.",
      ],
    },
    selfCheck: [
      "Combino pasos y saltos con criterio.",
      "Creo tensión alejándome de la tónica.",
      "Cierro la melodía en la tónica.",
    ],
    summary: [
      "Una melodía es un viaje con dirección, tensión y reposo.",
      "Pasos = fluidez; saltos = interés puntual.",
      "Termina en la tónica para que suene 'completa'.",
    ],
  },

  // ─────────────────────────────── Hito ───────────────────────────────
  "hito-mus-fundamentos": {
    intro:
      "Has construido lo que ningún músico puede saltarse: un oído que distingue alturas y un cuerpo que siente el pulso. Sobre esta base —oído y ritmo— se levanta todo lo demás: leer, armonizar, improvisar y crear. Este hito lo consolida.",
    goal: "confirmar una base sólida de oído y ritmo.",
    sections: [
      {
        h: "Lo que ya dominas",
        tldr: "Escucha activa, altura (agudo/grave) y pulso constante.",
        bullets: [
          "Escuchas separando ritmo, melodía y armonía.",
          "Distingues agudo de grave sin confundirlo con el volumen.",
          "Sientes y mantienes un pulso constante.",
        ],
      },
      {
        h: "Todo junto",
        tldr: "Oído + ritmo es el cimiento sobre el que se lee y se crea.",
        tip: "Si en algún punto más adelante te atascas leyendo o armonizando, casi siempre la causa es una laguna aquí: vuelve a escuchar y a sentir el pulso. Los fundamentos nunca se abandonan del todo.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Qué se desarrolla ANTES en música?",
        options: ["la lectura de partituras", "el oído y el ritmo", "la armonía"],
        answer: 1,
        why: "'Sonido antes que símbolo': oído y ritmo primero.",
      },
      {
        kind: "choice",
        q: "Un sonido puede ser agudo y a la vez…",
        options: ["nunca suave", "suave o fuerte (son cosas distintas)", "siempre fuerte"],
        answer: 1,
        why: "Altura y volumen son independientes.",
      },
      {
        kind: "match",
        q: "Empareja cada fundamento con su idea:",
        pairs: [
          { left: "Escucha activa", right: "Separar las capas de una canción" },
          { left: "Altura", right: "Agudo vs. grave" },
          { left: "Pulso", right: "El latido constante" },
        ],
        why: "Son los tres pilares del nivel Fundamentos.",
      },
      {
        kind: "order",
        q: "Ordena de MÁS GRAVE a MÁS AGUDO:",
        items: ["Bombo", "Voz grave", "Voz aguda", "Silbido"],
        why: "De menor a mayor frecuencia.",
      },
    ],
    activity: {
      title: "Reto de fundamentos",
      steps: [
        "Elige una canción: marca el pulso con el pie sin perderlo durante un minuto.",
        "Sigue solo un instrumento (escucha activa) y descríbelo.",
        "Canta una nota grave y una aguda, y comprueba que controlas la altura.",
      ],
    },
    selfCheck: [
      "Escucho separando las capas de una canción.",
      "Distingo altura de volumen.",
      "Mantengo un pulso constante.",
    ],
    summary: [
      "Base consolidada: oído (escucha + altura) y ritmo (pulso).",
      "Sobre oído y ritmo se levanta todo lo demás.",
      "Listo para leer, armonizar y crear.",
    ],
  },
};
