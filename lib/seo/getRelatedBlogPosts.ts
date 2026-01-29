import { promises as fs } from 'fs';
import path from 'path';
import { getCategoriesForService } from './internalLinking';

interface BlogPostMeta {
  slug: string;
  category: string;
  title: string;
  description: string;
  readingTime: number;
}

function parseReadingTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.ceil(words / 200);
}

function parseFrontmatter(content: string): { title?: string; description?: string } {
  const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return {};
  
  const frontmatter = frontmatterMatch[1];
  const titleMatch = frontmatter.match(/title:\s*["']?([^"'\n]+)["']?/);
  const descMatch = frontmatter.match(/description:\s*["']?([^"'\n]+)["']?/);
  
  return {
    title: titleMatch?.[1]?.trim(),
    description: descMatch?.[1]?.trim(),
  };
}

export async function getRelatedBlogPostsForService(
  serviceType: string, 
  limit: number = 3
): Promise<BlogPostMeta[]> {
  const categories = getCategoriesForService(serviceType);
  const posts: BlogPostMeta[] = [];
  
  for (const category of categories) {
    try {
      const dirPath = path.join(process.cwd(), 'public', 'content', 'blog', category);
      const files = await fs.readdir(dirPath);
      const mdFiles = files.filter(file => file.endsWith('.md')).slice(0, 5);
      
      for (const file of mdFiles) {
        if (posts.length >= limit) break;
        
        const filePath = path.join(dirPath, file);
        const content = await fs.readFile(filePath, 'utf-8');
        const { title, description } = parseFrontmatter(content);
        
        if (title) {
          posts.push({
            slug: file.replace('.md', ''),
            category,
            title,
            description: description || '',
            readingTime: parseReadingTime(content),
          });
        }
      }
    } catch (e) {
      // Category directory may not exist
    }
    
    if (posts.length >= limit) break;
  }
  
  return posts.slice(0, limit);
}

// Service slug to service type mapping
export function getServiceTypeFromSlug(slug: string): string {
  if (!slug) return 'hvac';
  
  const lowerSlug = slug.toLowerCase();
  
  if (lowerSlug.includes('hvac') || lowerSlug.includes('ac-') || lowerSlug.includes('heat') || lowerSlug.includes('duct') || lowerSlug.includes('air-quality')) {
    return 'hvac';
  }
  if (lowerSlug.includes('plumb') || lowerSlug.includes('water-heater') || lowerSlug.includes('leak') || lowerSlug.includes('toilet') || lowerSlug.includes('sink') || lowerSlug.includes('faucet')) {
    return 'plumbing';
  }
  if (lowerSlug.includes('solar') || lowerSlug.includes('panel')) {
    return 'solar';
  }
  if (lowerSlug.includes('electr') || lowerSlug.includes('wiring') || lowerSlug.includes('outlet') || lowerSlug.includes('circuit') || lowerSlug.includes('generac') || lowerSlug.includes('lighting')) {
    return 'electrical';
  }
  if (lowerSlug.includes('roof') || lowerSlug.includes('shingle') || lowerSlug.includes('tile') || lowerSlug.includes('flat')) {
    return 'roofing';
  }
  if (lowerSlug.includes('drain') || lowerSlug.includes('sewer') || lowerSlug.includes('rooter')) {
    return 'plumbing';
  }
  
  return 'hvac'; // default
}

// Get diverse blog posts for location pages (one from each major category)
export async function getRelatedBlogPostsForLocation(
  limit: number = 3
): Promise<BlogPostMeta[]> {
  const priorityCategories = ['hvac', 'plumbing', 'solar', 'electrical', 'roofing', 'home-tips'];
  const posts: BlogPostMeta[] = [];
  
  for (const category of priorityCategories) {
    if (posts.length >= limit) break;
    
    try {
      const dirPath = path.join(process.cwd(), 'public', 'content', 'blog', category);
      const files = await fs.readdir(dirPath);
      const mdFiles = files.filter(file => file.endsWith('.md'));
      
      if (mdFiles.length > 0) {
        const randomFile = mdFiles[Math.floor(Math.random() * Math.min(5, mdFiles.length))];
        const filePath = path.join(dirPath, randomFile);
        const content = await fs.readFile(filePath, 'utf-8');
        const { title, description } = parseFrontmatter(content);
        
        if (title) {
          posts.push({
            slug: randomFile.replace('.md', ''),
            category,
            title,
            description: description || '',
            readingTime: parseReadingTime(content),
          });
        }
      }
    } catch (e) {
      // Category directory may not exist
    }
  }
  
  return posts.slice(0, limit);
}
