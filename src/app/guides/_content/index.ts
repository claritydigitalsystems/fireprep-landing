import type { Guide, GuideMeta } from "./types";
import { guide as prepare } from "./how-to-prepare-for-a-firefighter-oral-board";
import { guide as lookFor } from "./what-oral-boards-look-for";
import { guide as nerves } from "./interview-nerves";

/** Every published guide, in index order. Adding a guide = one content file
    in this folder + one entry here. */
export const GUIDES: Guide[] = [prepare, lookFor, nerves];

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
