import Image from "next/image";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { APP_PLAYBOOK_SIGNUP_URL, APP_SIGNUP_URL } from "../lib/links";

/* Shared building blocks for the inner pages. They reuse the homepage's
   exact class recipes (shell, eyebrow, button, callout) so a new page reads
   as the same hand. App links stay plain <a> with the bare APP_* constants:
   Attribution.tsx finds and decorates them by href prefix. */

export const PRIMARY_BUTTON =
  "inline-block w-full rounded-md bg-accent px-8 py-4 text-center text-base font-semibold text-background transition-colors sm:w-auto hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export const SECONDARY_BUTTON =
  "inline-flex w-full items-center justify-center rounded-md border border-border bg-transparent px-6 py-4 text-base font-medium text-text-secondary transition-colors sm:w-auto hover:border-text-secondary hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export const TEXT_LINK =
  "text-text-primary underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-accent";

/** Section eyebrow: the small amber label, with a short amber bar under it
    (32px by 2px, drawn as ::after so it's one element and screen readers
    only get the text). `center` centres the bar with centred text. `as`
    makes it a heading when the label is the only title a block has. */
export function Eyebrow({
  children,
  center = false,
  as: Tag = "p",
  id,
}: {
  children: React.ReactNode;
  center?: boolean;
  as?: "p" | "h2";
  id?: string;
}) {
  return (
    <Tag
      id={id}
      className={`mb-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent after:mt-2 after:block after:h-0.5 after:w-8 after:bg-accent after:content-[''] ${
        center ? "after:mx-auto" : ""
      }`}
    >
      {children}
    </Tag>
  );
}

/** Top of every inner page. Owns the page's single h1. */
export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-6 pt-[64px] pb-[40px] lg:px-12 lg:pt-[96px] lg:pb-[56px]">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mb-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-text-primary md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {children && (
            <div className="text-lg leading-relaxed text-text-secondary">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/** Standard section shell: same widths and rhythm as the homepage. */
export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={id ? "scroll-mt-20" : undefined}>
      <div
        className={`mx-auto w-full max-w-7xl px-6 py-[48px] lg:px-12 lg:py-[72px] ${className}`}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-8 lg:mb-10">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mb-4 font-display text-3xl font-bold leading-tight text-text-primary lg:text-4xl">
        {title}
      </h2>
      {children && (
        <div className="max-w-3xl text-lg leading-relaxed text-text-secondary">
          {children}
        </div>
      )}
    </div>
  );
}

/** Closing conversion block. Amber button = create the free account; the
    outlined one sends a cold visitor to the no-account taster on the home
    page instead. */
export function CtaBlock({
  title = "Hear how you actually sound before the board does.",
  children,
  band = false,
}: {
  title?: string;
  children?: React.ReactNode;
  /** Full-bleed raised band with hairlines, the /how-it-works closing
      treatment. Default is the hairline-topped block. */
  band?: boolean;
}) {
  return (
    <section className={band ? "border-y border-border bg-surface" : undefined}>
      <div className="mx-auto w-full max-w-7xl px-6 py-[72px] lg:px-12 lg:py-[112px]">
        <div
          className={`mx-auto max-w-2xl text-center ${
            band ? "" : "border-t border-border pt-[56px] lg:pt-[72px]"
          }`}
        >
          <h2 className="mb-5 font-display text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
            {title}
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-text-secondary">
            {children ??
              "Answer a real oral board question out loud and get it scored against its rubric. No account needed for the first one."}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a href={APP_SIGNUP_URL} className={PRIMARY_BUTTON}>
              Create a free account
            </a>
            <Link href="/#try" className={SECONDARY_BUTTON}>
              Try one question first
            </Link>
          </div>
          <p className="mt-4 text-base text-text-muted">
            Free while in beta. No credit card.
          </p>
        </div>
      </div>
    </section>
  );
}

/** The Board Day Playbook pitch, shown sitewide just before each page's
    closing CTA. A raised surface with the amber left accent so it reads as
    its own block, not page background. From 1080px it adds the in-app
    preview screenshot beside the copy; below that it is copy and buttons
    only. `narrow` keeps the buttons stacked until xl, for columns narrower
    than the page (guides). The screenshot frame copies ScreenSlot's browser
    frame classes; ScreenSlot itself can't be used here because this module
    is also imported by client components and ScreenSlot reads the
    filesystem. */
export function PlaybookPromo({
  headingLevel = "h2",
  narrow = false,
}: {
  headingLevel?: "h2" | "h3";
  narrow?: boolean;
}) {
  const Heading = headingLevel;
  return (
    <div className="border border-border border-l-2 border-l-accent bg-surface-raised p-8 lg:p-12">
      <div className="min-[1080px]:grid min-[1080px]:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] min-[1080px]:items-center min-[1080px]:gap-12">
        <div>
          <p className="mb-3 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            Free with an account
          </p>
          <Heading className="mb-3 font-display text-3xl font-bold leading-tight text-text-primary lg:text-4xl">
            The Board Day Playbook
          </Heading>
          <p className="max-w-2xl text-base leading-relaxed text-text-secondary lg:text-lg">
            Everything for the day of your oral board, from the night before
            to the thank-you note. It&apos;s waiting on your dashboard when you
            sign up.
          </p>
          <div
            className={`mt-8 flex flex-col gap-3 ${
              narrow ? "sm:flex-row min-[1080px]:flex-col xl:flex-row" : "sm:flex-row"
            }`}
          >
            <a href={APP_PLAYBOOK_SIGNUP_URL} data-cta="playbook" className={PRIMARY_BUTTON}>
              Get the Playbook
            </a>
            <Link href="/playbook" className={SECONDARY_BUTTON}>
              See what&apos;s inside
            </Link>
          </div>
        </div>
        <div className="hidden min-[1080px]:block">
          <div className="overflow-hidden rounded-[6px] border-[1.5px] border-text-muted bg-device-body shadow-[0_6px_8px_-2px_rgba(0,0,0,0.9)]">
            <div aria-hidden="true" className="flex items-center gap-1.5 px-2.5 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-device-detail" />
              <span className="h-1.5 w-1.5 rounded-full bg-device-detail" />
              <span className="h-1.5 w-1.5 rounded-full bg-device-detail" />
            </div>
            <div className="relative aspect-[16/10] w-full overflow-hidden border-t border-device-detail bg-device-screen">
              <Image
                src="/screens/playbook/playbook-preview-desktop.png"
                alt="The Board Day Playbook open in the First Call app"
                fill
                sizes="(max-width: 1079px) 1px, 560px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
