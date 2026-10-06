import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        {/* Logo / Brand */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-700 text-2xl font-black text-white shadow-lg">
          B
        </div>

        {/* Loading Animation */}
        <div className="flex justify-center gap-2">
          <span className="h-3 w-3 animate-bounce rounded-full bg-red-700 [animation-delay:-0.3s]" />
          <span className="h-3 w-3 animate-bounce rounded-full bg-red-700 [animation-delay:-0.15s]" />
          <span className="h-3 w-3 animate-bounce rounded-full bg-red-700" />
        </div>

        {/* Text */}
        <h2 className="mt-6 text-xl font-bold text-gray-800">
          খবর লোড হচ্ছে...
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          সর্বশেষ সংবাদ প্রস্তুত করা হচ্ছে
        </p>

        {/* Bottom Line */}
        <div className="mx-auto mt-6 h-1 w-20 overflow-hidden rounded-full bg-red-100">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-red-700" />
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
