# 06 · Estructura de carpetas

Organización **por dominios (feature-first)**, no por tipo de archivo. Cada
módulo agrupa todo lo suyo (UI, servicios, tipos, validación) con fronteras
claras, para que el proyecto pueda crecer durante años sin volverse un nudo.

```
skilltree/
├── src/
│   ├── app/                      # Next.js App Router (rutas, layouts, páginas)
│   │   ├── (marketing)/          # público: landing, precios, categorías
│   │   ├── (app)/                # autenticado: dashboard, árbol, perfil
│   │   │   ├── dashboard/
│   │   │   ├── trees/[slug]/     # vista interactiva de un árbol
│   │   │   └── profile/
│   │   ├── api/                  # route handlers (webhooks, etc.)
│   │   ├── layout.tsx
│   │   └── globals.css
│   │
│   ├── modules/                  # ← lógica de negocio por dominio
│   │   ├── auth/
│   │   ├── catalog/              # categorías + árboles
│   │   │   ├── components/       # UI propia del dominio
│   │   │   ├── services/         # casos de uso (hablan con la capa de datos)
│   │   │   ├── schemas/          # validación Zod
│   │   │   └── types.ts
│   │   ├── skill-tree/           # representación, reglas y render del árbol
│   │   ├── progress/             # progreso, XP, niveles, rachas
│   │   ├── users/
│   │   └── billing/              # (futuro) suscripciones
│   │
│   ├── components/               # UI compartida / design system (shadcn/ui)
│   │   └── ui/
│   ├── server/                   # acceso a datos server-only (repositorios)
│   │   ├── db.ts                 # cliente Prisma único
│   │   └── repositories/
│   ├── lib/                      # utilidades transversales
│   │   ├── auth.ts
│   │   ├── config.ts
│   │   └── utils.ts
│   ├── hooks/                    # hooks React compartidos
│   └── styles/
│
├── prisma/
│   ├── schema.prisma             # esquema (doc 03)
│   ├── migrations/
│   └── seed.ts                   # datos de ejemplo (1 categoría + 1 árbol)
│
├── public/                       # estáticos (iconos, imágenes)
├── tests/
│   ├── unit/
│   └── e2e/                      # Playwright
├── docs/                         # esta documentación
│   ├── architecture/
│   ├── decisions/                # ADR
│   └── research/
│
├── .github/workflows/            # CI (lint + test + build)
├── .env.example
├── package.json
└── (config: eslint, prettier, tailwind, tsconfig, playwright, vitest)
```

## Principios de la estructura

- **Feature-first:** al añadir una funcionalidad, casi todo su código vive en
  `src/modules/<feature>`. Facilita encontrar cosas y **extraer o reemplazar** un
  módulo entero.
- **Una sola puerta a la base de datos:** solo `src/server` (repositorios) usa
  Prisma. Los módulos piden datos a esa capa; la UI nunca toca la BD.
- **`app/` es solo enrutado y composición:** las páginas orquestan; la lógica
  vive en los módulos.
- **Fronteras explícitas:** un módulo expone lo que otros pueden usar a través de
  su `index`/servicios; no se importan sus interioridades desde fuera.
- **Componentes compartidos vs. de dominio:** lo genérico (botón, tarjeta) en
  `src/components`; lo específico (nodo de habilidad) en su módulo.
