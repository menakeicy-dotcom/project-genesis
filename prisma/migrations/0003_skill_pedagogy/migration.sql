-- AlterTable: contenido pedagógico enriquecido en Skill (arquitectura intacta).
ALTER TABLE "Skill" ADD COLUMN "branch" TEXT;
ALTER TABLE "Skill" ADD COLUMN "difficulty" TEXT;
ALTER TABLE "Skill" ADD COLUMN "objective" TEXT;
ALTER TABLE "Skill" ADD COLUMN "content" JSONB;
