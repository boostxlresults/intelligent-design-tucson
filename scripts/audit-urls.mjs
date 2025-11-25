import fs from 'fs';
import path from 'path';

// Load all existing pages from manifest
const manifest = JSON.parse(fs.readFileSync('data/pages/services/manifest.json', 'utf-8'));
const existingServicePages = new Set(Object.keys(manifest.services || {}));

// Known standalone pages (not in services manifest)
const standalonePages = new Set([
  'contact',
  'financing',
  'guarantees',
  'guarantee',
  'customer-reviews',
  'service-areas',
  'special-offers',
  'privacy-policy',
  'careers',
  'blog',
  'resources',
  'knowledge-hub',
  'recent-projects',
  'new-homebuyer-offer',
  'realtors-offer',
  'family-protection-plans',
  'faqs',
  'video-library',
  'video-testimonials',
  'r22-phaseout',
  'free-online-hvac-quote',
  'free-online-water-heater-quote',
  'filter-shop',
  'drain-clearing-special'
]);

// Known service area pages
const serviceAreaPages = new Set([
  'tucson', 'oro-valley', 'marana', 'green-valley', 'sahuarita',
  'vail', 'catalina-foothills', 'tanque-verde', 'east-tucson',
  'casas-adobes', 'picture-rocks', 'rillito', 'cortaro', 'tortolita',
  'avra-valley', 'drexel-heights', 'tucson-estates', 'gladden-farms',
  'corona-de-tucson', 'rita-ranch', 'saddle-brooke', 'saddle-brooke-catalina',
  'red-rock-casa-grande'
]);

// Blog categories
const blogCategories = new Set(['hvac', 'solar', 'plumbing', 'roofing', 'electrical', 'home-tips']);

// Track all found URLs and issues
const urlIssues = [];
const urlCorrections = {};

function extractInternalUrls(content, filePath) {
  const urls = [];
  
  // Match [link:/path|text] format
  const linkPattern = /\[link:([^\]|]+)\|([^\]]+)\]/g;
  let match;
  while ((match = linkPattern.exec(content)) !== null) {
    urls.push({ url: match[1], text: match[2], format: 'link', file: filePath });
  }
  
  // Match href="/path" format  
  const hrefPattern = /href="(\/[^"]+)"/g;
  while ((match = hrefPattern.exec(content)) !== null) {
    urls.push({ url: match[1], text: '', format: 'href', file: filePath });
  }
  
  // Match Link href="/path" or to="/path"
  const linkHrefPattern = /(?:href|to)=["'](\/[^"']+)["']/g;
  while ((match = linkHrefPattern.exec(content)) !== null) {
    urls.push({ url: match[1], text: '', format: 'nextlink', file: filePath });
  }
  
  return urls;
}

function isValidUrl(url) {
  // Root path
  if (url === '/') return true;
  
  // Remove trailing slash and query params
  url = url.split('?')[0].replace(/\/$/, '');
  
  const parts = url.split('/').filter(Boolean);
  
  if (parts.length === 0) return true;
  
  // Check standalone pages
  if (parts.length === 1 && standalonePages.has(parts[0])) return true;
  
  // Check /services/xxx
  if (parts[0] === 'services' && parts.length >= 2) {
    const serviceSlug = parts.slice(1).join('-');
    if (existingServicePages.has(serviceSlug)) return true;
    if (existingServicePages.has(parts[1])) return true;
  }
  
  // Check /service-areas/xxx
  if (parts[0] === 'service-areas' && parts.length >= 2) {
    if (serviceAreaPages.has(parts[1])) return true;
  }
  
  // Check /blog/xxx
  if (parts[0] === 'blog') {
    if (parts.length === 1) return true;
    if (parts.length >= 2 && blogCategories.has(parts[1])) return true;
  }
  
  // Check /faqs/xxx
  if (parts[0] === 'faqs') return true;
  
  // Allow external-looking paths that start with knowledgehub (special format)
  if (url.startsWith('knowledgehub')) return true;
  
  return false;
}

