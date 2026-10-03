import MainNews, { News } from "@/components/MainNews";
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
    <div>
      <div className="grid grid-cols-3 max-w-7xl mx-auto mt-5">
        {/* news section */}
        <div className="col-span-2">
          <MainNews news={mainNews} />
          {otherSections
            .filter(
              (os) =>
                os.title !== "সামাজিক মাধ্যমে বিবিসি বাংলা" &&
                os.title !== "বিবিসি বাংলা এখন হোয়াটসঅ্যাপে!" &&
                os.title !== "বিবিসি বাংলা এখন ইন্সটাগ্রামে!",
            )
            .map((os) => (
              <section key={os.curationId} className="mt-10">
                {/* Section Title */}
                <div className="mb-5 flex items-center gap-3">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {os.title}
                  </h2>

                  <div className="h-1 flex-1 bg-[#2FA5B4]"></div>
                </div>

                <div className="grid grid-cols-3 gap-5">
                  {os.articles.map((article) => (
                    <NewsCard key={article.id} news={article} />
                  ))}
                </div>
              </section>
            ))}
        </div>

        {/* most read section */}
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}
