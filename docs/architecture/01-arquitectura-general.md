# 01 · Arquitectura general

## Estilo: monolito modular

Para SkillTree elegimos un **monolito modular** desplegado como una única
aplicación Next.js, con el **código organizado por dominios** (módulos) de
fronteras claras.

**Por qué y no microservicios:** una fundadora en solitario (con IA) necesita
velocidad y bajo coste operativo. Los microservicios añaden complejidad de
despliegue, red y datos que no se justifica al inicio. Un monolito bien
modularizado permite, si algún día hace falta, **extraer un módulo a servicio**
sin reescribir el resto.

## Capas

```
┌─────────────────────────────────────────────────────────────┐
│  Presentación (Next.js App Router)                           │
│  - Server Components: leen datos y renderizan                │
│  - Client Components: interacción (árbol con React Flow)     │
├─────────────────────────────────────────────────────────────┤
│  Aplicación / Servicios (src/modules/*)                      │
│  - Lógica de negocio por dominio (catalog, skill-tree,       │
│    progress, users, auth, billing)                           │
│  - Validación de entrada con Zod en cada frontera            │
├─────────────────────────────────────────────────────────────┤
│  Acceso a datos (repositorios / Prisma)                      │
│  - Única capa que habla con la base de datos                 │
├─────────────────────────────────────────────────────────────┤
│  Base de datos (PostgreSQL)                                  │
└─────────────────────────────────────────────────────────────┘
```

**Regla de oro:** la presentación nunca habla directamente con Prisma. Pasa por
la capa de servicios del módulo correspondiente, que aplica reglas y validación.

## Flujo de una petición típica

**Lectura — ver un árbol (Server Component):**
1. La ruta `(/trees/[slug])` es un Server Component.
2. Llama a `catalog.getTreeBySlug()` y `progress.getUserTreeState()`.
3. El servicio de `skill-tree` **calcula el estado de cada nodo**
   (bloqueado/disponible/completado) combinando la estructura del árbol con el
   progreso del usuario.
4. Se envía al cliente la estructura + estados; el componente de React Flow lo
   pinta.

**Escritura — completar una habilidad (Server Action):**
1. El cliente invoca una *Server Action* `progress.completeSkill(skillId)`.
2. Se valida la entrada (Zod) y la autorización (sesión del usuario).
3. En una **transacción**: se registra la completitud, se otorga XP, se
   actualiza el rollup del árbol y se anota el evento de actividad.
4. Se revalida la vista; los nodos que ahora cumplen prerrequisitos pasan a
   "disponible".

## Decisiones transversales

- **Renderizado:** las definiciones de árboles son bastante estáticas → se
  cachean (ISR/segmentos estáticos). El progreso del usuario es dinámico →
  siempre fresco.
- **Estado en cliente:** mínimo. El árbol interactivo usa un store ligero
  (Zustand) solo para la vista (zoom, selección); la **fuente de verdad es el
  servidor**.
- **Validación:** Zod en toda entrada externa (formularios, Server Actions, route
  handlers).
- **Seguridad:** autenticación en todas las rutas de la app; autorización en la
  capa de servicios; *rate limiting* en mutaciones; nunca confiar en el cliente
  para decidir qué está desbloqueado.
- **Observabilidad:** registro estructurado de errores y de eventos de
  aprendizaje desde el inicio (aunque simple).

## Diagrama de contexto (alto nivel)

```
        Usuario (navegador / PWA)
                 │  HTTPS
                 ▼
        ┌──────────────────┐        ┌──────────────────┐
        │  App Next.js      │◀──────▶│  PostgreSQL       │
        │  (Vercel)         │ Prisma │  (gestionado)     │
        └──────────────────┘        └──────────────────┘
                 │
                 ├─▶ Auth.js (sesiones)
                 └─▶ (futuro) Stripe · almacenamiento de imágenes
```
