/**
 * URL pública de la aplicación. Se usa para construir enlaces absolutos
 * (por ejemplo, el enlace de recuperación de contraseña).
 */
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

/** ¿Estamos en desarrollo? Útil para el comportamiento del Mailer. */
export const IS_DEV = process.env.NODE_ENV !== "production";
