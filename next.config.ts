import type { NextConfig } from "next";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";

/**
 * Generate 308 permanent redirects for legacy React app URLs → Next.js /services/ structure
 * Preserves SEO equity and handles external backlinks
 * 
 * Uses manifest to generate redirects:
 * 1. For each canonical service: /{canonical-slug} → /services/{canonical-slug}
 * 2. For each alias: /services/{alias} → /services/{canonical-slug}
 * 3. For each alias: /{alias} → /services/{canonical-slug}
 */
async function generateServiceRedirects() {
  const redirects: Array<{ source: string; destination: string; permanent: boolean }> = [];
  
  try {
    // Load manifest to get canonical services and aliases
    const manifestPath = join(process.cwd(), "data", "pages", "services", "manifest.json");
    const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'));
    const services = manifest.services || {};
    const aliases = manifest.aliases || {};
    
    // Standalone pages that have their own app routes (not service pages)
    const standalonePages = new Set([
      'financing', 'guarantees', 'resources', 'home', 'about',
      'contact', 'careers', 'privacy-policy', 'special-offers',
      'customer-reviews', 'video-testimonials'
    ]);
    
    // Generate redirects for canonical services only
    // Exclude standalone pages that have dedicated app routes
    // Legacy flat URL → /services/ URL
    Object.entries(services).forEach(([canonicalSlug, _info]) => {
      // Skip if this is a standalone page with its own route
      if (standalonePages.has(canonicalSlug)) {
        return;
      }
      
      redirects.push({
        source: `/${canonicalSlug}`,
        destination: `/services/${canonicalSlug}`,
        permanent: true
      });
    });
    
    // Generate redirects for aliases
    // Each alias gets 2 redirects to ensure single-hop resolution:
    // 1. /services/{alias} → /services/{canonical} (prevents duplicate content)
    // 2. /{alias} → /services/{canonical} (legacy flat URL support)
    Object.entries(aliases).forEach(([aliasSlug, canonicalSlug]) => {
      // Alias under /services/ → canonical
      redirects.push({
        source: `/services/${aliasSlug}`,
        destination: `/services/${canonicalSlug}`,
        permanent: true
      });
      
      // Legacy flat URL alias → canonical service URL
      redirects.push({
        source: `/${aliasSlug}`,
        destination: `/services/${canonicalSlug}`,
        permanent: true
      });
    });
    
    console.log(`✅ Generated ${redirects.length} service redirects (${Object.keys(services).length} canonical, ${Object.keys(aliases).length} aliases) for SEO preservation`);
  } catch (error) {
    console.warn('⚠️  Could not generate service redirects:', error);
  }
  
  return redirects;
}

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
  async redirects() {
    const serviceRedirects = await generateServiceRedirects();
    
    const legacyRedirects = [
      {
        source: '/ac-system-faqs',
        destination: '/resources',
        permanent: true
      },
      {
        source: '/about-intelligent-design',
        destination: '/',
        permanent: true
      }
    ];
    
    return [...serviceRedirects, ...legacyRedirects];
  },
};

export default nextConfig;
