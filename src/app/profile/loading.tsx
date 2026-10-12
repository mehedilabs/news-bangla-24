const ProfileLoading = () => {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-3 py-8 sm:px-5 sm:py-10">
      <div className="my-2 w-full max-w-md rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:my-0 sm:p-6 md:p-8">
        {/* Profile Image Skeleton */}
        <div className="flex justify-center">
          <div className="h-16 w-16 animate-pulse rounded-full bg-gray-200 ring-4 ring-cyan-100 ring-offset-2 sm:h-28 sm:w-28" />
        </div>

        {/* Name & Email Skeleton */}
        <div className="mt-5 space-y-2">
          <div className="mx-auto h-6 w-36 animate-pulse rounded bg-gray-200 sm:h-7" />
          <div className="mx-auto h-4 w-48 max-w-full animate-pulse rounded bg-gray-100" />
        </div>

        {/* Account Information Skeleton */}
        <div className="mt-6 border-t border-gray-200 pt-5 sm:mt-8 sm:pt-6">
          <div className="mx-auto mb-4 h-5 w-32 animate-pulse rounded bg-gray-200" />

          <div className="space-y-4 rounded-xl bg-gray-50 p-3 sm:p-5">
            <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
          </div>
        </div>

        {/* Edit Button Skeleton */}
        <div className="mt-5 h-11 w-full animate-pulse rounded-lg bg-cyan-100 sm:mt-6" />
      </div>
    </main>
  );
};

export default ProfileLoading;
