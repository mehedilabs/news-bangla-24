"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FiAlertTriangle, FiRefreshCw, FiHome } from "react-icons/fi";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  useEffect(() => {
    console.error("News Bangla 24 rendering error:", error);
  }, [error]);

  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-lg sm:p-10">
        {/* Error Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-600">
          <FiAlertTriangle size={38} />
        </div>

        {/* Error Message */}
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-red-600">
          Something Went Wrong
        </p>

        <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
          দুঃখিত! একটি সমস্যা হয়েছে
        </h1>

        <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-gray-500 sm:text-base">
          পেজটি লোড করতে গিয়ে একটি সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।
          সমস্যা চলতে থাকলে পরে আবার আসুন।
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2"
          >
            <FiRefreshCw size={17} />
            আবার চেষ্টা করুন
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
          >
            <FiHome size={17} />
            হোম পেজ
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-8 border-t border-gray-100 pt-5">
          <p className="text-xs text-gray-400">
            News Bangla 24 · আমরা আপনার অভিজ্ঞতাকে গুরুত্ব দিই
          </p>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
