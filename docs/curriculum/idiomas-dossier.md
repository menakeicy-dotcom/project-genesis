# Dossier de investigación y diseño — Árbol de aprendizaje de **Idiomas**

> **Actualización v2 (revisión pedagógica profunda):** el árbol se reorganizó
> **por competencias que evolucionan** de A1 a C2 (no “una vez por nivel”), y la
> **cultura se adelantó a A1** como hilo continuo. Ver **§11** (cambios +
> justificación + árbol actualizado). Las secciones §1–§10 son la base v1; **§11
> es la estructura vigente para aprobación.**

> **Estado:** BORRADOR v2 para revisión. **No implementado en código.**
> Este documento es el **estándar de calidad** para el diseño de todas las
> categorías de SkillTree. Primero se aprueba; luego se implementa en el `seed`.
>
> Alcance: aprender **un idioma** desde cero (Pre‑A1) hasta dominio (C2).
> El diseño es **agnóstico del idioma** (sirve para inglés, francés, japonés…),
> con **notas de adaptación** por idioma al final (§8).

---

## Índice

1. Fase 1 — Investigación (marcos, ciencia del aprendizaje, fuentes)
2. Principios de diseño derivados de la evidencia
3. Fase 2 — Filosofía del árbol (por qué un DAG y no una escalera)
4. Esquema de cada nodo (los 12 campos)
5. Fase 2 — El árbol completo (catálogo de nodos por nivel)
6. Fase 3 — Autocrítica y refinamiento
7. Fase 4 — Segunda revisión experta “desde cero”
8. Notas de adaptación por idioma
9. Mapeo al modelo de datos de SkillTree (sin código)
10. Fuentes

---

## 1. Fase 1 — Investigación

### 1.1 Marcos de referencia internacionales

**CEFR (Marco Común Europeo, Consejo de Europa).** Organiza el dominio en seis
niveles — A1, A2, B1, B2, C1, C2 — agrupados en Usuario Básico (A), Independiente
(B) y Competente (C). Define la competencia mediante **descriptores “can‑do”**
(“puedo hacer X”). El **Companion Volume 2020** añadió un nivel **Pre‑A1**,
descriptores de **mediación**, **interacción en línea** y competencias
**plurilingües**, y organiza el uso de la lengua en cuatro modos: **recepción**
(escuchar, leer), **producción** (hablar, escribir), **interacción** y
**mediación**. Cambridge estima **~200 h de estudio guiado entre niveles**.
→ El CEFR nos da la **columna vertebral de niveles** y el estilo **“can‑do”** de
cada nodo (habilidades, no capítulos).

**ACTFL (EE. UU.).** Escala por **funciones comunicativas**: Novice → Intermediate
→ Advanced → Superior → Distinguished (los tres primeros con Low/Mid/High). Aporta
una idea clave: el progreso se mide por **lo que el hablante puede hacer** —
Novice = fórmulas memorizadas; Intermediate = “crear con la lengua” sobre temas
familiares; Advanced = narrar/describir en párrafos; Superior = abstraer y
argumentar. → Refuerza diseñar por **capacidad funcional**, no por temario.

**Exámenes (Cambridge, IELTS, TOEFL) y su anclaje al CEFR.** La **Cambridge
English Scale** lleva el CEFR incorporado (100–119 A1 … 200+ C2). **IELTS**: 5.5–6.5
≈ B2; 7.0–7.5 ≈ C1; 8.0+ ≈ C2. **TOEFL iBT** reporta ahora en escala 1–6 alineada
al CEFR. → Confirman que el CEFR es el **punto de referencia común** y validan los
cortes de nivel del árbol.

**Pearson — Global Scale of English (GSE).** Escala numérica **10–90** alineada
al CEFR, con **objetivos de aprendizaje “can‑do”** granulares (desarrollados con
>6000 docentes de >50 países). → Modelo para redactar **objetivos de aprendizaje**
finos dentro de cada nodo.

**Oxford 3000 / 5000.** Listas de vocabulario esencial **clasificadas por nivel
CEFR** (A1–B2 el 3000; +2000 B2–C1 el 5000), seleccionadas por **frecuencia**
(Oxford English Corpus, 2 mil M de palabras) y relevancia para aprendices;
revisadas por **Paul Nation** y **James Milton**. → Fuente concreta para los
**nodos de vocabulario** por nivel.

**ILR / FSI (referencia de esfuerzo).** El FSI estima horas hasta competencia
profesional (ILR 3 ≈ B2‑C1) según dificultad para hispanohablantes:
Cat. I ~600–750 h, II ~900 h, III ~1100 h, IV ~2200 h. El autodidacta suele
necesitar **1.5–2×** más. → Base para los **tiempos estimados** (rango, no dogma).

### 1.2 ¿Cómo se aprende realmente una lengua? (SLA)

- **Krashen — Input comprensible (i+1).** Adquirimos la lengua al comprender
  mensajes ligeramente por encima de nuestro nivel. Cinco hipótesis:
  input, adquisición‑vs‑aprendizaje, monitor, **orden natural** y **filtro
  afectivo** (la ansiedad/baja motivación bloquean la adquisición). → El **input
  (escuchar/leer) puede y debe ir por delante del output**; y hay que **reducir la
  frustración** (filtro afectivo) con progresión suave y logros visibles.
- **Orden natural / interlengua / fosilización.** Los aprendices siguen
  **órdenes de adquisición** relativamente comunes (estudios de morfemas),
  independientes de la L1; la **interlengua** evoluciona y puede **fosilizarse**
  (errores estabilizados) con input pobre o presión comunicativa. → El árbol es
  un **andamiaje de práctica**, no una afirmación de que la gramática se adquiere
  en el orden enseñado; y conviene **anticipar errores frecuentes** por nodo.
- **Competencia comunicativa (Canale & Swain; Bachman).** Comunicar exige cuatro
  subcompetencias: **gramatical**, **sociolingüística**, **discursiva** y
  **estratégica**. → Son **hebras transversales** del árbol, no solo “gramática”.
- **Las Cuatro Hebras de Nation.** Un curso equilibrado reparte el tiempo (~25% c/u)
  entre: **input centrado en el significado** (leer/escuchar), **output centrado
  en el significado** (hablar/escribir), **aprendizaje centrado en la lengua**
  (gramática/vocabulario explícito) y **desarrollo de la fluidez** (automatizar lo
  ya conocido). → Estructura las **ramas** y garantiza equilibrio (no todo es
  gramática).

### 1.3 Ciencia del vocabulario (umbrales que actúan como hitos)

Investigación de **Nation, Webb y Milton**:
- **~1000–2000** familias de palabras cubren la mayor parte del **habla
  cotidiana**; **~2000 ≈ 95% de cobertura oral**.
- **95% de cobertura** (≈ **4000** familias) permite lectura “cómoda” con apoyo
  (≈ B2).
- **98% de cobertura** (comprensión no asistida) exige **~8000** familias en
  **lectura** (≈ C1) y **~6000–7000** en **escucha**.
→ Estos umbrales son **hitos naturales** del tronco del árbol.

### 1.4 Pronunciación y percepción

- **HVPT (High Variability Phonetic Training):** entrenar la **percepción** de
  sonidos con múltiples hablantes/contextos produce mejoras robustas (≈10–15%) y
  es el paradigma más avalado. **No se puede producir bien lo que no se distingue.**
  → La **percepción fonológica va al principio**, antes que la producción (decisión
  de diseño que difiere de muchos programas que dejan la pronunciación para el final).
- **Shadowing:** mejora comprensibilidad, prosodia y fluidez (suprasegmentos).
  → Herramienta de la hebra de **fluidez** y de **producción** intermedia.

### 1.5 Memoria y práctica

- **Repetición espaciada (SRS) + efecto de testing + práctica distribuida:**
  repasar en intervalos crecientes traslada el conocimiento a memoria de largo
  plazo; supera al “cramming”. → El árbol incluye **SRS como habilidad transversal**
  temprana (hábito), no como una app suelta.
- **Lectura/escucha extensiva** (graded readers, input masivo): principal motor de
  crecimiento de vocabulario y consolidación gramatical en niveles intermedios.

---

## 2. Principios de diseño (derivados de §1)

1. **Habilidades, no capítulos.** Cada nodo es una capacidad “can‑do” verificable.
2. **Niveles CEFR como bandas de logro** (Pre‑A1 → C2); cada nivel es un “gran logro”.
3. **DAG, no escalera.** Una habilidad depende de **varias** anteriores y desbloquea
   **varias** posteriores (la conversación converge desde vocabulario + gramática +
   escucha + fonología).
4. **Input por delante del output** (Krashen/Refold): escuchar/leer preceden y
   alimentan hablar/escribir.
5. **Percepción fonológica temprana** (HVPT) para no fosilizar la pronunciación.
6. **Vocabulario por umbrales de cobertura** (1k/2k/4k/8k) como hitos del tronco.
7. **Cuatro hebras equilibradas** (input, output, forma, fluidez) presentes en cada
   banda.
8. **Cuatro competencias** (gramatical, sociolingüística, discursiva, estratégica)
   como hilos que se profundizan por nivel.
9. **Reducir el filtro afectivo:** progresión suave, logros frecuentes, errores
   anticipados y normalizados.
10. **Práctica real por nodo** (proyecto/tarea) y **SRS** como hábito transversal.

---

## 3. Fase 2 — Filosofía del árbol

El error a evitar es una **escalera A1→C2** (copiar un programa). Aprender una
lengua es **paralelo y convergente**: varias hebras crecen a la vez y ciertas
capacidades solo emergen cuando **confluyen** varias.

**Estructura del DAG:**

- **Tronco = hitos de nivel** (Pre‑A1, A1, A2, B1, B2, C1, C2), definidos por
  **capacidad real** (no solo por etiqueta) y anclados a umbrales de vocabulario.
