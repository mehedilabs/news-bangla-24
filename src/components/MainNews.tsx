import Image from "next/image";

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

  // const otherNews = news.slice(1);
  // console.log(otherNews);

  return (
    <div className="flex gap-5">
      <div className="card bg-base-100 flex-1 shadow-sm">
        <figure className="relative overflow-hidden">
          <Image
            height={600}
            width={600}
            src={firstNews.imageUrl}
            alt={firstNews.imageAlt || firstNews.title}
            className="w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </figure>

        <div className="card-body">
          <span className="text-sm font-semibold text-cyan-700">
            {firstNews.category}
          </span>

          <h2 className="card-title hover:text-red-700 transition-colors">
            {firstNews.title}
          </h2>

          <p className="line-clamp-3 text-gray-600">{firstNews.description}</p>

          <div className="mt-2 flex items-center justify-between">
            <span className="text-sm text-gray-500">
              {new Date(firstNews.firstPublished).toLocaleDateString("bn-BD")}
            </span>

            <a
              href={""}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-red-700 hover:text-red-900"
            >
              বিস্তারিত →
            </a>
          </div>
        </div>
      </div>
      <div className="grid gap-2 flex-1 shadow-sm bg-base-100 p-3 rounded-[10px]">
        {otherNews.slice(0, 4).map((on) => (
          <div
            key={on.id}
            className="group border-b border-gray-200 py-4 first:pt-0 last:border-b-0"
          >
            <p className="mb-1 text-sm font-semibold text-cyan-700">
              {on.category}
            </p>

            <h3 className="font-semibold leading-6 text-gray-800 transition-colors group-hover:text-red-700">
              {on.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