function findCorrection(url) {
  const cleanUrl = url.split('?')[0].replace(/\/$/, '');
  const parts = cleanUrl.split('/').filter(Boolean);
  
  if (parts[0] !== 'services' || parts.length < 2) return null;
  
  const slug = parts[1];
  
  // Known corrections
  const corrections = {
    'solar-ac': 'solar-a-c',
    'furnaces': 'furnaces-tucson',
    'about': null, // Remove - no replacement
    'air-quality': 'indoor-air-quality-tucson',
    'air-sealing': null,
    'attic-insulation': null,
    'battery-storage-tucson': 'residential-solar-installation',
    'duct-inspection-tucson': 'duct-services-tucson',
    'duct-services': 'duct-services-tucson',
    'hvac-tucson-plans': 'hvac-tucson',
    'hybrid-water-heaters-tucson': 'hybrid-water-heaters',
    'insurance-claim-assistance': 'residential-roof-repair',
    'irrigation-repair': 'leak-detection-tucson',
    'knowledgehub': null,
    'metal-roofs-tucson': 'metal-roofs',
    'new-home-buyer-offer': '/new-homebuyer-offer',
    'realtor-offer': '/realtors-offer',
    'realtors-offer': '/realtors-offer',
    'recent-projects': '/recent-projects',
    'roof-insurance-claims': 'residential-roof-repair',
    'tankless-water-heater-installation': 'tankless-water-heaters',
    'preventative-maintenance': 'ac-tuneup-tucson',
    'preventative-maintenance-plans': 'ac-tuneup-tucson',
    'generac-installation-green-valley': 'generac-installation',
    'generac-repair-green-valley': 'generac-repair',
  };
  
  // Check for plumbing neighborhood pages that don't exist
  if (slug.startsWith('plumbing-') && !existingServicePages.has(slug)) {
    return 'plumbing-tucson';
  }
  
  if (corrections.hasOwnProperty(slug)) {
    const correction = corrections[slug];
    if (correction === null) return null;
    if (correction.startsWith('/')) return correction;
    return `/services/${correction}`;
  }
  
  // Try adding -tucson suffix
  if (existingServicePages.has(slug + '-tucson')) {
    return `/services/${slug}-tucson`;
  }
  
  return null;
}

// Process all TypeScript files in data/pages/services
const servicesDir = 'data/pages/services';
const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.ts'));

console.log(`Scanning ${files.length} service data files for internal URLs...\n`);

const allUrls = [];
const brokenUrls = new Map();

for (const file of files) {
  const filePath = path.join(servicesDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const urls = extractInternalUrls(content, file);
  
  for (const urlInfo of urls) {
    if (!isValidUrl(urlInfo.url)) {
      const key = urlInfo.url;
      if (!brokenUrls.has(key)) {
        brokenUrls.set(key, { 
          url: urlInfo.url, 
          files: new Set(), 
          count: 0,
          correction: findCorrection(urlInfo.url)
        });
      }
      brokenUrls.get(key).files.add(file);
      brokenUrls.get(key).count++;
    }
    allUrls.push(urlInfo);
  }
}

// Also scan components and app directories
const componentDirs = ['components', 'app'];
for (const dir of componentDirs) {
  if (!fs.existsSync(dir)) continue;
  
  function scanDir(dirPath) {
    const items = fs.readdirSync(dirPath);
    for (const item of items) {
      const itemPath = path.join(dirPath, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDir(itemPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        const content = fs.readFileSync(itemPath, 'utf-8');
        const urls = extractInternalUrls(content, itemPath);
        
        for (const urlInfo of urls) {
          if (!isValidUrl(urlInfo.url)) {
            const key = urlInfo.url;
            if (!brokenUrls.has(key)) {
              brokenUrls.set(key, { 
                url: urlInfo.url, 
                files: new Set(), 
                count: 0,
                correction: findCorrection(urlInfo.url)
              });
            }
            brokenUrls.get(key).files.add(itemPath);
            brokenUrls.get(key).count++;
          }
        }
      }
    }
  }
  scanDir(dir);
}

// Output results
console.log('=== BROKEN/INVALID URLS FOUND ===\n');

const sortedBroken = Array.from(brokenUrls.values()).sort((a, b) => b.count - a.count);

for (const item of sortedBroken) {
  console.log(`URL: ${item.url}`);
  console.log(`  Occurrences: ${item.count}`);
  console.log(`  Suggested correction: ${item.correction || 'REMOVE (no valid replacement)'}`);
  console.log(`  Found in: ${Array.from(item.files).slice(0, 5).join(', ')}${item.files.size > 5 ? ` (+${item.files.size - 5} more)` : ''}`);
  console.log('');
}

console.log('=== SUMMARY ===');
console.log(`Total unique broken URLs: ${brokenUrls.size}`);
console.log(`Total broken URL occurrences: ${Array.from(brokenUrls.values()).reduce((a, b) => a + b.count, 0)}`);

// Output corrections as JSON for fixing
const correctionsForFix = {};
for (const item of sortedBroken) {
  if (item.correction) {
    correctionsForFix[item.url] = item.correction;
  }
}
console.log('\n=== CORRECTIONS MAP (for fixing) ===');
console.log(JSON.stringify(correctionsForFix, null, 2));
