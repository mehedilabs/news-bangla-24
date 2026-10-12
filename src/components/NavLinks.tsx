import ActiveNavLink from "./ActiveNavLink";

interface Navs {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

const NavLinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navs: Navs[] = data.data;
  const filteredNavs = navs.filter((n) => n.scrapable);

  return (
    <nav className="mt-2 w-full max-w-full overflow-hidden border-y border-gray-100 bg-white sm:mt-5">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-4 overflow-x-auto px-3 py-2 whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5 sm:px-4 sm:py-2">
        <ActiveNavLink href="/">হোম</ActiveNavLink>

        {filteredNavs.map((n) => (
          <ActiveNavLink key={n.slug} href={`/category/${n.slug}`}>
            {n.title}
          </ActiveNavLink>
        ))}
      </div>
    </nav>
  );
};

export default NavLinks;
