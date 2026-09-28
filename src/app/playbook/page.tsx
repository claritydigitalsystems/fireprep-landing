import Link from "next/link";
import JsonLd from "../components/JsonLd";
import {
  Eyebrow,
  PRIMARY_BUTTON,
  Section,
  SectionHeading,
  TEXT_LINK,
} from "../components/PageParts";
import { APP_PLAYBOOK_SIGNUP_URL } from "../lib/links";
import { pageMetadata } from "../lib/site";
import { breadcrumbLd } from "../lib/schema";

export const metadata = pageMetadata({
  title: "The Board Day Playbook",
  description:
    "A free guide to the day of your fire oral board, from the night before to the thank-you note. Create a free First Call account and it's on your dashboard.",
  path: "/playbook",
});

/* Teaser only. The Playbook itself lives in the app behind signup; this page
   sells it and never reproduces it. Every CTA carries src=playbook (kept by
   Attribution.tsx alongside any UTMs). */

// TODO-VERIFY: chapter titles and one-liners are placeholders until Scott's
// final Playbook outline. Swap them here; nothing else depends on them.
const CHAPTERS: { title: string; body: string }[] = [
  { title: "The week before", body: "How to taper your prep, what to confirm, and what to stop doing." },
  { title: "The night before", body: "What to review, what to leave alone, and how to get to sleep." },
  { title: "What to wear and bring", body: "The outfit, the documents, and the small things people forget." },
  { title: "Arrival", body: "When to get there, what to do while you wait, and how to walk in." },
  { title: "In the room", body: "Greeting the panel, pacing your answers, and recovering from a rough one." },
  { title: "After the board", body: "The thank-you note, what to write down, and what happens next." },
  { title: "One-page checklist", body: "Everything above on a single page you can check off the morning of." },
];

function GetItButton() {
  return (
    <a href={APP_PLAYBOOK_SIGNUP_URL} className={PRIMARY_BUTTON}>
      Get the free Playbook
    </a>
  );
}

export default function PlaybookPage() {
  return (
    <main className="flex flex-col bg-background">
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "The Board Day Playbook", path: "/playbook" },
        ])}
      />

      <section>
        <div className="mx-auto w-full max-w-7xl px-6 pt-[64px] pb-[40px] lg:px-12 lg:pt-[96px] lg:pb-[56px]">
          <div className="max-w-3xl">
            <Eyebrow>Free with an account</Eyebrow>
            <h1 className="mb-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-text-primary md:text-5xl lg:text-6xl">
              The Board Day Playbook
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-text-secondary lg:text-xl">
              Everything for the day of your oral board, from the night before
              to the thank-you note. You&apos;ve put in the prep. This makes
              sure nothing on the day gets in the way of it.
            </p>
            <GetItButton />
            <p className="mt-4 text-base text-text-muted">
              Free while in beta. Signing in with Google is the fastest way in.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl">
          <SectionHeading eyebrow="What's inside" title="Seven short chapters, in the order you'll need them." />
          <ol className="border-t border-border">
            {CHAPTERS.map((c, i) => (
              <li
                key={c.title}
                className="grid grid-cols-[40px_1fr] gap-x-4 border-b border-border py-5 lg:grid-cols-[56px_1fr]"
              >
                <span
                  aria-hidden="true"
                  className={`font-display text-2xl font-bold leading-none ${
                    i === CHAPTERS.length - 1 ? "text-accent" : "text-text-secondary"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mb-1 font-display text-xl font-bold text-text-primary lg:text-2xl">
                    {c.title}
                  </h3>
                  <p className="text-base leading-relaxed text-text-secondary">{c.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <SectionHeading eyebrow="How to get it" title="Create a free account. It's on your dashboard." />
          <ol className="mb-8 space-y-3 text-lg leading-relaxed text-text-secondary">
            <li className="flex gap-3">
              <span className="font-semibold text-text-primary">1.</span>
              <span>Create
              a free First Call account. Google sign-in is the fastest.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-text-primary">2.</span>
              <span>Open
              your dashboard. The Playbook is there, ready to read.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-text-primary">3.</span>
              <span>While
              you&apos;re in, run a practice board and hear how you sound.</span>
            </li>
          </ol>
          <div className="fp-callout mb-10 p-5">
            <p className="text-base leading-relaxed text-text-secondary">
              The Playbook covers the day. The practice is what gets you ready
              for it.{" "}
              <Link href="/how-it-works" className={TEXT_LINK}>
                See how First Call scores your answers
              </Link>
              .
            </p>
          </div>
          <GetItButton />
          <p className="mt-6 text-base text-text-muted">
            Still weeks out? Start with{" "}
            <Link href="/guides/how-to-prepare-for-a-firefighter-oral-board" className={TEXT_LINK}>
              how to prepare for a firefighter oral board
            </Link>
            .
          </p>
        </div>
      </Section>
    </main>
  );
}
