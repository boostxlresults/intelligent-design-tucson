/**
 * Generate unique AI hero images for all blog posts
 * 
 * This script:
 * 1. Reads blogIndex.json
 * 2. For each post, generates a contextual AI image based on title and category
 * 3. Updates markdown frontmatter with new image path
 * 4. Regenerates blogIndex.json
 */

import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';

const rootDir = process.cwd();

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  heroImage: string;
  publishedAt: string;
  author: string;
  readingTime: number;
  featured: boolean;
}

interface BlogIndex {
  posts: BlogPost[];
  categories: any[];
}

// Category-specific prompt templates
const categoryPrompts: Record<string, string> = {
  hvac: "Professional HVAC service scene in Tucson Arizona home showing",
  solar: "Modern solar panel installation in sunny Tucson Arizona showing",
  plumbing: "Professional plumbing service in Tucson home showing",
  roofing: "Professional roofing work on Tucson Arizona home showing",
  electrical: "Professional electrician working in Tucson home showing",
  "home-tips": "Modern Tucson Arizona home interior showing",
};

/**
 * Generate a descriptive prompt for image generation based on post title and category
 */
function generateImagePrompt(title: string, category: string): { prompt: string; summary: string } {
  const basePrompt = categoryPrompts[category] || "Professional home service in Tucson Arizona showing";
  
  // Extract key concepts from title
  const titleLower = title.toLowerCase();
  let specificContext = "";
  
  // Common topics
  if (titleLower.includes("repair")) specificContext = "technician repairing equipment";
  else if (titleLower.includes("install")) specificContext = "installation work in progress";
  else if (titleLower.includes("maintenance") || titleLower.includes("tune")) specificContext = "maintenance service";
  else if (titleLower.includes("energy") || titleLower.includes("efficient")) specificContext = "energy-efficient equipment";
  else if (titleLower.includes("cost") || titleLower.includes("price")) specificContext = "modern equipment and tools";
  else if (titleLower.includes("emergency")) specificContext = "urgent service call";
  else if (titleLower.includes("upgrade")) specificContext = "equipment upgrade";
  else if (titleLower.includes("tip") || titleLower.includes("guide")) specificContext = "helpful home service scenario";
  else specificContext = "professional service work";
  
  const prompt = `${basePrompt} ${specificContext}, bright modern setting, clean professional appearance, blue work uniforms, American flag shoulder patches, high quality photography, natural lighting, realistic, professional, no text on clothing`;
  
  // Create a 4-5 word summary
  const words = title.split(' ').slice(0, 4).join(' ').toLowerCase().replace(/[^a-z0-9\s]/g, '');
  const summary = words.substring(0, 30);
  
  return { prompt, summary };
}

/**
 * Generate negative prompt to avoid common AI mistakes
 */
function getNegativePrompt(): string {
  return "text on clothing, company names, logos with text, words on uniforms, name patches with text, blurry, low quality, distorted faces, extra limbs, deformed";
}

/**
 * Main execution
 */
async function main() {
  console.log('🎨 Blog Image Generation Script');
  console.log('================================\n');
  
  // Read blog index
  const blogIndexPath = path.join(rootDir, 'client', 'src', 'data', 'blogIndex.json');
  const blogIndex: BlogIndex = JSON.parse(fs.readFileSync(blogIndexPath, 'utf-8'));
  
  console.log(`📚 Found ${blogIndex.posts.length} blog posts\n`);
  
  // Group posts by category
  const postsByCategory: Record<string, BlogPost[]> = {};
  for (const post of blogIndex.posts) {
    if (!postsByCategory[post.category]) {
      postsByCategory[post.category] = [];
    }
    postsByCategory[post.category].push(post);
  }
  
  // Display plan
  console.log('📋 Generation Plan:');
  for (const [category, posts] of Object.entries(postsByCategory)) {
    console.log(`   - ${category}: ${posts.length} images`);
  }
  console.log('\n');
  
  // Process each category
  let totalGenerated = 0;
  for (const [category, posts] of Object.entries(postsByCategory)) {
    console.log(`\n🎨 Processing ${category} category (${posts.length} posts)...`);
    
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      const { prompt, summary } = generateImagePrompt(post.title, post.category);
      
      console.log(`\n[${i + 1}/${posts.length}] ${post.title}`);
      console.log(`   Slug: ${post.slug}`);
      console.log(`   Prompt: ${prompt.substring(0, 80)}...`);
      console.log(`   ⚠️  MANUAL: Use generate_image_tool with:`);
      console.log(`       prompt: "${prompt}"`);
      console.log(`       summary: "${summary}"`);
      console.log(`       negative_prompt: "${getNegativePrompt()}"`);
      console.log(`       aspect_ratio: "16:9"`);
      console.log(`   Then update markdown file at: public/content/blog/${post.category}/${post.slug}.md`);
      
      totalGenerated++;
      
      // For now, just generate prompts
      // In actual implementation, would call image generation API here
    }
  }
  
  console.log(`\n\n✅ Generated prompts for ${totalGenerated} images`);
  console.log(`\n📝 Next steps:`);
  console.log(`   1. Review generated prompts above`);
  console.log(`   2. Use generate_image_tool for each post (batched approach recommended)`);
  console.log(`   3. Update markdown frontmatter with new heroImage paths`);
  console.log(`   4. Run generateBlogIndex.ts to update blogIndex.json`);
}

main().catch(console.error);
