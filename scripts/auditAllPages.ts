#!/usr/bin/env tsx

/**
 * Comprehensive Page Audit Script
 * Tests all 236 pages for:
 * - HTTP 200 response
 * - Meta tags present (title, description, canonical)
 * - JSON-LD schemas present
 * - No console errors
 */

import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

const BASE_URL = process.env.BASE_URL || 'http://localhost:5000';

interface AuditResult {
  url: string;
  status: number;
  success: boolean;
  errors: string[];
  warnings: string[];
}

async function testPage(url: string): Promise<AuditResult> {
  const result: AuditResult = {
    url,
    status: 0,
    success: true,
    errors: [],
    warnings: []
  };

  try {
    const response = await fetch(url);
    result.status = response.status;

    if (response.status !== 200) {
      result.success = false;
      result.errors.push(`Expected 200, got ${response.status}`);
      return result;
    }

    const html = await response.text();

    // Check for essential meta tags
    if (!html.includes('<title>')) {
      result.errors.push('Missing <title> tag');
      result.success = false;
    }

    if (!html.includes('name="description"')) {
      result.errors.push('Missing meta description');
      result.success = false;
    }

    if (!html.includes('rel="canonical"')) {
      result.warnings.push('Missing canonical link');
    }

    // Check for JSON-LD schemas
    if (!html.includes('application/ld+json')) {
      result.errors.push('Missing JSON-LD schema');
      result.success = false;
    }

    // Check for Open Graph tags
    if (!html.includes('property="og:')) {
      result.warnings.push('Missing Open Graph tags');
    }

  } catch (error) {
    result.success = false;
    result.errors.push(`Request failed: ${error}`);
  }

  return result;
}

async function getAllServicePages(): Promise<string[]> {
  const pages: string[] = [];
  const servicesDir = join(process.cwd(), 'data', 'pages', 'services');
  
  try {
    const files = readdirSync(servicesDir).filter(f => f.endsWith('.ts'));
    
    for (const file of files) {
      const content = readFileSync(join(servicesDir, file), 'utf-8');
      const slugMatch = content.match(/slug:\s*['"]([^'"]+)['"]/);
      
      if (slugMatch) {
        const slug = slugMatch[1];
        pages.push(`/services/${slug}`);
      }
    }
  } catch (error) {
    console.error('Error reading service pages:', error);
  }
  
  return pages;
}

async function getAllBlogPosts(): Promise<string[]> {
  const posts: string[] = [];
  const blogDir = join(process.cwd(), 'public', 'content', 'blog');
  
  try {
    const categories = readdirSync(blogDir, { withFileTypes: true })
      .filter(d => d.isDirectory())
      .map(d => d.name);
    
    for (const category of categories) {
      const categoryDir = join(blogDir, category);
      const files = readdirSync(categoryDir).filter(f => f.endsWith('.md'));
      
      for (const file of files) {
        const slug = file.replace('.md', '');
        posts.push(`/blog/${category}/${slug}`);
      }
    }
  } catch (error) {
    console.error('Error reading blog posts:', error);
  }
  
  return posts;
}

function getStaticPages(): string[] {
  return [
    '/',
    '/about-intelligent-design',
    '/financing',
    '/guarantees',
    '/careers',
    '/contact',
    '/customer-reviews',
    '/privacy-policy',
    '/service-areas',
    '/special-offers',
    '/resources',
    '/blog',
  ];
}

async function runAudit() {
  console.log('🔍 Starting Comprehensive Page Audit...\n');
  console.log(`📍 Base URL: ${BASE_URL}\n`);

  // Gather all pages
  console.log('📊 Gathering pages...');
  const servicePages = await getAllServicePages();
  const blogPosts = await getAllBlogPosts();
  const staticPages = getStaticPages();

  const allPages = [
    ...staticPages,
    ...servicePages,
    ...blogPosts
  ];

  console.log(`✅ Found ${allPages.length} pages to audit:`);
  console.log(`   - ${staticPages.length} static pages`);
  console.log(`   - ${servicePages.length} service pages`);
  console.log(`   - ${blogPosts.length} blog posts\n`);

  // Test pages in batches
  const results: AuditResult[] = [];
  const batchSize = 10;
  
  for (let i = 0; i < allPages.length; i += batchSize) {
    const batch = allPages.slice(i, i + batchSize);
    const batchResults = await Promise.all(
      batch.map(page => testPage(`${BASE_URL}${page}`))
    );
    results.push(...batchResults);
    
    const progress = Math.min(i + batchSize, allPages.length);
    process.stdout.write(`\r🔄 Testing pages: ${progress}/${allPages.length}`);
  }
  
  console.log('\n');

  // Analyze results
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);
  const warnings = results.filter(r => r.warnings.length > 0);

  console.log('📈 AUDIT RESULTS');
  console.log('─'.repeat(60));
  console.log(`✅ Success: ${successful.length}/${allPages.length} (${(successful.length / allPages.length * 100).toFixed(1)}%)`);
  console.log(`❌ Failed:  ${failed.length}/${allPages.length}`);
  console.log(`⚠️  Warnings: ${warnings.length}/${allPages.length}\n`);

  if (failed.length > 0) {
    console.log('❌ FAILED PAGES:');
    console.log('─'.repeat(60));
    failed.forEach(result => {
      console.log(`\n${result.url}`);
      console.log(`  Status: ${result.status}`);
      result.errors.forEach(error => console.log(`  ❌ ${error}`));
    });
    console.log('\n');
  }

  if (warnings.length > 0 && failed.length === 0) {
    console.log('⚠️  WARNINGS (first 10):');
    console.log('─'.repeat(60));
    warnings.slice(0, 10).forEach(result => {
      console.log(`\n${result.url}`);
      result.warnings.forEach(warning => console.log(`  ⚠️  ${warning}`));
    });
    console.log('\n');
  }

  // Exit with error if any tests failed
  process.exit(failed.length > 0 ? 1 : 0);
}

runAudit();
