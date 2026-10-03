import Image from "next/image";
import NavLinks from "./NavLinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header>
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
              <h1 className="text-xl md:text-2xl text-red-700 font-bold whitespace-nowrap">
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

            <button className="btn btn-sm bg-red-700 text-white hover:bg-red-800">
              সাইন আপ
            </button>
          </div>
        </div>
      </div>
      <NavLinks />
    </header>
  );
};

export default Header;
