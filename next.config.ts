import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    disableStaticImages: true,
  },
  turbopack: {
    root: process.cwd(),
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp|avif)$/i,
      type: "asset/resource",
    });

    return config;
  },
};

export default nextConfig;
