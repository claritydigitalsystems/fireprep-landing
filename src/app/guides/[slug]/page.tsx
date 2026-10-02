import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { notFound } from "next/navigation";
import JsonLd from "../../components/JsonLd";
import { SectionToc } from "../../components/SectionToc";
import {
  Eyebrow,
  PlaybookPromo,
  PRIMARY_BUTTON,
  SECONDARY_BUTTON,
  TEXT_LINK,
} from "../../components/PageParts";
import { APP_SIGNUP_URL } from "../../lib/links";
import { OG_IMAGE, pageMetadata, SITE_URL } from "../../lib/site";
import { breadcrumbLd, FOUNDER_ID, ORG_ID } from "../../lib/schema";
import { formatDate, getGuide, GUIDES, relatedGuides } from "../_content";
import { GuideCard } from "../_content/GuideCard";
import type { GuideMeta, GuideSection } from "../_content/types";

/* Layout. Below 1080px the whole page is one centred column at the
   readable article width (68ch). From 1080px the article gets a sticky
   "In this guide" sidebar, and the header, end CTA and "Keep reading" span
   both columns, so every block shares one left edge and one right edge.
   ch resolves against the 16px root size on both wrappers, so the two
   widths line up exactly. */
const PAGE_GUTTER = "px-6 lg:px-12";
const LAYOUT = "mx-auto w-full max-w-[68ch] min-[1080px]:max-w-[calc(68ch+19rem)]";

// Every guide is prerendered at build; an unknown slug is a 404, never a
// runtime render.
export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.meta.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  const { meta } = guide;
  const base = pageMetadata({
    title: meta.title,
    description: meta.description,
    path: `/guides/${meta.slug}`,
    type: "article",
  });
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: meta.published,
      modifiedTime: meta.updated ?? meta.published,
      authors: [`${SITE_URL}/about`],
    },
  };
}

function articleLd(meta: GuideMeta) {
  const url = `${SITE_URL}/guides/${meta.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.published,
    dateModified: meta.updated ?? meta.published,
    image: `${SITE_URL}${OG_IMAGE.url}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    author: {
      "@type": "Person",
      "@id": FOUNDER_ID,
      name: "Scott Shimala",
      url: `${SITE_URL}/about`,
    },
    publisher: { "@id": ORG_ID },
  };
}

/** "In this guide" below 1080px: a closed-by-default disclosure under the
    byline. Plain <details>, so it works without JavaScript. */
function TocDetails({ sections }: { sections: GuideSection[] }) {
  return (
    <details className="group mt-8 rounded-md border border-border bg-surface min-[1080px]:hidden">
      <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 px-5 py-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent [&::-webkit-details-marker]:hidden">
        In this guide
        <ChevronDown
          className="h-4 w-4 shrink-0 motion-safe:transition-transform group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <nav aria-label="In this guide" className="border-t border-border px-5 py-3">
        <ol>
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="block py-2 text-base leading-snug text-text-secondary transition-colors hover:text-text-primary"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </details>
  );
}

/** Sits between the intro and the first H2. */
function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <section
      aria-labelledby="key-takeaways"
      className="mt-2 mb-12 rounded-md border border-border bg-surface p-6 lg:p-7"
    >
      <Eyebrow as="h2" id="key-takeaways">
        Key takeaways
      </Eyebrow>
      <ul className="mt-4 space-y-3 text-base leading-[1.6] text-text-primary lg:text-lg">
        {items.map((t) => (
          <li
            key={t}
            className="relative pl-6 before:absolute before:left-0 before:top-[0.8em] before:h-px before:w-3 before:bg-accent"
          >
            {t}
          </li>
        ))}
      </ul>
    </section>
  );
}

/** End-of-article CTA. Guides alternate between the two via meta.endCta,
    so the Playbook offer rotates through the set. */
function EndCta({ variant }: { variant: GuideMeta["endCta"] }) {
  if (variant === "playbook") return <PlaybookPromo narrow />;
  return (
    <div className="fp-callout p-6 lg:p-8">
      <h2 className="mb-2 font-display text-2xl font-bold leading-snug text-text-primary lg:text-3xl">
        Practice it out loud, and see how it scores.
      </h2>
      <p className="mb-6 max-w-2xl text-base leading-relaxed text-text-secondary">
        First Call asks you real oral board questions and scores every answer
        against a rubric written for that question. Free while in beta.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
        <a href={APP_SIGNUP_URL} className={PRIMARY_BUTTON}>
          Create a free account
        </a>
        <Link href="/#try" className={SECONDARY_BUTTON}>
          Try one question first
        </Link>
      </div>
    </div>
  );
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const { meta, sections, takeaways, Intro, Body } = guide;
  const related = relatedGuides(meta);

  return (
    <main className="flex flex-col bg-background">
      <JsonLd data={articleLd(meta)} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: meta.title, path: `/guides/${meta.slug}` },
        ])}
      />

      <article>
        <header className={`${PAGE_GUTTER} pt-[48px] pb-[32px] lg:pt-[80px] lg:pb-[48px]`}>
          <div className={LAYOUT}>
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-base text-text-muted">
                <li>
                  <Link href="/guides" className="transition-colors hover:text-text-primary">
                    Guides
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="truncate text-text-secondary">
                  {meta.title}
                </li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <Eyebrow>Guide</Eyebrow>
              <h1 className="mb-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-text-primary md:text-5xl lg:text-6xl">
                {meta.title}
              </h1>
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base text-text-muted">
                <span>
                  By{" "}
                  <Link href="/about" className={TEXT_LINK}>
                    Scott Shimala
                  </Link>
                  , firefighter
                </span>
                <span aria-hidden="true">·</span>
                <time dateTime={meta.updated ?? meta.published}>
                  {formatDate(meta.updated ?? meta.published)}
                </time>
                <span aria-hidden="true">·</span>
                <span>{meta.readMinutes} min read</span>
              </p>
            </div>
            <TocDetails sections={sections} />
          </div>
        </header>

        <div className={PAGE_GUTTER}>
          <div
            className={`${LAYOUT} border-t border-border pt-10 lg:pt-12 min-[1080px]:grid min-[1080px]:grid-cols-[minmax(0,68ch)_15rem] min-[1080px]:gap-x-16`}
          >
            <div className="min-w-0">
              <Intro />
              <KeyTakeaways items={takeaways} />
              <Body />
            </div>
            <aside className="hidden min-[1080px]:block">
              <div className="sticky top-24">
                <SectionToc sections={sections} />
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Board Day Playbook promo, sitewide rule: before the closing CTA.
          Guides whose end CTA already IS the promo skip it, so it never
          shows twice. */}
      {meta.endCta !== "playbook" && (
        <section
          aria-label="The Board Day Playbook"
          className={`${PAGE_GUTTER} pt-[40px] lg:pt-[56px]`}
        >
          <div className={LAYOUT}>
            <PlaybookPromo narrow />
          </div>
        </section>
      )}

      <section aria-label="Next step" className={`${PAGE_GUTTER} pt-[40px] lg:pt-[56px]`}>
        <div className={LAYOUT}>
          <EndCta variant={meta.endCta} />
        </div>
      </section>

      {related.length > 0 && (
        <section
          aria-labelledby="keep-reading"
          className={`${PAGE_GUTTER} py-[56px] lg:py-[80px]`}
        >
          <div className={LAYOUT}>
            <h2
              id="keep-reading"
              className="mb-6 font-display text-3xl font-bold leading-tight text-text-primary"
            >
              Keep reading
            </h2>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {related.map((m) => (
                <li key={m.slug}>
                  <GuideCard meta={m} headingLevel="h3" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}
