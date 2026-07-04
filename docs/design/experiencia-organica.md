# Propuesta de experiencia — “El árbol vivo” de SkillTree

> **Estado:** PROPUESTA para aprobación. **Sin cambios de código todavía.**
> Regla base: **no se toca el motor** (DAG, prerrequisitos, estados, XP). Solo
> cambia **cómo lo percibe el usuario**. La complejidad sigue existiendo dentro;
> visualmente desaparece.

---

## 1. Análisis de la interfaz actual: ¿qué la hace “mecánica”?

La vista del árbol (`skill-tree-canvas.tsx`) está construida con **React Flow**,
una librería para **editores de grafos**. Eso determina el aspecto y es la causa
raíz del problema. En concreto:

| # | Elemento actual | Por qué se siente a “diagrama/ingeniería” |
|---|---|---|
| 1 | **Nodos = cajas** (`w-40 rounded-lg border-2`) | Rectángulos rígidos = tarjetas de base de datos, no seres vivos. |
| 2 | **`Handle` (puntos de conexión)** arriba/abajo | Son literalmente “puertos” de un diagrama de flujo. |
| 3 | **Aristas** entre nodos | Cables/conexiones = esquema técnico; muestran el DAG al usuario. |
| 4 | **`<Background>` de puntos** | Rejilla tipo “blueprint”/editor. |
| 5 | **`<Controls>` de zoom** | Widget de herramienta de ingeniería. |
| 6 | **Se ven todos los nodos a la vez** (`fitView`) | Satura; las zonas futuras/bloqueadas se muestran completas → agobio, sin sensación de crecimiento. |
| 7 | **Azul como color del árbol** (`border-primary`) | Frío y técnico; el azul debería ser de la marca/UI, no del ser vivo. |
| 8 | **Posiciones `x/y` guardadas** | Distribución arbitraria/reticular, no ramificación orgánica. |
| 9 | **Iconos `Lock`/`Check`** | Insignias de estado “de sistema”. |
| 10 | **Sin movimiento** | Un diagrama quieto. Nada “vivo”. |
| 11 | **Mismo aspecto claro/oscuro** (solo swap de tokens) | No hay dos temas *diseñados*. |

**Conclusión:** por muy bien que se estilen las cajas, mientras la vista sea un
**grafo de nodos + aristas + rejilla + zoom**, el usuario percibirá un diagrama.
Hay que **sustituir el paradigma de render**, no maquillarlo.

---

## 2. La idea que resuelve el problema

**Como ocultamos el DAG, no necesitamos dibujar un grafo.** Ese es el desbloqueo
conceptual. Un editor de grafos existe para *ver y editar conexiones*; nosotros
queremos justo lo contrario: **esconderlas**. El motor ya sabe qué está
desbloqueado; la interfaz solo tiene que **mostrar un árbol bonito donde cada
habilidad es una hoja**, y dejar que el motor decida (invisiblemente) cuándo esa
hoja puede “nacer”.

Esto elimina el problema difícil (dibujar un grafo con múltiples padres sin que
parezca un diagrama) y lo cambia por uno agradable: **componer un árbol orgánico**.

Ya tenemos la tecnología probada: en la animación de bienvenida construimos ramas
orgánicas (SVG), nacimiento de hojas, viento, partículas y crecimiento. La
propuesta **reutiliza y consolida** eso en un sistema reutilizable **`LivingTree`**.

---

## 3. Propuesta de experiencia (punto por punto)

### 3.1 El usuario nunca ve el DAG
- Fuera React Flow en la vista de usuario: **sin aristas, sin `Handle`, sin
  rejilla, sin controles de zoom**.
- Las relaciones de prerrequisito **no se dibujan**: una hoja simplemente aparece
  cuando el motor la marca “disponible”. La estructura se *insinúa* por dónde
  crece (en su rama), no por líneas.
