import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';

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

interface BlogCategory {
  slug: string;
  name: string;
  description: string;
  count: number;
}

interface BlogIndex {
  posts: BlogPost[];
  categories: BlogCategory[];
}

const CATEGORY_NAMES: Record<string, string> = {
  'hvac': 'HVAC & AC',
  'solar': 'Solar Energy',
  'plumbing': 'Plumbing',
  'roofing': 'Roofing',
  'electrical': 'Electrical',
  'home-tips': 'Home Tips'
};

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  'hvac': 'Expert HVAC and air conditioning tips, maintenance guides, and repair advice for Tucson homeowners.',
  'solar': 'Solar energy insights, installation guides, and tips for maximizing your solar investment in Tucson.',
  'plumbing': 'Plumbing maintenance tips, repair guides, and water conservation advice from our expert team.',
  'roofing': 'Roofing maintenance, repair guides, and weather preparation tips for Tucson homes.',
  'electrical': 'Electrical safety tips, upgrade guides, and energy efficiency advice for your home.',
  'home-tips': 'General home maintenance tips, seasonal preparation guides, and homeowner advice for Tucson living.'
};

/**
 * Calculate reading time based on word count
 */
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Generate excerpt from content
 */
function generateExcerpt(content: string, maxLength: number = 160): string {
  // Remove markdown formatting
  const plainText = content
    .replace(/#{1,6}\s+/g, '') // Remove headers
    .replace(/\*\*(.+?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.+?)\*/g, '$1') // Remove italic
    .replace(/\[(.+?)\]\(.+?\)/g, '$1') // Remove links
    .replace(/`(.+?)`/g, '$1') // Remove code
    .replace(/\n/g, ' ') // Remove newlines
    .trim();

  if (plainText.length <= maxLength) {
    return plainText;
  }

  return plainText.substring(0, maxLength).trim() + '...';
}

/**
 * Read all markdown files from content/blog directory
 */
function getAllBlogPosts(): BlogPost[] {
  const posts: BlogPost[] = [];
  // Get root directory (go up one level if running from scripts/)
  const rootDir = process.cwd().endsWith('/scripts') 
    ? path.join(process.cwd(), '..') 
    : process.cwd();
  const contentDir = path.join(rootDir, 'public', 'content', 'blog');

  // Get all category directories
  const categories = fs.readdirSync(contentDir).filter(item => {
    const itemPath = path.join(contentDir, item);
    return fs.statSync(itemPath).isDirectory();
  });

  for (const category of categories) {
    const categoryDir = path.join(contentDir, category);
    const files = fs.readdirSync(categoryDir).filter(file => file.endsWith('.md'));

    for (const file of files) {
      const filePath = path.join(categoryDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      const slug = path.basename(file, '.md');
      const readingTime = calculateReadingTime(content);
      const description = data.description || generateExcerpt(content);

      posts.push({
        slug,
        title: data.title || 'Untitled',
        description,
        category,
        tags: data.tags || [],
        heroImage: data.heroImage || '',
        publishedAt: data.publishedAt || new Date().toISOString(),
        author: data.author || 'Intelligent Design Team',
        readingTime,
        featured: data.featured || false
      });
    }
  }

  // Sort by published date (newest first)
  posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return posts;
}

/**
 * Generate category statistics
 */
function generateCategories(posts: BlogPost[]): BlogCategory[] {
  const categoryMap: Map<string, number> = new Map();

  posts.forEach(post => {
    categoryMap.set(post.category, (categoryMap.get(post.category) || 0) + 1);
  });

  return Array.from(categoryMap.entries()).map(([slug, count]) => ({
    slug,
    name: CATEGORY_NAMES[slug] || slug,
    description: CATEGORY_DESCRIPTIONS[slug] || '',
    count
  }));
}

/**
 * Generate the blog index
 */
export function generateBlogIndex(): BlogIndex {
  const posts = getAllBlogPosts();
  const categories = generateCategories(posts);

  return {
    posts,
    categories
  };
}

// CLI execution
console.log('🔄 Generating blog index...\n');

const blogIndex = generateBlogIndex();

// Get root directory (go up one level if running from scripts/)
const rootDir = process.cwd().endsWith('/scripts') 
  ? path.join(process.cwd(), '..') 
  : process.cwd();

// Ensure output directory exists
const outputDir = path.join(rootDir, 'client', 'src', 'data');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Write blogIndex.json
const outputPath = path.join(outputDir, 'blogIndex.json');
fs.writeFileSync(outputPath, JSON.stringify(blogIndex, null, 2), 'utf-8');

console.log('✅ Blog index generated successfully!\n');
console.log(`📊 Statistics:`);
console.log(`   - Total Posts: ${blogIndex.posts.length}`);
console.log(`   - Categories: ${blogIndex.categories.length}`);
console.log(`   - Featured Posts: ${blogIndex.posts.filter(p => p.featured).length}\n`);

blogIndex.categories.forEach(cat => {
  console.log(`   📁 ${cat.name}: ${cat.count} posts`);
});

console.log(`\n📝 Output: ${outputPath}`);
