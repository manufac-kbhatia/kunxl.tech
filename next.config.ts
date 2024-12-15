import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn.discordapp.com', 'i.scdn.co'], // Add the allowed image domains here
  },
};

export default nextConfig;
