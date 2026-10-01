#!/usr/bin/env node
/**
 * Writes data/routeIndex.json: every real /services/<slug> and /blog/<cat>/<slug>
 * on the site. lib/routeResolver.ts uses it so a redirect never lands on a
 * URL that does not exist.
 *
 * Why: the Oct 1 2026 Moz crawl found 45 internal 404s, almost all of them
 * redirects to pages that are not there (old blog slugs sent to
 * /services/<slug> by the keyword heuristic, blog redirects pointing at the
 * full-length slug when the file on disk is truncated at 60 characters, and
 * service links to slugs that were never built).
 *
 * Runs on prebuild. The JSON is committed too, so the Edge middleware has it
 * even when the script is skipped.
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const manifest = JSON.parse(readFileSync(join(root, "data/pages/services/manifest.json"), "utf8"));
const services = Object.keys(manifest.services).sort();

// Category landing routes under app/services/<dir>/page.tsx are real pages too.
const serviceDirs = readdirSync(join(root, "app/services"), { withFileTypes: true })
  .filter((d) => d.isDirectory() && !d.name.startsWith("[") && existsSync(join(root, "app/services", d.name, "page.tsx")))
  .map((d) => d.name);

const blogRoot = join(root, "public/content/blog");
const blog = {};
for (const cat of readdirSync(blogRoot, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name)) {
  for (const f of readdirSync(join(blogRoot, cat))) {
    if (!f.endsWith(".md")) continue;
    const slug = f.slice(0, -3);
    // First category wins if a slug is duplicated across categories.
    if (!blog[slug]) blog[slug] = cat;
  }
}

const out = { generatedAt: new Date().toISOString().slice(0, 10), services, serviceDirs: serviceDirs.sort(), blog };
writeFileSync(join(root, "data/routeIndex.json"), JSON.stringify(out, null, 0) + "\n");
console.log(`route index: ${services.length} services, ${serviceDirs.length} service category pages, ${Object.keys(blog).length} blog posts`);
