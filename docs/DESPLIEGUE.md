# Guía de despliegue — SkillTree en Vercel + Neon

Objetivo: tener una **URL pública** (ej. `skilltree.vercel.app`), usable desde
el móvil, en ~15-20 minutos. Todo desde el navegador; no hace falta instalar nada.

Necesitas dos cuentas gratuitas: **Neon** (base de datos) y **Vercel** (hosting).

---

## Paso 1 — Base de datos (Neon)

1. Entra en <https://neon.tech> y crea una cuenta (gratis).
2. Crea un proyecto (ej. "skilltree"). Región: la más cercana.
3. Copia la **cadena de conexión** (Connection string). Se ve así:
   `postgresql://usuario:clave@ep-xxxx.neon.tech/neondb?sslmode=require`
4. Guárdala: será tu `DATABASE_URL`.

> Cualquier PostgreSQL gestionado vale (Supabase, Railway…). Neon es el más
> rápido de poner en marcha.

## Paso 2 — Desplegar en Vercel

1. Entra en <https://vercel.com> y regístrate **con tu cuenta de GitHub**.
2. "Add New… → Project" e **importa** el repositorio del proyecto.
3. Selecciona la rama `claude/cto-development-setup-dpth15` (o la que uses).
4. **Antes de pulsar Deploy**, abre "Environment Variables" y añade estas cuatro:

   | Nombre | Valor |
   |--------|-------|
   | `DATABASE_URL` | *(la cadena de conexión de Neon del paso 1)* |
   | `AUTH_SECRET` | *(genera el tuyo — ver más abajo)* |
   | `SEED_SECRET` | *(genera el tuyo — ver más abajo)* |
   | `NEXT_PUBLIC_APP_URL` | *(se rellena tras el primer deploy; ver paso 4)* |

   > ⚠️ **Nunca escribas estos secretos en el código ni en la documentación.**
   > Solo deben vivir en las variables de entorno de Vercel (y en tu `.env`
   > local, que está en `.gitignore`).

   **Cómo generar cada secreto** (elige una opción):
   - En una terminal: `openssl rand -base64 32` (para `AUTH_SECRET`) y
     `openssl rand -hex 16` (para `SEED_SECRET`).
   - Para `AUTH_SECRET` también sirve: `npx auth secret`.
   - Sin terminal: usa un generador de contraseñas de confianza (mínimo 32
     caracteres aleatorios) o pídeselos a tu equipo técnico.
   - Genera **valores distintos** para cada entorno (producción, pruebas).

5. Pulsa **Deploy**. El propio despliegue **crea las tablas** automáticamente
   (`prisma migrate deploy`).

## Paso 3 — Cargar el contenido de demostración

Cuando el deploy termine, tendrás una URL (ej. `https://skilltree-xxx.vercel.app`).

1. Abre en el navegador (¡vale el del móvil!), sustituyendo `TU_SEED_SECRET`
   por el valor que pusiste en Vercel:
   `https://TU-URL.vercel.app/api/seed?key=TU_SEED_SECRET`
2. Verás `"Contenido de demostración cargado."`. (Si lo repites, dirá que ya
   había contenido: es seguro.)

## Paso 4 — Ajuste final (opcional pero recomendado)

1. En Vercel → Settings → Environment Variables, pon `NEXT_PUBLIC_APP_URL` con
   tu URL real (`https://TU-URL.vercel.app`) y vuelve a desplegar ("Redeploy").
   Esto asegura que los enlaces de correo apunten bien.

## ¡Listo! 🎉

Abre `https://TU-URL.vercel.app` en el móvil, **regístrate** y navega:
Explorar → un árbol → completa habilidades → mira tu perfil crecer.

---

## Notas

- **Correo (recuperación de contraseña):** en producción, sin proveedor de
  correo configurado, el enlace de recuperación se registra en los *logs* de
  Vercel (Functions logs) en lugar de enviarse. Para envío real, se añadirá un
  proveedor (Resend/SMTP) más adelante.
- **Contenido:** el catálogo actual es **de demostración** (placeholder). Los
  currículos reales se investigarán y aprobarán antes de publicarse.
- **Dominio propio:** cuando quieras, en Vercel → Domains puedes conectar un
  dominio (ej. `skilltree.app`).