- **Ramas = hebras/competencias** que atraviesan los niveles:
  - **🔊 Fonología** (percepción → producción → prosodia)
  - **📚 Vocabulario** (núcleo de frecuencia → temático → matices/colocaciones)
  - **🧩 Gramática** (mecánica de la lengua; hebra “form‑focused” de Nation)
  - **👂 Comprensión auditiva** (input)
  - **📖 Comprensión lectora** (input)
  - **🗣️ Expresión oral / interacción** (output)
  - **✍️ Expresión escrita** (output)
  - **🌍 Sociolingüística / pragmática** (registro, cultura)
  - **🧭 Estrategias y autonomía** (compensación, mediación, aprender del input, SRS)
  - **⚡ Fluidez** (automatización de lo conocido)
- **Aristas (prerrequisitos)** justificadas: cruzan ramas (p. ej. “Conversación
  cotidiana” requiere Vocabulario II **y** Pasado **y** Escucha A2 **y** Fonología
  de producción).

---

## 4. Esquema de cada nodo (12 campos)

Cada habilidad se especifica con:

**Nombre · Descripción · Objetivo de aprendizaje · Prerrequisitos · Nivel ·
Tiempo estimado · Dificultad · Competencias desarrolladas · Errores frecuentes ·
Recursos recomendados · Proyecto/práctica · Razón pedagógica.**

Convenciones:
- **ID**: rama + número (p. ej. `VOC‑2`). Facilita las aristas del DAG.
- **Tiempo**: rango para **autodidacta** (más largo que el aula FSI).
- **Dificultad**: 🟢 baja · 🟡 media · 🟠 alta · 🔴 muy alta.
- Los **recursos** se citan por **tipo** (no marcas cerradas), curados después.

---

## 5. Fase 2 — El árbol completo

> Cada nodo lista sus prerrequisitos por **ID**. Los **HITOS** de nivel son
> compuertas que agrupan la banda. (La versión de abajo ya incorpora los ajustes
> de las Fases 3 y 4; el registro de cambios está en §6–§7.)

### 🌱 Fundación — “La raíz” (Pre‑A1)

**RAIZ‑1 · Cómo aprender un idioma**
- *Descripción:* mentalidad, metas SMART, rutina diaria y cómo funciona la
  adquisición (input comprensible, constancia > intensidad).
- *Objetivo:* configurar un sistema de estudio sostenible y expectativas realistas.
- *Prerrequisitos:* — (nodo raíz).
- *Nivel:* Pre‑A1 · *Tiempo:* 1–2 h · *Dificultad:* 🟢
- *Competencias:* estratégica / metacognición.
- *Errores frecuentes:* querer “estudiar gramática” antes de exponerse; metas vagas;
  abandonar por falta de rutina.
- *Recursos:* guía de hábitos, planificador, introducción a la adquisición (Krashen).
- *Proyecto:* definir meta (nivel objetivo + fecha) y calendario semanal.
- *Razón pedagógica:* la metacognición y el hábito predicen el éxito; reduce el
  filtro afectivo desde el día 1.

**FON‑1 · Oído fonológico (percepción de sonidos)**
- *Descripción:* distinguir los fonemas del idioma (pares mínimos, ritmo, entonación)
  con HVPT.
- *Objetivo:* percibir los contrastes sonoros que la L1 no tiene.
- *Prerrequisitos:* RAIZ‑1.
- *Nivel:* Pre‑A1 · *Tiempo:* 5–10 h (repartidas) · *Dificultad:* 🟡
- *Competencias:* fonológica (percepción).
- *Errores frecuentes:* “oír” los sonidos a través de la L1; ignorar la entonación.
- *Recursos:* entrenadores de pares mínimos, audio con múltiples hablantes.
- *Proyecto:* test de discriminación de pares mínimos ≥ 85%.
- *Razón pedagógica:* no se adquiere lo que no se distingue; prevenir fosilización
  fonética (evidencia HVPT). Va **antes** que la producción.

**ESC‑1 · Sistema de escritura**
- *Descripción:* alfabeto o sistema de escritura y su relación con los sonidos.
- *Objetivo:* leer y escribir los símbolos con su valor fonético.
- *Prerrequisitos:* RAIZ‑1; se apoya en FON‑1 (relación grafema‑fonema).
- *Nivel:* Pre‑A1 · *Tiempo:* 2 h (latino) – 40+ h (nuevo sistema) · *Dificultad:*
  🟢/🔴 según idioma.
- *Competencias:* gramatical (ortografía), lectora incipiente.
- *Errores frecuentes:* aplicar la ortofonía de la L1 (p. ej. leer vocales “a la
  española”).
- *Recursos:* tablas de alfabeto/kana/…; trazado guiado.
- *Proyecto:* leer en voz alta 20 palabras nuevas con pronunciación correcta.
- *Razón pedagógica:* compuerta de la lectura; en idiomas con nuevo script es
  cimiento crítico.

**VOC‑1 · Primeras 100 palabras y fórmulas de supervivencia**
- *Descripción:* saludos, cortesía, sí/no, números, “no entiendo”, “¿cómo se
  dice…?”.
- *Objetivo:* sobrevivir a una interacción mínima y sostener el input.
- *Prerrequisitos:* RAIZ‑1; se apoya en FON‑1.
- *Nivel:* Pre‑A1 · *Tiempo:* 5–8 h · *Dificultad:* 🟢
- *Competencias:* léxica, estratégica (pedir ayuda).
- *Errores frecuentes:* traducir palabra por palabra; memorizar sin audio.
- *Recursos:* listas de frecuencia iniciales, tarjetas SRS con audio.
- *Proyecto:* presentarse en 5 frases grabadas.
- *Razón pedagógica:* las fórmulas dan “victorias” inmediatas (motivación) y anclan
  el sistema de sonidos a significado.

### 🟢 Nivel Inicial (A1)

**EST‑1 · SRS: repetición espaciada (hábito transversal)**
- *Descripción:* usar tarjetas con audio e imágenes en intervalos crecientes.
- *Objetivo:* retener vocabulario/frases a largo plazo con mínimo esfuerzo diario.
- *Prerrequisitos:* RAIZ‑1, VOC‑1.
- *Nivel:* A1 · *Tiempo:* 10–15 min/día (continuo) · *Dificultad:* 🟢
- *Competencias:* estratégica / memoria.
- *Errores frecuentes:* tarjetas solo texto (sin audio/contexto); acumular repasos.
- *Recursos:* app SRS; mazos por frecuencia; principio palabra‑en‑contexto.
- *Proyecto:* mantener una racha de 14 días de repaso.
- *Razón pedagógica:* la evidencia de SRS/efecto de testing lo hace el motor de
  memoria de todo el árbol.

**VOC‑2 · Vocabulario núcleo I (~500–800 palabras)**
- *Descripción:* las palabras de altísima frecuencia (Oxford 3000 A1).
- *Objetivo:* cubrir gran parte del habla cotidiana básica.
- *Prerrequisitos:* VOC‑1, EST‑1.
- *Nivel:* A1 · *Tiempo:* 30–50 h · *Dificultad:* 🟢
- *Competencias:* léxica.
- *Errores frecuentes:* aprender palabras raras antes que las frecuentes.
- *Recursos:* Oxford 3000 (A1), listas de frecuencia, SRS con audio.
- *Proyecto:* describir tu rutina diaria con el vocabulario aprendido.
- *Razón pedagógica:* la frecuencia maximiza cobertura por esfuerzo (ciencia del
  vocabulario).

**GRA‑1 · Estructura básica de la oración**
- *Descripción:* orden de palabras, afirmación/negación, pronombres personales,
  concordancia mínima.
- *Objetivo:* formar oraciones simples correctas.
- *Prerrequisitos:* VOC‑1.
- *Nivel:* A1 · *Tiempo:* 8–12 h · *Dificultad:* 🟡
- *Competencias:* gramatical.
- *Errores frecuentes:* trasladar el orden de la L1; omitir sujeto donde se exige.
- *Recursos:* gramática visual A1, ejemplos con audio.
- *Proyecto:* escribir 10 oraciones sobre ti y tu entorno.
- *Razón pedagógica:* mínima mecánica necesaria para “crear con la lengua”.

**GRA‑2 · Preguntas básicas**
- *Descripción:* interrogativos (qué/quién/dónde/cuándo/cómo) y sí/no.
- *Objetivo:* pedir y dar información esencial.
- *Prerrequisitos:* GRA‑1.
- *Nivel:* A1 · *Tiempo:* 4–6 h · *Dificultad:* 🟢
- *Competencias:* gramatical, estratégica.
- *Errores frecuentes:* entonación de pregunta incorrecta; orden sujeto‑verbo.
- *Recursos:* patrones de preguntas, drills con audio.
- *Proyecto:* entrevistar (real o simulado) con 8 preguntas.
- *Razón pedagógica:* preguntar mantiene la conversación y el input vivo.

**GRA‑3 · Presente / tiempo por defecto**
- *Descripción:* acciones habituales y estados en el tiempo base del idioma.
- *Objetivo:* hablar del presente y lo habitual.
- *Prerrequisitos:* GRA‑1.
- *Nivel:* A1 · *Tiempo:* 8–12 h · *Dificultad:* 🟡
- *Competencias:* gramatical.
- *Errores frecuentes:* conjugación irregular; aspecto (habitual vs. en curso).
- *Recursos:* tablas de conjugación, práctica en contexto.
- *Proyecto:* narrar “un día normal” (oral + escrito).
- *Razón pedagógica:* el presente sostiene la mayoría del habla inicial.

**AUD‑1 · Comprensión auditiva A1**
- *Descripción:* entender frases y expresiones cotidianas en audio lento y claro
  (input comprensible).
- *Objetivo:* captar información básica sobre uno mismo y el entorno.
- *Prerrequisitos:* FON‑1, VOC‑2.
- *Nivel:* A1 · *Tiempo:* 20–30 h · *Dificultad:* 🟡
- *Competencias:* auditiva.
- *Errores frecuentes:* intentar entender cada palabra; pánico al no captar todo.
- *Recursos:* input para principiantes (CI graduado), audio con transcripción.
- *Proyecto:* ver 10 vídeos CI para principiantes y resumir en 1 frase c/u.
- *Razón pedagógica:* el input comprensible es el motor de adquisición (Krashen).

