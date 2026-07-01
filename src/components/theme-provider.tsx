"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

/**
 * Proveedor de tema (claro/oscuro). Envuelve next-themes para centralizar la
 * configuración. El modo oscuro existe desde el MVP (requisito de producto).
 */
export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
