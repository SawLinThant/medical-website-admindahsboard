import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['axra.sgp1.digitaloceanspaces.com'],
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
};

export default nextConfig;
