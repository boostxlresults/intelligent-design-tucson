/**
 * Bulk Blog Migration Script
 * Migrates WordPress blog posts to markdown format with full SEO optimization
 */

import fs from 'fs/promises';
import path from 'path';
import TurndownService from 'turndown';
import { JSDOM } from 'jsdom';

const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
});

interface BlogPostData {
  url: string;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  slug: string;
  publishedAt: string;
  author: string;
  tags: string[];
  heroImage: string;
}

// Helper to create SEO-friendly slug from title
function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 60);
}

// Helper to extract excerpt from content
function createExcerpt(content: string, maxLength: number = 160): string {
  const text = content
    .replace(/<[^>]*>/g, '')
    .replace(/\n+/g, ' ')
    .trim();
  
  if (text.length <= maxLength) return text;
  
  return text.substring(0, maxLength).split(' ').slice(0, -1).join(' ') + '...';
}

// Helper to categorize based on URL/title keywords
function categorizePost(url: string, title: string): string {
  const slug = url.toLowerCase();
  const titleLower = title.toLowerCase();
  
  if (slug.includes('solar') || titleLower.includes('solar') || slug.includes('panel')) {
    return 'solar';
  } else if (slug.includes('plumb') || titleLower.includes('plumb') || slug.includes('pipe') || 
             slug.includes('drain') || slug.includes('water-heater') || titleLower.includes('drain')) {
    return 'plumbing';
  } else if (slug.includes('roof') || titleLower.includes('roof')) {
    return 'roofing';
  } else if (slug.includes('electric') || titleLower.includes('electric')) {
    return 'electrical';
  } else if (slug.includes('ac-') || slug.includes('hvac') || slug.includes('air-condition') ||
             titleLower.includes('hvac') || titleLower.includes('air condition') || 
             slug.includes('heating') || slug.includes('cooling')) {
    return 'hvac';
  } else {
    return 'home-tips';
  }
}

// Helper to generate tags based on content
function generateTags(title: string, content: string, category: string): string[] {
  const tags: Set<string> = new Set();
  const text = (title + ' ' + content).toLowerCase();
  
  // Add category-specific tags
  if (category === 'hvac') {
    if (text.includes('repair')) tags.add('ac-repair');
    if (text.includes('maintenance') || text.includes('tune-up')) tags.add('hvac-maintenance');
    if (text.includes('installation') || text.includes('install')) tags.add('ac-installation');
    if (text.includes('replacement') || text.includes('replace')) tags.add('ac-replacement');
    if (text.includes('cooling')) tags.add('cooling');
    if (text.includes('tucson')) tags.add('tucson');
  } else if (category === 'solar') {
    if (text.includes('panel')) tags.add('solar-panels');
    if (text.includes('installation')) tags.add('solar-installation');
    if (text.includes('energy')) tags.add('solar-energy');
    if (text.includes('savings') || text.includes('save')) tags.add('cost-savings');
    if (text.includes('tucson')) tags.add('tucson');
  } else if (category === 'plumbing') {
    if (text.includes('repair')) tags.add('plumbing-repair');
    if (text.includes('drain')) tags.add('drain-cleaning');
    if (text.includes('pipe') || text.includes('repipe')) tags.add('repiping');
    if (text.includes('water heater')) tags.add('water-heaters');
    if (text.includes('tucson')) tags.add('tucson');
  }
  
  // Limit to 3-5 tags
  return Array.from(tags).slice(0, 5);
}

