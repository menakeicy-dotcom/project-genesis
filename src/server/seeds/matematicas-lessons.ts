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

  // ─────────────────────── Álgebra y ecuaciones ───────────────────────
  "mat-variables": {
    intro:
      "Imagina que quieres decir una regla que valga para CUALQUIER número: 'el doble de un número, más 3'. En vez de repetirla para el 5, el 10, el 100… usas una letra que representa 'cualquier número'. Eso es una variable, y es el salto de la aritmética al álgebra: pasar de números concretos a ideas generales.",
    goal: "escribir y evaluar expresiones con variables.",
    sections: [
      {
        h: "Una letra que guarda un hueco",
        tldr: "La variable no es un número secreto: es un hueco donde cabe cualquier número.",
        body: [
          "Cuando escribes 2x + 3, la x es un hueco. Si la llenas con 5, la expresión vale 2·5 + 3 = 13. Si la llenas con 10, vale 23. La misma expresión describe infinitos casos de golpe.",
          "Por eso una variable no 'tiene un valor fijo escondido': representa a todos los valores posibles a la vez.",
        ],
        examples: [
          {
            text: "'El doble de un número, más 3'",
            mono: "2x + 3",
            sub: "x es ese número; la expresión sirva cual sea.",
          },
        ],
      },
      {
        h: "Evaluar = llenar el hueco",
        tldr: "Sustituye la letra por el número y calcula con la jerarquía de siempre.",
        code: "f = 2x + 3\nx = 5  →  2·(5) + 3 = 13\nx = 0  →  2·(0) + 3 = 3\nx = -1 →  2·(-1) + 3 = 1",
        tip: "Pon SIEMPRE el número entre paréntesis al sustituir, sobre todo si es negativo. 2·(-1) es claro; 2·-1 invita a errores.",
      },
    ],
    practice: [
      {
        kind: "fill",
        q: "Escribe como expresión: 'el doble de un número x, más 3' (sin espacios).",
        accept: ["2x+3", "2*x+3", "3+2x"],
        hint: "Doble = por 2.",
        why: "El doble de x es 2x; más 3 → 2x + 3.",
      },
      {
        kind: "fill",
        q: "Evalúa 2x + 3 cuando x = 5.",
        accept: ["13"],
        hint: "2·5 + 3.",
        why: "2·(5) + 3 = 10 + 3 = 13.",
      },
      {
        kind: "choice",
        q: "¿Qué es una variable como x?",
        options: [
          "un número fijo que hay que adivinar",
          "un hueco que puede tomar cualquier valor",
          "siempre el número 1",
        ],
        answer: 1,
        why: "La variable representa cualquier valor posible, no uno oculto.",
      },
      {
        kind: "fill",
        q: "Evalúa 2x + 3 cuando x = -1.",
        accept: ["1"],
        hint: "Sustituye con paréntesis: 2·(-1) + 3.",
        why: "2·(-1) + 3 = -2 + 3 = 1.",
      },
    ],
    activity: {
      title: "Tu propia fórmula",
      steps: [
        "Inventa una regla cotidiana con un número que cambia (p. ej. 'el precio son 2 € por kg más 1 € de envío').",
        "Escríbela como expresión con una variable.",
        "Evalúala para tres valores distintos y comprueba que tiene sentido.",
      ],
    },
    selfCheck: [
      "Traduzco un enunciado a una expresión con variable.",
      "Evalúo una expresión sustituyendo con paréntesis.",
      "Entiendo que la variable representa cualquier valor.",
    ],
    summary: [
      "Una variable es un hueco para cualquier número.",
      "Una expresión describe infinitos casos a la vez.",
      "Evaluar = sustituir (con paréntesis) y calcular.",
    ],
  },

  "mat-ecuaciones": {
    intro:
      "Una ecuación es una balanza en equilibrio: lo que hay a la izquierda del '=' pesa lo mismo que lo de la derecha. Resolverla es descubrir el valor de x que mantiene la balanza equilibrada. Y la regla de oro es una sola: lo que le hagas a un lado, hazlo también al otro.",
    goal: "resolver ecuaciones lineales con una incógnita y comprobar la solución.",
    sections: [
      {
        h: "La balanza",
        tldr: "Para no romper el equilibrio, aplica la MISMA operación a ambos lados.",
        code: "2x + 3 = 11\n2x + 3 − 3 = 11 − 3      (resto 3 en los dos lados)\n2x = 8\n2x ÷ 2 = 8 ÷ 2          (divido por 2 en los dos lados)\nx = 4",
        body: [
          "El objetivo es dejar la x sola. Vas 'deshaciendo' lo que la acompaña, siempre haciendo lo mismo a los dos lados.",
        ],
      },
      {
        h: "Comprobar es gratis (y obligatorio)",
        tldr: "Sustituye tu solución en la ecuación original: debe cumplirse.",
        code: "x = 4  →  2·(4) + 3 = 8 + 3 = 11 ✔",
        tip: "El truco de 'pasar al otro lado cambiando el signo' es solo un atajo de esta idea. Si te lías con los signos, vuelve a la balanza: sumar/restar/dividir a ambos lados nunca falla.",
      },
    ],
    practice: [
      {
        kind: "fill",
        q: "Resuelve 2x + 3 = 11. x = ___",
        accept: ["4"],
        hint: "Resta 3 a ambos lados, luego divide entre 2.",
        why: "2x = 8 → x = 4.",
      },
      {
        kind: "fill",
        q: "Resuelve 3x − 5 = 10. x = ___",
        accept: ["5"],
        hint: "Suma 5 a ambos lados, luego divide entre 3.",
        why: "3x = 15 → x = 5.",
      },
      {
        kind: "order",
        q: "Ordena los pasos para resolver 2x + 3 = 11:",
        items: [
          "Restar 3 a ambos lados → 2x = 8",
          "Dividir ambos lados entre 2 → x = 4",
          "Comprobar: 2·4 + 3 = 11 ✔",
        ],
        why: "Aísla la x deshaciendo operaciones a ambos lados, y comprueba.",
      },
      {
        kind: "choice",
        q: "¿Cuál es la regla de oro al resolver una ecuación?",
        options: [
          "hacer lo que sea con tal de despejar la x",
          "aplicar la misma operación a ambos lados",
          "mover números de lado libremente",
        ],
        answer: 1,
        why: "Solo así se mantiene el equilibrio de la balanza.",
      },
    ],
    activity: {
      title: "De problema a ecuación",
      steps: [
        "Piensa un problema tipo 'pienso un número, lo multiplico por 3, le quito 5 y obtengo 10'.",
        "Escríbelo como ecuación (3x − 5 = 10).",
        "Resuélvelo con la balanza y comprueba el resultado en el enunciado original.",
      ],
    },
    selfCheck: [
      "Aíslo la x aplicando la misma operación a ambos lados.",
      "Resuelvo ecuaciones lineales sencillas.",
      "Compruebo mi solución en la ecuación original.",
    ],
    summary: [
      "Una ecuación es una balanza en equilibrio.",
      "Regla de oro: la misma operación a ambos lados.",
      "Comprobar sustituyendo es rápido y obligatorio.",
    ],
  },

  "mat-sistemas": {
    intro:
      "A veces un problema tiene dos incógnitas y una sola ecuación no basta. Si tienes DOS pistas (dos ecuaciones), puedes descubrir ambos valores. Geométricamente, buscas el único punto donde dos rectas se cruzan.",
    goal: "resolver un sistema lineal 2×2 por sustitución.",
    sections: [
      {
        h: "Dos pistas, dos incógnitas",
        tldr: "Cada ecuación es una condición; juntas fijan un único par (x, y).",
        code: "x + y = 10\nx − y = 2",
        body: [
          "Por separado, cada ecuación tiene infinitas soluciones. Juntas, normalmente solo hay UN par que cumple las dos a la vez.",
        ],
      },
      {
        h: "Método de sustitución",
        tldr: "Despeja una variable en una ecuación y métela en la otra.",
        code: "De la 1ª:  x = 10 − y\nEn la 2ª:  (10 − y) − y = 2\n           10 − 2y = 2  →  2y = 8  →  y = 4\nVuelvo:    x = 10 − 4 = 6\nSolución:  x = 6, y = 4",
        tip: "El error más común es resolver una ecuación y olvidar la otra. Un sistema no está resuelto hasta que tienes AMBOS valores y compruebas que cumplen las DOS ecuaciones.",
      },
    ],
    practice: [
      {
        kind: "fill",
        q: "En el sistema x+y=10, x−y=2, ¿cuánto vale x?",
        accept: ["6"],
        hint: "Suma las dos ecuaciones: 2x = 12.",
        why: "x = 6 (y = 4).",
      },
      {
        kind: "fill",
        q: "En el mismo sistema, ¿cuánto vale y?",
        accept: ["4"],
        hint: "y = 10 − x.",
        why: "y = 4.",
      },
      {
        kind: "choice",
        q: "Geométricamente, la solución de un sistema 2×2 es…",
        options: [
          "el punto donde se cruzan las dos rectas",
          "cualquier punto de una recta",
          "el origen (0,0) siempre",
        ],
        answer: 0,
        why: "Cada ecuación es una recta; la solución es su intersección.",
      },
      {
        kind: "choice",
        q: "¿Cuándo está resuelto un sistema?",
        options: [
          "cuando encuentras una de las dos incógnitas",
          "cuando tienes ambas y cumplen las dos ecuaciones",
          "cuando despejas una ecuación",
        ],
        answer: 1,
        why: "Hacen falta ambos valores y que satisfagan las dos ecuaciones.",
      },
    ],
    activity: {
      title: "El problema de las dos pistas",
      steps: [
        "Piensa: 'entre dos números suman 10 y se diferencian en 2'.",
        "Escríbelo como sistema y resuélvelo por sustitución.",
        "Comprueba que tu par (x, y) cumple LAS DOS ecuaciones.",
      ],
    },
    selfCheck: [
      "Planteo un sistema 2×2 desde un problema.",
      "Lo resuelvo por sustitución.",
      "Compruebo ambos valores en las dos ecuaciones.",
    ],
    summary: [
      "Dos incógnitas necesitan dos ecuaciones (dos pistas).",
      "Sustitución: despeja en una, mete en la otra.",
      "La solución es el cruce de dos rectas.",
    ],
  },

  "mat-cuadraticas": {
    intro:
      "Cuando aparece una x² (una pelota que sube y baja, el área de un terreno que crece con el lado), ya no basta el álgebra lineal. Las ecuaciones cuadráticas suelen tener DOS soluciones, y eso tiene una razón visual preciosa: una parábola cruza el eje en dos puntos.",
    goal: "resolver ecuaciones de segundo grado y entender por qué hay (a menudo) dos soluciones.",
    sections: [
      {
        h: "Factorizar: buscar dos números",
        tldr: "x² − 5x + 6 = 0 se rompe en (x − 2)(x − 3) = 0.",
        code: "x² − 5x + 6 = 0\nBusco dos números que SUMEN 5 y MULTIPLIQUEN 6 → 2 y 3\n(x − 2)(x − 3) = 0\nUn producto es 0 si un factor es 0:\nx = 2   o   x = 3",
        body: [
          "La clave es que si dos cosas multiplicadas dan 0, al menos una es 0. Por eso de (x−2)(x−3)=0 salen dos soluciones.",
        ],
      },
      {
        h: "La fórmula general (cuando no factoriza fácil)",
        tldr: "Siempre funciona: el ± es el que da las dos soluciones.",
        code: "ax² + bx + c = 0\nx = ( −b ± √(b² − 4ac) ) / (2a)\n\nEl ± (más y menos) produce las DOS soluciones.",
        tip: "El olvido más típico es quedarse con UNA solución. El ± no es decorativo: casi siempre hay dos. Visualmente, son los dos puntos donde la parábola corta el eje x.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Cuáles son las soluciones de x² − 5x + 6 = 0?",
        options: ["x = 2 y x = 3", "x = 5 y x = 6", "x = 1 y x = 6"],
        answer: 0,
        why: "Factoriza como (x−2)(x−3)=0; 2 y 3 suman 5 y multiplican 6.",
      },
      {
        kind: "fill",
        q: "Dos números suman 5 y multiplican 6. Escribe el menor.",
        accept: ["2"],
        hint: "2 y 3.",
        why: "2 y 3: 2+3=5, 2·3=6.",
      },
      {
        kind: "choice",
        q: "¿Por qué una cuadrática suele tener dos soluciones?",
        options: [
          "por error de cálculo",
          "porque una parábola corta el eje x en dos puntos",
          "porque x² siempre es positivo",
        ],
        answer: 1,
        why: "Las soluciones son los cortes de la parábola con el eje x.",
      },
      {
        kind: "choice",
        q: "En la fórmula general, ¿qué produce las dos soluciones?",
        options: ["el signo ±", "el 2a del denominador", "el cuadrado de b"],
        answer: 0,
        why: "El ± genera una solución con + y otra con −.",
      },
    ],
    activity: {
      title: "Caza de raíces",
      steps: [
        "Toma x² − 7x + 10 = 0 y factorízala buscando dos números que sumen 7 y multipliquen 10.",
        "Escribe las dos soluciones.",
        "Reto: en Desmos, grafica y = x² − 7x + 10 y comprueba que corta el eje x justo en tus soluciones.",
      ],
    },
    selfCheck: [
      "Resuelvo cuadráticas sencillas por factorización.",
      "Sé que el ± da las dos soluciones.",
      "Relaciono las soluciones con los cortes de la parábola.",
    ],
    summary: [
      "Con x² aparecen (casi siempre) DOS soluciones.",
      "Factorizar: dos números que sumen b y multipliquen c.",
      "Un producto es 0 si un factor es 0.",
      "Las soluciones son donde la parábola corta el eje x.",
    ],
  },

  // ─────────────────────── Geometría y medida ───────────────────────
  "mat-figuras": {
    intro:
      "La geometría empezó midiendo la tierra (geo = tierra, metría = medida). Antes de medir, hay que nombrar: puntos, rectas, ángulos y figuras. Este vocabulario es la base para todo lo demás, desde el área hasta la trigonometría.",
    goal: "reconocer y clasificar ángulos y figuras planas básicas.",
    sections: [
      {
        h: "Ángulos: cuánto giras",
        tldr: "Un ángulo mide la abertura entre dos rectas, en grados.",
        code: "Recto  = 90°   (esquina de un folio)\nAgudo  < 90°   (puntiagudo)\nObtuso > 90°   (abierto)\nLlano  = 180°  (línea recta)",
        body: [
          "Piensa el ángulo como un giro: 90° es un cuarto de vuelta; 180°, media vuelta; 360°, la vuelta completa.",
        ],
      },
      {
        h: "Triángulos: por lados y por ángulos",
        tldr: "Se clasifican de dos formas complementarias.",
        compare: {
          left: {
            title: "Por sus lados",
            points: ["Equilátero: 3 lados iguales", "Isósceles: 2 iguales", "Escaleno: los 3 distintos"],
          },
          right: {
            title: "Por sus ángulos",
            points: ["Rectángulo: uno de 90°", "Acutángulo: los 3 agudos", "Obtusángulo: uno obtuso"],
          },
          note: "Dato clave: los tres ángulos de cualquier triángulo suman siempre 180°.",
        },
        tip: "Los ángulos de un triángulo SIEMPRE suman 180°. Si conoces dos, el tercero sale restando: 180 − (a + b).",
      },
    ],
    practice: [
      {
        kind: "match",
        q: "Empareja cada ángulo con su tipo:",
        pairs: [
          { left: "90°", right: "Recto" },
          { left: "45°", right: "Agudo" },
          { left: "120°", right: "Obtuso" },
        ],
        why: "Recto = 90°, agudo < 90°, obtuso > 90°.",
      },
      {
        kind: "fill",
        q: "Dos ángulos de un triángulo miden 60° y 70°. ¿Cuánto mide el tercero?",
        accept: ["50", "50°"],
        hint: "Suman 180°.",
        why: "180 − (60 + 70) = 50°.",
      },
      {
        kind: "choice",
        q: "Un triángulo con los tres lados iguales es…",
        options: ["escaleno", "isósceles", "equilátero"],
        answer: 2,
        why: "Equilátero = tres lados (y tres ángulos) iguales.",
      },
    ],
    activity: {
      title: "Caza de ángulos",
      steps: [
        "Busca en tu habitación 3 ángulos: uno recto, uno agudo y uno obtuso.",
        "Dibuja un triángulo, mide dos ángulos y predice el tercero antes de medirlo.",
        "Clasifica ese triángulo por sus lados y por sus ángulos.",
      ],
    },
    selfCheck: [
      "Clasifico ángulos en recto, agudo y obtuso.",
      "Uso que los ángulos de un triángulo suman 180°.",
      "Clasifico triángulos por lados y por ángulos.",
    ],
    summary: [
      "Un ángulo mide un giro, en grados.",
      "Recto 90°, agudo <90°, obtuso >90°.",
      "Los ángulos de todo triángulo suman 180°.",
    ],
  },

  "mat-perimetro-area": {
    intro:
      "Dos preguntas distintas confunden a mucha gente: ¿cuánto mide el borde? (perímetro) y ¿cuánto espacio ocupa la superficie? (área). Vallar un terreno usa perímetro; sembrarlo usa área. Distinguirlas es la mitad del trabajo.",
    goal: "calcular perímetros y áreas de figuras básicas, sin confundir ambos conceptos.",
    sections: [
      {
        h: "Perímetro vs. área",
        tldr: "Perímetro = contorno (se mide en cm). Área = superficie (en cm²).",
        compare: {
          left: {
            title: "Perímetro",
            points: ["Suma de los lados", "Longitud del borde", "Unidad: cm, m…"],
          },
          right: {
            title: "Área",
            points: ["Cuántos cuadraditos caben", "Superficie interior", "Unidad: cm², m² (¡al cuadrado!)"],
          },
          note: "Pista para no confundir: el área se mide en unidades AL CUADRADO (cm²) porque cubre dos dimensiones.",
        },
      },
      {
        h: "Las fórmulas, con intuición",
        tldr: "El área del rectángulo es contar filas × columnas de cuadraditos.",
        code: "Rectángulo:  área = base × altura   perímetro = 2·(base + altura)\nTriángulo:   área = base × altura / 2   (medio rectángulo)",
        tip: "El área del triángulo es la mitad de la del rectángulo que lo contiene: por eso se divide entre 2. No la memorices suelta; visualiza el rectángulo.",
      },
    ],
    practice: [
      {
        kind: "fill",
        q: "Área de un rectángulo de base 4 y altura 3 (en unidades²).",
        accept: ["12"],
        hint: "base × altura.",
        why: "4 × 3 = 12: caben 12 cuadraditos.",
      },
      {
        kind: "fill",
        q: "Perímetro de ese mismo rectángulo (base 4, altura 3).",
        accept: ["14"],
        hint: "2·(4 + 3).",
        why: "2·(4+3) = 14: la longitud del borde.",
      },
      {
        kind: "choice",
        q: "Para saber cuánta valla necesitas para un jardín, calculas…",
        options: ["el área", "el perímetro", "la diagonal"],
        answer: 1,
        why: "La valla rodea el borde: es el perímetro.",
      },
      {
        kind: "fill",
        q: "Área de un triángulo de base 6 y altura 4.",
        accept: ["12"],
        hint: "base × altura / 2.",
        why: "6 × 4 / 2 = 12 (medio rectángulo).",
      },
    ],
    activity: {
      title: "Mide tu habitación",
      steps: [
        "Mide el largo y el ancho de una mesa o habitación.",
        "Calcula su área (para saber cuánto suelo/mantel cubre) y su perímetro (para un zócalo o borde).",
        "Comprueba que usas cm² para el área y cm para el perímetro.",
      ],
    },
    selfCheck: [
      "Distingo perímetro (borde) de área (superficie).",
      "Calculo área y perímetro de rectángulos y triángulos.",
      "Uso unidades al cuadrado para el área.",
    ],
    summary: [
      "Perímetro = contorno (cm). Área = superficie (cm²).",
      "Rectángulo: área = base × altura.",
      "Triángulo: medio rectángulo → base × altura / 2.",
    ],
  },

  "mat-pitagoras": {
    intro:
      "Uno de los teoremas más famosos y útiles de la historia. En cualquier triángulo rectángulo, los tres lados están atados por una relación exacta: a² + b² = c². Con él calculas distancias que no puedes medir directamente, desde una escalera apoyada en la pared hasta la diagonal de una pantalla.",
    goal: "aplicar el teorema de Pitágoras para hallar un lado desconocido.",
    sections: [
      {
        h: "La relación mágica",
        tldr: "El cuadrado de la hipotenusa = suma de los cuadrados de los catetos.",
        code: "Solo en triángulos RECTÁNGULOS (uno de 90°):\n a² + b² = c²\n a, b = catetos (los que forman el ángulo recto)\n c    = hipotenusa (el lado más largo, frente al ángulo recto)",
        body: [
          "La hipotenusa es siempre el lado más largo y está enfrente del ángulo de 90°. Los catetos son los dos que forman esa esquina.",
        ],
      },
      {
        h: "El ejemplo clásico 3-4-5",
        tldr: "Catetos 3 y 4 → hipotenusa 5.",
        code: "c² = 3² + 4² = 9 + 16 = 25\nc = √25 = 5",
        tip: "Solo funciona en triángulos rectángulos. Aplicarlo en uno que no lo es es el error más frecuente: primero comprueba que hay un ángulo de 90°.",
      },
    ],
    practice: [
      {
        kind: "fill",
        q: "Catetos 3 y 4. ¿Cuánto mide la hipotenusa?",
        accept: ["5"],
        hint: "√(3² + 4²).",
        why: "√(9+16) = √25 = 5.",
      },
      {
        kind: "choice",
        q: "¿En qué triángulos se puede aplicar Pitágoras?",
        options: ["en todos", "solo en los rectángulos (uno de 90°)", "solo en los equiláteros"],
        answer: 1,
        why: "El teorema exige un ángulo recto.",
      },
      {
        kind: "choice",
        q: "La hipotenusa es…",
        options: [
          "el lado más corto",
          "el lado más largo, frente al ángulo recto",
          "cualquiera de los catetos",
        ],
        answer: 1,
        why: "Es el lado más largo y está enfrente del ángulo de 90°.",
      },
      {
        kind: "fill",
        q: "Catetos 6 y 8. ¿Hipotenusa?",
        accept: ["10"],
        hint: "√(36 + 64).",
        why: "√100 = 10 (es un 3-4-5 escalado por 2).",
      },
    ],
    activity: {
      title: "La escalera",
      steps: [
        "Una escalera de 5 m se apoya con la base a 3 m de la pared. ¿A qué altura llega? (usa Pitágoras).",
        "Mide la diagonal de una hoja o pantalla y verifica con Pitágoras usando sus lados.",
        "Reto: comprueba si un triángulo de lados 5, 6, 7 es rectángulo (¿se cumple a²+b²=c²?).",
      ],
    },
    selfCheck: [
      "Identifico catetos e hipotenusa.",
      "Hallo la hipotenusa con a² + b² = c².",
      "Sé que solo aplica en triángulos rectángulos.",
    ],
    summary: [
      "En triángulos rectángulos: a² + b² = c².",
      "La hipotenusa es el lado más largo (frente al ángulo recto).",
      "Sirve para medir distancias imposibles de medir directamente.",
    ],
  },

  // ─────────────────────── Funciones y gráficas ───────────────────────
  "mat-plano": {
    intro:
      "¿Cómo unir el álgebra (números y letras) con la geometría (figuras)? Con una idea genial de Descartes: dar a cada punto del papel una 'dirección' con dos números, (x, y). El plano cartesiano es el mapa donde las ecuaciones se vuelven dibujos.",
    goal: "representar y leer puntos en el plano usando coordenadas.",
    sections: [
      {
        h: "Dos números, una dirección",
        tldr: "(x, y): primero cuánto a la derecha, luego cuánto hacia arriba.",
        code: "(3, 2)  →  3 a la derecha, 2 arriba\n(-2, 1) →  2 a la izquierda, 1 arriba\n(0, 0)  →  el origen (centro)",
        body: [
          "El primer número (x) es horizontal; el segundo (y), vertical. El orden importa: (3, 2) y (2, 3) son puntos distintos.",
        ],
      },
      {
        h: "Cuatro cuadrantes",
        tldr: "Los ejes dividen el plano en cuatro zonas según los signos.",
        examples: [
          { text: "(3, 2)", mono: "x>0, y>0", sub: "Arriba a la derecha (cuadrante I)." },
          { text: "(-2, -1)", mono: "x<0, y<0", sub: "Abajo a la izquierda (cuadrante III)." },
        ],
        tip: "El error casi universal es invertir el orden. Repite el mantra: 'primero camino (x), luego subo (y)'. Como leer: de izquierda a derecha, luego de abajo arriba.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "En el punto (3, -2), ¿qué significa el 3?",
        options: ["3 hacia arriba", "3 a la derecha", "3 hacia abajo"],
        answer: 1,
        why: "El primer número (x) es el movimiento horizontal: 3 a la derecha.",
      },
      {
        kind: "choice",
        q: "¿Son (3, 2) y (2, 3) el mismo punto?",
        options: ["sí", "no, el orden importa", "solo si son positivos"],
        answer: 1,
        why: "(x, y) es ordenado: (3,2) ≠ (2,3).",
      },
      {
        kind: "match",
        q: "Empareja cada punto con su posición:",
        pairs: [
          { left: "(0, 0)", right: "El origen" },
          { left: "(4, 0)", right: "Sobre el eje horizontal" },
          { left: "(0, 3)", right: "Sobre el eje vertical" },
        ],
        why: "Si y=0 estás en el eje x; si x=0, en el eje y; (0,0) es el origen.",
      },
    ],
    activity: {
      title: "Batalla naval",
      steps: [
        "Dibuja unos ejes y marca 5 puntos que te dicte alguien en formato (x, y).",
        "Ahora tú dicta 5 puntos y que los marque otra persona.",
        "Comparad: los errores casi siempre son por invertir x e y.",
      ],
    },
    selfCheck: [
      "Sitúo un punto dado por sus coordenadas.",
      "Leo las coordenadas de un punto del plano.",
      "No invierto el orden (x, y).",
    ],
    summary: [
      "Cada punto tiene una dirección: (x, y).",
      "x = horizontal, y = vertical; el orden importa.",
      "El plano une álgebra y geometría.",
    ],
  },

  "mat-funciones-intro": {
    intro:
      "La función es la idea más importante de las matemáticas modernas. Piénsala como una MÁQUINA: metes un número, y sale exactamente uno. Mete 3 en la máquina 'x2', sale 6. La única regla sagrada: una misma entrada no puede dar dos salidas distintas.",
    goal: "entender el concepto de función y reconocer cuándo una relación lo es.",
    sections: [
      {
        h: "Una máquina: entrada → salida",
        tldr: "A cada entrada le corresponde UNA única salida.",
        code: "f(x) = 2x + 1\nf(0) = 1     (metes 0, sale 1)\nf(3) = 7     (metes 3, sale 7)\nf(-1) = -1   (metes -1, sale -1)",
        body: [
          "f(x) se lee 'f de x'. Es el nombre de la máquina (f) aplicada a la entrada (x). El resultado es la salida.",
        ],
      },
      {
        h: "La regla sagrada y cómo verla",
        tldr: "Una entrada, una salida. En la gráfica: la prueba de la recta vertical.",
        body: [
          "Si dibujas la relación y una recta vertical la corta en dos puntos, NO es función: esa entrada tendría dos salidas.",
        ],
        tip: "Ejemplo cotidiano: 'a cada persona le corresponde una única fecha de nacimiento' es una función. 'A cada fecha, las personas nacidas ese día' NO lo es (una entrada, muchas salidas).",
      },
    ],
    practice: [
      {
        kind: "fill",
        q: "Si f(x) = 2x + 1, ¿cuánto vale f(3)?",
        accept: ["7"],
        hint: "2·3 + 1.",
        why: "f(3) = 2·3 + 1 = 7.",
      },
      {
        kind: "choice",
        q: "¿Cuál es la regla que define a una función?",
        options: [
          "a cada entrada le corresponde una única salida",
          "todas las salidas son distintas",
          "solo admite números positivos",
        ],
        answer: 0,
        why: "Una entrada → exactamente una salida.",
      },
      {
        kind: "choice",
        q: "En una gráfica, una relación NO es función si…",
        options: [
          "una recta horizontal la corta dos veces",
          "una recta vertical la corta dos veces",
          "pasa por el origen",
        ],
        answer: 1,
        why: "La prueba de la recta vertical: dos cortes = una entrada con dos salidas.",
      },
      {
        kind: "fill",
        q: "Con f(x) = 2x + 1, ¿cuánto vale f(0)?",
        accept: ["1"],
        hint: "2·0 + 1.",
        why: "f(0) = 1.",
      },
    ],
    activity: {
      title: "¿Función o no?",
      steps: [
        "Escribe la máquina f(x) = 3x − 2 y evalúala en x = 0, 1, 2, -1.",
        "Piensa dos relaciones de tu vida: una que sea función (cada alumno → su nota final) y una que no.",
        "Reto: en Desmos grafica f(x) = 3x − 2 y comprueba que ninguna vertical la corta dos veces.",
      ],
    },
    selfCheck: [
      "Evalúo f(x) en varios valores.",
      "Enuncio la regla 'una entrada, una salida'.",
      "Aplico la prueba de la recta vertical.",
    ],
    summary: [
      "Una función es una máquina: entrada → una única salida.",
      "f(x) se lee 'f de x'.",
      "Prueba de la recta vertical: si corta dos veces, no es función.",
    ],
  },

  "mat-lineales": {
    intro:
      "La función lineal modela todo lo que cambia a ritmo constante: una tarifa de taxi, la conversión de monedas, la distancia a velocidad fija. Su gráfica es una recta, y solo necesitas entender dos números para dominarla: dónde empieza y cuánto sube.",
    goal: "interpretar y graficar funciones lineales (y = mx + b).",
    sections: [
      {
        h: "Los dos números que lo dicen todo",
        tldr: "b = dónde empieza (corte con el eje y). m = cuánto sube por paso (pendiente).",
        code: "y = m·x + b\n         │    └── b: valor cuando x = 0 (punto de partida)\n         └── m: pendiente (cuánto cambia y por cada +1 en x)",
        examples: [
          { text: "Taxi: 3 € de bajada + 2 €/km", mono: "y = 2x + 3", sub: "b = 3 (bajada), m = 2 (por km)." },
        ],
      },
      {
        h: "La pendiente es el ritmo de cambio",
        tldr: "m grande = recta empinada; m negativa = baja.",
        code: "y = 2x + 1\nx: 0  1  2  3\ny: 1  3  5  7   ← sube 2 cada paso (pendiente 2)",
        tip: "No confundas m con b. Truco: b es el 'sueldo base' (lo que hay en x=0) y m es 'cuánto ganas por hora' (lo que se suma por cada paso).",
      },
    ],
    practice: [
      {
        kind: "match",
        q: "En y = 2x + 3, empareja cada número con su significado:",
        pairs: [
          { left: "2 (m)", right: "Pendiente: cuánto sube por paso" },
          { left: "3 (b)", right: "Punto de partida (x = 0)" },
        ],
        why: "m = pendiente, b = corte con el eje y.",
      },
      {
        kind: "fill",
        q: "En y = 2x + 3, ¿cuánto vale y cuando x = 0?",
        accept: ["3"],
        hint: "Ese es el término independiente b.",
        why: "y = 2·0 + 3 = 3 (el corte con el eje y).",
      },
      {
        kind: "choice",
        q: "Una recta que BAJA de izquierda a derecha tiene pendiente…",
        options: ["positiva", "negativa", "cero"],
        answer: 1,
        why: "Pendiente negativa = y disminuye al aumentar x.",
      },
      {
        kind: "fill",
        q: "Taxi: 3 € de bajada + 2 €/km. ¿Cuánto cuesta un viaje de 5 km? (en €)",
        accept: ["13"],
        hint: "y = 2·5 + 3.",
        why: "2·5 + 3 = 13 €.",
      },
    ],
    activity: {
      title: "Modela una tarifa",
      steps: [
        "Piensa una tarifa real (móvil, taxi, gimnasio) con una parte fija y una por uso.",
        "Escríbela como y = mx + b e identifica m y b.",
        "Reto: en Desmos grafica dos tarifas y encuentra a partir de cuántos usos una es más barata que la otra.",
      ],
    },
    selfCheck: [
      "Identifico pendiente (m) e intersección (b).",
      "Evalúo y grafico una recta.",
      "Interpreto la pendiente como ritmo de cambio.",
    ],
    summary: [
      "Función lineal: y = mx + b (una recta).",
      "b = punto de partida; m = pendiente (ritmo de cambio).",
      "Modela todo cambio a ritmo constante.",
    ],
  },

  // ─────────────────── Estadística y probabilidad ───────────────────
  "mat-estadistica": {
    intro:
      "Vivimos rodeados de datos: notas, precios, encuestas. La estadística descriptiva los resume en pocos números que capturan 'lo típico'. Pero cuidado: un mal resumen puede mentir. Entender media, mediana y moda es alfabetización básica del siglo XXI.",
    goal: "calcular e interpretar media, mediana y moda, y elegir la más representativa.",
    sections: [
      {
        h: "Tres formas de decir 'lo típico'",
        tldr: "Media = promedio; mediana = el del medio; moda = el que más se repite.",
        code: "Datos: 2, 4, 6, 8, 10\nMedia   = (2+4+6+8+10) / 5 = 6\nMediana = 6   (el valor central al ordenar)\nModa    = ninguna se repite",
        body: [
          "Para la mediana, primero ORDENA los datos y toma el del centro. Si hay dos centrales, promédialos.",
        ],
      },
      {
        h: "Cuándo la media engaña",
        tldr: "Un valor extremo (outlier) dispara la media; la mediana resiste.",
        code: "Sueldos: 1000, 1100, 1200, 1300, 20000\nMedia   = 4920  (¡nadie cobra eso!)\nMediana = 1200  (mucho más representativa)",
        tip: "Ante valores extremos (una casa carísima en un barrio, un sueldo de un jefe), la mediana describe mejor 'lo normal' que la media. Por eso se habla de sueldo MEDIANO.",
      },
    ],
    practice: [
      {
        kind: "fill",
        q: "Media de 4, 8, 6, 10, 2.",
        accept: ["6"],
        hint: "Suma y divide entre 5.",
        why: "(4+8+6+10+2)/5 = 30/5 = 6.",
      },
      {
        kind: "fill",
        q: "Mediana de 3, 1, 4, 1, 5 (ordénalos primero).",
        accept: ["3"],
        hint: "Ordenados: 1,1,3,4,5. El del centro.",
        why: "Ordenados, el central es 3.",
      },
      {
        kind: "choice",
        q: "Con un valor extremo muy alto, ¿qué medida representa mejor 'lo típico'?",
        options: ["la media", "la mediana", "la moda"],
        answer: 1,
        why: "La mediana resiste a los valores extremos; la media se dispara.",
      },
      {
        kind: "choice",
        q: "La moda es…",
        options: ["el promedio", "el valor que más se repite", "el valor central"],
        answer: 1,
        why: "Moda = el dato más frecuente.",
      },
    ],
    activity: {
      title: "Tus datos",
      steps: [
        "Reúne 8 datos reales (tus notas, horas de sueño de una semana, precios).",
        "Calcula media, mediana y moda.",
        "¿Hay algún valor extremo? Decide qué medida describe mejor tu conjunto y explica por qué.",
      ],
    },
    selfCheck: [
      "Calculo media, mediana y moda.",
      "Ordeno antes de hallar la mediana.",
      "Elijo la medida más representativa según los datos.",
    ],
    summary: [
      "Media = promedio; mediana = central; moda = más frecuente.",
      "Para la mediana, ordena primero.",
      "Con valores extremos, la mediana es más honesta que la media.",
    ],
  },

  "mat-probabilidad": {
    intro:
      "La probabilidad pone número a la incertidumbre: mide cuán posible es algo, de 0 (imposible) a 1 (seguro). Es la base para decidir con riesgo: seguros, juegos, medicina, IA. Y esconde trampas para la intuición que conviene desactivar pronto.",
    goal: "calcular la probabilidad de sucesos simples y evitar la falacia del jugador.",
    sections: [
      {
        h: "Casos favorables entre posibles",
        tldr: "P = favorables / posibles (cuando todos son igual de probables).",
        code: "Dado de 6 caras, sacar par (2, 4, 6):\nP = 3 favorables / 6 posibles = 3/6 = 1/2 = 0,5",
        body: [
          "La probabilidad va de 0 a 1. También se expresa en % (0,5 = 50%). 0 = imposible; 1 = seguro.",
        ],
      },
      {
        h: "La trampa del jugador",
        tldr: "Una moneda no 'debe' cara tras 5 cruces: no tiene memoria.",
        tip: "Cada lanzamiento independiente vuelve a empezar: la probabilidad de cara sigue siendo 1/2, hayan salido 5 cruces o 50. Creer que 'ya toca' es la falacia del jugador, y arruina a mucha gente.",
      },
    ],
    practice: [
      {
        kind: "fill",
        q: "Probabilidad de sacar par en un dado de 6 caras (como fracción a/b).",
        accept: ["3/6", "1/2"],
        hint: "Pares: 2, 4, 6.",
        why: "3 favorables / 6 posibles = 1/2.",
      },
      {
        kind: "choice",
        q: "Una probabilidad de 0 significa…",
        options: ["seguro", "imposible", "50%"],
        answer: 1,
        why: "0 = imposible; 1 = seguro.",
      },
      {
        kind: "choice",
        q: "Han salido 5 cruces seguidas. ¿Qué probabilidad hay de cara ahora?",
        options: ["mayor, 'ya toca'", "sigue siendo 1/2", "menor"],
        answer: 1,
        why: "Los lanzamientos son independientes: la moneda no tiene memoria.",
      },
      {
        kind: "fill",
        q: "Probabilidad de sacar un 3 en un dado (como fracción).",
        accept: ["1/6"],
        hint: "Un caso favorable de seis.",
        why: "1 favorable / 6 posibles = 1/6.",
      },
    ],
    activity: {
      title: "Experimenta el azar",
      steps: [
        "Lanza una moneda 20 veces y anota caras y cruces.",
        "Calcula la proporción de caras: ¿se acerca a 0,5? (cuantas más tiradas, más se acerca).",
        "Reto: calcula la probabilidad de sacar suma 7 con dos dados (cuenta los casos favorables sobre 36).",
      ],
    },
    selfCheck: [
      "Calculo P = favorables / posibles.",
      "Sé que la probabilidad va de 0 a 1.",
      "No caigo en la falacia del jugador.",
    ],
    summary: [
      "Probabilidad = favorables / posibles (de 0 a 1).",
      "0 imposible, 1 seguro.",
      "Los sucesos independientes no tienen memoria.",
    ],
  },

  // ─────────────────────────────── Hito ───────────────────────────────
  "hito-mat-intermedio": {
    intro:
      "Has dado el gran salto: de calcular con números concretos a generalizar con variables, y de la aritmética a medir el mundo. Este hito confirma que dominas fracciones/porcentajes, el lenguaje algebraico y la medida antes de entrar en funciones, cuadráticas y más allá.",
    goal: "confirmar la transición de la aritmética al álgebra y la geometría.",
    sections: [
      {
        h: "Lo que ya integras",
        tldr: "Porcentajes, variables/ecuaciones y área/perímetro.",
        bullets: [
          "Resuelves porcentajes y proporciones en contextos reales.",
          "Traduces problemas a expresiones y ecuaciones, y las resuelves con la balanza.",
          "Mides figuras distinguiendo perímetro de área.",
        ],
      },
      {
        h: "Un problema que junta piezas",
        tldr: "Los problemas reales mezclan varias competencias.",
        code: "Una mesa rectangular mide 2 m × 1 m. Un mantel cuesta 8 €/m².\n1) Área: 2 × 1 = 2 m²\n2) Coste: 2 × 8 = 16 €\n3) Con 10% de descuento: 16 − 1,6 = 14,40 €",
        tip: "Cuando un problema mezcla geometría, dinero y porcentajes, resuélvelo por pasos nombrados (como en Pólya). Así cada competencia hace su parte sin que te pierdas.",
      },
    ],
    practice: [
      {
        kind: "fill",
        q: "Un mantel para una mesa de 2 m × 1 m a 8 €/m². ¿Cuánto cuesta? (en €)",
        accept: ["16"],
        hint: "Área × precio por m².",
        why: "Área 2 m² × 8 €/m² = 16 €.",
      },
      {
        kind: "fill",
        q: "Aplica un 10% de descuento a 16 €. Precio final (en €).",
        accept: ["14,40", "14.40", "14,4", "14.4"],
        hint: "16 − 1,6.",
        why: "10% de 16 = 1,6; 16 − 1,6 = 14,40 €.",
      },
      {
        kind: "fill",
        q: "Resuelve 3x − 5 = 10. x = ___",
        accept: ["5"],
        hint: "Suma 5, divide entre 3.",
        why: "3x = 15 → x = 5.",
      },
      {
        kind: "order",
        q: "Ordena para resolver el problema del mantel con descuento:",
        items: [
          "Calcular el área de la mesa",
          "Multiplicar por el precio por m²",
          "Aplicar el descuento del 10%",
          "Revisar que el resultado tiene sentido",
        ],
        why: "Geometría → dinero → porcentaje → revisar (Pólya).",
      },
    ],
    activity: {
      title: "Reto intermedio",
      steps: [
        "Inventa un problema real que combine área, precio por unidad y un porcentaje (descuento o impuesto).",
        "Resuélvelo por pasos nombrados.",
        "Comprueba con una estimación rápida que el resultado es razonable.",
      ],
    },
    selfCheck: [
      "Combino geometría, porcentajes y álgebra en un problema.",
      "Resuelvo ecuaciones lineales con soltura.",
      "Trabajo por pasos nombrados y reviso el resultado.",
    ],
    summary: [
      "Transición lograda: de la aritmética al álgebra y la medida.",
      "Los problemas reales mezclan competencias: resuélvelos por pasos.",
      "Listo para funciones, cuadráticas y geometría avanzada.",
    ],
  },

  // ─────────────────── Trigonometría y exponenciales ───────────────────
  "mat-trigonometria": {
    intro:
      "¿Cómo se mide la altura de una montaña sin escalarla, o la distancia a una estrella? Con trigonometría. La idea es sorprendente: en un triángulo rectángulo, la relación entre sus lados solo depende de sus ángulos. Esas relaciones —seno, coseno y tangente— son la llave para medir lo inalcanzable.",
    goal: "usar las razones trigonométricas para hallar lados y ángulos.",
    sections: [
      {
        h: "Tres razones, un triángulo rectángulo",
        tldr: "Seno, coseno y tangente son cocientes entre dos lados.",
        code: "Respecto a un ángulo agudo θ:\nseno(θ)     = opuesto / hipotenusa\ncoseno(θ)   = adyacente / hipotenusa\ntangente(θ) = opuesto / adyacente",
        body: [
          "El lado OPUESTO está enfrente del ángulo θ; el ADYACENTE lo forma (junto a la hipotenusa). La hipotenusa es siempre el lado mayor.",
        ],
      },
      {
        h: "El truco 'SOH-CAH-TOA'",
        tldr: "Un recordatorio: Seno-Opuesto-Hipotenusa, Coseno-Adyacente-Hipotenusa, Tangente-Opuesto-Adyacente.",
        tip: "El error clásico es confundir opuesto y adyacente. Sitúate SIEMPRE desde el ángulo: el opuesto está 'enfrente', el adyacente 'te toca'. Marca el ángulo antes de escribir la razón.",
      },
    ],
    practice: [
      {
        kind: "match",
        q: "Empareja cada razón con su definición:",
        pairs: [
          { left: "seno", right: "opuesto / hipotenusa" },
          { left: "coseno", right: "adyacente / hipotenusa" },
          { left: "tangente", right: "opuesto / adyacente" },
        ],
        why: "SOH-CAH-TOA: la regla mnemotécnica clásica.",
      },
      {
        kind: "choice",
        q: "El lado 'opuesto' a un ángulo es el que está…",
        options: ["enfrente del ángulo", "pegado al ángulo", "siempre abajo"],
        answer: 0,
        why: "El opuesto está enfrente; el adyacente forma el ángulo.",
      },
      {
        kind: "fill",
        q: "Si opuesto=3 e hipotenusa=5, ¿cuánto vale el seno? (fracción a/b)",
        accept: ["3/5"],
        hint: "seno = opuesto / hipotenusa.",
        why: "seno = 3/5.",
      },
      {
        kind: "choice",
        q: "La trigonometría permite, por ejemplo…",
        options: [
          "medir una altura sin subir, usando un ángulo y una distancia",
          "sumar fracciones",
          "ordenar números",
        ],
        answer: 0,
        why: "Con un ángulo y un lado, halla los demás: mide lo inalcanzable.",
      },
    ],
    activity: {
      title: "Mide sin medir",
      steps: [
        "Dibuja un triángulo rectángulo y marca un ángulo agudo θ.",
        "Etiqueta opuesto, adyacente e hipotenusa RESPECTO a θ.",
        "Reto: con una app o calculadora, si θ=30° y la hipotenusa=10, halla el opuesto (seno 30°=0,5).",
      ],
    },
    selfCheck: [
      "Identifico opuesto, adyacente e hipotenusa respecto a un ángulo.",
      "Escribo seno, coseno y tangente (SOH-CAH-TOA).",
      "Hallo un lado con una razón trigonométrica.",
    ],
    summary: [
      "En un triángulo rectángulo, los lados se relacionan por el ángulo.",
      "seno=O/H, coseno=A/H, tangente=O/A (SOH-CAH-TOA).",
      "Sirve para medir alturas y distancias inalcanzables.",
    ],
  },

  "mat-exponenciales": {
    intro:
      "Dobla un papel 42 veces y llegarías a la Luna. Suena imposible, pero es el poder del crecimiento exponencial: cuando algo se multiplica en vez de sumar, se dispara. Entenderlo explica el interés compuesto, las epidemias y por qué nuestra intuición (lineal) nos engaña.",
    goal: "entender el crecimiento exponencial y el logaritmo como su inverso.",
    sections: [
      {
        h: "Sumar vs. multiplicar",
        tldr: "Lineal: sumas lo mismo cada paso. Exponencial: multiplicas cada paso.",
        code: "Lineal (+3):      2 → 5 → 8 → 11 → 14\nExponencial (×3): 2 → 6 → 18 → 54 → 162  (¡se dispara!)",
        body: [
          "En lo exponencial, cuanto más grande es la cantidad, más rápido crece: cada paso multiplica al anterior. Por eso al principio parece lento y luego explota.",
        ],
      },
      {
        h: "El logaritmo deshace la potencia",
        tldr: "log pregunta: ¿a qué exponente elevo la base para obtener este número?",
        code: "2³ = 8     ↔     log₂(8) = 3\n(exponencial)      (logaritmo: su inversa)",
        tip: "El error clásico es confundir crecimiento lineal con exponencial ('crece un poco cada año' NO es lo mismo que 'crece un 5% cada año'). El logaritmo es la herramienta para 'domar' esos números que explotan (escalas como el pH o los decibelios son logarítmicas).",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "La secuencia 2, 6, 18, 54… crece de forma…",
        options: ["lineal (suma)", "exponencial (multiplica)", "constante"],
        answer: 1,
        why: "Cada término es el anterior ×3: crecimiento exponencial.",
      },
      {
        kind: "fill",
        q: "Como 2³ = 8, ¿cuánto vale log₂(8)?",
        accept: ["3"],
        hint: "El log pregunta a qué exponente elevas 2 para llegar a 8.",
        why: "2³ = 8, así que log₂(8) = 3.",
      },
      {
        kind: "choice",
        q: "El logaritmo es la operación inversa de…",
        options: ["la suma", "la potencia (exponencial)", "la raíz cuadrada, solo"],
        answer: 1,
        why: "El log 'deshace' la exponencial, como la resta deshace la suma.",
      },
      {
        kind: "choice",
        q: "El interés compuesto de un ahorro crece de forma…",
        options: ["lineal", "exponencial", "no crece"],
        answer: 1,
        why: "Los intereses generan intereses: crecimiento exponencial.",
      },
    ],
    activity: {
      title: "El poder de doblar",
      steps: [
        "Empieza con 1 y ve doblando: 1, 2, 4, 8… hasta 10 pasos. ¿Cuánto llegas a tener?",
        "Compáralo con sumar 2 cada vez desde 1 durante 10 pasos.",
        "Reto: si 100 € crecen 10% al año (×1,1), ¿cuánto hay a los 3 años?",
      ],
    },
    selfCheck: [
      "Distingo crecimiento lineal de exponencial.",
      "Entiendo el logaritmo como inverso de la potencia.",
      "Reconozco ejemplos exponenciales (interés, epidemias).",
    ],
    summary: [
      "Exponencial = multiplicar cada paso; se dispara.",
      "El logaritmo deshace la potencia (log₂ 8 = 3).",
      "Interés compuesto, epidemias y pH: exponenciales/logarítmicos.",
    ],
  },

  // ─────────────────────────────── Cálculo ───────────────────────────────
  "mat-limites": {
    intro:
      "El cálculo, la matemática del cambio y el movimiento, se apoya en una sola idea genial: el límite. Consiste en preguntar '¿a qué valor se ACERCA algo?' aunque nunca llegue del todo. Con esta idea, Newton y Leibniz pudieron medir lo instantáneo. Es más intuitiva de lo que parece.",
    goal: "comprender intuitivamente qué es un límite.",
    sections: [
      {
        h: "Acercarse sin (necesariamente) llegar",
        tldr: "El límite es el valor al que tiende una función cuando la entrada se acerca a un punto.",
        code: "f(x) = (x² − 1) / (x − 1)\nEn x = 1 da 0/0 (indefinido). Pero acércate:\nx=0,9 → 1,9   x=0,99 → 1,99   x=1,01 → 2,01\nSe ACERCA a 2. El límite es 2.",
        body: [
          "Aunque en x=1 la función 'no existe', al acercarnos por ambos lados el resultado tiende a 2. Ese valor de acercamiento es el límite.",
        ],
      },
      {
        h: "El límite no es el valor en el punto",
        tldr: "Importa a dónde te DIRIGES, no dónde (o si) aterrizas.",
        tip: "El error conceptual típico es confundir el límite con 'el valor en ese punto'. El límite describe la tendencia al acercarse; la función puede no estar definida ahí y aun así tener límite.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Un límite describe…",
        options: [
          "el valor exacto en un punto",
          "el valor al que se ACERCA la función",
          "el valor más grande de la función",
        ],
        answer: 1,
        why: "El límite es la tendencia al acercarse, aunque no se llegue.",
      },
      {
        kind: "fill",
        q: "Si f(x) da 1,99 en x=0,99 y 2,01 en x=1,01, ¿a qué valor tiende en x=1?",
        accept: ["2"],
        hint: "Mira a qué número se acercan los resultados.",
        why: "Se acerca a 2 por ambos lados: el límite es 2.",
      },
      {
        kind: "choice",
        q: "¿Puede una función tener límite en un punto donde NO está definida?",
        options: ["sí, el límite es la tendencia", "no, nunca", "solo si es lineal"],
        answer: 0,
        why: "El límite mira el acercamiento, no el valor exacto en el punto.",
      },
      {
        kind: "choice",
        q: "El límite es la idea que funda…",
        options: ["la aritmética", "el cálculo (derivadas e integrales)", "la geometría"],
        answer: 1,
        why: "Derivadas e integrales se definen mediante límites.",
      },
    ],
    activity: {
      title: "Acércate al límite",
      steps: [
        "Toma f(x) = (x²−1)/(x−1) y calcula f para x = 0,9; 0,99; 1,01; 1,1.",
        "Observa a qué número se acercan los resultados.",
        "Reto: simplifica la expresión (pista: x²−1 = (x−1)(x+1)) y comprueba el límite.",
      ],
    },
    selfCheck: [
      "Explico el límite como 'valor al que se acerca'.",
      "Estimo un límite con una tabla de acercamiento.",
      "Sé que el límite no es el valor en el punto.",
    ],
    summary: [
      "El límite es el valor al que tiende una función al acercarse.",
      "Puede existir aunque la función no esté definida ahí.",
      "Es la idea que funda todo el cálculo.",
    ],
  },

  "mat-derivadas": {
    intro:
      "¿Cómo de rápido cambia algo en un instante EXACTO? El velocímetro de un coche responde a eso: no la velocidad media del viaje, sino la de este segundo. Esa 'velocidad instantánea de cambio' es la derivada, una de las ideas más poderosas de la ciencia.",
    goal: "interpretar la derivada como razón de cambio (pendiente instantánea).",
    sections: [
      {
        h: "De pendiente media a instantánea",
        tldr: "La derivada es la pendiente de la recta que 'toca' la curva en un punto.",
        code: "Pendiente media = cambio en y / cambio en x  (entre dos puntos)\nDerivada        = esa pendiente cuando los dos puntos\n                  se acercan hasta tocarse (¡un límite!)",
        body: [
          "Si acercas dos puntos de una curva hasta que casi se tocan, la recta que los une se convierte en la tangente: su pendiente es la derivada en ese punto.",
        ],
      },
      {
        h: "Qué significa en el mundo real",
        tldr: "La derivada es la RAPIDEZ del cambio: velocidad, aceleración, crecimiento.",
        code: "posición → (derivada) → velocidad → (derivada) → aceleración",
        tip: "No la veas como una regla mecánica sin sentido. La derivada responde '¿a qué ritmo cambia esto AHORA?'. Si la derivada es 0, el cambio se detiene un instante: por eso sirve para encontrar máximos y mínimos (la cima de una montaña tiene pendiente 0).",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "La derivada en un punto es…",
        options: [
          "el valor de la función ahí",
          "la pendiente de la tangente (razón de cambio instantánea)",
          "el área bajo la curva",
        ],
        answer: 1,
        why: "Es la pendiente instantánea: cuán rápido cambia la función.",
      },
      {
        kind: "choice",
        q: "La derivada de la posición respecto al tiempo es la…",
        options: ["aceleración", "velocidad", "distancia total"],
        answer: 1,
        why: "El ritmo de cambio de la posición es la velocidad.",
      },
      {
        kind: "choice",
        q: "Si la derivada en un punto es 0, significa que…",
        options: [
          "la función vale 0 ahí",
          "el cambio se detiene un instante (posible máximo o mínimo)",
          "hay un error",
        ],
        answer: 1,
        why: "Pendiente 0 = ni sube ni baja: cima o valle de la curva.",
      },
      {
        kind: "choice",
        q: "La derivada se define usando la idea de…",
        options: ["límite (acercar dos puntos)", "fracción", "porcentaje"],
        answer: 0,
        why: "Es el límite de la pendiente media cuando los puntos se acercan.",
      },
    ],
    activity: {
      title: "El velocímetro",
      steps: [
        "Piensa en un viaje: velocidad media (distancia/tiempo total) vs. lo que marca el velocímetro en un instante.",
        "Dibuja una curva y traza la recta que la 'toca' en un punto: esa pendiente es la derivada.",
        "Reto: en la cima de una parábola, convéncete de que la pendiente (derivada) es 0.",
      ],
    },
    selfCheck: [
      "Interpreto la derivada como pendiente/velocidad instantánea.",
      "Relaciono posición, velocidad y aceleración.",
      "Sé que derivada 0 indica un máximo o mínimo.",
    ],
    summary: [
      "La derivada es la razón de cambio instantánea (pendiente de la tangente).",
      "Se define como un límite (acercar dos puntos).",
      "Derivada 0 = cima o valle: sirve para optimizar.",
    ],
  },

  // ─────────────────────────────── Hito ───────────────────────────────
  "hito-mat-avanzado": {
    intro:
      "Cierre del árbol. Manejas funciones, resuelves ecuaciones de segundo grado y dominas la geometría métrica. Ya no calculas: MODELAS el mundo con matemáticas y estás preparado para el precálculo y el cálculo. Este hito lo confirma.",
    goal: "confirmar la preparación para precálculo y cálculo.",
    sections: [
      {
        h: "Lo que ya dominas",
        tldr: "Funciones, ecuaciones cuadráticas y geometría métrica (Pitágoras).",
        bullets: [
          "Entiendes una función como máquina entrada→salida y su gráfica.",
          "Resuelves cuadráticas y las relacionas con los cortes de la parábola.",
          "Aplicas Pitágoras para medir distancias.",
        ],
      },
      {
        h: "De calcular a modelar",
        tldr: "Las matemáticas avanzadas describen el cambio y la forma del mundo.",
        code: "función  →  representa una relación (p. ej. tiempo → distancia)\ncuadrática → describe trayectorias y áreas\nPitágoras → mide distancias en el plano",
        tip: "La señal de madurez es que ya no ves fórmulas sueltas, sino herramientas para modelar situaciones. Con esta base, el cálculo (límites y derivadas) es el siguiente paso natural.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Una función es, en esencia…",
        options: [
          "una máquina que da una salida única por entrada",
          "una lista de números",
          "un tipo de ángulo",
        ],
        answer: 0,
        why: "A cada entrada, una única salida.",
      },
      {
        kind: "choice",
        q: "Las soluciones de una cuadrática corresponden a…",
        options: [
          "los cortes de la parábola con el eje x",
          "el punto más alto",
          "la pendiente",
        ],
        answer: 0,
        why: "Donde la parábola cruza el eje x (y=0).",
      },
      {
        kind: "fill",
        q: "Catetos 3 y 4: ¿hipotenusa? (Pitágoras)",
        accept: ["5"],
        hint: "√(3²+4²).",
        why: "√25 = 5.",
      },
      {
        kind: "order",
        q: "Ordena la progresión hacia el cálculo:",
        items: [
          "Funciones (relaciones)",
          "Límites (acercarse a un valor)",
          "Derivadas (razón de cambio)",
        ],
        why: "El cálculo se construye: funciones → límites → derivadas.",
      },
    ],
    activity: {
      title: "Reto avanzado",
      steps: [
        "Modela una situación real con una función (p. ej. coste = 2·unidades + 5).",
        "Plantea y resuelve una cuadrática sencilla y relaciona sus soluciones con una parábola.",
        "Reto: explica con tus palabras qué medirías con una derivada en tu modelo.",
      ],
    },
    selfCheck: [
      "Entiendo funciones, cuadráticas y Pitágoras como herramientas.",
      "Modelo situaciones reales con matemáticas.",
      "Estoy listo para límites y derivadas.",
    ],
    summary: [
      "Dominas funciones, cuadráticas y geometría métrica.",
      "Pasas de calcular a MODELAR el mundo.",
      "Preparado para precálculo y cálculo.",
    ],
  },
};
