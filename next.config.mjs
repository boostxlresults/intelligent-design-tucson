/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    // Cache optimized images on Vercel's CDN for 30 days
    // Eliminates the "Use efficient cache lifetimes" warning (989 KiB savings)
    minimumCacheTTL: 2592000,
    // Reduce quality slightly for better LCP — visually imperceptible on mobile
    deviceSizes: [390, 430, 768, 1024, 1280, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  reactStrictMode: true,
  trailingSlash: false,
  output: "standalone",
  allowedDevOrigins: ["*.replit.dev", "*.kirk.replit.dev"],
  // Tree-shake large icon/UI libraries to reduce unused JS bundle size
  // Fixes "Reduce unused JavaScript" warning (985 KiB savings)
  experimental: {
    // Extract and inline critical CSS to eliminate render-blocking stylesheet requests
    // Converts blocking <link rel="stylesheet"> to async load for below-the-fold CSS
    // Fixes the 490ms render-blocking CSS issue flagged by Lighthouse
    optimizeCss: true,
    optimizePackageImports: [
      "lucide-react",
      "react-icons",
      "react-icons/si",
      "react-icons/fa6",
      "react-icons/fa",
      "react-icons/md",
      "@radix-ui/react-icons",
      "@radix-ui/react-accordion",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-tabs",
      "@radix-ui/react-tooltip",
      "@radix-ui/react-select",
      "@radix-ui/react-checkbox",
      "@radix-ui/react-label",
      "@radix-ui/react-separator",
      "@radix-ui/react-slot",
    ],
  },
  // Remove console.log in production to reduce bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
  outputFileTracingExcludes: {
    "*": [
      "./public/generated_images/**",
      "./public/content/**",
      "./attached_assets/**",
      "./node_modules/@swc/**",
      "./node_modules/sharp/**",
    ],
  },
  // /locations/* is now served directly by Next.js dynamic routes
  // (app/locations/[zip]/[service]/page.tsx) — no proxy needed
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/services/:slug.md', destination: '/api/md/service/:slug' },
        { source: '/service-areas/:slug.md', destination: '/api/md/location/:slug' },
        { source: '/blog/:category/:slug.md', destination: '/content/blog/:category/:slug.md' },
        { source: '/:slug.md', destination: '/api/md/core/:slug' },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  async headers() {
    return [
      {
        source: '/lp/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-store, max-age=0, must-revalidate' },
        ],
      },
      {
        source: '/blog/:category/:slug.md',
        headers: [
          { key: 'Content-Type', value: 'text/markdown; charset=utf-8' },
        ],
      },
      {
        // Cache static images aggressively — fixes "Use efficient cache lifetimes" (989 KiB)
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/icons/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
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
      {
        source: '/_next/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
