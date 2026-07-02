import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getCategoryBySlug } from "@/modules/catalog/services";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = await getCategoryBySlug(categorySlug);
  return { title: category?.name ?? "Categoría" };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;
  const category = await getCategoryBySlug(categorySlug);
  if (!category) notFound();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <Link
        href="/explore"
        className="text-muted-foreground text-sm hover:underline"
      >
        ← Explorar
      </Link>

      <div className="mt-4 flex items-center gap-3">
        <span className="text-4xl">{category.icon}</span>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{category.name}</h1>
          <p className="text-muted-foreground">{category.description}</p>
        </div>
      </div>

      {category.trees.length === 0 ? (
        <p className="text-muted-foreground mt-10">
          Aún no hay árboles en esta categoría. ¡Muy pronto!
        </p>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {category.trees.map((tree) => (
            <Link key={tree.id} href={`/trees/${tree.slug}`} className="block">
              <Card className="hover:border-primary h-full transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{tree.title}</CardTitle>
                    <Badge variant="outline">{tree.difficulty}</Badge>
                  </div>
                  <CardDescription>{tree.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  {tree._count.skills} habilidades
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