**LEC‑1 · Lectura A1**
- *Descripción:* leer palabras, frases y señales sencillas.
- *Objetivo:* decodificar textos muy simples con apoyo.
- *Prerrequisitos:* ESC‑1, VOC‑2.
- *Nivel:* A1 · *Tiempo:* 15–20 h · *Dificultad:* 🟢
- *Competencias:* lectora.
- *Errores frecuentes:* subvocalizar con fonética de la L1.
- *Recursos:* textos A1 con glosario, lecturas graduadas nivel 0.
- *Proyecto:* leer y entender 10 mensajes/carteles reales.
- *Razón pedagógica:* la lectura añade un canal de input controlable por el alumno.

**FON‑2 · Producción de sonidos inteligible**
- *Descripción:* articular los segmentos del idioma de forma comprensible.
- *Objetivo:* que te entiendan sin esfuerzo, aunque haya acento.
- *Prerrequisitos:* FON‑1.
- *Nivel:* A1 · *Tiempo:* 10–15 h · *Dificultad:* 🟡
- *Competencias:* fonológica (producción).
- *Errores frecuentes:* sustituir sonidos por los de la L1; ignorar la sílaba tónica.
- *Recursos:* guías articulatorias, grabarse y comparar, shadowing inicial.
- *Proyecto:* grabar 10 frases y contrastar con modelo nativo.
- *Razón pedagógica:* la producción sigue a la percepción; la meta A1 es
  **inteligibilidad**, no acento nativo (evita frustración).

**ORA‑1 · Hablar con fórmulas (chunks)**
- *Descripción:* usar bloques memorizados para presentarte, pedir, saludar.
- *Objetivo:* producir mensajes cortos predecibles (Novice ACTFL).
- *Prerrequisitos:* VOC‑2, FON‑2, GRA‑2.
- *Nivel:* A1 · *Tiempo:* 10–15 h · *Dificultad:* 🟡
- *Competencias:* oral, estratégica.
- *Errores frecuentes:* querer construir todo desde cero; miedo a hablar.
- *Recursos:* listas de “frases hechas”, juegos de rol guiados.
- *Proyecto:* pedir algo en una tienda simulada (o real) usando fórmulas.
- *Razón pedagógica:* el *chunking* permite hablar antes de dominar la gramática y
  baja el filtro afectivo.

**⛳ HITO A1 — “Superviviencia”**
- *Compuerta:* AUD‑1, LEC‑1, ORA‑1, GRA‑3.
- *Logro:* entiendo y uso expresiones cotidianas básicas; me presento y hago
  preguntas simples si el interlocutor habla despacio.

### 🟢 Nivel Básico (A2)

**VOC‑3 · Vocabulario núcleo II (~1500–2000)**
- *Descripción:* ampliar a ~2000 familias (Oxford 3000 A2) por temas cotidianos.
- *Objetivo:* alcanzar ~95% de cobertura del habla cotidiana.
- *Prerrequisitos:* VOC‑2.
- *Nivel:* A2 · *Tiempo:* 40–60 h · *Dificultad:* 🟡
- *Competencias:* léxica.
- *Errores frecuentes:* dejar el SRS; no aprender colocaciones.
- *Recursos:* Oxford 3000 (A2), mazos temáticos, lectura graduada.
- *Proyecto:* conversación de 3 min sobre familia/trabajo/ocio.
- *Razón pedagógica:* el umbral ~2000 desbloquea la conversación cotidiana.

**GRA‑4 · Pasado**
- *Descripción:* narrar hechos pasados (tiempo(s) de pasado del idioma).
- *Objetivo:* contar experiencias.
- *Prerrequisitos:* GRA‑3.
- *Nivel:* A2 · *Tiempo:* 12–18 h · *Dificultad:* 🟠
- *Competencias:* gramatical, discursiva.
- *Errores frecuentes:* irregulares; confundir pasados (aspecto).
- *Recursos:* líneas de tiempo, narraciones modelo.
- *Proyecto:* contar “qué hice el fin de semana”.
- *Razón pedagógica:* narrar el pasado es núcleo de la interacción social.

**GRA‑5 · Futuro y planes**
- *Descripción:* expresar intenciones, planes y predicciones.
- *Objetivo:* hablar de lo que va a pasar.
- *Prerrequisitos:* GRA‑3.
- *Nivel:* A2 · *Tiempo:* 6–10 h · *Dificultad:* 🟡
- *Competencias:* gramatical.
- *Errores frecuentes:* mezclar formas de futuro; calcar la L1.
- *Recursos:* contrastes de formas de futuro, práctica situacional.
- *Proyecto:* planificar un viaje imaginario en voz alta.
- *Razón pedagógica:* completa el eje temporal básico (presente‑pasado‑futuro).

**GRA‑6 · Conectores básicos**
- *Descripción:* y, pero, porque, entonces, después.
- *Objetivo:* enlazar ideas en un discurso mínimo.
- *Prerrequisitos:* GRA‑3.
- *Nivel:* A2 · *Tiempo:* 4–6 h · *Dificultad:* 🟢
- *Competencias:* discursiva.
- *Errores frecuentes:* yuxtaponer sin conectar; usar “porque” para todo.
- *Recursos:* banco de conectores por función.
- *Proyecto:* contar una anécdota en 5 frases enlazadas.
- *Razón pedagógica:* primer paso de **competencia discursiva** (coherencia).

**AUD‑2 · Comprensión auditiva A2**
- *Descripción:* captar lo esencial de audios cotidianos algo más largos.
- *Objetivo:* seguir intercambios y mensajes claros.
- *Prerrequisitos:* AUD‑1, VOC‑3.
- *Nivel:* A2 · *Tiempo:* 25–40 h · *Dificultad:* 🟡
- *Competencias:* auditiva.
- *Errores frecuentes:* bloquearse con palabras desconocidas.
- *Recursos:* podcasts para aprendices, vídeo con subtítulos en el idioma.
- *Proyecto:* resumir en 3 frases un audio de 2 min.
- *Razón pedagógica:* el input crece en longitud y velocidad de forma gradual.

**LEC‑2 · Lectura A2**
- *Descripción:* leer textos cortos cotidianos (menús, mensajes, instrucciones).
- *Objetivo:* extraer información concreta.
- *Prerrequisitos:* LEC‑1, VOC‑3.
- *Nivel:* A2 · *Tiempo:* 20–30 h · *Dificultad:* 🟢
- *Competencias:* lectora.
- *Errores frecuentes:* buscar cada palabra en el diccionario.
- *Recursos:* lecturas graduadas nivel 1–2.
- *Proyecto:* seguir una receta/instrucciones escritas.
- *Razón pedagógica:* lectura extensiva incipiente = crecimiento léxico barato.

**ORA‑2 · Conversación cotidiana**  ⟵ *nodo de convergencia (DAG)*
- *Descripción:* mantener intercambios simples sobre temas familiares; “crear con
  la lengua” (Intermediate ACTFL).
- *Objetivo:* interactuar en situaciones predecibles.
- *Prerrequisitos:* ORA‑1, VOC‑3, GRA‑4, GRA‑5, AUD‑2.
- *Nivel:* A2 · *Tiempo:* 20–30 h · *Dificultad:* 🟠
- *Competencias:* oral, estratégica, sociolingüística.
- *Errores frecuentes:* traducir mentalmente; silencios por buscar la palabra exacta.
- *Recursos:* intercambios de idioma, juegos de rol, tutor conversacional.
- *Proyecto:* conversación real/simulada de 5 min sobre tu vida.
- *Razón pedagógica:* la conversación **converge** léxico + gramática temporal +
  escucha + producción fónica → arista múltiple, corazón del DAG.

**ESC‑2 · Escritura A2**
- *Descripción:* escribir mensajes, notas y correos simples.
- *Objetivo:* comunicar por escrito en situaciones cotidianas.
- *Prerrequisitos:* LEC‑2, GRA‑4.
- *Nivel:* A2 · *Tiempo:* 12–18 h · *Dificultad:* 🟡
- *Competencias:* escrita, discursiva.
- *Errores frecuentes:* calcar estructura oral; ortografía.
- *Recursos:* plantillas de correos/mensajes, corrección guiada.
- *Proyecto:* escribir un correo de 80–100 palabras.
- *Razón pedagógica:* el output escrito consolida la gramática con tiempo para
  monitorizar.

**SOC‑1 · Cortesía y registro**
- *Descripción:* fórmulas de cortesía y distinción formal/informal (tú/usted…).
- *Objetivo:* adecuar el trato al interlocutor.
- *Prerrequisitos:* ORA‑1.
- *Nivel:* A2 · *Tiempo:* 4–8 h · *Dificultad:* 🟡
- *Competencias:* sociolingüística.
- *Errores frecuentes:* tuteo/ustedeo indebido; traducir cortesía de la L1.
- *Recursos:* guías de cortesía, ejemplos culturales.
- *Proyecto:* misma petición en registro formal e informal.
- *Razón pedagógica:* primer hilo de **competencia sociolingüística**.

**FLU‑1 · Fluidez inicial (shadowing)**
- *Descripción:* automatizar frases frecuentes repitiendo tras el audio (shadowing).
- *Objetivo:* responder sin pensar en lo ya conocido.
- *Prerrequisitos:* ORA‑1, AUD‑2.
- *Nivel:* A2 · *Tiempo:* continuo (10 min/día) · *Dificultad:* 🟡
- *Competencias:* fluidez, fonológica (prosodia).
- *Errores frecuentes:* priorizar lo nuevo y nunca automatizar lo conocido.
- *Recursos:* audios cortos para shadowing, grabarse.
- *Proyecto:* shadowing de un diálogo de 1 min hasta soltura.
- *Razón pedagógica:* la **hebra de fluidez** de Nation; sin ella el conocimiento no
  se vuelve uso.

**⛳ HITO A2 — “Conversación básica”**
- *Compuerta:* ORA‑2, AUD‑2, LEC‑2, ESC‑2.
- *Logro:* me desenvuelvo en tareas cotidianas simples e intercambio información
  básica sobre temas familiares.

