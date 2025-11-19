'use client';

import { marked } from 'marked';
import { useEffect, useState } from 'react';
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
 * Uses marked for parsing with sanitized output
 */
export default function RichText({ content, className = '' }: RichTextProps) {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    if (!content) {
      setHtmlContent('');
      return;
    }

    // Process internal link tokens first
    const contentWithLinks = processInternalLinks(content);

    // Configure marked for service page content
    marked.setOptions({
      breaks: true, // Convert \n to <br>
      gfm: true, // GitHub Flavored Markdown
    });

    // Parse markdown (marked already sanitizes by default)
    const html = marked.parse(contentWithLinks) as string;
    setHtmlContent(html);
  }, [content]);

  if (!htmlContent) return null;

  return (
    <div 
      className={className}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
