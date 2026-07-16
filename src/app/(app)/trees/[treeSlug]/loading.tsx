import { Skeleton } from "@/components/ui/skeleton";

/** Skeleton del árbol de una disciplina mientras se calculan las hebras. */
export default function TreeLoading() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10" aria-busy>
      <Skeleton className="h-4 w-40" />
      <Skeleton className="mt-4 h-8 w-72" />
      <Skeleton className="mt-2 h-4 w-full max-w-xl" />
      <div className="mt-3 flex gap-2">
        <Skeleton className="h-6 w-28" />
        <Skeleton className="h-6 w-24" />
      </div>

      <Skeleton className="mt-8 h-64 w-full rounded-2xl" />

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-20 rounded-xl" />
        ))}
      </div>
    </div>
  );
}