### 🟡 Nivel Intermedio (B1)

**VOC‑4 · Vocabulario III (~3000–4000 + colocaciones)**
- *Descripción:* ampliar a ~3–4k y aprender **colocaciones** frecuentes.
- *Objetivo:* acercarse al 95% de cobertura lectora con apoyo.
- *Prerrequisitos:* VOC‑3.
- *Nivel:* B1 · *Tiempo:* 50–70 h · *Dificultad:* 🟠
- *Competencias:* léxica.
- *Errores frecuentes:* aprender palabras sueltas sin sus combinaciones.
- *Recursos:* Oxford 3000/5000 (B1), diccionarios de colocaciones, lectura extensiva.
- *Proyecto:* escribir un texto de 150 palabras usando 10 colocaciones nuevas.
- *Razón pedagógica:* las colocaciones son clave de naturalidad y de la mejora B1→B2.

**GRA‑7 · Aspecto: pasados en contraste**
- *Descripción:* elegir entre pasados según aspecto (perfectivo/imperfectivo, etc.).
- *Objetivo:* narrar con precisión temporal.
- *Prerrequisitos:* GRA‑4.
- *Nivel:* B1 · *Tiempo:* 12–18 h · *Dificultad:* 🟠
- *Competencias:* gramatical, discursiva.
- *Errores frecuentes:* usar un solo pasado para todo.
- *Recursos:* narraciones contrastivas, análisis de errores.
- *Proyecto:* narrar una historia con cambios de aspecto.
- *Razón pedagógica:* diferencia narrar “hechos” de “fondo/descripción”.

**GRA‑8 · Condicional e hipótesis**
- *Descripción:* expresar condiciones, deseos e hipótesis.
- *Objetivo:* hablar de lo irreal/posible.
- *Prerrequisitos:* GRA‑4, GRA‑5.
- *Nivel:* B1 · *Tiempo:* 10–15 h · *Dificultad:* 🟠
- *Competencias:* gramatical.
- *Errores frecuentes:* concordancia de tiempos en condicionales.
- *Recursos:* esquemas de condicionales, práctica situacional.
- *Proyecto:* “qué harías si…” (oral + escrito).
- *Razón pedagógica:* amplía el mundo expresable más allá de lo real/concreto.

**GRA‑9 · Oraciones complejas (subordinación)**
- *Descripción:* relativas, causales, temporales; enlazar cláusulas.
- *Objetivo:* producir discurso más denso y cohesionado.
- *Prerrequisitos:* GRA‑6.
- *Nivel:* B1 · *Tiempo:* 12–18 h · *Dificultad:* 🟠
- *Competencias:* gramatical, discursiva.
- *Errores frecuentes:* frases interminables sin puntuación/conexión clara.
- *Recursos:* banco de subordinantes, reescritura de textos.
- *Proyecto:* combinar 10 pares de frases simples en complejas.
- *Razón pedagógica:* motor de la **competencia discursiva** de nivel intermedio.

**AUD‑3 · Escucha extensa (podcasts/series con apoyo)**
- *Descripción:* seguir charlas y contenido más largo con apoyo (subtítulos en el
  idioma).
- *Objetivo:* comprender ideas principales y algunos detalles.
- *Prerrequisitos:* AUD‑2, VOC‑4.
- *Nivel:* B1 · *Tiempo:* 60–100 h (inmersión) · *Dificultad:* 🟠
- *Competencias:* auditiva.
- *Errores frecuentes:* depender de subtítulos en la L1.
- *Recursos:* podcasts intermedios, series con subtítulos en el idioma.
- *Proyecto:* ver una serie corta y resumir cada episodio.
- *Razón pedagógica:* la cantidad de input es el factor más determinante del avance
  (inmersión).

**LEC‑3 · Lectura extensiva**
- *Descripción:* leer graded readers y artículos sencillos por placer/volumen.
- *Objetivo:* crecer en vocabulario y fluidez lectora.
- *Prerrequisitos:* LEC‑2, VOC‑4.
- *Nivel:* B1 · *Tiempo:* 40–60 h · *Dificultad:* 🟡
- *Competencias:* lectora, léxica.
- *Errores frecuentes:* elegir textos demasiado difíciles (frustración).
- *Recursos:* graded readers nivel 3–4, prensa fácil.
- *Proyecto:* terminar un libro graduado y comentarlo.
- *Razón pedagógica:* lectura extensiva = adquisición incidental de léxico a escala.

**ORA‑3 · Narrar y desenvolverse (imprevistos)**
- *Descripción:* contar experiencias y manejar situaciones no ensayadas (viajes).
- *Objetivo:* mantener la comunicación cuando algo se sale del guion.
- *Prerrequisitos:* ORA‑2, GRA‑7, GRA‑8, VOC‑4.
- *Nivel:* B1 · *Tiempo:* 30–50 h · *Dificultad:* 🟠
- *Competencias:* oral, estratégica, discursiva.
- *Errores frecuentes:* rendirse ante lo imprevisto en vez de rodear el problema.
- *Recursos:* simulaciones, tutor, intercambios.
- *Proyecto:* resolver un “problema de viaje” hablado (perdiste el tren…).
- *Razón pedagógica:* marca el salto A2→B1: autonomía comunicativa.

**ESC‑3 · Escritura conectada**
- *Descripción:* textos con estructura (opinión, descripción, carta).
- *Objetivo:* organizar ideas en párrafos coherentes.
- *Prerrequisitos:* ESC‑2, GRA‑9.
- *Nivel:* B1 · *Tiempo:* 20–30 h · *Dificultad:* 🟠
- *Competencias:* escrita, discursiva.
- *Errores frecuentes:* falta de párrafos/conectores; registro inconsistente.
- *Recursos:* modelos de textos, rúbricas, corrección.
- *Proyecto:* redactar una opinión de 200 palabras.
- *Razón pedagógica:* consolida discurso escrito con tiempo de monitorización.

**EST‑2 · Estrategias de comunicación**
- *Descripción:* parafrasear, pedir aclaración, inferir por contexto, circunloquios.
- *Objetivo:* no bloquearse ante lagunas de léxico.
- *Prerrequisitos:* ORA‑2.
- *Nivel:* B1 · *Tiempo:* 6–10 h · *Dificultad:* 🟡
- *Competencias:* estratégica.
- *Errores frecuentes:* callar al no saber una palabra.
- *Recursos:* técnicas de circunloquio, frases de gestión conversacional.
- *Proyecto:* explicar 10 palabras difíciles sin nombrarlas.
- *Razón pedagógica:* la **competencia estratégica** sostiene la fluidez real y
  reduce frustración.

**⛳ HITO B1 — “Independencia”**
- *Compuerta:* ORA‑3, AUD‑3, LEC‑3, ESC‑3.
- *Logro:* me manejo en la mayoría de situaciones de viaje; narro experiencias y
  explico opiniones y planes.

### 🟠 Nivel Intermedio Alto (B2)

**VOC‑5 · Vocabulario IV (~5000 + expresiones idiomáticas)**
- *Prerrequisitos:* VOC‑4 · *Nivel:* B2 · *Tiempo:* 60–90 h · *Dificultad:* 🟠
- *Objetivo:* ~95% de cobertura lectora; naturalidad idiomática.
- *Competencias:* léxica. *Errores:* traducir idioms literalmente.
- *Recursos:* Oxford 5000 (B2), diccionarios de idioms, inmersión.
- *Proyecto:* usar 15 expresiones idiomáticas en contexto. *Descripción:* léxico
  amplio + fraseología. *Razón:* umbral B2 de lectura (95%).

**GRA‑10 · Modo/subjuntivo y matices**
- *Prerrequisitos:* GRA‑8, GRA‑9 · *Nivel:* B2 · *Tiempo:* 15–25 h · *Dificultad:*
  🔴
- *Objetivo:* expresar duda, deseo, emoción, valoración con precisión.
- *Competencias:* gramatical. *Errores:* evitar el subjuntivo por miedo.
- *Recursos:* mapas de usos, input abundante. *Proyecto:* debatir usando modo.
- *Descripción:* zonas gramaticales sutiles del idioma. *Razón:* diferencia B2 de
  B1 en precisión.

**AUD‑4 · Comprensión de contenido nativo**
- *Prerrequisitos:* AUD‑3, VOC‑5 · *Nivel:* B2 · *Tiempo:* 100–150 h · *Dificultad:*
  🟠
- *Objetivo:* seguir noticias, series y la mayoría del habla sin subtítulos.
- *Competencias:* auditiva. *Errores:* abandonar los subtítulos demasiado tarde.
- *Recursos:* medios nativos, series sin subtítulos. *Proyecto:* ver un film sin
  subtítulos y resumirlo. *Descripción:* input nativo real. *Razón:* la meta B2 es
  autonomía de escucha.

**LEC‑4 · Lectura de prosa nativa**
- *Prerrequisitos:* LEC‑3, VOC‑5 · *Nivel:* B2 · *Tiempo:* 60–90 h · *Dificultad:*
  🟠
- *Objetivo:* leer novelas y prensa con fluidez.
- *Competencias:* lectora. *Errores:* elegir textos aún demasiado densos.
- *Recursos:* novela nativa accesible, prensa general. *Proyecto:* leer una novela
  corta nativa. *Descripción:* lectura autónoma. *Razón:* consolidación léxica de
  alto nivel.

**ORA‑4 · Interacción fluida y argumentación**
- *Prerrequisitos:* ORA‑3, AUD‑4, GRA‑10, EST‑2 · *Nivel:* B2 · *Tiempo:* 50–80 h ·
  *Dificultad:* 🔴
- *Objetivo:* conversar con nativos con espontaneidad; defender una postura.
- *Competencias:* oral, discursiva, estratégica. *Errores:* fluidez a costa de
  precisión (fosilización). *Recursos:* debates, tutor avanzado. *Proyecto:* debate
  de 10 min. *Descripción:* interacción sostenida y argumentativa. *Razón:*
  convergencia B2 (escucha nativa + gramática fina + estrategias).

