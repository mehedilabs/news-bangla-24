import Image from "next/image";
import Link from "next/link";
import { News } from "./MainNews";

const NewsCard = ({ news }: { news: News }) => {
  return (
    <Link href={`/news/${news.id}`} className="block min-w-0">
      <article className="group h-full min-w-0 overflow-hidden rounded-lg border border-gray-100 bg-base-100 shadow-sm transition-all duration-200 hover:border-cyan-300 hover:shadow-md sm:rounded-xl">
        {/* News Image */}
        <div className="relative h-36 overflow-hidden sm:h-44 md:h-48">
          <Image
            src={news.imageUrl}
            alt={news.imageAlt || news.title}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* News Content */}
        <div className="p-2.5 sm:p-3 md:p-4">
          <p className="mb-1 text-[10px] font-semibold text-cyan-700 sm:text-xs">
            {news.category}
          </p>

          <h3 className="line-clamp-3 break-words text-xs font-bold leading-5 text-gray-900 transition-colors group-hover:text-red-700 sm:text-base sm:leading-6">
            {news.title}
          </h3>

          <p className="mt-1.5 line-clamp-2 text-[11px] leading-[1.15rem] text-gray-600 sm:mt-2 sm:text-sm sm:leading-5">
            {news.description}
          </p>

          <p className="mt-2 text-[10px] text-gray-500 sm:mt-3 sm:text-xs">
            {new Date(news.firstPublished).toLocaleDateString("bn-BD")}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;
