import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const section = data.data;
  const mainNews = section[0].articles;
  console.log(mainNews);
  return (
    <div>
      <Marquee />
      <div className="grid grid-cols-3 max-w-7xl mx-auto">
        {/* news section */}
        <div className="col-span-2">
          <MainNews news={mainNews} />
        </div>

        {/* most read section */}
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}
