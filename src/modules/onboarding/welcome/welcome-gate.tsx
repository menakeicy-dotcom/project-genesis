"use client";

import dynamic from "next/dynamic";

/**
 * Carga la pantalla de bienvenida (y su dependencia de animación, Framer
 * Motion) solo cuando de verdad hay que mostrarla.
 *
 * El panel es un componente de servidor y solo renderiza este "gate" cuando el
 * usuario aún no ha visto la introducción. Al ser una importación dinámica
 * (`ssr: false`), quien ya la vio nunca descarga este código: mantiene ligera
 * la carga del panel en el 99% de las visitas.
 */
const OnboardingScreen = dynamic(
  () => import("./onboarding-screen").then((m) => m.OnboardingScreen),
  { ssr: false },
);

export function WelcomeGate() {
  return <OnboardingScreen />;
}
