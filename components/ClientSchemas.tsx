'use client';

/**
 * ClientSchemas Component
 * 
 * Client-side component to render JSON-LD schemas
 * Workaround for Next.js App Router server component script tag limitation
 */

interface ClientSchemasProps {
  schemas: Array<Record<string, unknown>>;
}

export function ClientSchemas({ schemas }: ClientSchemasProps) {
  console.log(`[ClientSchemas] Rendering ${schemas.length} schemas on client`);
  
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`client-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, '\\u003c')
          }}
        />
      ))}
    </>
  );
}
