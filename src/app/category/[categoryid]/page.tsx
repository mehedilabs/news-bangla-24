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

  const data = await res.json();
  const categoryNews: News[] = data.data;
  if (!categoryNews) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Category Title */}
      <div className="mb-8 flex items-center gap-3">
        <h1 className="text-3xl font-bold text-gray-900">{data.title}</h1>

        <div className="h-1 flex-1 bg-[#2FA5B4]"></div>
      </div>

      {/* News Cards */}
      <div className="grid grid-cols-3 gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
