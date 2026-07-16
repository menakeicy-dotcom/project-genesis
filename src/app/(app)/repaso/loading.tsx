import { Skeleton } from "@/components/ui/skeleton";

/** Skeleton del repaso mientras se calcula la sesión del día. */
export default function RepasoLoading() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10" aria-busy>
      <div className="flex items-center gap-3">
        <Skeleton className="size-11 rounded-2xl" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-56" />
          <Skeleton className="h-4 w-72" />
        </div>
      </div>
      <Skeleton className="mt-8 h-80 w-full rounded-2xl" />
    </div>
  );
}
