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
  /** Sections to preview where the guide is featured ("Inside this
      guide"). Take them from the guide's own SECTIONS so the preview and
      the H2s can't drift apart. */
  highlights?: GuideSection[];
  /** Which end-of-article CTA this guide carries. Alternate them across
      guides so the Playbook offer rotates through the set. */
  endCta: "practice" | "playbook";
};

/** One H2 section: its anchor id and heading text. */
export type GuideSection = { id: string; title: string };

export type Guide = {
  meta: GuideMeta;
  /** Every H2, in order. Builds the "In this guide" table of contents, so
      render the H2s from these same objects (see SECTIONS in each file). */
  sections: GuideSection[];
  /** "Key takeaways" box, 4 to 5 one-line points. Written only from what
      the guide itself says; no new claims. */
  takeaways: string[];
  /** The opening paragraph(s), before the takeaways box. */
  Intro: () => React.ReactNode;
  /** Everything from the first H2 on. */
  Body: () => React.ReactNode;
};
