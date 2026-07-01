import { IS_DEV } from "@/lib/env";

/**
 * Interfaz de envío de correo.
 *
 * Decisión de diseño (ver PROJECT / Sprint 1): el envío real de emails queda
 * detrás de esta interfaz para NO depender de una API de pago en el MVP.
 *
 * - Desarrollo: `ConsoleMailer` imprime el correo (y sus enlaces) en la consola
 *   del servidor. La app funciona sin configurar nada.
 * - Producción: se implementará un adaptador (p. ej. Resend/SMTP) que cumpla
 *   esta misma interfaz, sin tocar la lógica de negocio.
 */
export interface Mailer {
  send(message: MailMessage): Promise<void>;
}

export interface MailMessage {
  to: string;
  subject: string;
  /** Cuerpo en texto plano (suficiente para el MVP). */
  text: string;
}

/** Implementación para desarrollo: registra el correo en consola. */
class ConsoleMailer implements Mailer {
  async send(message: MailMessage): Promise<void> {
    console.info(
      [
        "",
        "📧 ─────────────── CORREO (modo desarrollo) ───────────────",
        `Para:    ${message.to}`,
        `Asunto:  ${message.subject}`,
        "───────────────────────────────────────────────────────────",
        message.text,
        "───────────────────────────────────────────────────────────",
        "",
      ].join("\n"),
    );
  }
}

/**
 * Devuelve el Mailer adecuado al entorno. Por ahora siempre ConsoleMailer;
 * cuando exista un proveedor configurado, aquí se elegirá el adaptador real.
 */
export function getMailer(): Mailer {
  // Punto de extensión: if (process.env.RESEND_API_KEY) return new ResendMailer();
  if (IS_DEV) return new ConsoleMailer();
  // En producción, mientras no haya proveedor, seguimos registrando en consola
  // para no bloquear el flujo. Se sustituirá por un adaptador real.
  return new ConsoleMailer();
}
