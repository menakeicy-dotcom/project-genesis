import { Suspense } from "react";
import type { Metadata } from "next";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "@/modules/auth/components/login-form";

export const metadata: Metadata = { title: "Iniciar sesión" };

export default function LoginPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bienvenido de nuevo</CardTitle>
        <CardDescription>
          Inicia sesión para seguir haciendo crecer tu árbol.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Suspense fallback={null}>
          <LoginForm />
        </Suspense>
      </CardContent>
    </Card>
  );
}
