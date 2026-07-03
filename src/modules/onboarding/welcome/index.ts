// Punto de entrada del módulo de bienvenida (onboarding).
//
// Solo exponemos `WelcomeGate`, que carga la experiencia (`OnboardingScreen`)
// y su dependencia de animación de forma diferida. Exportar aquí también
// `OnboardingScreen` la arrastraría al bundle del panel y anularía la carga
// diferida, así que se importa siempre a través del gate.
export { WelcomeGate } from "./welcome-gate";
