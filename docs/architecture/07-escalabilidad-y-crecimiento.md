# 07 · Escalabilidad y crecimiento (crecer durante años)

Cómo está pensado SkillTree para crecer **sin reescrituras traumáticas**.

## 1. Crecimiento del código (mantenibilidad)

- **Monolito modular:** módulos por dominio con fronteras claras. Si un módulo se
  vuelve crítico o pesado (p. ej. analítica), se puede **extraer a un servicio**
  aparte sin tocar los demás.
- **ADRs:** cada decisión importante se documenta (`docs/decisions/`), para que
  el "por qué" sobreviva al tiempo y a nuevas personas.
- **Tipado + validación + tests:** TypeScript, Zod en las fronteras y una
  pirámide de tests (unitarios de reglas del árbol y XP; e2e de los flujos clave)
  permiten refactorizar con confianza.
- **CI/CD:** lint + test + build en cada cambio evita regresiones.

## 2. Crecimiento del contenido (de curado a comunidad)

El modelo de datos ya contempla la transición a **UGC**:
- `Tree.authorId`, `status` (borrador/publicado) y `visibility` existen desde el
  día 1.
- **Roles** (usuario, autor, moderador, admin) se añaden sin rediseñar.
- **Versionado de árboles** (`Tree.version`): al publicar cambios grandes, el
  progreso de los usuarios sigue siendo coherente. Estrategia inicial: cambios
  **aditivos** (añadir habilidades no rompe el progreso existente); cambios
  destructivos generan una nueva versión.
- **Moderación** y editor visual de árboles: módulos nuevos, no cambios en el
  núcleo.

## 3. Crecimiento de usuarios (rendimiento)

- **Estados derivados + rollups:** las pantallas más vistas (panel, árbol) leen
  contadores o estructura cacheada; no recorren toda la historia.
- **Caché de definiciones:** los árboles cambian poco → ISR/segmentos estáticos.
- **Índices** definidos en el modelo de datos (doc 03).
- **Escalado de BD:** PostgreSQL gestionado escala vertical y con réplicas de
  lectura mucho más allá de las primeras decenas de miles de usuarios.
- **Log append-only** para actividad: barato de escribir; archivable si crece.

## 4. Crecimiento de mercado (internacionalización)

- Dado que "Idiomas" es una categoría y el público es global, la **i18n** se
  prevé desde el diseño: textos de UI externalizados y contenido (títulos,
  descripciones) con estrategia de traducción (tabla de traducciones o columnas
  por idioma).
- Estructura de rutas preparada para localización.

## 5. Crecimiento del negocio (monetización)

- Módulo `billing` aislado; integrar **Stripe** (Premium) no toca la lógica de
  aprendizaje.
- Los rollups y eventos ya dan la base para *paywalls* por árbol o por función
  (analíticas avanzadas, árboles premium).

## Qué evitamos deliberadamente al inicio (para no sobre-diseñar)

- Microservicios, colas y orquestación compleja: innecesarios hasta tener
  volumen. El monolito modular los hace **posibles después**, no obligatorios
  ahora.
- IA/APIs de pago en el núcleo: fuera del MVP por coste.

## Hoja de ruta técnica (resumen)

1. **MVP:** catálogo + árbol interactivo + progreso/gamificación + auth.
2. **Consolidación:** panel de curación, i18n, analítica de aprendizaje.
3. **Escala:** UGC (editor + moderación + versionado), Premium (Stripe),
   logros/insignias, posibles apps nativas.
