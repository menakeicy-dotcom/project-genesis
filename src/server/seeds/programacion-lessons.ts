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
};
