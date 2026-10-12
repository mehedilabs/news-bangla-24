const CategoryLoading = () => {
  return (
    <main className="mx-auto w-full max-w-7xl px-3 py-5 sm:px-4 sm:py-6 lg:py-8">
      {/* Category Title Skeleton */}
      <div className="mb-5 flex items-center gap-3 sm:mb-6 lg:mb-8">
        <div className="h-7 w-28 animate-pulse rounded bg-gray-200 sm:h-8 sm:w-36 lg:h-9 lg:w-44" />

        <div className="h-1 flex-1 animate-pulse rounded bg-gray-200" />
      </div>

      {/* News Cards Skeleton */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="min-w-0 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
          >
            {/* Image Skeleton */}
            <div className="aspect-video w-full animate-pulse bg-gray-200" />

            {/* Content Skeleton */}
            <div className="space-y-3 p-3 sm:p-4">
              <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />

              <div className="space-y-2">
                <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200" />
              </div>

              <div className="space-y-2 pt-1">
                <div className="h-3 w-full animate-pulse rounded bg-gray-100" />
                <div className="h-3 w-4/5 animate-pulse rounded bg-gray-100" />
              </div>

              <div className="h-3 w-24 animate-pulse rounded bg-gray-100" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CategoryLoading;
