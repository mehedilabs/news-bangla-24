import Image from "next/image";
import Link from "next/link";

export interface News {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}

const MainNews = ({ news }: { news: News[] }) => {
  const [firstNews, ...otherNews] = news;

  if (!firstNews) return null;

  return (
    <div className="flex min-w-0 flex-col gap-3 md:flex-row md:gap-5">
      {/* Featured News */}
      <div className="card min-w-0 flex-1 overflow-hidden rounded-lg border border-gray-100 bg-base-100 shadow-sm">
        <figure className="relative overflow-hidden">
          <Image
            height={600}
            width={600}
            src={firstNews.imageUrl}
            alt={firstNews.imageAlt || firstNews.title}
            sizes="(max-width: 767px) 100vw, 50vw"
            className="h-auto max-h-48 w-full object-cover transition-transform duration-300 hover:scale-105 sm:max-h-64 md:max-h-none"
          />
        </figure>

        <div className="card-body gap-1.5 p-2.5 sm:gap-2 sm:p-4">
          <span className="text-[10px] font-semibold text-cyan-700 sm:text-xs">
            {firstNews.category}
          </span>

          <Link
            href={`/news/${firstNews.id}`}
            className="text-sm font-bold leading-5 text-gray-900 transition-colors hover:text-red-700 sm:text-lg sm:leading-7"
          >
            {firstNews.title}
          </Link>

          <p className="line-clamp-3 text-xs leading-5 text-gray-600 sm:text-sm sm:leading-6">
            {firstNews.description}
          </p>

          <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
            <span className="text-[10px] text-gray-500 sm:text-xs">
              {new Date(firstNews.firstPublished).toLocaleDateString("bn-BD")}
            </span>

            <Link
              href={`/news/${firstNews.id}`}
              className="shrink-0 text-xs font-semibold text-red-700 transition-colors hover:text-red-900 sm:text-sm"
            >
              বিস্তারিত →
            </Link>
          </div>
        </div>
      </div>

      {/* Other Top News */}
      <div className="grid min-w-0 flex-1 grid-cols-1 content-start rounded-lg border border-gray-100 bg-base-100 px-2.5 shadow-sm sm:px-4 md:grid-rows-4 md:gap-0 md:py-1">
        <h2 className="mb-1 border-b border-gray-200 py-2 text-xs font-bold text-gray-900 sm:text-base md:hidden">
          আরও গুরুত্বপূর্ণ খবর
        </h2>

        {otherNews.slice(0, 4).map((on) => (
          <div
            key={on.id}
            className="group flex min-w-0 flex-col justify-center border-b border-gray-100 py-2.5 last:border-b-0 sm:py-3 md:py-2"
          >
            <p className="mb-0.5 text-[10px] font-semibold text-cyan-700 sm:text-xs md:text-sm">
              {on.category}
            </p>

            <Link
              href={`/news/${on.id}`}
              className="block break-words text-xs font-semibold leading-5 text-gray-800 transition-colors group-hover:text-red-700 sm:text-sm sm:leading-6 md:text-base md:leading-7"
            >
              {on.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
