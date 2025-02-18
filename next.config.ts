import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:locale/:category-games',
        destination: '/:locale/:category',
        permanent: true,
      },
      {
        source: '/:locale/:category-games/:game',
        destination: '/:locale/:category/:game',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
