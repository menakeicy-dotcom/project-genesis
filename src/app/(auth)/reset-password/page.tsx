import type { Metadata } from "next";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResetPasswordForm } from "@/modules/auth/components/reset-password-form";

export const metadata: Metadata = { title: "Nueva contraseña" };

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Elige una nueva contraseña</CardTitle>
        <CardDescription>
          Introduce tu nueva contraseña para tu cuenta.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResetPasswordForm token={token ?? ""} />
      </CardContent>
    </Card>
  );
}
