import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // fast dev; production still fine when deployed with an image loader/CDN
  },
  reactStrictMode: true,
};

export default nextConfig;
