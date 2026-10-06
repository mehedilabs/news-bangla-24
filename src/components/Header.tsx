import Image from "next/image";
import NavLinks from "./NavLinks";
import Marquee from "./Marquee";
import Userinfo from "./Userinfo";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative flex items-center justify-between py-3">
          {/* Profile / Auth */}
          <Userinfo />

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
                News Bangla 24
              </h1>

              <p className="text-sm text-gray-500 whitespace-nowrap">{date}</p>
            </div>
          </div>
        </div>
      </div>

      <NavLinks />
      <Marquee />
    </header>
  );
};

export default Header;