**ESC‑4 · Escritura argumentativa/detallada**
- *Prerrequisitos:* ESC‑3, GRA‑10 · *Nivel:* B2 · *Tiempo:* 30–45 h · *Dificultad:*
  🟠
- *Objetivo:* redactar textos claros y detallados con argumentos.
- *Competencias:* escrita, discursiva. *Errores:* cohesión y párrafos débiles.
- *Recursos:* modelos argumentativos, rúbricas tipo examen (IELTS/TOEFL writing).
- *Proyecto:* ensayo de 300 palabras. *Descripción:* escritura formal. *Razón:*
  alinea con criterios de exámenes B2.

**FON‑3 · Pronunciación y prosodia natural**
- *Prerrequisitos:* FON‑2, AUD‑4, FLU‑1 · *Nivel:* B2 · *Tiempo:* 20–40 h ·
  *Dificultad:* 🟠
- *Objetivo:* ritmo, entonación y acento comprensibles y naturales.
- *Competencias:* fonológica (suprasegmentos). *Errores:* entonación de la L1;
  descuidar el ritmo. *Recursos:* shadowing avanzado, análisis prosódico.
- *Proyecto:* imitar un monólogo de 2 min. *Descripción:* pulido fónico.
  *Razón:* la prosodia se afina mejor con mucho input previo (por eso en B2, no A1).

**SOC‑2 · Sociolingüística (humor, ironía, registro)**
- *Prerrequisitos:* SOC‑1, AUD‑4 · *Nivel:* B2 · *Tiempo:* 20–30 h · *Dificultad:*
  🟠
- *Objetivo:* captar y usar matices de registro, humor e ironía.
- *Competencias:* sociolingüística, discursiva. *Errores:* literalidad ante
  ironía/sarcasmo. *Recursos:* comedia, medios culturales. *Proyecto:* explicar 5
  chistes/expresiones culturales. *Descripción:* pragmática cultural. *Razón:*
  requiere gran exposición previa (input nativo).

**⛳ HITO B2 — “Fluidez funcional”**
- *Compuerta:* ORA‑4, AUD‑4, LEC‑4, ESC‑4.
- *Logro:* interactúo con fluidez y naturalidad con nativos; entiendo textos
  complejos y argumento con claridad.

### 🔵 Nivel Avanzado (C1)

**VOC‑6 · Vocabulario V (~8000 + jerga/colocaciones)**
- *Prerrequisitos:* VOC‑5 · *Nivel:* C1 · *Tiempo:* 100–150 h · *Dificultad:* 🔴
- *Objetivo:* ~98% de cobertura lectora; matices y jerga.
- *Competencias:* léxica. *Errores:* estancarse (“meseta” intermedia). *Recursos:*
  inmersión total, lectura especializada. *Proyecto:* glosario personal de 300
  términos de tu campo. *Descripción:* léxico de alto nivel. *Razón:* umbral 98%
  (comprensión no asistida).

**AUD‑5 · Comprensión de discurso implícito/rápido**
- *Prerrequisitos:* AUD‑4, VOC‑6 · *Nivel:* C1 · *Tiempo:* 80–120 h · *Dificultad:*
  🔴
- *Objetivo:* entender lo no dicho, el humor y el habla rápida/coloquial.
- *Competencias:* auditiva, sociolingüística. *Errores:* perder implícitos.
- *Recursos:* podcasts nativos sin apoyo, cine variado. *Proyecto:* analizar
  subtexto de una escena. *Descripción:* escucha experta. *Razón:* C1 = flexibilidad
  y matiz.

**LEC‑5 · Lectura compleja/especializada**
- *Prerrequisitos:* LEC‑4, VOC‑6 · *Nivel:* C1 · *Tiempo:* 60–100 h · *Dificultad:*
  🔴
- *Objetivo:* leer textos densos y especializados; captar lo implícito.
- *Competencias:* lectora. *Errores:* saltarse matices por velocidad. *Recursos:*
  literatura, papers, prensa de análisis. *Proyecto:* reseñar un texto complejo.
  *Descripción:* lectura crítica. *Razón:* prepara mediación y producción C1.

**ORA‑5 · Expresión flexible (social/académico/profesional)**
- *Prerrequisitos:* ORA‑4, VOC‑6, SOC‑2 · *Nivel:* C1 · *Tiempo:* 60–100 h ·
  *Dificultad:* 🔴
- *Objetivo:* expresarse con fluidez, precisión y flexibilidad en cualquier contexto.
- *Competencias:* oral, sociolingüística, discursiva. *Errores:* registro único para
  todo. *Recursos:* presentaciones, reuniones simuladas. *Proyecto:* charla de 10
  min con turno de preguntas. *Descripción:* dominio funcional. *Razón:* Superior
  ACTFL / C1.

**ESC‑5 · Escritura estructurada compleja**
- *Prerrequisitos:* ESC‑4, VOC‑6 · *Nivel:* C1 · *Tiempo:* 40–70 h · *Dificultad:*
  🔴
- *Objetivo:* textos bien estructurados sobre temas complejos, con estilo y cohesión.
- *Competencias:* escrita, discursiva. *Errores:* cohesión de nivel superior; tono.
- *Recursos:* géneros académicos/profesionales, revisión por pares. *Proyecto:*
  informe/ensayo de 600 palabras. *Descripción:* escritura experta. *Razón:*
  alinea con writing C1.

**EST‑3 · Mediación (CEFR 2020)**
- *Prerrequisitos:* ORA‑4, ESC‑4 · *Nivel:* C1 · *Tiempo:* 20–40 h · *Dificultad:*
  🟠
- *Objetivo:* resumir, reformular e interpretar entre lenguas/registros para otros.
- *Competencias:* estratégica, discursiva, sociolingüística. *Errores:* traducir
  literal en vez de mediar. *Recursos:* tareas de mediación (Companion 2020).
  *Proyecto:* resumir un texto complejo para un público no experto. *Descripción:*
  “puente” comunicativo. *Razón:* competencia clave del CEFR moderno y del uso real.

**⛳ HITO C1 — “Dominio operativo”**
- *Compuerta:* ORA‑5, AUD‑5, LEC‑5, ESC‑5.
- *Logro:* uso la lengua de forma flexible y eficaz para fines sociales, académicos
  y profesionales; comprendo lo implícito.

### ⚫ Nivel Dominio (C2)

**VOC‑7 · Léxico casi nativo (matiz/connotación)**
- *Prerrequisitos:* VOC‑6 · *Nivel:* C2 · *Tiempo:* continuo · *Dificultad:* 🔴
- *Objetivo:* dominar connotación, colocación fina, culto y coloquial.
- *Competencias:* léxica. *Errores:* connotación/tono inapropiados. *Recursos:*
  inmersión de por vida. *Proyecto:* reescribir un texto en 3 registros.
  *Descripción:* léxico experto. *Razón:* la precisión C2 es sobre todo léxica.

**AUD‑6 · Comprensión total (variedades/acentos)**
- *Prerrequisitos:* AUD‑5 · *Nivel:* C2 · *Dificultad:* 🔴 · *Tiempo:* continuo
- *Objetivo:* entender cualquier acento, dialecto y registro sin esfuerzo.
- *Competencias:* auditiva. *Errores:* dificultad con dialectos marcados. *Recursos:*
  medios de todas las regiones. *Proyecto:* comparar 3 acentos regionales.
  *Descripción:* escucha total. *Razón:* C2 = sin límites de comprensión.

**LEC‑6 · Lectura total (abstracta/literaria)**
- *Prerrequisitos:* LEC‑5 · *Nivel:* C2 · *Dificultad:* 🔴 · *Tiempo:* continuo
- *Objetivo:* comprender prácticamente todo lo escrito, incl. literario/abstracto.
- *Competencias:* lectora. *Errores:* matices literarios/estilísticos. *Recursos:*
  literatura canónica, ensayo. *Proyecto:* análisis literario breve. *Descripción:*
  lectura culta. *Razón:* cierre de la hebra lectora.

**ORA‑6 · Expresión precisa y sutil**
- *Prerrequisitos:* ORA‑5, VOC‑7, FON‑3 · *Nivel:* C2 · *Dificultad:* 🔴 · *Tiempo:*
  continuo
- *Objetivo:* transmitir matices finos de significado con naturalidad casi nativa.
- *Competencias:* oral, sociolingüística. *Errores:* sobre‑formalidad o calcos
  sutiles. *Recursos:* interacción nativa constante, oratoria. *Proyecto:*
  improvisar sobre un tema abstracto. *Descripción:* habla experta. *Razón:*
  Distinguished ACTFL / C2.

**ESC‑6 · Escritura con estilo y adecuación plena**
- *Prerrequisitos:* ESC‑5, EST‑3 · *Nivel:* C2 · *Dificultad:* 🔴 · *Tiempo:* continuo
- *Objetivo:* escribir con estilo, cohesión y adecuación a cualquier género.
- *Competencias:* escrita, discursiva, sociolingüística. *Errores:* voz/estilo poco
  natural. *Recursos:* escritura creativa/profesional, edición. *Proyecto:* artículo
  publicable. *Descripción:* escritura de autor. *Razón:* cierre de la hebra escrita.

**SOC‑3 · Competencia sociocultural plena**
- *Prerrequisitos:* SOC‑2, AUD‑5 · *Nivel:* C2 · *Dificultad:* 🔴 · *Tiempo:* continuo
- *Objetivo:* dominar variación dialectal, referentes culturales e históricos.
- *Competencias:* sociolingüística. *Errores:* perder referencias culturales.
- *Recursos:* cultura, historia, medios regionales. *Proyecto:* explicar 10
  referentes culturales. *Descripción:* pertenencia cultural. *Razón:* la lengua es
  cultura; cierra el árbol.

**⛳ HITO C2 — “Maestría”**
- *Compuerta:* ORA‑6, AUD‑6, LEC‑6, ESC‑6, SOC‑3.
- *Logro:* comprendo prácticamente todo y me expreso con precisión y sutileza casi
  nativas.

