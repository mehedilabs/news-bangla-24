
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,

 images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "ichef.bbci.co.uk",
    },
    {
      protocol: "https",
      hostname: "lh3.googleusercontent.com",
    },
    {
      protocol: "https",
      hostname: "avatars.githubusercontent.com",
    },
    {
      protocol: "https",
      hostname: "**.fbcdn.net",
    },
    {
      protocol: "https",
      hostname: "img.daisyui.com",
    },
  ],
},
};

export default nextConfig;
