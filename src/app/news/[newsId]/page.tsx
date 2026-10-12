import Image from "next/image";
import { notFound } from "next/navigation";

interface DescriptionBlock {
  type: string;
  model: {
    blocks: {
      type: string;
      model: {
        text: string;
      };
    }[];
  };
}

interface NewsBodyItem {
  type: "image" | "text" | "subheading";
  text?: string;
  url?: string;
  width?: number;
  height?: number;
  caption?: string;
  altText?: string;
  copyrightHolder?: string;
}

const NewsDetails = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
  );

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();
  const news = data.data;

  if (!news) {
    notFound();
  }

  const publishedDate = news.firstPublished
    ? new Date(news.firstPublished).toLocaleDateString("bn-BD", {
        dateStyle: "long",
      })
    : "";

  return (
    <main className="mx-auto w-full max-w-4xl px-3 py-6 sm:px-4 sm:py-8 lg:py-10">
      {/* Title */}
      <h1 className="break-words text-2xl font-bold leading-snug text-gray-900 sm:text-3xl sm:leading-tight md:text-5xl">
        {news.title}
      </h1>

      {/* Description */}
      <div className="mt-5 sm:mt-7 lg:mt-8">
        {news.description?.blocks?.map(
          (block: DescriptionBlock, index: number) =>
            block.model.blocks?.map((paragraph, paragraphIndex) => (
              <p
                key={`${index}-${paragraphIndex}`}
                className="mb-4 text-base font-medium leading-7 text-gray-800 sm:mb-5 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9"
              >
                {paragraph.model.text}
              </p>
            )),
        )}
      </div>

      {/* Author, Date & Source */}
      <div className="mt-4 border-b border-gray-200 pb-4 sm:mt-5">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs leading-5 text-gray-500 sm:text-sm">
          {news.byline?.[0]?.name && <span>{news.byline[0].name}</span>}

          {publishedDate && (
            <>
              {news.byline?.[0]?.name && <span>•</span>}
              <span>{publishedDate}</span>
            </>
          )}

          {news.source && (
            <>
              <span>•</span>
              <span>{news.source}</span>
            </>
          )}
        </div>
      </div>

      {/* Main Image — image handling will be reviewed at the end */}
      {news.imageUrl && (
        <div className="mt-6 overflow-hidden rounded-xl sm:mt-8">
          <Image
            src={news.imageUrl}
            alt={news.title}
            width={1200}
            height={700}
            className="h-auto w-full object-cover"
          />
        </div>
      )}

      {/* Full Article */}
      <article className="mt-6 min-w-0 sm:mt-8">
        {news.body?.slice(1).map((item: NewsBodyItem, index: number) => {
          if (item.type === "image" && item.url) {
            return (
              <figure key={index} className="my-6 sm:my-8">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={item.url}
                    alt={item.altText || item.caption || news.title}
                    width={item.width || 1200}
                    height={item.height || 700}
                    className="h-auto w-full object-cover"
                  />
                </div>

                {item.caption && (
                  <figcaption className="mt-2 break-words text-xs leading-5 text-gray-500 sm:text-sm">
                    {item.caption}
                  </figcaption>
                )}

                {item.copyrightHolder && (
                  <p className="mt-1 break-words text-xs text-gray-400">
                    © {item.copyrightHolder}
                  </p>
                )}
              </figure>
            );
          }

          if (item.type === "subheading" && item.text) {
            return (
              <h2
                key={index}
                className="mt-8 mb-3 border-l-4 border-cyan-700 pl-3 text-xl font-bold leading-snug text-gray-900 sm:mt-10 sm:mb-4 sm:pl-4 sm:text-2xl"
              >
                {item.text}
              </h2>
            );
          }

          if (item.type === "text" && item.text) {
            return (
              <div
                key={index}
                className="mb-5 break-words text-base leading-8 text-gray-700 sm:mb-6 sm:text-lg sm:leading-9"
              >
                {item.text.split("\n").map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex} className="mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            );
          }

          return null;
        })}
      </article>

      {/* Topics */}
      {news.topics?.length > 0 && (
        <div className="mt-8 border-t border-gray-200 pt-5 sm:mt-10 sm:pt-6">
          <h3 className="mb-3 text-base font-bold text-gray-900 sm:text-lg">
            বিষয়
          </h3>

          <div className="flex flex-wrap gap-2">
            {news.topics.map((topic: { id: string; name: string }) => (
              <span
                key={topic.id}
                className="max-w-full break-words rounded-full bg-gray-100 px-3 py-1 text-xs leading-5 text-gray-700 sm:text-sm"
              >
                {topic.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default NewsDetails;
