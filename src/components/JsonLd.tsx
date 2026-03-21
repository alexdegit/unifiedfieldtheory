/**
 * JSON-LD structured data component for SEO.
 * Only receives developer-defined data objects, never user input.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  // JSON.stringify produces safe JSON output from developer-defined objects.
  // No user input flows into this component.
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
