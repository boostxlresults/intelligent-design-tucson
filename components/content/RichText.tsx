// Server Component — no 'use client' directive
// marked and processInternalLinks are pure functions with no browser APIs.
// Running this on the server removes ~16 KiB of marked JS from the client bundle
// and eliminates the useEffect hydration delay.
import { marked } from 'marked';
import { processInternalLinks } from '@/lib/seo/internalLinks';

interface RichTextProps {
  content: string;
  className?: string;
}

/**
 * RichText Component
 * 
 * Safely renders markdown content with proper formatting:
 * - **bold** → <strong>
 * - \n\n → paragraph breaks
 * - \n → line breaks
 * - - Item → bullet lists
 * - [link:knowledgehub.key:text] → internal links
 * 
 * Runs entirely on the server — no client-side JS required.
 */
export default function RichText({ content, className = '' }: RichTextProps) {
  if (!content) return null;

  // Process internal link tokens first
  const contentWithLinks = processInternalLinks(content);

  // Configure marked for service page content
  marked.setOptions({
    breaks: true, // Convert \n to <br>
    gfm: true,    // GitHub Flavored Markdown
  });

  // Parse markdown on the server
  const htmlContent = marked.parse(contentWithLinks) as string;

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
