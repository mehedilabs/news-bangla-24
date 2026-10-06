import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-950 text-gray-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-black text-white">
                Bangla <span className="text-cyan-700">News 24</span>
              </h2>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              দেশের ও বিশ্বের সর্বশেষ সংবাদ, গুরুত্বপূর্ণ খবর এবং নির্ভরযোগ্য
              তথ্য জানতে থাকুন Bangla News 24-এর সঙ্গে।
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 transition hover:border-cyan-700 hover:bg-cyan-700 hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 transition hover:border-cyan-700 hover:bg-cyan-700 hover:text-white"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 transition hover:border-cyan-700 hover:bg-cyan-700 hover:text-white"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-base font-bold text-white">বিভাগ</h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/" className="transition hover:text-cyan-700">
                  সর্বশেষ
                </Link>
              </li>
              <li>
                <Link href="/" className="transition hover:text-cyan-700">
                  জাতীয়
                </Link>
              </li>
              <li>
                <Link href="/" className="transition hover:text-cyan-700">
                  আন্তর্জাতিক
                </Link>
              </li>
              <li>
                <Link href="/" className="transition hover:text-cyan-700">
                  খেলাধুলা
                </Link>
              </li>
              <li>
                <Link href="/" className="transition hover:text-cyan-700">
                  বিনোদন
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-base font-bold text-white">গুরুত্বপূর্ণ</h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/" className="transition hover:text-cyan-700">
                  হোম
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-cyan-700">
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-cyan-700"
                >
                  যোগাযোগ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="transition hover:text-cyan-700"
                >
                  গোপনীয়তা নীতি
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition hover:text-cyan-700">
                  ব্যবহারের শর্তাবলি
                </Link>
              </li>
            </ul>
          </div>

          {/* Latest News */}
          <div>
            <h3 className="text-base font-bold text-white">সর্বশেষ খবর</h3>

            <p className="mt-5 text-sm leading-6 text-gray-400">
              গুরুত্বপূর্ণ খবর ও আপডেট পেতে আমাদের সঙ্গে যুক্ত থাকুন।
            </p>

            <Link
              href="/"
              className="btn mt-5 border-0 bg-cyan-700 px-6 text-white hover:bg-cyan-800"
            >
              হোম পেজে যান →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center text-xs text-gray-500 sm:flex-row lg:px-8">
          <p>
            © {new Date().getFullYear()} Bangla News 24. সর্বস্বত্ব সংরক্ষিত।
          </p>

          <p>সর্বশেষ খবর, সবার আগে</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