- *Justificación UX:* reduce carga cognitiva (menos elementos = más calma; ley de
  Hick). El grafo técnico es para nosotros (ya tenemos la vista interna de
  revisión), no para el usuario.

### 3.2 El árbol es el protagonista y es orgánico
- Un **árbol dibujado** (tronco de corteza real → ramas que se afinan → ramitas →
  hojas), con formas rellenas y curvas naturales, asimetría controlada. Nada de
  cajas.
- *Justificación:* congruencia con el modelo mental “aprender = crecer”; las formas
  orgánicas se perciben como vivas y calman (naturaleza).

### 3.3 Las habilidades nacen como hojas/brotes
- Cada habilidad = **una hoja o brote** sobre una rama (no un círculo genérico).
- Estados con lenguaje natural (no candados):
  - **Bloqueada / futura:** aún no ha brotado (o brote diminuto, muy atenuado).
  - **Disponible:** brote listo, con un latido suave que invita a tocar.
  - **Completada:** hoja plena, verde viva, con un brillo tenue.
- **Al desbloquear:** nace la hoja (crecimiento con *easing* natural) → la rama se
  extiende un poco → **una luz verde muy sutil recorre la rama**. (Ver §5.)
- *Justificación:* la metáfora se vuelve literal; cada logro produce un cambio
  visible y satisfactorio (refuerzo positivo, sin gamificación estridente).

### 3.4 Reducir la carga visual (revelado progresivo)
- Mostrar **solo lo cercano**: raíz, lo completado y lo disponible **ahora**.
- Las zonas futuras: **atenuadas / desenfocadas (niebla) / aún sin brotar**, y se
  revelan a medida que avanzas. “El árbol crece poco a poco.”
- *Justificación:* evita saturación y crea **curiosidad** (brecha de información);
  da una sensación real de crecimiento a lo largo del tiempo.

### 3.5 Animaciones vivas pero relajantes
- Viento (flexión jerárquica: el tronco casi nada, la copa más), **partículas
  verdes muy suaves**, **hojas cayendo ocasionalmente**, brote al desbloquear.
- Todo con `transform`/`opacity` (GPU, 60 FPS) y **respetando `reduced-motion`**.
- *Justificación:* “vivo” sin distraer; lo excesivo cansa y rompe la calma.

### 3.6 Dos temas *diseñados* (no invertidos)
- **Oscuro — bosque nocturno:** fondo casi negro con **degradado verde profundo**,
  luz tenue, **luz cálida** rozando el tronco, hojas verdes vivas, luciérnagas/
  partículas suaves.
- **Claro — naturaleza iluminada:** fondo blanco/crema, **degradados verdes
  suaves**, luz de día, contraste excelente, sombras suaves.
- Cada tema define su propia iluminación y matices (no es un swap).
- *Justificación:* ambos deben sentirse premium y legibles (contraste WCAG).

### 3.7 Paleta natural (verde = solo vida)
- Verdes **naturales y apagados** (salvia, musgo, bosque), nada fluorescente.
- **Marrones reales** de corteza para troncos/ramas. Sombras suaves.
- El **azul** se reserva para la **UI** (botones, enlaces, foco), **no** para el
  árbol.
- Tokens propuestos (se afinan al implementar):
  - Oscuro: fondo `#07120d`→`#0c1c14`, hoja `#3f9b57`/`#5fbf78`, corteza
    `#5b3f2a`, luz cálida `#f4e0a1` (glow), acento UI azul `#3b82f6`.
  - Claro: fondo `#f6faf5`→`#eaf3e8`, hoja `#3f8f55`/`#67b97d`, corteza `#6b4a34`,
    texto `#12241a`.

### 3.8 Objetivo emocional
Que al abrir SkillTree el usuario piense **“estoy viendo crecer mi conocimiento”**,
no “estoy viendo un diagrama”. Calma, progreso y curiosidad.

---

