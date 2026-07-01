/** Mensaje de error de un campo de formulario. No renderiza nada si no hay error. */
export function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-destructive text-sm">{message}</p>;
}
