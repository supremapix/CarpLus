// /src/components/SchemaScript.tsx
// Injeta JSON-LD no <head> de forma segura (sem XSS)

import { Helmet } from 'react-helmet-async';

interface SchemaScriptProps {
  schema: object | object[];
}

export function SchemaScript({ schema }: SchemaScriptProps) {
  const schemas = Array.isArray(schema) ? schema : [schema];
  
  return (
    <Helmet>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
        >
          {JSON.stringify(s, null, 0)}
        </script>
      ))}
    </Helmet>
  );
}
