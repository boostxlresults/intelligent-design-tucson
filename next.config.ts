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
      'customer-reviews', 'video-testimonials', 'family-protection-plans',
      'new-homebuyer-offer', 'realtors-offer', 'recent-projects'
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
        source: '/about-intelligent-design',
        destination: '/knowledge-hub',
        permanent: true
      },
      {
        source: '/drain-clearing-special',
        destination: '/services/drain-clearing-special',
        permanent: true
      },
      {
        source: '/areas-served',
        destination: '/service-areas',
        permanent: true
      },
      {
        source: '/air-conditioning',
        destination: '/services/ac-service-tucson',
        permanent: true
      },
      {
        source: '/services/why-tucson-chooses-intelligent-design',
        destination: '/about',
        permanent: true
      },
      {
        source: '/service-areas/saddle-brooke-catalina',
        destination: '/service-areas/saddlebrooke-catalina',
        permanent: true
      },
      {
        source: '/does-air-conditioning-use-gas-or-electricity',
        destination: '/blog/electrical/does-air-conditioning-use-gas-or-electricity',
        permanent: true
      },
      {
        source: '/free-online-hvac-quote',
        destination: '/free-hvac-quote',
        permanent: true
      },
      // Legacy /services/hvac/ URLs → new flat structure
      {
        source: '/services/hvac/ac-repair',
        destination: '/services/ac-repair-tucson',
        permanent: true
      },
      {
        source: '/services/hvac/ac-installation',
        destination: '/services/ac-installation-tucson',
        permanent: true
      },
      {
        source: '/services/hvac/duct-cleaning',
        destination: '/services/duct-cleaning',
        permanent: true
      },
      {
        source: '/services/hvac/:path*',
        destination: '/services/:path*',
        permanent: true
      },
      // Legacy /services/plumbing/ URLs
      {
        source: '/services/plumbing/water-heater-installation',
        destination: '/services/water-heater-installation',
        permanent: true
      },
      {
        source: '/plumber-tucson/emergency-water-heater-repair-tucson',
        destination: '/services/water-heater-repair',
        permanent: true
      },
      {
        source: '/plumber-tucson/plumbing-repair-installation-tucson',
        destination: '/services/plumbing-tucson',
        permanent: true
      },
      {
        source: '/plumber-tucson/leak-detection-tucson-az',
        destination: '/services/leak-detection',
        permanent: true
      },
      {
        source: '/services/plumbing/drain-cleaning',
        destination: '/services/drain-clearing',
        permanent: true
      },
      {
        source: '/services/plumbing/:path*',
        destination: '/services/:path*',
        permanent: true
      },
      // Legacy /services/roofing/ URLs
      {
        source: '/services/roofing/:path*',
        destination: '/services/:path*',
        permanent: true
      },
      // Legacy /services/solar/ URLs
      {
        source: '/services/solar/solar-monitoring',
        destination: '/services/solar-maintenance',
        permanent: true
      },
      {
        source: '/solar-tucson/solar-panel-installation-cost-tucson',
        destination: '/services/solar-panel-costs',
        permanent: true
      },
      {
        source: '/services/solar/:path*',
        destination: '/services/:path*',
        permanent: true
      },
      // Legacy /services/electrical/ URLs
      {
        source: '/services/electrical/generator-installation',
        destination: '/services/generac-installation',
        permanent: true
      },
      {
        source: '/services/electrical/:path*',
        destination: '/services/:path*',
        permanent: true
      }
    ];
    
    return [...serviceRedirects, ...legacyRedirects];
  },
};

export default nextConfig;
