import Image from "next/image";
import NavLinks from "./NavLinks";
import Marquee from "./Marquee";
import Userinfo from "./Userinfo";
import CurrentDate from "./CurrentDate";
import { Suspense } from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-2 sm:px-4">
        <div className="flex items-center justify-between gap-2 py-2 sm:relative sm:block sm:py-3">
          {/* Logo + Website Title */}
          <div className="flex min-w-0 items-center gap-1.5 sm:absolute sm:left-1/2 sm:top-4 sm:-translate-x-1/2 sm:gap-2">
            <Image
              className="h-8 w-8 shrink-0 object-contain sm:h-10 sm:w-10"
              height={50}
              width={50}
              src="/logo.webp"
              alt="News Bangla 24 logo"
              priority
            />

            <div className="min-w-0">
              <h1 className="whitespace-nowrap text-sm font-extrabold tracking-tight text-cyan-700 sm:text-xl md:text-2xl">
                News Bangla 24
              </h1>

              <p className="whitespace-nowrap text-[10px] text-gray-500 sm:text-sm">
                <CurrentDate />
              </p>
            </div>
          </div>

          {/* Profile / Authentication */}
          <div className="flex shrink-0 items-center sm:justify-end">
            <Suspense fallback={null}>
              <Userinfo />
            </Suspense>
          </div>
        </div>
      </div>

      <Suspense fallback={null}>
        <NavLinks />
      </Suspense>
      <Suspense fallback={null}>
        <Marquee />
      </Suspense>
    </header>
  );
};

export default Header;
