import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../components/JsonLd";
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
import type { GuideMeta } from "../_content/types";

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

/** End-of-article CTA. Guides alternate between the two via meta.endCta,
    so the Playbook offer rotates through the set. */
function EndCta({ variant }: { variant: GuideMeta["endCta"] }) {
  if (variant === "playbook") return <PlaybookPromo />;
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
  const { meta, Body } = guide;
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
        <header className="mx-auto w-full max-w-7xl px-6 pt-[48px] pb-[32px] lg:px-12 lg:pt-[80px] lg:pb-[48px]">
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
        </header>

        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
          <div className="max-w-[68ch] border-t border-border pt-10 lg:pt-12">
            <Body />
          </div>
        </div>
      </article>

      <section aria-label="Next step">
        <div className="mx-auto w-full max-w-7xl px-6 pt-[40px] lg:px-12 lg:pt-[56px]">
          <div className="max-w-4xl">
            <EndCta variant={meta.endCta} />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section aria-labelledby="keep-reading">
          <div className="mx-auto w-full max-w-7xl px-6 py-[56px] lg:px-12 lg:py-[80px]">
            <h2
              id="keep-reading"
              className="mb-6 font-display text-3xl font-bold leading-tight text-text-primary"
            >
              Keep reading
            </h2>
            <ul className="grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
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
