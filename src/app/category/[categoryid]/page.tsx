import NewsCard from "@/components/NewsCard";
import { News } from "@/components/MainNews";
import { notFound } from "next/navigation";

const CategoryNews = async ({
  params,
}: {
  params: Promise<{ categoryid: string }>;
}) => {
  const { categoryid } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryid}`,
  );

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();
  const categoryNews: News[] = data.data;

  if (!Array.isArray(categoryNews) || categoryNews.length === 0) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-3 py-5 sm:px-4 sm:py-6 lg:py-8">
      {/* Category Title */}
      <div className="mb-5 flex min-w-0 items-center gap-3 sm:mb-6 lg:mb-8">
        <h1 className="shrink-0 text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl">
          {data.title}
        </h1>

        <div className="h-1 min-w-0 flex-1 bg-[#2FA5B4]" />
      </div>

      {/* News Cards */}
      <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </main>
  );
};

export default CategoryNews;
