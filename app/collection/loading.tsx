import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center">
          <Skeleton className="mx-auto h-12 w-[300px]" />
          <Skeleton className="mx-auto h-6 w-[700px]" />
        </div>

        {/* Featured Carousel Skeleton */}
        <div className="space-y-8">
          <Skeleton className="h-8 w-[200px]" />
          <Skeleton className="h-[60vh] w-full rounded-xl" />
        </div>

        {/* Photo Gallery Skeleton */}
        <div className="space-y-8">
          <Skeleton className="h-8 w-[200px]" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="aspect-square rounded-lg" />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
