import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "encrypted-tbn1.gstatic.com"},
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com"}
    ]
  }
};

export default nextConfig;
