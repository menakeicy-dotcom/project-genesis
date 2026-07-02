import type { Metadata } from "next";
import Link from "next/link";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getCategories } from "@/modules/catalog/services";

export const metadata: Metadata = { title: "Explorar" };

export default async function ExplorePage() {
  const categories = await getCategories();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold tracking-tight">Explora categorías</h1>
      <p className="text-muted-foreground mt-1">
        Elige un área y empieza a hacer crecer una nueva rama.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <Link key={cat.id} href={`/explore/${cat.slug}`} className="block">
            <Card className="hover:border-primary h-full transition-colors">
              <CardHeader>
                <div className="mb-2 text-3xl">{cat.icon}</div>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{cat.name}</CardTitle>
                  <Badge variant="neutral">{cat._count.trees} árboles</Badge>
                </div>
                <CardDescription>{cat.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
