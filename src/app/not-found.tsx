import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-2xl text-center">
        {/* 404 */}
        <div className="relative">
          <h1 className="text-[140px] font-black leading-none tracking-tight text-red-100 sm:text-[180px]">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl font-black text-red-700 sm:text-7xl">
              404
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="mt-2">
          <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-red-700" />

          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            খুঁজে পাওয়া যায়নি
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
            দুঃখিত! আপনি যে সংবাদটি বা পেজটি খুঁজছেন সেটি হয়তো সরিয়ে দেওয়া হয়েছে
            অথবা এই ঠিকানায় আর পাওয়া যাচ্ছে না।
          </p>

          {/* Button */}
          <Link
            href="/"
            className="btn mt-7 border-0 bg-red-700 px-7 text-white hover:bg-red-800"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>

        {/* News style footer text */}
        <p className="mt-10 text-xs font-medium uppercase tracking-widest text-gray-400">
          News Bangla 24 • সর্বশেষ খবর, সবার আগে
        </p>
      </div>
    </div>
  );
};

export default NotFound;
