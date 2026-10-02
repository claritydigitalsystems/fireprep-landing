import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import JsonLd from "../components/JsonLd";
import {
  CtaBlock,
  PageHeader,
  PRIMARY_BUTTON,
  SECONDARY_BUTTON,
  TEXT_LINK,
} from "../components/PageParts";
import { APP_PLAYBOOK_SIGNUP_URL } from "../lib/links";
import { pageMetadata } from "../lib/site";
import { breadcrumbLd } from "../lib/schema";
import { offPathGuides, readingPath, type PathStep } from "./_content";
import { GuideCard } from "./_content/GuideCard";

export const metadata = pageMetadata({
  title: "Fire Oral Board Guides",
  description:
    "Short, practical guides to preparing for the fire service oral board, written by a firefighter. How panels score, how to practice, and handling nerves.",
  path: "/guides",
});

/* Structure, top to bottom (and the mobile order): hero with author line,
   the featured first step of the reading path, the rest of the path as
   numbered cards, any guides not on the path, the Playbook card, the
   closing CTA band. Path order and labels live in _content/index.ts. */

const SHELL = "mx-auto w-full max-w-7xl px-6 lg:px-12";

/** Step 1 of the path, at full width. Two columns at 768px+: the pitch on
    the left, "Inside this guide" on the right (the guide's own section
    headings, from meta.highlights). Mobile stacks the list between the
    summary and the link. Not one big link, because the section items link
    into the article: the title and "Read the guide" carry the main link. */
function FeaturedGuide({ step }: { step: PathStep }) {
  const { meta } = step;
  const href = `/guides/${meta.slug}`;
  const highlights = meta.highlights ?? [];

  return (
    <article className="grid grid-cols-1 gap-y-6 rounded-md border border-border-strong bg-surface p-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:grid-rows-[auto_1fr] md:gap-x-10 md:p-8 lg:gap-x-14">
      <div>
        <p className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-display text-3xl font-bold leading-none text-text-secondary lg:text-4xl">
            {String(step.step).padStart(2, "0")}
          </span>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-text-primary">
            {step.label}
          </span>
          <span className="text-base text-text-muted">· {meta.readMinutes} min read</span>
        </p>
        <h2 className="mb-3 font-display text-2xl font-bold leading-tight text-text-primary md:text-3xl lg:text-4xl">
          <Link href={href} className="transition-colors hover:text-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
            {meta.title}
          </Link>
        </h2>
        <p className="text-base leading-relaxed text-text-secondary md:text-lg">
          {meta.summary}
        </p>
      </div>

      {highlights.length > 0 && (
        <div className="border-t border-border pt-6 md:col-start-2 md:row-span-2 md:row-start-1 md:border-t-0 md:border-l md:pt-0 md:pl-10 lg:pl-14">
          <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-text-muted">
            Inside this guide
          </h3>
          <ul className="divide-y divide-border">
            {highlights.map((h) => (
              <li key={h.id}>
                <Link
                  href={`${href}#${h.id}`}
                  className="flex min-h-[44px] items-center gap-3 py-2 text-base text-text-secondary transition-colors hover:text-text-primary"
                >
                  <span aria-hidden="true" className="h-px w-3 shrink-0 bg-accent" />
                  {h.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Link
        href={href}
        className="inline-flex items-center gap-2 self-end justify-self-start text-base font-semibold text-text-primary transition-colors hover:text-accent md:row-start-2"
      >
        Read the guide
        <span className="sr-only">: {meta.title}</span>
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}

/** The Playbook, set apart from the guides: amber rail, square corners
    (.fp-callout). Same two buttons as the homepage PlaybookPromo: the
    amber one straight to signup (src=playbook), the outlined one to the
    teaser page. */
function PlaybookCard() {
  return (
    <div className="fp-callout p-6 md:p-8 lg:p-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="max-w-2xl">
          <p className="mb-2 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            Free with an account
          </p>
          <h2 className="mb-2 font-display text-2xl font-bold leading-snug text-text-primary lg:text-3xl">
            The Board Day Playbook
          </h2>
          <p className="text-base leading-relaxed text-text-secondary md:text-lg">
            The guides get you ready. The Playbook covers the day itself, from
            the night before to the thank-you note.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col xl:flex-row">
          <a href={APP_PLAYBOOK_SIGNUP_URL} data-cta="playbook" className={PRIMARY_BUTTON}>
            Get the Playbook
          </a>
          <Link href="/playbook" className={SECONDARY_BUTTON}>
            See what&apos;s inside
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function GuidesIndex() {
  const [featured, ...rest] = readingPath();
  const more = offPathGuides();

  return (
    <main className="flex flex-col bg-background">
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ])}
      />

      <PageHeader eyebrow="Guides" title="Prepare for the oral board like it counts.">
        <p>
          Short, practical guides to the fire service oral board, written by a
          firefighter. How you&apos;re scored, how to practice, and how to
          show up ready. No scripts, no model answers.
        </p>
        <p className="mt-4 text-base text-text-muted">
          Written by{" "}
          <Link href="/about" className={TEXT_LINK}>
            Scott
          </Link>
          , a firefighter who went through close to ten oral boards.
        </p>
      </PageHeader>

      <section aria-label="Reading path">
        <div className={`${SHELL} pb-[16px]`}>
          {featured && <FeaturedGuide step={featured} />}

          {rest.length > 0 && (
            <ol className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              {rest.map((s) => (
                <li key={s.meta.slug}>
                  <GuideCard meta={s.meta} step={{ n: s.step, label: s.label }} />
                </li>
              ))}
            </ol>
          )}

          {more.length > 0 && (
            <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {more.map((m) => (
                <li key={m.slug}>
                  <GuideCard meta={m} />
                </li>
              ))}
            </ul>
          )}

          <div className="mt-10 lg:mt-14">
            <PlaybookCard />
          </div>
        </div>
      </section>

      <div className="mt-[56px] lg:mt-[80px]">
        <CtaBlock band />
      </div>
    </main>
  );
}
