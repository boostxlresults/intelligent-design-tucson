/**
 * Schema Rendering Helper
 * Returns <script type="application/ld+json"> nodes for direct rendering in server components
 * 
 * This is the ONLY approach that works reliably in Next.js 16 App Router.
 * DO NOT wrap in a component - must be rendered directly in page components.
 */

export function renderSchemas(schemas: Array<Record<string, any> | null | undefined>) {
  // Filter out falsy/empty schemas
  const validSchemas = schemas.filter(
    (schema): schema is Record<string, any> => 
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
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