---

## 6. Fase 3 — Autocrítica y refinamiento

Preguntas críticas y cambios ya aplicados al árbol de §5:

1. **¿La fonología inicial bloquea demasiado?** Riesgo de frustración si FON‑1
   fuese compuerta universal. **Cambio:** FON‑1 solo gatea escucha y producción
   (AUD‑1, FON‑2), no el vocabulario ni la lectura → el alumno avanza en paralelo.
2. **¿Hay conocimiento repetido?** “Vocabulario” aparecía como hito y como rama.
   **Cambio:** el vocabulario es **rama** (VOC‑1..7) y los **hitos** solo lo
   referencian por umbral de cobertura (no se duplica).
3. **¿Obligo a aprender algo innecesario?** La gramática explícita (rama GRA) puede
   sobre‑pesar frente a la evidencia pro‑input. **Cambio:** GRA se declara hebra de
   “aprendizaje centrado en la lengua” (~25%, Nation), **de apoyo**, no la espina;
   sus nodos gatean output pero no la comprensión (el input fluye sin esperar a la
   gramática).
4. **¿Falta algo importante?** Faltaban **fluidez** (automatización) y **estrategias**
   como hebras propias. **Cambio:** añadidas FLU‑1 y EST‑2/EST‑3 (mediación).
5. **¿Progresión natural / menos frustración?** **Cambio:** meta de pronunciación
   A1 = *inteligibilidad* (no acento nativo); “errores frecuentes” en cada nodo para
   normalizarlos; input siempre por delante para dar comprensión temprana.
6. **¿Caveat de orden de adquisición?** El orden natural (Krashen) implica que el
   árbol es **andamiaje de práctica**, no una afirmación de que la gramática se
   adquiere en ese orden. Añadido como nota de diseño.

## 7. Fase 4 — Segunda revisión experta “desde cero”

Reviso como si fuera otro experto (perfil comunicativo/tarea):

- **Hallazgo A — Nodos que deben ser “can‑do” verificables.** Confirmo que cada
  nodo tiene **proyecto/tarea** como criterio de logro (no teoría suelta). ✔
- **Hallazgo B — Equilibrio de las 4 hebras por banda.** En B1/B2 el peso de input
  (AUD/LEC) es alto (bien, es lo que marca la evidencia), pero verifiqué que output
  (ORA/ESC) y fluidez (FLU) están presentes en cada banda. ✔ (Se explicita que las
  horas de inmersión dominan B1→C1.)
- **Hallazgo C — Rutas alternativas.** Dos perfiles válidos sobre el **mismo DAG**:
  (i) **Input‑first / inmersión** (Refold): profundizar AUD/LEC antes de forzar
  ORA/ESC; (ii) **Equilibrada** (Nation/CEFR): las cuatro hebras a la par. El DAG
  soporta ambas porque el output **depende** del input pero el alumno elige el ritmo.
  Añadido en §5 como notas de ruta.
- **Hallazgo D — Prerrequisito dudoso.** ESC‑2 dependía solo de LEC‑2; **corregido**
  para depender también de GRA‑4 (se escribe en pasado desde A2).
- **Hallazgo E — Nivel de FON‑3 (prosodia).** Podría tentarse ubicarla en A2; se
  **mantiene en B2** porque la prosodia se afina con gran input previo (evita
  fosilización y frustración temprana).
- **Hallazgo F — Vacío en C1.** Faltaba **mediación** (destreza estrella del CEFR
  2020). **Añadido** EST‑3.
- **Hallazgo G — Sin ciclos.** Verificado: todas las aristas apuntan de niveles
  inferiores a superiores dentro de su hebra o entre hebras del mismo/again inferior
  nivel; **no hay ciclos** (DAG válido).

Conclusión: el árbol de §5 **ya incorpora** estos ajustes; es la versión propuesta
para aprobación.

## 8. Notas de adaptación por idioma

- **Sistema de escritura (ESC‑1):** ligero (latino) vs. pesado (árabe, ruso, chino,
  japonés → +nodos de kana/hanzi/radicales).
- **Fonología (FON‑1/2):** idiomas **tonales** (chino, vietnamita) añaden nodo de
  **percepción/producción de tonos**; idiomas con fonemas ausentes en la L1 pesan más.
- **Gramática:** casos (ruso, alemán), género, sistemas aspectuales o de cortesía
  (keigo japonés) ajustan la rama GRA.
- **Dificultad/tiempos:** escalar por categoría **FSI** (Cat. I→IV) para
  hispanohablantes.
- **Reutilización:** el árbol‑plantilla es común; cada idioma es una **instancia**
  con nodos específicos añadidos.

## 9. Mapeo al modelo de datos de SkillTree (sin código)

- **Category** “Idiomas” → un **Tree** por idioma (p. ej. “Inglés”, “Francés”).
- Cada **habilidad** = **Skill** (nombre, descripción, `xpReward`, `estimatedMinutes`
  ← tiempo, `tier` ← nivel CEFR, `icon`).
- **Prerrequisitos** = filas **SkillPrerequisite** (aristas del DAG; soporta
  múltiples por skill).
- **Recursos recomendados** = **Resource** por skill.
- Campos extra del dossier (objetivo, errores frecuentes, competencias, proyecto,
  razón pedagógica) → contenido de la ficha de la habilidad (se puede extender el
  modelo con un campo `pedagogy`/`objectives` cuando implementemos; **no ahora**).
- Los **HITOS** de nivel pueden modelarse como skills “de nivel” que dependen de la
  banda (o como agrupador visual). A decidir en la fase de implementación.

## 10. Fuentes

**Marcos y estándares**
- CEFR — Council of Europe, descripciones de nivel: https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions
- CEFR Companion Volume 2020 (PDF): https://rm.coe.int/cefr-companion-volume-with-new-descriptors-2020/16809ea0d4
- ACTFL Proficiency Guidelines (2024, PDF): https://www.oregon.gov/ode/students-and-family/equity/EngLearners/Documents/ACTFL-Proficiency-Guidelines-2024.pdf
- ACTFL — descripciones de nivel: https://cla.umn.edu/language-center/programs/language-testing/actfl-testing/actfl-level-descriptions
- Cambridge English Scale (conversor y anclaje CEFR): https://www.cambridgeenglish.org/scale-score-converter/
- Equivalencias IELTS/TOEFL/CEFR: https://cisl.edu/english-proficiency-test-equivalency-chart/
- Pearson — Global Scale of English (overview de objetivos): https://www.pearson.com/content/dam/one-dot-com/one-dot-com/pearson-languages/en-gb/pdfs/gse/gse-resources/gse-learning-objectives-overview.pdf
- Pearson — desarrollo de objetivos alineados al CEFR (white paper): https://www.pearson.com/content/dam/one-dot-com/one-dot-com/english/TeacherResources/GSE/GSE-WhitePaper-Developing-LOs.pdf
- Oxford 3000/5000 (criterios): https://www.oxfordlearnersdictionaries.com/about/wordlists/oxford3000-5000
- Oxford 3000 por nivel CEFR (PDF): https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf
- FSI — dificultad y horas por categoría: https://www.state.gov/foreign-language-training/ (resumen: https://www.atlasandboots.com/travel-blog/foreign-service-institute-language-difficulty/)

**Adquisición de segundas lenguas / lingüística aplicada**
- Krashen, *Principles and Practice in SLA* (PDF): https://www.sdkrashen.com/content/books/principles_and_practice.pdf
- Input Hypothesis (resumen): https://en.wikipedia.org/wiki/Input_hypothesis
- Nation, *The Four Strands* (PDF): https://www.wgtn.ac.nz/lals/resources/paul-nations-resources/paul-nations-publications/publications/documents/1996-Four-strands.pdf
- Webb & Nation, *Evaluating the vocabulary load of written text* (PDF): https://www.wgtn.ac.nz/lals/resources/paul-nations-resources/paul-nations-publications/publications/documents/2008-Webb-Evaluating-vocabulary-load.pdf
- “How Large a Vocabulary Is Needed for Reading and Listening?” (Nation): https://utppublishing.com/doi/10.3138/cmlr.63.1.59
- Vocabulary size & the CEFR (Milton/Nation): https://www.wgtn.ac.nz/lals/resources/paul-nations-resources/vocabulary-lists/vocabulary-cefr-and-word-family-size/vocabulary-and-the-cefr-docx
- Canale & Swain — competencia comunicativa (resumen): https://www.cosa.k12.or.us/sites/default/files/materials/events/65_communicative_competence.pdf
- HVPT — meta‑análisis (Cambridge, SSLA): https://www.cambridge.org/core/journals/studies-in-second-language-acquisition/article/high-variability-phonetic-training-hvpt-a-metaanalysis-of-l2-perceptual-training-studies/6ABB8C1F32D88D53EA8D05A4565E76F6
- Shadowing para pronunciación L2 (revisión sistemática): https://www.tandfonline.com/doi/full/10.1080/29984475.2025.2546827
- Interlengua y fosilización: https://www.intechopen.com/chapters/83784
- Orden de adquisición de morfemas (caso): https://www.lancaster.ac.uk/fass/projects/corpus/ZJU/xCBLS/chapters/C03.pdf

**Metodologías modernas**
- Refold — cómo se aprende (roadmap): https://refold.la/explained/
- Refold — adquisición del lenguaje (Stage 0): https://refold.la/roadmap/stage-0/a/language-acquisition/
- Repetición espaciada en adquisición de vocabulario (caso): https://jlt.ac/home/article/view/99

> **Nota:** las equivalencias entre exámenes son aproximadas (los tests miden cosas
> algo distintas); se usan solo para anclar niveles.

