/**
 * Generate 301 Redirect Map for WordPress to React Migration
 * 
 * This script:
 * 1. Reads old WordPress sitemap URLs
 * 2. Maps them to new React build URLs
 * 3. Generates CSV redirect map and vercel.json redirects
 * 
 * Usage: tsx scripts/generateRedirectMap.ts
 */

import * as fs from 'fs';
import * as path from 'path';

interface RedirectMapping {
  oldUrl: string;
  newUrl: string;
  redirectType: number;
  notes: string;
}

interface BlogPost {
  slug: string;
  category: string;
  title: string;
}

/**
 * Extract slug from WordPress URL
 * Example: https://www.idesignac.com/why-is-my-ac-not-cooling/ -> why-is-my-ac-not-cooling
 */
function extractSlugFromWordPressUrl(url: string): string {
  const urlObj = new URL(url);
  const pathname = urlObj.pathname;
  // Remove leading and trailing slashes
  const slug = pathname.replace(/^\/|\/$/g, '');
  return slug;
}

/**
 * Scan blog directory to get all migrated posts with their categories
 */
function getMigratedBlogPosts(): BlogPost[] {
  const blogPosts: BlogPost[] = [];
  const blogDir = path.join(process.cwd(), 'public', 'content', 'blog');
  
  const categories = ['hvac', 'plumbing', 'roofing', 'electrical', 'solar', 'home-tips'];
  
  for (const category of categories) {
    const categoryDir = path.join(blogDir, category);
    if (!fs.existsSync(categoryDir)) continue;
    
    const files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.md'));
    
    for (const file of files) {
      const slug = file.replace('.md', '');
      const filePath = path.join(categoryDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      
      // Extract title from frontmatter
      const titleMatch = content.match(/^title:\s*["']?(.+?)["']?$/m);
      const title = titleMatch ? titleMatch[1] : slug;
      
      blogPosts.push({
        slug,
        category,
        title
      });
    }
  }
  
  return blogPosts;
}

/**
 * Find matching new URL for old WordPress URL
 */
function findNewUrl(oldSlug: string, migratedPosts: BlogPost[]): string | null {
  // Direct slug match
  const exactMatch = migratedPosts.find(post => post.slug === oldSlug);
  if (exactMatch) {
    return `/blog/${exactMatch.category}/${exactMatch.slug}`;
  }
  
  // Try fuzzy matching (handle URL variations)
  const normalizedOldSlug = oldSlug.toLowerCase().replace(/-/g, '');
  const fuzzyMatch = migratedPosts.find(post => 
    post.slug.toLowerCase().replace(/-/g, '') === normalizedOldSlug
  );
  
  if (fuzzyMatch) {
    return `/blog/${fuzzyMatch.category}/${fuzzyMatch.slug}`;
  }
  
  return null;
}

/**
 * Generate redirect mappings
 */
async function generateRedirectMap() {
  console.log('🔄 Generating redirect map...\n');
  
  // Get migrated blog posts
  const migratedPosts = getMigratedBlogPosts();
  console.log(`✅ Found ${migratedPosts.length} migrated blog posts\n`);
  
  // Sample old WordPress URLs for testing
  // In production, this would read from sitemap or CSV
  const oldBlogUrls = [
    'https://www.idesignac.com/why-is-my-ac-not-cooling/',
    'https://www.idesignac.com/how-much-does-a-new-air-conditioner-cost/',
    'https://www.idesignac.com/complete-guide-to-hvac-ac-repair-in-tucson-faqs-answered/',
    // Add more URLs as needed
  ];
  
  const redirectMappings: RedirectMapping[] = [];
  const unmappedUrls: string[] = [];
  
  for (const oldUrl of oldBlogUrls) {
    const oldSlug = extractSlugFromWordPressUrl(oldUrl);
    const newUrl = findNewUrl(oldSlug, migratedPosts);
    
    if (newUrl) {
      redirectMappings.push({
        oldUrl: `/${oldSlug}`,
        newUrl,
        redirectType: 301,
        notes: 'Blog post migrated'
      });
    } else {
      unmappedUrls.push(oldUrl);
    }
  }
  
  console.log(`✅ Mapped ${redirectMappings.length} redirects`);
  console.log(`⚠️  Unmapped ${unmappedUrls.length} URLs\n`);
  
  // Generate CSV
  const csvPath = path.join(process.cwd(), 'redirect-map.csv');
  const csvHeader = 'old_url,new_url,redirect_type,notes\n';
  const csvRows = redirectMappings.map(r => 
    `${r.oldUrl},${r.newUrl},${r.redirectType},${r.notes}`
  ).join('\n');
  
  fs.writeFileSync(csvPath, csvHeader + csvRows);
  console.log(`✅ Generated redirect-map.csv (${redirectMappings.length} redirects)`);
  
  // Display unmapped URLs
  if (unmappedUrls.length > 0) {
    console.log('\n⚠️  UNMAPPED URLs (need manual review):');
    unmappedUrls.forEach(url => console.log(`   - ${url}`));
  }
  
  console.log('\n📋 Next Steps:');
  console.log('1. Export full sitemap URLs from old WordPress site');
  console.log('2. Update this script to process all URLs');
  console.log('3. Manually review unmapped URLs');
  console.log('4. Update vercel.json with redirect rules');
  console.log('5. Test redirects before deployment\n');
}

// Run the script
generateRedirectMap().catch(console.error);
