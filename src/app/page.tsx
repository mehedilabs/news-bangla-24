import MainNews, { News } from "@/components/MainNews";
import MarkRead from "@/components/MarkRead";
import Marquee from "@/components/Marquee";
import NewsCard from "@/components/NewsCard";

interface NewsSection {
  title: string;
  curationId: string;
  curationType: string;
  link: string | null;
  count: number;
  articles: News[];
}

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const section = data.data;
  const mainNews = section[0].articles;

  const otherSections: NewsSection[] = section.slice(1);

  return (
    <div className="mx-auto mt-3 w-full max-w-7xl min-w-0 px-3 sm:mt-5 sm:px-4">
      <div className="grid min-w-0 grid-cols-1 gap-5 md:grid-cols-3 md:gap-5">
        {/* News Section */}
        <div className="min-w-0 md:col-span-2">
          <MainNews news={mainNews} />

          {otherSections
            .filter(
              (os) =>
                os.title !== "সামাজিক মাধ্যমে বিবিসি বাংলা" &&
                os.title !== "বিবিসি বাংলা এখন হোয়াটসঅ্যাপে!" &&
                os.title !== "বিবিসি বাংলা এখন ইন্সটাগ্রামে!",
            )
            .map((os) => (
              <section key={os.curationId} className="mt-6 min-w-0 sm:mt-10">
                {/* Section Title */}
                <div className="mb-3 flex min-w-0 items-center gap-2 sm:mb-5 sm:gap-3">
                  <h2 className="shrink-0 text-base font-bold text-gray-900 sm:text-xl md:text-2xl">
                    {os.title}
                  </h2>

                  <div className="h-1 min-w-0 flex-1 bg-[#2FA5B4]"></div>
                </div>

                {/* News Cards */}
                <div className="grid min-w-0 grid-cols-1 gap-3 sm:gap-5 md:grid-cols-3">
                  {os.articles.map((article) => (
                    <NewsCard key={article.id} news={article} />
                  ))}
                </div>
              </section>
            ))}
        </div>

        {/* Most Read Section */}
        <div className="min-w-0 md:col-span-1">
          <MarkRead />
        </div>
      </div>
    </div>
  );
}
