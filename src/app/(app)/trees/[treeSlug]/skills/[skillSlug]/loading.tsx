import { Skeleton } from "@/components/ui/skeleton";

/** Skeleton de la página de habilidad mientras carga la lección. */
export default function SkillLoading() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10" aria-busy>
      <Skeleton className="h-4 w-36" />
      <Skeleton className="mt-4 h-4 w-40" />
      <Skeleton className="mt-2 h-8 w-64" />
      <div className="mt-3 flex flex-wrap gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-6 w-24" />
        ))}
      </div>
      <Skeleton className="mt-5 h-4 w-full" />
      <Skeleton className="mt-2 h-4 w-3/4" />
      <Skeleton className="mt-6 h-[22rem] w-full rounded-2xl" />
    </div>
  );
}
