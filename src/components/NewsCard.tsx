import Image from "next/image";
import { News } from "./MainNews";
import Link from "next/link";

const NewsCard = ({ news }: { news: News }) => {
  return (
    <Link href={`/news/${news.id}`}>
      <article className="group overflow-hidden rounded-xl bg-base-100 shadow-sm transition-shadow border border-transparent hover:border-cyan-300 hover:shadow-md">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={news.imageUrl}
            alt={news.imageAlt || news.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-sm font-semibold text-cyan-700">{news.category}</p>

          <h3 className="text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-red-700">
            {news.title}
          </h3>

          <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
            {news.description}
          </p>

          <p className="mt-3 text-sm text-gray-500">
            {new Date(news.firstPublished).toLocaleDateString("bn-BD")}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;
