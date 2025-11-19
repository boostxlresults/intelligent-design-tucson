import { JSDOM } from 'jsdom';
import TurndownService from 'turndown';
import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';

interface BlogPost {
  title: string;
  description: string;
  category: string;
  tags: string[];
  heroImage: string;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  oldUrl: string;
  canonicalUrl: string;
  relatedServices: string[];
  author: string;
  content: string;
  slug: string;
  wordCount: number;
  imagesFound: number;
}

interface MigrationReport {
  oldUrl: string;
  newUrl: string;
  category: string;
  wordCount: number;
  imagesFound: number;
  tagsExtracted: string[];
  relatedServicesMapped: string[];
  issues: string[];
}

// Category keywords mapping
const CATEGORY_KEYWORDS = {
  hvac: ['hvac', 'air conditioning', 'ac repair', 'ac service', 'furnace', 'heating', 'cooling', 'heat pump', 'ductless', 'duct', 'thermostat', 'air filter'],
  solar: ['solar', 'solar panel', 'solar energy', 'photovoltaic', 'renewable energy', 'solar installation', 'solar tax', 'solar credit'],
  plumbing: ['plumbing', 'plumber', 'pipe', 'leak', 'drain', 'sewer', 'water heater', 'faucet', 'toilet', 'sink', 'water softener', 'water filtration'],
  roofing: ['roof', 'roofing', 'shingle', 'tile roof', 'metal roof', 'roof repair', 'roof replacement', 'roof inspection', 'leak'],
  electrical: ['electrical', 'electrician', 'wiring', 'circuit breaker', 'panel', 'outlet', 'lighting', 'generator'],
  'home-tips': ['home', 'tips', 'maintenance', 'homeowner', 'energy efficiency', 'tucson', 'moving', 'summer', 'winter', 'monsoon']
};

// Service mapping based on content keywords
const SERVICE_MAPPING = {
  'ac-repair': ['ac repair', 'air conditioner repair', 'hvac repair', 'broken ac'],
  'ac-service': ['ac service', 'ac maintenance', 'tune-up', 'ac tuneup'],
  'ac-installation': ['ac installation', 'new air conditioner', 'ac replacement'],
  'solar-installation': ['solar installation', 'solar panel installation', 'install solar'],
  'solar-maintenance': ['solar maintenance', 'solar monitoring', 'solar service'],
  'water-heater-repair': ['water heater repair', 'water heater replacement'],
  'plumbing-maintenance': ['plumbing maintenance', 'plumbing service'],
  'roof-repair': ['roof repair', 'roof leak', 'roof damage'],
  'roof-inspection': ['roof inspection', 'roof maintenance']
};

/**
 * Fetch HTML content from a URL
 */
async function fetchHTML(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

/**
 * Download an image from URL to local path
 */
async function downloadImage(url: string, filepath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => reject(err));
    });
  });
}

/**
 * Generate SEO-friendly slug from title
 */
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 60);
}

/**
 * Auto-categorize content based on keywords
 */
function categorizeContent(title: string, content: string): string {
  const text = (title + ' ' + content).toLowerCase();
  let bestCategory = 'home-tips';
  let maxMatches = 0;

  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    const matches = keywords.filter(keyword => text.includes(keyword)).length;
    if (matches > maxMatches) {
      maxMatches = matches;
      bestCategory = category;
    }
  }

  return bestCategory;
}

/**
 * Extract tags from content
 */
function extractTags(title: string, content: string, category: string): string[] {
  const text = (title + ' ' + content).toLowerCase();
  const tags: string[] = [];

  // Add category-specific tags
  const categoryKeywords = CATEGORY_KEYWORDS[category as keyof typeof CATEGORY_KEYWORDS] || [];
  for (const keyword of categoryKeywords) {
    if (text.includes(keyword) && tags.length < 5) {
      const tag = keyword.replace(/\s+/g, '-');
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    }
  }

  // Add Tucson if mentioned
  if (text.includes('tucson') && !tags.includes('tucson')) {
    tags.push('tucson');
  }

  // Add maintenance if mentioned
  if (text.includes('maintenance') && !tags.includes('maintenance')) {
    tags.push('maintenance');
  }

  return tags.slice(0, 5);
}

/**
 * Map related services based on content
 */
function mapRelatedServices(title: string, content: string): string[] {
  const text = (title + ' ' + content).toLowerCase();
  const services: string[] = [];

  for (const [service, keywords] of Object.entries(SERVICE_MAPPING)) {
    if (keywords.some(keyword => text.includes(keyword))) {
      services.push(service);
    }
  }

  return services.slice(0, 3);
}

/**
 * Extract and clean article content from HTML
 */
