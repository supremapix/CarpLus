import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "carpluscwb.com.br",
        pathname: "/wp-content/uploads/**",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
