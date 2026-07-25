"use server";

import { AuthError } from "next-auth";

import { signIn, signOut } from "@/auth";
import { db } from "@/server/db";
import { roleForNewUser } from "@/server/access";
import { APP_URL } from "@/lib/env";
import {
  forgotPasswordSchema,
  loginSchema,
  registerSchema,
  resetPasswordSchema,
  type ForgotPasswordInput,
  type LoginInput,
  type RegisterInput,
  type ResetPasswordInput,
} from "@/modules/auth/schemas";
import { hashPassword } from "@/modules/auth/services/password";
import { getMailer } from "@/modules/auth/services/mailer";
import {
  createResetToken,
  hashToken,
  resetTokenExpiry,
} from "@/modules/auth/services/tokens";

/** Resultado uniforme de una acción de autenticación. */
export type ActionResult = { success?: true; error?: string };

/** Cierra la sesión y vuelve a la página de inicio. */
export async function logout(): Promise<void> {
  await signOut({ redirectTo: "/" });
}

/**
 * Registra un nuevo usuario con email y contraseña.
 * No inicia sesión automáticamente (ver mejora futura en la doc del Sprint 1).
 */
export async function registerUser(
  values: RegisterInput,
): Promise<ActionResult> {
  const parsed = registerSchema.safeParse(values);
  if (!parsed.success) return { error: "Revisa los datos del formulario." };

  const { name, email, password } = parsed.data;

  const existing = await db.user.findUnique({ where: { email } });
  if (existing) {
    return { error: "Ya existe una cuenta con este correo." };
  }

  const passwordHash = await hashPassword(password);
  // El rol se asigna según la lista de administradores (arranque del fundador).
  await db.user.create({
    data: { name, email, passwordHash, role: roleForNewUser(email) },
  });

  return { success: true };
}

/**
 * Inicia sesión con credenciales. En éxito, Auth.js redirige a /dashboard
 * (lanza NEXT_REDIRECT, que se debe propagar).
 */
export async function loginUser(values: LoginInput): Promise<ActionResult> {
  const parsed = loginSchema.safeParse(values);
  if (!parsed.success) return { error: "Revisa los datos del formulario." };

  try {
    await signIn("credentials", {
      email: parsed.data.email,
      password: parsed.data.password,
      redirectTo: "/dashboard",
    });
    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: "Correo o contraseña incorrectos." };
    }
    // Propaga la redirección de Next (y cualquier otro error real).
    throw error;
  }
}

/**
 * Solicita la recuperación de contraseña. Por seguridad, la respuesta es la
 * misma exista o no el correo (evita enumeración de cuentas).
 */
export async function requestPasswordReset(
  values: ForgotPasswordInput,
): Promise<ActionResult> {
  const parsed = forgotPasswordSchema.safeParse(values);
  if (!parsed.success) return { error: "Introduce un correo válido." };

  const { email } = parsed.data;
  const user = await db.user.findUnique({ where: { email } });

  if (user) {
    const { token, tokenHash } = createResetToken();
    await db.passwordResetToken.create({
      data: { userId: user.id, tokenHash, expires: resetTokenExpiry() },
    });

    const link = `${APP_URL}/reset-password?token=${token}`;
    await getMailer().send({
      to: email,
      subject: "Recupera tu contraseña — SkillTree",
      text: [
        `Hola${user.name ? ` ${user.name}` : ""},`,
        "",
        "Has solicitado restablecer tu contraseña en SkillTree.",
        "Abre este enlace para elegir una nueva (caduca en 30 minutos):",
        "",
        link,
        "",
        "Si no fuiste tú, ignora este mensaje.",
      ].join("\n"),
    });
  }

  return { success: true };
}

/** Restablece la contraseña a partir de un token válido y de un solo uso. */
export async function resetPassword(
  values: ResetPasswordInput,
): Promise<ActionResult> {
  const parsed = resetPasswordSchema.safeParse(values);
  if (!parsed.success) return { error: "Revisa los datos del formulario." };

  const { token, password } = parsed.data;
  const record = await db.passwordResetToken.findUnique({
    where: { tokenHash: hashToken(token) },
  });

  if (!record || record.usedAt || record.expires < new Date()) {
    return { error: "El enlace no es válido o ha caducado." };
  }

  const passwordHash = await hashPassword(password);

  await db.$transaction([
    db.user.update({
      where: { id: record.userId },
      data: { passwordHash },
    }),
    // Invalida todos los tokens de recuperación pendientes de este usuario.
    db.passwordResetToken.updateMany({
      where: { userId: record.userId, usedAt: null },
      data: { usedAt: new Date() },
    }),
  ]);

  return { success: true };
}