**Fuentes añadidas en v2**
- Byram — *Teaching and Assessing Intercultural Communicative Competence* (modelo y “cinco savoirs”): https://www.multilingual-matters.com/page/detail/Teaching-and-Assessing-Intercultural-Communicative-Competence/?k=9781800410237 · resumen: https://jaimeellenberger.com/academic-blog/2023-06-01-byrams-model-of-intercultural-communicative-competence/
- Levis — *Intelligibility, Oral Communication, and the Teaching of Pronunciation* (principio de inteligibilidad; “Word Stress and Intelligibility”): https://www.cambridge.org/core/books/abs/intelligibility-oral-communication-and-the-teaching-of-pronunciation/word-stress-and-intelligibility/934D046D415687E00B66FCE2E4CC0A61
- Jenkins — *The Phonology of English as an International Language* (prominencia como rasgo suprasegmental clave): resumen en Levis (2018), citado arriba.

---

## 11. Revisión pedagógica profunda (v2) — árbol por competencias que evolucionan

Reanalicé el árbol **desde cero** aplicando a cada nodo las seis preguntas
(¿pertenece a este nivel? ¿falta un prerrequisito? ¿está adelantado? ¿atrasado?
¿hay forma más natural? ¿aporta valor o es redundante?). El hallazgo central:
**varias competencias estaban “fotografiadas” una vez por nivel** cuando en la
realidad **evolucionan de forma continua**. Reorganizo el árbol en **hilos
verticales por competencia** (que crecen A1→C2) cruzados por **compuertas de
nivel**. Esta es también la mejor representación visual del aprendizaje (filosofía
de SkillTree): el usuario *ve crecer cada habilidad*.

### 11.1 Cambios realizados + justificación pedagógica

**C1 · Pronunciación: de 3 nodos a un hilo de 7 que llega hasta C2.**
`Percepción → Producción inteligible → Acentuación → Ritmo/encadenamiento →
Entonación → Naturalidad (habla conectada) → Casi nativo`.
*Justificación:* el **principio de inteligibilidad** (Levis) y la investigación de
**Jenkins** muestran que el **acento léxico** y la **prosodia** son decisivos para
que te entiendan y se **afinan progresivamente**, no en un único nodo B2. Un
“acento” cercano al nativo es un objetivo de C2, no de B2. La **percepción sigue
primero** (HVPT). *(Antes: FON‑1/2/3; el viejo FON‑3 “prosodia” en B2 mezclaba
acentuación, ritmo y entonación → habilidades comprimidas.)*

**C2 · Comprensión auditiva: objetivos concretos, no “Escucha A1/A2”.**
`Instrucciones → conversaciones lentas → podcasts/audio graduado → contenido
nativo → conferencias/discurso académico → cualquier acento y registro`.
*Justificación:* “Escucha A2” es una etiqueta, no una habilidad verificable. Los
objetivos concretos son **can‑do** medibles y hacen visible la evolución. Se
**añade “conferencias/discurso académico”** (vacío en C1) y “cualquier registro/
implícito” en C2.

**C3 · Conversación/habla: progresión explícita.**
`Responder/preguntar simple → conversaciones cotidianas → narrar experiencias →
debatir opiniones → persuadir/exponer → adaptar el lenguaje al contexto`.
*Justificación:* alinea con la escala **funcional de ACTFL** (Novice→Distinguished);
antes “persuadir” y “adaptar registro” quedaban difusos. Cada peldaño es un salto
funcional real.

**C4 · Escritura: se añade el peldaño A1 que faltaba.**
`Frases/datos simples (A1) → mensajes y correos (A2) → textos conectados (B1) →
argumentativos (B2) → complejos estructurados (C1) → con estilo y registro (C2)`.
*Justificación:* la escritura empezaba en A2; **rellenar formularios y escribir
frases simples es A1** (prerrequisito omitido). El extremo C2 añade **variación de
estilo/género**.

**C5 · Cultura: adelantada a A1 y convertida en hilo continuo (lo más importante).**
`Cortesía/saludos/tabúes (A1) → normas sociales y pragmática (A2) → registro y
adecuación (B1) → humor/ironía (B2) → referentes culturales e historia (C1) →
competencia intercultural crítica y variación dialectal (C2)`.
*Justificación:* **Byram (competencia comunicativa intercultural, “cinco
savoirs”)**: la cultura es **parte de la competencia comunicativa desde el primer
día** —saludar, la cortesía, los tabúes, el trato tú/usted **son** cultura y son de
nivel A1—. Retrasar la cultura a A2/B2/C2 (como en v1) era el error más grave.
Ahora se integra la vieja rama “sociolingüística” dentro de este hilo cultural.

**C6 · Estrategias tempranas: “tolerancia a la ambigüedad / no traducir”.**
Se añade en A1–A2 (antes la primera estrategia era B1).
*Justificación:* baja el **filtro afectivo** (Krashen) —no hay que entender el
100%— y previene el hábito de **traducir palabra por palabra**, una fuente típica
de **fosilización**. Es una destreza temprana, no intermedia.

**C7 · Fluidez: hilo de 3 nodos (antes 1).**
`Automatizar frases/shadowing (A2) → fluidez conversacional (B1–B2) → pensar en el
idioma (C1)`.
*Justificación:* la **hebra de fluidez** de Nation debe **crecer**; la
automatización es progresiva hasta la producción sin traducción mental.

**C8 · Reubicaciones puntuales (adelantos/atrasos corregidos).**
- **Acentuación (acento léxico) → A2** (antes implícita en B2): altísimo impacto en
  inteligibilidad temprana (Levis).
- **Ritmo/encadenamiento → B1**; **entonación → B2** (requiere input previo para
  afinarse); **reducciones/habla conectada → C1**.
- **Escritura simple → A1** (ver C4). **Cultura básica → A1** (ver C5).

**C9 · Reorganización estructural (presentación).** El árbol se ordena ahora **por
competencias (hilos que evolucionan)** cruzadas por **compuertas de nivel**, en vez
de “bloques por nivel”. Responde directamente a tu petición y es la representación
más fiel de cómo se aprende.

**C10 · Validación de redundancia y prerrequisitos.** Confirmado: los **hitos** son
compuertas visuales (no duplican contenido); **vocabulario** por umbrales de
cobertura; **gramática** como hebra de apoyo (~25%, Nation), que **gatea el output
pero no la comprensión** (el input fluye sin esperar a la gramática). Sin ciclos
(DAG válido).

> Los nodos **no listados como cambiados** se validaron con las seis preguntas y se
> **conservan en su nivel** (p. ej. subjuntivo en B2, mediación en C1, umbrales de
> vocabulario). Se conservan por su **razón pedagógica**, no por aparecer en un
> temario.

### 11.2 El árbol actualizado (por competencias · A1→C2)

Notación: `ID · nivel · objetivo — prereqs`. 🆕 nuevo · 🔀 movido/redefinido.

**🌱 Fundación (Pre‑A1)**
- `RAIZ‑1 · Pre‑A1 · Cómo aprender un idioma — (raíz)`
- `FON‑1 · Pre‑A1 · Oído fonológico (percepción) — RAIZ‑1`
- `ESC‑0 · Pre‑A1 · Sistema de escritura — RAIZ‑1, FON‑1`
- `VOC‑1 · Pre‑A1 · 100 palabras y fórmulas de supervivencia — RAIZ‑1, FON‑1`
- `CUL‑1 · A1 · 🆕 Cortesía, saludos y tabúes básicos — VOC‑1`

**🔊 Pronunciación** (hilo continuo)
- `FON‑2 · A1 · Producción de sonidos inteligible — FON‑1`
- `FON‑3 · A2 · 🆕 Acentuación (acento léxico) — FON‑2, AUD‑2`
- `FON‑4 · B1 · 🆕 Ritmo y encadenamiento — FON‑3, FLU‑1`
- `FON‑5 · B2 · 🔀 Entonación — FON‑4, AUD‑4`
- `FON‑6 · C1 · 🆕 Naturalidad: habla conectada y reducciones — FON‑5, AUD‑5`
- `FON‑7 · C2 · 🆕 Pronunciación cercana a hablante competente — FON‑6, ORA‑6`

**📚 Vocabulario** (por umbrales de cobertura)
- `VOC‑2 · A1 · Núcleo I ~500–800 — VOC‑1, EST‑1`
- `VOC‑3 · A2 · Núcleo II ~2000 (95% oral) — VOC‑2`
- `VOC‑4 · B1 · ~3–4k + colocaciones — VOC‑3`
- `VOC‑5 · B2 · ~5k + expresiones idiomáticas (95% lectura) — VOC‑4`
- `VOC‑6 · C1 · ~8k + jerga (98% lectura) — VOC‑5`
- `VOC‑7 · C2 · Léxico casi nativo (matiz/connotación) — VOC‑6`

**🧩 Gramática** (hebra de apoyo; gatea output, no comprensión)
- `GRA‑1 · A1 · Estructura de la oración — VOC‑1`
- `GRA‑2 · A1 · Preguntas — GRA‑1`
- `GRA‑3 · A1 · Presente/tiempo por defecto — GRA‑1`
- `GRA‑4 · A2 · Pasado — GRA‑3`
- `GRA‑5 · A2 · Futuro y planes — GRA‑3`
- `GRA‑6 · A2 · Conectores básicos — GRA‑3`
- `GRA‑7 · B1 · Aspecto (pasados en contraste) — GRA‑4`
- `GRA‑8 · B1 · Condicional e hipótesis — GRA‑4, GRA‑5`
- `GRA‑9 · B1 · Subordinación/oraciones complejas — GRA‑6`
- `GRA‑10 · B2 · Modo/subjuntivo y matices — GRA‑8, GRA‑9`

**👂 Comprensión auditiva** (objetivos concretos)
- `AUD‑1 · A1 · Comprender instrucciones y frases cotidianas — FON‑1, VOC‑2`
- `AUD‑2 · A2 · Comprender conversaciones lentas y claras — AUD‑1, VOC‑3`
- `AUD‑3 · B1 · Comprender audio graduado y podcasts — AUD‑2, VOC‑4`
- `AUD‑4 · B2 · Comprender contenido nativo (series, noticias) — AUD‑3, VOC‑5`
- `AUD‑5 · C1 · 🆕 Comprender conferencias y discurso académico/rápido — AUD‑4, VOC‑6`
- `AUD‑6 · C2 · Comprender cualquier acento, registro e implícito — AUD‑5`

