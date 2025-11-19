/**
 * Validate Article Schema on Blog Posts
 * 
 * This script verifies that Article schema is properly rendered on blog posts
 * by checking the JSON-LD markup in the generated HTML.
 * 
 * Usage: tsx scripts/validateArticleSchema.ts
 */

import * as fs from 'fs';
import * as path from 'path';

interface SchemaValidationResult {
  url: string;
  hasArticleSchema: boolean;
  hasBreadcrumbSchema: boolean;
  articleSchema?: any;
  errors: string[];
}

/**
 * Get list of sample blog posts to test
 */
function getSampleBlogPosts(): Array<{ category: string; slug: string }> {
  const blogDir = path.join(process.cwd(), 'public', 'content', 'blog');
  const samples: Array<{ category: string; slug: string }> = [];
  
  const categories = ['hvac', 'plumbing', 'roofing', 'electrical', 'solar', 'home-tips'];
  
  for (const category of categories) {
    const categoryDir = path.join(blogDir, category);
    if (!fs.existsSync(categoryDir)) continue;
    
    const files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.md'));
    
    // Take first post from each category
    if (files.length > 0) {
      const slug = files[0].replace('.md', '');
      samples.push({ category, slug });
    }
  }
  
  return samples;
}

/**
 * Validate a single blog post's schema
 */
async function validateBlogPostSchema(category: string, slug: string, baseUrl: string): Promise<SchemaValidationResult> {
  const url = `${baseUrl}/blog/${category}/${slug}`;
  const result: SchemaValidationResult = {
    url,
    hasArticleSchema: false,
    hasBreadcrumbSchema: false,
    errors: []
  };
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      result.errors.push(`HTTP ${response.status}: Failed to fetch page`);
      return result;
    }
    
    const html = await response.text();
    
    // Extract JSON-LD scripts
    const jsonLdRegex = /<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gis;
    const matches = [...html.matchAll(jsonLdRegex)];
    
    if (matches.length === 0) {
      result.errors.push('No JSON-LD schemas found on page');
      return result;
    }
    
    // Parse and validate schemas
    for (const match of matches) {
      try {
        const schema = JSON.parse(match[1]);
        
        if (schema['@type'] === 'Article') {
          result.hasArticleSchema = true;
          result.articleSchema = schema;
          
          // Validate required Article fields
          const requiredFields = ['headline', 'datePublished', 'author', 'publisher'];
          for (const field of requiredFields) {
            if (!schema[field]) {
              result.errors.push(`Missing required field: ${field}`);
            }
          }
          
          // Validate author structure
          if (schema.author && schema.author['@type'] !== 'Organization') {
            result.errors.push('Author should be of type Organization');
          }
          
          // Validate publisher structure
          if (schema.publisher) {
            if (schema.publisher['@type'] !== 'Organization') {
              result.errors.push('Publisher should be of type Organization');
            }
            if (!schema.publisher.logo || !schema.publisher.logo.url) {
              result.errors.push('Publisher must have logo with url');
            }
          }
        }
        
        if (schema['@type'] === 'BreadcrumbList') {
          result.hasBreadcrumbSchema = true;
        }
        
      } catch (parseError) {
        result.errors.push(`Failed to parse JSON-LD: ${parseError}`);
      }
    }
    
    if (!result.hasArticleSchema) {
      result.errors.push('No Article schema found (expected @type: Article)');
    }
    
    return result;
    
  } catch (error) {
    result.errors.push(`Error validating schema: ${error instanceof Error ? error.message : 'Unknown error'}`);
    return result;
  }
}

/**
 * Run validation on sample blog posts
 */
async function validateArticleSchemas() {
  console.log('📋 Validating Article Schema on Blog Posts...\n');
  
  const baseUrl = process.env.BASE_URL || 'http://localhost:5000';
  console.log(`Testing against: ${baseUrl}\n`);
  
  const samplePosts = getSampleBlogPosts();
  console.log(`Found ${samplePosts.length} sample blog posts to validate\n`);
  
  const results: SchemaValidationResult[] = [];
  
  for (const { category, slug } of samplePosts) {
    const result = await validateBlogPostSchema(category, slug, baseUrl);
    results.push(result);
    
    const icon = result.errors.length === 0 ? '✅' : '❌';
    console.log(`${icon} /${category}/${slug}`);
    
    if (result.hasArticleSchema) {
      console.log(`   ✓ Article schema present`);
    }
    if (result.hasBreadcrumbSchema) {
      console.log(`   ✓ Breadcrumb schema present`);
    }
    if (result.errors.length > 0) {
      result.errors.forEach(error => console.log(`   ✗ ${error}`));
    }
    console.log('');
  }
  
  console.log('📊 VALIDATION SUMMARY:\n');
  
  const passed = results.filter(r => r.errors.length === 0).length;
  const failed = results.filter(r => r.errors.length > 0).length;
  const withArticleSchema = results.filter(r => r.hasArticleSchema).length;
  const withBreadcrumbSchema = results.filter(r => r.hasBreadcrumbSchema).length;
  
  console.log(`✅ Passed: ${passed}/${results.length}`);
  console.log(`❌ Failed: ${failed}/${results.length}`);
  console.log(`📄 With Article Schema: ${withArticleSchema}/${results.length}`);
  console.log(`🍞 With Breadcrumb Schema: ${withBreadcrumbSchema}/${results.length}\n`);
  
  if (failed > 0) {
    console.log('⚠️  Some blog posts have schema validation errors.\n');
    process.exit(1);
  } else {
    console.log('✨ All tested blog posts have valid Article schema! ✨\n');
    
    // Display sample schema
    const sampleResult = results.find(r => r.articleSchema);
    if (sampleResult && sampleResult.articleSchema) {
      console.log('📋 Sample Article Schema:');
      console.log(JSON.stringify(sampleResult.articleSchema, null, 2));
      console.log('');
    }
  }
}

// Run the validation
validateArticleSchemas().catch(console.error);
