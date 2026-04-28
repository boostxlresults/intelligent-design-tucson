/**
 * Generate XML Sitemap for Intelligent Design Website
 * 
 * Creates sitemap.xml with all service pages, blog posts, informational pages, and area pages
 * Optimized for Google Search Console submission
 */

import { readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const SITE_URL = 'https://www.idesignac.com';

interface SitemapURL {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

// Service pages (all TSX files in pages directory that are services)
const SERVICE_PAGES = [
  'ac-installation-tucson', 'ac-repair-tucson', 'ac-service-tucson', 'ac-tuneup-tucson',
  'ductless-mini-split-installation-tucson', 'ductless-mini-split-repair-tucson',
  'duct-cleaning-tucson', 'duct-installation-tucson', 'duct-repair-tucson', 'duct-sealing-tucson',
  'furnaces-tucson', 'heater-installation-tucson', 'heater-repair-tucson', 'heater-service-tucson', 'heater-tuneup-tucson',
  'heat-pumps-tucson', 'indoor-air-quality-tucson', 'smart-thermostat-installation-tucson', 'solar-ac-tucson',
  'bidet-installation-tucson', 'drain-clearing-tucson', 'garbage-disposal-installation-tucson', 'leak-detection-tucson', 'plumbing-maintenance-tucson',
  'rooter-special-tucson', 'sewer-camera-inspection-tucson', 'sewer-line-repair-tucson', 'sink-repair-installation-tucson',
  'toilet-installation-tucson', 'trenchless-repair-tucson', 'water-filtration-tucson', 'water-heater-flush-tucson', 'water-heater-installation-tucson',
  'water-heater-repair-tucson', 'water-heaters-tucson', 'water-leak-repair-tucson', 'water-softeners-tucson', 'hybrid-water-heaters-tucson',
  'commercial-roof-coating-tucson', 'commercial-roof-inspection-tucson', 'commercial-roof-installation-tucson',
  'commercial-roof-repair-tucson', 'commercial-roof-replacement-tucson',
  'residential-roof-coating-tucson', 'residential-roof-inspection-tucson', 'residential-roof-installation-tucson',
  'residential-roof-repair-tucson', 'residential-roof-replacement-tucson',
  'flat-roofs-tucson', 'metal-roofs-tucson', 'pitched-roofs-tucson', 'shingle-roofs-tucson', 'skylights-tucson', 'tile-roofs-tucson',
  'commercial-solar-installation-tucson', 'residential-solar-installation-tucson',
  'solar-maintenance-tucson', 'solar-panel-costs-tucson', 'solar-tax-credits-tucson', 'solar-tubular-lights-tucson',
  'ceiling-fan-installation-tucson', 'circuit-breakers-tucson', 'electrical-panel-upgrades-tucson', 'electrical-repair-tucson',
  'generac-installation-tucson', 'generac-repair-tucson', 'lighting-upgrades-tucson', 'outdoor-motion-lighting-tucson', 'outlets-switches-tucson'
];

// Informational pages
const INFO_PAGES = [
  '', // Homepage
  'about', 'contact', 'areas-we-serve', 'careers', 'customer-reviews', 'video-testimonials',
  'family-protection-plans', 'financing', 'guarantees',
  'new-homebuyer-offer', 'realtors-offer',
  'pearl-certified-contractor', 'pearl-certified-hvac', 'pearl-certified-solar',
  'home-energy-audit', 'home-energy-upgrades',
  'knowledge-hub', 'resources', 'recent-projects',
  'why-tucson-chooses-intelligent-design',
  'privacy-policy'
];

// Service area pages
const AREA_PAGES = [
  'tucson', 'oro-valley', 'marana', 'sahuarita', 'vail', 'green-valley',
  'casas-adobes', 'avra-valley', 'catalina-foothills', 'corona-de-tucson', 'cortaro',
  'drexel-heights', 'east-tucson', 'gladden-farms', 'picture-rocks', 'rita-ranch',
  'rillito', 'saddlebrooke-catalina', 'tanque-verde', 'tucson-estates', 'tortolita'
];

// Get all blog posts from markdown files
function getBlogPosts(): string[] {
  const blogPosts: string[] = [];
  const blogDir = join(process.cwd(), 'public/content/blog');
  
  try {
    const categories = readdirSync(blogDir);
    for (const category of categories) {
      const categoryPath = join(blogDir, category);
      const files = readdirSync(categoryPath);
      for (const file of files) {
        if (file.endsWith('.md')) {
          const slug = file.replace('.md', '');
          blogPosts.push(`blog/${category}/${slug}`);
        }
      }
    }
  } catch (error) {
    console.warn('Could not read blog posts:', error);
  }
  
  return blogPosts;
}

function generateSitemap(): string {
  const urls: SitemapURL[] = [];
  const today = new Date().toISOString().split('T')[0];
  
  // Homepage
  urls.push({
    loc: SITE_URL,
    lastmod: today,
    changefreq: 'weekly',
    priority: 1.0
  });
  
  // Service pages (high priority)
  for (const page of SERVICE_PAGES) {
    urls.push({
      loc: `${SITE_URL}/${page}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.9
    });
  }
  
  // Informational pages
  for (const page of INFO_PAGES) {
    if (page === '') continue; // Skip homepage (already added)
    urls.push({
      loc: `${SITE_URL}/${page}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.8
    });
  }
  
  // Service area pages
  for (const page of AREA_PAGES) {
    urls.push({
      loc: `${SITE_URL}/${page}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.7
    });
  }
  
  // Blog posts
  const blogPosts = getBlogPosts();
  for (const post of blogPosts) {
    urls.push({
      loc: `${SITE_URL}/${post}`,
      lastmod: today,
      changefreq: 'yearly',
      priority: 0.6
    });
  }
  
  // Generate XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  for (const url of urls) {
    xml += '  <url>\n';
    xml += `    <loc>${url.loc}</loc>\n`;
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority.toFixed(1)}</priority>\n`;
    xml += '  </url>\n';
  }
  
  xml += '</urlset>';
  
  return xml;
}

// Generate and save sitemap
const sitemap = generateSitemap();
const outputPath = join(process.cwd(), 'public/sitemap.xml');
writeFileSync(outputPath, sitemap, 'utf-8');

console.log(`✅ Sitemap generated successfully: ${outputPath}`);
console.log(`📊 Total URLs: ${sitemap.split('<url>').length - 1}`);