## 4. Cómo se mapea el DAG a un árbol bonito (sin dibujar el grafo)

El motor no cambia. Añadimos una **capa de presentación** que traduce datos →
geometría orgánica:

1. **Rango topológico** de cada habilidad (profundidad = cuántos prerrequisitos
   encadenados) → **distancia desde la raíz** a lo largo del tronco/ramas.
2. **Agrupación por rama temática** (en Idiomas, las hebras: pronunciación,
   vocabulario…) → cada hebra es una **rama principal** del árbol.
3. Dentro de una rama, las habilidades del mismo rango **se reparten** como
   ramitas/hojas (fan‑out) con asimetría natural.
4. Las **dependencias entre ramas** (multi‑padre) **no se dibujan**; el motor las
   respeta al decidir qué hoja puede nacer. Si una hoja necesita algo de otra
   rama, simplemente no brota hasta que el motor lo permita.
5. Posiciones **calculadas** por este algoritmo (dejamos de depender de `x/y`
   guardados y arbitrarios; podemos conservarlos como “semilla” opcional).

Resultado: un árbol que *parece* natural y cuya complejidad (multi‑prerrequisitos)
queda **oculta pero intacta**.

---

## 5. Plan de implementación por fases (motor intacto)

- **Fase 0 · Fundamentos.** Tokens de la paleta natural + los **dos temas
  diseñados** en `globals.css`; primitivas de movimiento reutilizables. Extraer de
  la animación de bienvenida un módulo compartido `living-tree` (ramas, hoja,
  viento, partículas).
- **Fase 1 · Render orgánico.** Componente **`LivingTree`** (SVG + Framer Motion)
  que consume **los mismos datos** (skills, states, prerequisites) vía una función
  de *layout* (§4). Sustituye a `SkillTreeCanvas` en la página del árbol. React
  Flow deja de usarse en la vista de usuario (se puede conservar solo en la vista
  interna de revisión).
- **Fase 2 · Revelado progresivo + desbloqueo.** Niebla/atenuación de zonas
  futuras; animación de nacimiento de hoja + extensión de rama + **luz verde que
  recorre la rama** al completar una habilidad.
- **Fase 3 · Vida ambiental.** Viento jerárquico, partículas, hojas cayendo;
  `prefers-reduced-motion`.
- **Fase 4 · Lenguaje calmado en toda la app.** Aplicar naturaleza/calma/
  minimalismo (Apple/Headspace/Notion/Duolingo) a dashboard, explorar y perfil;
  pulir **claro y oscuro** en toda la aplicación.
- **Fase 5 · Verificación.** Capturas en ambos temas, 60 FPS, accesibilidad
  (contraste, foco, teclado), y prueba de desbloqueo real contra la BD.

*(Sugiero implementar por fases y revisar entre cada una, empezando por Fase 0+1
que es donde se ve el cambio de paradigma.)*

---

## 6. Qué NO cambia
- El **DAG**, prerrequisitos, cálculo de estados (`computeNodeStates`), XP, niveles,
  inscripción y toda la lógica de progreso.
- Las rutas y el modelo de datos (podemos añadir campos de presentación opcionales
  más adelante, sin romper nada).

---

## 7. Riesgos y decisiones a validar contigo
- **Densidad:** árboles con muchas habilidades necesitan revelado progresivo y
  quizá “zoom por rama”. Propongo empezar mostrando **una rama/categoría a la vez**.
- **Layout automático vs. artesanal:** el algoritmo (§4) da buenos resultados
  genéricos; para árboles “estrella” podríamos permitir ajustes manuales luego.
- **Rendimiento móvil:** limitar nº de hojas animadas simultáneamente (culling de
  zonas no visibles).

> **Pendiente de tu aprobación.** Si te convence la dirección, empiezo por la
> **Fase 0+1** (tokens + render orgánico del árbol) y te muestro el resultado antes
> de seguir. No implemento nada hasta tu visto bueno.
