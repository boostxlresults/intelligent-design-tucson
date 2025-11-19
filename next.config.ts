import type { NextConfig } from "next";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";

/**
 * Generate 301 redirects for legacy React app URLs → Next.js /services/ structure
 * Preserves SEO equity and handles external backlinks
 * 
 * Legacy React app used flat URL structure: /{slug}
 * Next.js uses nested structure: /services/{slug}
 * 
 * For each service with canonical slug (e.g., "ac-repair-tucson", "h-v-a-c-tucson-estates"):
 * - Create redirect: /{canonical-slug} → /services/{canonical-slug}
 */
async function generateServiceRedirects() {
  const redirects: Array<{ source: string; destination: string; permanent: boolean }> = [];
  
  try {
    const servicesDir = join(process.cwd(), "data", "pages", "services");
    const files = readdirSync(servicesDir).filter(f => f.endsWith('.ts'));
    
    for (const file of files) {
      const content = readFileSync(join(servicesDir, file), 'utf-8');
      const slugMatch = content.match(/slug:\s*['"]([^'"]+)['"]/);
      
      if (slugMatch) {
        const canonicalSlug = slugMatch[1];
        
        // Legacy React URL was /{slug}, redirect to /services/{slug}
        redirects.push({
          source: `/${canonicalSlug}`,
          destination: `/services/${canonicalSlug}`,
          permanent: true
        });
      }
    }
    
    console.log(`✅ Generated ${redirects.length} service redirects for SEO preservation`);
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
    return serviceRedirects;
  },
};

export default nextConfig;
