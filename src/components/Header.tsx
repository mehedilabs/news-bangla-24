import Image from "next/image";
import NavLinks from "./NavLinks";
import Marquee from "./Marquee";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative flex items-center justify-between py-3">
          {/* Center Logo + Title */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            <Image
              className="w-10 h-10"
              height={50}
              width={50}
              src="/logo.webp"
              alt="Bangla News 24 logo"
            />

            <div>
              <h1 className="text-xl md:text-2xl text-cyan-700 font-bold whitespace-nowrap">
                Bangla News 24
              </h1>

              <p className="text-sm text-gray-500 whitespace-nowrap">{date}</p>
            </div>
          </div>

          {/* Auth Buttons */}

          <div className="ml-auto flex items-center gap-2">
            <button className="btn btn-sm border border-gray-300 bg-white text-gray-700 hover:bg-gray-200">
              সাইন ইন
            </button>

            <button className="btn btn-sm bg-cyan-700 text-white hover:bg-cyan-800">
              সাইন আপ
            </button>
          </div>
        </div>
      </div>
      <NavLinks />
      <Marquee />
    </header>
  );
};

export default Header;
