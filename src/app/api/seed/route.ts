import { NextResponse } from "next/server";

import { db } from "@/server/db";
import { seedIfEmpty } from "@/server/seed";

/**
 * Siembra el contenido de demostración. Protegida por SEED_SECRET y segura de
 * reejecutar (solo siembra si el catálogo está vacío).
 *
 * Uso:  GET /api/seed?key=TU_SEED_SECRET
 */
export async function GET(request: Request) {
  const secret = process.env.SEED_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "SEED_SECRET no está configurado." },
      { status: 500 },
    );
  }

  const key = new URL(request.url).searchParams.get("key");
  if (key !== secret) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }

  const result = await seedIfEmpty(db);
  return NextResponse.json(
    result.seeded
      ? { ok: true, message: "Contenido de demostración cargado.", ...result }
      : { ok: true, message: "Ya había contenido; no se hizo nada." },
  );
}
