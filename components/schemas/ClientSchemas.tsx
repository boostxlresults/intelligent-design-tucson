"use client";

/**
 * Client-side JSON-LD Schema Renderer
 * 
 * Uses "use client" directive like GTM.tsx which successfully injects scripts.
 * This approach works around React 19's server-side script stripping by
 * injecting schemas after hydration on the client side.
 */

interface ClientSchemasProps {
  schemas: Array<Record<string, any>>;
}

export default function ClientSchemas({ schemas }: ClientSchemasProps) {
  // Filter out invalid schemas
  const validSchemas = schemas.filter(
    (schema) =>
      schema !== null &&
      schema !== undefined &&
      typeof schema === 'object' &&
      Object.keys(schema).length > 0
  );

  if (validSchemas.length === 0) return null;

  return (
    <>
      {validSchemas.map((schema, index) => (
        <script
          key={`client-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
