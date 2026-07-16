/**
 * Lecciones interactivas de **Matemáticas** (disciplina en construcción, DRAFT).
 *
 * Mismo modelo `Lesson` y mismo estándar pedagógico que Inglés y Programación:
 * intro → aprende (secciones) → practica (choice/fill/order/match) → actividad
 * → autoevaluación → resumen. Las fórmulas usan bloques monoespaciados (`code`
 * y el campo `mono` de los ejemplos), que el motor ya renderiza. El repaso
 * espaciado funciona desde el primer momento porque hay práctica.
 *
 * Fuentes de referencia: Khan Academy, OpenStax, NRICH (Pólya) y Math is Fun.
 */

import type { Lesson } from "@/modules/skill-tree/lesson";

export const MAT_LESSONS: Record<string, Lesson> = {
  // ─────────────────────────── Razonamiento ───────────────────────────
  "mat-que-es": {
    intro:
      "Muchas personas creen que las matemáticas son memorizar reglas y calcular rápido. No lo son. Son el arte de encontrar patrones y razonar con cantidades. Calcular lo hace una calculadora; PENSAR, no.",
    goal: "ver las matemáticas como una forma de pensar, no de calcular a ciegas.",
    sections: [
      {
        h: "Matemáticas = patrones + razonamiento",
        tldr: "Buscar regularidades y explicar por qué se cumplen.",
        body: [
          "Cuando ves 2, 4, 6, 8… y dices '10', no estás recordando: estás detectando un patrón (sumar 2) y usándolo. Eso es pensar matemáticamente.",
          "El objetivo de esta disciplina no es que memorices fórmulas, sino que entiendas de dónde salen y cuándo usarlas.",
        ],
        examples: [
          {
            term: "patrón",
            text: "1, 4, 9, 16, …",
            mono: "1=1²  4=2²  9=3²  16=4²",
            sub: "Son los cuadrados: el siguiente es 5² = 25.",
          },
        ],
      },
      {
        h: "Nadie es 'de letras' o 'de números'",
        tldr: "Las mates se aprenden con práctica y método, no con un 'don'.",
        tip: "El error más caro es creer que no se te dan. La investigación educativa es clara: la habilidad matemática se construye; el bloqueo casi siempre viene de lagunas previas, no de falta de talento.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Qué describe mejor a las matemáticas?",
        options: [
          "memorizar fórmulas y calcular rápido",
          "encontrar patrones y razonar con cantidades",
          "un don con el que se nace",
        ],
        answer: 1,
        why: "Calcular lo hace una máquina; las matemáticas son razonar y ver patrones.",
      },
      {
        kind: "fill",
        q: "Continúa el patrón: 3, 6, 9, 12, ___",
        accept: ["15"],
        hint: "¿Cuánto sumas cada vez?",
        why: "Se suma 3 cada paso: 12 + 3 = 15.",
      },
      {
        kind: "order",
        q: "Ordena la secuencia de menor a mayor: coloca los pasos del patrón de cuadrados.",
        items: ["1 (=1²)", "4 (=2²)", "9 (=3²)", "16 (=4²)"],
        why: "Son los cuadrados de 1, 2, 3, 4.",
      },
    ],
    activity: {
      title: "Caza-patrones",
      steps: [
        "Escribe una secuencia de 4 números que sigan una regla que tú elijas.",
        "Dásela a alguien y pídele que adivine el siguiente y explique la regla.",
        "Comprueba: ¿la regla que dedujo es la tuya u otra que también funciona?",
      ],
    },
    selfCheck: [
      "Explico qué es un patrón matemático.",
      "Entiendo que las mates se razonan, no solo se memorizan.",
      "No creo que 'ser de letras' impida aprenderlas.",
    ],
    summary: [
      "Matemáticas = patrones + razonamiento, no memorizar.",
      "Calcular lo hace una máquina; pensar, no.",
      "La habilidad matemática se construye con método y práctica.",
    ],
  },

  "mat-pensamiento": {
    intro:
      "El paso difícil de un problema no suele ser calcular, sino decidir QUÉ calcular. Traducir una situación real a una operación es el corazón del pensamiento matemático.",
    goal: "traducir un problema cotidiano a la operación matemática correcta.",
    sections: [
      {
        h: "De las palabras a los símbolos",
        tldr: "Cada situación esconde una operación; hay que descubrir cuál.",
        body: [
          "'Reparto en partes iguales' → división. 'Cuántos en total' juntando grupos iguales → multiplicación. 'Cuánto me queda' → resta. Las palabras son pistas, no reglas fijas: entiende la situación.",
        ],
        examples: [
          {
            text: "Reparto 20 galletas entre 4 amigos",
            mono: "20 ÷ 4 = 5",
            sub: "Repartir en partes iguales es dividir.",
          },
          {
            text: "3 cajas con 6 lápices cada una",
            mono: "3 × 6 = 18",
            sub: "Grupos iguales que se juntan es multiplicar.",
          },
        ],
      },
      {
        h: "El número solo no dice nada",
        tldr: "Un número siempre representa algo: galletas, euros, metros.",
        tip: "Acostúmbrate a poner la unidad: '5 galletas por amigo', no solo '5'. Entender qué representa cada número evita errores absurdos.",
      },
    ],
    practice: [
      {
        kind: "match",
        q: "Empareja cada situación con su operación:",
        pairs: [
          { left: "Repartir en partes iguales", right: "División" },
          { left: "Juntar grupos iguales", right: "Multiplicación" },
          { left: "Quitar una parte", right: "Resta" },
        ],
        why: "La situación decide la operación, no una palabra suelta.",
      },
      {
        kind: "fill",
        q: "6 amigos comparten 18 € a partes iguales. Escribe la operación como 'a÷b' (sin espacios).",
        accept: ["18÷6", "18/6"],
        hint: "Repartir en partes iguales…",
        why: "18 ÷ 6 = 3 € cada uno.",
      },
      {
        kind: "choice",
        q: "¿Cuál es el paso realmente difícil de un problema?",
        options: ["hacer la cuenta", "decidir qué operación usar", "escribir el resultado"],
        answer: 1,
        why: "Calcular es mecánico; elegir qué calcular es pensar.",
      },
    ],
    activity: {
      title: "Traduce, no resuelvas",
      steps: [
        "Toma tres situaciones cotidianas (compra, reparto, ahorro).",
        "Escribe SOLO la operación de cada una, sin calcular el resultado.",
        "Anota qué representa cada número (con su unidad).",
      ],
    },
    selfCheck: [
      "Traduzco un enunciado a la operación correcta.",
      "Reconozco pistas como 'repartir' o 'en total'.",
      "Pongo la unidad a cada número.",
    ],
    summary: [
      "Lo difícil es decidir qué calcular, no calcular.",
      "Cada situación esconde una operación: entiéndela.",
      "Un número siempre representa algo (ponle unidad).",
    ],
  },

  "mat-resolucion": {
    intro:
      "Ante un problema en blanco es fácil bloquearse. George Pólya, matemático, propuso un método de cuatro fases que sigue siendo la mejor guía para atacar CUALQUIER problema, no solo de matemáticas.",
    goal: "aplicar un método ordenado (Pólya) para resolver problemas y revisar el resultado.",
    sections: [
      {
        h: "Las cuatro fases de Pólya",
        tldr: "Comprender → Planear → Ejecutar → Revisar.",
        bullets: [
          "Comprender: ¿qué me dan y qué me piden? Reformúlalo con tus palabras.",
          "Planear: ¿qué operación o estrategia conecta lo que tengo con lo que busco?",
          "Ejecutar: haz el plan con cuidado, paso a paso.",
          "Revisar: ¿la respuesta tiene sentido? ¿Y las unidades?",
        ],
      },
      {
        h: "Revisar no es opcional",
        tldr: "Una respuesta sin sentido es un error, aunque la cuenta esté 'bien'.",
        code: "Problema: un lápiz cuesta 0,50 €. ¿Cuánto cuestan 6?\nPlan: 6 × 0,50\nEjecutar: 6 × 0,50 = 3\nRevisar: 3 € por 6 lápices → sentido ✔ (unidad: €)",
        tip: "Si al revisar el resultado es absurdo (una edad negativa, 200 € por un lápiz), vuelve a 'Comprender'. El error suele estar en el plan, no en la cuenta.",
      },
    ],
    practice: [
      {
        kind: "order",
        q: "Ordena las cuatro fases del método de Pólya:",
        items: ["Comprender el problema", "Trazar un plan", "Ejecutar el plan", "Revisar el resultado"],
        why: "Comprender → Planear → Ejecutar → Revisar.",
      },
      {
        kind: "choice",
        q: "Resuelves y te da que una persona tiene -4 años. ¿Qué haces?",
        options: [
          "lo dejo así, la cuenta salió",
          "reviso: el resultado no tiene sentido, el plan falló",
          "cambio el enunciado",
        ],
        answer: 1,
        why: "Revisar detecta el sinsentido: el error está en el planteamiento.",
      },
      {
        kind: "fill",
        q: "Un lápiz cuesta 0,50 €. ¿Cuánto cuestan 6? (escribe solo el número, en euros)",
        accept: ["3", "3€", "3 euros"],
        hint: "6 × 0,50",
        why: "6 × 0,50 = 3 €.",
      },
    ],
    activity: {
      title: "Un problema, cuatro fases",
      steps: [
        "Elige un problema con enunciado (de un libro o inventado).",
        "Escribe explícitamente cada fase: qué comprendes, tu plan, la ejecución y la revisión.",
        "En la revisión, comprueba el resultado con una estimación rápida.",
      ],
    },
    selfCheck: [
      "Comprendo el problema antes de calcular.",
      "Trazo un plan que conecta datos y pregunta.",
      "Reviso si el resultado tiene sentido y unidades.",
    ],
    summary: [
      "Pólya: Comprender → Planear → Ejecutar → Revisar.",
      "El método vence al bloqueo del problema en blanco.",
      "Revisar es obligatorio: una respuesta absurda es un error.",
    ],
  },

  // ─────────────────────── Números y operaciones ───────────────────────
  "mat-numeros": {
    intro:
      "Con solo diez símbolos (0–9) escribimos cualquier número, por grande que sea. El secreto es el valor posicional: la POSICIÓN de un dígito decide cuánto vale. Es la idea más poderosa (y más ignorada) de la aritmética.",
    goal: "entender el valor posicional en base 10.",
    sections: [
      {
        h: "La posición manda",
        tldr: "El mismo dígito vale distinto según su lugar.",
        code: "3407 = 3×1000 + 4×100 + 0×10 + 7×1\n         (miles)  (cientos) (dec.) (unid.)",
        body: [
          "El 4 de 3407 no vale 4, vale 400. Cada posición vale 10 veces más que la de su derecha: ese es el sistema decimal (base 10).",
        ],
      },
      {
        h: "Comparar es mirar posición por posición",
        tldr: "Más cifras = mayor; a igualdad de cifras, gana la de más a la izquierda.",
        examples: [
          { text: "¿Cuál es mayor, 2599 o 3001?", mono: "3001 > 2599", sub: "El de los miles (3) manda sobre el 2, aunque 2599 tenga más '9'." },
        ],
        tip: "No te dejes engañar por los dígitos grandes a la derecha: 3001 supera a 2599 porque en los miles gana 3 a 2.",
      },
    ],
    practice: [
      {
        kind: "fill",
        q: "En el número 3407, ¿cuánto vale la cifra 4? (escribe el número)",
        accept: ["400"],
        hint: "Está en la posición de las centenas.",
        why: "El 4 ocupa las centenas: vale 4 × 100 = 400.",
      },
      {
        kind: "choice",
        q: "¿Qué número es mayor?",
        options: ["2599", "3001", "son iguales"],
        answer: 1,
        why: "3001 tiene 3 millares frente a 2: gana la posición más a la izquierda.",
      },
      {
        kind: "match",
        q: "Empareja cada cifra de 528 con su valor:",
        pairs: [
          { left: "5", right: "500" },
          { left: "2", right: "20" },
          { left: "8", right: "8" },
        ],
        why: "Centenas, decenas y unidades.",
      },
    ],
    activity: {
      title: "Descompón números",
      steps: [
        "Escribe tu año de nacimiento y descomponlo por valor posicional (miles, cientos, decenas, unidades).",
        "Haz lo mismo con el número de tu calle o tu edad × 100.",
        "Reto: escribe el número más grande posible con las cifras 4, 0, 7, 2 y explica por qué.",
      ],
    },
    selfCheck: [
      "Descompongo un número por el valor de cada cifra.",
      "Comparo números grandes por su valor posicional.",
      "Entiendo que cada posición vale 10 veces la de su derecha.",
    ],
    summary: [
      "Con 10 símbolos escribimos cualquier número.",
      "La posición decide el valor (base 10).",
      "Comparar = mirar posición por posición desde la izquierda.",
    ],
  },

  "mat-operaciones": {
    intro:
      "Sumar, restar, multiplicar y dividir son las cuatro herramientas básicas. Lo importante no es calcular rápido (para eso está la calculadora), sino saber CUÁL usar en cada situación.",
    goal: "elegir la operación correcta según lo que pide el problema.",
    sections: [
      {
        h: "Qué significa cada operación",
        tldr: "Juntar, quitar, repetir grupos, repartir.",
        bullets: [
          "Suma (+): juntar cantidades.",
          "Resta (−): quitar, o hallar la diferencia.",
          "Multiplicación (×): sumar un mismo número muchas veces (grupos iguales).",
          "División (÷): repartir en partes iguales, o cuántas veces cabe.",
        ],
      },
      {
        h: "Operaciones inversas",
        tldr: "La resta deshace la suma; la división deshace la multiplicación.",
        code: "7 + 5 = 12   ↔   12 − 5 = 7\n4 × 3 = 12   ↔   12 ÷ 3 = 4",
        tip: "Usar la inversa es la mejor forma de COMPROBAR: si 12 ÷ 3 = 4, entonces 4 × 3 debe dar 12.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "'Tenía 15 € y gasté 6'. ¿Qué operación halla lo que queda?",
        options: ["15 + 6", "15 − 6", "15 × 6"],
        answer: 1,
        why: "Quitar lo gastado es restar: 15 − 6 = 9.",
      },
      {
        kind: "fill",
        q: "5 bolsas con 4 manzanas cada una: ¿cuántas manzanas en total?",
        accept: ["20"],
        hint: "Grupos iguales → multiplicación.",
        why: "5 × 4 = 20 manzanas.",
      },
      {
        kind: "match",
        q: "Empareja cada operación con su inversa:",
        pairs: [
          { left: "Suma", right: "Resta" },
          { left: "Multiplicación", right: "División" },
        ],
        why: "Cada operación se deshace con su inversa (sirve para comprobar).",
      },
    ],
    activity: {
      title: "Un problema por operación",
      steps: [
        "Inventa un problema real para cada una de las cuatro operaciones.",
        "Resuélvelos.",
        "Comprueba cada resultado usando la operación inversa.",
      ],
    },
    selfCheck: [
      "Elijo la operación adecuada según el problema.",
      "Entiendo la multiplicación como grupos iguales.",
      "Compruebo resultados con la operación inversa.",
    ],
    summary: [
      "Cuatro operaciones: juntar, quitar, repetir grupos, repartir.",
      "Lo clave es saber CUÁL usar.",
      "La inversa deshace y sirve para comprobar.",
    ],
  },

  "mat-enteros": {
    intro:
      "Hasta ahora, los números empezaban en el 0. Pero una deuda, una temperatura bajo cero o un piso -1 necesitan números negativos. La recta numérica los ordena y hace que las 'reglas de signos' dejen de ser magia.",
    goal: "operar con números negativos entendiendo por qué.",
    sections: [
      {
        h: "La recta numérica",
        tldr: "A la izquierda del 0, los negativos; a la derecha, los positivos.",
        code: "… -3  -2  -1   0   1   2   3 …\n   más pequeño ←   0   → más grande",
        body: [
          "Sumar mueve a la derecha; restar mueve a la izquierda. Así -3 es MENOR que 1, aunque el 3 sea 'grande'.",
        ],
      },
      {
        h: "Restar un negativo suma",
        tldr: "Quitar una deuda te deja mejor: − (−) = +.",
        examples: [
          { text: "Diferencia entre 8 °C y -3 °C", mono: "8 − (−3) = 8 + 3 = 11", sub: "Hay 11 grados de diferencia." },
        ],
        more: [
          "Multiplicación: (+)(+) y (−)(−) dan +; (+)(−) da −. 'Menos por menos es más' porque invertir dos veces vuelve al sentido original.",
        ],
        tip: "No memorices las reglas de signos sueltas: piénsalas en la recta (moverse) o como deudas (quitar una deuda es ganar).",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Qué número es menor?",
        options: ["-5", "2", "0"],
        answer: 0,
        why: "En la recta, -5 está más a la izquierda: es el menor.",
      },
      {
        kind: "fill",
        q: "Calcula: 8 − (−3) = ___",
        accept: ["11"],
        hint: "Restar un negativo es sumar.",
        why: "8 − (−3) = 8 + 3 = 11.",
      },
      {
        kind: "fill",
        q: "Calcula: (−4) × (−2) = ___",
        accept: ["8"],
        hint: "Menos por menos…",
        why: "(−4) × (−2) = 8 (dos signos negativos se cancelan).",
      },
      {
        kind: "order",
        q: "Ordena de MENOR a mayor:",
        items: ["-7", "-2", "0", "5"],
        why: "En la recta numérica, de izquierda a derecha.",
      },
    ],
    activity: {
      title: "Termómetro y deudas",
      steps: [
        "Dibuja una recta numérica de -10 a 10.",
        "Sitúa: una deuda de 6 €, una temperatura de -4 °C y un saldo de 3 €.",
        "Calcula la diferencia entre la temperatura más alta y la más baja de tu ciudad esta semana.",
      ],
    },
    selfCheck: [
      "Ordeno y sitúo enteros en la recta.",
      "Sumo y resto negativos con sentido.",
      "Explico por qué menos por menos es más.",
    ],
    summary: [
      "Los negativos viven a la izquierda del 0.",
      "Restar un negativo suma.",
      "Los signos se entienden en la recta o como deudas, no de memoria.",
    ],
  },

  "mat-orden-operaciones": {
    intro:
      "¿Cuánto es 2 + 3 × 4? Si respondes 20, la mayoría de calculadoras te corregirían: es 14. No es un truco: existe un orden acordado para que una misma expresión signifique lo mismo para todo el mundo.",
    goal: "evaluar expresiones respetando la jerarquía de operaciones.",
    sections: [
      {
        h: "El orden acordado",
        tldr: "Paréntesis → potencias → multiplicar/dividir → sumar/restar.",
        code: "2 + 3 × 4\n= 2 + 12      (primero la multiplicación)\n= 14",
        body: [
          "La multiplicación y la división van antes que la suma y la resta. Los paréntesis mandan sobre todo; las potencias van justo después.",
        ],
      },
      {
        h: "Los paréntesis cambian el resultado",
        tldr: "Sirven para forzar qué se hace primero.",
        code: "(2 + 3) × 4 = 5 × 4 = 20\n 2 + 3  × 4 = 2 + 12 = 14",
        tip: "Ante la duda, añade paréntesis: hacen tu intención explícita y evitan errores. Programar y las hojas de cálculo usan exactamente esta jerarquía.",
      },
    ],
    practice: [
      {
        kind: "fill",
        q: "Calcula: 2 + 3 × 4 = ___",
        accept: ["14"],
        hint: "Multiplica antes de sumar.",
        why: "3 × 4 = 12; 2 + 12 = 14.",
      },
      {
        kind: "fill",
        q: "Calcula: (2 + 3) × 4 = ___",
        accept: ["20"],
        hint: "El paréntesis va primero.",
        why: "2 + 3 = 5; 5 × 4 = 20.",
      },
      {
        kind: "order",
        q: "Ordena la jerarquía, de lo que se hace PRIMERO a lo último:",
        items: ["Paréntesis", "Potencias", "Multiplicar y dividir", "Sumar y restar"],
        why: "Paréntesis → potencias → ×/÷ → +/−.",
      },
      {
        kind: "choice",
        q: "¿Cuánto es 2 + 3 × (4 − 1)²?",
        options: ["29", "45", "23"],
        answer: 0,
        why: "(4−1)=3; 3²=9; 3×9=27; 2+27=29.",
      },
    ],
    activity: {
      title: "Coloca paréntesis",
      steps: [
        "Escribe la expresión 8 − 2 × 3 + 1 y calcúlala respetando la jerarquía.",
        "Ahora coloca paréntesis para que dé un resultado distinto.",
        "Comprueba ambas en una calculadora o app.",
      ],
    },
    selfCheck: [
      "Aplico la jerarquía de operaciones.",
      "Sé que × y ÷ van antes que + y −.",
      "Uso paréntesis para forzar el orden.",
    ],
    summary: [
      "Orden: paréntesis → potencias → ×/÷ → +/−.",
      "2 + 3 × 4 = 14, no 20.",
      "Los paréntesis mandan y aclaran la intención.",
    ],
  },

  "mat-potencias": {
    intro:
      "Escribir 2 × 2 × 2 × 2 × 2 es tedioso. La potencia lo abrevia: 2⁵. Es una idea que aparece en áreas, volúmenes, crecimiento y hasta en cómo los ordenadores miden la memoria. La raíz es su operación inversa.",
    goal: "entender potencias y raíces como abreviaturas con sentido.",
    sections: [
      {
        h: "Potencia: multiplicar por sí mismo",
        tldr: "La base se multiplica tantas veces como diga el exponente.",
        code: "2⁵ = 2 × 2 × 2 × 2 × 2 = 32\n     base 2, exponente 5",
        body: [
          "Cuidado: 2⁵ no es 2 × 5 = 10. El exponente cuenta CUÁNTAS veces se multiplica la base, no por cuánto se multiplica.",
        ],
        examples: [
          { text: "Un cuadrado de lado 5", mono: "5² = 25", sub: "Por eso 'elevar al cuadrado': es el área del cuadrado." },
        ],
      },
      {
        h: "La raíz deshace la potencia",
        tldr: "√49 pregunta: ¿qué número al cuadrado da 49?",
        code: "7² = 49   ↔   √49 = 7",
        tip: "La raíz cuadrada es a la potencia lo que la división a la multiplicación: su inversa. Comprueba √49 elevando 7 al cuadrado.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Cuánto vale 2⁵?",
        options: ["10", "25", "32"],
        answer: 2,
        why: "2×2×2×2×2 = 32 (no 2×5).",
      },
      {
        kind: "fill",
        q: "Calcula: 5² = ___",
        accept: ["25"],
        hint: "5 × 5.",
        why: "5² = 5 × 5 = 25.",
      },
      {
        kind: "fill",
        q: "Calcula: √49 = ___",
        accept: ["7"],
        hint: "¿Qué número al cuadrado da 49?",
        why: "7² = 49, así que √49 = 7.",
      },
      {
        kind: "match",
        q: "Empareja cada potencia con su valor:",
        pairs: [
          { left: "3²", right: "9" },
          { left: "2³", right: "8" },
          { left: "10²", right: "100" },
        ],
        why: "3×3=9; 2×2×2=8; 10×10=100.",
      },
    ],
    activity: {
      title: "Cuadrados y cubos",
      steps: [
        "Calcula los cuadrados del 1 al 10 y obsérvalos (los verás en Pitágoras y cuadráticas).",
        "Dibuja un cuadrado de lado 4 y comprueba que su área es 4² = 16 cuadraditos.",
        "Reto: ¿cuánto vale 2¹⁰? Multiplica paso a paso y compáralo con la memoria de un dispositivo (1 KB ≈ 2¹⁰ bytes).",
      ],
    },
    selfCheck: [
      "Calculo potencias sencillas sin confundir 2⁵ con 2×5.",
      "Calculo raíces cuadradas exactas.",
      "Entiendo la raíz como inversa de la potencia.",
    ],
    summary: [
      "Potencia = multiplicar la base por sí misma (exponente veces).",
      "2⁵ = 32, no 10.",
      "La raíz deshace la potencia: √49 = 7 porque 7² = 49.",
    ],
  },

  // ─────────────── Fracciones, decimales y porcentajes ───────────────
  "mat-fracciones": {
    intro:
      "Media pizza, tres cuartos de hora, dos tercios de la clase… las fracciones expresan partes de un todo. Son el gran tropiezo de muchos, casi siempre por una confusión que aquí vamos a evitar desde el principio.",
    goal: "entender, comparar y sumar fracciones simplificando el resultado.",
    sections: [
      {
        h: "Numerador y denominador",
        tldr: "El de abajo dice en cuántas partes; el de arriba, cuántas tomas.",
        code: "3/4  →  numerador 3 (partes que tomas)\n         denominador 4 (partes del todo)",
        body: [
          "Fracciones equivalentes representan lo mismo: 1/2 = 2/4 = 3/6. Multiplicar arriba y abajo por lo mismo no cambia el valor.",
        ],
      },
      {
        h: "El error clásico al sumar",
        tldr: "1/2 + 1/3 NO es 2/5. Hace falta un denominador común.",
        code: "1/2 + 1/3\n= 3/6 + 2/6      (mismo denominador: 6)\n= 5/6",
        tip: "Nunca sumes numeradores y denominadores por separado. Primero busca un denominador común; solo entonces suma los numeradores.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Cuánto es 1/2 + 1/3?",
        options: ["2/5", "5/6", "1/6"],
        answer: 1,
        why: "Denominador común 6: 3/6 + 2/6 = 5/6.",
      },
      {
        kind: "fill",
        q: "Simplifica 4/8 a su forma más simple (escribe como a/b).",
        accept: ["1/2"],
        hint: "Divide arriba y abajo por 4.",
        why: "4/8 = 1/2 (dividiendo por 4).",
      },
      {
        kind: "match",
        q: "Empareja cada fracción con una equivalente:",
        pairs: [
          { left: "1/2", right: "2/4" },
          { left: "1/3", right: "2/6" },
          { left: "3/4", right: "6/8" },
        ],
        why: "Multiplicar numerador y denominador por lo mismo mantiene el valor.",
      },
      {
        kind: "order",
        q: "Ordena de MENOR a mayor:",
        items: ["1/4", "1/3", "1/2", "3/4"],
        why: "A igual numerador 1, mayor denominador = menor; 3/4 es la mayor.",
      },
    ],
    activity: {
      title: "Fracciones de cocina",
      steps: [
        "Toma una receta y localiza sus fracciones (1/2 taza, 3/4 de cucharada…).",
        "Calcula la receta para el DOBLE de personas (multiplica las fracciones por 2).",
        "Suma dos ingredientes fraccionarios con distinto denominador.",
      ],
    },
    selfCheck: [
      "Distingo numerador y denominador y su papel.",
      "Encuentro fracciones equivalentes y simplifico.",
      "Sumo fracciones con denominador común (sin sumar denominadores).",
    ],
    summary: [
      "Fracción = partes que tomas / partes del todo.",
      "Equivalentes: 1/2 = 2/4 = 3/6.",
      "Para sumar, denominador común primero; nunca sumes denominadores.",
    ],
  },

  "mat-decimales": {
    intro:
      "El dinero, las medidas y casi todos los datos usan decimales. Un decimal no es más que otra forma de escribir una fracción de base 10: 0,5 es 5/10, es decir, la mitad.",
    goal: "operar con decimales y convertirlos a y desde fracciones.",
    sections: [
      {
        h: "Decimales = fracciones de base 10",
        tldr: "Cada posición tras la coma vale la décima parte de la anterior.",
        code: "0,25 = 2/10 + 5/100 = 25/100 = 1/4\n0,5  = 5/10 = 1/2",
        body: [
          "El valor posicional continúa tras la coma: décimas, centésimas, milésimas.",
        ],
      },
      {
        h: "Sumar: alinea la coma",
        tldr: "Coma bajo coma; luego suma como siempre.",
        code: "  2,50\n+ 0,40\n------\n  2,90",
        tip: "El error típico es desalinear la coma. Otro: redondear demasiado pronto. Redondea SOLO al final, con el resultado.",
      },
    ],
    practice: [
      {
        kind: "fill",
        q: "Calcula: 2,5 × 0,4 = ___ (usa coma si hace falta)",
        accept: ["1", "1,0", "1.0"],
        hint: "25 × 4 = 100; coloca la coma contando decimales.",
        why: "2,5 × 0,4 = 1,0 = 1.",
      },
      {
        kind: "choice",
        q: "¿A qué fracción equivale 0,75?",
        options: ["3/4", "7/5", "1/3"],
        answer: 0,
        why: "0,75 = 75/100 = 3/4.",
      },
      {
        kind: "fill",
        q: "Convierte 3/4 a decimal.",
        accept: ["0,75", "0.75"],
        hint: "3 ÷ 4.",
        why: "3 ÷ 4 = 0,75.",
      },
      {
        kind: "choice",
        q: "¿Cuándo conviene redondear?",
        options: ["al principio, para simplificar", "al final, con el resultado", "nunca"],
        answer: 1,
        why: "Redondear antes arrastra errores; hazlo al final.",
      },
    ],
    activity: {
      title: "La cuenta del súper",
      steps: [
        "Anota los precios (con decimales) de 5 productos.",
        "Súmalos alineando bien la coma.",
        "Redondea el total al céntimo solo al final y compáralo con el tique.",
      ],
    },
    selfCheck: [
      "Convierto entre fracciones y decimales sencillos.",
      "Sumo y multiplico decimales correctamente.",
      "Redondeo solo al final.",
    ],
    summary: [
      "Un decimal es una fracción de base 10.",
      "Al sumar, alinea la coma.",
      "Redondea al final, nunca antes.",
    ],
  },

  "mat-porcentajes": {
    intro:
      "Rebajas, impuestos, propinas, intereses: el porcentaje es probablemente el cálculo que más usarás en la vida real. Un porcentaje no es más que una fracción con denominador 100: 25% = 25/100 = 1/4.",
    goal: "calcular porcentajes y variaciones porcentuales en contextos reales.",
    sections: [
      {
        h: "Porcentaje = por cada cien",
        tldr: "El x% de una cantidad es (x/100) × cantidad.",
        code: "25% de 80 = 0,25 × 80 = 20\n(porque 25% = 25/100 = 0,25)",
        examples: [
          { text: "Descuento del 25% sobre 80 €", mono: "80 − 20 = 60 €", sub: "Calculas el 25% (20 €) y lo restas." },
        ],
      },
      {
        h: "Subir y bajar no se cancelan",
        tldr: "Un +10% seguido de un −10% NO devuelve al precio inicial.",
        code: "100 €  +10% → 110 €\n110 €  −10% → 99 €   (¡no 100!)",
        tip: "El segundo porcentaje se aplica sobre una base distinta. Por eso sumar porcentajes de bases diferentes es un error muy común (y muy caro).",
      },
    ],
    practice: [
      {
        kind: "fill",
        q: "¿Cuánto es el 25% de 80?",
        accept: ["20"],
        hint: "0,25 × 80.",
        why: "25% = 0,25; 0,25 × 80 = 20.",
      },
      {
        kind: "fill",
        q: "Un abrigo de 80 € tiene un 25% de descuento. Precio final en €: ___",
        accept: ["60"],
        hint: "Resta el descuento (20 €).",
        why: "80 − 20 = 60 €.",
      },
      {
        kind: "choice",
        q: "Un precio sube 10% y luego baja 10%. ¿Vuelve al inicial?",
        options: ["sí, siempre", "no, queda algo por debajo", "no, queda por encima"],
        answer: 1,
        why: "El −10% se aplica sobre una base mayor: 100 → 110 → 99.",
      },
      {
        kind: "choice",
        q: "El 50% de una cantidad es lo mismo que…",
        options: ["dividir entre 2", "multiplicar por 2", "restar 50"],
        answer: 0,
        why: "50% = 1/2, así que es dividir entre 2.",
      },
    ],
    activity: {
      title: "Rebajas reales",
      steps: [
        "Busca tres productos con descuento y calcula su precio final.",
        "Calcula la propina del 10% de una cuenta de restaurante.",
        "Reto: si algo sube 20% y luego baja 20%, ¿qué % del precio original queda?",
      ],
    },
    selfCheck: [
      "Calculo el porcentaje de una cantidad.",
      "Aplico descuentos y aumentos.",
      "Sé que subir y bajar el mismo % no se cancela.",
    ],
    summary: [
      "Porcentaje = fracción de 100.",
      "x% de N = (x/100) × N.",
      "+10% y −10% no devuelven al inicio (bases distintas).",
    ],
  },

  "mat-razones": {
    intro:
      "Una receta para 4 que quieres hacer para 6, un mapa a escala, la velocidad de un coche: todo eso son proporciones. Comparar dos cantidades y mantener la relación es una de las herramientas más útiles y transferibles.",
    goal: "resolver problemas de proporcionalidad directa con criterio.",
    sections: [
      {
        h: "Razón: comparar dos cantidades",
        tldr: "Una razón es una división que compara (por ejemplo, km por hora).",
        code: "3 kg cuestan 6 €\nrazón (precio por kg) = 6 € ÷ 3 kg = 2 €/kg",
        body: [
          "Una proporción es la igualdad de dos razones. Si el precio por kg es constante, el problema es de proporcionalidad directa.",
        ],
      },
      {
        h: "La regla de tres (con cabeza)",
        tldr: "Solo vale si al doble de una cantidad le corresponde el doble de la otra.",
        code: "3 kg → 6 €\n5 kg → x\nx = 5 × 6 ÷ 3 = 10 €",
        tip: "No apliques regla de tres a ciegas: comprueba que hay proporcionalidad. La edad de una persona no es proporcional a su altura, por ejemplo.",
      },
    ],
    practice: [
      {
        kind: "fill",
        q: "Si 3 kg cuestan 6 €, ¿cuánto cuestan 5 kg? (en €)",
        accept: ["10"],
        hint: "Primero el precio por kg.",
        why: "2 €/kg × 5 kg = 10 €.",
      },
      {
        kind: "choice",
        q: "¿Cuál de estas relaciones NO es proporcional?",
        options: [
          "km recorridos y litros de gasolina",
          "edad y altura de una persona",
          "kg de fruta y precio a peso fijo",
        ],
        answer: 1,
        why: "La altura no crece de forma proporcional a la edad: no aplica regla de tres.",
      },
      {
        kind: "fill",
        q: "Una receta para 4 personas usa 200 g de arroz. ¿Cuántos g para 6? ",
        accept: ["300"],
        hint: "200 ÷ 4 × 6.",
        why: "50 g por persona × 6 = 300 g.",
      },
      {
        kind: "order",
        q: "Ordena los pasos de una regla de tres:",
        items: [
          "Comprobar que hay proporcionalidad",
          "Hallar el valor unitario (por 1)",
          "Multiplicar por la cantidad buscada",
          "Revisar que el resultado tiene sentido",
        ],
        why: "Verificar → unidad → multiplicar → revisar.",
      },
    ],
    activity: {
      title: "Escala tu receta",
      steps: [
        "Elige una receta y su número de raciones.",
        "Recalcula TODAS las cantidades para el doble y para 3 personas.",
        "Reto: en un mapa a escala 1:100000, ¿cuántos km reales son 4 cm?",
      ],
    },
    selfCheck: [
      "Calculo el valor unitario de una razón.",
      "Resuelvo una regla de tres justificada.",
      "Detecto cuándo NO hay proporcionalidad.",
    ],
    summary: [
      "Razón = comparación por división (p. ej. €/kg).",
      "Proporción = dos razones iguales.",
      "Regla de tres: solo si hay proporcionalidad; usa el valor unitario.",
    ],
  },

  // ─────────────────────────────── Hito ───────────────────────────────
  "hito-mat-fundamentos": {
    intro:
      "Has construido la base: sabes razonar un problema, entiendes el valor de los números y eliges bien las operaciones. Este hito lo consolida antes de dar el salto a fracciones avanzadas y álgebra.",
    goal: "confirmar una base sólida de razonamiento y aritmética.",
    sections: [
      {
        h: "Lo que ya dominas",
        tldr: "Razonar (Pólya), valor posicional y las cuatro operaciones.",
        bullets: [
          "Traduces problemas reales a operaciones y revisas si el resultado tiene sentido.",
          "Entiendes el valor posicional y comparas números con criterio.",
          "Eliges la operación adecuada y compruebas con la inversa.",
        ],
      },
      {
        h: "Repaso integrado",
        tldr: "Un problema que junta varias piezas.",
        code: "Compras 3 cuadernos a 2 € y pagas con 10 €.\n1) Coste: 3 × 2 = 6 €\n2) Cambio: 10 − 6 = 4 €\n3) Revisar: 4 € de cambio tiene sentido ✔",
        tip: "Cuando un problema tiene varios pasos, nómbralos (como en Pólya). Así no te pierdes ni te saltas ninguno.",
      },
    ],
    practice: [
      {
        kind: "fill",
        q: "Compras 3 cuadernos a 2 € y pagas con 10 €. ¿Cuánto te devuelven? (en €)",
        accept: ["4"],
        hint: "Primero el coste, luego el cambio.",
        why: "3 × 2 = 6; 10 − 6 = 4 €.",
      },
      {
        kind: "choice",
        q: "En el número 5280, ¿cuánto vale la cifra 2?",
        options: ["2", "20", "200"],
        answer: 2,
        why: "El 2 ocupa las centenas: vale 200.",
      },
      {
        kind: "order",
        q: "Ordena para resolver un problema de varios pasos:",
        items: [
          "Comprender qué se pide",
          "Planear los pasos",
          "Calcular cada paso",
          "Revisar el resultado final",
        ],
        why: "Es Pólya aplicado a un problema con varias operaciones.",
      },
      {
        kind: "fill",
        q: "Comprueba: si 12 ÷ 4 = 3, ¿cuánto es 3 × 4?",
        accept: ["12"],
        hint: "Operación inversa.",
        why: "La multiplicación deshace la división: 3 × 4 = 12.",
      },
    ],
    activity: {
      title: "Reto integrado",
      steps: [
        "Inventa un problema de compra con al menos dos operaciones.",
        "Resuélvelo aplicando las fases de Pólya y nombrando cada paso.",
        "Comprueba el resultado con una estimación y con la operación inversa.",
      ],
    },
    selfCheck: [
      "Resuelvo problemas de varios pasos con método.",
      "Domino el valor posicional.",
      "Elijo y compruebo operaciones con soltura.",
    ],
    summary: [
      "Base consolidada: razonamiento + números + operaciones.",
      "Los problemas de varios pasos se nombran y se revisan.",
      "Listo para fracciones avanzadas y el salto al álgebra.",
    ],
  },
};