function extractContent(dom: JSDOM): { title: string; content: string; description: string; heroImage: string; publishDate: string } {
  const document = dom.window.document;

  // Extract title
  let title = document.querySelector('h1')?.textContent?.trim() ||
              document.querySelector('title')?.textContent?.trim() ||
              'Untitled Post';

  // Clean title (remove site name)
  title = title.replace(/\s*[-|]\s*Intelligent Design.*$/i, '').trim();

  // Extract meta description
  const description = document.querySelector('meta[name="description"]')?.getAttribute('content')?.trim() ||
                     document.querySelector('meta[property="og:description"]')?.getAttribute('content')?.trim() ||
                     '';

  // Extract publish date
  const publishDate = document.querySelector('meta[property="article:published_time"]')?.getAttribute('content') ||
                     document.querySelector('time')?.getAttribute('datetime') ||
                     new Date().toISOString();

  // Find hero image
  let heroImage = '';
  const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content');
  const featuredImage = document.querySelector('img.wp-post-image, .featured-image img, article img');
  
  if (ogImage) {
    heroImage = ogImage;
  } else if (featuredImage) {
    heroImage = featuredImage.getAttribute('src') || '';
  }

  // Find main content
  const contentSelectors = [
    'article .entry-content',
    '.post-content',
    'article',
    '.content',
    'main'
  ];

  let contentElement = null;
  for (const selector of contentSelectors) {
    contentElement = document.querySelector(selector);
    if (contentElement) break;
  }

  if (!contentElement) {
    throw new Error('Could not find main content');
  }

  // Remove unwanted elements
  const unwantedSelectors = [
    'script', 'style', 'nav', 'header', 'footer',
    '.comments', '.related-posts', '.social-share',
    '.advertisement', '.ad', '.sidebar', '.widget',
    'form', 'iframe', '.navigation'
  ];

  unwantedSelectors.forEach(selector => {
    contentElement!.querySelectorAll(selector).forEach(el => el.remove());
  });

  // Get cleaned HTML
  const contentHTML = contentElement.innerHTML;

  return { title, content: contentHTML, description, heroImage, publishDate };
}

/**
 * Convert HTML to Markdown
 */
function htmlToMarkdown(html: string): string {
  const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-'
  });

  // Keep line breaks
  turndownService.keep(['br']);

  // Custom rules for better markdown
  turndownService.addRule('removeEmptyParagraphs', {
    filter: (node) => {
      return node.nodeName === 'P' && !node.textContent?.trim();
    },
    replacement: () => ''
  });

  return turndownService.turndown(html);
}

/**
 * Calculate reading time (words per minute)
 */
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Create frontmatter for markdown file
 */
function createFrontmatter(post: BlogPost): string {
  return `---
title: "${post.title.replace(/"/g, '\\"')}"
description: "${post.description.replace(/"/g, '\\"')}"
category: ${post.category}
tags: [${post.tags.join(', ')}]
heroImage: "${post.heroImage}"
publishedAt: "${post.publishedAt}"
updatedAt: "${post.updatedAt}"
featured: ${post.featured}
oldUrl: "${post.oldUrl}"
canonicalUrl: "${post.canonicalUrl}"
relatedServices: [${post.relatedServices.join(', ')}]
author: "${post.author}"
---

`;
}

/**
 * Main migration function
 */
export async function migrateBlogPost(url: string): Promise<MigrationReport> {
  console.log(`\n🔄 Migrating: ${url}`);
  const issues: string[] = [];

  try {
    // Fetch HTML
    const html = await fetchHTML(url);
    const dom = new JSDOM(html);

    // Extract content
    const { title, content, description, heroImage, publishDate } = extractContent(dom);
    
    if (!title) {
      issues.push('No title found');
    }
    if (!description) {
      issues.push('No meta description found');
    }

    // Convert to markdown
    const markdown = htmlToMarkdown(content);
    const wordCount = markdown.split(/\s+/).length;

    // Auto-categorize
    const category = categorizeContent(title, markdown);

    // Generate slug
    const slug = generateSlug(title);

    // Extract tags and related services
    const tags = extractTags(title, markdown, category);
    const relatedServices = mapRelatedServices(title, markdown);

    // Count images
    const imageMatches = markdown.match(/!\[.*?\]\(.*?\)/g) || [];
    const imagesFound = imageMatches.length + (heroImage ? 1 : 0);

    // Download hero image if available
    let heroImagePath = '';
    if (heroImage) {
      try {
        const imageExt = path.extname(new URL(heroImage).pathname) || '.jpg';
        const imageName = `${slug}${imageExt}`;
        const localPath = path.join('attached_assets', 'blog', category, imageName);
        
        await downloadImage(heroImage, localPath);
        heroImagePath = `/${localPath}`;
        console.log(`✅ Downloaded hero image: ${heroImagePath}`);
      } catch (err) {
        issues.push(`Failed to download hero image: ${err}`);
        heroImagePath = '/attached_assets/generated_images/Professional_technician_at_Tucson_home_72664681.png';
      }
    } else {
      heroImagePath = '/attached_assets/generated_images/Professional_technician_at_Tucson_home_72664681.png';
      issues.push('No hero image found, using default');
    }

    // Create blog post object
    const post: BlogPost = {
      title,
      description: description || title,
      category,
      tags,
      heroImage: heroImagePath,
      publishedAt: publishDate,
      updatedAt: new Date().toISOString(),
      featured: false,
      oldUrl: url,
      canonicalUrl: `/blog/${category}/${slug}`,
      relatedServices,
      author: 'Intelligent Design Team',
      content: markdown,
      slug,
      wordCount,
      imagesFound
    };

    // Create markdown file
    const markdownContent = createFrontmatter(post) + post.content;
    const filePath = path.join('content', 'blog', category, `${slug}.md`);
    
    // Ensure directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, markdownContent, 'utf-8');
    console.log(`✅ Saved: ${filePath}`);

    // Return report
    return {
      oldUrl: url,
      newUrl: `/blog/${category}/${slug}`,
      category,
      wordCount,
      imagesFound,
      tagsExtracted: tags,
      relatedServicesMapped: relatedServices,
      issues
    };

  } catch (error) {
    console.error(`❌ Error migrating ${url}:`, error);
    issues.push(`Migration failed: ${error}`);
    
    return {
      oldUrl: url,
      newUrl: '',
      category: 'unknown',
      wordCount: 0,
      imagesFound: 0,
      tagsExtracted: [],
      relatedServicesMapped: [],
      issues
    };
  }
}

