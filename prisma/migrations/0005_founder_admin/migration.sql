-- Concede rol ADMIN (fundador) a la cuenta registrada como administrador, si
-- existe. Idempotente: no hace nada si el correo aún no se ha registrado (en
-- ese caso el rol se asigna al registrarse, ver roleForNewUser). El correo del
-- fundador puede cambiarse con la variable de entorno ADMIN_EMAILS; esta
-- migración cubre el valor por defecto.

UPDATE "User"
SET "role" = 'ADMIN'::"Role"
WHERE lower("email") = 'keicymenapalacios@gmail.com'
  AND "role" <> 'ADMIN';
