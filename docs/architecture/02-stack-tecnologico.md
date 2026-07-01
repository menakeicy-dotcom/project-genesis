# 02 · Stack tecnológico

Basado en [ADR-0001](../decisions/0001-stack-tecnologico.md), adaptado a las
necesidades de SkillTree. Criterio: madurez, bajo coste, sin APIs caras y
construible por una persona con ayuda de IA.

| Capa | Tecnología | Por qué en SkillTree |
|------|------------|----------------------|
| Lenguaje | **TypeScript** | Tipado de extremo a extremo (UI, servicios, datos). |
| Framework | **Next.js (App Router)** | Front + backend en un proyecto; Server Components para leer árboles rápido y con buen SEO en las páginas públicas. |
| UI | **Tailwind CSS + shadcn/ui** | Design system limpio y accesible; velocidad para lograr la UX que es prioridad. |
| **Render del árbol** | **React Flow (`@xyflow/react`)** | **Pieza clave.** Librería especializada en interfaces de nodos: zoom, desplazamiento, minimapa, nodos personalizados. Nos ahorra meses frente a SVG/Canvas a mano. |
| Estado de UI | **Zustand** | Store ligero solo para la vista interactiva del árbol. |
| Base de datos | **PostgreSQL** | Relacional; ideal para grafos de prerrequisitos, progreso y analítica. |
| ORM | **Prisma** | Esquema tipado, migraciones versionadas, gran DX. |
| Autenticación | **Auth.js** | Estándar, sin coste por usuario, múltiples proveedores. |
| Validación | **Zod** | Esquemas de validación reutilizables en cada frontera. |
| Tests | **Vitest + Playwright** | Unitarios/integración + end-to-end. |
| Calidad | **ESLint + Prettier + Husky + lint-staged** | Calidad automática en cada commit. |
| Pagos (futuro) | **Stripe** | Suscripción Premium cuando haya tracción. |
| Hosting | **Vercel + Postgres gestionado** (Neon/Supabase) | Despliegue continuo; coste inicial casi nulo. |

## Notas de elección

### React Flow es la decisión más específica de este stack
El corazón de la UX es un **grafo interactivo de nodos**. React Flow (`@xyflow/react`)
está hecho exactamente para eso y es open-source. Alternativas:
- *SVG/Canvas a mano* → control total, pero mucho tiempo y bugs de interacción.
- *Cytoscape.js / vis.js* → potentes pero menos idiomáticas en React y con estética
  más "científica" que de videojuego.

**Elegimos React Flow** por velocidad de desarrollo y porque permite nodos 100%
personalizados (aspecto de "habilidad de videojuego").

### Nada de dependencias caras
El MVP no requiere APIs de pago ni modelos de IA. El coste es esencialmente
hosting + base de datos gestionada, dentro de planes gratuitos/baratos al inicio.

### Gestor de paquetes
Recomendado **pnpm** (rápido y eficiente en disco).
