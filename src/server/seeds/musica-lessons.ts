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

  // ─────────────────────────────── Armonía ───────────────────────────────
  "mus-acordes": {
    intro:
      "Si la melodía es una línea, la armonía es el color de fondo. Un acorde son varias notas sonando a la vez, y el más básico —la tríada— son solo tres. Con cambiar una nota, el acorde pasa de sonar 'alegre' (mayor) a 'melancólico' (menor). Ese matiz mueve emociones.",
    goal: "construir tríadas mayores y menores y distinguir su color.",
    sections: [
      {
        h: "La tríada: tres notas apiladas por terceras",
        tldr: "Tomas una nota, saltas una, tomas otra, saltas una, tomas otra.",
        code: "Do mayor:  Do - Mi - Sol   (1 · 3 · 5 de la escala)\nRe menor:  Re - Fa - La",
        body: [
          "Se apilan de tres en tres notas de la escala (por terceras). La nota de abajo da nombre al acorde (la fundamental).",
        ],
      },
      {
        h: "Mayor vs. menor: la tercera decide",
        tldr: "La nota del medio, un poco más baja, convierte el mayor en menor.",
        compare: {
          left: {
            title: "Mayor",
            points: ["Suena luminoso, abierto", "Tercera 'grande'", "Do-Mi-Sol"],
          },
          right: {
            title: "Menor",
            points: ["Suena melancólico, íntimo", "Tercera 'pequeña'", "Do-Mi♭-Sol"],
          },
          note: "Solo cambia la nota del medio (la tercera): baja un semitono y el mayor se vuelve menor.",
        },
        tip: "No memorices 'alegre/triste' a secas: escúchalo. Toca Do-Mi-Sol y luego baja el Mi medio semitono (Mi♭): oirás el color virar de mayor a menor.",
      },
    ],
    practice: [
      {
        kind: "fill",
        q: "Escribe la tríada de Do mayor (tres notas separadas por guiones).",
        accept: ["do-mi-sol", "do mi sol", "c-e-g", "do,mi,sol"],
        hint: "Grados 1-3-5 de Do mayor.",
        why: "Do-Mi-Sol: fundamental, tercera y quinta.",
      },
      {
        kind: "choice",
        q: "¿Qué nota de la tríada decide si es mayor o menor?",
        options: ["la de abajo (fundamental)", "la del medio (tercera)", "la de arriba (quinta)"],
        answer: 1,
        why: "La tercera: baja un semitono y el mayor se vuelve menor.",
      },
      {
        kind: "choice",
        q: "Una tríada menor suele sonar…",
        options: ["luminosa y abierta", "melancólica e íntima", "disonante"],
        answer: 1,
        why: "El menor tiene ese color más melancólico por su tercera menor.",
      },
      {
        kind: "match",
        q: "Empareja cada acorde con su calidad:",
        pairs: [
          { left: "Do-Mi-Sol", right: "Mayor" },
          { left: "La-Do-Mi", right: "Menor" },
        ],
        why: "La-Do-Mi es La menor (tercera menor La→Do).",
      },
    ],
    activity: {
      title: "Escucha el color",
      steps: [
        "Con una app de piano, toca Do-Mi-Sol (mayor) varias veces.",
        "Baja el Mi a Mi♭ y toca Do-Mi♭-Sol (menor): siente el cambio de color.",
        "Reto: encuentra en una canción un momento que suene 'menor' (melancólico).",
      ],
    },
    selfCheck: [
      "Construyo una tríada mayor y una menor.",
      "Sé que la tercera decide el color.",
      "Distingo mayor de menor de oído.",
    ],
    summary: [
      "Una tríada son tres notas apiladas por terceras (1-3-5).",
      "La tercera decide mayor (luminoso) o menor (melancólico).",
      "El color se entiende escuchando, no memorizando.",
    ],
  },

  "mus-progresiones": {
    intro:
      "Una sola magia sostiene millones de canciones: encadenar unos pocos acordes en un orden que 'funciona'. Esas secuencias se llaman progresiones, y algunas son tan universales que las reconocerás en cientos de temas en cuanto las oigas.",
    goal: "reconocer y tocar progresiones de acordes comunes.",
    sections: [
      {
        h: "Acordes en el tiempo",
        tldr: "Una progresión es una secuencia de acordes que se repite en un compás.",
        code: "La progresión 'de los cuatro acordes' (I–V–vi–IV):\nDo  Sol  Lam  Fa  |  Do  Sol  Lam  Fa  ...",
        body: [
          "Los números romanos (I, V, vi, IV) indican qué grado de la escala es cada acorde. Así una progresión se puede tocar en cualquier tono.",
        ],
      },
      {
        h: "Cambiar a tiempo",
        tldr: "Los acordes cambian en tiempos concretos, guiados por el pulso.",
        tip: "El error típico al acompañar es cambiar de acorde 'cuando toca la mano', no cuando toca la música. Cuenta el compás y cambia en el tiempo 1: el pulso manda también en la armonía.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Una progresión de acordes es…",
        options: [
          "un acorde tocado muy fuerte",
          "una secuencia de acordes en el tiempo",
          "una escala rápida",
        ],
        answer: 1,
        why: "Es una sucesión de acordes que suele repetirse.",
      },
      {
        kind: "choice",
        q: "Los números romanos (I, IV, V) sirven para…",
        options: [
          "nombrar la progresión independientemente del tono",
          "indicar el volumen",
          "contar los tiempos",
        ],
        answer: 0,
        why: "Cifran el grado, así la progresión se traslada a cualquier tonalidad.",
      },
      {
        kind: "order",
        q: "Ordena la famosa progresión 'I–V–vi–IV' en Do:",
        items: ["Do (I)", "Sol (V)", "Lam (vi)", "Fa (IV)"],
        why: "I-V-vi-IV: la progresión de incontables éxitos pop.",
      },
      {
        kind: "choice",
        q: "¿Cuándo debes cambiar de acorde al acompañar?",
        options: [
          "cuando te canses del acorde",
          "en el tiempo que marca el pulso (normalmente el 1)",
          "lo más rápido posible",
        ],
        answer: 1,
        why: "La armonía también obedece al pulso: cambia a tiempo.",
      },
    ],
    activity: {
      title: "Caza de progresiones",
      steps: [
        "Escucha 3 canciones pop y cuenta cuántos acordes distintos usan (a menudo 3-4).",
        "Con una app, toca la progresión Do-Sol-Lam-Fa en bucle y canta encima.",
        "Reto: identifica dos canciones que compartan la misma progresión.",
      ],
    },
    selfCheck: [
      "Entiendo qué es una progresión.",
      "Leo grados con números romanos.",
      "Cambio de acorde a tiempo con el pulso.",
    ],
    summary: [
      "Una progresión es una secuencia de acordes en el tiempo.",
      "Los números romanos la hacen trasladable a cualquier tono.",
      "Los cambios de acorde siguen el pulso.",
    ],
  },

  "mus-cadencias": {
    intro:
      "¿Por qué una frase musical suena a 'punto final' y otra a 'coma, sigo'? Por la cadencia: cómo los acordes crean tensión y la resuelven. Es la puntuación de la música, y aprender a oírla cambia cómo escuchas para siempre.",
    goal: "reconocer cadencias de reposo (final) y de tensión (continuación).",
    sections: [
      {
        h: "Tensión que pide resolver",
        tldr: "Terminar en la tónica (I) suena a punto final; terminar en la dominante (V), a suspense.",
        code: "Cadencia conclusiva:  ... V → I   (suena 'cerrado', final)\nCadencia suspensiva:  ...   → V   (suena 'abierto', sigue)",
        body: [
          "El acorde V (dominante) genera tensión; el I (tónica) la resuelve. Ese vaivén tensión→reposo es el motor expresivo de la armonía.",
        ],
      },
      {
        h: "La puntuación de la música",
        tldr: "Reposo = punto; tensión sin resolver = coma o signo de interrogación.",
        tip: "Entrénalo cantando: para una melodía conocida en su penúltima nota y siente cómo 'pide' la última. Esa necesidad de resolver es la tensión de la cadencia.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Una frase que termina en la tónica (I) suena a…",
        options: ["punto final (cerrado)", "coma (sigue)", "error"],
        answer: 0,
        why: "Terminar en I da sensación de reposo y conclusión.",
      },
      {
        kind: "choice",
        q: "El acorde que crea tensión y 'pide' resolver es la…",
        options: ["tónica (I)", "dominante (V)", "subdominante (IV)"],
        answer: 1,
        why: "La dominante (V) genera la tensión que resuelve en I.",
      },
      {
        kind: "match",
        q: "Empareja cada final con su sensación:",
        pairs: [
          { left: "…V → I", right: "Cerrado (punto final)" },
          { left: "…→ V", right: "Abierto (sigue)" },
        ],
        why: "V→I concluye; quedarse en V deja abierto.",
      },
      {
        kind: "choice",
        q: "La cadencia es, en la música, algo parecido a…",
        options: ["el volumen", "la puntuación de un texto", "el título"],
        answer: 1,
        why: "Marca finales y pausas, como los puntos y las comas.",
      },
    ],
    activity: {
      title: "Puntúa la música",
      steps: [
        "Canta 'Cumpleaños feliz' y para en la penúltima nota: siente que 'pide' cerrar.",
        "Con acordes, toca V y luego I: escucha la resolución.",
        "Reto: en una canción, localiza un final de frase 'abierto' y otro 'cerrado'.",
      ],
    },
    selfCheck: [
      "Distingo un final cerrado de uno abierto.",
      "Sé que V crea tensión y I la resuelve.",
      "Oigo las cadencias como puntuación.",
    ],
    summary: [
      "La cadencia es tensión→reposo: la puntuación de la música.",
      "V → I suena a punto final; quedarse en V, a suspense.",
      "Se entrena escuchando la 'necesidad' de resolver.",
    ],
  },

  "mus-funciones": {
    intro:
      "Las progresiones no funcionan por azar. Cada acorde de una tonalidad cumple un PAPEL, como personajes de una historia: el hogar (tónica), el que crea tensión (dominante) y el que prepara (subdominante). Entender estas funciones te deja predecir y crear progresiones con criterio.",
    goal: "entender el papel de tónica (I), subdominante (IV) y dominante (V).",
    sections: [
      {
        h: "Tres papeles, una historia",
        tldr: "I = hogar/reposo · IV = alejarse/preparar · V = tensión que quiere volver.",
        code: "I  (tónica)       → estabilidad, el hogar\nIV (subdominante) → se aleja, prepara el movimiento\nV  (dominante)    → máxima tensión, 'pide' volver al I",
        body: [
          "La progresión clásica I–IV–V–I es un viaje: salgo de casa (I), me alejo (IV), creo tensión (V) y vuelvo a casa (I). Suena a millones de canciones porque cuenta esa pequeña historia.",
        ],
      },
      {
        h: "Por qué el V 'pide' el I",
        tldr: "La dominante contiene notas inestables que resuelven naturalmente en la tónica.",
        tip: "No veas los acordes como colores sueltos, sino como funciones con dirección. Cuando compongas, pregúntate: ¿este acorde da reposo, prepara o tensiona? Así tus progresiones tendrán sentido.",
      },
    ],
    practice: [
      {
        kind: "match",
        q: "Empareja cada función con su papel:",
        pairs: [
          { left: "Tónica (I)", right: "Reposo, el hogar" },
          { left: "Subdominante (IV)", right: "Se aleja, prepara" },
          { left: "Dominante (V)", right: "Tensión que pide volver" },
        ],
        why: "I hogar, IV preparación, V tensión: las tres funciones básicas.",
      },
      {
        kind: "choice",
        q: "El acorde que 'pide' volver a la tónica es la…",
        options: ["subdominante (IV)", "dominante (V)", "otra tónica"],
        answer: 1,
        why: "La dominante contiene la tensión que resuelve en I.",
      },
      {
        kind: "order",
        q: "Ordena el 'viaje' armónico clásico I–IV–V–I:",
        items: ["I (salgo de casa)", "IV (me alejo)", "V (creo tensión)", "I (vuelvo a casa)"],
        why: "Es la pequeña historia de tensión y reposo de infinitas canciones.",
      },
      {
        kind: "choice",
        q: "Pensar los acordes por su función sirve para…",
        options: [
          "tocar más fuerte",
          "crear progresiones con dirección y sentido",
          "leer más rápido",
        ],
        answer: 1,
        why: "Las funciones dan lógica y dirección a la armonía.",
      },
    ],
    activity: {
      title: "Analiza por funciones",
      steps: [
        "Toma una canción de 3 acordes y etiqueta cada uno como I, IV o V.",
        "Comprueba que el V suele aparecer justo antes de volver al I.",
        "Reto: compón tu propia progresión I–IV–V–I y siente el 'viaje'.",
      ],
    },
    selfCheck: [
      "Explico el papel de I, IV y V.",
      "Sé por qué V pide volver a I.",
      "Etiqueto acordes por su función.",
    ],
    summary: [
      "Cada acorde cumple una función: I hogar, IV prepara, V tensiona.",
      "I–IV–V–I es un viaje de salida, tensión y regreso.",
      "Pensar por funciones da dirección a tus progresiones.",
    ],
  },

  // ─────────────────────────── Técnica y práctica ───────────────────────────
  "mus-postura": {
    intro:
      "Tu primer instrumento es tu cuerpo. Antes de cualquier técnica concreta, una postura equilibrada, la respiración libre y la ausencia de tensión determinan cuánto podrás tocar, cuánto disfrutarás y —muy importante— si te lesionas o no.",
    goal: "adoptar una postura relajada y respirar para tocar o cantar mejor.",
    sections: [
      {
        h: "Equilibrio sin tensión",
        tldr: "Postura erguida pero relajada; los hombros sueltos, no encogidos.",
        bullets: [
          "Pies apoyados, espalda larga (ni rígida ni hundida).",
          "Hombros abajo y sueltos; brazos que 'cuelgan' con naturalidad.",
          "Mandíbula y manos sin apretar.",
        ],
      },
      {
        h: "La respiración manda",
        tldr: "Aguantar la respiración crea tensión; respira con el diafragma.",
        tip: "El error nº1 del principiante es tensarse: hombros a las orejas, mandíbula apretada, respiración contenida. Haz pausas para 'escanear' tu cuerpo y soltar. Tocar relajado no es un lujo: previene lesiones y mejora el sonido.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Una buena postura para tocar es…",
        options: [
          "rígida y muy tensa para tener control",
          "erguida pero relajada",
          "encorvada para acercarse al instrumento",
        ],
        answer: 1,
        why: "Equilibrio sin tensión: erguido y relajado.",
      },
      {
        kind: "choice",
        q: "Aguantar la respiración al tocar…",
        options: ["ayuda a concentrarse", "genera tensión y empeora el sonido", "no influye"],
        answer: 1,
        why: "La respiración libre reduce la tensión y mejora el control.",
      },
      {
        kind: "match",
        q: "Empareja cada zona con su estado ideal:",
        pairs: [
          { left: "Hombros", right: "Abajo y sueltos" },
          { left: "Mandíbula", right: "Sin apretar" },
          { left: "Respiración", right: "Libre y diafragmática" },
        ],
        why: "Soltar tensión en estas zonas es la base de la técnica sana.",
      },
    ],
    activity: {
      title: "Escaneo corporal",
      steps: [
        "Antes de tocar, revisa hombros, mandíbula y manos: suelta lo que esté tenso.",
        "Toca 1 minuto y vuelve a escanear: ¿volvió la tensión?",
        "Reto: respira lento y profundo mientras tocas una nota larga.",
      ],
    },
    selfCheck: [
      "Mantengo una postura erguida y relajada.",
      "Respiro con libertad al tocar.",
      "Detecto y suelto la tensión.",
    ],
    summary: [
      "El cuerpo es el primer instrumento: postura y respiración primero.",
      "Erguido pero relajado; hombros y mandíbula sueltos.",
      "Tocar sin tensión previene lesiones y mejora el sonido.",
    ],
  },

  "mus-practica-deliberada": {
    intro:
      "Tres horas repitiendo una pieza entera de principio a fin mejoran poco; veinte minutos aislando el compás difícil, lento y con objetivo, mejoran muchísimo. La diferencia se llama práctica deliberada, y es lo que separa a quien progresa de quien solo 'pasa el rato'.",
    goal: "estructurar una sesión de práctica eficaz.",
    sections: [
      {
        h: "Calidad, no cantidad",
        tldr: "Aísla lo difícil, ve lento y con un objetivo claro por sesión.",
        code: "Sesión eficaz (20 min):\n1) Calentar (2')\n2) Aislar el compás difícil, MUY lento (10')\n3) Unirlo con lo anterior (5')\n4) Tocar con pulso, sin parar (3')",
        body: [
          "La investigación de Ericsson sobre expertos es clara: se progresa con práctica enfocada en los puntos débiles, al límite de lo que puedes hacer, con corrección inmediata.",
        ],
      },
      {
        h: "Lento para ir rápido",
        tldr: "Tocar lento y limpio graba el movimiento correcto; rápido y con errores, los graba mal.",
        tip: "El mayor error: tocar siempre de principio a fin, rápido, repitiendo los mismos fallos. Cada repetición 'entrena' lo que haces, incluido el error. Practica lento hasta que salga perfecto; la velocidad llega sola.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "La práctica deliberada consiste sobre todo en…",
        options: [
          "acumular muchas horas tocando la pieza entera",
          "aislar lo difícil, ir lento y con objetivo",
          "tocar siempre a tempo real",
        ],
        answer: 1,
        why: "Calidad enfocada en los puntos débiles supera a la cantidad.",
      },
      {
        kind: "choice",
        q: "¿Por qué practicar lento?",
        options: [
          "para aburrirse menos",
          "porque graba el movimiento correcto sin errores",
          "no hay motivo, es mejor rápido",
        ],
        answer: 1,
        why: "Lento y limpio entrena el gesto correcto; la velocidad llega después.",
      },
      {
        kind: "order",
        q: "Ordena una sesión de práctica eficaz:",
        items: [
          "Calentar",
          "Aislar el fragmento difícil muy lento",
          "Unirlo con el contexto",
          "Tocar con pulso sin parar",
        ],
        why: "Del detalle lento al todo con pulso.",
      },
      {
        kind: "choice",
        q: "Repetir una pieza entera con los mismos errores…",
        options: [
          "los corrige poco a poco",
          "entrena y fija esos errores",
          "no tiene efecto",
        ],
        answer: 1,
        why: "Cada repetición graba lo que haces, incluido el error.",
      },
    ],
    activity: {
      title: "Diseña tu sesión",
      steps: [
        "Elige un fragmento que te cueste (2-4 compases).",
        "Practícalo MUY lento hasta 3 repeticiones perfectas seguidas.",
        "Únelo con lo anterior y solo entonces sube un poco el tempo.",
      ],
    },
    selfCheck: [
      "Aíslo el fragmento difícil en vez de repetir todo.",
      "Practico lento hasta que sale limpio.",
      "Cada sesión tiene un objetivo claro.",
    ],
    summary: [
      "Práctica deliberada: aislar lo difícil, lento y con objetivo.",
      "Calidad enfocada > horas ciegas (Ericsson).",
      "Lento y limpio para ir rápido después.",
    ],
  },

  "mus-tempo-metronomo": {
    intro:
      "El metrónomo es un espejo honesto del pulso: no miente ni te sigue si te aceleras. Al principio incomoda, pero es la herramienta más poderosa para ganar precisión y, luego, velocidad con control.",
    goal: "usar el metrónomo para ganar precisión y velocidad con control.",
    sections: [
      {
        h: "El espejo del pulso",
        tldr: "El clic marca el pulso exacto; tu trabajo es encajar en él.",
        body: [
          "Si te adelantas, oirás el clic 'tarde'; si te atrasas, 'pronto'. Escuchar esa relación entrena tu pulso interno.",
        ],
      },
      {
        h: "Subir por escalones pequeños",
        tldr: "Domina un tempo limpio, sube 4-8 BPM, repite.",
        code: "Escala a 60 BPM limpio  →  sube a 66  →  72  →  ...\n(nunca subas si aún hay errores)",
        tip: "El error clásico es subir el tempo antes de dominar el lento. Regla: solo sube cuando toques el pasaje 3 veces perfecto. El progreso es una escalera, no un salto.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "El metrónomo sirve para…",
        options: [
          "tocar más fuerte",
          "mantener y objetivar el pulso",
          "cambiar de tono",
        ],
        answer: 1,
        why: "Marca el pulso exacto: es un espejo honesto del tempo.",
      },
      {
        kind: "choice",
        q: "¿Cuándo subes el tempo con el metrónomo?",
        options: [
          "cuando te aburres del lento",
          "cuando tocas el pasaje limpio varias veces",
          "en cada repetición",
        ],
        answer: 1,
        why: "Solo se sube tras dominar el tempo actual sin errores.",
      },
      {
        kind: "choice",
        q: "Si el clic suena 'tarde' respecto a ti, es que…",
        options: ["te estás adelantando", "te estás atrasando", "el metrónomo falla"],
        answer: 0,
        why: "Vas por delante del pulso: te adelantas.",
      },
    ],
    activity: {
      title: "Escalones de tempo",
      steps: [
        "Elige una escala o pasaje corto y un tempo cómodo (p. ej. 60 BPM).",
        "Tócalo limpio 3 veces; sube 6 BPM y repite.",
        "Anota hasta qué tempo llegas manteniéndolo limpio.",
      ],
    },
    selfCheck: [
      "Toco encajando en el clic del metrónomo.",
      "Subo el tempo solo tras dominar el actual.",
      "Detecto si me adelanto o me atraso.",
    ],
    summary: [
      "El metrónomo objetiva el pulso: un espejo honesto.",
      "Domina el lento y sube por escalones pequeños.",
      "Nunca subas el tempo con errores aún presentes.",
    ],
  },

  // ─────────────────────────── Improvisación ───────────────────────────
  "mus-improv-ritmica": {
    intro:
      "Improvisar asusta al principio ('¿y si suena mal?'), pero es la forma más pura de hacer música tuya. Empezamos por lo más seguro: el ritmo. Sobre un pulso constante puedes inventar patrones infinitos sin una sola nota, solo con palmas o percusión.",
    goal: "improvisar ritmos manteniendo el pulso.",
    sections: [
      {
        h: "Pregunta y respuesta",
        tldr: "Alguien toca un ritmo (pregunta) y tú respondes con otro que encaje.",
        body: [
          "El juego de pregunta-respuesta es la puerta a improvisar: escuchas 4 tiempos y contestas 4 tiempos. Estructura la libertad y quita el miedo.",
        ],
      },
      {
        h: "El pulso es tu red de seguridad",
        tldr: "Improvisa el ritmo por encima, pero nunca sueltes el pulso.",
        tip: "El bloqueo por miedo a 'sonar mal' es el enemigo. En el ritmo casi nada suena 'mal' si mantienes el pulso. Marca el pulso con el pie y deja que las manos jueguen.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "El juego de 'pregunta y respuesta' consiste en…",
        options: [
          "tocar todos a la vez",
          "escuchar un ritmo y responder con otro que encaje",
          "tocar lo más rápido posible",
        ],
        answer: 1,
        why: "Estructura la improvisación: pregunta (4 tiempos) → respuesta (4 tiempos).",
      },
      {
        kind: "choice",
        q: "Al improvisar ritmos, lo que NUNCA debes soltar es…",
        options: ["el volumen", "el pulso", "la melodía"],
        answer: 1,
        why: "El pulso es la red de seguridad de toda improvisación rítmica.",
      },
      {
        kind: "choice",
        q: "El mayor obstáculo del principiante al improvisar es…",
        options: [
          "el miedo a sonar mal (bloqueo)",
          "tener demasiadas ideas",
          "el instrumento",
        ],
        answer: 0,
        why: "Soltar el miedo es el primer paso; con el pulso, casi nada 'suena mal'.",
      },
    ],
    activity: {
      title: "Conversación de palmas",
      steps: [
        "Con alguien (o una base rítmica), marca el pulso con el pie.",
        "Juega a pregunta-respuesta con palmas: 4 tiempos cada uno.",
        "Reto: improvisa 8 tiempos seguidos sin perder el pulso.",
      ],
    },
    selfCheck: [
      "Improviso ritmos manteniendo el pulso.",
      "Juego a pregunta-respuesta.",
      "No me bloqueo por miedo a fallar.",
    ],
    summary: [
      "Improvisar empieza por el ritmo, lo más seguro.",
      "Pregunta-respuesta estructura la libertad.",
      "El pulso es tu red: no lo sueltes.",
    ],
  },

  "mus-improv-melodica": {
    intro:
      "Ahora unimos todo: oído, escala y ritmo para crear melodías en tiempo real. El secreto que libera a los principiantes: si te limitas a las notas de una escala (o de la pentatónica), es casi imposible sonar 'mal'. La improvisación no es magia: es jugar dentro de reglas seguras.",
    goal: "improvisar melodías sencillas dentro de una escala.",
    sections: [
      {
        h: "Una paleta segura: la escala",
        tldr: "Elige una escala y usa solo sus notas: todas 'encajan'.",
        body: [
          "La escala pentatónica (5 notas) es la favorita para empezar: suena bien sobre muchas bases y casi no tiene notas 'peligrosas'. Es tu caja de arena.",
        ],
      },
      {
        h: "El silencio también es música",
        tldr: "Dejar huecos hace que tus frases respiren y suenen intencionadas.",
        tip: "Dos errores frecuentes: tocar notas fuera de la escala sin querer, y no parar nunca (una avalancha de notas cansa). Deja silencios: una frase con espacio suena más musical que un torrente.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Para improvisar sin sonar 'mal' al empezar, conviene…",
        options: [
          "usar cualquier nota al azar",
          "limitarte a las notas de una escala (p. ej. pentatónica)",
          "tocar solo notas graves",
        ],
        answer: 1,
        why: "Dentro de una escala, todas las notas encajan: es una paleta segura.",
      },
      {
        kind: "choice",
        q: "En la improvisación melódica, los silencios…",
        options: [
          "son tiempo perdido",
          "hacen respirar y dan intención a las frases",
          "solo valen al final",
        ],
        answer: 1,
        why: "El espacio es parte de la música: da forma y respiración.",
      },
      {
        kind: "choice",
        q: "La escala pentatónica es popular para improvisar porque…",
        options: [
          "tiene muchas notas difíciles",
          "suena bien y casi no tiene notas 'peligrosas'",
          "solo sirve para el piano",
        ],
        answer: 1,
        why: "Sus 5 notas encajan sobre muchas bases: ideal para empezar.",
      },
    ],
    activity: {
      title: "Tu primer solo",
      steps: [
        "Pon una base sencilla (o un acorde en bucle) y usa solo la pentatónica.",
        "Improvisa frases cortas dejando silencios entre ellas.",
        "Reto: haz una frase 'pregunta' y otra 'respuesta' que cierre en la tónica.",
      ],
    },
    selfCheck: [
      "Improviso usando las notas de una escala.",
      "Dejo silencios que dan forma a mis frases.",
      "Mantengo el pulso mientras improviso.",
    ],
    summary: [
      "Improvisar es jugar dentro de reglas seguras (una escala).",
      "La pentatónica es una gran paleta para empezar.",
      "Los silencios hacen respirar la música.",
    ],
  },

  // ─────────────────────────── Composición ───────────────────────────
  "mus-motivo": {
    intro:
      "Las cuatro notas más famosas de la historia (ta-ta-ta-taaa, la Quinta de Beethoven) son un motivo: una idea corta que, repetida y transformada, construye toda una obra. Componer no es inventar sin parar, sino exprimir una pequeña idea.",
    goal: "crear y desarrollar un motivo musical.",
    sections: [
      {
        h: "El motivo: una semilla",
        tldr: "Una célula corta (2-5 notas o un patrón rítmico) reconocible.",
        body: [
          "Un buen motivo es simple y memorable. Su fuerza no está en ser complejo, sino en poder repetirse y transformarse manteniéndose reconocible.",
        ],
      },
      {
        h: "Unidad y variedad",
        tldr: "Repite para dar unidad; transforma para dar interés.",
        code: "Transformaciones de un motivo:\n- Repetir igual\n- Subirlo/bajarlo de altura (transposición)\n- Invertirlo (lo que subía, baja)\n- Alargar o acortar sus notas",
        tip: "El equilibrio lo es todo: repetir sin variar aburre; variar sin repetir suena inconexo. Un buen desarrollo alterna 'lo reconozco' con 'algo nuevo'.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Un motivo musical es…",
        options: [
          "una canción completa",
          "una idea corta y reconocible que se desarrolla",
          "un instrumento",
        ],
        answer: 1,
        why: "Es la célula (semilla) a partir de la cual crece la obra.",
      },
      {
        kind: "match",
        q: "Empareja cada transformación con lo que hace:",
        pairs: [
          { left: "Transposición", right: "Subir o bajar de altura" },
          { left: "Inversión", right: "Lo que subía ahora baja" },
          { left: "Aumentación", right: "Alargar las notas" },
        ],
        why: "Formas clásicas de desarrollar un motivo.",
      },
      {
        kind: "choice",
        q: "Repetir un motivo SIN variarlo nunca produce…",
        options: ["interés", "monotonía", "unidad excesiva… interés"],
        answer: 1,
        why: "Sin variación, aburre; hace falta unidad Y variedad.",
      },
      {
        kind: "choice",
        q: "La fuerza de un buen motivo está en…",
        options: [
          "ser muy complejo",
          "ser simple, memorable y transformable",
          "usar muchas notas",
        ],
        answer: 1,
        why: "Simple y reconocible para poder desarrollarlo.",
      },
    ],
    activity: {
      title: "Exprime un motivo",
      steps: [
        "Inventa un motivo de 3-4 notas (o un patrón rítmico).",
        "Genera 4 versiones: igual, transpuesto, invertido y alargado.",
        "Encadénalas en una frase que suene unida pero con interés.",
      ],
    },
    selfCheck: [
      "Creo un motivo simple y reconocible.",
      "Lo transformo (transposición, inversión…).",
      "Equilibro repetición y variación.",
    ],
    summary: [
      "Un motivo es una idea corta que se repite y transforma.",
      "Simple y memorable para poder desarrollarlo.",
      "Unidad (repetir) + variedad (transformar).",
    ],
  },

  "mus-forma": {
    intro:
      "Una canción no es una lista de notas: es una arquitectura de secciones que crea un viaje —introducción, tensión, clímax, retorno—. La forma es lo que hace que una pieza se sienta completa y memorable, no una sucesión sin rumbo.",
    goal: "reconocer y usar estructuras formales básicas.",
    sections: [
      {
        h: "Secciones con letras",
        tldr: "Etiquetamos secciones (A, B) según se repiten o contrastan.",
        code: "Forma ABA (ternaria):  A - B - A\nCanción pop típica:    estrofa - estribillo - estrofa - estribillo - puente - estribillo",
        body: [
          "Una sección nueva se llama con una letra nueva; si vuelve, repite su letra. Estrofa y estribillo son las secciones estrella del pop.",
        ],
      },
      {
        h: "Contraste y retorno",
        tldr: "El contraste (B) da variedad; el retorno (A) da sensación de hogar.",
        tip: "Componer sin forma hace que todo 'suene igual' o inconexo. Piensa en secciones: ¿qué contrasta? ¿qué vuelve? El retorno de una sección conocida es profundamente satisfactorio para el oído.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "La forma musical se refiere a…",
        options: [
          "el volumen de la canción",
          "cómo se organizan las secciones",
          "el instrumento principal",
        ],
        answer: 1,
        why: "Es la arquitectura de secciones (A, B, estrofa, estribillo…).",
      },
      {
        kind: "choice",
        q: "En una forma ABA, la tercera sección…",
        options: ["es nueva", "repite la primera (A)", "no existe"],
        answer: 1,
        why: "ABA: vuelve A, dando sensación de retorno al hogar.",
      },
      {
        kind: "match",
        q: "Empareja cada sección pop con su papel:",
        pairs: [
          { left: "Estrofa", right: "Cuenta la historia, cambia la letra" },
          { left: "Estribillo", right: "Se repite, es lo memorable" },
        ],
        why: "La estrofa narra; el estribillo engancha y vuelve.",
      },
      {
        kind: "choice",
        q: "El retorno de una sección conocida produce…",
        options: ["aburrimiento", "sensación satisfactoria de 'hogar'", "confusión"],
        answer: 1,
        why: "Volver a lo familiar cierra el viaje de forma satisfactoria.",
      },
    ],
    activity: {
      title: "Mapea una canción",
      steps: [
        "Elige una canción y etiqueta sus secciones (estrofa/estribillo/puente o A/B).",
        "Dibuja su forma como una secuencia de letras.",
        "Reto: esboza la forma de una pieza propia antes de componer una nota.",
      ],
    },
    selfCheck: [
      "Reconozco secciones y las etiqueto (A/B, estrofa/estribillo).",
      "Entiendo el papel del contraste y el retorno.",
      "Puedo esbozar la forma de una pieza.",
    ],
    summary: [
      "La forma es la arquitectura de secciones de una pieza.",
      "Letras nuevas = secciones nuevas; repetir letra = retorno.",
      "Contraste (variedad) + retorno (hogar) = viaje completo.",
    ],
  },

  // ─────────────────────────── Producción musical ───────────────────────────
  "mus-daw": {
    intro:
      "Hoy un estudio de grabación cabe en un portátil. El DAW (estación de audio digital) es el programa donde grabas, colocas y editas música: la herramienta que ha democratizado la creación musical. Antes de dominarlo, basta entender su lógica básica.",
    goal: "entender qué es un DAW y su flujo básico.",
    sections: [
      {
        h: "Pistas en una línea de tiempo",
        tldr: "Cada instrumento va en su pista; el tiempo avanza de izquierda a derecha.",
        code: "PISTAS        │ compás 1 │ compás 2 │ ...\nBatería       │ ████████ │ ████████ │\nBajo          │ ██       │ ████     │\nVoz           │          │ ██████   │",
        body: [
          "Una pista contiene un instrumento o sonido. La línea de tiempo (arriba, en compases) organiza CUÁNDO suena cada cosa. El tempo se fija una vez y todo se alinea a él.",
        ],
      },
      {
        h: "El flujo básico",
        tldr: "Crear/grabar → editar → mezclar → exportar.",
        tip: "No te pierdas en los mil botones. Al empezar, solo necesitas entender: pistas, la línea de tiempo y el tempo. Todo lo demás se aprende sobre esa base.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Un DAW es…",
        options: [
          "un instrumento físico",
          "el programa para grabar, editar y producir audio",
          "un tipo de micrófono",
        ],
        answer: 1,
        why: "Digital Audio Workstation: el estudio en el ordenador.",
      },
      {
        kind: "choice",
        q: "En un DAW, cada instrumento suele ir en…",
        options: ["una pista propia", "la misma pista", "un archivo aparte"],
        answer: 0,
        why: "Cada pista contiene un instrumento/sonido, para editarlos por separado.",
      },
      {
        kind: "order",
        q: "Ordena el flujo básico de producción:",
        items: ["Crear/grabar", "Editar", "Mezclar", "Exportar"],
        why: "De capturar la idea a entregar el archivo final.",
      },
      {
        kind: "choice",
        q: "Al empezar en un DAW, lo esencial que debes entender es…",
        options: [
          "todos los efectos",
          "pistas, línea de tiempo y tempo",
          "la mezcla profesional",
        ],
        answer: 1,
        why: "Sobre esa base sencilla se construye todo lo demás.",
      },
    ],
    activity: {
      title: "Tu primer patrón",
      steps: [
        "Abre un DAW gratuito (o Ableton 'Learning Music' en el navegador).",
        "Crea una pista de batería y coloca un patrón simple de 4 tiempos.",
        "Añade una segunda pista (bajo o acorde) y escúchalas juntas.",
      ],
    },
    selfCheck: [
      "Sé qué es un DAW y para qué sirve.",
      "Entiendo pistas y línea de tiempo.",
      "Describo el flujo grabar → editar → mezclar → exportar.",
    ],
    summary: [
      "El DAW es el estudio de grabación en el ordenador.",
      "Cada instrumento en su pista; el tiempo va en la línea de tiempo.",
      "Flujo: crear → editar → mezclar → exportar.",
    ],
  },

  "mus-grabacion-mezcla": {
    intro:
      "Grabar bien y mezclar con criterio es lo que hace que una idea suene 'profesional'. No necesitas un estudio caro: necesitas capturar limpio (sin saturar) y equilibrar los volúmenes para que todo se oiga sin estorbarse.",
    goal: "grabar una pista y hacer una mezcla básica equilibrada.",
    sections: [
      {
        h: "Grabar limpio: cuidado con la saturación",
        tldr: "Graba con nivel holgado; si el medidor llega al rojo, distorsiona.",
        body: [
          "Deja 'aire' (headroom): apunta a que el nivel de grabación se quede lejos del máximo. Un sonido saturado en la grabación no se puede arreglar después.",
        ],
      },
      {
        h: "Mezclar es equilibrar, no subir todo",
        tldr: "Baja lo que estorba en vez de subir lo que no se oye.",
        code: "Regla de oro de la mezcla:\nSi algo no se oye → normalmente hay que BAJAR lo demás,\nno subirlo todo (o acabarás saturando).",
        tip: "El error nº1: subir cada pista para que se oiga, hasta que todo satura y nada destaca. La mezcla es un equilibrio: da espacio a cada elemento bajando los que compiten.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Si el medidor de grabación llega al rojo, el sonido…",
        options: ["suena mejor", "se satura y distorsiona", "no cambia"],
        answer: 1,
        why: "El rojo indica saturación: hay que bajar el nivel de entrada.",
      },
      {
        kind: "choice",
        q: "Si un instrumento no se oye en la mezcla, lo mejor suele ser…",
        options: [
          "subirlo al máximo",
          "bajar los que le estorban",
          "añadir más instrumentos",
        ],
        answer: 1,
        why: "Mezclar es equilibrar: baja lo que compite, no lo subas todo.",
      },
      {
        kind: "choice",
        q: "'Headroom' (aire) al grabar significa…",
        options: [
          "dejar margen antes del máximo",
          "grabar al volumen más alto posible",
          "usar auriculares",
        ],
        answer: 0,
        why: "Dejar margen evita saturar y da flexibilidad después.",
      },
    ],
    activity: {
      title: "Graba y equilibra",
      steps: [
        "Graba una voz o instrumento cuidando no llegar al rojo.",
        "Añádele una base y ajusta volúmenes hasta oír bien ambos.",
        "Reto: identifica en una mezcla tuya qué pista tapa a las demás y bájala.",
      ],
    },
    selfCheck: [
      "Grabo con nivel holgado (sin saturar).",
      "Equilibro volúmenes bajando lo que estorba.",
      "Detecto una pista demasiado alta.",
    ],
    summary: [
      "Graba limpio: deja aire, evita el rojo.",
      "Mezclar es equilibrar, no subir todo.",
      "Da espacio a cada elemento bajando los que compiten.",
    ],
  },

  // ─────────────────────────── Historia y cultura ───────────────────────────
  "mus-generos": {
    intro:
      "Blues, cumbia, jazz, techno, flamenco… cada género es una familia con sus propias señas: un ritmo, unos instrumentos, una forma. Reconocerlas amplía tu oído y tu vocabulario creativo, y te conecta con la historia y las culturas que las crearon.",
    goal: "distinguir géneros por sus rasgos característicos.",
    sections: [
      {
        h: "Rasgos que identifican un género",
        tldr: "Ritmo, instrumentación y forma delatan de qué familia es una canción.",
        bullets: [
          "Ritmo/groove: el swing del jazz, la clave de la salsa, el 4x4 del techno.",
          "Instrumentación: guitarra flamenca, acordeón de la cumbia, sintetizadores del pop electrónico.",
          "Forma y armonía: el patrón de 12 compases del blues, por ejemplo.",
        ],
      },
      {
        h: "Escuchar con curiosidad, no juzgar",
        tldr: "Cada género tiene su lógica; entiéndela antes de opinar.",
        tip: "El error del oyente perezoso es descartar géneros ('esto no me gusta') sin entenderlos. Escucha buscando SUS reglas: qué hace que un blues sea blues. Amplía tu paleta como creador.",
      },
    ],
    practice: [
      {
        kind: "match",
        q: "Empareja cada rasgo con su género:",
        pairs: [
          { left: "Swing", right: "Jazz" },
          { left: "Patrón de 12 compases", right: "Blues" },
          { left: "Pulso 4x4 con sintetizadores", right: "Techno" },
        ],
        why: "El ritmo, la forma y la instrumentación identifican familias.",
      },
      {
        kind: "choice",
        q: "Para reconocer un género conviene fijarse en…",
        options: [
          "solo la letra",
          "ritmo, instrumentación y forma",
          "el año de publicación",
        ],
        answer: 1,
        why: "Esos tres rasgos delatan la familia estilística.",
      },
      {
        kind: "choice",
        q: "Ante un género que no conoces, la mejor actitud es…",
        options: [
          "descartarlo si no engancha al instante",
          "escucharlo con curiosidad buscando su lógica",
          "compararlo solo con lo que ya te gusta",
        ],
        answer: 1,
        why: "Entender sus reglas amplía tu oído y tu creatividad.",
      },
    ],
    activity: {
      title: "Safari de géneros",
      steps: [
        "Escucha una canción de tres géneros muy distintos (p. ej. blues, cumbia, techno).",
        "Anota de cada uno su ritmo, sus instrumentos y su 'sensación'.",
        "Reto: identifica el género de una canción nueva solo por sus rasgos.",
      ],
    },
    selfCheck: [
      "Identifico géneros por sus rasgos.",
      "Reconozco ritmo, instrumentación y forma.",
      "Escucho con curiosidad, sin prejuicios.",
    ],
    summary: [
      "Cada género es una familia con ritmo, instrumentos y forma propios.",
      "Esos rasgos permiten reconocerlo de oído.",
      "Escuchar con curiosidad amplía tu paleta creativa.",
    ],
  },

  "mus-eras": {
    intro:
      "La música tiene historia, y conocer sus grandes épocas —barroco, clásico, romántico, moderno, actual— explica por qué suena distinta en cada una. No se trata de memorizar fechas, sino de asociar un sonido a su tiempo y entender cómo una época lleva a la siguiente.",
    goal: "situar la música en su contexto histórico por su sonido.",
    sections: [
      {
        h: "Un mapa de épocas",
        tldr: "Cada era tiene un 'sonido' y unas prioridades expresivas.",
        code: "Barroco   (~1600-1750): ornamentado, contrapunto (Bach)\nClásico   (~1750-1820): claro, equilibrado (Mozart)\nRomántico (~1820-1900): emocional, grande (Beethoven tardío, Chopin)\nModerno/actual (s. XX-XXI): ruptura, jazz, pop, electrónica",
        body: [
          "Las fechas son orientativas; lo importante es el sonido y las ideas de cada época, y cómo cada una reacciona a la anterior.",
        ],
      },
      {
        h: "Escuchar la historia",
        tldr: "Asocia ejemplos sonoros a cada era, no fechas sueltas.",
        tip: "Memorizar fechas sin escuchar no sirve de nada. Escucha un fragmento de cada época y quédate con su carácter: el orden del clásico, la emoción del romántico. La historia se aprende por el oído.",
      },
    ],
    practice: [
      {
        kind: "match",
        q: "Empareja cada era con un rasgo (o autor):",
        pairs: [
          { left: "Barroco", right: "Contrapunto (Bach)" },
          { left: "Clásico", right: "Claridad y equilibrio (Mozart)" },
          { left: "Romántico", right: "Emoción y grandeza (Chopin)" },
        ],
        why: "Cada época tiene un carácter y figuras representativas.",
      },
      {
        kind: "order",
        q: "Ordena cronológicamente estas eras:",
        items: ["Barroco", "Clásico", "Romántico", "Moderno/actual"],
        why: "Del ~1600 al presente; cada una reacciona a la anterior.",
      },
      {
        kind: "choice",
        q: "La mejor forma de aprender las eras es…",
        options: [
          "memorizar fechas exactas",
          "asociar el sonido de cada una escuchando ejemplos",
          "leer solo biografías",
        ],
        answer: 1,
        why: "La historia musical se aprende por el oído, no por fechas.",
      },
    ],
    activity: {
      title: "Viaje en el tiempo sonoro",
      steps: [
        "Escucha un fragmento de cada era (Bach, Mozart, Chopin, algo del s. XX).",
        "Anota una palabra que capture el carácter de cada uno.",
        "Reto: dado un fragmento nuevo, adivina su era por el sonido.",
      ],
    },
    selfCheck: [
      "Asocio un sonido a su era.",
      "Ordeno las grandes épocas cronológicamente.",
      "Aprendo por el oído, no por fechas.",
    ],
    summary: [
      "Grandes eras: barroco, clásico, romántico, moderno/actual.",
      "Cada una tiene un sonido y reacciona a la anterior.",
      "Se aprenden escuchando, no memorizando fechas.",
    ],
  },

  // ─────────────────────────────── Hitos ───────────────────────────────
  "hito-mus-intermedio": {
    intro:
      "Has dado el salto de percibir a comprender: manejas escalas, lees notas y construyes acordes. Ya no solo escuchas música, la entiendes por dentro. Este hito confirma que unes oído, lectura y armonía básica antes de la armonía avanzada y la creación.",
    goal: "confirmar la transición de los fundamentos a la teoría aplicada.",
    sections: [
      {
        h: "Lo que ya integras",
        tldr: "Escalas, lectura de notas y tríadas.",
        bullets: [
          "Construyes escalas mayores por su patrón de tonos y semitonos.",
          "Nombras y lees notas en el pentagrama.",
          "Formas tríadas mayores y menores y distingues su color.",
        ],
      },
      {
        h: "Teoría que suena",
        tldr: "Une lo que oyes, lees y tocas en un mismo gesto.",
        code: "Do mayor:  escala  Do-Re-Mi-Fa-Sol-La-Si\n           tríada  Do-Mi-Sol (I)  ·  color: mayor (luminoso)",
        tip: "La prueba de que integras la teoría es poder ir del oído a la partitura y al acorde sin saltos: oyes una tríada, sabes si es mayor o menor, y podrías escribirla.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "El patrón de la escala mayor es…",
        options: ["T-T-S-T-T-T-S", "todo semitonos", "T-S-T-S-T-S"],
        answer: 0,
        why: "Tono-Tono-Semitono-Tono-Tono-Tono-Semitono.",
      },
      {
        kind: "fill",
        q: "Escribe la tríada de Do mayor (notas separadas por guiones).",
        accept: ["do-mi-sol", "do mi sol", "c-e-g"],
        hint: "Grados 1-3-5.",
        why: "Do-Mi-Sol.",
      },
      {
        kind: "choice",
        q: "Una tríada menor se distingue de la mayor por…",
        options: ["su tercera (más baja)", "su volumen", "su duración"],
        answer: 0,
        why: "La tercera menor le da ese color melancólico.",
      },
      {
        kind: "order",
        q: "Ordena las notas de la escala de Do mayor:",
        items: ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"],
        why: "La escala mayor sin alteraciones.",
      },
    ],
    activity: {
      title: "Reto intermedio",
      steps: [
        "Escribe la escala de Do mayor e identifica sus semitonos.",
        "Forma la tríada de Do mayor y la de La menor.",
        "Toca ambas y describe su color (luminoso vs. melancólico).",
      ],
    },
    selfCheck: [
      "Construyo escalas mayores por su patrón.",
      "Leo y nombro notas en el pentagrama.",
      "Formo tríadas mayores y menores.",
    ],
    summary: [
      "Integras escalas, lectura de notas y tríadas.",
      "Vas del oído a la partitura y al acorde con fluidez.",
      "Listo para la armonía avanzada y la creación.",
    ],
  },

  "hito-mus-avanzado": {
    intro:
      "Cierre del recorrido. Compones melodías con sentido, entiendes cómo funcionan las progresiones y lees a primera vista. Ya no ejecutas notas: piensas como músico, entendiendo lo que ocurre por dentro. Desde aquí se abren la composición, la improvisación y la producción.",
    goal: "confirmar madurez musical: oído, teoría, lectura y creación.",
    sections: [
      {
        h: "Lo que ahora dominas",
        tldr: "Progresiones y funciones, construcción melódica y lectura a primera vista.",
        bullets: [
          "Reconoces progresiones y entiendes las funciones (I-IV-V) que las sostienen.",
          "Compones melodías con dirección, tensión y reposo en la tónica.",
          "Lees a primera vista manteniendo el pulso.",
        ],
      },
      {
        h: "Pensar como músico",
        tldr: "Entiendes el porqué armónico y melódico, no solo el qué.",
        tip: "La madurez musical es entender lo que ocurre: por qué un V pide el I, por qué una melodía suena completa, cómo se estructura una pieza. Con esto puedes crear con intención, no por ensayo y error.",
      },
    ],
    practice: [
      {
        kind: "match",
        q: "Empareja cada función armónica con su papel:",
        pairs: [
          { left: "Tónica (I)", right: "Reposo, el hogar" },
          { left: "Subdominante (IV)", right: "Prepara, se aleja" },
          { left: "Dominante (V)", right: "Tensión que pide volver" },
        ],
        why: "Las tres funciones que explican las progresiones.",
      },
      {
        kind: "choice",
        q: "Una melodía suena 'completa' sobre todo cuando…",
        options: ["termina en la tónica", "usa muchas notas", "es muy aguda"],
        answer: 0,
        why: "Reposar en la tónica cierra el viaje melódico.",
      },
      {
        kind: "choice",
        q: "Al leer a primera vista, si fallas una nota debes…",
        options: ["parar", "seguir manteniendo el pulso", "empezar de nuevo"],
        answer: 1,
        why: "El flujo del pulso importa más que un error puntual.",
      },
      {
        kind: "order",
        q: "Ordena el 'viaje' de una progresión I–IV–V–I:",
        items: ["I (hogar)", "IV (se aleja)", "V (tensión)", "I (regreso)"],
        why: "Salida, alejamiento, tensión y regreso a casa.",
      },
    ],
    activity: {
      title: "Reto avanzado",
      steps: [
        "Compón una melodía de 4 compases sobre una progresión I–IV–V–I.",
        "Etiqueta la función de cada acorde y comprueba que la melodía reposa en la tónica.",
        "Reto: léela a primera vista a un tempo lento sin parar.",
      ],
    },
    selfCheck: [
      "Entiendo progresiones y funciones armónicas.",
      "Compongo melodías con tensión y reposo.",
      "Leo a primera vista manteniendo el pulso.",
    ],
    summary: [
      "Madurez musical: entiendes el porqué, no solo el qué.",
      "Progresiones + melodía + lectura se integran.",
      "Puerta abierta a componer, improvisar y producir.",
    ],
  },
};
