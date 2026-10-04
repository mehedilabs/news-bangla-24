import Image from "next/image";

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

const NewsDetails = async ({ params }: { params: { newsId: string } }) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
  );

  const data = await res.json();
  const news = data.data;

  const publishedDate = news?.firstPublished
    ? new Date(news.firstPublished).toLocaleDateString("bn-BD", {
        dateStyle: "long",
      })
    : "";

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      {/* Title */}
      <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
        {news.title}
      </h1>

      {/* Description */}
      <div className="mt-8">
        {news.description?.blocks?.map(
          (block: DescriptionBlock, index: number) =>
            block.model.blocks?.map((paragraph, paragraphIndex) => (
              <p
                key={`${index}-${paragraphIndex}`}
                className="mb-5 text-xl font-medium leading-9 text-gray-800"
              >
                {paragraph.model.text}
              </p>
            )),
        )}
      </div>

      {/* Author, Date & Source */}
      <div className="mt-5 border-b border-gray-200 pb-4">
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
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

      {/* Main Image */}
      {news.imageUrl && (
        <div className="mt-8 overflow-hidden rounded-xl">
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
      <article className="mt-8">
        {news.body?.slice(1).map((item: NewsBodyItem, index: number) => {
          {
            /* Image */
          }
          if (item.type === "image" && item.url) {
            return (
              <figure key={index} className="my-8">
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
                  <figcaption className="mt-2 text-sm text-gray-500">
                    {item.caption}
                  </figcaption>
                )}

                {item.copyrightHolder && (
                  <p className="mt-1 text-xs text-gray-400">
                    © {item.copyrightHolder}
                  </p>
                )}
              </figure>
            );
          }

          {
            /* Subheading */
          }
          if (item.type === "subheading" && item.text) {
            return (
              <h2
                key={index}
                className="mt-10 mb-4 border-l-4 border-cyan-700 pl-4 text-2xl font-bold text-gray-900"
              >
                {item.text}
              </h2>
            );
          }

          {
            /* Text */
          }
          if (item.type === "text" && item.text) {
            return (
              <div key={index} className="mb-6 text-lg leading-9 text-gray-700">
                {item.text.split("\n").map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex} className="mb-4">
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
        <div className="mt-10 border-t border-gray-200 pt-6">
          <h3 className="mb-3 text-lg font-bold text-gray-900">বিষয়</h3>

          <div className="flex flex-wrap gap-2">
            {news.topics.map((topic: { id: string; name: string }) => (
              <span
                key={topic.id}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
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
