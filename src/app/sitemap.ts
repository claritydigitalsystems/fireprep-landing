import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";
import { GUIDES } from "./guides/_content";

// Bump when a page's content meaningfully changes. Guides carry their own
// dates in their meta.
const PAGES_UPDATED = "2026-09-28";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/how-it-works", priority: 0.9 },
    { path: "/guides", priority: 0.8 },
    { path: "/playbook", priority: 0.7 },
    { path: "/about", priority: 0.7 },
    { path: "/faq", priority: 0.7 },
  ];

  return [
    ...pages.map(({ path, priority }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...GUIDES.map(({ meta }) => ({
      url: `${SITE_URL}/guides/${meta.slug}`,
      lastModified: meta.updated ?? meta.published,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
