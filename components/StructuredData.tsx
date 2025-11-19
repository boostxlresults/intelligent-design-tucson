/**
 * StructuredData Component
 * 
 * Injects JSON-LD structured data into page HTML for SSR
 * Used for local business, service, review, FAQ, and breadcrumb schema
 * Uses raw script tags (not next/script) for proper server-side rendering
 * This ensures search engines and AI crawlers see schemas in initial HTML
 */

interface StructuredDataProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

export function StructuredData({ data }: StructuredDataProps) {
  const jsonLd = Array.isArray(data) ? data : [data];
  console.log(`[StructuredData] Rendering ${jsonLd.length} schemas`);
  
  return (
    <>
      {jsonLd.map((schema, index) => (
        <script
          key={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(schema).replace(/</g, '\\u003c') 
          }}
        />
      ))}
    </>
  );
}
