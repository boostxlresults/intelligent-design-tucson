"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, List } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TOCItem {
  id: string;
  label: string;
  level?: number; // 2 for H2, 3 for H3
}

interface TableOfContentsProps {
  items: TOCItem[];
  className?: string;
  defaultExpanded?: boolean;
}

/**
 * Table of Contents / Jump-to-Section Component
 * 
 * Collapsible accordion that shows jump links to page sections.
 * Auto-detects H2 headings from content sections.
 * 
 * Position: Below the "Why Choose Intelligent Design" highlights section
 * Mobile: Collapsible accordion (collapsed by default)
 * Desktop: Collapsible accordion (expanded by default)
 */
export default function TableOfContents({ 
  items, 
  className,
  defaultExpanded = true 
}: TableOfContentsProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  if (!items || items.length === 0) {
    return null;
  }

  const handleJump = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header (approximately 80px)
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav 
      className={cn(
        "bg-white border border-gray-200 rounded-lg shadow-sm",
        className
      )}
      aria-label="Table of Contents"
      data-testid="nav-table-of-contents"
    >
      {/* Header - Always Visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors rounded-lg"
        aria-expanded={isExpanded}
        aria-controls="toc-content"
        data-testid="button-toc-toggle"
      >
        <div className="flex items-center gap-2">
          <List className="w-5 h-5 text-blue-600" />
          <span className="font-semibold text-gray-900">Jump to Section</span>
          <span className="text-sm text-gray-500">({items.length} sections)</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>

      {/* Expandable Content */}
      <div
        id="toc-content"
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 pb-4">
          <div className="border-t border-gray-100 pt-3">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {items.map((item, index) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleJump(item.id)}
                    className={cn(
                      "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                      "hover:bg-blue-50 hover:text-blue-700",
                      "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1",
                      item.level === 3 && "pl-6 text-gray-600"
                    )}
                    data-testid={`link-toc-${index}`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-blue-500 font-medium">{index + 1}.</span>
                      <span className="line-clamp-1">{item.label}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

/**
 * Helper function to extract TOC items from service page content sections
 * Finds all H2 headings and converts them to TOC items with IDs
 */
export function extractTOCFromSections(sections: any[]): TOCItem[] {
  const tocItems: TOCItem[] = [];
  
  sections.forEach((section, index) => {
    if (section.type === "heading" && (section.level === 2 || !section.level)) {
      // Generate URL-friendly ID from heading text
      const id = generateSlug(section.heading);
      tocItems.push({
        id,
        label: section.heading,
        level: section.level || 2
      });
    }
  });
  
  return tocItems;
}

/**
 * Generate a URL-friendly slug from text
 */
function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Remove consecutive hyphens
    .trim();
}

/**
 * Add standard sections that appear on all service pages
 */
export function addStandardTOCSections(tocItems: TOCItem[]): TOCItem[] {
  const standardSections: TOCItem[] = [
    { id: "faqs", label: "Frequently Asked Questions", level: 2 },
    { id: "reviews", label: "Customer Reviews", level: 2 },
    { id: "schedule", label: "Schedule Service", level: 2 },
  ];
  
  return [...tocItems, ...standardSections];
}
