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
};
