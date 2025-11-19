import { sql } from "drizzle-orm";
import { pgTable, text, varchar, serial, timestamp, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Blog Category Schema
export const blogCategories = pgTable('blog_categories', {
  id: serial('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  name: text('name').notNull(),
  description: text('description'),
  icon: text('icon'),
});

export type BlogCategory = typeof blogCategories.$inferSelect;

// Blog Post Schema  
export const blogPosts = pgTable('blog_posts', {
  id: serial('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  excerpt: text('excerpt'),
  content: text('content').notNull(),
  heroImage: text('hero_image'),
  publishedAt: timestamp('published_at').notNull(),
  updatedAt: timestamp('updated_at'),
  readingTime: integer('reading_time'),
  categoryId: integer('category_id').references(() => blogCategories.id),
  tags: text('tags').array(),
  featured: boolean('featured').default(false),
  oldUrl: text('old_url'),
  canonicalUrl: text('canonical_url'),
  relatedServices: text('related_services').array(),
});

export type BlogPost = typeof blogPosts.$inferSelect;
export const insertBlogPostSchema = createInsertSchema(blogPosts);
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
