import { PrismaClient } from "@prisma/client";

/**
 * Cliente único de Prisma.
 *
 * En desarrollo, Next.js recarga los módulos con frecuencia; sin este patrón
 * se crearían múltiples conexiones. Reutilizamos una instancia global.
 *
 * Esta es la ÚNICA puerta a la base de datos (ver docs/architecture/06).
 */
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
