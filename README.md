# Project Genesis

> Base profesional para construir un producto web moderno, escalable y mantenible.

[![Estado](https://img.shields.io/badge/estado-fundaci%C3%B3n-blue)]()
[![Licencia](https://img.shields.io/badge/licencia-pendiente-lightgrey)]()

---

## 🎯 Propósito

Este repositorio es la **fundación técnica** de un producto digital pensado para
ser usado por personas reales y monetizado de forma sostenible.

> **⚠️ Decisión pendiente — Definición del producto.**
> La visión de producto (qué problema resuelve, para quién y cómo se monetiza)
> aún **no está definida**. Es la **decisión inmediata** antes de escribir
> funcionalidad. Las opciones se detallan en [`PROJECT.md`](./PROJECT.md).
>
> Esta base se ha diseñado de forma **agnóstica al producto**: sirve como punto
> de partida sólido sea cual sea la dirección que se elija, sin comprometer
> decisiones de negocio por adelantado.

---

## 🏗️ Estado actual

| Fase | Estado |
|------|--------|
| Fundación del repositorio (docs, git, convenciones) | ✅ Completada |
| Definición del producto | ⏳ Pendiente (tu decisión) |
| Inicialización del stack (scaffold) | ⏳ Bloqueada por la anterior |
| Desarrollo del MVP | ⏳ Pendiente |

---

## 🧱 Stack tecnológico recomendado

El stack propuesto y su justificación completa están documentados como
decisión de arquitectura en
[`docs/decisions/0001-stack-tecnologico.md`](./docs/decisions/0001-stack-tecnologico.md).

Resumen:

| Capa | Tecnología | Por qué |
|------|------------|---------|
| Lenguaje | **TypeScript** | Tipado estático de extremo a extremo; menos errores en runtime. |
| Framework | **Next.js (App Router)** | Full-stack React: frontend + API en un solo proyecto. |
| Estilos | **Tailwind CSS + shadcn/ui** | UI rápida, consistente y accesible. |
| Base de datos | **PostgreSQL** | Relacional, robusta y escalable. |
| ORM | **Prisma** | Acceso a datos tipado, con migraciones versionadas. |
| Autenticación | **Auth.js** | Estándar, flexible, integrable con múltiples proveedores. |
| Pagos | **Stripe** | Estándar de la industria para suscripciones. |
| Tests | **Vitest + Playwright** | Unitarios/integración + end-to-end. |
| Calidad | **ESLint + Prettier + Husky** | Estilo y calidad automáticos antes de cada commit. |
| Hosting | **Vercel + Postgres gestionado** | Despliegue continuo y mínima fricción. |

> El scaffold con este stack se generará **después** de definir el producto,
> para evitar estructura desechable.

---

## 📂 Estructura del repositorio

```
project-genesis/
├── README.md                 # Este archivo: visión general
├── PROJECT.md                # Bitácora viva: decisiones, progreso, próximos pasos
├── TODO.md                   # Tareas pendientes priorizadas
├── .gitignore                # Archivos excluidos del control de versiones
├── .editorconfig             # Estilo de código coherente entre editores
└── docs/
    ├── README.md             # Cómo está organizada la documentación
    └── decisions/            # ADR — Architecture Decision Records
        ├── README.md         # Qué es un ADR y cómo se usa
        ├── 0000-plantilla.md # Plantilla para nuevas decisiones
        └── 0001-stack-tecnologico.md
```

> La estructura de la aplicación (`src/`, `tests/`, etc.) se creará al
> inicializar el stack, evitando carpetas vacías que no aportan valor todavía.

---

## 🚀 Próximos pasos

1. **Definir el producto** (ver `PROJECT.md`).
2. Inicializar el stack y el scaffold del proyecto.
3. Configurar CI/CD, linters y hooks de pre-commit.
4. Desarrollar el primer MVP enfocado en un único problema.

---

## 🤝 Convenciones

- **Commits:** [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `chore:`…).
- **Documentación:** toda decisión relevante se registra como ADR en `docs/decisions/`.
- **Calidad:** nada de código apresurado; cada función documentada y probada.
