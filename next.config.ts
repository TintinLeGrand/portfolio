import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "nextjs.org",
      "upload.wikimedia.org",
      "raw.githubusercontent.com",
      "static.wikia.nocookie.net",
    ],
  }
};

export default nextConfig;
