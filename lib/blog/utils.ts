import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import type { BlogFrontmatter, BlogPost, BlogPostMeta, BlogCategory } from './types';

const BLOG_CONTENT_PATH = path.join(process.cwd(), 'public/content/blog');

/**
 * Calculate estimated reading time in minutes
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Get all blog posts metadata (for indexing and listing)
 */
export function getAllPostsMeta(): BlogPostMeta[] {
  const posts: BlogPostMeta[] = [];

  const categories = fs.readdirSync(BLOG_CONTENT_PATH)
    .filter(item => {
      const fullPath = path.join(BLOG_CONTENT_PATH, item);
      return fs.statSync(fullPath).isDirectory();
    });

  for (const category of categories) {
    const categoryPath = path.join(BLOG_CONTENT_PATH, category);
    const files = fs.readdirSync(categoryPath).filter(file => file.endsWith('.md'));

    for (const file of files) {
      const slug = file.replace(/\.md$/, '');
      const filePath = path.join(categoryPath, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);
      const frontmatter = data as BlogFrontmatter;

      posts.push({
        slug,
        category,
        title: frontmatter.title,
        description: frontmatter.description,
        heroImage: frontmatter.heroImage,
        publishedAt: frontmatter.publishedAt,
        updatedAt: frontmatter.updatedAt,
        featured: frontmatter.featured,
        tags: frontmatter.tags || []
      });
    }
  }

  // Sort by published date (newest first)
  return posts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

/**
 * Get all posts for a specific category
 */
export function getCategoryPosts(category: BlogCategory): BlogPostMeta[] {
  const allPosts = getAllPostsMeta();
  return allPosts.filter(post => post.category === category);
}

/**
 * Get a single blog post with full content
 */
export function getPost(category: string, slug: string): BlogPost | null {
  try {
    const filePath = path.join(BLOG_CONTENT_PATH, category, `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    const frontmatter = data as BlogFrontmatter;

    // Convert markdown to HTML
    const htmlContent = marked.parse(content) as string;

    return {
      slug,
      category,
      frontmatter,
      content,
      htmlContent,
      readingTime: calculateReadingTime(content)
    };
  } catch (error) {
    return null;
  }
}

/**
 * Get all possible blog post paths for static generation
 */
export function getAllPostPaths(): Array<{ category: string; slug: string }> {
  const paths: Array<{ category: string; slug: string }> = [];

  const categories = fs.readdirSync(BLOG_CONTENT_PATH)
    .filter(item => {
      const fullPath = path.join(BLOG_CONTENT_PATH, item);
      return fs.statSync(fullPath).isDirectory();
    });

  for (const category of categories) {
    const categoryPath = path.join(BLOG_CONTENT_PATH, category);
    const files = fs.readdirSync(categoryPath).filter(file => file.endsWith('.md'));

    for (const file of files) {
      const slug = file.replace(/\.md$/, '');
      paths.push({ category, slug });
    }
  }

  return paths;
}

/**
 * Get featured posts (for homepage or blog index)
 */
export function getFeaturedPosts(limit: number = 6): BlogPostMeta[] {
  const allPosts = getAllPostsMeta();
  const featured = allPosts.filter(post => post.featured);
  return featured.slice(0, limit);
}
