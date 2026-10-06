import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Headlines {
  id: string;
  title: string;
}

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const headlines: Headlines[] = data.data;

  return (
    <div className="mt-3 bg-slate-700 text-white">
      <div className="mx-auto flex max-w-7xl">
        <div className="rounded-l-sm bg-red-800 px-5 py-1 font-bold">
          সর্বশেষ
        </div>

        <MarqueeText className="py-1" direction="right" duration={10}>
          {headlines.map((h) => (
            <span key={h.id}>
              <Link
                href={`/news/${h.id}`}
                className="transition-colors hover:text-yellow-300"
              >
                {h.title}
              </Link>

              <span className="mx-5">•</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