// Fetch and parse WordPress post
async function fetchWordPressPost(url: string): Promise<BlogPostData | null> {
  try {
    console.log(`Fetching: ${url}`);
    
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Failed to fetch ${url}: ${response.status}`);
      return null;
    }
    
    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    // Extract title
    const titleEl = document.querySelector('h1.entry-title, h1.post-title, h1, article h1');
    const title = titleEl?.textContent?.trim() || 'Untitled Post';
    
    // Extract content
    const contentEl = document.querySelector('article .entry-content, article .post-content, .post-content, .entry-content, article');
    if (!contentEl) {
      console.error(`No content found for ${url}`);
      return null;
    }
    
    // Remove unwanted elements
    contentEl.querySelectorAll('script, style, .share-buttons, .related-posts, .comments, nav').forEach(el => el.remove());
    
    const htmlContent = contentEl.innerHTML;
    const markdownContent = turndownService.turndown(htmlContent);
    
    // Extract/generate metadata
    const category = categorizePost(url, title);
    const slug = createSlug(title);
    const excerpt = createExcerpt(htmlContent);
    const tags = generateTags(title, markdownContent, category);
    
    // Try to extract publish date
    const dateEl = document.querySelector('time[datetime], .published, .entry-date');
    const publishedAt = dateEl?.getAttribute('datetime') || new Date().toISOString();
    
    return {
      url,
      title,
      content: markdownContent,
      excerpt,
      category,
      slug,
      publishedAt,
      author: 'Intelligent Design Team',
      tags,
      heroImage: `/attached_assets/generated_images/${slug}_placeholder.png`,
    };
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    return null;
  }
}

// Save blog post to markdown file
async function saveBlogPost(postData: BlogPostData): Promise<void> {
  const { category, slug, title, excerpt, publishedAt, author, tags, heroImage, content } = postData;
  
  // Get root directory (go up one level if running from scripts/)
  const rootDir = process.cwd().endsWith('/scripts') 
    ? path.join(process.cwd(), '..') 
    : process.cwd();
  
  // Create category directory if it doesn't exist
  const categoryDir = path.join(rootDir, 'public', 'content', 'blog', category);
  await fs.mkdir(categoryDir, { recursive: true });
  
  // Create frontmatter
  const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${excerpt.replace(/"/g, '\\"')}"
publishedAt: "${publishedAt}"
updatedAt: "${new Date().toISOString()}"
author: "${author}"
category: "${category}"
tags:
${tags.map(tag => `  - ${tag}`).join('\n')}
heroImage: "${heroImage}"
featured: false
canonicalUrl: "https://www.idesignac.com/blog/${category}/${slug}"
---

`;
  
  const fullContent = frontmatter + content;
  
  // Write to file
  const filePath = path.join(categoryDir, `${slug}.md`);
  await fs.writeFile(filePath, fullContent, 'utf-8');
  console.log(`✓ Saved: ${category}/${slug}.md`);
}

// Migrate multiple posts
async function migratePosts(urls: string[], batchSize: number = 5): Promise<void> {
  console.log(`\n=== Starting migration of ${urls.length} posts ===\n`);
  
  let successful = 0;
  let failed = 0;
  
  // Process in batches to avoid overwhelming the server
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    console.log(`\nProcessing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(urls.length / batchSize)}...`);
    
    const results = await Promise.all(
      batch.map(url => fetchWordPressPost(url))
    );
    
    for (const postData of results) {
      if (postData) {
        try {
          await saveBlogPost(postData);
          successful++;
        } catch (error) {
          console.error(`Failed to save post:`, error);
          failed++;
        }
      } else {
        failed++;
      }
    }
    
    // Small delay between batches
    if (i + batchSize < urls.length) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  console.log(`\n=== Migration Complete ===`);
  console.log(`Successful: ${successful}`);
  console.log(`Failed: ${failed}`);
}

// Export for use in other scripts
export { fetchWordPressPost, saveBlogPost, migratePosts };

// CLI usage
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Usage: npx tsx bulkMigrateBlog.ts <url1> <url2> ...');
    console.log('   or: npx tsx bulkMigrateBlog.ts --file urls.txt');
    process.exit(1);
  }
  
  let urls: string[] = [];
  
  if (args[0] === '--file' && args[1]) {
    // Read URLs from file
    const fileContent = await fs.readFile(args[1], 'utf-8');
    urls = fileContent.split('\n').map(line => line.trim()).filter(Boolean);
  } else {
    urls = args;
  }
  
  await migratePosts(urls);
}
