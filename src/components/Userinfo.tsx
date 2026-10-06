"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const Userinfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const HandleSignout = async () => {
    await authClient.signOut();
  };

  return (
    <div className="w-full flex items-center justify-between">
      {user ? (
        <>
          {/* Profile - Left */}
          <div className="flex items-center gap-2">
            <div className="avatar">
              <div className="w-8 rounded-full ring-2 ring-primary ring-offset-2">
                <Image
                  src="https://mir-s3-cdn-cf.behance.net/projects/404/69688f253332769.Y3JvcCwxNDE4LDExMDksMCw1Ng.jpg"
                  alt="Profile"
                  width={32}
                  height={32}
                />
              </div>
            </div>

            <h2 className="mt-1 text-xs font-medium whitespace-nowrap">
              {user?.name}
            </h2>
          </div>

          {/* Sign Out - Right */}
          <button
            onClick={HandleSignout}
            className="btn btn-sm bg-cyan-700 text-white hover:bg-cyan-800"
          >
            Sign Out
          </button>
        </>
      ) : (
        <div className="ml-auto flex items-center gap-2">
          <Link
            href="/signin"
            className="btn btn-sm border border-gray-300 bg-white text-gray-700 hover:bg-gray-200"
          >
            সাইন ইন
          </Link>

          <Link
            href="/signup"
            className="btn btn-sm bg-cyan-700 text-white hover:bg-cyan-800"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default Userinfo;
