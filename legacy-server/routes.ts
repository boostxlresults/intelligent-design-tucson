import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";

// Server-side DOMPurify using jsdom
const window = new JSDOM('').window;
const purify = DOMPurify(window as unknown as Window);

export async function registerRoutes(app: Express): Promise<Server> {
  // Blog content API endpoint - returns parsed blog post
  app.get("/api/blog/:category/:slug", (req, res) => {
    const { category, slug } = req.params;
    const filePath = path.join(process.cwd(), "public", "content", "blog", category, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "Blog post not found" });
    }

    try {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      
      // Convert markdown to HTML
      const rawHtml = marked.parse(content) as string;
      const htmlContent = purify.sanitize(rawHtml, {
        ALLOWED_TAGS: [
          'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
          'p', 'br', 'strong', 'em', 'u', 'strike',
          'ul', 'ol', 'li',
          'a', 'img',
          'blockquote', 'code', 'pre',
          'table', 'thead', 'tbody', 'tr', 'th', 'td',
          'div', 'span',
        ],
        ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'id', 'target', 'rel'],
      });
      
      // Calculate reading time
      const wordsPerMinute = 200;
      const words = content.trim().split(/\s+/).length;
      const readingTime = Math.ceil(words / wordsPerMinute);
      
      // Extract table of contents
      const headingRegex = /^(#{1,6})\s+(.+)$/gm;
      const tableOfContents: Array<{ id: string; text: string; level: number }> = [];
      let match;
      
      while ((match = headingRegex.exec(content)) !== null) {
        const level = match[1].length;
        const text = match[2].trim();
        const id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');
        
        tableOfContents.push({ id, text, level });
      }
      
      res.json({
        frontmatter: data,
        content,
        htmlContent,
        readingTime,
        tableOfContents
      });
    } catch (error) {
      console.error("Error parsing blog post:", error);
      res.status(500).json({ error: "Failed to parse blog post" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
