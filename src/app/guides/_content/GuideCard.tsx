import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { GuideMeta } from "./types";

/** Index and "Keep reading" card. The whole card is the link; the title is
    the link text, so screen readers hear the guide name, not "read more". */
export function GuideCard({
  meta,
  headingLevel = "h2",
}: {
  meta: GuideMeta;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <Link
      href={`/guides/${meta.slug}`}
      className="group flex h-full flex-col rounded-md border border-border bg-surface p-6 transition-colors hover:border-border-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:p-7"
    >
      <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-text-muted">
        {meta.readMinutes} min read
      </p>
      <Heading className="mb-3 font-display text-2xl font-bold leading-snug text-text-primary">
        {meta.title}
      </Heading>
      <p className="mb-6 text-base leading-relaxed text-text-secondary">
        {meta.summary}
      </p>
      <span
        aria-hidden="true"
        className="mt-auto inline-flex items-center gap-2 text-base font-semibold text-text-secondary transition-colors group-hover:text-accent"
      >
        Read the guide
        <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
