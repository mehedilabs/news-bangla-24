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
    <div className="mt-2 w-full max-w-full overflow-hidden bg-slate-700 sm:mt-3">
      <div className="mx-auto flex w-full max-w-7xl items-stretch overflow-hidden">
        {/* Latest News Label */}
        <div className="z-10 flex shrink-0 items-center rounded-r-sm bg-red-800 px-2 py-0.5 text-xs font-bold text-white sm:px-5 sm:py-1 sm:text-base">
          সর্বশেষ
        </div>

        {/* Scrolling Headlines */}
        <div className="min-w-0 flex-1 overflow-hidden text-sm leading-5 text-white sm:text-base">
          <MarqueeText
            className="h-full py-0.5 sm:py-1"
            direction="right"
            duration={10}
          >
            {headlines.map((h) => (
              <span key={h.id} className="whitespace-nowrap">
                <Link
                  href={`/news/${h.id}`}
                  className="transition-colors hover:text-yellow-300"
                >
                  {h.title}
                </Link>

                <span className="mx-3 sm:mx-5">•</span>
              </span>
            ))}
          </MarqueeText>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
