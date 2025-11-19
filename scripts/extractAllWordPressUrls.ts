import { JSDOM } from 'jsdom';

// Category keywords for classification
const CATEGORY_KEYWORDS = {
  hvac: ['hvac', 'air-conditioning', 'heating', 'ac-', 'furnace', 'heat-pump', 'ductwork', 'indoor-air'],
  solar: ['solar', 'photovoltaic', 'pv-system', 'renewable-energy', 'solar-panel'],
  plumbing: ['plumbing', 'plumber', 'pipe', 'drain', 'water-heater', 'leak', 'faucet', 'toilet', 'sewer'],
  roofing: ['roof', 'roofing', 'shingle', 'gutter'],
  electrical: ['electrical', 'electrician', 'wiring', 'circuit', 'panel', 'generac', 'generator'],
  'home-tips': ['home-', 'house-', 'maintenance', 'energy-efficiency', 'diy', 'tips', 'guide'],
  'area-specific': ['tucson', 'oro-valley', 'marana', 'sahuarita', 'green-valley', 'vail']
};

// Determine category from URL
function categorizeUrl(url: string): string {
  const urlLower = url.toLowerCase();
  
  // Check each category
  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    for (const keyword of keywords) {
      if (urlLower.includes(keyword)) {
        // Prioritize non-area categories for mixed content
        if (category !== 'area-specific') {
          return category;
        }
      }
    }
  }
  
  // Check for area-specific last
  for (const keyword of CATEGORY_KEYWORDS['area-specific']) {
    if (urlLower.includes(keyword)) {
      return 'area-specific';
    }
  }
  
  return 'home-tips'; // Default fallback
}

async function fetchSitemapUrls(): Promise<string[]> {
  const sitemapUrl = 'https://www.idesignac.com/sitemap_index.xml';
  const postUrls: string[] = [];

  try {
    console.log('Fetching sitemap index...');
    const response = await fetch(sitemapUrl);
    const xml = await response.text();
    const dom = new JSDOM(xml, { contentType: 'text/xml' });
    
    // Find post sitemap URLs
    const sitemaps = Array.from(dom.window.document.querySelectorAll('sitemap loc'));
    
    for (const sitemap of sitemaps) {
      const sitemapLoc = sitemap.textContent?.trim() || '';
      
      // Only process post sitemaps
      if (sitemapLoc.includes('post-sitemap')) {
        console.log(`Fetching ${sitemapLoc}...`);
        const postResponse = await fetch(sitemapLoc);
        const postXml = await postResponse.text();
        const postDom = new JSDOM(postXml, { contentType: 'text/xml' });
        
        const locs = Array.from(postDom.window.document.querySelectorAll('url loc'));
        for (const loc of locs) {
          const url = loc.textContent?.trim();
          if (url) {
            postUrls.push(url);
          }
        }
      }
    }
    
    return postUrls;
  } catch (error) {
    console.error('Error fetching sitemap:', error);
    return [];
  }
}

async function main() {
  console.log('=== Extracting All WordPress Blog URLs ===\n');
  
  const urls = await fetchSitemapUrls();
  console.log(`\nFound ${urls.length} total blog posts\n`);
  
  // Categorize URLs
  const categorized: Record<string, string[]> = {
    hvac: [],
    solar: [],
    plumbing: [],
    roofing: [],
    electrical: [],
    'home-tips': [],
    'area-specific': []
  };
  
  for (const url of urls) {
    const category = categorizeUrl(url);
    categorized[category].push(url);
  }
  
  // Write category files
  const fs = await import('fs/promises');
  
  for (const [category, categoryUrls] of Object.entries(categorized)) {
    if (categoryUrls.length > 0) {
      const filename = `${category}_urls.txt`;
      await fs.writeFile(filename, categoryUrls.join('\n'), 'utf-8');
      console.log(`✓ ${category}: ${categoryUrls.length} posts → ${filename}`);
    }
  }
  
  // Summary
  console.log('\n=== Summary ===');
  console.log(`Total posts: ${urls.length}`);
  for (const [category, categoryUrls] of Object.entries(categorized)) {
    if (categoryUrls.length > 0) {
      console.log(`  ${category}: ${categoryUrls.length}`);
    }
  }
}

main();
