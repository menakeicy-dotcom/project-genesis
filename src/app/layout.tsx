import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { FallingLeaves } from "@/components/falling-leaves";
import { BackgroundLeaves } from "@/components/background-leaves";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "SkillTree — Aprende como si subieras de nivel",
    template: "%s · SkillTree",
  },
  description:
    "Aprende cualquier habilidad mediante árboles de aprendizaje visuales, inspirados en los videojuegos.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-dvh font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundLeaves />
          {children}
          <FallingLeaves />
        </ThemeProvider>
      </body>
    </html>
  );
}
