import Link from "next/link";
import { News } from "./MainNews";

const MarkRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");

  const data = await res.json();

  const news: News[] = data.data;

  return (
    <div className="grid gap-2 flex-1 shadow-sm bg-base-100 p-3 rounded-[10px]">
      <h2 className="mb-4 text-2xl font-bold text-gray-900">সর্বাধিক পঠিত</h2>

      <div>
        {news.map((n, index) => (
          <div key={n.id} className="flex gap-3 border-b border-gray-200 py-3">
            {/* Number */}
            <span className="text-xl font-bold text-cyan-700">
              {index + 1}.
            </span>

            {/* Title */}
            <Link
              href={`/news/${n.id}`}
              className="font-semibold leading-6 text-gray-800 transition-colors hover:text-red-700"
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
