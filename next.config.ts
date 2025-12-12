import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "grenada.by",
      },
      {
        protocol: "https",
        hostname: "www.russianfood.com",
      },
    ],
  },
};

export default nextConfig;
