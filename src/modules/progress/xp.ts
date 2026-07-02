/**
 * Cálculo de niveles a partir de la XP. Funciones puras y fáciles de testear.
 * Curva: suave al principio, más exigente después (ver doc 05).
 */

/** XP total acumulada necesaria para alcanzar un nivel. */
export function xpForLevel(level: number): number {
  if (level <= 1) return 0;
  return Math.floor(100 * Math.pow(level - 1, 1.5));
}

/** Nivel correspondiente a una cantidad de XP. */
export function levelForXp(xp: number): number {
  let level = 1;
  while (xpForLevel(level + 1) <= xp) level++;
  return level;
}

/** Progreso hacia el siguiente nivel (para barras de progreso). */
export function levelProgress(xp: number): {
  level: number;
  current: number;
  needed: number;
  pct: number;
} {
  const level = levelForXp(xp);
  const base = xpForLevel(level);
  const next = xpForLevel(level + 1);
  const span = Math.max(1, next - base);
  const current = xp - base;
  return {
    level,
    current,
    needed: next - base,
    pct: Math.min(100, Math.round((current / span) * 100)),
  };
}
