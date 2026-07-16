/**
 * CONTENIDO EDUCATIVO del árbol de Programación (base: Python).
 *
 * Lecciones interactivas (mismo tipo `Lesson` que Inglés) que ENSEÑAN, no solo
 * describen. Base pedagógica y técnica contrastada: documentación oficial de
 * Python (docs.python.org/es/3/tutorial), Harvard CS50, MIT 6.0001, The Odin
 * Project, freeCodeCamp y MDN. El código de los ejemplos va en `ipa` para
 * mostrarse en monoespaciada.
 *
 * Cobertura: el tronco de Fundamentos e Intermedio. Los nodos avanzados
 * conservan su ficha y se convertirán en lección en próximas iteraciones.
 */

import type { Lesson } from "@/modules/skill-tree/lesson";

export const PROG_LESSONS: Record<string, Lesson> = {
  "prog-que-es": {
    intro:
      "Programar es dar instrucciones exactas a una máquina para resolver un problema. La computadora es rapidísima pero literal: hace justo lo que le dices, ni más ni menos.",
    goal: "entender qué es un programa y cómo 'piensa' una computadora.",
    sections: [
      {
        h: "Un programa es una receta",
        tldr: "Una secuencia de pasos precisos que la máquina ejecuta en orden.",
        body: [
          "Igual que una receta de cocina, un programa lista pasos que se ejecutan de arriba abajo. La diferencia: la computadora no 'interpreta' ni improvisa; sigue las órdenes al pie de la letra.",
        ],
        examples: [
          {
            en: "Un primer programa",
            ipa: 'print("Hola, mundo")',
            es: "Muestra el texto «Hola, mundo» en pantalla.",
            note: "print() es una instrucción para mostrar información.",
          },
        ],
      },
      {
        h: "Por qué es literal (y por qué importa)",
        tldr: "Si el resultado es raro, casi siempre el error es tuyo, no de la máquina.",
        bullets: [
          "La computadora no adivina lo que quisiste decir.",
          "Un punto o una comilla de más cambian todo.",
          "Aprender a programar es aprender a pensar con precisión.",
        ],
        tip: "No memorices: experimenta. Cambia una línea, ejecútala y observa qué pasa. Programar se aprende programando.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Qué es un programa?",
        options: [
          "Una máquina que piensa por sí sola",
          "Una secuencia de instrucciones precisas que se ejecutan en orden",
          "Un texto que la computadora interpreta libremente",
        ],
        answer: 1,
        why: "Un programa es una secuencia de pasos exactos; la máquina los ejecuta literalmente.",
      },
      {
        kind: "choice",
        q: "Tu programa da un resultado inesperado. Lo más probable es que…",
        options: [
          "La computadora se equivocó",
          "Tus instrucciones no dicen exactamente lo que creías",
          "El lenguaje está roto",
        ],
        answer: 1,
        why: "La máquina hace justo lo que le dijiste; el error suele estar en las instrucciones.",
      },
      {
        kind: "fill",
        q: 'Completa la instrucción para mostrar texto: ___("Hola")',
        accept: ["print"],
        hint: "La función de mostrar en pantalla.",
        why: "print() muestra información en pantalla.",
      },
    ],
    activity: {
      title: "Tu primera línea",
      steps: [
        "Abre un entorno de Python (más adelante verás cómo; por ahora usa uno online).",
        'Escribe: print("Hola, " + "mundo")',
        "Ejecútalo y luego cambia el texto por tu nombre.",
      ],
    },
    selfCheck: [
      "Explico con mis palabras qué es un programa.",
      "Entiendo que la computadora es literal.",
      "Reconozco que el error casi siempre está en mis instrucciones.",
    ],
    summary: [
      "Programar = dar pasos precisos a una máquina literal.",
      "print() muestra información en pantalla.",
      "Se aprende experimentando, no memorizando.",
    ],
  },

  "prog-pensamiento": {
    intro:
      "Antes de escribir código, hay que pensar la solución. El pensamiento computacional es la habilidad de descomponer un problema grande en pasos pequeños y resolubles.",
    goal: "descomponer un problema en pasos pequeños y ordenados.",
    sections: [
      {
        h: "Las cuatro herramientas mentales",
        tldr: "Descomponer, reconocer patrones, abstraer y algoritmizar.",
        bullets: [
          "Descomposición: partir un problema grande en trozos pequeños.",
          "Patrones: notar lo que se repite para reutilizar la solución.",
          "Abstracción: quedarte con lo esencial e ignorar el ruido.",
          "Algoritmo: escribir los pasos en orden, sin ambigüedad.",
        ],
      },
      {
        h: "Del problema a los pasos",
        tldr: "Un algoritmo es la receta antes de traducirla a código.",
        examples: [
          {
            en: "Problema: hacer un té",
            ipa: "1 hervir agua\n2 poner la bolsita\n3 esperar 3 min\n4 servir",
            es: "Pasos claros y ordenados = algoritmo. Programar es traducir esto a un lenguaje.",
          },
        ],
        tip: "Escribe primero el algoritmo en español (pseudocódigo). Traducir a código es la parte fácil; pensar bien es la difícil.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Partir un problema grande en subproblemas pequeños se llama…",
        options: ["abstracción", "descomposición", "iteración"],
        answer: 1,
        why: "Descomposición: dividir para vencer.",
      },
      {
        kind: "choice",
        q: "Un 'algoritmo' es…",
        options: [
          "un lenguaje de programación",
          "una secuencia de pasos ordenados y sin ambigüedad para resolver un problema",
          "un tipo de computadora",
        ],
        answer: 1,
        why: "Un algoritmo es la receta de pasos; independiente del lenguaje.",
      },
      {
        kind: "choice",
        q: "Quedarte solo con lo esencial de un problema es…",
        options: ["abstracción", "descomposición", "depuración"],
        answer: 0,
        why: "Abstracción: ignorar el detalle irrelevante.",
      },
      {
        kind: "order",
        q: "Ordena los pasos del algoritmo para preparar un té:",
        items: [
          "Hervir el agua",
          "Poner la bolsita en la taza",
          "Verter el agua caliente",
          "Esperar 3 minutos",
          "Retirar la bolsita",
        ],
        why: "Un algoritmo es una secuencia ORDENADA: cambiar el orden cambia el resultado.",
      },
      {
        kind: "match",
        q: "Empareja cada idea del pensamiento computacional con su significado:",
        pairs: [
          { left: "Descomposición", right: "Partir el problema en trozos pequeños" },
          { left: "Abstracción", right: "Quedarte solo con lo esencial" },
          { left: "Algoritmo", right: "Secuencia de pasos sin ambigüedad" },
        ],
        why: "Son las tres herramientas para pensar antes de teclear.",
      },
    ],
    activity: {
      title: "Algoritmo de la vida real",
      steps: [
        "Elige una tarea cotidiana (preparar un sándwich, llegar al trabajo).",
        "Escribe sus pasos numerados, sin saltarte nada obvio.",
        "Dáselo a alguien y que lo siga LITERALMENTE: verás qué pasos faltaban.",
      ],
    },
    selfCheck: [
      "Descompongo un problema en subproblemas.",
      "Escribo un algoritmo en pseudocódigo antes de programar.",
      "Distingo lo esencial del ruido (abstracción).",
    ],
    summary: [
      "Pensamiento computacional: descomponer, patrones, abstraer, algoritmizar.",
      "El algoritmo es la receta; el código, su traducción.",
      "Piensa primero en español; luego traduce.",
    ],
  },

  "prog-entorno": {
    intro:
      "Para programar necesitas un sitio donde escribir y ejecutar código. Entender el ciclo «escribir → ejecutar → ver resultado» es la base de todo tu trabajo.",
    goal: "ejecutar tu propio código y leer su salida.",
    sections: [
      {
        h: "El ciclo de ejecución",
        tldr: "Escribes código, lo ejecutas y la máquina muestra un resultado.",
        body: [
          "Un intérprete de Python lee tu código línea por línea y lo ejecuta. Puedes usar un entorno online (sin instalar nada) para empezar hoy mismo.",
        ],
        examples: [
          {
            en: "Ejecutar y ver la salida",
            ipa: 'print("2 + 2 =", 2 + 2)',
            es: "Imprime: 2 + 2 = 4",
            note: "print puede combinar texto y cálculos separados por comas.",
          },
        ],
      },
      {
        h: "Comentarios: notas para humanos",
        tldr: "El texto tras # lo ignora la máquina; es para ti.",
        examples: [
          {
            en: "Un comentario",
            ipa: "# esto no se ejecuta\nprint(3)  # imprime 3",
            es: "Los comentarios explican el código sin afectarlo.",
          },
        ],
        tip: "Empieza en un entorno online (como el tutorial oficial de Python o repl.it). Instalar Python en tu equipo puede esperar a que tengas soltura.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Qué imprime print(2 + 2)?",
        options: ["2 + 2", "4", "22"],
        answer: 1,
        why: "Python evalúa la operación: 2 + 2 = 4.",
      },
      {
        kind: "choice",
        q: "En Python, el texto después de # …",
        options: [
          "se ejecuta como código",
          "es un comentario que la máquina ignora",
          "da un error",
        ],
        answer: 1,
        why: "# inicia un comentario; no se ejecuta.",
      },
      {
        kind: "fill",
        q: 'Símbolo que inicia un comentario en Python:',
        accept: ["#", "almohadilla", "numeral", "hashtag"],
        hint: "Un solo carácter.",
        why: "El # inicia un comentario de línea.",
      },
    ],
    activity: {
      title: "Explora la salida",
      steps: [
        "En un entorno de Python, imprime tu nombre y tu edad en la misma línea.",
        "Añade un comentario que explique qué hace la línea.",
        "Prueba a imprimir una operación matemática dentro de print().",
      ],
    },
    selfCheck: [
      "Ejecuto código y leo su salida.",
      "Uso print() para mostrar texto y cálculos.",
      "Escribo comentarios con #.",
    ],
    summary: [
      "Ciclo: escribir → ejecutar → ver resultado.",
      "print() muestra texto y resultados.",
      "# crea comentarios para humanos, ignorados por la máquina.",
    ],
  },

  "prog-variables": {
    intro:
      "Una variable es una caja con nombre donde guardas un dato para usarlo después. Son la memoria de tu programa.",
    goal: "guardar y reutilizar datos con variables y tipos básicos.",
    sections: [
      {
        h: "Asignar: nombre = valor",
        tldr: "El signo = guarda el valor de la derecha en el nombre de la izquierda.",
        examples: [
          {
            en: "Crear variables",
            ipa: 'nombre = "Ana"\nedad = 25',
            es: "Guarda «Ana» en nombre y 25 en edad.",
            note: "= NO es igualdad matemática: es asignación.",
          },
          {
            en: "Usarlas",
            ipa: 'print(nombre, "tiene", edad)',
            es: "Imprime: Ana tiene 25",
          },
        ],
      },
      {
        h: "Tipos básicos",
        tldr: "Cada dato tiene un tipo, y el tipo define qué puedes hacer con él.",
        compare: {
          left: {
            title: "Texto y verdad",
            points: [
              'str (texto): "hola", "42"',
              "bool (verdadero/falso): True, False",
            ],
          },
          right: {
            title: "Números",
            points: ["int (entero): 25, -3", "float (decimal): 3.14, 0.5"],
          },
          note: "«42» (con comillas) es texto; 42 (sin comillas) es un número.",
        },
        more: [
          "type(x) te dice el tipo de x: type(25) → <class 'int'>.",
          "Puedes convertir tipos: int(\"3\") → 3, str(3) → \"3\".",
        ],
        tip: "Usa nombres descriptivos: 'edad' o 'total_ventas', no 'x' o 'a'. Tu yo del futuro te lo agradecerá.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Tras «x = 10», ¿qué guarda x?",
        options: ["el texto 'x'", "el número 10", "nada"],
        answer: 1,
        why: "La asignación guarda el valor 10 en la variable x.",
      },
      {
        kind: "choice",
        q: '¿De qué tipo es "42" (con comillas)?',
        options: ["int (número)", "str (texto)", "bool"],
        answer: 1,
        why: "Con comillas es una cadena de texto (str), no un número.",
      },
      {
        kind: "fill",
        q: "Guarda el número 7 en una variable llamada dias: ___",
        accept: ["dias = 7", "dias=7"],
        hint: "nombre = valor",
        why: "dias = 7 asigna el valor 7 a la variable dias.",
      },
      {
        kind: "choice",
        q: "¿Qué operador ASIGNA un valor a una variable?",
        options: ["==", "=", "=>"],
        answer: 1,
        why: "= asigna; == (lo verás luego) compara.",
      },
    ],
    activity: {
      title: "Ficha de datos",
      steps: [
        "Crea variables para tu nombre (str), edad (int) y altura en metros (float).",
        "Imprime una frase que las combine.",
        "Usa type() para comprobar el tipo de cada una.",
      ],
    },
    selfCheck: [
      "Creo variables con nombre = valor.",
      "Distingo str, int, float y bool.",
      "Uso nombres descriptivos.",
    ],
    summary: [
      "Variable = caja con nombre para un dato.",
      "= asigna (no es igualdad matemática).",
      "Tipos básicos: str, int, float, bool.",
    ],
  },

  "prog-operadores": {
    intro:
      "Con operadores haces cálculos y comparaciones. Son las herramientas con las que tu programa 'razona' y decide.",
    goal: "combinar valores con operadores aritméticos y de comparación.",
    sections: [
      {
        h: "Aritméticos",
        tldr: "Suma, resta, multiplica… y dos que sorprenden.",
        examples: [
          { en: "Básicos", ipa: "3 + 2 → 5 ,  3 * 2 → 6", es: "suma y multiplicación." },
          { en: "División", ipa: "7 / 2 → 3.5   (decimal)", es: "/ siempre da float." },
          { en: "División entera y resto", ipa: "7 // 2 → 3 ,  7 % 2 → 1", es: "// descarta decimales; % da el resto." },
          { en: "Potencia", ipa: "2 ** 3 → 8", es: "** eleva (2 al cubo)." },
        ],
      },
      {
        h: "Comparación: dan True o False",
        tldr: "Preguntan algo y responden verdadero o falso.",
        compare: {
          left: {
            title: "Igualdad",
            points: ["== ¿son iguales? (5 == 5 → True)", "!= ¿son distintos? (5 != 3 → True)"],
          },
          right: {
            title: "Orden",
            points: ["> mayor, < menor", ">= mayor o igual, <= menor o igual"],
          },
          note: "Ojo: = asigna, == compara. Es el error nº1 del principiante.",
        },
        tip: "El resto (%) es más útil de lo que parece: n % 2 == 0 comprueba si n es par.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Cuánto es 2 ** 3?",
        options: ["6", "8", "9"],
        answer: 1,
        why: "** es potencia: 2 al cubo = 8.",
      },
      {
        kind: "choice",
        q: "¿Cuánto es 7 % 2?",
        options: ["3", "1", "3.5"],
        answer: 1,
        why: "% da el resto de la división: 7 entre 2 sobra 1.",
      },
      {
        kind: "choice",
        q: "Para COMPARAR si dos valores son iguales se usa…",
        options: ["=", "==", "!="],
        answer: 1,
        why: "== compara; = asigna.",
      },
      {
        kind: "fill",
        q: "Escribe la expresión que comprueba si n es par (resto 0 al dividir entre 2): n ___ 2 == 0",
        accept: ["%"],
        hint: "El operador de resto.",
        why: "n % 2 == 0 es True cuando n es par.",
      },
    ],
    activity: {
      title: "Calculadora mental",
      steps: [
        "Predice el resultado de: 10 // 3, 10 % 3, 3 ** 2, 9 / 2.",
        "Ejecuta cada uno y comprueba.",
        "Escribe una expresión que diga si 24 es par (debe dar True).",
      ],
    },
    selfCheck: [
      "Uso +, -, *, /, //, %, **.",
      "Sé que / da decimal y // entero.",
      "Distingo = (asignar) de == (comparar).",
    ],
    summary: [
      "Aritméticos: + - * / // % ** (ojo con / vs // y con %).",
      "Comparación devuelve True/False.",
      "= asigna, == compara.",
    ],
  },

  "prog-entrada-salida": {
    intro:
      "Un programa útil habla con el usuario: muestra información (salida) y recibe datos (entrada). Así deja de ser un monólogo.",
    goal: "mostrar datos con print() y pedirlos con input().",
    sections: [
      {
        h: "print(): la salida",
        tldr: "print() muestra información en pantalla; las f-strings la componen con claridad.",
        body: [
          "print() escribe en pantalla lo que le pases: texto, números o varias cosas separadas por comas.",
          "Para insertar valores dentro de un texto, lo más limpio son las f-strings: un texto con f delante y variables entre llaves.",
        ],
        code: "print(\"Hola\", \"mundo\")        # Hola mundo\n\nnombre, edad = \"Ana\", 25\nprint(f\"{nombre} tiene {edad} años\")   # Ana tiene 25 años",
        tip: "Las f-strings (f\"...{variable}...\") son la forma moderna y legible de mezclar texto y valores. Evita concatenar con + y convertir a mano.",
      },
      {
        h: "input() siempre devuelve texto",
        tldr: "Lo que teclea el usuario llega como str, aunque sean números.",
        examples: [
          {
            en: "Pedir un dato",
            ipa: 'nombre = input("¿Cómo te llamas? ")\nprint("Hola,", nombre)',
            es: "input muestra el mensaje y guarda lo que escriba el usuario.",
          },
          {
            en: "Convertir a número",
            ipa: 'edad = int(input("Tu edad: "))',
            es: "int() convierte el texto a entero para poder calcular.",
            note: "Sin int(), «5» + 1 daría error (texto + número).",
          },
        ],
        tip: "Regla de oro: si vas a hacer cálculos con lo que teclea el usuario, conviértelo con int() o float() primero.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Qué tipo devuelve input()?",
        options: ["int (número)", "str (texto) siempre", "depende de lo que teclee"],
        answer: 1,
        why: "input() siempre devuelve una cadena (str).",
      },
      {
        kind: "fill",
        q: 'Convierte a entero lo que teclea el usuario: n = ___(input("Número: "))',
        accept: ["int"],
        hint: "Función de conversión a entero.",
        why: "int() convierte el texto a número entero.",
      },
      {
        kind: "choice",
        q: 'Si edad viene de input() sin convertir, ¿qué pasa con edad + 1?',
        options: [
          "Suma bien",
          "Da error: no se puede sumar texto y número",
          "Convierte solo",
        ],
        answer: 1,
        why: "input() da texto; sumar texto + número lanza TypeError.",
      },
    ],
    activity: {
      title: "Saludo personalizado",
      steps: [
        "Pide el nombre y el año de nacimiento al usuario.",
        "Convierte el año con int() y calcula la edad aproximada (2025 - año).",
        "Imprime: «Hola NOMBRE, tienes unos X años».",
      ],
    },
    selfCheck: [
      "Muestro datos con print().",
      "Pido datos con input().",
      "Convierto la entrada con int()/float() antes de calcular.",
    ],
    summary: [
      "print() = salida; input() = entrada.",
      "input() siempre devuelve texto (str).",
      "Convierte con int()/float() para calcular.",
    ],
  },

  "prog-strings": {
    intro:
      "El texto (strings) está en todas partes: nombres, mensajes, datos. Manejarlo bien es una habilidad diaria del programador.",
    goal: "manipular texto: unir, medir y transformar cadenas.",
    sections: [
      {
        h: "Operaciones esenciales",
        tldr: "Unir con +, medir con len(), y f-strings para insertar valores.",
        examples: [
          { en: "Unir (concatenar)", ipa: '"Hola" + " " + "mundo"', es: "→ «Hola mundo»" },
          { en: "Longitud", ipa: 'len("Python")', es: "→ 6 (número de caracteres)" },
          {
            en: "f-string (recomendado)",
            ipa: 'edad = 25\nf"Tengo {edad} años"',
            es: "→ «Tengo 25 años». Inserta variables entre {}.",
          },
        ],
      },
      {
        h: "Métodos útiles",
        tldr: "Las cadenas traen 'herramientas' incorporadas.",
        bullets: [
          '.upper() / .lower(): "hola".upper() → "HOLA"',
          '.strip(): quita espacios sobrantes de los extremos',
          '.replace("a","o"): reemplaza texto',
        ],
        more: [
          'Indexar: "Python"[0] → "P" (empieza en 0).',
          'Rebanar (slicing): "Python"[0:3] → "Pyt".',
        ],
        tip: "Usa f-strings siempre que mezcles texto y variables: son más legibles que concatenar con +.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: '¿Cuánto es len("hola")?',
        options: ["3", "4", "5"],
        answer: 1,
        why: '"hola" tiene 4 caracteres.',
      },
      {
        kind: "choice",
        q: '¿Qué produce "ab" + "cd"?',
        options: ['"abcd"', '"ab cd"', "error"],
        answer: 0,
        why: "+ concatena cadenas: «abcd».",
      },
      {
        kind: "fill",
        q: 'Completa el f-string para saludar: f"Hola, {___}" (variable nombre)',
        accept: ["nombre"],
        hint: "El nombre de la variable entre llaves.",
        why: "En un f-string, {nombre} inserta el valor de la variable.",
      },
      {
        kind: "choice",
        q: '"Python"[0] devuelve…',
        options: ['"P"', '"n"', '"Python"'],
        answer: 0,
        why: "El índice 0 es el primer carácter: «P».",
      },
    ],
    activity: {
      title: "Tarjeta de presentación",
      steps: [
        "Guarda tu nombre y ciudad en variables.",
        "Usa un f-string para imprimir: «Soy NOMBRE y vivo en CIUDAD».",
        "Imprime tu nombre en mayúsculas con .upper().",
      ],
    },
    selfCheck: [
      "Concateno con + y mido con len().",
      "Uso f-strings para insertar variables.",
      "Aplico métodos como .upper(), .lower(), .strip().",
    ],
    summary: [
      "Unir: +. Medir: len(). Insertar: f\"...{var}...\".",
      "Métodos: .upper(), .lower(), .strip(), .replace().",
      "Indexar desde 0; rebanar con [inicio:fin].",
    ],
  },

  "prog-condicionales": {
    intro:
      "Los condicionales dan a tu programa la capacidad de DECIDIR: hacer una cosa u otra según se cumpla una condición. Es donde el código empieza a parecer inteligente.",
    goal: "tomar decisiones en el código con if / elif / else.",
    sections: [
      {
        h: "if / elif / else",
        tldr: "Si se cumple la condición, ejecuta su bloque; si no, prueba el siguiente.",
        examples: [
          {
            en: "Decidir",
            ipa: 'edad = 20\nif edad >= 18:\n    print("Adulto")\nelse:\n    print("Menor")',
            es: "Imprime «Adulto» porque 20 >= 18.",
            note: "Los dos puntos y la INDENTACIÓN (4 espacios) marcan el bloque.",
          },
          {
            en: "Varios casos",
            ipa: 'if nota >= 9:\n    print("Sobresaliente")\nelif nota >= 5:\n    print("Aprobado")\nelse:\n    print("Suspenso")',
            es: "elif prueba condiciones adicionales en orden.",
          },
        ],
      },
      {
        h: "La indentación no es decorativa",
        tldr: "En Python, los espacios definen qué código pertenece a cada bloque.",
        bullets: [
          "Todo lo indentado bajo el if forma su bloque.",
          "Una indentación mal puesta cambia el significado o da error.",
          "La condición debe dar un booleano (True/False).",
        ],
        tip: "Combina condiciones con and / or: if edad >= 18 and tiene_entrada: … Recuerda == para comparar, no =.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Qué imprime? x = 5; if x > 3: print(\"A\") else: print(\"B\")",
        options: ['"A"', '"B"', "error"],
        answer: 0,
        why: "5 > 3 es True, así que ejecuta el bloque del if: «A».",
      },
      {
        kind: "choice",
        q: "¿Para qué sirve 'elif'?",
        options: [
          "Repetir código",
          "Probar otra condición si la anterior fue falsa",
          "Terminar el programa",
        ],
        answer: 1,
        why: "elif encadena condiciones alternativas.",
      },
      {
        kind: "choice",
        q: "En Python, ¿qué delimita el bloque de un if?",
        options: ["Las llaves { }", "La indentación (espacios)", "El punto y coma"],
        answer: 1,
        why: "Python usa la indentación para agrupar el código de un bloque.",
      },
      {
        kind: "fill",
        q: "Completa la palabra clave para el caso por defecto: if ...: ... ___: ...",
        accept: ["else"],
        hint: "Se ejecuta si nada anterior se cumplió.",
        why: "else cubre el resto de casos.",
      },
    ],
    activity: {
      title: "Clasificador de números",
      steps: [
        "Pide un número al usuario y conviértelo a int.",
        "Imprime «positivo», «negativo» o «cero» según corresponda (if/elif/else).",
        "Añade: di si además es par o impar (usa %).",
      ],
    },
    selfCheck: [
      "Escribo if/elif/else con condiciones booleanas.",
      "Indento correctamente los bloques.",
      "Combino condiciones con and/or.",
    ],
    summary: [
      "if decide; elif añade casos; else es el resto.",
      "La indentación define el bloque (no las llaves).",
      "La condición debe ser True/False; usa == para comparar.",
    ],
  },

  "prog-bucles": {
    intro:
      "Los bucles repiten trabajo sin copiar y pegar. Son lo que hace que la computadora brille: repetir mil veces sin cansarse ni equivocarse.",
    goal: "repetir acciones con for y while.",
    sections: [
      {
        h: "for: repetir un número de veces o recorrer",
        tldr: "Ideal cuando sabes sobre qué iterar.",
        examples: [
          {
            en: "Repetir 3 veces",
            ipa: "for i in range(3):\n    print(i)",
            es: "Imprime 0, 1, 2. range(3) genera 0,1,2 (no incluye el 3).",
          },
          {
            en: "Recorrer una lista",
            ipa: 'for fruta in ["pera", "uva"]:\n    print(fruta)',
            es: "Repite el bloque una vez por elemento.",
          },
        ],
      },
      {
        h: "while: repetir mientras se cumpla una condición",
        tldr: "Ideal cuando no sabes cuántas veces, pero sí cuándo parar.",
        examples: [
          {
            en: "Contar hasta 3",
            ipa: "n = 0\nwhile n < 3:\n    print(n)\n    n = n + 1",
            es: "Repite mientras n < 3; n crece hasta salir.",
            note: "¡Sin el n = n + 1 sería un bucle infinito!",
          },
        ],
        tip: "range(a, b) va de a hasta b-1. range(1, 5) → 1,2,3,4. Recuérdalo para no equivocarte por uno (off-by-one).",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Qué imprime for i in range(3): print(i)?",
        options: ["1 2 3", "0 1 2", "0 1 2 3"],
        answer: 1,
        why: "range(3) genera 0, 1, 2 (empieza en 0, no incluye 3).",
      },
      {
        kind: "choice",
        q: "¿Cuándo conviene 'while' sobre 'for'?",
        options: [
          "Cuando sabes exactamente cuántas veces repetir",
          "Cuando repites mientras se cumpla una condición, sin saber cuántas veces",
          "Nunca, for siempre es mejor",
        ],
        answer: 1,
        why: "while repite según una condición; for, un número conocido de iteraciones.",
      },
      {
        kind: "choice",
        q: "Un bucle while que nunca cambia su condición produce…",
        options: ["un error de sintaxis", "un bucle infinito", "nada"],
        answer: 1,
        why: "Si la condición nunca se vuelve falsa, el bucle no termina.",
      },
      {
        kind: "fill",
        q: "Función que genera una secuencia de números para el for: ___(5)",
        accept: ["range"],
        hint: "range…",
        why: "range(5) genera 0,1,2,3,4.",
      },
    ],
    activity: {
      title: "Tabla de multiplicar",
      steps: [
        "Pide un número al usuario.",
        "Con un for y range(1, 11), imprime su tabla del 1 al 10.",
        "Reto: hazlo también con un while.",
      ],
    },
    selfCheck: [
      "Uso for con range() y para recorrer listas.",
      "Uso while con una condición de parada.",
      "Evito bucles infinitos actualizando la condición.",
    ],
    summary: [
      "for: número conocido de repeticiones o recorrer.",
      "while: repetir mientras se cumpla una condición.",
      "range(a,b) va de a hasta b-1.",
    ],
  },

  "prog-listas": {
    intro:
      "Una lista guarda muchos valores en una sola variable, en orden. Es la estructura de datos que más usarás desde el primer día.",
    goal: "almacenar y manipular colecciones ordenadas con listas.",
    sections: [
      {
        h: "Crear, leer y modificar",
        tldr: "Corchetes para crear; índices (desde 0) para acceder.",
        examples: [
          { en: "Crear", ipa: 'frutas = ["pera", "uva", "kiwi"]', es: "Una lista de 3 textos." },
          { en: "Acceder (desde 0)", ipa: "frutas[0] → 'pera'", es: "El primer elemento es el índice 0." },
          { en: "Añadir", ipa: 'frutas.append("mango")', es: "Añade al final." },
          { en: "Tamaño", ipa: "len(frutas) → 4", es: "Número de elementos." },
        ],
      },
      {
        h: "Recorrer una lista",
        tldr: "El for encaja perfecto con las listas.",
        examples: [
          {
            en: "Recorrer",
            ipa: "for fruta in frutas:\n    print(fruta)",
            es: "Repite el bloque una vez por elemento.",
          },
        ],
        more: [
          "frutas[-1] es el último elemento.",
          "frutas[1:3] es una sublista (rebanado): elementos 1 y 2.",
          "in comprueba pertenencia: \"uva\" in frutas → True.",
        ],
        tip: "Los índices empiezan en 0, así que el último elemento de una lista de N está en el índice N-1. Fuente clásica de errores.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: 'Si nums = [10, 20, 30], ¿cuánto vale nums[1]?',
        options: ["10", "20", "30"],
        answer: 1,
        why: "El índice 1 es el segundo elemento: 20 (se cuenta desde 0).",
      },
      {
        kind: "fill",
        q: 'Método para añadir "x" al final de la lista L: L.___("x")',
        accept: ["append"],
        hint: "append…",
        why: ".append() agrega un elemento al final.",
      },
      {
        kind: "choice",
        q: "Si L = [1,2,3,4], ¿cuánto es len(L)?",
        options: ["3", "4", "5"],
        answer: 1,
        why: "La lista tiene 4 elementos.",
      },
      {
        kind: "choice",
        q: "¿Cuál es el índice del PRIMER elemento de una lista?",
        options: ["1", "0", "-1"],
        answer: 1,
        why: "En Python (y casi todos los lenguajes) se cuenta desde 0.",
      },
    ],
    activity: {
      title: "Lista de la compra",
      steps: [
        "Crea una lista con 4 productos.",
        "Añade uno con .append() e imprime cuántos hay con len().",
        "Recorre la lista con un for e imprime «Comprar: PRODUCTO».",
      ],
    },
    selfCheck: [
      "Creo listas y accedo por índice (desde 0).",
      "Añado con .append() y mido con len().",
      "Recorro listas con for.",
    ],
    summary: [
      "Lista = colección ordenada; se crea con [ ].",
      "Índices desde 0; el último es len-1 o [-1].",
      ".append() añade; for recorre.",
    ],
  },

  "hito-prog-fundamentos": {
    intro:
      "¡Primer hito! Ya tienes los ladrillos con los que se construye CUALQUIER programa: datos, decisiones, repetición y colecciones. Este nodo integra y confirma lo aprendido.",
    goal: "confirmar que dominas los fundamentos antes de las funciones.",
    sections: [
      {
        h: "¿Qué puedes hacer ya?",
        tldr: "Escribir programas pequeños pero completos.",
        bullets: [
          "Guardar datos en variables y elegir el tipo correcto.",
          "Calcular y comparar con operadores.",
          "Decidir con if/elif/else y repetir con for/while.",
          "Guardar colecciones en listas y recorrerlas.",
        ],
      },
      {
        h: "Repaso integrado",
        tldr: "Estos cuatro pilares aparecen en todo programa.",
        tip: "Si algo cojea, vuelve a esa hoja. Unas bases firmes hacen que las funciones y las estructuras de datos sean fáciles.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Qué imprime? for i in range(2): print(i)",
        options: ["0 1", "1 2", "0 1 2"],
        answer: 0,
        why: "range(2) → 0, 1.",
      },
      {
        kind: "choice",
        q: "x = 4; ¿x % 2 == 0 es…?",
        options: ["True (par)", "False", "error"],
        answer: 0,
        why: "4 es par: el resto entre 2 es 0.",
      },
      {
        kind: "fill",
        q: "Añade 5 al final de la lista L: L.___(5)",
        accept: ["append"],
        hint: "Método de listas.",
        why: "L.append(5) agrega 5 al final.",
      },
      {
        kind: "choice",
        q: "nums = [3,6,9]; ¿nums[2]?",
        options: ["3", "6", "9"],
        answer: 2,
        why: "Índice 2 = tercer elemento = 9.",
      },
    ],
    activity: {
      title: "Mini-programa: promedio de notas",
      steps: [
        "Crea una lista con 5 notas.",
        "Recórrela sumando todas (usa una variable acumuladora).",
        "Imprime el promedio y di si está aprobado (>= 5) con un if.",
      ],
    },
    selfCheck: [
      "Uso variables y tipos correctamente.",
      "Decido con if/elif/else.",
      "Repito con for/while.",
      "Manejo listas (crear, añadir, recorrer).",
    ],
    summary: [
      "Fundamentos = datos + decisiones + repetición + colecciones.",
      "Con esto ya escribes programas completos.",
      "Bases firmes hacen fácil lo que viene.",
    ],
  },

  "prog-funciones": {
    intro:
      "Una función es un bloque de código con nombre que puedes reutilizar. Son la herramienta nº1 contra la repetición y el desorden: escribe una vez, usa muchas.",
    goal: "crear y reutilizar bloques de código con funciones.",
    sections: [
      {
        h: "Definir y llamar",
        tldr: "def crea la función; los () la ejecutan (la 'llaman').",
        examples: [
          {
            en: "Definir",
            ipa: "def saludar(nombre):\n    print(\"Hola,\", nombre)",
            es: "Define una función que recibe 'nombre' (un parámetro).",
          },
          {
            en: "Llamar",
            ipa: 'saludar("Ana")',
            es: "Ejecuta la función con el argumento «Ana» → «Hola, Ana».",
          },
        ],
      },
      {
        h: "return: devolver un resultado",
        tldr: "print MUESTRA; return DEVUELVE un valor para seguir usándolo.",
        examples: [
          {
            en: "Devolver",
            ipa: "def doble(x):\n    return x * 2\n\nresultado = doble(5)  # 10",
            es: "return entrega el valor a quien llamó la función.",
            note: "Sin return, la función devuelve None (nada).",
          },
        ],
        compare: {
          left: {
            title: "print()",
            points: ["Muestra en pantalla", "No puedes reutilizar el valor"],
          },
          right: {
            title: "return",
            points: ["Devuelve un valor", "Puedes guardarlo y seguir usándolo"],
          },
          note: "Confundir print con return es un error clásico al empezar.",
        },
        tip: "Una función debería hacer UNA cosa y tener un nombre que la describa (calcular_iva, no hacer_cosas).",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Qué palabra clave define una función en Python?",
        options: ["function", "def", "func"],
        answer: 1,
        why: "En Python se define con 'def'.",
      },
      {
        kind: "choice",
        q: "def doble(x): return x*2 — ¿cuánto vale doble(4)?",
        options: ["4", "8", "None"],
        answer: 1,
        why: "Devuelve 4*2 = 8.",
      },
      {
        kind: "choice",
        q: "¿Qué diferencia hay entre print y return?",
        options: [
          "Ninguna",
          "print muestra; return devuelve un valor reutilizable",
          "return muestra; print devuelve",
        ],
        answer: 1,
        why: "print muestra en pantalla; return entrega un valor a quien llamó.",
      },
      {
        kind: "fill",
        q: "Completa para devolver la suma: def suma(a, b): ___ a + b",
        accept: ["return"],
        hint: "Palabra clave que devuelve un valor.",
        why: "return a + b entrega la suma.",
      },
    ],
    activity: {
      title: "Tu caja de herramientas",
      steps: [
        "Escribe una función area_rectangulo(base, altura) que DEVUELVA el área.",
        "Llámala con dos valores y guarda el resultado en una variable.",
        "Escribe otra función que salude por nombre y pruébala con 3 nombres.",
      ],
    },
    selfCheck: [
      "Defino funciones con def y parámetros.",
      "Llamo funciones con argumentos.",
      "Uso return para devolver valores y distingo return de print.",
    ],
    summary: [
      "def define; los () llaman.",
      "Parámetros = entradas; return = salida.",
      "print muestra, return devuelve (¡no los confundas!).",
    ],
  },

  "prog-diccionarios": {
    intro:
      "Un diccionario guarda pares clave→valor: como una agenda donde buscas por nombre y obtienes el teléfono. Es la estructura para datos con etiqueta.",
    goal: "guardar y consultar datos por clave con diccionarios.",
    sections: [
      {
        h: "Clave → valor",
        tldr: "Accedes por clave, no por posición.",
        examples: [
          {
            en: "Crear",
            ipa: 'persona = {"nombre": "Ana", "edad": 25}',
            es: "Dos pares: nombre→Ana, edad→25.",
          },
          { en: "Leer", ipa: 'persona["nombre"] → "Ana"', es: "Se accede por la clave." },
          { en: "Añadir / cambiar", ipa: 'persona["ciudad"] = "Bogotá"', es: "Crea o actualiza la clave." },
        ],
      },
      {
        h: "Listas vs. diccionarios",
        tldr: "Elige según cómo necesitas encontrar los datos.",
        compare: {
          left: {
            title: "Lista [ ]",
            points: ["Ordenada, por posición", "lista[0], lista[1]", "Ideal para secuencias"],
          },
          right: {
            title: "Diccionario { }",
            points: ["Por clave con significado", 'd["nombre"]', "Ideal para datos etiquetados"],
          },
          note: "¿El orden importa? → lista. ¿Buscas por nombre? → diccionario.",
        },
        more: [
          'Recorrer: for clave in persona: print(clave, persona[clave]).',
          '"edad" in persona → True comprueba si existe la clave.',
        ],
        tip: "Acceder a una clave que no existe da error (KeyError). Usa persona.get(\"clave\") para obtener None en vez de un error.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: 'd = {"a": 1, "b": 2}; ¿cuánto vale d["b"]?',
        options: ["1", "2", "b"],
        answer: 1,
        why: "Se accede por clave: d['b'] es 2.",
      },
      {
        kind: "choice",
        q: "¿Cuándo usar un diccionario en vez de una lista?",
        options: [
          "Cuando el orden por posición es lo importante",
          "Cuando quieres buscar valores por una clave con significado",
          "Nunca, son iguales",
        ],
        answer: 1,
        why: "El diccionario brilla para datos etiquetados que buscas por clave.",
      },
      {
        kind: "fill",
        q: 'Añade la clave "pais" con valor "Colombia" a d: d[___] = "Colombia"',
        accept: ['"pais"', "'pais'", "pais"],
        hint: "La clave entre comillas.",
        why: 'd["pais"] = "Colombia" crea el par.',
      },
    ],
    activity: {
      title: "Ficha con diccionario",
      steps: [
        "Crea un diccionario con tus datos: nombre, edad, ciudad.",
        "Añade una clave nueva (por ejemplo, hobby).",
        "Recórrelo e imprime «clave: valor» de cada par.",
      ],
    },
    selfCheck: [
      "Creo diccionarios con pares clave→valor.",
      "Leo, añado y actualizo por clave.",
      "Elijo entre lista y diccionario según el caso.",
    ],
    summary: [
      "Diccionario = pares clave→valor, con { }.",
      "Accedes por clave, no por posición.",
      "Lista para secuencias; diccionario para datos etiquetados.",
    ],
  },

  "prog-errores": {
    intro:
      "Los errores no son fracasos: son mensajes. Aprender a leerlos y a manejarlos convierte la frustración en información útil. Todo programador convive con ellos.",
    goal: "leer errores comunes y manejar excepciones con try/except.",
    sections: [
      {
        h: "Tres familias de errores",
        tldr: "De sintaxis, de ejecución y de lógica.",
        bullets: [
          "Sintaxis: escribiste algo mal (falta un :, un paréntesis). No arranca.",
          "Ejecución (excepción): arranca, pero peta al ejecutar (dividir entre 0).",
          "Lógica: no da error, pero el resultado es incorrecto. El más traicionero.",
        ],
      },
      {
        h: "try / except: manejar lo que puede fallar",
        tldr: "Intenta algo; si falla, reacciona en vez de romperse.",
        examples: [
          {
            en: "Capturar el fallo",
            ipa: 'try:\n    n = int(input("Número: "))\nexcept ValueError:\n    print("Eso no es un número")',
            es: "Si el usuario no teclea un número, no se rompe: avisa.",
          },
        ],
        tip: "Lee el error de ABAJO hacia arriba: la última línea dice el tipo (ValueError, TypeError…) y el mensaje. Ahí está la pista.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Olvidar los dos puntos ':' al final de un if es un error de…",
        options: ["sintaxis", "lógica", "red"],
        answer: 0,
        why: "Es un error de sintaxis: el código ni siquiera arranca.",
      },
      {
        kind: "choice",
        q: "El código corre pero el resultado está mal. Es un error de…",
        options: ["sintaxis", "lógica", "ejecución"],
        answer: 1,
        why: "Los errores de lógica no lanzan excepción; dan resultados incorrectos.",
      },
      {
        kind: "fill",
        q: "Bloque para intentar código que puede fallar: ___: ... except: ...",
        accept: ["try"],
        hint: "try…",
        why: "try envuelve el código que podría lanzar una excepción.",
      },
      {
        kind: "choice",
        q: "¿En qué orden conviene leer un mensaje de error de Python?",
        options: [
          "De arriba hacia abajo",
          "De abajo hacia arriba (la última línea da el tipo y el mensaje)",
          "Da igual",
        ],
        answer: 1,
        why: "La última línea resume el error; el resto es el rastro (traceback).",
      },
    ],
    activity: {
      title: "A prueba de usuarios",
      steps: [
        "Pide un número con input() y conviértelo con int().",
        "Envuélvelo en try/except para avisar si no es un número.",
        "Prueba a teclear letras: tu programa no debe romperse.",
      ],
    },
    selfCheck: [
      "Distingo errores de sintaxis, ejecución y lógica.",
      "Leo el traceback de abajo hacia arriba.",
      "Manejo excepciones con try/except.",
    ],
    summary: [
      "Errores: sintaxis (no arranca), ejecución (peta), lógica (resultado malo).",
      "try/except maneja lo que puede fallar.",
      "Lee el error de abajo hacia arriba.",
    ],
  },

  "prog-depuracion": {
    intro:
      "Depurar (debuggear) es encontrar y arreglar por qué tu código no hace lo que crees. Es, quizá, la habilidad que más separa a un buen programador de uno frustrado.",
    goal: "encontrar la causa de un fallo de forma sistemática.",
    sections: [
      {
        h: "El método científico del bug",
        tldr: "Observa, hipótesis, prueba, repite. No cambies al azar.",
        bullets: [
          "Reproduce el fallo: ¿cuándo ocurre exactamente?",
          "Forma una hipótesis: «creo que la variable x vale mal aquí».",
          "Compruébala: imprime x justo ahí.",
          "Confirma o descarta y repite. Divide y vencerás.",
        ],
      },
      {
        h: "print() es tu linterna",
        tldr: "Imprimir valores intermedios revela dónde se tuerce todo.",
        examples: [
          {
            en: "Rastrear un valor",
            ipa: 'print("DEBUG total =", total)',
            es: "Ver el valor real en cada punto delata dónde falla la lógica.",
          },
        ],
        tip: "El «pato de goma»: explica tu código en voz alta, línea a línea, a un objeto. Muchas veces encuentras el bug tú solo al narrarlo.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Tu programa da un resultado incorrecto. El primer paso es…",
        options: [
          "Cambiar líneas al azar hasta que funcione",
          "Reproducir el fallo y localizar dónde ocurre",
          "Reescribir todo desde cero",
        ],
        answer: 1,
        why: "Depurar es sistemático: primero reproducir y localizar.",
      },
      {
        kind: "choice",
        q: "Una forma rápida de ver qué valor tiene una variable en un punto es…",
        options: ["borrarla", "imprimirla con print()", "renombrarla"],
        answer: 1,
        why: "print() muestra el valor real y revela dónde se tuerce.",
      },
      {
        kind: "choice",
        q: "La técnica del «pato de goma» consiste en…",
        options: [
          "reiniciar la computadora",
          "explicar tu código en voz alta paso a paso",
          "pedirle a otro que lo arregle",
        ],
        answer: 1,
        why: "Narrar el código en voz alta suele destapar el error.",
      },
    ],
    activity: {
      title: "Caza del bug",
      steps: [
        "Toma un programa tuyo con un fallo (o introduce uno).",
        "Añade prints para ver los valores intermedios.",
        "Forma una hipótesis, compruébala y arréglalo. Anota qué era.",
      ],
    },
    selfCheck: [
      "Reproduzco y localizo el fallo antes de tocar nada.",
      "Uso prints para inspeccionar valores.",
      "Depuro por hipótesis, no al azar.",
    ],
    summary: [
      "Depurar es sistemático: observa → hipótesis → prueba → repite.",
      "print() es tu linterna para ver valores.",
      "Explica en voz alta (pato de goma) para destapar bugs.",
    ],
  },

  "prog-algoritmos": {
    intro:
      "Un algoritmo es una estrategia de pasos para resolver un problema. Aquí aprendes a diseñar la solución ANTES de codificar: la parte que de verdad distingue a un programador.",
    goal: "diseñar la solución de un problema antes de escribir código.",
    sections: [
      {
        h: "Primero el plan, luego el código",
        tldr: "Piensa los pasos en pseudocódigo; traducir es lo fácil.",
        body: [
          "Ante un problema, no empieces a teclear. Escribe los pasos en español, comprueba que la lógica funciona con un ejemplo a mano, y solo entonces tradúcelo a Python.",
        ],
        examples: [
          {
            en: "Problema: encontrar el mayor de una lista",
            ipa: "mayor = lista[0]\npara cada n en lista:\n  si n > mayor: mayor = n",
            es: "Empieza asumiendo que el primero es el mayor y ve comparando.",
          },
        ],
      },
      {
        h: "Patrones que se repiten",
        tldr: "Muchos problemas son variaciones de unos pocos patrones.",
        bullets: [
          "Acumulador: sumar/contar mientras recorres (total += n).",
          "Búsqueda: recorrer hasta encontrar algo.",
          "Filtro: quedarte con los que cumplen una condición.",
        ],
        tip: "Prueba tu algoritmo 'a mano' con un ejemplo pequeño ANTES de programarlo. Si falla en papel, fallará en código.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Qué conviene hacer ANTES de escribir código?",
        options: [
          "Nada, empezar a teclear",
          "Diseñar los pasos (pseudocódigo) y probarlos con un ejemplo",
          "Copiar código de internet",
        ],
        answer: 1,
        why: "Diseñar y validar la lógica primero evita horas de código roto.",
      },
      {
        kind: "choice",
        q: "Sumar todos los elementos mientras recorres una lista usa el patrón…",
        options: ["acumulador", "búsqueda", "filtro"],
        answer: 0,
        why: "El acumulador va sumando en una variable a medida que recorre.",
      },
      {
        kind: "choice",
        q: "Para hallar el mayor de una lista, una buena estrategia es…",
        options: [
          "asumir que el primero es el mayor y comparar con el resto",
          "ordenar y rezar",
          "elegir uno al azar",
        ],
        answer: 0,
        why: "Se inicializa con el primero y se actualiza al encontrar uno mayor.",
      },
    ],
    activity: {
      title: "Diseña antes de codificar",
      steps: [
        "Problema: contar cuántos números pares hay en una lista.",
        "Escribe el algoritmo en pseudocódigo (patrón acumulador + filtro).",
        "Tradúcelo a Python y pruébalo con [1,2,3,4,5,6] (debe dar 3).",
      ],
    },
    selfCheck: [
      "Diseño en pseudocódigo antes de codificar.",
      "Reconozco patrones (acumulador, búsqueda, filtro).",
      "Pruebo la lógica a mano con un ejemplo pequeño.",
    ],
    summary: [
      "Primero el plan (pseudocódigo), luego el código.",
      "Patrones reutilizables: acumulador, búsqueda, filtro.",
      "Valida con un ejemplo a mano antes de programar.",
    ],
  },

  "prog-git": {
    intro:
      "Git es la máquina del tiempo de tu código: guarda versiones, te deja volver atrás y colaborar sin pisar el trabajo de otros. Es estándar en toda la industria.",
    goal: "guardar versiones de tu código y entender el flujo básico de Git.",
    sections: [
      {
        h: "Por qué existe Git",
        tldr: "Historial + seguridad + colaboración, sin carpetas 'proyecto_final_v3_definitivo'.",
        bullets: [
          "Guarda 'fotos' (commits) de tu proyecto en el tiempo.",
          "Puedes volver a cualquier versión anterior.",
          "Varias personas trabajan sin sobrescribirse.",
        ],
      },
      {
        h: "El flujo básico",
        tldr: "Cambias → preparas (add) → confirmas (commit) → subes (push).",
        examples: [
          {
            en: "Guardar una versión",
            ipa: 'git add .\ngit commit -m "Añade login"',
            es: "add prepara los cambios; commit los guarda con un mensaje.",
          },
          {
            en: "Subir al remoto",
            ipa: "git push",
            es: "Envía tus commits a GitHub (copia en la nube).",
          },
        ],
        tip: "Escribe mensajes de commit claros y en presente: «Añade validación de email», no «cambios». Tu equipo (y tu yo futuro) lo leerá.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Para qué sirve Git principalmente?",
        options: [
          "Ejecutar programas más rápido",
          "Guardar el historial de versiones y colaborar",
          "Diseñar interfaces",
        ],
        answer: 1,
        why: "Git es control de versiones: historial y colaboración.",
      },
      {
        kind: "choice",
        q: "¿Qué comando GUARDA una versión con un mensaje?",
        options: ["git push", "git commit -m", "git add"],
        answer: 1,
        why: "git commit -m guarda una instantánea con su mensaje.",
      },
      {
        kind: "fill",
        q: "Comando que sube tus commits al repositorio remoto: git ___",
        accept: ["push"],
        hint: "Empujar…",
        why: "git push envía tus commits al remoto (p. ej. GitHub).",
      },
    ],
    activity: {
      title: "Tu primer repositorio",
      steps: [
        "Crea una carpeta con un archivo .py y ejecútalo.",
        "Inicializa Git (git init), haz git add . y un commit con mensaje.",
        "Cambia algo, haz otro commit y mira el historial con git log.",
      ],
    },
    selfCheck: [
      "Explico para qué sirve Git.",
      "Hago add + commit con un mensaje claro.",
      "Entiendo qué hace push.",
    ],
    summary: [
      "Git = máquina del tiempo + colaboración.",
      "Flujo: add → commit -m → push.",
      "Mensajes de commit claros y en presente.",
    ],
  },

  "hito-prog-intermedio": {
    intro:
      "¡Segundo hito! Ya no solo escribes instrucciones sueltas: organizas tu código en funciones, manejas datos etiquetados, controlas los errores y diseñas soluciones. Estás listo para proyectos reales.",
    goal: "confirmar que dominas el nivel intermedio antes de lo avanzado.",
    sections: [
      {
        h: "¿Qué puedes hacer ya?",
        tldr: "Programas organizados, robustos y pensados.",
        bullets: [
          "Reutilizar código con funciones y return.",
          "Modelar datos con listas y diccionarios.",
          "Manejar errores con try/except y depurar con método.",
          "Diseñar algoritmos antes de codificar y versionar con Git.",
        ],
      },
      {
        h: "Repaso integrado",
        tldr: "Estas piezas juntas ya construyen aplicaciones útiles.",
        tip: "Lo avanzado (objetos, módulos, un proyecto real) es combinar y escalar lo que ya sabes. Un intermedio firme lo hace natural.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "def f(x): return x + 1 — ¿f(9)?",
        options: ["9", "10", "None"],
        answer: 1,
        why: "Devuelve 9 + 1 = 10.",
      },
      {
        kind: "choice",
        q: 'd = {"x": 5}; ¿d["x"]?',
        options: ["x", "5", "error"],
        answer: 1,
        why: "Se accede por clave: 5.",
      },
      {
        kind: "fill",
        q: "Bloque para manejar código que puede fallar: ___ / except",
        accept: ["try"],
        hint: "try…",
        why: "try/except maneja excepciones.",
      },
      {
        kind: "choice",
        q: "Antes de codificar un problema conviene…",
        options: [
          "escribir el pseudocódigo y probarlo a mano",
          "teclear directamente",
          "ordenar la lista sin motivo",
        ],
        answer: 0,
        why: "Diseñar la solución primero es la marca del buen programador.",
      },
    ],
    activity: {
      title: "Mini-proyecto: agenda de contactos",
      steps: [
        "Usa un diccionario nombre→teléfono.",
        "Escribe funciones para añadir, buscar y listar contactos.",
        "Maneja el caso de buscar un contacto que no existe (sin romperse).",
      ],
    },
    selfCheck: [
      "Organizo el código en funciones.",
      "Modelo datos con listas y diccionarios.",
      "Manejo errores y depuro con método.",
      "Diseño antes de codificar y uso Git.",
    ],
    summary: [
      "Intermedio = funciones + estructuras + robustez + diseño.",
      "Con esto ya construyes aplicaciones útiles.",
      "Lo avanzado es escalar lo que ya dominas.",
    ],
  },

  "prog-recursion": {
    intro:
      "Una función recursiva se llama a sí misma. Suena a magia (o a peligro), pero es solo una forma elegante de resolver problemas que 'contienen' versiones más pequeñas de sí mismos.",
    goal: "resolver un problema definiéndolo en términos de sí mismo.",
    sections: [
      {
        h: "Dos partes: caso base y caso recursivo",
        tldr: "El caso base detiene la recursión; el recursivo la acerca a él.",
        body: [
          "Sin caso base, la función se llama para siempre (y el programa se cae). Con él, cada llamada resuelve un trozo más pequeño hasta tocar el caso base.",
        ],
        code: "def factorial(n):\n    if n <= 1:        # caso base\n        return 1\n    return n * factorial(n - 1)   # caso recursivo\n\nfactorial(4)  # 4*3*2*1 = 24",
        tip: "Confía en que la función 'ya funciona' para el caso más pequeño. Es el salto de fe de la recursión.",
      },
      {
        h: "¿Bucle o recursión?",
        tldr: "Todo lo recursivo puede hacerse con bucle; a veces la recursión es más clara.",
        compare: {
          left: {
            title: "Recursión",
            points: [
              "Brilla en estructuras anidadas (árboles, carpetas)",
              "Suele leerse como la definición del problema",
            ],
          },
          right: {
            title: "Bucle",
            points: [
              "Más eficiente en memoria (sin pila de llamadas)",
              "Mejor para repeticiones lineales simples",
            ],
          },
          note: "Elige la que exprese el problema con más claridad.",
        },
        more: [
          "Cada llamada se apila; demasiada profundidad da 'stack overflow'.",
          "Recorrer un árbol o unas carpetas anidadas es casi imposible de leer con bucles: ahí la recursión gana.",
        ],
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Qué pasa si una función recursiva no tiene caso base?",
        options: [
          "Devuelve None",
          "Se llama infinitamente hasta que el programa se cae",
          "Se convierte en un bucle for",
        ],
        answer: 1,
        why: "Sin caso base, la recursión no termina: desborda la pila.",
      },
      {
        kind: "choice",
        q: "¿En qué caso conviene MÁS la recursión?",
        options: [
          "Sumar los números del 1 al 100",
          "Recorrer una estructura anidada como un árbol de carpetas",
          "Repetir un saludo 3 veces",
        ],
        answer: 1,
        why: "Las estructuras anidadas se expresan de forma natural con recursión.",
      },
      {
        kind: "fill",
        q: "En factorial(n), el caso base suele ser cuando n vale 1 o ___ .",
        accept: ["0", "cero"],
        hint: "El otro número pequeño.",
        why: "El caso base cubre n<=1 (0 y 1 devuelven 1).",
      },
    ],
    activity: {
      title: "Piensa en pequeño",
      steps: [
        "Escribe una función recursiva que sume los elementos de una lista.",
        "Identifica su caso base (lista vacía → 0) y el recursivo.",
        "Reescríbela con un bucle y compara cuál se lee mejor.",
      ],
    },
    selfCheck: [
      "Identifico el caso base y el recursivo.",
      "Escribo una función recursiva que termina.",
      "Sé cuándo la recursión es más clara que un bucle.",
    ],
    summary: [
      "Recursión = caso base + caso recursivo que se acerca a él.",
      "Sin caso base, no termina.",
      "Brilla en estructuras anidadas (árboles, carpetas).",
    ],
  },

  "prog-oop": {
    intro:
      "La programación orientada a objetos agrupa datos y el comportamiento que los usa en una misma 'cosa': un objeto. En vez de variables sueltas y funciones aparte, modelas el mundo con piezas que se cuidan a sí mismas.",
    goal: "modelar entidades con clases (datos + comportamiento) y crear objetos.",
    sections: [
      {
        h: "Clase vs. objeto",
        tldr: "La clase es el molde; el objeto, cada galleta hecha con él.",
        body: [
          "Una clase define qué datos (atributos) y qué acciones (métodos) tiene un tipo de cosa. Con ella creas objetos concretos, cada uno con su propio estado.",
        ],
        code: "class Cuenta:\n    def __init__(self, saldo=0):\n        self.saldo = saldo          # atributo\n    def depositar(self, x):         # método\n        self.saldo += x\n\nc = Cuenta()      # objeto (instancia)\nc.depositar(100)\nprint(c.saldo)    # 100",
      },
      {
        h: "Por qué agrupar datos y comportamiento",
        tldr: "El objeto protege y gestiona su propio estado.",
        bullets: [
          "El saldo solo cambia a través de métodos de la cuenta (control).",
          "Cada objeto recuerda su estado sin variables globales.",
          "El código se organiza alrededor de conceptos del dominio.",
        ],
        tip: "self es el propio objeto: cómo un método accede a los datos de SU instancia. Es el error nº1 olvidarlo en los métodos.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Qué relación hay entre clase y objeto?",
        options: [
          "Son lo mismo",
          "La clase es el molde; el objeto es una instancia concreta",
          "El objeto es el molde de la clase",
        ],
        answer: 1,
        why: "La clase define el tipo; cada objeto es una instancia con su estado.",
      },
      {
        kind: "choice",
        q: "En un método, ¿para qué sirve 'self'?",
        options: [
          "Es un nombre decorativo",
          "Referencia al propio objeto para acceder a sus atributos",
          "Crea una nueva clase",
        ],
        answer: 1,
        why: "self es la instancia actual; permite leer/escribir sus atributos.",
      },
      {
        kind: "choice",
        q: "Una ventaja de agrupar datos + comportamiento es…",
        options: [
          "usar más variables globales",
          "que el objeto controla y protege su propio estado",
          "que el código sea más largo",
        ],
        answer: 1,
        why: "La encapsulación mantiene el estado bajo control del objeto.",
      },
    ],
    activity: {
      title: "Modela algo real",
      steps: [
        "Crea una clase (p. ej. Libro o Coche) con 2-3 atributos.",
        "Añade un método que cambie o use su estado.",
        "Crea 2 objetos distintos y comprueba que su estado es independiente.",
      ],
    },
    selfCheck: [
      "Distingo clase (molde) de objeto (instancia).",
      "Defino atributos y métodos y uso self.",
      "Explico por qué agrupar datos y comportamiento.",
    ],
    summary: [
      "Clase = molde; objeto = instancia con su estado.",
      "Atributos (datos) + métodos (comportamiento) juntos.",
      "self referencia al propio objeto.",
    ],
  },

  "prog-complejidad": {
    intro:
      "Dos programas pueden dar el mismo resultado y, sin embargo, uno tardar un segundo y el otro una hora con muchos datos. La notación Big-O describe cómo CRECE el coste al crecer la entrada.",
    goal: "razonar sobre el coste de un algoritmo y elegir el que escala mejor.",
    sections: [
      {
        h: "No mides segundos: mides crecimiento",
        tldr: "Big-O ignora constantes y mira qué pasa cuando los datos crecen.",
        code: "# O(1) — constante: no depende del tamaño\nx = lista[0]\n\n# O(n) — lineal: recorre toda la lista\nfor e in lista:\n    ...\n\n# O(n^2) — cuadrático: bucle dentro de bucle\nfor a in lista:\n    for b in lista:\n        ...",
      },
      {
        h: "El caso estrella: buscar",
        tldr: "La estructura correcta cambia el coste radicalmente.",
        compare: {
          left: {
            title: "Buscar en lista — O(n)",
            points: ["Revisa elemento por elemento", "Con 1M de datos, lento"],
          },
          right: {
            title: "Buscar por clave (dict) — O(1)",
            points: ["Acceso casi instantáneo", "Escala sin despeinarse"],
          },
          note: "Elegir dict en vez de lista puede convertir horas en milisegundos.",
        },
        more: [
          "Órdenes comunes de menor a mayor coste: O(1) < O(log n) < O(n) < O(n log n) < O(n^2).",
          "Primero haz que funcione; optimiza solo lo que un análisis (o el reloj) señale.",
        ],
        tip: "Un bucle dentro de otro sobre los mismos datos es una alarma de O(n²): pregúntate si hay una forma con dict/set.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Un bucle dentro de otro sobre la misma lista suele ser…",
        options: ["O(1)", "O(n)", "O(n²)"],
        answer: 2,
        why: "Dos bucles anidados recorren n×n → coste cuadrático.",
      },
      {
        kind: "choice",
        q: "Acceder a un valor por su clave en un diccionario es, en promedio…",
        options: ["O(1)", "O(n)", "O(n²)"],
        answer: 0,
        why: "El hashing da acceso por clave casi constante: O(1).",
      },
      {
        kind: "choice",
        q: "¿Cuándo conviene preocuparse por Big-O?",
        options: [
          "Siempre, antes de que el código funcione",
          "Cuando los datos crecen y el rendimiento importa",
          "Nunca",
        ],
        answer: 1,
        why: "Primero corrección; la eficiencia importa al escalar.",
      },
    ],
    activity: {
      title: "Cambia el coste",
      steps: [
        "Escribe una búsqueda de duplicados con dos bucles (O(n²)).",
        "Reescríbela usando un set para bajarla a ~O(n).",
        "Cronometra ambas con una lista grande y compara.",
      ],
    },
    selfCheck: [
      "Distingo O(1), O(n) y O(n²) en código.",
      "Elijo la estructura que reduce el coste.",
      "No optimizo antes de que el código funcione.",
    ],
    summary: [
      "Big-O describe cómo crece el coste con los datos.",
      "Anidar bucles → O(n²); acceso por clave → O(1).",
      "La estructura correcta cambia el coste radicalmente.",
    ],
  },

  "prog-estructuras-intro": {
    intro:
      "Listas, diccionarios, conjuntos… no son intercambiables. Cada estructura es buena en unas operaciones y mala en otras. Elegir bien es lo que hace que el código sea simple Y rápido.",
    goal: "elegir la estructura de datos adecuada para cada problema.",
    sections: [
      {
        h: "Cada estructura, su superpoder",
        tldr: "Pregúntate qué operación harás más y elige por ella.",
        bullets: [
          "Lista: orden y posición (recorrer, índice). Buscar es O(n).",
          "Diccionario: buscar/asociar por clave. O(1) medio.",
          "Conjunto (set): pertenencia y unicidad. O(1) medio, sin duplicados.",
        ],
        code: "# ¿El elemento está? → set\nvistos = set()\nif x in vistos: ...      # O(1)\n\n# ¿Cuántas veces aparece cada palabra? → dict\nconteo = {}\nconteo[palabra] = conteo.get(palabra, 0) + 1",
      },
      {
        h: "La pregunta clave",
        tldr: "'¿Cómo voy a buscar o acceder a los datos?' decide la estructura.",
        tip: "Si te sorprendes usando 'x in lista' muchas veces dentro de un bucle, casi siempre quieres un set o un dict.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Quieres comprobar rápidamente si un elemento ya apareció. Usas…",
        options: ["una lista", "un set", "una cadena"],
        answer: 1,
        why: "El set da pertenencia en O(1) y evita duplicados.",
      },
      {
        kind: "choice",
        q: "Necesitas asociar cada usuario con su puntuación. Usas…",
        options: ["una lista", "un diccionario (clave→valor)", "un set"],
        answer: 1,
        why: "Asociar por clave es el trabajo del diccionario.",
      },
      {
        kind: "choice",
        q: "El orden y la posición de los elementos importa. Usas…",
        options: ["una lista", "un set", "un diccionario"],
        answer: 0,
        why: "La lista mantiene orden y acceso por índice.",
      },
    ],
    activity: {
      title: "La estructura correcta",
      steps: [
        "Para 3 problemas (agenda, palabras únicas de un texto, cola de espera) elige estructura.",
        "Justifica cada elección con la operación dominante.",
        "Implementa uno y comprueba que el código queda simple.",
      ],
    },
    selfCheck: [
      "Sé el superpoder de lista, dict y set.",
      "Elijo por la operación que más repito.",
      "Evito buscar en listas dentro de bucles.",
    ],
    summary: [
      "Lista = orden/posición; dict = por clave; set = pertenencia/únicos.",
      "Elige por la operación dominante.",
      "La estructura correcta simplifica y acelera.",
    ],
  },

  "prog-como-web": {
    intro:
      "Antes de escribir HTML o JavaScript, hay que entender el escenario: qué es un cliente, qué es un servidor y qué ocurre exactamente cuando escribes una dirección y pulsas Enter.",
    goal: "explicar el modelo cliente-servidor de la web.",
    sections: [
      {
        h: "Cliente y servidor",
        tldr: "Tu navegador (cliente) pide; una computadora remota (servidor) responde.",
        body: [
          "El navegador envía una petición a un servidor identificado por una URL. El servidor responde con archivos (HTML, CSS, JS, imágenes) que el navegador ensambla y muestra.",
        ],
        examples: [
          {
            en: "Petición → Respuesta",
            ipa: "GET https://skilltree.app  →  200 OK + HTML",
            es: "El navegador pide una página y recibe el HTML que la describe.",
          },
        ],
      },
      {
        h: "Las tres piezas del navegador",
        tldr: "HTML estructura, CSS viste, JavaScript da vida.",
        bullets: [
          "HTML: el contenido y su estructura (el esqueleto).",
          "CSS: el aspecto y la disposición (la ropa).",
          "JavaScript: el comportamiento y la interacción (los músculos).",
        ],
        tip: "El servidor NO se ejecuta en tu navegador: te envía archivos. Entender esa frontera evita mucha confusión al empezar.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "En la web, el navegador actúa como…",
        options: ["servidor", "cliente que hace peticiones", "base de datos"],
        answer: 1,
        why: "El navegador es el cliente: pide recursos al servidor.",
      },
      {
        kind: "choice",
        q: "¿Qué pieza da ESTRUCTURA a una página?",
        options: ["CSS", "HTML", "JavaScript"],
        answer: 1,
        why: "HTML define el contenido y su estructura semántica.",
      },
      {
        kind: "choice",
        q: "¿Qué recibe el navegador del servidor al abrir una página?",
        options: [
          "El servidor entero",
          "Archivos (HTML, CSS, JS, imágenes)",
          "Nada, lo genera solo",
        ],
        answer: 1,
        why: "El servidor responde con archivos que el navegador ensambla.",
      },
    ],
    activity: {
      title: "Espía la web",
      steps: [
        "Abre las herramientas de desarrollo del navegador (pestaña Red).",
        "Recarga una web y observa las peticiones y respuestas.",
        "Identifica el HTML principal y algún archivo CSS o JS.",
      ],
    },
    selfCheck: [
      "Explico qué es cliente y servidor.",
      "Sé qué recibe el navegador al abrir una URL.",
      "Distingo el rol de HTML, CSS y JavaScript.",
    ],
    summary: [
      "Cliente (navegador) pide; servidor responde con archivos.",
      "HTML estructura, CSS viste, JS da vida.",
      "El servidor no se ejecuta en tu navegador.",
    ],
  },

  "prog-html": {
    intro:
      "HTML es el esqueleto de toda página web. No es 'programar' en el sentido de lógica, pero es el lienzo sobre el que todo lo demás sucede. Bien hecho, es semántico: las etiquetas describen QUÉ es cada cosa.",
    goal: "estructurar contenido con HTML semántico.",
    sections: [
      {
        h: "Etiquetas: contenido con significado",
        tldr: "Cada etiqueta dice qué ES su contenido, no cómo se ve.",
        code: "<article>\n  <h1>Mi primer artículo</h1>\n  <p>Un párrafo con un <a href=\"/mas\">enlace</a>.</p>\n  <ul>\n    <li>Punto uno</li>\n    <li>Punto dos</li>\n  </ul>\n</article>",
      },
      {
        h: "Semántico, no decorativo",
        tldr: "Usa la etiqueta que describe el contenido, no <div> para todo.",
        bullets: [
          "Encabezados (h1–h6) crean jerarquía y accesibilidad.",
          "nav, main, header, footer describen regiones de la página.",
          "El aspecto lo pone el CSS, no el HTML.",
        ],
        tip: "El HTML semántico mejora el SEO y la accesibilidad (lectores de pantalla). No es opcional: es hacerlo bien.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Para qué sirve la etiqueta <h1>?",
        options: [
          "Poner texto en negrita",
          "El encabezado principal (jerarquía y significado)",
          "Crear un enlace",
        ],
        answer: 1,
        why: "Los h1–h6 definen la jerarquía de encabezados.",
      },
      {
        kind: "fill",
        q: "Etiqueta para crear un enlace (ancla): <___ href=\"...\">",
        accept: ["a"],
        hint: "Una sola letra.",
        why: "<a> (anchor) crea enlaces.",
      },
      {
        kind: "choice",
        q: "'HTML semántico' significa…",
        options: [
          "usar <div> para todo",
          "elegir etiquetas que describen el contenido",
          "escribir en mayúsculas",
        ],
        answer: 1,
        why: "Semántico = la etiqueta comunica el significado del contenido.",
      },
    ],
    activity: {
      title: "Maqueta una tarjeta",
      steps: [
        "Crea una página con un encabezado, un párrafo y una lista.",
        "Añade un enlace y una imagen (con texto alternativo).",
        "Revisa que usas etiquetas semánticas, no solo <div>.",
      ],
    },
    selfCheck: [
      "Uso encabezados y listas correctamente.",
      "Creo enlaces e imágenes con sus atributos.",
      "Prefiero etiquetas semánticas a <div> genéricos.",
    ],
    summary: [
      "HTML estructura el contenido con etiquetas.",
      "Semántico = la etiqueta describe el significado.",
      "El aspecto es cosa del CSS.",
    ],
  },

  "prog-js-navegador": {
    intro:
      "JavaScript es el lenguaje que da vida a las páginas. A través del DOM (la representación de la página como objetos), tu código puede leer y cambiar cualquier elemento en tiempo real.",
    goal: "modificar una página dinámicamente con JavaScript.",
    sections: [
      {
        h: "El DOM: la página como objetos",
        tldr: "El navegador convierte tu HTML en objetos que JS puede manipular.",
        code: "// Seleccionar un elemento\nconst titulo = document.querySelector('h1');\n\n// Leer y cambiar su contenido\ntitulo.textContent = '¡Hola desde JavaScript!';",
      },
      {
        h: "Del dato a la pantalla",
        tldr: "Cambias una variable y reflejas el cambio en el DOM.",
        examples: [
          {
            en: "Actualizar la interfaz",
            ipa: "contador.textContent = valor;",
            es: "La página muestra siempre el estado actual de tus datos.",
          },
        ],
        more: [
          "querySelector usa selectores CSS: '#id', '.clase', 'tag'.",
          "Si el script corre antes de que exista el elemento, querySelector devuelve null: coloca el script al final o espera al DOM.",
        ],
        tip: "Regla mental: los datos son la fuente de verdad; el DOM es su reflejo. Cambia el dato y vuelve a pintar.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Qué es el DOM?",
        options: [
          "Un lenguaje distinto de JavaScript",
          "La página representada como objetos que JS puede manipular",
          "Una base de datos del navegador",
        ],
        answer: 1,
        why: "El DOM es el árbol de objetos que representa la página.",
      },
      {
        kind: "fill",
        q: "Método para seleccionar el primer elemento que casa un selector CSS: document.___('h1')",
        accept: ["querySelector"],
        hint: "query…",
        why: "document.querySelector(selector) devuelve el primer coincidente.",
      },
      {
        kind: "choice",
        q: "Tu script no encuentra un elemento (devuelve null). Causa probable:",
        options: [
          "El elemento aún no existe cuando corre el script",
          "JavaScript está roto",
          "Falta CSS",
        ],
        answer: 0,
        why: "Si el script corre antes de renderizar el elemento, no lo encuentra.",
      },
    ],
    activity: {
      title: "Da vida a la página",
      steps: [
        "Crea un HTML con un <h1> y un <button>.",
        "Con JS, cambia el texto del h1 al cargar.",
        "Reto: haz que el botón cambie el texto al pulsarlo.",
      ],
    },
    selfCheck: [
      "Explico qué es el DOM.",
      "Selecciono y modifico elementos con JS.",
      "Entiendo que los datos son la fuente y el DOM su reflejo.",
    ],
    summary: [
      "El DOM representa la página como objetos.",
      "querySelector selecciona; textContent/… modifica.",
      "Cambia el dato y refleja en el DOM.",
    ],
  },

  "prog-bd-que-es": {
    intro:
      "Cuando cierras un programa, sus variables desaparecen. Una base de datos guarda los datos para que perduren y se puedan consultar de forma eficiente por muchos usuarios a la vez.",
    goal: "entender por qué y cuándo usar una base de datos.",
    sections: [
      {
        h: "Tablas, filas y columnas",
        tldr: "Una tabla es como una hoja de cálculo con reglas.",
        body: [
          "En una base de datos relacional, los datos viven en tablas: cada fila es un registro (un usuario) y cada columna un campo (nombre, email). Una clave primaria identifica cada fila de forma única.",
        ],
        code: "usuarios\n┌────┬─────────┬──────────────────┐\n│ id │ nombre  │ email            │\n├────┼─────────┼──────────────────┤\n│ 1  │ Ana     │ ana@correo.com   │\n│ 2  │ Beto    │ beto@correo.com  │\n└────┴─────────┴──────────────────┘",
      },
      {
        h: "Relacional vs. NoSQL",
        tldr: "Estructura y relaciones fuertes, o flexibilidad y escala.",
        compare: {
          left: {
            title: "Relacional (SQL)",
            points: ["Tablas con esquema fijo", "Relaciones y consistencia", "SQL como lenguaje"],
          },
          right: {
            title: "NoSQL (documentos, etc.)",
            points: ["Datos flexibles (JSON-like)", "Escala horizontal fácil", "Sin esquema rígido"],
          },
          note: "Para empezar y para la mayoría de apps, relacional es una apuesta segura.",
        },
        tip: "Persistir no es 'guardar en un archivo de texto': una base de datos aporta consultas, integridad y acceso concurrente.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "En una base de datos relacional, una fila representa…",
        options: ["un campo", "un registro (p. ej. un usuario)", "una consulta"],
        answer: 1,
        why: "Cada fila es un registro; cada columna, un campo.",
      },
      {
        kind: "choice",
        q: "¿Para qué sirve una clave primaria?",
        options: [
          "Ordenar alfabéticamente",
          "Identificar de forma única cada fila",
          "Encriptar los datos",
        ],
        answer: 1,
        why: "La clave primaria identifica unívocamente cada registro.",
      },
      {
        kind: "choice",
        q: "Ventaja de una base de datos frente a un archivo de texto:",
        options: [
          "Ocupa menos siempre",
          "Consultas eficientes, integridad y acceso concurrente",
          "No necesita estructura",
        ],
        answer: 1,
        why: "Aporta consulta, integridad y concurrencia, no solo almacenamiento.",
      },
    ],
    activity: {
      title: "Diseña una tabla",
      steps: [
        "Elige una entidad (productos, canciones, alumnos).",
        "Define sus columnas y su clave primaria.",
        "Escribe 3 filas de ejemplo.",
      ],
    },
    selfCheck: [
      "Explico tabla, fila, columna y clave primaria.",
      "Sé por qué persistir supera a un archivo suelto.",
      "Distingo relacional de NoSQL a alto nivel.",
    ],
    summary: [
      "Base de datos = datos que perduran y se consultan eficientemente.",
      "Relacional: tablas, filas, columnas, clave primaria.",
      "SQL para estructura/relaciones; NoSQL para flexibilidad/escala.",
    ],
  },

  "prog-sql-select": {
    intro:
      "SQL es el idioma con el que se piden datos a una base de datos relacional. Con unas pocas palabras (SELECT, FROM, WHERE, ORDER BY) puedes responder casi cualquier pregunta sobre tus datos.",
    goal: "consultar y filtrar datos con SQL.",
    sections: [
      {
        h: "La consulta básica",
        tldr: "Qué columnas, de qué tabla, con qué filtro y en qué orden.",
        code: "SELECT nombre, precio\nFROM productos\nWHERE precio > 100\nORDER BY precio DESC\nLIMIT 5;",
      },
      {
        h: "Las cuatro piezas",
        tldr: "SELECT columnas · FROM tabla · WHERE filtro · ORDER BY orden.",
        bullets: [
          "SELECT: qué columnas quieres (o * para todas).",
          "WHERE: condición para filtrar filas.",
          "ORDER BY … DESC/ASC: ordenar el resultado.",
          "LIMIT: cuántas filas devolver.",
        ],
        tip: "Sin WHERE, la consulta devuelve TODA la tabla. Con millones de filas, eso es un problema: filtra siempre que puedas.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Qué cláusula FILTRA las filas de una consulta?",
        options: ["SELECT", "WHERE", "ORDER BY"],
        answer: 1,
        why: "WHERE aplica la condición de filtrado.",
      },
      {
        kind: "fill",
        q: "Completa para ordenar de mayor a menor por precio: ORDER BY precio ___",
        accept: ["desc", "descendente"],
        hint: "Descendente en SQL.",
        why: "DESC ordena de mayor a menor.",
      },
      {
        kind: "choice",
        q: "«SELECT * FROM usuarios;» devuelve…",
        options: [
          "solo la primera fila",
          "todas las columnas de todas las filas",
          "solo los nombres",
        ],
        answer: 1,
        why: "* selecciona todas las columnas; sin WHERE, todas las filas.",
      },
    ],
    activity: {
      title: "Traduce preguntas a SQL",
      steps: [
        "Usa un entorno como SQLBolt (en Recursos).",
        "Escribe consultas para: los 3 más caros, los que empiezan por 'A', el total de filas.",
        "Añade siempre un WHERE cuando la pregunta lo pida.",
      ],
    },
    selfCheck: [
      "Escribo SELECT … FROM … con columnas concretas.",
      "Filtro con WHERE y ordeno con ORDER BY.",
      "Sé que sin WHERE traigo toda la tabla.",
    ],
    summary: [
      "SELECT columnas FROM tabla WHERE filtro ORDER BY orden.",
      "* = todas las columnas; LIMIT acota filas.",
      "Filtra siempre que puedas.",
    ],
  },

  "prog-http": {
    intro:
      "HTTP es el protocolo con el que hablan clientes y servidores en la web. Entender sus peticiones, métodos y códigos de estado es alfabetización básica para cualquier programador moderno.",
    goal: "entender cómo dialogan cliente y servidor por HTTP.",
    sections: [
      {
        h: "Petición y respuesta",
        tldr: "El cliente pide con un método y una URL; el servidor responde con un código y datos.",
        code: "GET /api/tareas/42        →  200 OK      { \"id\": 42, ... }\nPOST /api/tareas          →  201 Created { \"id\": 43 }\nGET /api/tareas/999       →  404 Not Found\nPOST /api/tareas (roto)   →  500 Server Error",
      },
      {
        h: "Métodos y códigos de estado",
        tldr: "El método dice la intención; el código, cómo fue.",
        bullets: [
          "GET (leer), POST (crear), PUT/PATCH (actualizar), DELETE (borrar).",
          "2xx éxito · 3xx redirección · 4xx error del cliente · 5xx error del servidor.",
          "404 = no existe; 401/403 = no autorizado; 500 = falló el servidor.",
        ],
        tip: "Distingue 4xx (te equivocaste TÚ, el cliente) de 5xx (falló el servidor). Es el primer paso para depurar cualquier problema de red.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Qué método HTTP se usa para CREAR un recurso?",
        options: ["GET", "POST", "DELETE"],
        answer: 1,
        why: "POST se usa para crear; GET solo lee.",
      },
      {
        kind: "choice",
        q: "Un código 404 significa…",
        options: [
          "El servidor falló",
          "El recurso no existe",
          "Todo salió bien",
        ],
        answer: 1,
        why: "404 Not Found: el recurso pedido no existe.",
      },
      {
        kind: "choice",
        q: "Los códigos 5xx indican…",
        options: [
          "error del cliente",
          "error del servidor",
          "éxito",
        ],
        answer: 1,
        why: "5xx = el servidor falló al procesar la petición.",
      },
    ],
    activity: {
      title: "Lee la red",
      steps: [
        "Abre las herramientas del navegador (pestaña Red) en una web.",
        "Identifica una petición GET y su código de estado.",
        "Anota un ejemplo de 2xx y, si aparece, uno de 3xx/4xx.",
      ],
    },
    selfCheck: [
      "Explico una petición/respuesta HTTP.",
      "Asocio GET/POST/PUT/DELETE con su intención.",
      "Distingo 4xx (cliente) de 5xx (servidor).",
    ],
    summary: [
      "Cliente pide (método + URL); servidor responde (código + datos).",
      "GET leer, POST crear, PUT/PATCH actualizar, DELETE borrar.",
      "2xx ok · 3xx redir · 4xx cliente · 5xx servidor.",
    ],
  },

  "prog-testing": {
    intro:
      "Probar a mano si tu código funciona es lento y poco fiable. Las pruebas automáticas comprueban tu código por ti, siempre igual, y te avisan al instante si algo se rompe. Son la red de seguridad que te deja cambiar sin miedo.",
    goal: "escribir pruebas que verifican tu código automáticamente.",
    sections: [
      {
        h: "Una prueba es una afirmación",
        tldr: "Dado X, el resultado DEBE ser Y. Si no, la prueba falla.",
        code: "def suma(a, b):\n    return a + b\n\n# prueba\nassert suma(2, 3) == 5\nassert suma(-1, 1) == 0\n# si una afirmación es falsa, salta el error",
      },
      {
        h: "Prueba también lo que puede fallar",
        tldr: "El 'camino feliz' no basta: prueba los casos límite.",
        bullets: [
          "Casos normales, vacíos, negativos, ceros y valores extremos.",
          "Una buena prueba falla cuando el código está mal (y solo entonces).",
          "Los tests documentan qué se espera del código.",
        ],
        tip: "Escribe una prueba que reproduzca cada bug ANTES de arreglarlo: así confirmas el fallo y evitas que vuelva.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Para qué sirve una prueba automática?",
        options: [
          "Hacer el código más rápido",
          "Verificar automáticamente que el código hace lo esperado",
          "Ocultar los errores",
        ],
        answer: 1,
        why: "Comprueba el comportamiento esperado, de forma repetible.",
      },
      {
        kind: "choice",
        q: "Probar solo el 'camino feliz' es un error porque…",
        options: [
          "es demasiado rápido",
          "los bugs suelen esconderse en los casos límite",
          "no se puede automatizar",
        ],
        answer: 1,
        why: "Los casos límite (vacío, negativo, extremos) destapan los fallos.",
      },
      {
        kind: "fill",
        q: "Palabra clave de Python que afirma que algo debe ser verdadero en una prueba: ___ suma(2,3) == 5",
        accept: ["assert"],
        hint: "assert…",
        why: "assert lanza un error si la condición es falsa.",
      },
    ],
    activity: {
      title: "Tu red de seguridad",
      steps: [
        "Escribe una función (p. ej. es_par) y 3 asserts que la prueben.",
        "Añade un caso límite (0, negativos).",
        "Rompe la función a propósito y observa cómo la prueba lo detecta.",
      ],
    },
    selfCheck: [
      "Escribo pruebas con assert que pasan y fallan cuando deben.",
      "Pruebo casos límite, no solo el camino feliz.",
      "Reproduzco un bug con una prueba antes de arreglarlo.",
    ],
    summary: [
      "Una prueba afirma: dado X, el resultado debe ser Y.",
      "Prueba casos límite, no solo el camino feliz.",
      "Los tests dan confianza para cambiar sin miedo.",
    ],
  },

  "prog-logica": {
    intro:
      "Toda decisión de un programa —un if, un filtro, una validación— se reduce a verdadero o falso. La lógica booleana es el álgebra de esos dos valores, y dominarla evita un montón de bugs.",
    goal: "combinar condiciones con AND, OR y NOT sin equivocarte.",
    sections: [
      {
        h: "Los tres operadores",
        tldr: "AND exige todo; OR con uno basta; NOT invierte.",
        code: "True  and True  → True     # ambos\nTrue  and False → False\nTrue  or  False → True      # al menos uno\nFalse or  False → False\nnot   True      → False     # invierte",
      },
      {
        h: "AND vs OR: el error más común",
        tldr: "Confundirlos cambia por completo qué pasa la condición.",
        compare: {
          left: {
            title: "AND (y) — más estricto",
            points: [
              "Verdadero solo si TODO se cumple",
              "edad >= 18 and tiene_entrada",
              "Cuantas más condiciones, más difícil",
            ],
          },
          right: {
            title: "OR (o) — más permisivo",
            points: [
              "Verdadero si AL MENOS UNA se cumple",
              "es_admin or es_dueño",
              "Cuantas más condiciones, más fácil",
            ],
          },
          note: "¿Quieres que se cumplan varias a la vez? AND. ¿Cualquiera vale? OR.",
        },
        more: [
          "Leyes de De Morgan: not (A and B) == (not A) or (not B).",
          "Cuidado con la doble negación: 'not no_activo' se lee mal; usa nombres positivos.",
        ],
        tip: "Escribe las condiciones en positivo siempre que puedas: 'esta_activo' se razona mejor que 'not esta_inactivo'.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Cuándo es verdadero «A and B»?",
        options: [
          "Cuando al menos uno es verdadero",
          "Solo cuando A y B son ambos verdaderos",
          "Nunca",
        ],
        answer: 1,
        why: "AND exige que TODAS las condiciones se cumplan.",
      },
      {
        kind: "choice",
        q: "«not (True or False)» vale…",
        options: ["True", "False", "None"],
        answer: 1,
        why: "(True or False) es True; not True es False.",
      },
      {
        kind: "choice",
        q: "Para dejar entrar si es mayor de edad Y tiene entrada usas…",
        options: ["or", "and", "not"],
        answer: 1,
        why: "Deben cumplirse las dos condiciones → AND.",
      },
    ],
    activity: {
      title: "Tabla de verdad",
      steps: [
        "Elige una regla real (p. ej. 'puede conducir si tiene licencia y no ha bebido').",
        "Escríbela con AND/OR/NOT.",
        "Haz su tabla de verdad probando todas las combinaciones.",
      ],
    },
    selfCheck: [
      "Sé qué hacen AND, OR y NOT.",
      "Distingo cuándo usar AND vs OR.",
      "Escribo condiciones en positivo y legibles.",
    ],
    summary: [
      "AND exige todo; OR con uno basta; NOT invierte.",
      "Confundir AND/OR es el bug lógico nº1.",
      "Condiciones en positivo = más fáciles de razonar.",
    ],
  },

  "prog-css": {
    intro:
      "Si HTML es el esqueleto, CSS es la ropa y la postura: color, tipografía, espaciado y, sobre todo, cómo se colocan los elementos en la pantalla. Es lo que convierte una página funcional en una agradable.",
    goal: "dar estilo y estructurar el layout de una página con CSS.",
    sections: [
      {
        h: "Selector, propiedad, valor",
        tldr: "Eliges qué elementos y les aplicas reglas.",
        code: ".tarjeta {\n  padding: 16px;\n  border-radius: 12px;\n  background: #16a34a;\n  color: white;\n}",
      },
      {
        h: "El modelo de caja y el layout",
        tldr: "Todo elemento es una caja; flexbox coloca esas cajas.",
        body: [
          "Cada elemento tiene contenido, relleno (padding), borde y margen. Para disponer varias cajas en fila o columna, flexbox es la herramienta moderna.",
        ],
        code: ".fila {\n  display: flex;      /* cajas en fila */\n  gap: 1rem;          /* espacio entre ellas */\n  justify-content: center;  /* centradas */\n  align-items: center;\n}",
        tip: "Aprende primero el modelo de caja y flexbox: resuelven el 90% de los layouts y evitan pelear con posiciones absolutas.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Qué propiedad activa un contenedor flexible (flexbox)?",
        options: ["display: flex", "position: absolute", "float: left"],
        answer: 0,
        why: "display: flex convierte al elemento en contenedor flex.",
      },
      {
        kind: "fill",
        q: "Propiedad para el espacio INTERIOR de una caja (entre borde y contenido): ___",
        accept: ["padding"],
        hint: "Relleno interior.",
        why: "padding es el espacio interior; margin es el exterior.",
      },
      {
        kind: "choice",
        q: "En CSS, «.tarjeta { }» aplica a…",
        options: [
          "el elemento con id 'tarjeta'",
          "todos los elementos con la clase 'tarjeta'",
          "la etiqueta <tarjeta>",
        ],
        answer: 1,
        why: "El punto (.) selecciona por clase.",
      },
    ],
    activity: {
      title: "Estiliza tu tarjeta",
      steps: [
        "Toma el HTML de tu tarjeta anterior.",
        "Dale color, padding y bordes redondeados con CSS.",
        "Colócala centrada usando flexbox.",
      ],
    },
    selfCheck: [
      "Escribo reglas selector { propiedad: valor }.",
      "Entiendo el modelo de caja (padding/margin/borde).",
      "Uso flexbox para disponer elementos.",
    ],
    summary: [
      "CSS = selector + propiedad + valor.",
      "Todo es una caja; flexbox las coloca.",
      "Modelo de caja + flexbox resuelven casi todo.",
    ],
  },

  "prog-json": {
    intro:
      "Cuando dos programas se intercambian datos por la red, necesitan un formato común. JSON es ese idioma: texto legible que representa objetos y listas, casi idéntico a un diccionario.",
    goal: "leer y producir datos en formato JSON.",
    sections: [
      {
        h: "JSON se parece a un diccionario",
        tldr: "Pares clave→valor, listas y valores básicos, en texto.",
        code: '{\n  "nombre": "Ana",\n  "edad": 25,\n  "activa": true,\n  "hobbies": ["leer", "correr"]\n}',
      },
      {
        h: "Parsear y serializar",
        tldr: "Convertir texto JSON ↔ objetos de tu lenguaje.",
        examples: [
          { en: "Texto → objeto (parsear)", ipa: "datos = json.loads(texto)", es: "Lees JSON recibido y lo usas como diccionario." },
          { en: "Objeto → texto (serializar)", ipa: "texto = json.dumps(datos)", es: "Preparas tus datos para enviarlos." },
        ],
        tip: "Reglas estrictas del JSON: comillas DOBLES en las claves, sin comas finales y sin comentarios. Un carácter de más lo invalida.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "JSON se parece sobre todo a…",
        options: ["una lista de números", "un diccionario (clave→valor)", "una tabla SQL"],
        answer: 1,
        why: "JSON representa objetos como pares clave→valor, como un diccionario.",
      },
      {
        kind: "choice",
        q: "¿Cuál es JSON VÁLIDO?",
        options: [
          "{ nombre: 'Ana' }",
          '{ "nombre": "Ana" }',
          '{ "nombre": "Ana", }',
        ],
        answer: 1,
        why: "Claves con comillas dobles y sin coma final.",
      },
      {
        kind: "choice",
        q: "Convertir texto JSON recibido en un objeto usable se llama…",
        options: ["serializar", "parsear", "compilar"],
        answer: 1,
        why: "Parsear = texto → objeto; serializar = objeto → texto.",
      },
    ],
    activity: {
      title: "Ida y vuelta",
      steps: [
        "Crea un diccionario con tus datos.",
        "Serialízalo a JSON (texto) e imprímelo.",
        "Vuelve a parsearlo y comprueba que recuperas el objeto.",
      ],
    },
    selfCheck: [
      "Reconozco la estructura de un JSON.",
      "Parseo y serializo entre JSON y objetos.",
      "Detecto JSON inválido (comillas/comas).",
    ],
    summary: [
      "JSON = datos en texto, con forma de diccionario/lista.",
      "Parsear (texto→objeto) y serializar (objeto→texto).",
      "Comillas dobles, sin comas finales ni comentarios.",
    ],
  },

  "prog-modulos": {
    intro:
      "Nadie escribe todo desde cero. Los módulos y librerías te dejan reutilizar código —tuyo o de la comunidad— con una línea. Saber importar bien es multiplicar lo que puedes hacer.",
    goal: "aprovechar módulos y librerías en tus programas.",
    sections: [
      {
        h: "import: traer código ya hecho",
        tldr: "Un módulo es un archivo con funciones listas para usar.",
        code: "import random\nrandom.randint(1, 6)   # dado\n\nfrom math import sqrt\nsqrt(16)               # 4.0",
      },
      {
        h: "Escribir vs. importar",
        tldr: "Antes de programar algo común, comprueba si ya existe.",
        compare: {
          left: {
            title: "Reinventar",
            points: ["Escribes tú la raíz cuadrada", "Más código, más bugs", "Pierdes tiempo"],
          },
          right: {
            title: "Importar",
            points: ["from math import sqrt", "Probado por millones", "Te centras en tu problema"],
          },
          note: "La potencia de un lenguaje está tanto en su sintaxis como en su ecosistema.",
        },
        more: [
          "La librería estándar trae mucho (math, random, datetime, json…).",
          "Para paquetes externos se usa un gestor (p. ej. pip); instálalos en entornos aislados.",
        ],
        tip: "No importes '*' (todo): trae nombres que chocan. Importa lo que usas: 'from math import sqrt'.",
      },
    ],
    practice: [
      {
        kind: "fill",
        q: "Palabra clave para traer un módulo completo: ___ random",
        accept: ["import"],
        hint: "import…",
        why: "'import random' trae el módulo entero.",
      },
      {
        kind: "choice",
        q: "Antes de escribir una función de raíz cuadrada, lo sensato es…",
        options: [
          "escribirla desde cero siempre",
          "comprobar si ya existe (math.sqrt)",
          "copiarla de otro proyecto",
        ],
        answer: 1,
        why: "Reutilizar código probado ahorra tiempo y bugs.",
      },
      {
        kind: "choice",
        q: "¿Por qué evitar 'from modulo import *'?",
        options: [
          "Es más lento",
          "Trae muchos nombres que pueden chocar y oscurecen de dónde viene cada cosa",
          "No funciona nunca",
        ],
        answer: 1,
        why: "Importar todo contamina el espacio de nombres.",
      },
    ],
    activity: {
      title: "Apóyate en el ecosistema",
      steps: [
        "Haz un juego de adivinar un número usando random.",
        "Usa datetime para mostrar la fecha actual.",
        "Anota qué módulo de la librería estándar te sorprendió."],
    },
    selfCheck: [
      "Importo módulos y uso sus funciones.",
      "Reviso si algo ya existe antes de escribirlo.",
      "Importo solo lo que necesito.",
    ],
    summary: [
      "Los módulos reutilizan código con una línea.",
      "Importar > reinventar lo común.",
      "Evita 'import *'; importa lo que usas.",
    ],
  },

  "prog-herencia": {
    intro:
      "La herencia permite crear una clase a partir de otra: la nueva hereda lo que ya existe y añade o cambia lo suyo. Bien usada, evita duplicar código; mal usada, crea jerarquías frágiles.",
    goal: "reutilizar y especializar clases con herencia y polimorfismo.",
    sections: [
      {
        h: "Una subclase hereda y especializa",
        tldr: "Reutiliza lo común en la clase base; cambia lo específico en la hija.",
        code: "class Animal:\n    def hablar(self):\n        return \"...\"\n\nclass Perro(Animal):        # hereda de Animal\n    def hablar(self):       # y especializa\n        return \"Guau\"\n\nPerro().hablar()   # 'Guau'",
      },
      {
        h: "Polimorfismo y cuándo NO heredar",
        tldr: "Un mismo método, distinto comportamiento según la clase.",
        body: [
          "Puedes tratar a muchos objetos por igual (todos 'hablan') y cada uno responde a su manera. Pero si la relación no es un 'es-un', prefiere composición (tener, no ser).",
        ],
        compare: {
          left: {
            title: "Herencia (es-un)",
            points: ["Perro ES UN Animal", "Comparte y especializa", "Ojo: jerarquías profundas frágiles"],
          },
          right: {
            title: "Composición (tiene-un)",
            points: ["Coche TIENE UN Motor", "Más flexible", "Preferida en la práctica moderna"],
          },
          note: "Regla útil: 'favorece la composición sobre la herencia'.",
        },
        tip: "Antes de heredar, pregúntate: ¿es realmente un 'es-un'? Si dudas, probablemente quieres composición.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Que una subclase redefina un método de la base se llama…",
        options: ["herencia múltiple", "sobreescribir (polimorfismo)", "encapsular"],
        answer: 1,
        why: "Sobreescribir el método da comportamiento distinto: polimorfismo.",
      },
      {
        kind: "choice",
        q: "¿Cuándo es correcta la herencia?",
        options: [
          "Siempre que quieras reutilizar código",
          "Cuando existe una relación 'es-un' real",
          "Nunca",
        ],
        answer: 1,
        why: "Herencia modela 'es-un'; si no, usa composición.",
      },
      {
        kind: "choice",
        q: "«Coche tiene un Motor» sugiere…",
        options: ["herencia", "composición", "recursión"],
        answer: 1,
        why: "'tiene-un' es composición, no herencia.",
      },
    ],
    activity: {
      title: "Es-un vs tiene-un",
      steps: [
        "Crea una clase base (Figura) y dos subclases (Círculo, Cuadrado) con area().",
        "Recórrelas en una lista y llama a area() en cada una (polimorfismo).",
        "Piensa un caso donde composición sea mejor que herencia."],
    },
    selfCheck: [
      "Creo una subclase que hereda y especializa.",
      "Uso polimorfismo (mismo método, distinto comportamiento).",
      "Distingo 'es-un' (herencia) de 'tiene-un' (composición).",
    ],
    summary: [
      "Herencia: la subclase hereda y especializa la base.",
      "Polimorfismo: mismo método, comportamiento propio.",
      "Favorece la composición sobre la herencia.",
    ],
  },

  "prog-busqueda": {
    intro:
      "Buscar es la operación más común en programación. Hay una forma lenta que siempre funciona (lineal) y una rapidísima que exige una condición (binaria). Elegir bien marca la diferencia con muchos datos.",
    goal: "elegir y aplicar la búsqueda adecuada.",
    sections: [
      {
        h: "Lineal vs. binaria",
        tldr: "Binaria es logarítmica, pero exige datos ordenados.",
        compare: {
          left: {
            title: "Búsqueda lineal — O(n)",
            points: ["Revisa uno por uno", "Funciona con cualquier lista", "Lenta con millones"],
          },
          right: {
            title: "Búsqueda binaria — O(log n)",
            points: ["Descarta la mitad cada paso", "Exige lista ORDENADA", "Rapidísima a escala"],
          },
          note: "1.000.000 de elementos: lineal hasta 1M pasos; binaria ~20.",
        },
      },
      {
        h: "Cómo funciona la binaria",
        tldr: "Mira el centro y descarta la mitad donde no puede estar.",
        code: "# lista ordenada\nlo, hi = 0, len(a) - 1\nwhile lo <= hi:\n    mid = (lo + hi) // 2\n    if a[mid] == x: return mid\n    if a[mid] < x: lo = mid + 1\n    else:          hi = mid - 1",
        tip: "Es el mismo truco de 'adivina el número': si dices más alto/más bajo, encuentras un número del 1 al 1000 en ~10 intentos.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Qué necesita la búsqueda binaria para funcionar?",
        options: ["Que la lista esté ordenada", "Nada especial", "Que la lista sea pequeña"],
        answer: 0,
        why: "La binaria descarta mitades: solo vale si los datos están ordenados.",
      },
      {
        kind: "choice",
        q: "Coste de la búsqueda binaria:",
        options: ["O(n)", "O(log n)", "O(n²)"],
        answer: 1,
        why: "Descartar la mitad cada paso da coste logarítmico.",
      },
      {
        kind: "choice",
        q: "En una lista NO ordenada, para buscar debes usar…",
        options: ["binaria", "lineal", "ninguna"],
        answer: 1,
        why: "Sin orden, la binaria no aplica: toca lineal (o ordenar primero).",
      },
    ],
    activity: {
      title: "Adivina con estrategia",
      steps: [
        "Piensa un número del 1 al 100; pide a alguien que lo adivine diciendo 'más/menos'.",
        "Cuenta los intentos: con estrategia binaria serán ~7.",
        "Implementa la búsqueda binaria sobre una lista ordenada."],
    },
    selfCheck: [
      "Distingo búsqueda lineal de binaria y su coste.",
      "Sé que la binaria exige datos ordenados.",
      "Implemento una búsqueda binaria correcta.",
    ],
    summary: [
      "Lineal O(n): siempre vale, lenta a escala.",
      "Binaria O(log n): rapidísima, exige orden.",
      "Descartar la mitad cada paso es la clave.",
    ],
  },

  "prog-alcance": {
    intro:
      "¿Por qué una variable creada dentro de una función no existe fuera? Eso es el ámbito (scope): las reglas de quién ve qué. Entenderlo evita bugs sutiles y variables que se pisan sin querer.",
    goal: "controlar dónde vive y quién ve cada variable.",
    sections: [
      {
        h: "Local vs. global",
        tldr: "Lo creado dentro de una función vive y muere ahí.",
        code: "mensaje = \"global\"      # visible en todo el archivo\n\ndef saludar():\n    nombre = \"local\"     # solo existe dentro de saludar()\n    print(nombre, mensaje)\n\nsaludar()\nprint(nombre)  # ERROR: 'nombre' no existe aquí",
      },
      {
        h: "Por qué preferir lo local",
        tldr: "Menos variables compartidas = menos formas de romper algo.",
        compare: {
          left: {
            title: "Variables globales",
            points: [
              "Cualquiera las cambia",
              "Bugs difíciles de rastrear",
              "Funciones que dependen de un estado oculto",
            ],
          },
          right: {
            title: "Variables locales / parámetros",
            points: [
              "Cada función controla lo suyo",
              "Fáciles de razonar y probar",
              "Datos que entran por parámetros, salen por return",
            ],
          },
          note: "Regla: pasa datos por parámetros y devuélvelos; evita el estado global.",
        },
        more: [
          "Si una función necesita un dato, pásalo como parámetro (no lo leas de una global).",
          "Una función 'pura' (solo depende de sus parámetros) es la más fácil de probar.",
        ],
        tip: "Si te cuesta seguir de dónde sale un valor, casi siempre es una variable global escondida. Conviértela en parámetro.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Una variable creada dentro de una función…",
        options: [
          "existe en todo el programa",
          "solo existe dentro de esa función (local)",
          "borra las globales",
        ],
        answer: 1,
        why: "Las variables locales viven solo en su función.",
      },
      {
        kind: "choice",
        q: "La forma recomendada de dar un dato a una función es…",
        options: [
          "leerlo de una variable global",
          "pasarlo como parámetro",
          "escribirlo dentro de la función a mano",
        ],
        answer: 1,
        why: "Pasar por parámetros hace la función clara y testeable.",
      },
      {
        kind: "choice",
        q: "Abusar de variables globales suele causar…",
        options: [
          "código más rápido",
          "bugs difíciles de rastrear por estado compartido",
          "menos líneas siempre",
        ],
        answer: 1,
        why: "El estado global compartido es fuente de bugs difíciles.",
      },
    ],
    activity: {
      title: "De global a parámetro",
      steps: [
        "Escribe una función que dependa de una variable global.",
        "Refactorízala para que ese dato entre por parámetro.",
        "Comprueba que ahora es más fácil de probar con distintos valores.",
      ],
    },
    selfCheck: [
      "Distingo variables locales de globales.",
      "Paso datos por parámetros en vez de usar globales.",
      "Reconozco cuándo un bug viene de estado compartido.",
    ],
    summary: [
      "El ámbito define quién ve cada variable.",
      "Lo local vive dentro de su función.",
      "Pasa datos por parámetros; evita el estado global.",
    ],
  },

  "prog-solid": {
    intro:
      "Un objeto no debería enseñar todas sus tripas ni encargarse de mil cosas. La encapsulación (proteger el estado) y la responsabilidad única son la base de un diseño que no se convierte en un nudo imposible de mantener.",
    goal: "diseñar objetos cohesivos, protegidos y con una sola responsabilidad.",
    sections: [
      {
        h: "Encapsular: proteger el estado",
        tldr: "El objeto expone acciones, no sus datos internos crudos.",
        code: "class Cuenta:\n    def __init__(self):\n        self._saldo = 0          # 'privado' por convención\n    def depositar(self, x):\n        if x <= 0: raise ValueError(\"monto inválido\")\n        self._saldo += x         # el objeto valida y controla",
      },
      {
        h: "Responsabilidad única",
        tldr: "Una clase, una razón para cambiar.",
        compare: {
          left: {
            title: "Clase que hace de todo",
            points: [
              "Calcula, guarda en BD y envía correos",
              "Cambiar una cosa arriesga las demás",
              "Difícil de probar",
            ],
          },
          right: {
            title: "Responsabilidad única",
            points: [
              "Cada clase, un propósito",
              "Cambios aislados y seguros",
              "Fácil de probar y reutilizar",
            ],
          },
          note: "La 'S' de SOLID: Single Responsibility. Una clase, una razón para cambiar.",
        },
        tip: "Señal de alarma: si describes una clase con 'y' ('valida Y guarda Y notifica'), probablemente tiene demasiadas responsabilidades.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Encapsular significa…",
        options: [
          "exponer todos los atributos como públicos",
          "proteger el estado y exponer acciones controladas",
          "meter todo en una clase",
        ],
        answer: 1,
        why: "La encapsulación oculta el estado y lo cambia por métodos que validan.",
      },
      {
        kind: "choice",
        q: "El principio de responsabilidad única dice que una clase debe…",
        options: [
          "hacer el mayor número de cosas posible",
          "tener una sola razón para cambiar",
          "no tener métodos",
        ],
        answer: 1,
        why: "SRP: una clase, una responsabilidad, una razón para cambiar.",
      },
      {
        kind: "choice",
        q: "Describir una clase con muchos 'y' (valida Y guarda Y envía) es señal de…",
        options: [
          "buen diseño",
          "demasiadas responsabilidades",
          "encapsulación",
        ],
        answer: 1,
        why: "Muchas responsabilidades → conviene dividir la clase.",
      },
    ],
    activity: {
      title: "Una razón para cambiar",
      steps: [
        "Toma una clase que haga varias cosas (calcular + guardar + notificar).",
        "Sepárala en clases con una responsabilidad cada una.",
        "Protege el estado interno y exponlo solo por métodos.",
      ],
    },
    selfCheck: [
      "Encapsulo el estado y lo cambio con métodos que validan.",
      "Doy a cada clase una sola responsabilidad.",
      "Detecto clases que hacen demasiado.",
    ],
    summary: [
      "Encapsular = proteger el estado, exponer acciones.",
      "Responsabilidad única: una clase, una razón para cambiar.",
      "Si la describes con muchos 'y', divídela.",
    ],
  },

  "prog-eventos": {
    intro:
      "Una web cobra vida cuando reacciona: un clic, una tecla, un formulario enviado. La programación dirigida por eventos es 'cuando pase X, haz Y', y es el corazón de toda interfaz interactiva.",
    goal: "responder a acciones del usuario para crear interfaces vivas.",
    sections: [
      {
        h: "Escuchar un evento",
        tldr: "Registras una función que se ejecuta cuando ocurre algo.",
        code: "const boton = document.querySelector('#saludar');\n\nboton.addEventListener('click', () => {\n  alert('¡Hola!');   // se ejecuta al hacer clic\n});",
      },
      {
        h: "El patrón: estado → evento → actualizar",
        tldr: "El evento cambia un dato; luego repintas la interfaz.",
        body: [
          "Un buen manejador no toca la pantalla a lo loco: actualiza el estado (una variable) y refleja ese estado en el DOM. Así la interfaz siempre muestra la verdad.",
        ],
        examples: [
          { en: "Contador", ipa: "count++; span.textContent = count;", es: "El clic incrementa el dato y actualiza lo que se ve." },
        ],
        tip: "Evita registrar el mismo listener varias veces (p. ej. dentro de un bucle que se repite): acabarás ejecutando la acción de más.",
      },
    ],
    practice: [
      {
        kind: "fill",
        q: "Método para escuchar un evento en un elemento: boton.___('click', fn)",
        accept: ["addEventListener"],
        hint: "addEvent…",
        why: "addEventListener(tipo, función) registra el manejador.",
      },
      {
        kind: "choice",
        q: "El patrón recomendado al manejar un evento es…",
        options: [
          "tocar el DOM directamente sin estado",
          "actualizar el estado y reflejarlo en el DOM",
          "recargar la página",
        ],
        answer: 1,
        why: "Estado como fuente de verdad; el DOM refleja el estado.",
      },
      {
        kind: "choice",
        q: "Un ejemplo de evento del usuario es…",
        options: ["un clic", "una variable", "un comentario"],
        answer: 0,
        why: "Clics, teclas y envíos de formulario son eventos del usuario.",
      },
    ],
    activity: {
      title: "Interfaz que reacciona",
      steps: [
        "Crea un botón y un contador en la página.",
        "Con addEventListener, incrementa el contador al hacer clic.",
        "Reto: un botón para restar y otro para reiniciar."],
    },
    selfCheck: [
      "Registro eventos con addEventListener.",
      "Actualizo el estado y reflejo el cambio en el DOM.",
      "Evito registrar listeners duplicados.",
    ],
    summary: [
      "Eventos = 'cuando pase X, haz Y'.",
      "addEventListener(tipo, función).",
      "Actualiza el estado y refléjalo en el DOM.",
    ],
  },

  "prog-rest": {
    intro:
      "Cuando un frontend habla con un backend, necesitan un acuerdo sobre cómo pedir y enviar datos. REST es el estilo dominante: organiza la API en recursos con URLs claras y usa los verbos de HTTP para las acciones.",
    goal: "entender y diseñar una API REST.",
    sections: [
      {
        h: "Recursos + verbos HTTP",
        tldr: "La URL nombra la cosa; el método HTTP dice qué hacer con ella.",
        code: "GET    /tareas        # listar tareas\nGET    /tareas/42     # ver la tarea 42\nPOST   /tareas        # crear una tarea\nPUT    /tareas/42     # actualizar la 42\nDELETE /tareas/42     # borrar la 42",
      },
      {
        h: "El error clásico: verbos en la URL",
        tldr: "La acción va en el método, no en la ruta.",
        compare: {
          left: {
            title: "No RESTful",
            points: ["/getTareas", "/crearTarea", "/borrarTarea?id=42", "La URL 'hace' cosas"],
          },
          right: {
            title: "RESTful",
            points: ["GET /tareas", "POST /tareas", "DELETE /tareas/42", "La URL nombra recursos"],
          },
          note: "Recursos en la URL (sustantivos); acciones en el método (GET/POST/…).",
        },
        tip: "Piensa en las URLs como sustantivos (cosas) y en los métodos como verbos (acciones). '/tareas' + POST, no '/crearTarea'.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "En REST, ¿qué indica la ACCIÓN a realizar?",
        options: ["la URL", "el método HTTP (GET/POST/…)", "el navegador"],
        answer: 1,
        why: "La URL nombra el recurso; el método dice qué hacer.",
      },
      {
        kind: "choice",
        q: "¿Cuál URL es más RESTful para crear una tarea?",
        options: ["GET /crearTarea", "POST /tareas", "GET /tareas/crear"],
        answer: 1,
        why: "Recurso 'tareas' + método POST para crear.",
      },
      {
        kind: "choice",
        q: "Poner verbos en la URL (/getUsers) es…",
        options: ["lo recomendado", "un antipatrón (no RESTful)", "obligatorio"],
        answer: 1,
        why: "Los verbos van en el método HTTP, no en la ruta.",
      },
    ],
    activity: {
      title: "Diseña una API",
      steps: [
        "Elige un recurso (libros, notas, productos).",
        "Define sus endpoints CRUD con recurso + método.",
        "Revisa que no haya verbos en las URLs."],
    },
    selfCheck: [
      "Nombro recursos en la URL (sustantivos).",
      "Uso el método HTTP para la acción.",
      "Evito verbos en las rutas.",
    ],
    summary: [
      "REST = recursos (URL) + verbos (método HTTP).",
      "GET leer, POST crear, PUT actualizar, DELETE borrar.",
      "Sustantivos en la URL; acciones en el método.",
    ],
  },

  "prog-codigo-limpio": {
    intro:
      "El código se lee muchas más veces de las que se escribe. Escribir 'limpio' —nombres claros, funciones pequeñas, sin trucos— no es estética: es lo que hace que tú y tu equipo podáis entenderlo y cambiarlo dentro de seis meses.",
    goal: "escribir código legible y mantenible.",
    sections: [
      {
        h: "El nombre lo es (casi) todo",
        tldr: "Un buen nombre hace innecesario el comentario.",
        compare: {
          left: {
            title: "Confuso",
            points: ["def f(x, y):", "d = x * y", "tmp, aux, data1"],
          },
          right: {
            title: "Limpio",
            points: ["def area(base, altura):", "superficie = base * altura", "nombres que dicen QUÉ son"],
          },
          note: "Si necesitas un comentario para explicar un nombre, cambia el nombre.",
        },
      },
      {
        h: "Funciones pequeñas que hacen una cosa",
        tldr: "Si una función necesita comentarios de sección, divídela.",
        code: "# en vez de una función de 60 líneas...\ndef procesar_pedido(p):\n    validar(p)\n    total = calcular_total(p)\n    guardar(p, total)\n    notificar(p)",
        tip: "Regla práctica: si no puedes nombrar una función con un verbo claro, probablemente hace demasiadas cosas.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "El mejor nombre para una función que calcula el área es…",
        options: ["f(x, y)", "area(base, altura)", "calc()"],
        answer: 1,
        why: "El nombre describe qué hace y qué recibe.",
      },
      {
        kind: "choice",
        q: "Si una función necesita comentarios que separan secciones, conviene…",
        options: [
          "dejarla así",
          "dividirla en funciones más pequeñas",
          "borrar los comentarios",
        ],
        answer: 1,
        why: "Esas secciones suelen ser funciones esperando a nacer.",
      },
      {
        kind: "choice",
        q: "El código limpio importa sobre todo porque…",
        options: [
          "se ve bonito",
          "se lee muchas más veces de las que se escribe",
          "corre más rápido",
        ],
        answer: 1,
        why: "La legibilidad ahorra tiempo a lo largo de la vida del código.",
      },
    ],
    activity: {
      title: "Refactor de legibilidad",
      steps: [
        "Toma una función tuya larga o con nombres pobres.",
        "Renombra variables/funciones para que digan QUÉ son.",
        "Divídela en funciones pequeñas con un verbo claro cada una."],
    },
    selfCheck: [
      "Uso nombres que explican qué son las cosas.",
      "Escribo funciones pequeñas con una sola tarea.",
      "Prefiero un buen nombre a un comentario.",
    ],
    summary: [
      "Nombres claros > comentarios.",
      "Funciones pequeñas que hacen una cosa.",
      "Se escribe una vez; se lee muchas.",
    ],
  },

  "prog-pilas-colas": {
    intro:
      "A veces el ORDEN en que sacas los datos importa tanto como los datos. Las pilas (el último en entrar sale primero) y las colas (el primero en entrar sale primero) modelan procesos que ves cada día.",
    goal: "usar pilas (LIFO) y colas (FIFO) para modelar procesos reales.",
    sections: [
      {
        h: "LIFO vs. FIFO",
        tldr: "Pila: como platos apilados. Cola: como la fila del súper.",
        compare: {
          left: {
            title: "Pila (LIFO)",
            points: [
              "Último en entrar, primero en salir",
              "Deshacer (Ctrl+Z), historial del navegador",
              "push (apilar) / pop (desapilar)",
            ],
          },
          right: {
            title: "Cola (FIFO)",
            points: [
              "Primero en entrar, primero en salir",
              "Tareas por procesar, impresora",
              "enqueue (encolar) / dequeue (desencolar)",
            ],
          },
          note: "Elige por el orden en que necesitas sacar los elementos.",
        },
      },
      {
        h: "Con una lista basta para empezar",
        tldr: "append + pop implementan una pila en Python.",
        code: "pila = []\npila.append('a')   # apilar\npila.append('b')\npila.pop()          # 'b' (el último)  → LIFO",
        tip: "Verificar paréntesis balanceados, deshacer acciones o recorrer en profundidad: si piensas 'lo último primero', quieres una pila.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Una pila sigue el orden…",
        options: ["FIFO (primero en entrar, primero en salir)", "LIFO (último en entrar, primero en salir)", "aleatorio"],
        answer: 1,
        why: "Pila = LIFO, como platos apilados.",
      },
      {
        kind: "choice",
        q: "La función 'Deshacer' (Ctrl+Z) se modela naturalmente con…",
        options: ["una cola", "una pila", "un diccionario"],
        answer: 1,
        why: "Deshaces la última acción primero → pila (LIFO).",
      },
      {
        kind: "choice",
        q: "Una fila de tareas por procesar en orden de llegada es…",
        options: ["una pila", "una cola (FIFO)", "un set"],
        answer: 1,
        why: "Primero en llegar, primero en procesarse → cola (FIFO).",
      },
    ],
    activity: {
      title: "LIFO y FIFO en acción",
      steps: [
        "Implementa una pila con una lista (append/pop) y pruébala.",
        "Úsala para comprobar si '(())' tiene los paréntesis balanceados.",
        "Piensa un caso de tu vida diaria que sea claramente una cola."],
    },
    selfCheck: [
      "Distingo LIFO (pila) de FIFO (cola).",
      "Implemento una pila con una lista.",
      "Elijo pila o cola según el orden de salida.",
    ],
    summary: [
      "Pila = LIFO (último primero); cola = FIFO (primero primero).",
      "Pila: deshacer, historial. Cola: tareas, impresora.",
      "Elige por el orden en que sacas los datos.",
    ],
  },

  "prog-sql-escritura": {
    intro:
      "Consultar datos es la mitad; la otra mitad es cambiarlos. INSERT, UPDATE y DELETE crean, modifican y borran registros. Son poderosos… y peligrosos si olvidas una palabra.",
    goal: "crear, actualizar y borrar registros con SQL de forma segura.",
    sections: [
      {
        h: "Las tres operaciones de escritura",
        tldr: "INSERT crea, UPDATE modifica, DELETE borra.",
        code: "INSERT INTO productos (nombre, precio)\nVALUES ('Camiseta', 25);\n\nUPDATE productos SET precio = 20\nWHERE id = 7;\n\nDELETE FROM productos\nWHERE id = 7;",
      },
      {
        h: "El WHERE que salva vidas",
        tldr: "UPDATE o DELETE sin WHERE afecta a TODAS las filas.",
        body: [
          "«UPDATE productos SET precio = 0;» sin WHERE pone a cero TODOS los precios. «DELETE FROM productos;» borra la tabla entera. El WHERE limita la operación a las filas correctas.",
        ],
        tip: "Antes de un UPDATE/DELETE, escribe primero un SELECT con el mismo WHERE para ver EXACTAMENTE qué filas vas a tocar.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Qué comando AÑADE un registro nuevo?",
        options: ["UPDATE", "INSERT", "DELETE"],
        answer: 1,
        why: "INSERT INTO … VALUES … crea una fila nueva.",
      },
      {
        kind: "choice",
        q: "«DELETE FROM productos;» (sin WHERE) hace…",
        options: [
          "borrar una fila",
          "borrar TODAS las filas de la tabla",
          "nada",
        ],
        answer: 1,
        why: "Sin WHERE, DELETE afecta a toda la tabla. ¡Cuidado!",
      },
      {
        kind: "fill",
        q: "Cláusula imprescindible para limitar un UPDATE a ciertas filas: ___",
        accept: ["where"],
        hint: "La misma que filtra en SELECT.",
        why: "WHERE limita qué filas se modifican o borran.",
      },
    ],
    activity: {
      title: "Escribe con red de seguridad",
      steps: [
        "En un entorno SQL, inserta 3 productos.",
        "Actualiza el precio de uno usando WHERE id = ...",
        "Antes de borrar, haz un SELECT con el mismo WHERE para confirmar."],
    },
    selfCheck: [
      "Inserto registros con INSERT.",
      "Actualizo y borro usando siempre WHERE.",
      "Compruebo con SELECT antes de un DELETE/UPDATE.",
    ],
    summary: [
      "INSERT crea, UPDATE modifica, DELETE borra.",
      "Sin WHERE, UPDATE/DELETE afectan a TODA la tabla.",
      "SELECT con el mismo WHERE antes de escribir.",
    ],
  },

  "prog-abstraccion": {
    intro:
      "Ningún cerebro abarca un programa entero de golpe. La abstracción es el superpoder que lo hace posible: esconder el 'cómo' tras un nombre claro y quedarte con el 'qué'. Usas abstracciones todo el día: conduces un coche sin pensar en la combustión.",
    goal: "diseñar soluciones por capas de abstracción y descomponer un problema en piezas.",
    sections: [
      {
        h: "Abstraer = ocultar el detalle tras una interfaz",
        tldr: "Un buen nombre te deja usar algo sin saber cómo funciona por dentro.",
        body: [
          "Cuando llamas a `len(lista)` no piensas en cómo cuenta: confías en el nombre. Eso es una abstracción: una 'caja' con una etiqueta clara y las tripas escondidas.",
          "Programar bien es crear tus propias cajas: funciones y módulos con nombres tan claros que otros (y tu yo futuro) los usen sin abrir la tapa.",
        ],
        examples: [
          {
            term: "sin abstraer",
            text: "Todo el cálculo mezclado en una línea",
            mono: "precio = base + base * 0.21 - (base * 0.1 if cupon else 0)",
            sub: "Funciona, pero hay que releerlo entero para entenderlo.",
          },
          {
            term: "abstraído",
            text: "El detalle vive tras un nombre",
            mono: "precio = precio_final(base, cupon)",
            sub: "Se lee como una frase. El 'cómo' está dentro de la función.",
          },
        ],
      },
      {
        h: "Descomponer = dividir en piezas de una sola responsabilidad",
        tldr: "Una función, una tarea. Si hace 'y', pártela.",
        body: [
          "Descomponer es cortar un problema grande en subproblemas pequeños que puedas resolver y probar por separado. Cada pieza debe tener una responsabilidad única.",
        ],
        code: "# monolito: hace demasiado\ndef procesar(pedido): ...  # valida, calcula, guarda, envía email\n\n# descompuesto: cada pieza una tarea\ndef validar(pedido): ...\ndef calcular_total(pedido): ...\ndef guardar(pedido): ...\ndef enviar_confirmacion(pedido): ...",
        more: [
          "Señal de que una función hace demasiado: al describirla usas la palabra 'y' ('valida y guarda y envía').",
          "Una función 'pura' (solo depende de sus parámetros y devuelve un valor) es la más fácil de abstraer y probar.",
        ],
        tip: "Diseña de arriba abajo: escribe primero los nombres de las piezas que te gustaría tener, y luego rellénalas. El nombre es el contrato.",
      },
      {
        h: "El equilibrio: ni de más, ni de menos",
        tldr: "Abstrae lo que se repite o confunde; no inventes capas 'por si acaso'.",
        compare: {
          left: {
            title: "Abstracción sana",
            points: ["Esconde complejidad real", "Nombre que se entiende solo", "Reduce repetición"],
          },
          right: {
            title: "Abstracción de más",
            points: ["Capas que nadie necesita", "Indirección que estorba", "Más difícil de seguir, no menos"],
          },
          note: "Una 'fuga de abstracción' es cuando tienes que abrir la caja para usarla: mala señal.",
        },
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "Abstraer, en programación, es sobre todo…",
        options: [
          "escribir código más corto a toda costa",
          "ocultar el detalle tras una interfaz clara (un nombre)",
          "usar palabras difíciles",
        ],
        answer: 1,
        why: "Abstraer = esconder el 'cómo' y exponer un 'qué' con nombre claro.",
      },
      {
        kind: "choice",
        q: "Una función que 'valida y calcula y guarda y envía' incumple…",
        options: [
          "la responsabilidad única (habría que descomponerla)",
          "nada, cuanto más haga mejor",
          "la sintaxis de Python",
        ],
        answer: 0,
        why: "Cada pieza debe tener una sola responsabilidad; esa función pide descomponerse.",
      },
      {
        kind: "match",
        q: "Empareja cada idea con su significado:",
        pairs: [
          { left: "Abstracción", right: "Ocultar el detalle tras un nombre" },
          { left: "Descomposición", right: "Dividir en piezas pequeñas" },
          { left: "Responsabilidad única", right: "Cada pieza hace una sola cosa" },
        ],
        why: "Son las tres herramientas para domar la complejidad.",
      },
      {
        kind: "order",
        q: "Ordena el diseño 'de arriba abajo' de una tarea:",
        items: [
          "Nombra las piezas que te gustaría tener",
          "Define qué recibe y qué devuelve cada una",
          "Implementa cada pieza por separado",
          "Únelas en la función principal",
        ],
        why: "Primero el 'qué' (nombres y contratos), luego el 'cómo' (implementación).",
      },
      {
        kind: "fill",
        q: "Una función que solo depende de sus parámetros y no toca nada externo se llama función ___.",
        accept: ["pura", "pure"],
        hint: "Se opone a las que dependen de estado global.",
        why: "Una función pura es la más fácil de abstraer, mover y probar.",
      },
    ],
    activity: {
      title: "Rediseña un monolito",
      steps: [
        "Toma un programa tuyo (o inventa uno) que haga varias cosas en una sola función.",
        "Escribe los NOMBRES de las funciones más pequeñas en que lo partirías (aún sin código).",
        "Implementa cada una y deja la función principal como una lista de llamadas legibles.",
        "Léelo en voz alta: ¿se entiende como una frase? Si sí, abstrajiste bien.",
      ],
    },
    selfCheck: [
      "Explico qué esconde y qué expone una abstracción.",
      "Divido un problema en piezas de responsabilidad única.",
      "Reconozco cuándo estoy abstrayendo de más.",
    ],
    summary: [
      "Abstraer: ocultar el 'cómo' tras un nombre claro.",
      "Descomponer: dividir en piezas de una sola tarea.",
      "Diseña de arriba abajo: nombres y contratos primero.",
      "Ni de más ni de menos: abstrae lo que se repite o confunde.",
    ],
  },

  "prog-matrices": {
    intro:
      "El mundo real casi nunca es una lista plana: un tablero, una hoja de cálculo, una imagen o una tabla son datos en dos dimensiones. Para modelarlos se usan listas de listas (matrices), y para recorrerlas, bucles dentro de bucles.",
    goal: "modelar datos en 2D y recorrerlos con bucles anidados sin perderte entre filas y columnas.",
    sections: [
      {
        h: "Una matriz es una lista de listas",
        tldr: "Cada elemento de la lista externa es, a su vez, una fila (otra lista).",
        code: "tablero = [\n    [1, 2, 3],   # fila 0\n    [4, 5, 6],   # fila 1\n    [7, 8, 9],   # fila 2\n]\n\ntablero[1][2]   # fila 1, columna 2  ->  6",
        body: [
          "El primer índice elige la fila; el segundo, la columna. Siempre en ese orden: `matriz[fila][columna]`.",
        ],
        tip: "Piensa en un edificio: primer índice = piso (fila), segundo = puerta (columna). Primero subes al piso, luego eliges la puerta.",
      },
      {
        h: "Recorrer con bucles anidados",
        tldr: "Un bucle para las filas y, dentro, otro para las columnas.",
        code: "for fila in tablero:\n    for valor in fila:\n        print(valor, end=' ')\n    print()          # salto de línea al acabar la fila",
        more: [
          "Si necesitas los índices, usa `for f in range(len(tablero))` y dentro `for c in range(len(tablero[f]))`.",
          "El bucle de dentro se ejecuta por completo en cada vuelta del de fuera: 3 filas × 3 columnas = 9 pasos.",
        ],
      },
      {
        h: "El error clásico: confundir filas y columnas",
        tldr: "`matriz[fila][columna]`, nunca al revés.",
        compare: {
          left: {
            title: "Correcto",
            points: ["`m[f][c]`", "Fila primero, columna después", "El bucle externo recorre filas"],
          },
          right: {
            title: "Trampa habitual",
            points: ["`m[c][f]` sin querer", "Índices cambiados → dato equivocado", "IndexError si las filas no son iguales"],
          },
        },
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "En `m[fila][columna]`, ¿qué índice va primero?",
        options: ["La columna", "La fila", "Da igual el orden"],
        answer: 1,
        why: "Siempre fila primero, columna después: m[fila][columna].",
      },
      {
        kind: "fill",
        q: "Dado `m = [[1,2,3],[4,5,6]]`, escribe la expresión que vale 6.",
        accept: ["m[1][2]"],
        hint: "6 está en la segunda fila (índice 1), tercera columna (índice 2).",
        why: "m[1][2] = fila 1, columna 2 = 6.",
      },
      {
        kind: "choice",
        q: "Para recorrer TODA una matriz necesitas…",
        options: ["un solo bucle", "dos bucles anidados", "ningún bucle"],
        answer: 1,
        why: "Uno para las filas y, dentro, otro para las columnas.",
      },
      {
        kind: "order",
        q: "Ordena los pasos para sumar todos los valores de una matriz:",
        items: [
          "Crear un acumulador total = 0",
          "Recorrer cada fila",
          "Dentro, recorrer cada valor de la fila",
          "Sumar el valor al total",
          "Al terminar, devolver total",
        ],
        why: "Acumulador fuera; bucle de filas y, dentro, bucle de valores sumando.",
      },
    ],
    activity: {
      title: "Suma una matriz 3×3",
      steps: [
        "Crea una matriz 3×3 con números a tu gusto.",
        "Con bucles anidados, suma todos sus valores en una variable total.",
        "Imprime también la suma de cada fila por separado.",
        "Reto: imprime la matriz 'bonita', una fila por línea.",
      ],
    },
    selfCheck: [
      "Creo y accedo a datos en una matriz con m[fila][columna].",
      "Recorro una matriz completa con bucles anidados.",
      "No confundo filas con columnas.",
    ],
    summary: [
      "Una matriz es una lista de listas (datos en 2D).",
      "Acceso: m[fila][columna], en ese orden.",
      "Se recorre con dos bucles anidados: filas y, dentro, columnas.",
      "Tableros, tablas e imágenes son datos anidados.",
    ],
  },

  "prog-ordenacion": {
    intro:
      "Ordenar parece trivial hasta que tienes un millón de elementos. Por eso existen muchos algoritmos de ordenación: unos simples y lentos, otros ingeniosos y rápidos. Entenderlos es la mejor puerta de entrada al diseño de algoritmos y a la complejidad.",
    goal: "entender cómo y por qué se ordena, y comparar el coste de distintas estrategias.",
    sections: [
      {
        h: "Simples (O(n²)) vs. eficientes (O(n log n))",
        tldr: "Las simples son fáciles de entender; las eficientes escalan.",
        compare: {
          left: {
            title: "Simples — O(n²)",
            points: ["Inserción, selección, burbuja", "Fáciles de razonar", "Lentas con muchos datos"],
          },
          right: {
            title: "Eficientes — O(n log n)",
            points: ["Merge sort, quicksort", "Dividen el problema", "Las que usa la práctica"],
          },
          note: "Con 1.000.000 de datos, la diferencia entre n² y n·log n es abismal (billones vs. millones de pasos).",
        },
      },
      {
        h: "Ordenación por inserción (la intuitiva)",
        tldr: "Como ordenar cartas en la mano: cada nueva carta la insertas en su sitio.",
        code: "def insercion(a):\n    for i in range(1, len(a)):\n        actual = a[i]\n        j = i - 1\n        while j >= 0 and a[j] > actual:\n            a[j + 1] = a[j]   # corre a la derecha\n            j -= 1\n        a[j + 1] = actual     # coloca en su hueco\n    return a",
        body: [
          "Recorres de izquierda a derecha; cada elemento lo 'insertas' donde toca entre los que ya están ordenados a su izquierda.",
        ],
      },
      {
        h: "En la vida real: usa el sort() del lenguaje",
        tldr: "Estudia las ordenaciones para aprender; en producción usa la del lenguaje.",
        code: "nums = [5, 2, 9, 1]\nnums.sort()          # in-place\nordenada = sorted(nums)  # nueva lista",
        tip: "Reinventar el sort en un proyecto real casi nunca compensa: el del lenguaje es eficiente y está probado. Aprende los algoritmos por lo que ENSEÑAN, no para reimplementarlos.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "El coste típico de las ordenaciones eficientes (merge, quick) es…",
        options: ["O(n²)", "O(n log n)", "O(1)"],
        answer: 1,
        why: "Dividen el problema, logrando O(n log n), muy superior a O(n²) a escala.",
      },
      {
        kind: "order",
        q: "Ordena los pasos de la ordenación por inserción para un elemento:",
        items: [
          "Tomar el elemento actual",
          "Comparar con los de su izquierda (ya ordenados)",
          "Correr a la derecha los mayores que él",
          "Colocar el elemento en el hueco que queda",
        ],
        why: "Insertar = abrir hueco corriendo los mayores y dejar el elemento en su sitio.",
      },
      {
        kind: "choice",
        q: "En un proyecto real, para ordenar una lista lo mejor es…",
        options: [
          "implementar tu propio quicksort",
          "usar el sort()/sorted() del lenguaje",
          "no ordenar nunca",
        ],
        answer: 1,
        why: "El sort del lenguaje es eficiente y está probado; reinventarlo rara vez compensa.",
      },
      {
        kind: "match",
        q: "Empareja cada algoritmo con su coste típico:",
        pairs: [
          { left: "Inserción", right: "O(n²)" },
          { left: "Merge sort", right: "O(n log n)" },
          { left: "Acceso a lista por índice", right: "O(1)" },
        ],
        why: "Simples O(n²); eficientes O(n log n); el acceso directo es constante.",
      },
    ],
    activity: {
      title: "Traza una ordenación a mano",
      steps: [
        "Escribe en papel la lista [5, 2, 4, 1].",
        "Aplica la ordenación por inserción paso a paso, anotando la lista tras cada inserción.",
        "Cuenta cuántas comparaciones hiciste.",
        "Reto: repite con [1, 2, 4, 5] (ya casi ordenada) y observa que la inserción hace muchísimas menos comparaciones.",
      ],
    },
    selfCheck: [
      "Distingo ordenaciones simples (O(n²)) de eficientes (O(n log n)).",
      "Explico cómo funciona la ordenación por inserción.",
      "Sé que en producción conviene usar el sort del lenguaje.",
    ],
    summary: [
      "Hay ordenaciones simples (O(n²)) y eficientes (O(n log n)).",
      "La inserción coloca cada elemento en su sitio, como cartas en la mano.",
      "El coste importa muchísimo a escala.",
      "Aprende los algoritmos por lo que enseñan; usa sort() en producción.",
    ],
  },

  "prog-listas-enlazadas": {
    intro:
      "Un array guarda sus elementos pegados en memoria; una lista enlazada los reparte y los une con 'flechas' (referencias). Entender esto te enseña qué es una referencia —la idea detrás de los punteros— y prepara el terreno para árboles y grafos.",
    goal: "entender las referencias y recorrer e insertar en una estructura encadenada.",
    sections: [
      {
        h: "Un nodo: un dato y una flecha al siguiente",
        tldr: "Cada nodo guarda su valor y una referencia al nodo siguiente.",
        code: "class Nodo:\n    def __init__(self, valor):\n        self.valor = valor\n        self.siguiente = None   # referencia al próximo nodo (o None al final)\n\n# a -> b -> c -> None\na = Nodo('a'); b = Nodo('b'); c = Nodo('c')\na.siguiente = b\nb.siguiente = c",
        body: [
          "La lista 'existe' mientras conserves la referencia al primer nodo (la 'cabeza'). Si la pierdes, pierdes toda la lista.",
        ],
      },
      {
        h: "Array vs. lista enlazada: cada uno gana en algo",
        tldr: "El array es rápido para acceder por posición; la enlazada, para insertar/borrar.",
        compare: {
          left: {
            title: "Array (lista de Python)",
            points: ["Acceso por índice O(1)", "Memoria contigua", "Insertar en medio: mover todo O(n)"],
          },
          right: {
            title: "Lista enlazada",
            points: ["Acceso por posición O(n)", "Insertar/borrar (con el nodo): O(1)", "Crece sin reservar de golpe"],
          },
          note: "No hay 'la mejor': eliges según lo que hagas más, acceder o insertar/borrar.",
        },
      },
      {
        h: "Insertar al inicio",
        tldr: "El nuevo nodo apunta a la cabeza actual y pasa a ser la nueva cabeza.",
        code: "def insertar_inicio(cabeza, valor):\n    nuevo = Nodo(valor)\n    nuevo.siguiente = cabeza   # 1) apunta a la lista actual\n    return nuevo               # 2) el nuevo es la nueva cabeza",
        tip: "El error clásico es reordenar mal las flechas y 'perder' el resto de la lista. Regla: primero enlaza el nodo nuevo, y solo después mueve la cabeza.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Qué guarda un nodo de una lista enlazada?",
        options: [
          "Solo su valor",
          "Su valor y una referencia al siguiente nodo",
          "Todos los valores de la lista",
        ],
        answer: 1,
        why: "Un nodo = dato + flecha (referencia) al siguiente.",
      },
      {
        kind: "match",
        q: "Empareja cada operación con su coste típico:",
        pairs: [
          { left: "Acceso por índice en un array", right: "O(1)" },
          { left: "Acceso por posición en enlazada", right: "O(n)" },
          { left: "Insertar al inicio de una enlazada", right: "O(1)" },
        ],
        why: "El array brilla en acceso; la enlazada, en insertar/borrar.",
      },
      {
        kind: "order",
        q: "Ordena los pasos para insertar un nodo al inicio:",
        items: [
          "Crear el nodo nuevo",
          "Hacer que el nodo nuevo apunte a la cabeza actual",
          "Convertir el nodo nuevo en la nueva cabeza",
        ],
        why: "Primero enlazas hacia la lista existente; solo después mueves la cabeza.",
      },
      {
        kind: "choice",
        q: "Si pierdes la referencia a la cabeza de la lista…",
        options: [
          "no pasa nada, se recupera sola",
          "pierdes el acceso a toda la lista",
          "el array se reordena",
        ],
        answer: 1,
        why: "Sin la cabeza no puedes llegar a ningún nodo: la lista se pierde.",
      },
    ],
    activity: {
      title: "Dibuja y encadena",
      steps: [
        "En papel, dibuja tres nodos con flechas: a → b → c → None.",
        "Inserta un nodo 'x' al inicio redibujando solo las flechas necesarias.",
        "Implementa la clase Nodo y una función que recorra e imprima la lista.",
        "Reto: inserta 'x' entre b y c cambiando solo dos flechas.",
      ],
    },
    selfCheck: [
      "Explico qué es una referencia usando nodos.",
      "Recorro una lista enlazada desde la cabeza.",
      "Inserto al inicio sin perder el resto de la lista.",
    ],
    summary: [
      "Un nodo = valor + referencia al siguiente.",
      "La lista vive mientras conserves la cabeza.",
      "Array: acceso O(1). Enlazada: insertar/borrar O(1).",
      "Al insertar, enlaza antes de mover la cabeza.",
    ],
  },

  "prog-hash": {
    intro:
      "¿Cómo encuentra un diccionario un valor entre millones de claves casi al instante? El secreto es el hashing: convertir la clave en un número que dice directamente dónde mirar. Es la magia detrás de dict y set, que usas constantemente.",
    goal: "entender por qué el acceso por clave es tan rápido (y por qué no hay orden).",
    sections: [
      {
        h: "La función hash: de clave a posición",
        tldr: "Una función convierte la clave en un número que indica el 'cajón' donde guardar.",
        body: [
          "En vez de buscar recorriendo (O(n)), el hash calcula la posición directamente a partir de la clave. Por eso el acceso es, en promedio, O(1): constante, no depende de cuántos datos haya.",
        ],
        code: "precios = {\"pan\": 1.2, \"leche\": 0.9}\nprecios[\"pan\"]          # no recorre: calcula dónde está -> 1.2\n\"leche\" in precios       # comprobación casi instantánea",
      },
      {
        h: "Colisiones: dos claves, el mismo cajón",
        tldr: "Cuando dos claves caen en el mismo sitio, la estructura lo resuelve internamente.",
        body: [
          "A veces dos claves distintas producen la misma posición: es una colisión. La tabla la gestiona (por ejemplo, guardando varias en el mismo cajón). Por eso el O(1) es 'en promedio', no siempre exacto.",
        ],
        more: [
          "Las claves de un dict/set deben ser inmutables (str, número, tupla): su hash no puede cambiar mientras están dentro.",
        ],
      },
      {
        h: "Sin orden garantizado",
        tldr: "La posición la decide el hash, no el orden en que insertaste.",
        tip: "Nunca dependas del 'orden' de un set. En dicts modernos de Python se conserva el orden de inserción, pero es un detalle del lenguaje, no una propiedad del hashing: no construyas lógica sobre eso.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Por qué buscar por clave en un dict es tan rápido?",
        options: [
          "porque recorre todos los elementos muy deprisa",
          "porque calcula la posición directamente con una función hash",
          "porque el dict está siempre ordenado",
        ],
        answer: 1,
        why: "El hash calcula dónde mirar: acceso O(1) en promedio, sin recorrer.",
      },
      {
        kind: "choice",
        q: "Que dos claves caigan en el mismo sitio se llama…",
        options: ["colisión", "iteración", "recursión"],
        answer: 0,
        why: "Una colisión; la tabla la resuelve internamente.",
      },
      {
        kind: "fill",
        q: "El coste medio del acceso por clave en una tabla hash es O(___).",
        accept: ["1", "o(1)", "1)"],
        hint: "Constante: no depende del número de elementos.",
        why: "O(1) en promedio: la clave lleva directo a su posición.",
      },
      {
        kind: "choice",
        q: "¿En qué NO debes confiar al usar un set?",
        options: ["en que no repite elementos", "en el orden de los elementos", "en la búsqueda rápida"],
        answer: 1,
        why: "El orden lo decide el hash; no construyas lógica sobre él.",
      },
    ],
    activity: {
      title: "Contador de palabras",
      steps: [
        "Toma un texto y sepáralo en palabras.",
        "Usa un diccionario para contar cuántas veces aparece cada palabra.",
        "Observa que, aunque el texto sea enorme, sumar cada palabra es instantáneo (hash).",
        "Reto: muestra las 3 palabras más frecuentes.",
      ],
    },
    selfCheck: [
      "Explico qué hace una función hash.",
      "Sé qué es una colisión a alto nivel.",
      "Justifico el O(1) medio del acceso por clave.",
      "No supongo orden en un dict/set.",
    ],
    summary: [
      "El hashing convierte la clave en una posición directa.",
      "Por eso dict/set acceden en O(1) promedio.",
      "Las colisiones se gestionan internamente.",
      "No dependas del orden de un dict/set.",
    ],
  },

  "prog-arboles-grafos": {
    intro:
      "No todo se ordena en fila. Un sistema de archivos es un árbol; una red social o un mapa de rutas es un grafo. Son estructuras NO lineales, y recorrerlas bien (sin dar vueltas infinitas) es una habilidad clave.",
    goal: "modelar jerarquías y relaciones con árboles y grafos, y recorrerlos con seguridad.",
    sections: [
      {
        h: "Árbol: una jerarquía",
        tldr: "Un nodo raíz del que cuelgan hijos, y de ellos otros hijos.",
        body: [
          "Cada nodo tiene un padre (salvo la raíz) y cero o más hijos. No hay ciclos: nunca vuelves a un nodo ya visitado siguiendo hacia abajo.",
        ],
        examples: [
          { term: "árbol", text: "Carpetas y archivos", sub: "Una carpeta contiene subcarpetas y archivos: jerarquía pura." },
          { term: "árbol", text: "Comentarios y respuestas", sub: "Un comentario tiene respuestas, que tienen respuestas…" },
        ],
      },
      {
        h: "Grafo: una red de relaciones",
        tldr: "Nodos conectados por aristas, que SÍ pueden formar ciclos.",
        compare: {
          left: {
            title: "Árbol",
            points: ["Jerárquico (padre → hijos)", "Sin ciclos", "Un solo camino entre dos nodos"],
          },
          right: {
            title: "Grafo",
            points: ["Red (cualquiera con cualquiera)", "Puede tener ciclos", "Varios caminos posibles"],
          },
          note: "Un árbol es, de hecho, un grafo sin ciclos y conexo.",
        },
      },
      {
        h: "Recorrer sin dar vueltas: marca los visitados",
        tldr: "En un grafo con ciclos, recuerda por dónde pasaste o entrarás en bucle infinito.",
        code: "def recorrer(nodo, visitados):\n    if nodo in visitados:\n        return            # ya estuvimos: evita el ciclo\n    visitados.add(nodo)\n    for vecino in nodo.vecinos:\n        recorrer(vecino, visitados)",
        tip: "En árboles no hace falta marcar visitados (no hay ciclos), pero en grafos es imprescindible. El bug más típico es olvidarlo.",
      },
    ],
    practice: [
      {
        kind: "match",
        q: "Empareja cada caso con la estructura que lo modela mejor:",
        pairs: [
          { left: "Carpetas y archivos", right: "Árbol" },
          { left: "Amistades en una red social", right: "Grafo" },
          { left: "Rutas entre ciudades", right: "Grafo" },
        ],
        why: "Jerarquía → árbol; red de relaciones con posibles ciclos → grafo.",
      },
      {
        kind: "choice",
        q: "La diferencia clave entre árbol y grafo es que el grafo…",
        options: [
          "no puede tener nodos",
          "puede tener ciclos y varios caminos",
          "siempre es más pequeño",
        ],
        answer: 1,
        why: "El árbol es jerárquico y sin ciclos; el grafo puede tener ciclos.",
      },
      {
        kind: "choice",
        q: "Al recorrer un grafo, ¿qué evita los bucles infinitos?",
        options: [
          "ordenar los nodos",
          "marcar los nodos ya visitados",
          "usar más memoria",
        ],
        answer: 1,
        why: "Marcar visitados impide volver a entrar en un nodo y ciclar.",
      },
      {
        kind: "order",
        q: "Ordena la lógica de un recorrido seguro de un grafo:",
        items: [
          "Si el nodo ya está visitado, salir",
          "Marcar el nodo como visitado",
          "Procesar el nodo",
          "Recorrer cada vecino no visitado",
        ],
        why: "Comprobar visitados primero es lo que corta los ciclos.",
      },
    ],
    activity: {
      title: "Suma los nodos de un árbol",
      steps: [
        "Representa un árbol pequeño de números (un nodo con hijos).",
        "Escribe una función recursiva que devuelva la suma de todos los nodos.",
        "Pruébala con un árbol de 3 niveles.",
        "Reto: cuenta cuántos nodos hoja (sin hijos) tiene.",
      ],
    },
    selfCheck: [
      "Distingo un árbol (jerarquía) de un grafo (red).",
      "Recorro un árbol con recursión.",
      "Marco visitados al recorrer un grafo.",
      "Elijo la estructura adecuada para un caso.",
    ],
    summary: [
      "Árbol: jerarquía sin ciclos (archivos, comentarios).",
      "Grafo: red que puede tener ciclos (redes, rutas).",
      "Se recorren con recursión.",
      "En grafos, marca los visitados para no ciclar.",
    ],
  },

  "prog-modelado": {
    intro:
      "Guardar todo en una sola tabla gigante lleva al caos: datos repetidos que se contradicen. El modelado relacional reparte la información en tablas conectadas, para que cada dato viva en un solo sitio.",
    goal: "diseñar un esquema relacional coherente, sin datos duplicados.",
    sections: [
      {
        h: "Una tabla por 'cosa' (entidad)",
        tldr: "Usuarios en una tabla, pedidos en otra: cada concepto, su tabla.",
        body: [
          "Si un usuario hace muchos pedidos y repites su nombre y correo en cada fila de pedido, cualquier cambio (un correo nuevo) te obliga a corregir muchas filas… y alguna se te escapará.",
        ],
      },
      {
        h: "Clave foránea: la que conecta las tablas",
        tldr: "El pedido guarda el id del usuario, no todos sus datos.",
        code: "-- tabla usuarios: cada uno una vez\nusuarios(id, nombre, correo)\n\n-- tabla pedidos: apunta al usuario por su id (clave foránea)\npedidos(id, usuario_id, total, fecha)\n--            └── FK → usuarios.id",
        body: [
          "La clave foránea (`usuario_id`) es una referencia: el dato del usuario vive una sola vez en `usuarios`, y los pedidos lo señalan.",
        ],
      },
      {
        h: "Normalizar = no repetir",
        tldr: "Cada dato, en un único lugar; lo demás lo referencia.",
        compare: {
          left: {
            title: "Sin modelar (una tabla)",
            points: ["Nombre y correo repetidos en cada pedido", "Actualizar = tocar muchas filas", "Riesgo de datos contradictorios"],
          },
          right: {
            title: "Modelado (tablas relacionadas)",
            points: ["Datos del usuario una sola vez", "Actualizar = una fila", "Integridad garantizada por la FK"],
          },
        },
        tip: "Regla práctica: si copias el mismo dato en muchas filas, probablemente falta una tabla y una relación.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Qué conecta la tabla de pedidos con la de usuarios?",
        options: [
          "una copia de todos los datos del usuario",
          "una clave foránea (el id del usuario)",
          "el nombre del usuario en cada pedido",
        ],
        answer: 1,
        why: "La clave foránea referencia al usuario por su id; el dato no se copia.",
      },
      {
        kind: "choice",
        q: "El principal problema de repetir datos en muchas filas es…",
        options: [
          "que ocupa un poco más de espacio y ya",
          "que al actualizar surgen inconsistencias",
          "que la base de datos no arranca",
        ],
        answer: 1,
        why: "Datos duplicados → al cambiar uno, otros quedan desactualizados y se contradicen.",
      },
      {
        kind: "match",
        q: "Empareja cada término con su idea:",
        pairs: [
          { left: "Entidad", right: "Una 'cosa' que merece su tabla" },
          { left: "Clave foránea", right: "Referencia a otra tabla por id" },
          { left: "Normalizar", right: "No repetir el mismo dato" },
        ],
        why: "Son las tres ideas base del diseño relacional.",
      },
      {
        kind: "order",
        q: "Ordena los pasos para modelar 'usuarios y sus pedidos':",
        items: [
          "Identificar las entidades (usuario, pedido)",
          "Crear una tabla por entidad con su id",
          "Añadir la clave foránea usuario_id en pedidos",
          "Verificar que ningún dato se repite sin necesidad",
        ],
        why: "Entidades → tablas → relaciones → revisar redundancia.",
      },
    ],
    activity: {
      title: "Modela una tiendita",
      steps: [
        "Diseña en papel dos tablas: usuarios y pedidos.",
        "Marca la clave primaria de cada una y la clave foránea que las conecta.",
        "Escribe un ejemplo con 2 usuarios y 3 pedidos sin repetir datos de usuario.",
        "Reto: añade 'productos' y piensa cómo relacionar pedidos con productos.",
      ],
    },
    selfCheck: [
      "Separo la información en tablas por entidad.",
      "Uso claves foráneas para relacionar tablas.",
      "Detecto datos duplicados que piden una relación.",
    ],
    summary: [
      "Una tabla por entidad; cada dato en un solo lugar.",
      "La clave foránea conecta tablas por id.",
      "Normalizar evita duplicados e inconsistencias.",
      "Si copias un dato en muchas filas, falta una tabla.",
    ],
  },

  "prog-consumir-api": {
    intro:
      "Casi ninguna app vive aislada: el clima, un mapa, un pago o un login vienen de APIs externas. Consumir una API es pedir datos por HTTP a otro servicio y usar su respuesta (normalmente JSON) en tu programa.",
    goal: "integrar datos de una API externa en tu programa, manejando también los errores.",
    sections: [
      {
        h: "Pedir y recibir",
        tldr: "Haces una petición a una URL y recibes una respuesta (datos + código de estado).",
        code: "# Python\nimport requests\nr = requests.get(\"https://api.ejemplo.com/clima?ciudad=Lima\")\ndatos = r.json()      # convierte el JSON en dict\nprint(datos[\"temp\"])",
        examples: [
          {
            term: "JavaScript",
            text: "La misma idea con fetch",
            mono: "const r = await fetch(url);\nconst datos = await r.json();\nconsole.log(datos.temp);",
          },
        ],
      },
      {
        h: "El código de estado te dice qué pasó",
        tldr: "200 = bien; 404 = no existe; 500 = error del servidor.",
        code: "if r.status_code == 200:\n    usar(r.json())\nelse:\n    print(\"Algo falló:\", r.status_code)",
        more: [
          "Rango 2xx = éxito; 4xx = error tuyo (URL mal, sin permiso); 5xx = error del servidor.",
        ],
      },
      {
        h: "Errores: la red no siempre responde",
        tldr: "Puede no haber internet, tardar demasiado o venir vacío. Prevé el fallo.",
        code: "try:\n    r = requests.get(url, timeout=5)\n    r.raise_for_status()\n    datos = r.json()\nexcept requests.RequestException:\n    datos = None          # plan B: mensaje claro, no que reviente",
        tip: "El error más común de principiante es asumir que la API SIEMPRE responde y bien. Un buen programa maneja el fallo con elegancia (mensaje claro, valor por defecto).",
      },
    ],
    practice: [
      {
        kind: "match",
        q: "Empareja cada código de estado con su significado:",
        pairs: [
          { left: "200", right: "Todo bien" },
          { left: "404", right: "No encontrado" },
          { left: "500", right: "Error del servidor" },
        ],
        why: "2xx éxito, 4xx error del cliente, 5xx error del servidor.",
      },
      {
        kind: "choice",
        q: "Tras recibir la respuesta de una API JSON, normalmente…",
        options: [
          "la usas tal cual como texto",
          "la conviertes a dict/objeto con .json()",
          "la guardas como imagen",
        ],
        answer: 1,
        why: ".json() convierte el texto JSON en estructuras que tu código puede usar.",
      },
      {
        kind: "order",
        q: "Ordena los pasos para consumir una API con seguridad:",
        items: [
          "Hacer la petición (con timeout)",
          "Comprobar que la respuesta fue exitosa",
          "Convertir el JSON en datos usables",
          "Usar los datos (o mostrar un error si falló)",
        ],
        why: "Pedir → verificar → parsear → usar/manejar error.",
      },
      {
        kind: "choice",
        q: "¿Qué error de principiante evita un buen código?",
        options: [
          "usar variables con nombres claros",
          "suponer que la API siempre responde y sin fallos",
          "leer la documentación de la API",
        ],
        answer: 1,
        why: "Hay que prever fallos de red, respuestas de error y datos vacíos.",
      },
    ],
    activity: {
      title: "Muestra datos de una API pública",
      steps: [
        "Elige una API pública sin clave (por ejemplo, una de chistes, clima o cotizaciones).",
        "Haz la petición y muestra un par de campos de la respuesta.",
        "Añade manejo de error: si falla, muestra un mensaje claro en vez de romperse.",
        "Reto: si no hay internet, que el programa lo diga con calma.",
      ],
    },
    selfCheck: [
      "Hago una petición y uso la respuesta JSON.",
      "Interpreto los códigos de estado (200/404/500).",
      "Manejo fallos de red y respuestas vacías con elegancia.",
    ],
    summary: [
      "Consumir una API = pedir datos por HTTP y usar la respuesta.",
      "El JSON se convierte a dict/objeto con .json().",
      "El código de estado dice si salió bien (2xx) o mal (4xx/5xx).",
      "Prevé siempre el fallo: red caída, error o datos vacíos.",
    ],
  },

  "prog-arquitectura": {
    intro:
      "Un programa pequeño cabe en un archivo. Uno grande, si no se organiza, se vuelve un nudo donde tocar algo rompe otra cosa. La arquitectura es cómo repartes el código en piezas con responsabilidades claras para que el proyecto crezca sin volverse ingobernable.",
    goal: "estructurar una aplicación en capas y decidir con criterio cuándo aplicar un patrón.",
    sections: [
      {
        h: "Separar responsabilidades en capas",
        tldr: "Presentación, lógica y datos son trabajos distintos: sepáralos.",
        body: [
          "Una separación clásica: la capa de presentación (lo que ve el usuario), la de lógica de negocio (las reglas) y la de datos (guardar/leer). Cada una hace su trabajo y habla con la siguiente por una interfaz clara.",
        ],
        code: "# mezclado (difícil de mantener):\n# la función pinta en pantalla, calcula el precio y escribe en la BD, todo junto\n\n# en capas:\n#   presentacion/  -> muestra y recoge datos\n#   dominio/       -> reglas: calcular_precio(...)\n#   datos/         -> guardar_pedido(...), leer_pedido(...)",
      },
      {
        h: "Los patrones son soluciones a problemas repetidos",
        tldr: "Un patrón es una receta probada para un problema común, no una regla obligatoria.",
        body: [
          "Nombres como 'repositorio', 'fábrica' o 'observador' describen soluciones que la comunidad repite porque funcionan. Conocerlos te da vocabulario y evita reinventar la rueda.",
        ],
        more: [
          "No memorices patrones para usarlos todos: reconoce el problema y, si un patrón encaja, aplícalo.",
        ],
      },
      {
        h: "El peligro contrario: sobreingeniería",
        tldr: "Añadir capas y patrones 'por si acaso' complica sin aportar.",
        compare: {
          left: {
            title: "Arquitectura sana",
            points: ["Separa lo que cambia por motivos distintos", "Cada pieza se prueba sola", "Fácil de seguir"],
          },
          right: {
            title: "Sobreingeniería",
            points: ["Capas que nadie necesita", "Abstracciones para un solo caso", "Más difícil, no más fácil"],
          },
          note: "YAGNI: 'You Aren't Gonna Need It'. Añade estructura cuando el dolor aparece, no antes.",
        },
        tip: "Empieza simple. Refactoriza hacia más estructura cuando el código te lo pida (se repite, cuesta cambiarlo), no por adelantado.",
      },
    ],
    practice: [
      {
        kind: "match",
        q: "Empareja cada capa con su responsabilidad:",
        pairs: [
          { left: "Presentación", right: "Mostrar y recoger datos del usuario" },
          { left: "Lógica / dominio", right: "Aplicar las reglas del negocio" },
          { left: "Datos", right: "Guardar y leer de la base de datos" },
        ],
        why: "Cada capa un trabajo; se comunican por interfaces claras.",
      },
      {
        kind: "choice",
        q: "Un patrón de diseño es…",
        options: [
          "una regla que hay que aplicar siempre",
          "una solución probada a un problema que se repite",
          "un lenguaje de programación",
        ],
        answer: 1,
        why: "Es una receta reutilizable para un problema común, no una obligación.",
      },
      {
        kind: "choice",
        q: "Aplicar patrones y capas 'por si acaso' se llama…",
        options: ["refactorización", "sobreingeniería", "depuración"],
        answer: 1,
        why: "Sobreingeniería: complejidad que no responde a una necesidad real.",
      },
      {
        kind: "fill",
        q: "El principio que dice 'no lo añadas hasta que lo necesites' se abrevia ___.",
        accept: ["yagni"],
        hint: "You Aren't Gonna Need It.",
        why: "YAGNI: evita construir para un futuro que quizá no llegue.",
      },
    ],
    activity: {
      title: "Separa en capas",
      steps: [
        "Toma un programa que mezcle pantalla, reglas y datos en un solo sitio.",
        "Divídelo en tres partes: presentación, lógica y datos.",
        "Haz que la lógica no sepa nada de cómo se muestra ni de dónde se guarda.",
        "Reto: cambia la forma de guardar (de archivo a lista en memoria) sin tocar la lógica.",
      ],
    },
    selfCheck: [
      "Divido una app en capas con responsabilidades claras.",
      "Entiendo qué es un patrón y cuándo (no) usarlo.",
      "Reconozco y evito la sobreingeniería.",
    ],
    summary: [
      "Arquitectura = repartir el código en piezas con responsabilidad clara.",
      "Separa presentación, lógica y datos.",
      "Los patrones son recetas para problemas repetidos.",
      "Empieza simple; añade estructura cuando el código lo pida (YAGNI).",
    ],
  },

  "prog-proyecto": {
    intro:
      "Aprender a programar se demuestra construyendo algo que funciona de principio a fin. Este es tu proyecto integrador: eliges una idea pequeña pero completa, la defines, la construyes por partes, la versionas con Git y la compartes. Es donde todo lo aprendido se junta.",
    goal: "planificar, construir y publicar un proyecto propio completo.",
    sections: [
      {
        h: "Primero el alcance: define un MVP",
        tldr: "Decide la versión más pequeña que ya sea útil. Nada de 'todo'.",
        body: [
          "El error número uno es empezar a teclear sin saber qué construyes. Escribe en una frase qué hará tu app y lista solo lo IMPRESCINDIBLE (el MVP: producto mínimo viable). Lo demás son 'ideas para después'.",
        ],
        examples: [
          { text: "To-do", sub: "Añadir tarea, marcarla hecha, verlas. (Nada de recordatorios ni etiquetas… todavía.)" },
          { text: "Quiz", sub: "Mostrar preguntas, corregir, dar puntuación." },
          { text: "Gestor de gastos", sub: "Registrar un gasto, listarlos, ver el total." },
        ],
      },
      {
        h: "Divide en tareas y versiona desde el minuto uno",
        tldr: "Trocea el MVP en pasos pequeños y haz commits al terminar cada uno.",
        code: "git init\n# ...construyes la primera parte...\ngit add .\ngit commit -m \"Añadir tarea a la lista\"\n# cada pieza terminada = un commit con mensaje claro",
        more: [
          "Cada commit pequeño es un punto de guardado al que puedes volver. Commits claros = historia legible de tu proyecto.",
        ],
      },
      {
        h: "Termina, prueba y comparte",
        tldr: "Un proyecto 'terminado' funciona, está probado y publicado.",
        tip: "No busques la perfección: busca 'terminado y funcionando'. Prueba los caminos principales, escribe un README breve (qué es y cómo se ejecuta) y súbelo a GitHub. Un proyecto compartido vale más que diez a medias.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Por dónde se empieza un proyecto?",
        options: [
          "escribiendo código cuanto antes",
          "definiendo el alcance (qué hará el MVP)",
          "eligiendo el color de los botones",
        ],
        answer: 1,
        why: "Primero el alcance: sin saber qué construyes, te pierdes.",
      },
      {
        kind: "choice",
        q: "Un MVP es…",
        options: [
          "la versión con TODAS las funciones posibles",
          "la versión más pequeña que ya resulta útil",
          "el proyecto sin terminar",
        ],
        answer: 1,
        why: "Producto mínimo viable: lo imprescindible para que sirva.",
      },
      {
        kind: "order",
        q: "Ordena las fases de tu proyecto integrador:",
        items: [
          "Definir el alcance (MVP)",
          "Dividirlo en tareas pequeñas",
          "Construir cada tarea versionando con Git",
          "Probar los caminos principales",
          "Escribir el README y publicarlo",
        ],
        why: "Alcance → tareas → construir+versionar → probar → publicar.",
      },
      {
        kind: "choice",
        q: "¿Cuándo empiezas a usar Git en el proyecto?",
        options: ["al final, cuando ya está todo", "desde el inicio, con commits pequeños", "solo si algo falla"],
        answer: 1,
        why: "Versionar desde el minuto uno te da puntos de guardado e historia clara.",
      },
    ],
    activity: {
      title: "Construye y publica tu proyecto",
      steps: [
        "Elige UNA idea pequeña (to-do, quiz o gestor de gastos) y escribe su MVP en una frase.",
        "Lista las 3–5 tareas imprescindibles.",
        "Crea el repositorio con git init y ve haciendo commits al terminar cada tarea.",
        "Prueba los caminos principales y corrige lo que falle.",
        "Escribe un README (qué es y cómo se ejecuta) y súbelo a GitHub.",
      ],
    },
    selfCheck: [
      "Defino el alcance (MVP) antes de programar.",
      "Divido el trabajo en tareas pequeñas.",
      "Versiono con Git usando commits claros.",
      "Entrego un proyecto funcional y publicado.",
    ],
    summary: [
      "Primero el alcance: define un MVP en una frase.",
      "Divide en tareas y versiona con Git desde el inicio.",
      "Prueba, escribe un README y publícalo.",
      "Terminado y compartido vale más que perfecto a medias.",
    ],
  },

  "hito-prog-profesional": {
    intro:
      "Has llegado al cierre. La diferencia entre 'sé programar' y 'programo como profesional' no es saber más sintaxis: es que tu código, además de funcionar, es mantenible, está probado y se puede trabajar en equipo. Este hito confirma esas prácticas.",
    goal: "confirmar prácticas de ingeniería de nivel profesional sobre tu propio proyecto.",
    sections: [
      {
        h: "Qué separa a un profesional",
        tldr: "Que funcione es el mínimo. Mantenible, probado y colaborativo es el estándar.",
        body: [
          "Un aficionado busca que 'funcione hoy'. Un profesional busca que siga funcionando dentro de seis meses, que otra persona pueda entenderlo y cambiarlo, y que un cambio no rompa lo demás sin avisar.",
        ],
      },
      {
        h: "El checklist profesional",
        tldr: "Código legible, pruebas, control de versiones y un README.",
        bullets: [
          "Nombres claros y funciones con una sola responsabilidad (código limpio).",
          "Pruebas que cubren los caminos principales (si algo se rompe, te enteras).",
          "Historial Git con commits pequeños y mensajes claros.",
          "Un README que explique qué es el proyecto y cómo ejecutarlo.",
        ],
      },
      {
        h: "Aprender no termina aquí",
        tldr: "La ingeniería es un oficio que se mejora toda la vida.",
        tip: "Nadie 'termina' de aprender a programar. Los roadmaps (backend, frontend) te muestran el camino, pero el hábito más profesional es este: construir, recibir feedback, y volver a construir mejor.",
      },
    ],
    practice: [
      {
        kind: "choice",
        q: "¿Qué distingue el código profesional del que 'solo funciona'?",
        options: [
          "que usa el lenguaje más moderno",
          "que es mantenible, está probado y es colaborativo",
          "que es lo más corto posible",
        ],
        answer: 1,
        why: "Funcionar es el mínimo; el estándar es mantenible + probado + colaborativo.",
      },
      {
        kind: "match",
        q: "Empareja cada práctica con lo que te aporta:",
        pairs: [
          { left: "Pruebas", right: "Te avisan si un cambio rompe algo" },
          { left: "Control de versiones", right: "Historial y puntos de guardado" },
          { left: "Código limpio", right: "Otra persona lo entiende y lo cambia" },
        ],
        why: "Cada práctica profesional resuelve un problema real de mantenimiento.",
      },
      {
        kind: "choice",
        q: "Entregar un proyecto SIN pruebas ni control de versiones es…",
        options: [
          "lo normal y recomendable",
          "una mala práctica: frágil y difícil de mantener",
          "más rápido y por eso mejor",
        ],
        answer: 1,
        why: "Sin pruebas ni versiones, cualquier cambio es un riesgo a ciegas.",
      },
      {
        kind: "order",
        q: "Ordena un cierre profesional de tu proyecto:",
        items: [
          "Revisar que el código sea legible (nombres, funciones cortas)",
          "Añadir pruebas de los caminos principales",
          "Asegurar historial Git con mensajes claros",
          "Escribir/actualizar el README",
        ],
        why: "Legibilidad → pruebas → versiones → documentación: el checklist profesional.",
      },
    ],
    activity: {
      title: "Deja tu proyecto a nivel profesional",
      steps: [
        "Vuelve a tu proyecto integrador y repasa el checklist profesional.",
        "Añade al menos 2 pruebas de los caminos principales.",
        "Escribe o mejora el README (qué es, cómo se instala y se ejecuta).",
        "Revisa tu historial de commits: ¿se entiende qué hiciste en cada uno?",
        "Reto: pide a alguien que clone tu repo y lo ejecute solo con el README.",
      ],
    },
    selfCheck: [
      "Mi proyecto tiene pruebas de los caminos principales.",
      "Tengo un historial Git con mensajes claros.",
      "Mi código es legible para otra persona.",
      "Tengo un README que explica cómo usarlo.",
    ],
    summary: [
      "Profesional = mantenible + probado + colaborativo (no solo que funcione).",
      "Checklist: código limpio, pruebas, Git y README.",
      "Un cambio no debería romper lo demás sin avisar (pruebas).",
      "La ingeniería se mejora toda la vida: construye, recibe feedback, repite.",
    ],
  },
};
