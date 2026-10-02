/** Structured data as a native script tag, per the Next JSON-LD guide.
    `<` is escaped so no string in the payload can close the tag early. */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