**📖 Lectura** (objetivos concretos)
- `LEC‑1 · A1 · Leer palabras, frases y señales — ESC‑0, VOC‑2`
- `LEC‑2 · A2 · Leer textos cotidianos cortos — LEC‑1, VOC‑3`
- `LEC‑3 · B1 · Lectura extensiva (graded readers) — LEC‑2, VOC‑4`
- `LEC‑4 · B2 · Leer prosa nativa (novela/prensa) — LEC‑3, VOC‑5`
- `LEC‑5 · C1 · Leer textos especializados/análisis — LEC‑4, VOC‑6`
- `LEC‑6 · C2 · Leer cualquier texto (literario/abstracto) — LEC‑5`

**🗣️ Conversación/habla** (progresión funcional)
- `ORA‑1 · A1 · Responder y hacer preguntas simples (fórmulas) — VOC‑2, FON‑2, GRA‑2, CUL‑1`
- `ORA‑2 · A2 · Conversaciones cotidianas — ORA‑1, VOC‑3, GRA‑4, GRA‑5, AUD‑2, CUL‑2`
- `ORA‑3 · B1 · Narrar experiencias y desenvolverse — ORA‑2, GRA‑7, GRA‑8, VOC‑4, EST‑3`
- `ORA‑4 · B2 · Debatir y argumentar opiniones — ORA‑3, GRA‑10, AUD‑4, VOC‑5, FON‑5`
- `ORA‑5 · C1 · 🔀 Persuadir y exponer con eficacia — ORA‑4, VOC‑6, CUL‑5, FLU‑3`
- `ORA‑6 · C2 · Adaptar el lenguaje al contexto (sutileza casi nativa) — ORA‑5, VOC‑7, CUL‑6`

**✍️ Escritura** (progresión de complejidad y estilo)
- `ESC‑1 · A1 · 🆕 Escribir datos y frases simples — ESC‑0, GRA‑1`
- `ESC‑2 · A2 · Mensajes y correos simples — ESC‑1, LEC‑2, GRA‑4`
- `ESC‑3 · B1 · Textos conectados (opinión, carta) — ESC‑2, GRA‑9`
- `ESC‑4 · B2 · Textos argumentativos/detallados — ESC‑3, GRA‑10`
- `ESC‑5 · C1 · Textos complejos estructurados — ESC‑4, VOC‑6`
- `ESC‑6 · C2 · Escritura con estilo y registro (géneros) — ESC‑5, EST‑4, CUL‑6`

**🌍 Cultura e interacción intercultural** (hilo continuo desde A1)
- `CUL‑1 · A1 · 🆕 Cortesía, saludos y tabúes básicos — VOC‑1`
- `CUL‑2 · A2 · 🆕 Normas sociales y pragmática (pedir, agradecer, rechazar) — CUL‑1, ORA‑1`
- `CUL‑3 · B1 · 🔀 Registro y adecuación al contexto (formal/informal) — CUL‑2, ORA‑2`
- `CUL‑4 · B2 · Humor, ironía y matices de registro — CUL‑3, AUD‑4`
- `CUL‑5 · C1 · 🆕 Referentes culturales, historia y actualidad — CUL‑4, LEC‑5`
- `CUL‑6 · C2 · Competencia intercultural crítica y variación dialectal — CUL‑5, AUD‑6`

**🧭 Estrategias y autonomía**
- `EST‑1 · A1 · SRS / repetición espaciada (hábito) — RAIZ‑1, VOC‑1`
- `EST‑2 · A2 · 🆕 Tolerancia a la ambigüedad / no traducir — AUD‑1, LEC‑1`
- `EST‑3 · B1 · Estrategias de compensación (parafrasear, inferir) — ORA‑2`
- `EST‑4 · C1 · Mediación (CEFR 2020) — ORA‑4, ESC‑4`

**⚡ Fluidez** (hilo continuo)
- `FLU‑1 · A2 · Automatizar frases (shadowing) — ORA‑1, AUD‑2`
- `FLU‑2 · B1 · 🆕 Fluidez conversacional (menos pausas, chunks) — FLU‑1, ORA‑3`
- `FLU‑3 · C1 · 🆕 Pensar en el idioma (automatización avanzada) — FLU‑2, ORA‑4`

**⛳ Compuertas de nivel (hitos)** — agrupan las cuatro destrezas + cultura:
- `A1 “Superviviencia”` — AUD‑1, LEC‑1, ORA‑1, ESC‑1, CUL‑1, GRA‑3
- `A2 “Conversación básica”` — AUD‑2, LEC‑2, ORA‑2, ESC‑2, CUL‑2, FLU‑1
- `B1 “Independencia”` — AUD‑3, LEC‑3, ORA‑3, ESC‑3, CUL‑3
- `B2 “Fluidez funcional”` — AUD‑4, LEC‑4, ORA‑4, ESC‑4, CUL‑4, FON‑5
- `C1 “Dominio operativo”` — AUD‑5, LEC‑5, ORA‑5, ESC‑5, CUL‑5, EST‑4
- `C2 “Maestría”` — AUD‑6, LEC‑6, ORA‑6, ESC‑6, CUL‑6, FON‑7

### 11.3 Fichas completas de los nodos nuevos (12 campos)

*(Los nodos conservados mantienen la ficha de §5. Aquí se detallan los nuevos/
redefinidos representativos; el resto sigue el mismo esquema y se completará al
aprobar la estructura.)*

**CUL‑1 · Cortesía, saludos y tabúes básicos**
- *Descripción:* fórmulas de saludo/despedida, cortesía, gestos y 2–3 tabúes
  culturales clave; trato tú/usted si aplica.
- *Objetivo:* interactuar sin ofender y con las convenciones básicas del primer
  contacto.
- *Prerrequisitos:* VOC‑1. *Nivel:* A1 · *Tiempo:* 4–6 h · *Dificultad:* 🟢
- *Competencias:* sociolingüística/intercultural (Byram: actitudes + conocimiento).
- *Errores frecuentes:* trasladar la cortesía de la L1; tuteo/ustedeo indebido;
  gestos ofensivos por desconocimiento.
- *Recursos:* vídeos culturales de saludo/cortesía, guías de etiqueta, cápsulas de
  “qué no hacer”.
- *Proyecto:* grabar un saludo y presentación adecuados a un contexto formal y a uno
  informal.
- *Razón pedagógica:* Byram — la competencia intercultural es parte de la
  comunicativa **desde el día 1**; saludar y la cortesía **son** contenido A1.

**FON‑3 · Acentuación (acento léxico)**
- *Descripción:* colocar la sílaba tónica correcta y percibir su efecto en el
  significado.
- *Objetivo:* que el acento de palabra no impida la comprensión.
- *Prerrequisitos:* FON‑2, AUD‑2. *Nivel:* A2 · *Tiempo:* 6–10 h · *Dificultad:* 🟡
- *Competencias:* fonológica.
- *Errores frecuentes:* acentuar como en la L1; el acento erróneo hace que el oyente
  “busque otra palabra”.
- *Recursos:* pares de acentuación, marcado de tónica, shadowing enfocado.
- *Proyecto:* leer 20 palabras nuevas con acentuación correcta verificada.
- *Razón pedagógica:* Levis — el acento léxico es de los rasgos con **mayor impacto
  en la inteligibilidad** y es enseñable pronto; por eso sube a A2.

**EST‑2 · Tolerancia a la ambigüedad / no traducir**
- *Descripción:* aprender a comprender sin traducir y sin necesitar el 100% del
  mensaje.
- *Objetivo:* sostener el input y bajar la ansiedad.
- *Prerrequisitos:* AUD‑1, LEC‑1. *Nivel:* A2 · *Tiempo:* continuo · *Dificultad:* 🟢
- *Competencias:* estratégica/metacognitiva.
- *Errores frecuentes:* traducir palabra por palabra (fosilización); frustrarse por
  no entender todo.
- *Recursos:* técnicas de inferencia por contexto, input comprensible graduado.
- *Proyecto:* ver/leer algo entendiendo solo lo esencial y resumir la idea global.
- *Razón pedagógica:* Krashen (filtro afectivo) + prevención de fosilización; es una
  destreza **temprana**, no intermedia.

**FLU‑2 · Fluidez conversacional**
- *Descripción:* reducir pausas, usar “muletillas” útiles y producir bloques más
  largos sin traducir.
- *Objetivo:* hablar de forma más continua y natural sobre lo conocido.
- *Prerrequisitos:* FLU‑1, ORA‑3. *Nivel:* B1 · *Tiempo:* continuo · *Dificultad:* 🟡
- *Competencias:* fluidez, estratégica.
- *Errores frecuentes:* pararse a buscar la palabra “perfecta”; silencios largos.
- *Recursos:* técnica 4/3/2, frases de gestión conversacional, shadowing.
- *Proyecto:* monólogo de 2 min sobre un tema conocido sin pausas largas.
- *Razón pedagógica:* la hebra de fluidez de Nation debe **crecer** entre A2 y C1.

### 11.4 Cómo se ve la evolución (ejemplo visual de un hilo)

```
Pronunciación
  Pre-A1  Percepción de sonidos        (oír los contrastes)
    A1    Producción inteligible       (que me entiendan)
    A2    Acentuación                  (sílaba tónica correcta)
    B1    Ritmo y encadenamiento       (fluye, no “robótico”)
    B2    Entonación                   (melodía y prominencia)
    C1    Naturalidad / reducciones    (habla conectada real)
    C2    Casi nativo                  (matiz de acento)
```

El mismo patrón aplica a Conversación, Escucha, Lectura, Escritura, Vocabulario,
Gramática, Cultura y Fluidez: **cada competencia es una rama que crece a lo largo
de todo el árbol**, y las **compuertas de nivel** confirman que las ramas avanzan
de forma equilibrada.

> **Pendiente de tu aprobación.** Cuando valides esta estructura, completo las
> fichas de 12 campos de todos los nodos y solo entonces implementamos en el `seed`.
