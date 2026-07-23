-- Elimina DEFINITIVAMENTE el contenido de demostración/legado que ya no
-- pertenece al producto (árboles placeholder y sus categorías huérfanas).
--
-- Es idempotente y seguro: si los registros ya no existen, no hace nada. El
-- borrado de un árbol arrastra en cascada sus habilidades, recursos,
-- prerrequisitos e inscripciones/progreso asociados (todos onDelete: Cascade).
-- El código que los creaba (server/seed.ts / seedIfEmpty) ya fue eliminado, así
-- que un entorno nuevo nunca los tendrá; esta migración limpia los que existían.

DELETE FROM "Tree" WHERE "slug" IN (
  'javascript-desde-cero',
  'guitarra-para-principiantes',
  'cocina-basica',
  'ingles-basico-a1'
);

-- Categorías de demostración que ningún spec real utiliza. Solo se borran si
-- han quedado sin ningún árbol asociado (defensa extra: nunca arrastra
-- contenido real por cascada).
DELETE FROM "Category"
WHERE "slug" IN ('cocina', 'arte', 'fotografia', 'negocios', 'desarrollo-personal')
  AND "id" NOT IN (SELECT DISTINCT "categoryId" FROM "Tree");
