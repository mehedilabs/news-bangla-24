"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";

const Userinfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const pathname = usePathname();
  const isProfilePage = pathname === "/profile";
  const [menuOpen, setMenuOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const fullName = user?.name?.trim() || "ব্যবহারকারী";
  const firstName = fullName.split(/\s+/)[0];
  const firstLetter =
    fullName.charAt(0).toUpperCase() ||
    user?.email?.trim().charAt(0).toUpperCase() ||
    "U";

  const HandleSignout = async () => {
    try {
      const { error } = await authClient.signOut();

      if (error) {
        toast.error("সাইন আউট করা যায়নি। আবার চেষ্টা করুন");
        return;
      }

      toast.success("সফলভাবে সাইন আউট হয়েছে");
      setMenuOpen(false);
    } catch {
      toast.error("সাইন আউট করা যায়নি। আবার চেষ্টা করুন");
    }
  };

  return (
    <div className="relative flex shrink-0 items-center justify-end">
      {user ? (
        <>
          {/* Profile Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label="Toggle profile menu"
            className="flex max-w-[125px] items-center gap-1.5 rounded-full border border-gray-200 bg-white p-1 pr-1.5 shadow-sm transition-colors hover:border-cyan-300 min-[375px]:max-w-[145px] sm:max-w-[220px] sm:gap-2.5 sm:pr-3"
          >
            {/* Avatar */}
            <span className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-cyan-50 text-xs font-bold text-cyan-800 ring-2 ring-cyan-100 ring-offset-1 sm:h-9 sm:w-9 sm:text-sm">
              {user.image && !imageError ? (
                <Image
                  src={user.image}
                  alt={fullName}
                  width={36}
                  height={36}
                  unoptimized
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                firstLetter
              )}
            </span>

            {/* First Name Only */}
            <span className="max-w-[65px] truncate text-xs font-semibold text-gray-800 min-[375px]:max-w-[85px] sm:max-w-[125px] sm:text-sm">
              {firstName}
            </span>

            <svg
              className={`h-3.5 w-3.5 shrink-0 text-gray-500 transition-transform duration-200 ${
                menuOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 7.22a.75.75 0 0 1 1.06 0L10 10.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 8.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {/* Click Outside to Close */}
          {menuOpen && (
            <button
              type="button"
              aria-label="Close profile menu"
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[60] cursor-default"
            />
          )}

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute right-0 top-full z-[70] mt-1.5 w-36 overflow-hidden rounded-lg border border-gray-200 bg-white p-1.5 shadow-lg sm:mt-2 sm:w-48 sm:rounded-xl sm:p-2">
              {/* First Name */}
              <div className="border-b border-gray-100 px-2.5 py-2 sm:px-3 sm:py-2.5">
                <p className="truncate text-sm font-semibold text-gray-900">
                  {firstName}
                </p>
              </div>

              {/* Profile / Home Link */}
              <Link
                href={isProfilePage ? "/" : "/profile"}
                onClick={() => setMenuOpen(false)}
                className="mt-1 flex min-h-10 items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-cyan-50 hover:text-cyan-800"
              >
                <svg
                  className="h-4 w-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  {isProfilePage ? (
                    <>
                      <path d="m3 10 9-7 9 7" />
                      <path d="M5 9v11h14V9" />
                      <path d="M9 20v-6h6v6" />
                    </>
                  ) : (
                    <>
                      <circle cx="12" cy="8" r="4" />
                      <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
                    </>
                  )}
                </svg>

                {isProfilePage ? "হোম" : "প্রোফাইল"}
              </Link>

              {/* Sign Out */}
              <button
                type="button"
                onClick={HandleSignout}
                className="flex min-h-10 w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
              >
                <svg
                  className="h-4 w-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="M10 17l5-5-5-5" />
                  <path d="M15 12H3" />
                  <path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6" />
                </svg>
                সাইন আউট
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center gap-1.5 sm:ml-auto sm:gap-2">
          <Link
            href="/signin"
            className="btn btn-xs min-h-8 border border-gray-300 bg-white px-1.5 text-xs text-gray-700 hover:bg-gray-200 min-[375px]:px-2 sm:btn-sm sm:px-3"
          >
            সাইন ইন
          </Link>

          <Link
            href="/signup"
            className="btn btn-xs min-h-8 bg-cyan-700 px-1.5 text-xs text-white hover:bg-cyan-800 min-[375px]:px-2 sm:btn-sm sm:px-3"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default Userinfo;