/**
 * Migrate multiple posts
 */
export async function migratePosts(urls: string[]): Promise<MigrationReport[]> {
  const reports: MigrationReport[] = [];
  
  for (const url of urls) {
    const report = await migrateBlogPost(url);
    reports.push(report);
    
    // Wait a bit between requests to be respectful
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  return reports;
}

// CLI execution
if (require.main === module) {
  const urls = [
    // HVAC (3 posts)
    'https://www.idesignac.com/complete-guide-to-hvac-ac-repair-in-tucson-faqs-answered',
    'https://www.idesignac.com/why-is-my-ac-not-cooling',
    'https://www.idesignac.com/how-much-does-a-new-air-conditioner-cost',
    
    // Solar (2 posts)
    'https://www.idesignac.com/what-to-do-if-your-solar-company-closed-in-tucson',
    'https://www.idesignac.com/13-uses-of-solar-energy-the-ultimate-guide-for-home-and-business-owners',
    
    // Plumbing (2 posts)
    'https://www.idesignac.com/mastering-winter-pipe-protection-in-freezing-weather',
    'https://www.idesignac.com/how-to-fix-your-ac-a-simple-guide-for-everyone',
    
    // Roofing (1 post)
    'https://www.idesignac.com/preparing-the-roof-for-spring-storms-ensuring-safety-and-longevity',
    
    // Home Tips (2 posts)
    'https://www.idesignac.com/preparing-the-home-for-summer-essential-tips-from-intelligent-design-air-conditioning-plumbing-solar-electric',
    'https://www.idesignac.com/top-10-reasons-to-move-to-tucson'
  ];

  console.log('🚀 Starting blog migration...\n');
  console.log(`📝 Migrating ${urls.length} posts\n`);

  migratePosts(urls).then(reports => {
    console.log('\n✅ Migration complete!\n');
    
    // Generate migration report
    let reportContent = '# Blog Migration Report\n\n';
    reportContent += `**Date**: ${new Date().toISOString()}\n\n`;
    reportContent += `**Total Posts Migrated**: ${reports.length}\n\n`;
    reportContent += `---\n\n`;

    reports.forEach((report, index) => {
      reportContent += `## Post ${index + 1}\n\n`;
      reportContent += `**Old URL**: ${report.oldUrl}\n\n`;
      reportContent += `**New URL**: ${report.newUrl}\n\n`;
      reportContent += `**Category**: ${report.category}\n\n`;
      reportContent += `**Word Count**: ${report.wordCount}\n\n`;
      reportContent += `**Images Found**: ${report.imagesFound}\n\n`;
      reportContent += `**Tags**: ${report.tagsExtracted.join(', ')}\n\n`;
      reportContent += `**Related Services**: ${report.relatedServicesMapped.join(', ')}\n\n`;
      
      if (report.issues.length > 0) {
        reportContent += `**Issues**:\n`;
        report.issues.forEach(issue => {
          reportContent += `- ${issue}\n`;
        });
        reportContent += '\n';
      }
      
      reportContent += `---\n\n`;
    });

    // Save report
    fs.writeFileSync('scripts/migration-report.md', reportContent, 'utf-8');
    console.log('📄 Migration report saved to scripts/migration-report.md');

  }).catch(error => {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  });
}
