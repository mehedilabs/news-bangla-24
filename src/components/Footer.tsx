import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import FacebookComingSoon from "./FacebookComingSoon";

interface Category {
  slug: string;
  title: string;
  scrapable: boolean;
}

const Footer = async () => {
  let categories: Category[] = [];

  try {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories", {
      next: { revalidate: 3600 },
    });

    if (res.ok) {
      const data = await res.json();
      categories = (data.data as Category[]).filter(
        (category) => category.scrapable,
      );
    }
  } catch {
    categories = [];
  }

  const footerCategories = [
    { title: "সর্বশেষ", href: "/" },
    { title: "জাতীয়", href: "/" },
    { title: "আন্তর্জাতিক", href: "/" },
    { title: "খেলাধুলা", href: "/" },
    { title: "বিনোদন", href: "/" },
  ];

  const importantLinks = [
    { title: "হোম", href: "/" },
    { title: "আমাদের সম্পর্কে", href: "/about" },
    { title: "যোগাযোগ", href: "/contact" },
    { title: "গোপনীয়তা নীতি", href: "/privacy" },
    { title: "ব্যবহারের শর্তাবলি", href: "/terms" },
  ];

  const linkClass =
    "text-xs text-gray-400 transition-colors hover:text-cyan-400 sm:text-sm";

  return (
    <footer className="mt-10 bg-gray-950 text-gray-300 sm:mt-12">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-5 sm:py-7 lg:px-8 lg:py-10">
        <div className="grid grid-cols-2 gap-x-5 gap-y-6 sm:gap-x-8 sm:gap-y-7 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 min-w-0 lg:col-span-1">
            <Link href="/" className="inline-block">
              <h2 className="text-lg font-extrabold tracking-tight text-white sm:text-xl lg:text-2xl">
                Bangla <span className="text-cyan-500">News 24</span>
              </h2>
            </Link>

            <p className="mt-2 max-w-sm text-xs leading-5 text-gray-400 sm:mt-3 sm:text-sm sm:leading-6">
              দেশের ও বিশ্বের সর্বশেষ সংবাদ, গুরুত্বপূর্ণ খবর এবং নির্ভরযোগ্য
              তথ্য জানতে থাকুন Bangla News 24-এর সঙ্গে।
            </p>

            <div className="mt-3 flex items-center gap-2.5 sm:mt-4 sm:gap-3">
              <FacebookComingSoon />

              <a
                href="https://github.com/mehedilabs/news-bangla-24"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition-colors hover:border-cyan-500 hover:bg-cyan-600 hover:text-white sm:h-9 sm:w-9"
              >
                <FaGithub size={15} />
              </a>

              <a
                href="https://www.linkedin.com/in/mehedilabs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition-colors hover:border-cyan-500 hover:bg-cyan-600 hover:text-white sm:h-9 sm:w-9"
              >
                <FaLinkedinIn size={15} />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className="hidden min-w-0 sm:block">
            <h3 className="text-sm font-bold text-white sm:text-base">বিভাগ</h3>

            <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-2 sm:mt-4 sm:gap-x-4 sm:gap-y-3 lg:flex-col lg:items-start lg:gap-3">
              {footerCategories.map((category) => (
                <li key={category.title} className="min-w-0">
                  <Link href={category.href} className={linkClass}>
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div className="hidden min-w-0 sm:block">
            <h3 className="text-sm font-bold text-white sm:text-base">
              গুরুত্বপূর্ণ
            </h3>

            <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-2 sm:mt-4 sm:gap-x-4 sm:gap-y-3 lg:flex-col lg:items-start lg:gap-3">
              {importantLinks.map((link) => (
                <li key={link.href} className="min-w-0">
                  <Link href={link.href} className={linkClass}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest News */}
          <div className="col-span-2 min-w-0 lg:col-span-1">
            <h3 className="text-sm font-bold text-white sm:text-base">
              সর্বশেষ খবর
            </h3>

            <p className="mt-2 max-w-sm text-xs leading-5 text-gray-400 sm:mt-3 sm:text-sm sm:leading-6">
              গুরুত্বপূর্ণ খবর ও আপডেট পেতে আমাদের সঙ্গে যুক্ত থাকুন।
            </p>

            <Link
              href="/"
              className="mt-3 inline-flex min-h-8 items-center justify-center rounded-md bg-cyan-700 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-cyan-800 sm:mt-4 sm:min-h-9 sm:px-4 sm:text-sm"
            >
              হোম পেজে যান →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-1.5 px-4 py-3 text-center text-[10px] leading-4 text-gray-500 sm:flex-row sm:justify-between sm:gap-4 sm:px-5 sm:py-4 sm:text-xs lg:px-8">
          <p>© 2026 Bangla News 24. সর্বস্বত্ব সংরক্ষিত।</p>
          <p>সর্বশেষ খবর, সবার আগে</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
