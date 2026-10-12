"use client";

import { toast } from "react-toastify";
import { FaFacebookF } from "react-icons/fa";

const FacebookComingSoon = () => {
  return (
    <button
      type="button"
      aria-label="Facebook - Coming Soon"
      onClick={() =>
        toast.info("coming soon!", {
          autoClose: 2000,
          closeButton: false,
          className:
            "!min-h-0 !w-auto !max-w-[160px] !rounded-md !border !border-cyan-400/30 !bg-slate-900 !px-3 !py-2 !text-xs !text-cyan-100",
          position: "top-right",
        })
      }
      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition-colors hover:border-cyan-500 hover:bg-cyan-600 hover:text-white sm:h-9 sm:w-9"
    >
      <FaFacebookF size={14} />
    </button>
  );
};

export default FacebookComingSoon;
