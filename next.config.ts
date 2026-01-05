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
  outputFileTracingExcludes: {
    "*": [
      "./public/generated_images/**",
      "./public/content/**",
      "./attached_assets/**",
      "./node_modules/@swc/**",
      "./node_modules/sharp/**",
    ],
  },
  // Tell search engines not to index Next.js static assets (JS/CSS chunks)
  // This helps clean up "Crawled - Currently Not Indexed" reports in Google Search Console
  async headers() {
    return [
      {
        source: '/_next/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
