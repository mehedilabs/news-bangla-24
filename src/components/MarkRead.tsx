import Link from "next/link";
import { News } from "./MainNews";
const toBanglaNumber = (num: number) => num.toLocaleString("bn-BD");

const MarkRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");

  const data = await res.json();

  const news: News[] = data.data;

  return (
    <div className="grid min-w-0 flex-1 gap-2 rounded-[10px] bg-base-100 p-2.5 shadow-sm sm:p-3">
      <h2 className="mb-1 text-base font-bold text-gray-900 sm:mb-4 sm:text-xl md:text-2xl">
        সর্বাধিক পঠিত
      </h2>

      <div className="min-w-0">
        {news.map((n, index) => (
          <div
            key={n.id}
            className="flex min-w-0 gap-2 border-b border-gray-200 py-2.5 sm:gap-3 sm:py-3"
          >
            {/* Number */}
            <span className="shrink-0 text-[10px] font-bold text-cyan-700 sm:text-sm md:text-base">
              {toBanglaNumber(index + 1)}.
            </span>

            {/* Title */}
            <Link
              href={`/news/${n.id}`}
              className="min-w-0 break-words text-xs font-semibold leading-5 text-gray-800 transition-colors hover:text-red-700 sm:text-base sm:leading-7"
            >
              {n.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarkRead;
