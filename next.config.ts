import type { NextConfig } from "next";

/**
 * Next.js configuration
 * 
 * NOTE: Redirects are handled by middleware.ts to bypass Vercel's 1,024 redirect limit
 * The middleware handles all 1,500+ legacy URL redirects at runtime
 */

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,
  output: "standalone",
  allowedDevOrigins: ["*.replit.dev", "*.kirk.replit.dev"],
};

export default nextConfig;
