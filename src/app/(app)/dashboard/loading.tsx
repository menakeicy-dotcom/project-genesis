import { Skeleton } from "@/components/ui/skeleton";

/** Skeleton del panel mientras se cargan los datos del usuario. */
export default function DashboardLoading() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10" aria-busy>
      <div className="flex items-end justify-between gap-4">
        <div className="space-y-2">
          <Skeleton className="h-7 w-52" />
          <Skeleton className="h-4 w-64" />
        </div>
        <Skeleton className="h-8 w-40" />
      </div>

      <Skeleton className="mt-6 h-24 w-full rounded-xl" />

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-20 rounded-xl" />
        ))}
      </div>

      <Skeleton className="mt-4 h-20 w-full rounded-xl" />

      <Skeleton className="mt-8 h-6 w-32" />
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Skeleton className="h-36 rounded-xl" />
        <Skeleton className="h-36 rounded-xl" />
      </div>
    </div>
  );
}
