-- AlterTable
-- Marca si el usuario ya vio la animación de bienvenida (se muestra una sola vez).
ALTER TABLE "User" ADD COLUMN "hasSeenWelcome" BOOLEAN NOT NULL DEFAULT false;
