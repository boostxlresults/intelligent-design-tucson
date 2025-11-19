#!/usr/bin/env node
/**
 * Automated Route Verification Script
 * 
 * Tests all routes in the Intelligent Design Next.js application:
 * - Service routes from manifest (354 total)
 * - Blog routes (231 posts + 6 categories + index)
 * - Special pages (privacy-policy, resources, special-offers)
 * - Core pages (contact, careers, financing, etc.)
 * 
 * Verifies HTTP 200 responses and optional SEO metadata
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = process.env.BASE_URL || 'http://localhost:5000';
const VERIFY_SEO = process.env.VERIFY_SEO === 'true';

// Color output for terminal
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

const stats = {
  total: 0,
  passed: 0,
  failed: 0,
  errors: [],
};

async function testRoute(url, description = '') {
  stats.total++;
  try {
    const response = await fetch(url);
    const status = response.status;
    
    if (status === 200) {
      stats.passed++;
      if (process.env.VERBOSE) {
        console.log(`${colors.green}✓${colors.reset} ${url} ${description}`);
      }
      
      // Optional SEO verification
      if (VERIFY_SEO) {
        const html = await response.text();
        const hasTitle = /<title>/.test(html);
        const hasDescription = /<meta[^>]*name="description"/.test(html);
        
        if (!hasTitle || !hasDescription) {
          console.log(`${colors.yellow}⚠${colors.reset} SEO missing on ${url} (title:${hasTitle}, desc:${hasDescription})`);
        }
      }
      
      return true;
    } else {
      stats.failed++;
      const error = `HTTP ${status}: ${url} ${description}`;
      stats.errors.push(error);
      console.log(`${colors.red}✗${colors.reset} ${error}`);
      return false;
    }
  } catch (error) {
    stats.failed++;
    const errorMsg = `Error: ${url} - ${error.message}`;
    stats.errors.push(errorMsg);
    console.log(`${colors.red}✗${colors.reset} ${errorMsg}`);
    return false;
  }
}

async function getAllBlogPosts() {
  const blogDir = path.join(__dirname, '../public/content/blog');
  const categories = ['hvac', 'plumbing', 'solar', 'electrical', 'roofing', 'home-tips'];
  
  const posts = [];
  
  for (const category of categories) {
    const categoryDir = path.join(blogDir, category);
    try {
      const files = await fs.readdir(categoryDir);
      for (const file of files) {
        if (file.endsWith('.md')) {
          const slug = file.replace('.md', '');
          posts.push({ category, slug });
        }
      }
    } catch (error) {
      console.error(`${colors.yellow}⚠${colors.reset} Could not read category ${category}: ${error.message}`);
    }
  }
  
  return posts;
}

async function getServiceRoutes() {
  const manifestPath = path.join(__dirname, '../data/pages/services/manifest.json');
  try {
    const manifestData = await fs.readFile(manifestPath, 'utf-8');
    const manifest = JSON.parse(manifestData);
    
    const routes = [];
    
    // Add canonical service routes: /services/{service}
    if (manifest.services) {
      Object.keys(manifest.services).forEach(canonicalSlug => {
        routes.push({ path: `/services/${canonicalSlug}`, type: 'canonical' });
      });
    }
    
    // Add alias routes: /services/{alias}
    if (manifest.aliases) {
      Object.keys(manifest.aliases).forEach(alias => {
        routes.push({ path: `/services/${alias}`, type: 'alias' });
      });
    }
    
    // Add location-specific routes: /services/{service}/{location}
    if (manifest.locationServiceCombos) {
      Object.entries(manifest.locationServiceCombos).forEach(([combo, service]) => {
        routes.push({ path: `/services/${combo}`, type: 'location-combo' });
      });
    }
    
    // Add location pages if they exist
    if (manifest.locations) {
      Object.keys(manifest.locations).forEach(location => {
        routes.push({ path: `/service-areas/${location}`, type: 'location' });
      });
    }
    
    return routes;
  } catch (error) {
    console.error(`${colors.red}✗${colors.reset} Could not read service manifest: ${error.message}`);
    return [];
  }
}

async function main() {
  console.log(`${colors.cyan}════════════════════════════════════════════════════════${colors.reset}`);
  console.log(`${colors.cyan}   Intelligent Design Route Verification${colors.reset}`);
  console.log(`${colors.cyan}════════════════════════════════════════════════════════${colors.reset}\n`);
  
  console.log(`Testing against: ${colors.blue}${BASE_URL}${colors.reset}`);
  console.log(`SEO verification: ${VERIFY_SEO ? colors.green + 'enabled' : colors.yellow + 'disabled'}${colors.reset}\n`);
  
  // Test homepage
  console.log(`${colors.cyan}Testing Core Pages...${colors.reset}`);
  await testRoute(`${BASE_URL}/`, 'Homepage');
  
  // Test core pages
  const corePages = [
    '/contact',
    '/careers',
    '/financing',
    '/guarantees',
    '/customer-reviews',
    '/service-areas',
  ];
  
  for (const page of corePages) {
    await testRoute(`${BASE_URL}${page}`, `Core: ${page}`);
  }
  
  // Test special pages
  console.log(`\n${colors.cyan}Testing Special Pages...${colors.reset}`);
  await testRoute(`${BASE_URL}/privacy-policy`, 'Privacy Policy');
  await testRoute(`${BASE_URL}/resources`, 'Resources');
  await testRoute(`${BASE_URL}/special-offers`, 'Special Offers');
  
  // Test blog routes
  console.log(`\n${colors.cyan}Testing Blog Routes...${colors.reset}`);
  await testRoute(`${BASE_URL}/blog`, 'Blog Index');
  
  // Test blog categories
  const blogCategories = ['hvac', 'plumbing', 'solar', 'electrical', 'roofing', 'home-tips'];
  console.log(`Testing ${blogCategories.length} blog categories...`);
  for (const category of blogCategories) {
    await testRoute(`${BASE_URL}/blog/${category}`, `Blog Category: ${category}`);
  }
  
  // Test blog posts
  console.log(`\n${colors.cyan}Testing Blog Posts...${colors.reset}`);
  const blogPosts = await getAllBlogPosts();
  console.log(`Found ${blogPosts.length} blog posts to test`);
  
  let blogTestCount = 0;
  const maxBlogTests = process.env.TEST_ALL_BLOGS ? blogPosts.length : Math.min(20, blogPosts.length);
  
  for (const post of blogPosts.slice(0, maxBlogTests)) {
    await testRoute(`${BASE_URL}/blog/${post.category}/${post.slug}`, `Blog: ${post.category}/${post.slug}`);
    blogTestCount++;
  }
  
  if (blogTestCount < blogPosts.length) {
    console.log(`${colors.yellow}ℹ${colors.reset} Tested ${blogTestCount}/${blogPosts.length} blog posts (set TEST_ALL_BLOGS=true to test all)`);
  }
  
  // Test service routes
  console.log(`\n${colors.cyan}Testing Service Routes...${colors.reset}`);
  const serviceRoutes = await getServiceRoutes();
  console.log(`Found ${serviceRoutes.length} service routes to test`);
  
  let serviceTestCount = 0;
  const maxServiceTests = process.env.TEST_ALL_SERVICES ? serviceRoutes.length : Math.min(30, serviceRoutes.length);
  
  for (const route of serviceRoutes.slice(0, maxServiceTests)) {
    await testRoute(`${BASE_URL}${route.path}`, `Service: ${route.path}`);
    serviceTestCount++;
  }
  
  if (serviceTestCount < serviceRoutes.length) {
    console.log(`${colors.yellow}ℹ${colors.reset} Tested ${serviceTestCount}/${serviceRoutes.length} service routes (set TEST_ALL_SERVICES=true to test all)`);
  }
  
  // Print summary
  console.log(`\n${colors.cyan}════════════════════════════════════════════════════════${colors.reset}`);
  console.log(`${colors.cyan}   Summary${colors.reset}`);
  console.log(`${colors.cyan}════════════════════════════════════════════════════════${colors.reset}\n`);
  
  console.log(`Total routes tested: ${stats.total}`);
  console.log(`${colors.green}Passed: ${stats.passed}${colors.reset}`);
  console.log(`${colors.red}Failed: ${stats.failed}${colors.reset}`);
  
  const successRate = ((stats.passed / stats.total) * 100).toFixed(1);
  console.log(`Success rate: ${successRate >= 95 ? colors.green : colors.yellow}${successRate}%${colors.reset}\n`);
  
  if (stats.failed > 0) {
    console.log(`${colors.red}Failed Routes:${colors.reset}`);
    stats.errors.forEach(error => console.log(`  ${colors.red}•${colors.reset} ${error}`));
    console.log();
    process.exit(1);
  } else {
    console.log(`${colors.green}✓ All routes passed!${colors.reset}\n`);
    process.exit(0);
  }
}

main().catch(error => {
  console.error(`${colors.red}Fatal error:${colors.reset}`, error);
  process.exit(1);
});
