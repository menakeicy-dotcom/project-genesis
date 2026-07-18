/**
 * Lecciones interactivas de **Ciencia** (disciplina en construcción, DRAFT).
 *
 * Mismo modelo `Lesson` y mismo estándar que las demás disciplinas: intro →
 * aprende → practica (choice/fill/order/match) → actividad → autoevaluación →
 * resumen. Reutiliza el reproductor, el repaso espaciado, XP y logros.
 *
 * Enfoque (NGSS + didáctica de las ciencias): enseñar a PENSAR con evidencia y
 * DESMONTAR ideas erróneas intuitivas antes que memorizar. Cada lección apoya
 * su bloque de errores frecuentes en las misconceptions reales del tema.
 * Fuentes de referencia: NGSS, Khan Academy, OpenStax, CK-12, NASA, Nat Geo, PhET.
 */

import type { Lesson } from "@/modules/skill-tree/lesson";

export const CIE_LESSONS: Record<string, Lesson> = {
  // ─────────────────────────── Pensamiento científico ───────────────────────────
  "cie-que-es": {
    intro:
      "La ciencia no es un montón de datos que memorizar, ni una lista de verdades intocables. Es una FORMA DE CONOCER: preguntar sobre el mundo y responder con evidencia, no con autoridad ni opinión. Y su mayor fortaleza es sorprendente: puede corregirse a sí misma.",
    goal: "entender la ciencia como una manera de preguntar y responder con evidencia.",
    sections: [
      {
        h: "Evidencia, no autoridad",
        tldr: "Algo es científico si se apoya en evidencia comprobable, no en quién lo dice.",
        body: [
          "En ciencia, 'porque lo dice un experto' no basta: hace falta evidencia que cualquiera pueda comprobar. Por eso la ciencia funciona igual en todo el mundo.",
        ],
      },
      {
        h: "La fuerza de poder equivocarse",
        tldr: "La ciencia se corrige con nueva evidencia; eso es una virtud, no un fallo.",
        tip: "Ojo con dos errores: creer que la ciencia son 'hechos fijos' (cambia cuando aparece mejor evidencia) y usar 'teoría' como sinónimo de 'suposición'. En ciencia, una teoría (como la de la evolución) es una explicación sólida y muy respaldada.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Una afirmación es científica sobre todo cuando…",
        options: [
          "la dice una persona con autoridad",
          "se apoya en evidencia comprobable",
          "mucha gente la cree",
        ],
        answer: 1,
        why: "La ciencia se basa en evidencia que cualquiera puede comprobar.",
      },
      {
        kind: "choice",
        q: "Que la ciencia cambie sus ideas con nueva evidencia es…",
        options: ["una debilidad", "una fortaleza (se autocorrige)", "un error"],
        answer: 1,
        why: "Corregirse ante mejor evidencia es la mayor virtud de la ciencia.",
      },
      {
        kind: "choice",
        q: "En ciencia, una 'teoría' (como la evolución) es…",
        options: [
          "una simple suposición",
          "una explicación sólida y muy respaldada por evidencia",
          "una ley que nunca cambia",
        ],
        answer: 1,
        why: "En ciencia, teoría ≠ 'suposición': es una explicación bien fundamentada.",
      },
    ],
    activity: {
      title: "¿Ciencia u opinión?",
      steps: [
        "Escribe tres afirmaciones: una comprobable con evidencia y dos que sean opiniones.",
        "Para la científica, di qué evidencia la apoyaría o refutaría.",
        "Busca un ejemplo histórico de una idea científica que cambió con nueva evidencia.",
      ],
    },
    selfCheck: [
      "Explico por qué la ciencia se basa en evidencia.",
      "Entiendo que la ciencia puede (y debe) corregirse.",
      "No confundo 'teoría científica' con 'suposición'.",
    ],
    summary: [
      "La ciencia es una forma de conocer basada en evidencia.",
      "Se autocorrige con nueva evidencia: eso es su fuerza.",
      "Una teoría científica es una explicación sólida, no una corazonada.",
    ],
  },

  "cie-observacion": {
    intro:
      "Toda la ciencia empieza con algo que parece simple pero no lo es: observar bien. El reto es separar lo que realmente VES de lo que SUPONES. Confundir ambas cosas es el primer tropiezo de todo aprendiz de ciencia… y de muchos adultos.",
    goal: "distinguir una observación de una inferencia.",
    sections: [
      {
        h: "Observar vs. inferir",
        tldr: "Observación: lo que percibes. Inferencia: lo que deduces a partir de ello.",
        code: "Observación: 'La calle está mojada.'\nInferencia:  'Ha llovido.'\n(¿Y si fue un camión de riego? La inferencia puede fallar.)",
        body: [
          "Una observación se puede verificar directamente con los sentidos o instrumentos. Una inferencia es una interpretación: útil, pero puede ser errónea.",
        ],
      },
      {
        h: "Por qué importa tanto",
        tldr: "Mezclar observación e inferencia contamina cualquier conclusión.",
        tip: "Entrénate a decir 'observo que…' frente a 'deduzco que…'. Los buenos científicos (y detectives) mantienen separadas ambas cosas hasta tener evidencia suficiente.",
      },
    ],
    practice: [
      {
        kind: "match",
        q: "Clasifica cada frase como observación o inferencia:",
        pairs: [
          { left: "El suelo tiene manchas oscuras", right: "Observación" },
          { left: "Alguien derramó café aquí", right: "Inferencia" },
          { left: "El perro mueve la cola", right: "Observación" },
        ],
        why: "Lo que percibes es observación; lo que deduces, inferencia.",
      },
      {
        kind: "choice",
        q: "'El cielo está gris, así que va a llover' contiene…",
        options: [
          "solo observaciones",
          "una observación (gris) y una inferencia (lloverá)",
          "solo inferencias",
        ],
        answer: 1,
        why: "Ver el gris es observar; predecir lluvia es inferir.",
      },
      {
        kind: "choice",
        q: "Una inferencia se diferencia de una observación en que…",
        options: [
          "siempre es correcta",
          "es una interpretación y puede fallar",
          "no usa los sentidos",
        ],
        answer: 1,
        why: "La inferencia interpreta; por eso puede ser errónea.",
      },
    ],
    activity: {
      title: "El ojo del científico",
      steps: [
        "Mira por la ventana y anota 5 observaciones puras (sin interpretar).",
        "Escribe 2 inferencias que deduzcas de esas observaciones.",
        "Reto: para cada inferencia, imagina otra explicación posible.",
      ],
    },
    selfCheck: [
      "Separo observaciones de inferencias.",
      "Sé que una inferencia puede fallar.",
      "Describo una escena solo con observaciones.",
    ],
    summary: [
      "Observación = lo que percibes; inferencia = lo que deduces.",
      "La inferencia interpreta y puede equivocarse.",
      "Separarlas es el primer hábito científico.",
    ],
  },

  "cie-evidencia": {
    intro:
      "Vivimos rodeados de afirmaciones: anuncios, titulares, mensajes virales. La herramienta que te protege es una pregunta científica sencilla: '¿qué evidencia hay?'. Y una trampa que debes conocer: que dos cosas ocurran juntas NO significa que una cause la otra.",
    goal: "exigir evidencia y evitar la trampa de correlación-causalidad.",
    sections: [
      {
        h: "Toda afirmación pide evidencia",
        tldr: "La carga de la prueba recae en quien afirma, no en quien duda.",
        body: [
          "Dudar con criterio no es ser negativo: es exigir pruebas antes de creer. Cuanto más extraordinaria es una afirmación, más evidencia necesita.",
        ],
      },
      {
        h: "Correlación no es causalidad",
        tldr: "Dos cosas que van juntas no prueban que una cause la otra.",
        code: "En verano suben las ventas de helado Y los ahogamientos.\n¿El helado causa ahogamientos? NO.\nUna tercera causa (el calor) explica ambos.",
        tip: "Cuando veas 'A y B van juntos, luego A causa B', desconfía. Pregúntate: ¿podría haber una tercera causa? ¿O ser casualidad? Es el error de razonamiento más común en las noticias.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "'Los países con más móviles viven más años, luego los móviles alargan la vida'. Ese razonamiento…",
        options: [
          "es correcto",
          "confunde correlación con causalidad",
          "necesita más móviles",
        ],
        answer: 1,
        why: "Una tercera causa (riqueza, sanidad) explica ambos: no hay relación causal directa.",
      },
      {
        kind: "choice",
        q: "¿Sobre quién recae la carga de la prueba?",
        options: [
          "sobre quien duda de la afirmación",
          "sobre quien hace la afirmación",
          "sobre nadie",
        ],
        answer: 1,
        why: "Quien afirma debe aportar la evidencia.",
      },
      {
        kind: "choice",
        q: "Ante 'A y B ocurren juntos', un pensador científico…",
        options: [
          "concluye que A causa B",
          "considera que puede haber una tercera causa o azar",
          "ignora los datos",
        ],
        answer: 1,
        why: "Correlación no implica causalidad: busca otras explicaciones.",
      },
    ],
    activity: {
      title: "Caza-bulos",
      steps: [
        "Busca un titular que afirme que algo 'causa' otra cosa.",
        "Pregúntate: ¿es correlación o causa? ¿Podría haber una tercera causa?",
        "Anota qué evidencia haría falta para confirmar una relación causal real.",
      ],
    },
    selfCheck: [
      "Exijo evidencia antes de creer una afirmación.",
      "Distingo correlación de causalidad.",
      "Busco terceras causas y el papel del azar.",
    ],
    summary: [
      "Quien afirma debe probar; dudar con criterio es científico.",
      "Correlación ≠ causalidad.",
      "Ante dos cosas que van juntas, busca una tercera causa.",
    ],
  },

  "cie-modelos": {
    intro:
      "Los científicos no estudian la realidad directamente: construyen MODELOS de ella. Un mapa, la maqueta de un átomo, una ecuación del clima… todos son modelos: representaciones simplificadas que ayudan a entender y predecir. La clave es recordar que el mapa no es el territorio.",
    goal: "entender qué es (y qué no es) un modelo científico.",
    sections: [
      {
        h: "Simplificar para entender",
        tldr: "Un modelo deja fuera detalles a propósito para mostrar lo esencial.",
        body: [
          "Un mapa del metro no muestra las calles reales ni las distancias exactas: simplifica para que puedas orientarte. Un buen modelo científico hace lo mismo con la naturaleza.",
        ],
      },
      {
        h: "Útil, pero no perfecto",
        tldr: "Todos los modelos tienen límites; se mejoran o cambian con nueva evidencia.",
        tip: "El error clásico es creer que el modelo del átomo (bolitas y órbitas) es una foto real. No lo es: es una representación útil. 'Todos los modelos son erróneos, pero algunos son útiles' resume bien la idea.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Un modelo científico es…",
        options: [
          "una copia exacta de la realidad",
          "una representación simplificada y útil",
          "una opinión sin base",
        ],
        answer: 1,
        why: "Simplifica la realidad para entenderla y predecirla.",
      },
      {
        kind: "choice",
        q: "El dibujo del átomo con bolitas y órbitas…",
        options: [
          "es una foto exacta del átomo",
          "es un modelo útil, no la realidad literal",
          "está mal y no sirve",
        ],
        answer: 1,
        why: "Es una representación útil con límites, no una imagen real.",
      },
      {
        kind: "match",
        q: "Empareja cada modelo con lo que simplifica:",
        pairs: [
          { left: "Mapa del metro", right: "La ciudad real" },
          { left: "Maqueta del sistema solar", right: "Distancias y tamaños reales" },
          { left: "Ecuación del clima", right: "La atmósfera real" },
        ],
        why: "Todo modelo deja fuera detalles para mostrar lo esencial.",
      },
    ],
    activity: {
      title: "El mapa no es el territorio",
      steps: [
        "Elige un modelo cotidiano (mapa, globo terráqueo, app del tiempo).",
        "Anota qué simplifica y qué deja fuera.",
        "Reto: piensa en qué situación ese modelo fallaría por su simplificación.",
      ],
    },
    selfCheck: [
      "Explico para qué sirve un modelo.",
      "Reconozco que un modelo no es la realidad exacta.",
      "Identifico los límites de un modelo.",
    ],
    summary: [
      "Un modelo es una representación simplificada y útil.",
      "El mapa no es el territorio.",
      "Todos los modelos tienen límites y pueden mejorarse.",
    ],
  },

  // ─────────────────────────── Método científico y datos ───────────────────────────
  "cie-metodo": {
    intro:
      "El método científico no es una receta rígida de laboratorio: es la forma natural de convertir curiosidad en conocimiento fiable. Observas algo, te preguntas por qué, propones una explicación comprobable y la pones a prueba. Ya lo has usado sin saberlo (¿por qué no enciende la linterna?).",
    goal: "aplicar el ciclo del método científico a una pregunta sencilla.",
    sections: [
      {
        h: "Un ciclo, no una escalera",
        tldr: "Pregunta → hipótesis → experimento → datos → conclusión (y vuelta a empezar).",
        code: "1) Observo y pregunto\n2) Hipótesis: una explicación COMPROBABLE\n3) Experimento para ponerla a prueba\n4) Recojo y analizo datos\n5) Concluyo… y surgen nuevas preguntas",
        body: [
          "No siempre se siguen los pasos en orden exacto: es un ciclo que se repite y se ajusta. Lo esencial es que la explicación se pueda poner a prueba.",
        ],
      },
      {
        h: "Una hipótesis se puede refutar",
        tldr: "Si nada podría demostrar que es falsa, no es científica.",
        tip: "Una hipótesis no es 'adivinar': es una explicación que hace una predicción comprobable. Si dices 'las plantas crecen más con música', debe poder salir que NO, o no sirve. Poder equivocarse es lo que la hace científica.",
      },
    ],
    practice: [
      {
        kind: "order",
        q: "Ordena el ciclo del método científico:",
        items: [
          "Observar y preguntar",
          "Formular una hipótesis comprobable",
          "Hacer un experimento",
          "Analizar los datos",
          "Sacar una conclusión",
        ],
        why: "Pregunta → hipótesis → experimento → datos → conclusión.",
      },
      {
        kind: "choice",
        q: "Una buena hipótesis científica debe…",
        options: [
          "ser imposible de comprobar",
          "poder ponerse a prueba (y quizá resultar falsa)",
          "ser siempre correcta",
        ],
        answer: 1,
        why: "Si no puede refutarse, no es científica.",
      },
      {
        kind: "choice",
        q: "'Existe un dragón invisible que no deja rastro' NO es científica porque…",
        options: [
          "los dragones no existen",
          "no hay forma de ponerla a prueba",
          "es demasiado larga",
        ],
        answer: 1,
        why: "Nada podría refutarla: no es comprobable.",
      },
    ],
    activity: {
      title: "Tu mini-investigación",
      steps: [
        "Elige una pregunta cotidiana ('¿el pan tostado cae más por el lado de la mantequilla?').",
        "Escribe una hipótesis comprobable.",
        "Diseña (o realiza) un experimento sencillo y anota qué datos recogerías.",
      ],
    },
    selfCheck: [
      "Recorro el ciclo del método científico.",
      "Formulo una hipótesis comprobable.",
      "Sé que una hipótesis debe poder refutarse.",
    ],
    summary: [
      "Método científico: pregunta → hipótesis → experimento → datos → conclusión.",
      "Es un ciclo flexible, no una receta rígida.",
      "Una hipótesis científica se puede poner a prueba (y refutar).",
    ],
  },

  "cie-variables": {
    intro:
      "Imagina que pruebas un fertilizante y cambias a la vez la marca, el riego y la luz. Si la planta crece más… ¿por cuál fue? No lo sabes. El secreto de un experimento que PRUEBA algo es cambiar una sola cosa a la vez y comparar con un grupo de control.",
    goal: "diseñar un experimento controlado cambiando una sola variable.",
    sections: [
      {
        h: "Tres tipos de variable",
        tldr: "Independiente (la que cambias), dependiente (la que mides), control (las que mantienes iguales).",
        code: "Pregunta: ¿el fertilizante hace crecer más?\nIndependiente: cantidad de fertilizante (la cambio)\nDependiente:   altura de la planta (la mido)\nControl:       misma luz, agua, maceta, semilla",
        body: [
          "Solo cambiando UNA variable (la independiente) puedes atribuirle el efecto observado.",
        ],
      },
      {
        h: "El grupo de control",
        tldr: "Un grupo sin el tratamiento sirve de comparación honesta.",
        tip: "Sin grupo de control no sabes qué habría pasado igualmente. Y si cambias varias variables a la vez, no sabrás cuál causó el efecto: ese es el error que invalida más experimentos caseros.",
      },
    ],
    practice: [
      {
        kind: "match",
        q: "En 'probar si más luz hace crecer más una planta', clasifica:",
        pairs: [
          { left: "Cantidad de luz", right: "Variable independiente" },
          { left: "Altura de la planta", right: "Variable dependiente" },
          { left: "Agua y maceta iguales", right: "Variables de control" },
        ],
        why: "Cambias la independiente, mides la dependiente, mantienes las de control.",
      },
      {
        kind: "choice",
        q: "¿Por qué se cambia solo UNA variable a la vez?",
        options: [
          "para ir más rápido",
          "para saber cuál causó el efecto",
          "porque lo dice la norma",
        ],
        answer: 1,
        why: "Si cambias varias, no sabes cuál provocó el resultado.",
      },
      {
        kind: "choice",
        q: "El grupo de control sirve para…",
        options: [
          "tener más plantas",
          "comparar con lo que pasaría sin el tratamiento",
          "gastar más fertilizante",
        ],
        answer: 1,
        why: "Es la comparación honesta que aísla el efecto real.",
      },
    ],
    activity: {
      title: "Diseña un experimento justo",
      steps: [
        "Elige una pregunta ('¿el azúcar hace durar más las flores cortadas?').",
        "Define variable independiente, dependiente y de control.",
        "Describe el grupo de control y por qué lo necesitas.",
      ],
    },
    selfCheck: [
      "Identifico variable independiente, dependiente y control.",
      "Cambio una sola variable a la vez.",
      "Incluyo un grupo de control.",
    ],
    summary: [
      "Independiente (cambias), dependiente (mides), control (mantienes).",
      "Cambia UNA variable a la vez para aislar la causa.",
      "El grupo de control es la comparación honesta.",
    ],
  },

  "cie-datos": {
    intro:
      "Un experimento produce datos, pero los datos no hablan solos: hay que representarlos y leerlos con honestidad. Una gráfica bien hecha revela patrones; una mal hecha (o mal leída) engaña. Y toda medida trae consigo algo inevitable: un margen de error.",
    goal: "interpretar datos en una gráfica y reconocer su incertidumbre.",
    sections: [
      {
        h: "Mira siempre los ejes",
        tldr: "Sin leer los ejes, una gráfica puede decir cualquier cosa.",
        body: [
          "Antes de interpretar, comprueba qué representa cada eje y sus unidades. Un eje que no empieza en cero puede exagerar una diferencia pequeña y hacerla parecer enorme.",
        ],
      },
      {
        h: "Toda medida tiene incertidumbre",
        tldr: "Ninguna medida es exacta al infinito; siempre hay un margen de error.",
        tip: "Medir 25 °C no significa 25,000000… °C. Hay un margen (p. ej. ±0,5 °C). Por eso la ciencia repite mediciones y busca tendencias, no un número mágico exacto. Desconfía de la falsa precisión.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Lo PRIMERO que debes hacer al leer una gráfica es…",
        options: [
          "mirar el color",
          "leer qué representa cada eje y sus unidades",
          "buscar el punto más alto",
        ],
        answer: 1,
        why: "Sin entender los ejes, cualquier lectura puede ser errónea.",
      },
      {
        kind: "choice",
        q: "Una gráfica cuyo eje NO empieza en cero puede…",
        options: [
          "exagerar diferencias pequeñas",
          "ser siempre más precisa",
          "no tener validez nunca",
        ],
        answer: 0,
        why: "Truncar el eje hace que diferencias mínimas parezcan enormes.",
      },
      {
        kind: "choice",
        q: "Que toda medida tenga incertidumbre significa que…",
        options: [
          "medir no sirve para nada",
          "siempre hay un margen de error razonable",
          "los instrumentos están rotos",
        ],
        answer: 1,
        why: "Ninguna medida es infinitamente exacta; se trabaja con márgenes.",
      },
    ],
    activity: {
      title: "Lee datos con ojo crítico",
      steps: [
        "Busca una gráfica en una noticia y comprueba si el eje empieza en cero.",
        "Describe la tendencia real leyendo bien los ejes.",
        "Reto: mide algo tres veces (tu pulso, una longitud) y observa que no da idéntico: esa es la incertidumbre.",
      ],
    },
    selfCheck: [
      "Leo los ejes antes de interpretar una gráfica.",
      "Detecto una gráfica engañosa (eje truncado).",
      "Sé que toda medida tiene un margen de error.",
    ],
    summary: [
      "Mira siempre los ejes y sus unidades.",
      "Un eje truncado exagera diferencias.",
      "Toda medida tiene incertidumbre: busca tendencias, no exactitud falsa.",
    ],
  },

  // ─────────────────────────── Materia y sus estados ───────────────────────────
  "cie-materia": {
    intro:
      "¿De qué está hecho todo? De materia. La definición es sencilla —todo lo que tiene masa y ocupa espacio— pero esconde una sorpresa: el aire, aunque no lo veas, también es materia. Distinguir masa, volumen y peso es el primer paso para entender el mundo físico.",
    goal: "entender la materia por sus propiedades (masa y volumen).",
    sections: [
      {
        h: "Masa y volumen",
        tldr: "Materia = tiene masa (cantidad de sustancia) y volumen (ocupa espacio).",
        body: [
          "El aire tiene masa y ocupa espacio: por eso un globo inflado pesa un poquito más y no puedes 'aplastar' el aire a la nada. Es tan materia como una piedra.",
        ],
      },
      {
        h: "Masa no es peso",
        tldr: "La masa es cuánta materia hay; el peso es la fuerza con que la gravedad tira de ella.",
        code: "En la Luna pesarías 6 veces menos…\n…pero tu MASA (la materia que te forma) sería la misma.",
        tip: "El error más común: usar 'masa' y 'peso' como sinónimos. Tu masa no cambia si viajas a la Luna; tu peso sí, porque allí la gravedad es menor.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿El aire es materia?",
        options: [
          "no, porque no se ve",
          "sí, tiene masa y ocupa espacio",
          "solo cuando hace viento",
        ],
        answer: 1,
        why: "El aire tiene masa y volumen: es materia aunque no se vea.",
      },
      {
        kind: "choice",
        q: "En la Luna, comparado con la Tierra, tu…",
        options: [
          "masa y peso disminuyen",
          "masa es igual, pero pesas menos",
          "masa aumenta",
        ],
        answer: 1,
        why: "La masa no cambia; el peso sí, porque la gravedad es menor.",
      },
      {
        kind: "match",
        q: "Empareja cada concepto con su idea:",
        pairs: [
          { left: "Masa", right: "Cantidad de materia" },
          { left: "Volumen", right: "Espacio que ocupa" },
          { left: "Peso", right: "Fuerza de la gravedad sobre la masa" },
        ],
        why: "Masa, volumen y peso son cosas distintas.",
      },
    ],
    activity: {
      title: "El aire ocupa espacio",
      steps: [
        "Mete un papel en el fondo de un vaso y sumérgelo boca abajo en agua: el papel no se moja (el aire ocupa el vaso).",
        "Infla un globo y comprueba que 'algo' lo llena y empuja.",
        "Reto: explica por qué no puedes comprimir el aire hasta la nada.",
      ],
    },
    selfCheck: [
      "Defino materia por masa y volumen.",
      "Sé que el aire es materia.",
      "Distingo masa de peso.",
    ],
    summary: [
      "Materia = todo lo que tiene masa y ocupa espacio.",
      "El aire también es materia.",
      "Masa (cantidad de materia) ≠ peso (fuerza de la gravedad).",
    ],
  },

  "cie-estados": {
    intro:
      "Sólido, líquido y gas no son 'tres materiales distintos': son la MISMA materia con sus partículas moviéndose de forma diferente. El agua lo demuestra: hielo, agua y vapor son H₂O, solo cambia cuánta energía tienen sus partículas. Esta idea —el modelo de partículas— abre la puerta a toda la química.",
    goal: "explicar los estados de la materia por el movimiento de las partículas.",
    sections: [
      {
        h: "El modelo de partículas",
        tldr: "A más energía, más se mueven y separan las partículas.",
        code: "Sólido:  partículas juntas y vibrando en su sitio (forma fija)\nLíquido: partículas juntas pero deslizándose (se adapta al recipiente)\nGas:     partículas separadas y muy rápidas (llena todo el espacio)",
        body: [
          "Al calentar, das energía a las partículas: se mueven más y el material pasa de sólido a líquido a gas.",
        ],
      },
      {
        h: "Cambiar de estado no destruye materia",
        tldr: "Al hervir, el agua no 'desaparece': se convierte en vapor (sigue siendo H₂O).",
        tip: "Dos errores comunes: creer que las partículas de un sólido están totalmente quietas (vibran) y pensar que el agua hervida 'desaparece' (se transforma en gas, que sigue ahí, invisible).",
      },
    ],
    practice: [
      {
        kind: "match",
        q: "Empareja cada estado con sus partículas:",
        pairs: [
          { left: "Sólido", right: "Juntas, vibrando en su sitio" },
          { left: "Líquido", right: "Juntas pero deslizándose" },
          { left: "Gas", right: "Separadas y muy rápidas" },
        ],
        why: "El estado depende del movimiento y la separación de las partículas.",
      },
      {
        kind: "choice",
        q: "Al calentar un sólido, sus partículas…",
        options: [
          "se detienen",
          "se mueven más y pueden separarse",
          "desaparecen",
        ],
        answer: 1,
        why: "El calor da energía: las partículas se mueven más.",
      },
      {
        kind: "choice",
        q: "Cuando el agua hierve, el vapor que se forma…",
        options: [
          "es materia nueva",
          "sigue siendo agua (H₂O), ahora en gas",
          "ha desaparecido",
        ],
        answer: 1,
        why: "Cambia de estado, no de sustancia: sigue siendo H₂O.",
      },
    ],
    activity: {
      title: "Estados con las manos",
      steps: [
        "Representa con tu cuerpo (o con canicas) las partículas de un sólido, un líquido y un gas.",
        "Observa hielo derritiéndose y explícalo con el modelo de partículas.",
        "Reto: tapa una olla con agua hirviendo y observa el agua que reaparece en la tapa (el vapor no desapareció).",
      ],
    },
    selfCheck: [
      "Explico los estados por el movimiento de las partículas.",
      "Sé que cambiar de estado no destruye la materia.",
      "No creo que el agua hervida 'desaparezca'.",
    ],
    summary: [
      "Sólido, líquido y gas: misma materia, distinto movimiento de partículas.",
      "A más energía, más se mueven y separan.",
      "Cambiar de estado transforma, no destruye la materia.",
    ],
  },

  "cie-atomos": {
    intro:
      "Si dividieras un trozo de oro una y otra vez, llegarías a la pieza más pequeña que sigue siendo oro: un átomo. Toda la materia del universo —tú, el aire, las estrellas— está hecha de átomos de apenas un centenar de tipos (los elementos). Es una de las ideas más poderosas de la ciencia.",
    goal: "entender que toda la materia está hecha de átomos de unos pocos elementos.",
    sections: [
      {
        h: "Átomos, elementos y moléculas",
        tldr: "Átomo = pieza básica. Elemento = un tipo de átomo. Molécula = átomos unidos.",
        code: "Elemento:  oxígeno (O), hierro (Fe), hidrógeno (H)…\nMolécula:  agua = H₂O (2 hidrógenos + 1 oxígeno)\n           dióxido de carbono = CO₂",
        body: [
          "Con poco más de 100 elementos se forma TODO combinándolos, igual que con pocas letras se forman todas las palabras.",
        ],
      },
      {
        h: "El átomo no es una bolita maciza",
        tldr: "Es casi todo espacio vacío, con un núcleo diminuto y electrones alrededor.",
        tip: "Dos ideas erróneas: imaginar el átomo como una canica sólida (es casi vacío) y confundir átomo con molécula (una molécula son varios átomos unidos, como H₂O).",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Un elemento es…",
        options: [
          "cualquier mezcla",
          "un tipo concreto de átomo (oxígeno, hierro…)",
          "una molécula grande",
        ],
        answer: 1,
        why: "Cada elemento es un tipo de átomo.",
      },
      {
        kind: "fill",
        q: "¿Cuántos elementos distintos hay en la molécula de agua (H₂O)?",
        accept: ["2", "dos"],
        hint: "Hidrógeno y oxígeno.",
        why: "Dos elementos: hidrógeno (H) y oxígeno (O).",
      },
      {
        kind: "choice",
        q: "La diferencia entre átomo y molécula es que…",
        options: [
          "son lo mismo",
          "una molécula son varios átomos unidos",
          "el átomo es más grande",
        ],
        answer: 1,
        why: "La molécula es una unión de átomos (p. ej. H₂O).",
      },
      {
        kind: "choice",
        q: "El interior de un átomo es…",
        options: [
          "una bolita maciza",
          "casi todo espacio vacío con un núcleo diminuto",
          "un líquido",
        ],
        answer: 1,
        why: "El átomo es mayormente vacío, con núcleo y electrones.",
      },
    ],
    activity: {
      title: "Construye moléculas",
      steps: [
        "Con bolitas de plastilina de dos colores, representa H₂O y CO₂.",
        "Cuenta cuántos átomos y cuántos elementos hay en cada una.",
        "Reto: busca de qué elementos está hecho el aire que respiras.",
      ],
    },
    selfCheck: [
      "Distingo átomo, elemento y molécula.",
      "Sé que todo se forma con ~100 elementos.",
      "No imagino el átomo como una bolita maciza.",
    ],
    summary: [
      "Toda la materia está hecha de átomos.",
      "Elemento = tipo de átomo; molécula = átomos unidos.",
      "El átomo es casi todo espacio vacío.",
    ],
  },

  "cie-mezclas": {
    intro:
      "Casi nada de lo que te rodea es 'puro': el aire, el mar, un refresco o una roca son mezclas de varias sustancias. Saber distinguir una mezcla de una sustancia pura —y cómo separarlas— es química cotidiana, desde cocinar hasta potabilizar agua.",
    goal: "distinguir mezclas de sustancias puras y elegir cómo separarlas.",
    sections: [
      {
        h: "Mezcla vs. sustancia pura",
        tldr: "En una mezcla, cada componente conserva sus propiedades y se puede separar.",
        body: [
          "El agua con sal es una mezcla: la sal sigue siendo sal y puedes recuperarla. El agua pura (H₂O) es una sustancia pura: no puedes separarla por medios físicos.",
        ],
      },
      {
        h: "Transparente no significa puro",
        tldr: "Una disolución (agua + sal) es transparente y aun así es una mezcla.",
        code: "Separar mezclas (métodos físicos):\n- Evaporación: recuperar la sal del agua salada\n- Filtración: separar arena del agua\n- Imán: separar limaduras de hierro",
        tip: "El error típico es creer que si algo es transparente y uniforme es 'puro'. El agua del grifo parece pura, pero lleva sales y minerales disueltos: es una mezcla.",
      },
    ],
    practice: [
      {
        kind: "match",
        q: "Clasifica cada material:",
        pairs: [
          { left: "Agua con sal", right: "Mezcla" },
          { left: "Oxígeno (O₂)", right: "Sustancia pura" },
          { left: "Aire", right: "Mezcla" },
        ],
        why: "Si tiene varios componentes separables, es mezcla.",
      },
      {
        kind: "choice",
        q: "Para recuperar la sal del agua salada usarías…",
        options: ["un imán", "evaporación", "un filtro"],
        answer: 1,
        why: "Al evaporar el agua, la sal queda.",
      },
      {
        kind: "choice",
        q: "Que una disolución sea transparente significa que…",
        options: [
          "es una sustancia pura",
          "puede seguir siendo una mezcla",
          "no tiene nada disuelto",
        ],
        answer: 1,
        why: "Transparente y uniforme no implica puro: puede llevar cosas disueltas.",
      },
    ],
    activity: {
      title: "Separa una mezcla",
      steps: [
        "Mezcla sal en agua y sepárala por evaporación (deja el agua al sol o hierve con cuidado).",
        "Mezcla arena con agua y sepárala filtrando con un colador o papel.",
        "Reto: clasifica 5 cosas de tu cocina como mezcla o sustancia pura.",
      ],
    },
    selfCheck: [
      "Distingo mezcla de sustancia pura.",
      "Sé que 'transparente' no implica 'puro'.",
      "Elijo un método para separar una mezcla.",
    ],
    summary: [
      "Mezcla: varios componentes separables que conservan sus propiedades.",
      "Sustancia pura: no se separa por medios físicos.",
      "Transparente ≠ puro; separa por evaporación, filtración, imán…",
    ],
  },

  // ─────────────────────────── Energía, fuerzas y movimiento ───────────────────────────
  "cie-energia": {
    intro:
      "La energía es uno de los conceptos más importantes de toda la ciencia, y a la vez de los más malentendidos. No es una 'cosa' que se gasta y desaparece: es la capacidad de causar cambios, y viene en muchas formas que se transforman unas en otras constantemente.",
    goal: "reconocer las formas de energía y sus transformaciones.",
    sections: [
      {
        h: "Muchas formas, un mismo concepto",
        tldr: "Cinética (movimiento), química, térmica, eléctrica, lumínica, potencial…",
        code: "Comer (química) → moverte (cinética)\nEnchufe (eléctrica) → bombilla (luz + calor)\nSol (luz) → planta (química) → tú (cinética)",
        body: [
          "La energía conecta todas las ciencias: la misma energía del Sol acaba moviendo tus músculos a través de la comida.",
        ],
      },
      {
        h: "La energía no se gasta: se transforma",
        tldr: "Cuando 'se acaba', en realidad se ha transformado (a menudo en calor).",
        tip: "Dos errores: creer que la energía desaparece (no; se transforma) y confundir energía con fuerza. La energía es la capacidad de causar cambios; la fuerza es un empujón o tirón. Se relacionan, pero no son lo mismo.",
      },
    ],
    practice: [
      {
        kind: "match",
        q: "Empareja cada situación con la forma de energía principal:",
        pairs: [
          { left: "Una pelota rodando", right: "Cinética (movimiento)" },
          { left: "Una pila", right: "Química" },
          { left: "Una estufa", right: "Térmica (calor)" },
        ],
        why: "La energía viene en muchas formas.",
      },
      {
        kind: "choice",
        q: "Cuando decimos que una batería 'se gasta', en realidad su energía…",
        options: [
          "desaparece",
          "se ha transformado en otras formas",
          "se convierte en materia",
        ],
        answer: 1,
        why: "La energía no desaparece: se transforma (luz, calor, movimiento).",
      },
      {
        kind: "choice",
        q: "Energía y fuerza…",
        options: [
          "son lo mismo",
          "son conceptos distintos (capacidad de cambio vs. empujón/tirón)",
          "no se relacionan nunca",
        ],
        answer: 1,
        why: "La energía es capacidad de causar cambios; la fuerza es un empujón o tirón.",
      },
    ],
    activity: {
      title: "Sigue la energía",
      steps: [
        "Elige un aparato (linterna, ventilador, tú mismo comiendo).",
        "Rastrea las transformaciones de energía de principio a fin.",
        "Reto: encuentra en qué paso parte de la energía acaba como calor.",
      ],
    },
    selfCheck: [
      "Reconozco varias formas de energía.",
      "Sé que la energía se transforma, no desaparece.",
      "Distingo energía de fuerza.",
    ],
    summary: [
      "Energía = capacidad de causar cambios; tiene muchas formas.",
      "No se gasta: se transforma (a menudo en calor).",
      "Energía ≠ fuerza.",
    ],
  },

  "cie-conservacion": {
    intro:
      "Aquí está una de las leyes más profundas y universales del universo: la energía no se crea ni se destruye, solo se transforma. Desde una montaña rusa hasta una estrella, la energía total siempre se conserva. Entenderlo cambia cómo ves cualquier máquina o proceso.",
    goal: "aplicar la conservación de la energía a cadenas de transformación.",
    sections: [
      {
        h: "La energía total no cambia",
        tldr: "Solo se transforma de una forma a otra; el total se mantiene.",
        code: "Montaña rusa (arriba, parada):  energía potencial (altura)\n         ↓ baja\n(abajo, veloz): energía cinética (movimiento)\n+ un poco de calor por fricción\nTOTAL siempre igual.",
        body: [
          "En lo alto tiene energía 'guardada' por la altura (potencial); al bajar se convierte en movimiento (cinética). La suma se conserva.",
        ],
      },
      {
        h: "¿A dónde va la energía 'perdida'?",
        tldr: "Casi siempre se transforma en calor por rozamiento.",
        tip: "El error clásico es decir que la energía 'se pierde'. No se pierde: se degrada a calor (por fricción, resistencia del aire…). Ese calor se dispersa y es difícil de reutilizar, pero sigue existiendo. Nada se destruye.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "La ley de conservación de la energía dice que…",
        options: [
          "la energía se gasta con el uso",
          "no se crea ni se destruye, solo se transforma",
          "la energía se puede crear con máquinas",
        ],
        answer: 1,
        why: "El total de energía se conserva; solo cambia de forma.",
      },
      {
        kind: "choice",
        q: "Cuando un coche frena, su energía de movimiento se convierte sobre todo en…",
        options: ["luz", "calor (en los frenos)", "sonido, y nada más"],
        answer: 1,
        why: "La fricción de los frenos transforma la energía cinética en calor.",
      },
      {
        kind: "order",
        q: "Ordena las transformaciones de energía en una montaña rusa (de arriba a abajo):",
        items: [
          "Arriba y parada: máxima energía potencial",
          "Empieza a bajar: potencial → cinética",
          "Abajo y veloz: máxima energía cinética",
          "Parte de la energía se vuelve calor por fricción",
        ],
        why: "Potencial → cinética, con algo de calor: el total se conserva.",
      },
    ],
    activity: {
      title: "Conserva la energía",
      steps: [
        "Deja caer una pelota y observa que cada rebote es más bajo.",
        "Explica a dónde fue la energía 'que falta' (calor y sonido al rebotar).",
        "Reto: en la simulación PhET del skate, sigue cómo se conserva la energía total.",
      ],
    },
    selfCheck: [
      "Enuncio la conservación de la energía.",
      "Sigo una cadena de transformaciones.",
      "Sé que la energía 'perdida' suele ser calor.",
    ],
    summary: [
      "La energía no se crea ni se destruye: se transforma.",
      "El total siempre se conserva.",
      "La energía 'perdida' se degrada a calor, no desaparece.",
    ],
  },

  "cie-fuerzas": {
    intro:
      "Pregunta trampa: si empujas una caja por el suelo y dejas de empujar, se para. ¿Necesita fuerza para mantenerse en movimiento? Tu intuición dice que sí. Galileo y Newton demostraron que NO: lo que la frena es una fuerza oculta (el rozamiento). Corregir esta idea es uno de los grandes saltos del pensamiento científico.",
    goal: "relacionar las fuerzas con los cambios de movimiento (idea de Newton).",
    sections: [
      {
        h: "Una fuerza CAMBIA el movimiento",
        tldr: "Sin fuerza neta, un objeto mantiene su estado: quieto o moviéndose igual (inercia).",
        body: [
          "Las fuerzas (empujones, tirones) no mantienen el movimiento: lo CAMBIAN (aceleran, frenan o giran). Un objeto sin fuerza neta seguiría moviéndose para siempre a velocidad constante.",
        ],
      },
      {
        h: "El rozamiento es la fuerza escondida",
        tldr: "En la Tierra, la fricción frena todo; por eso parece que hace falta empujar.",
        code: "En el espacio (sin fricción): una nave sigue sin motor.\nEn el hielo (poca fricción): patinas y cuesta frenar.\nEn el suelo (mucha fricción): la caja se para al no empujar.",
        tip: "La gran idea errónea (que compartían casi todos antes de Galileo): 'para mantener algo en movimiento hace falta una fuerza continua'. Falso. Lo que frena es el rozamiento. Sin él, el movimiento se mantendría solo.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Una fuerza neta sobre un objeto…",
        options: [
          "mantiene su movimiento",
          "cambia su movimiento (lo acelera, frena o gira)",
          "no hace nada",
        ],
        answer: 1,
        why: "Las fuerzas cambian el movimiento; no hacen falta para mantenerlo.",
      },
      {
        kind: "choice",
        q: "Empujas una caja y la sueltas: se para. ¿Por qué?",
        options: [
          "porque sin fuerza nada se mueve",
          "por el rozamiento con el suelo (una fuerza)",
          "porque se acabó su energía interna",
        ],
        answer: 1,
        why: "El rozamiento es la fuerza que la frena; sin él seguiría.",
      },
      {
        kind: "choice",
        q: "En el espacio, sin rozamiento, una nave con el motor apagado…",
        options: [
          "se para enseguida",
          "sigue moviéndose a velocidad constante",
          "acelera sola",
        ],
        answer: 1,
        why: "Sin fuerza neta, mantiene su movimiento (inercia).",
      },
    ],
    activity: {
      title: "Descubre el rozamiento",
      steps: [
        "Desliza un mismo objeto sobre una mesa, sobre una toalla y sobre hielo (o algo muy liso).",
        "Observa dónde llega más lejos y relaciónalo con el rozamiento.",
        "Reto: explica por qué en el espacio no haría falta motor para seguir avanzando.",
      ],
    },
    selfCheck: [
      "Sé que una fuerza cambia (no mantiene) el movimiento.",
      "Identifico el rozamiento como la fuerza que frena.",
      "Explico la inercia con un ejemplo.",
    ],
    summary: [
      "Las fuerzas CAMBIAN el movimiento, no lo mantienen.",
      "Sin fuerza neta, un objeto sigue igual (inercia).",
      "En la Tierra, el rozamiento es la fuerza escondida que frena.",
    ],
  },

  "cie-ondas": {
    intro:
      "Una ola en el mar mueve el agua… pero un corcho flotando solo sube y baja: no viaja con la ola. Eso revela el secreto de las ondas: transportan ENERGÍA, no materia. Luz, sonido, radio y terremotos son ondas, y un mismo modelo los explica todos.",
    goal: "entender la onda como transporte de energía y sus propiedades.",
    sections: [
      {
        h: "Transportan energía, no materia",
        tldr: "La onda avanza; el medio solo oscila en su sitio.",
        body: [
          "El sonido hace vibrar el aire, pero el aire no viaja desde el altavoz hasta tu oído: son las partículas empujándose unas a otras. Por eso el sonido NO viaja en el vacío (no hay medio que vibre).",
        ],
      },
      {
        h: "Amplitud y frecuencia",
        tldr: "Amplitud = intensidad (volumen); frecuencia = agudo/grave (o color).",
        code: "Sonido: más amplitud = más fuerte\n        más frecuencia = más agudo\nLuz:    la frecuencia determina el color",
        tip: "El error famoso: creer que en el espacio se oyen explosiones. No: el sonido necesita un medio (aire, agua, sólido) para propagarse. En el vacío del espacio hay silencio absoluto.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Una onda transporta principalmente…",
        options: ["materia", "energía", "temperatura"],
        answer: 1,
        why: "La onda transporta energía; el medio solo oscila.",
      },
      {
        kind: "choice",
        q: "¿Por qué en el espacio no se oye una explosión?",
        options: [
          "porque está muy lejos",
          "porque no hay medio (aire) que transmita el sonido",
          "porque hace mucho frío",
        ],
        answer: 1,
        why: "El sonido necesita un medio material; el vacío no lo tiene.",
      },
      {
        kind: "match",
        q: "Empareja cada propiedad con lo que determina en el sonido:",
        pairs: [
          { left: "Amplitud", right: "Volumen (intensidad)" },
          { left: "Frecuencia", right: "Agudo o grave" },
        ],
        why: "Amplitud = intensidad; frecuencia = altura del sonido.",
      },
    ],
    activity: {
      title: "Ondas por todas partes",
      steps: [
        "Sacude una cuerda atada por un extremo: la onda viaja, pero la cuerda vuelve a su sitio.",
        "Pon música y sube el volumen (amplitud) sin cambiar el tono.",
        "Reto: explica por qué ves el rayo antes de oír el trueno.",
      ],
    },
    selfCheck: [
      "Sé que una onda transporta energía, no materia.",
      "Explico por qué el sonido no viaja en el vacío.",
      "Distingo amplitud de frecuencia.",
    ],
    summary: [
      "Las ondas transportan energía; el medio solo oscila.",
      "El sonido necesita un medio: en el vacío hay silencio.",
      "Amplitud = intensidad; frecuencia = agudo/grave o color.",
    ],
  },

  "cie-electricidad": {
    intro:
      "La electricidad mueve el mundo moderno, pero su base es sorprendentemente sencilla: cargas que se mueven por un camino cerrado. Entender un circuito simple —pila, cable, bombilla— te da la llave para comprender desde una linterna hasta un ordenador.",
    goal: "entender un circuito simple y el flujo de corriente.",
    sections: [
      {
        h: "El circuito: un camino cerrado",
        tldr: "La corriente necesita un bucle completo para fluir.",
        code: "Pila (+) → cable → bombilla → cable → Pila (−)\nSi el bucle se abre (interruptor off), la corriente se detiene.",
        body: [
          "La pila impulsa las cargas; el cable las conduce; la bombilla las aprovecha (dando luz). Si cortas el camino en cualquier punto, todo se apaga.",
        ],
      },
      {
        h: "La corriente no se gasta en la bombilla",
        tldr: "La misma corriente que entra a la bombilla sale de ella; lo que se transforma es la ENERGÍA.",
        tip: "Dos errores comunes: creer que la corriente 'se consume' en la bombilla (no; lo que se transforma es su energía, en luz y calor) y confundir voltaje (el 'empuje') con corriente (el 'flujo' de cargas).",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Para que una bombilla se encienda, el circuito debe estar…",
        options: ["abierto", "cerrado (bucle completo)", "muy caliente"],
        answer: 1,
        why: "La corriente solo fluye por un camino cerrado.",
      },
      {
        kind: "choice",
        q: "En la bombilla, lo que se transforma en luz y calor es…",
        options: [
          "la corriente, que se consume",
          "la energía que transporta la corriente",
          "los cables",
        ],
        answer: 1,
        why: "La corriente no se gasta; su energía se transforma.",
      },
      {
        kind: "choice",
        q: "Voltaje y corriente son…",
        options: [
          "lo mismo",
          "distintos: voltaje es el 'empuje', corriente es el 'flujo'",
          "tipos de cable",
        ],
        answer: 1,
        why: "El voltaje impulsa; la corriente es el flujo de cargas.",
      },
    ],
    activity: {
      title: "Enciende una bombilla",
      steps: [
        "Con una pila, un cable y una bombilla pequeña (o la simulación PhET), forma un circuito cerrado.",
        "Abre el circuito y observa que se apaga.",
        "Reto: añade un interruptor (un clip) y explica su función.",
      ],
    },
    selfCheck: [
      "Explico por qué un circuito debe estar cerrado.",
      "Sé que la corriente no se 'gasta' en la bombilla.",
      "Distingo voltaje de corriente.",
    ],
    summary: [
      "La corriente fluye por un camino cerrado (bucle).",
      "En la bombilla se transforma la energía, no la corriente.",
      "Voltaje (empuje) ≠ corriente (flujo).",
    ],
  },

  // ─────────────────────────── Biología: la vida ───────────────────────────
  "cie-vida": {
    intro:
      "¿Qué tienen en común una bacteria, un roble y tú, que un río o el fuego no tienen? Definir 'estar vivo' es más difícil de lo que parece: el fuego crece, se mueve y consume, pero no está vivo. La biología empieza por reconocer los rasgos que comparten todos los seres vivos.",
    goal: "distinguir un ser vivo por sus características.",
    sections: [
      {
        h: "Los rasgos de la vida",
        tldr: "Los seres vivos se nutren, crecen, responden a estímulos, se reproducen y están hechos de células.",
        bullets: [
          "Se nutren (obtienen materia y energía).",
          "Crecen y se desarrollan.",
          "Responden a su entorno (estímulos).",
          "Se reproducen.",
          "Están formados por células.",
        ],
      },
      {
        h: "Moverse o crecer no basta",
        tldr: "El fuego 'crece' y se mueve, pero no es un ser vivo: no cumple todos los rasgos.",
        tip: "El error clásico es pensar que 'moverse' define la vida. Una planta no se desplaza y está muy viva; el fuego se propaga y no lo está. Hay que mirar el conjunto de rasgos, sobre todo estar hecho de células.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Cuál es un rasgo seguro de un ser vivo?",
        options: [
          "que se mueva",
          "que esté formado por células",
          "que sea grande",
        ],
        answer: 1,
        why: "Toda vida está hecha de células; moverse no la define.",
      },
      {
        kind: "choice",
        q: "El fuego crece, se mueve y consume, pero NO está vivo porque…",
        options: [
          "es peligroso",
          "no está hecho de células ni cumple todos los rasgos",
          "no es grande",
        ],
        answer: 1,
        why: "Le faltan rasgos clave (células, reproducción biológica…).",
      },
      {
        kind: "choice",
        q: "Una planta está viva aunque no se desplace porque…",
        options: [
          "en realidad se mueve rápido",
          "cumple los rasgos de la vida (se nutre, crece, células…)",
          "las plantas no están vivas",
        ],
        answer: 1,
        why: "Moverse no es requisito; cumplir el conjunto de rasgos sí.",
      },
    ],
    activity: {
      title: "¿Vivo o no vivo?",
      steps: [
        "Haz una lista de 6 cosas (planta, robot, fuego, cristal, perro, río).",
        "Para cada una, comprueba los rasgos de la vida.",
        "Reto: decide cuáles están vivas y justifica los casos dudosos.",
      ],
    },
    selfCheck: [
      "Nombro los rasgos de los seres vivos.",
      "Sé que moverse no define la vida.",
      "Uso las células como criterio clave.",
    ],
    summary: [
      "Los seres vivos se nutren, crecen, responden, se reproducen y tienen células.",
      "Moverse o crecer no basta (el fuego no está vivo).",
      "Estar hecho de células es el criterio clave.",
    ],
  },

  "cie-celula": {
    intro:
      "Si el átomo es la unidad de la materia, la célula es la unidad de la vida. Todo ser vivo —desde una bacteria hasta una ballena— está hecho de células. Y dentro de cada una, diminuta, ocurre toda la maquinaria de la vida. Es una de las grandes ideas unificadoras de la biología.",
    goal: "entender la célula como unidad estructural y funcional de la vida.",
    sections: [
      {
        h: "La unidad de la vida",
        tldr: "Toda vida está hecha de una o muchas células; la célula ya es 'vida'.",
        body: [
          "Una bacteria es una sola célula que vive por sí misma. Tú tienes billones de células cooperando. En ambas ocurren las funciones vitales.",
        ],
      },
      {
        h: "Partes básicas",
        tldr: "Membrana (frontera), citoplasma (interior) y material genético (ADN).",
        code: "Todas las células: membrana + citoplasma + ADN\nCélula vegetal (además): pared celular y cloroplastos (verde)\nCélula animal: sin pared ni cloroplastos",
        tip: "Dos ideas erróneas: creer que solo los animales tienen células (las plantas, hongos y bacterias también) e imaginar la célula 'vacía' (está llena de estructuras que trabajan).",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "La célula es…",
        options: [
          "una parte solo de los animales",
          "la unidad básica de toda la vida",
          "un tipo de átomo",
        ],
        answer: 1,
        why: "Toda vida está hecha de células.",
      },
      {
        kind: "match",
        q: "Empareja cada parte con su función:",
        pairs: [
          { left: "Membrana", right: "Frontera que controla qué entra/sale" },
          { left: "Citoplasma", right: "Interior donde ocurren las reacciones" },
          { left: "ADN", right: "Instrucciones de la célula" },
        ],
        why: "Partes básicas presentes en toda célula.",
      },
      {
        kind: "choice",
        q: "¿Qué tiene una célula VEGETAL que NO tiene la animal?",
        options: ["ADN", "pared celular y cloroplastos", "membrana"],
        answer: 1,
        why: "La pared celular y los cloroplastos son propios de las vegetales.",
      },
    ],
    activity: {
      title: "Observa la vida de cerca",
      steps: [
        "Si puedes, observa células de la piel de una cebolla al microscopio (o mira imágenes).",
        "Dibuja una célula e identifica membrana, citoplasma y núcleo.",
        "Reto: compara una célula animal y una vegetal y señala dos diferencias.",
      ],
    },
    selfCheck: [
      "Entiendo la célula como unidad de la vida.",
      "Nombro membrana, citoplasma y ADN.",
      "Distingo célula animal de vegetal.",
    ],
    summary: [
      "La célula es la unidad básica de toda la vida.",
      "Partes: membrana, citoplasma y material genético (ADN).",
      "No solo los animales tienen células; las plantas también.",
    ],
  },

  "cie-cuerpo": {
    intro:
      "¿Cómo pasa una sola célula a formar un ser tan complejo como tú? Por organización. Las células se agrupan en tejidos, los tejidos en órganos y los órganos en sistemas que cooperan. Entender esta jerarquía explica cómo lo diminuto construye lo grande.",
    goal: "entender la organización jerárquica de un organismo.",
    sections: [
      {
        h: "De la célula al organismo",
        tldr: "Célula → tejido → órgano → sistema → organismo.",
        code: "célula muscular → tejido muscular → corazón (órgano)\n→ sistema circulatorio → tú (organismo)",
        body: [
          "Cada nivel está hecho del anterior y hace algo que el nivel de abajo no podía hacer solo.",
        ],
      },
      {
        h: "Los sistemas cooperan",
        tldr: "Ningún órgano trabaja aislado; los sistemas dependen unos de otros.",
        tip: "El error típico es ver los órganos como piezas sueltas. En realidad cooperan: el sistema respiratorio capta oxígeno, el circulatorio lo reparte a todas las células, el digestivo aporta nutrientes… Todo conectado.",
      },
    ],
    practice: [
      {
        kind: "order",
        q: "Ordena los niveles de organización, de menor a mayor:",
        items: ["Célula", "Tejido", "Órgano", "Sistema", "Organismo"],
        why: "Cada nivel está formado por el anterior.",
      },
      {
        kind: "choice",
        q: "Un órgano es…",
        options: [
          "una sola célula",
          "un conjunto de tejidos que cumple una función",
          "todo el organismo",
        ],
        answer: 1,
        why: "El corazón, por ejemplo, es un órgano hecho de tejidos.",
      },
      {
        kind: "choice",
        q: "Los sistemas del cuerpo…",
        options: [
          "trabajan aislados",
          "cooperan y dependen unos de otros",
          "hacen todos lo mismo",
        ],
        answer: 1,
        why: "Respiratorio, circulatorio, digestivo… cooperan constantemente.",
      },
    ],
    activity: {
      title: "Sigue el oxígeno",
      steps: [
        "Traza el recorrido del oxígeno desde la nariz hasta una célula del pie.",
        "Anota qué sistemas participan (respiratorio, circulatorio).",
        "Reto: explica cómo dependen entre sí dos sistemas del cuerpo.",
      ],
    },
    selfCheck: [
      "Ordeno los niveles célula → organismo.",
      "Sé qué es un órgano y un sistema.",
      "Entiendo que los sistemas cooperan.",
    ],
    summary: [
      "Organización: célula → tejido → órgano → sistema → organismo.",
      "Cada nivel hace lo que el anterior no podía solo.",
      "Los sistemas cooperan; nada trabaja aislado.",
    ],
  },

  "cie-fotosintesis": {
    intro:
      "Aquí se unen la energía y la vida en una de las reacciones más importantes del planeta. Las plantas capturan la energía del Sol y la 'guardan' como alimento. Casi toda la vida de la Tierra depende de ello, y esconde una sorpresa: un árbol se construye, sobre todo, a partir del aire.",
    goal: "explicar la fotosíntesis como captura y transformación de energía.",
    sections: [
      {
        h: "Del Sol al alimento",
        tldr: "La planta usa luz + agua + CO₂ para fabricar su alimento (azúcar) y liberar oxígeno.",
        code: "luz solar + agua + dióxido de carbono (CO₂)\n        ↓ (en las hojas, con clorofila)\n   azúcar (energía guardada) + oxígeno (O₂)",
        body: [
          "La energía luminosa se transforma en energía química guardada en el azúcar. De ahí sale la energía de casi toda la cadena alimentaria.",
        ],
      },
      {
        h: "Un árbol se hace de aire (sobre todo)",
        tldr: "Su masa viene del CO₂ del aire, no de la tierra.",
        tip: "La idea errónea más famosa: creer que las plantas 'comen' tierra y que la masa de un árbol viene del suelo. En realidad, gran parte del árbol es carbono que la planta capturó del CO₂ del aire. Sorprendente pero cierto.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "En la fotosíntesis, la planta transforma energía…",
        options: [
          "química en luz",
          "luminosa (del Sol) en química (azúcar)",
          "eléctrica en calor",
        ],
        answer: 1,
        why: "Captura energía luminosa y la guarda como energía química.",
      },
      {
        kind: "match",
        q: "Empareja entradas y salidas de la fotosíntesis:",
        pairs: [
          { left: "Entran", right: "Luz, agua y CO₂" },
          { left: "Salen", right: "Azúcar y oxígeno" },
        ],
        why: "Luz + agua + CO₂ → azúcar + O₂.",
      },
      {
        kind: "choice",
        q: "La masa de un árbol viene sobre todo de…",
        options: [
          "la tierra que 'come'",
          "el carbono del CO₂ del aire",
          "el agua de lluvia únicamente",
        ],
        answer: 1,
        why: "El árbol se construye principalmente con carbono capturado del aire.",
      },
    ],
    activity: {
      title: "Rastrea la energía del Sol",
      steps: [
        "Elige tu comida favorita y traza su energía hasta el Sol (p. ej. pan ← trigo ← fotosíntesis).",
        "Explica de dónde saca una planta su energía y su materia.",
        "Reto: justifica por qué se dice que 'casi toda la vida funciona con energía solar'.",
      ],
    },
    selfCheck: [
      "Explico la fotosíntesis como captura de energía solar.",
      "Sé qué entra y qué sale de la reacción.",
      "Entiendo que la masa del árbol viene del aire (CO₂).",
    ],
    summary: [
      "Fotosíntesis: luz + agua + CO₂ → azúcar + oxígeno.",
      "Transforma energía solar en energía química (alimento).",
      "La masa de las plantas viene sobre todo del CO₂ del aire.",
    ],
  },

  // ─────────────────────────────── Hito ───────────────────────────────
  "hito-cie-fundamentos": {
    intro:
      "Has construido lo más importante: no un montón de datos, sino la forma de PENSAR de la ciencia, más las ideas base de materia y energía. Con esto puedes razonar sobre casi cualquier fenómeno. Este hito lo consolida antes de entrar en los grandes dominios.",
    goal: "confirmar una base sólida de razonamiento científico.",
    sections: [
      {
        h: "Lo que ya dominas",
        tldr: "Pensar con evidencia, distinguir observación de inferencia, y las ideas de materia y energía.",
        bullets: [
          "Separas observación de inferencia y exiges evidencia.",
          "Entiendes la materia (masa, volumen) y sus estados.",
          "Reconoces las formas de energía y que se transforma, no desaparece.",
        ],
      },
      {
        h: "Pensar como científico",
        tldr: "La actitud (evidencia, dudar con criterio) vale más que memorizar hechos.",
        tip: "Si algo se te olvida, siempre puedes buscarlo; lo que no se busca en internet es saber PENSAR con evidencia. Eso es lo que de verdad te llevas de este nivel.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "'La calle está mojada' frente a 'ha llovido':",
        options: [
          "las dos son observaciones",
          "la primera es observación; la segunda, inferencia",
          "las dos son inferencias",
        ],
        answer: 1,
        why: "Observas lo mojado; infieres la lluvia.",
      },
      {
        kind: "choice",
        q: "Cuando una batería 'se gasta', su energía…",
        options: ["desaparece", "se transforma en otras formas", "se vuelve materia"],
        answer: 1,
        why: "La energía se conserva: se transforma, no desaparece.",
      },
      {
        kind: "choice",
        q: "El aire es…",
        options: ["no es materia", "materia (tiene masa y volumen)", "solo viento"],
        answer: 1,
        why: "Tiene masa y ocupa espacio: es materia.",
      },
      {
        kind: "match",
        q: "Empareja cada estado con sus partículas:",
        pairs: [
          { left: "Sólido", right: "Juntas, vibrando" },
          { left: "Gas", right: "Separadas y rápidas" },
        ],
        why: "El estado depende del movimiento de las partículas.",
      },
    ],
    activity: {
      title: "Reto de fundamentos",
      steps: [
        "Elige un fenómeno cotidiano (el hielo que se derrite, una pelota que rebota).",
        "Descríbelo separando observaciones de inferencias.",
        "Explícalo usando materia (partículas) y energía (transformaciones).",
      ],
    },
    selfCheck: [
      "Distingo observación de inferencia y pido evidencia.",
      "Entiendo materia, estados y energía.",
      "Pienso con evidencia, no de memoria.",
    ],
    summary: [
      "Base consolidada: pensamiento científico + materia + energía.",
      "La actitud (evidencia, escepticismo) importa más que memorizar.",
      "Listo para los grandes dominios de la ciencia.",
    ],
  },
};
