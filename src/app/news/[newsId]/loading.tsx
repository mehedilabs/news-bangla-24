const NewsDetailsLoading = () => {
  return (
    <main className="mx-auto w-full max-w-4xl px-3 py-6 sm:px-4 sm:py-8 lg:py-10">
      {/* Title Skeleton */}
      <div className="space-y-3">
        <div className="h-7 w-full animate-pulse rounded bg-gray-200 sm:h-9" />
        <div className="h-7 w-5/6 animate-pulse rounded bg-gray-200 sm:h-9" />
        <div className="h-7 w-2/3 animate-pulse rounded bg-gray-200 sm:h-9" />
      </div>

      {/* Description Skeleton */}
      <div className="mt-6 space-y-3 sm:mt-8">
        <div className="h-4 w-full animate-pulse rounded bg-gray-100 sm:h-5" />
        <div className="h-4 w-full animate-pulse rounded bg-gray-100 sm:h-5" />
        <div className="h-4 w-11/12 animate-pulse rounded bg-gray-100 sm:h-5" />
        <div className="h-4 w-4/5 animate-pulse rounded bg-gray-100 sm:h-5" />
      </div>

      {/* Author, Date & Source Skeleton */}
      <div className="mt-5 flex flex-wrap gap-2 border-b border-gray-200 pb-4">
        <div className="h-3 w-20 animate-pulse rounded bg-gray-200 sm:h-4" />
        <div className="h-3 w-28 animate-pulse rounded bg-gray-200 sm:h-4" />
        <div className="h-3 w-16 animate-pulse rounded bg-gray-200 sm:h-4" />
      </div>

      {/* Main Image Skeleton */}
      <div className="mt-6 aspect-video w-full animate-pulse rounded-xl bg-gray-200 sm:mt-8" />

      {/* Article Body Skeleton */}
      <div className="mt-6 space-y-4 sm:mt-8">
        <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200 sm:h-6" />

        <div className="space-y-3">
          <div className="h-4 w-full animate-pulse rounded bg-gray-100 sm:h-5" />
          <div className="h-4 w-full animate-pulse rounded bg-gray-100 sm:h-5" />
          <div className="h-4 w-11/12 animate-pulse rounded bg-gray-100 sm:h-5" />
          <div className="h-4 w-4/5 animate-pulse rounded bg-gray-100 sm:h-5" />
        </div>

        <div className="aspect-video w-full animate-pulse rounded-xl bg-gray-200" />

        <div className="h-5 w-2/3 animate-pulse rounded bg-gray-200 sm:h-6" />

        <div className="space-y-3">
          <div className="h-4 w-full animate-pulse rounded bg-gray-100 sm:h-5" />
          <div className="h-4 w-11/12 animate-pulse rounded bg-gray-100 sm:h-5" />
          <div className="h-4 w-full animate-pulse rounded bg-gray-100 sm:h-5" />
          <div className="h-4 w-3/4 animate-pulse rounded bg-gray-100 sm:h-5" />
        </div>
      </div>

      {/* Topics Skeleton */}
      <div className="mt-8 border-t border-gray-200 pt-5 sm:mt-10 sm:pt-6">
        <div className="mb-3 h-5 w-16 animate-pulse rounded bg-gray-200" />

        <div className="flex flex-wrap gap-2">
          <div className="h-7 w-20 animate-pulse rounded-full bg-gray-200" />
          <div className="h-7 w-24 animate-pulse rounded-full bg-gray-200" />
          <div className="h-7 w-16 animate-pulse rounded-full bg-gray-200" />
        </div>
      </div>
    </main>
  );
};

export default NewsDetailsLoading;
