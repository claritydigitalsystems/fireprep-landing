import type { Guide, GuideMeta } from "./types";
import { guide as prepare } from "./how-to-prepare-for-a-firefighter-oral-board";
import { guide as lookFor } from "./what-oral-boards-look-for";
import { guide as nerves } from "./interview-nerves";

/** Every published guide, in index order. Adding a guide = one content file
    in this folder + one entry here. */
export const GUIDES: Guide[] = [prepare, lookFor, nerves];

/** The /guides reading path, in order. The first entry is the featured
    "Start here" guide. To add a guide to the path, add its slug and a short
    step label; guides left off the path still publish and are listed after
    it on the index. */
export const READING_PATH: { slug: string; label: string }[] = [
  { slug: "how-to-prepare-for-a-firefighter-oral-board", label: "Start here" },
  { slug: "what-oral-boards-look-for", label: "What boards look for" },
  { slug: "interview-nerves", label: "Handling nerves" },
];

export type PathStep = { meta: GuideMeta; step: number; label: string };

export function readingPath(): PathStep[] {
  return READING_PATH.flatMap((entry, i) => {
    const meta = getGuide(entry.slug)?.meta;
    return meta ? [{ meta, step: i + 1, label: entry.label }] : [];
  });
}

/** Published guides that aren't on the reading path. */
export function offPathGuides(): GuideMeta[] {
  const onPath = new Set(READING_PATH.map((e) => e.slug));
  return GUIDES.map((g) => g.meta).filter((m) => !onPath.has(m.slug));
}

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.meta.slug === slug);
}

export function relatedGuides(meta: GuideMeta, limit = 2): GuideMeta[] {
  const picked = (meta.related ?? [])
    .map((slug) => getGuide(slug)?.meta)
    .filter((m): m is GuideMeta => Boolean(m));
  const rest = GUIDES.map((g) => g.meta).filter(
    (m) => m.slug !== meta.slug && !picked.some((p) => p.slug === m.slug),
  );
  return [...picked, ...rest].slice(0, limit);
}

/** "September 28, 2026". Parsed as UTC so the date never slips a day. */
export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
