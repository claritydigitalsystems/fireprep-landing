/** A guide is one content file exporting `guide: Guide`. To publish a new
    one: add the file to this folder (the leading underscore on _content
    keeps it out of routing), then add it to GUIDES in index.ts.
    Routing, metadata, JSON-LD, the sitemap, the index card and related
    links all build from `meta`. */
export type GuideMeta = {
  /** URL segment: /guides/<slug>. Never change after publishing. */
  slug: string;
  /** The h1 and the <title>. No em dashes. */
  title: string;
  /** Meta description and OG description, around 150 characters. */
  description: string;
  /** One line for the index card. */
  summary: string;
  /** ISO date, YYYY-MM-DD. */
  published: string;
  updated?: string;
  readMinutes: number;
  /** Slugs shown under "Keep reading". Falls back to the other guides. */
  related?: string[];
  /** Which end-of-article CTA this guide carries. Alternate them across
      guides so the Playbook offer rotates through the set. */
  endCta: "practice" | "playbook";
};

export type Guide = {
  meta: GuideMeta;
  Body: () => React.ReactNode;
};
