import Link from "next/link";
import {
  Clock,
  EyeOff,
  ListChecks,
  Volume2,
  type LucideIcon,
} from "lucide-react";
import DeviceMockup from "../components/DeviceMockup";
import JsonLd from "../components/JsonLd";
import {
  Eyebrow,
  PRIMARY_BUTTON,
  SECONDARY_BUTTON,
  SectionHeading,
  TEXT_LINK,
} from "../components/PageParts";
import ScreenSlot, { ScreenFill, slotPaths } from "../components/ScreenSlot";
import { APP_SIGNUP_URL } from "../lib/links";
import { pageMetadata } from "../lib/site";
import { breadcrumbLd } from "../lib/schema";

export const metadata = pageMetadata({
  title: "How It Works",
  description:
    "Answer real fire oral board questions out loud, on a timer, and get every answer scored criterion by criterion against a rubric written for that question.",
  path: "/how-it-works",
});

/* Page system:
   - One container (Shell) and one left edge for every section. Nothing is
     indented relative to its heading.
   - Each section has a different composition so the page never repeats a
     recipe: split hero, alternating loop rows, annotated screen, split
     practice, wide progress screen, closing CTA.
   - Screens are ScreenSlots. Captures go in /public/screens/how-it-works/
     as <slot id>-desktop.png and <slot id>-mobile.png. */

function Shell({
  children,
  label,
  band = false,
}: {
  children: React.ReactNode;
  label?: string;
  /** Full-bleed surface band with hairlines top and bottom. Content still
      sits in the standard container. */
  band?: boolean;
}) {
  return (
    <section
      aria-label={label}
      className={band ? "border-y border-border bg-surface" : undefined}
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-[72px] lg:px-12 lg:py-[112px]">
        {children}
      </div>
    </section>
  );
}

const BODY = "text-base leading-relaxed text-text-secondary md:text-lg";

/* ── The loop ─────────────────────────────────────────────────────────── */

const LOOP = [
  {
    n: "01",
    title: "The board asks",
    body: "You get a real oral board question. Turn on the read-aloud board and it's asked out loud, the way a panel would ask it.",
    slot: "board-asks",
    label: "Live session: the question showing, board members visible",
    alt: "A First Call practice session with the oral board question on screen and the board members visible",
  },
  {
    n: "02",
    title: "You answer out loud",
    body: "On a timer, no script, no notes on screen. You talk it through the way you'll have to in the room.",
    slot: "answering",
    label: "Recording in progress, timer running",
    alt: "First Call recording a spoken answer with the answer timer running",
  },
  {
    n: "03",
    title: "It gets scored",
    body: "Your answer is scored criterion by criterion against a rubric written for that exact question.",
    slot: "scored",
    label: "Score breakdown with one criterion expanded",
    alt: "A First Call score breakdown for one answer, with one rubric criterion expanded",
  },
  {
    n: "04",
    title: "You see what to fix",
    body: "What landed, what didn't, and the one or two things to focus on before your next rep.",
    slot: "focus",
    label: "Question feedback with the Focus next time callout",
    alt: "First Call feedback for one question, topped by a Focus next time callout",
  },
];

/* ── The scoring: annotated screen ────────────────────────────────────────
   Anchor points are percentages of the framed "criterion-annotated" box
   (x from the left, y from the top, browser bar included). Once the real
   capture is in, nudge x/y here until each dot sits on its feature. `side`
   picks which gutter the label sits in on wide screens; keep the y values
   on one side at least ~50 apart so the labels never overlap. */
const SCORING_CALLOUTS: {
  title: string;
  body: string;
  side: "left" | "right";
  x: number;
  y: number;
}[] = [
  {
    title: "A rubric for every question",
    body: "Each question has its own criteria and defined score levels. A teamwork question is graded on teamwork, not on a generic checklist.",
    side: "left",
    x: 20,
    y: 18,
  },
  {
    title: "Feedback that quotes you",
    body: "The feedback points to what you actually said, so you can see exactly which part of your answer earned the score and which part cost you.",
    side: "left",
    x: 38,
    y: 74,
  },
  {
    title: "Substance, not accent",
    body: "Scoring works from a transcript of your answer. It grades what you said, not your accent or your speaking style.",
    side: "right",
    x: 84,
    y: 18,
  },
  {
    title: "Strict on purpose",
    body: "A practice tool that grades easier than the real board gives you false confidence. First Call would rather tell you now.",
    side: "right",
    x: 72,
    y: 78,
  },
];

/* ── The practice ─────────────────────────────────────────────────────── */

const PRACTICE: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "3, 5, or 8 questions",
    body: "Pick a short, medium, or long session depending on how much time you have.",
    Icon: ListChecks,
  },
  {
    title: "A timer on every question",
    body: "Each answer runs on the clock, so you learn what a complete answer feels like inside the time you get.",
    Icon: Clock,
  },
  {
    title: "First Call Live",
    body: "An optional read-aloud board that asks each question out loud, so you practice listening and answering, not reading.",
    Icon: Volume2,
  },
  {
    title: "Hide the question",
    body: "Turn off the question text and answer from what you heard, the way it works in the room.",
    Icon: EyeOff,
  },
];

const COMPETENCIES = [
  "Communication",
  "Decision-making",
  "Composure",
  "Teamwork",
  "Integrity",
  "Adaptability",
  "Public service",
  "Job knowledge",
];

/* ── Pieces ───────────────────────────────────────────────────────────── */

/** Loop row. Mobile: rail on the left (number, then the line), content
    stacked as title, screen, body. 768px+: three columns, text and screen
    trading sides every row around a centre rail. The rail's line is drawn
    per row (above and below the number) so it starts at 01 and ends at 04
    without guessing heights. */
function LoopRow({
  step,
  index,
  total,
}: {
  step: (typeof LOOP)[number];
  index: number;
  total: number;
}) {
  const flip = index % 2 === 1;
  const first = index === 0;
  const last = index === total - 1;
  const textCol = flip ? "md:col-start-3" : "md:col-start-1";
  const screenCol = flip ? "md:col-start-1" : "md:col-start-3";

  return (
    <li className="grid grid-cols-[40px_minmax(0,1fr)] gap-x-4 md:grid-cols-[minmax(0,1fr)_64px_minmax(0,1fr)] md:grid-rows-[1fr_auto_auto_1fr] lg:gap-x-6">
      {/* Rail */}
      <div
        aria-hidden="true"
        className="col-start-1 row-span-3 row-start-1 flex flex-col items-center md:col-start-2 md:row-span-4"
      >
        <span className={`hidden w-px flex-1 md:block ${first ? "" : "bg-border-strong"}`} />
        <span
          className={`font-display text-3xl font-bold leading-none md:py-3 md:text-5xl ${
            last ? "text-accent" : "text-text-secondary"
          }`}
        >
          {step.n}
        </span>
        <span className={`mt-3 w-px flex-1 md:mt-0 ${last ? "" : "bg-border-strong"}`} />
      </div>

      <h3
        className={`col-start-2 row-start-1 font-display text-2xl font-bold leading-tight text-text-primary md:row-start-2 md:self-end md:text-3xl lg:text-4xl ${textCol}`}
      >
        <span className="sr-only">Step {step.n}: </span>
        {step.title}
      </h3>

      <div
        className={`col-start-2 row-start-2 mt-5 w-full md:row-span-4 md:row-start-1 md:mt-0 md:max-w-[480px] md:py-6 lg:py-8 ${screenCol} ${
          flip ? "md:justify-self-end" : "md:justify-self-start"
        }`}
      >
        <ScreenSlot
          id={step.slot}
          label={step.label}
          alt={step.alt}
          sizes="(max-width: 767px) 90vw, 480px"
        />
      </div>

      <p
        className={`col-start-2 row-start-3 mt-5 max-w-[46ch] md:row-start-3 md:mt-3 ${
          last ? "" : "pb-10 md:pb-0"
        } ${BODY} ${textCol}`}
      >
        {step.body}
      </p>
    </li>
  );
}

/** Numbered marker used on the annotated screen and its list. */
function Marker({
  n,
  className = "",
  style,
}: {
  n: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      style={style}
      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-background ${className}`}
    >
      {n}
    </span>
  );
}

type Numbered = (typeof SCORING_CALLOUTS)[number] & { n: number };

/** Wide screens (xl+): a gutter of labels, each vertically centred on its
    anchor's y, ending in a leader line that runs to the screen edge. */
function Gutter({ items, side }: { items: Numbered[]; side: "left" | "right" }) {
  return (
    <div aria-hidden="true" className="relative hidden xl:block">
      {items.map((c) => (
        <div
          key={c.n}
          className={`absolute inset-x-0 flex -translate-y-1/2 items-center ${
            side === "right" ? "flex-row-reverse" : ""
          }`}
          style={{ top: `${c.y}%` }}
        >
          <div className={`max-w-[300px] ${side === "right" ? "pl-4" : "pr-4"}`}>
            <p className="mb-1 font-display text-xl font-bold leading-snug text-text-primary">
              {c.title}
            </p>
            <p className="text-base leading-relaxed text-text-secondary">{c.body}</p>
          </div>
          <span className="h-px min-w-6 flex-1 bg-text-muted" />
        </div>
      ))}
    </div>
  );
}

function AnnotatedScoring() {
  const numbered: Numbered[] = SCORING_CALLOUTS.map((c, i) => ({ ...c, n: i + 1 }));

  return (
    <div>
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(0,620px)_minmax(0,1fr)]">
        <Gutter items={numbered.filter((c) => c.side === "left")} side="left" />

        <div className="relative max-w-3xl xl:max-w-none">
          <ScreenSlot
            id="criterion-annotated"
            label="One graded criterion: the criterion, the score level, and a quote from the answer"
            alt="A graded rubric criterion in First Call, showing the criterion, its score level, and a quote from the answer"
            mobileSrc={false}
            sizes="(max-width: 1279px) 100vw, 620px"
          />
          {/* Anchors. xl+: a dot plus the inner half of the leader line
              (screen edge to anchor). Below xl: numbered markers keyed to
              the list underneath. */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            {numbered.map((c) => (
              <div key={c.n}>
                <span
                  className="absolute hidden h-px bg-text-muted xl:block"
                  style={
                    c.side === "left"
                      ? { top: `${c.y}%`, left: 0, width: `${c.x}%` }
                      : { top: `${c.y}%`, left: `${c.x}%`, right: 0 }
                  }
                />
                <span
                  className="absolute hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent ring-2 ring-background xl:block"
                  style={{ left: `${c.x}%`, top: `${c.y}%` }}
                />
                <Marker
                  n={c.n}
                  className="absolute -translate-x-1/2 -translate-y-1/2 ring-2 ring-background xl:hidden"
                  style={{ left: `${c.x}%`, top: `${c.y}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        <Gutter items={numbered.filter((c) => c.side === "right")} side="right" />
      </div>

      {/* The same four points as a list: the visible copy below xl, and the
          screen-reader copy at every width (the gutters are aria-hidden so
          nothing is read twice). */}
      <ol className="mt-10 grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2 xl:sr-only">
        {numbered.map((c) => (
          <li key={c.n} className="flex gap-4">
            <Marker n={c.n} className="mt-1" />
            <div>
              <h3 className="mb-1 font-display text-xl font-bold leading-snug text-text-primary">
                {c.title}
              </h3>
              <p className={BODY}>{c.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────── */

export default function HowItWorksPage() {
  const hero = slotPaths("hero");

  return (
    <main className="flex flex-col bg-background">
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "How It Works", path: "/how-it-works" },
        ])}
      />

      {/* 1. Hero: split. The homepage DeviceMockup, fed the "hero" slot. */}
      <section>
        <div className="mx-auto w-full max-w-7xl px-6 pt-[64px] pb-[56px] lg:px-12 lg:pt-[96px] lg:pb-[80px]">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-14">
            <div>
              <Eyebrow>How it works</Eyebrow>
              <h1 className="mb-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-text-primary md:text-5xl lg:text-6xl">
                Practice the oral board out loud. Get scored like a real panel.
              </h1>
              <p className="text-lg leading-relaxed text-text-secondary">
                First Call asks you real oral board questions, you answer out
                loud, and every answer is scored against a rubric built for
                that question. Here&apos;s what a session looks like, start to
                finish.
              </p>
            </div>
            <DeviceMockup
              laptopScreen={
                <ScreenFill
                  src={hero.desktop}
                  label="Desktop app screen"
                  alt="First Call on a laptop"
                  sizes="(max-width: 767px) 100vw, 420px"
                  eager
                />
              }
              phoneScreen={
                <ScreenFill
                  src={hero.mobile}
                  label="Mobile app screen"
                  alt="First Call on a phone"
                  sizes="(max-width: 767px) 25vw, 105px"
                  eager
                />
              }
            />
          </div>
        </div>
      </section>

      {/* 2. The loop: alternating rows on a rail. The centrepiece. */}
      <Shell band>
        <SectionHeading eyebrow="The loop" title="One question, start to finish." />
        {/* Capped (not centred) so rows stay on the page's left edge while
            text, rail and screen read as one tight unit. */}
        <ol className="mt-4 max-w-5xl md:mt-8">
          {LOOP.map((step, i) => (
            <LoopRow key={step.n} step={step} index={i} total={LOOP.length} />
          ))}
        </ol>
      </Shell>

      {/* 3. The scoring: one annotated screen instead of four cards. */}
      <Shell>
        <SectionHeading eyebrow="The scoring" title="What makes the scoring different.">
          <p>
            Most practice tools hand you a number. First Call shows you the bar
            and where you landed against it.
          </p>
        </SectionHeading>
        <AnnotatedScoring />
      </Shell>

      {/* 4. The practice: split, screen then options. */}
      <Shell>
        <SectionHeading eyebrow="The practice" title="Built to feel like the room.">
          <p>
            The closer practice is to the real thing, the less the real thing
            surprises you.
          </p>
        </SectionHeading>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
          <ScreenSlot
            id="setup"
            label="Session setup: length and the realism meter"
            alt="First Call session setup with session length options and the realism meter"
          />
          <ul>
            {PRACTICE.map((item) => (
              <li
                key={item.title}
                className="flex gap-4 border-t border-border py-5 first:border-t-0 first:pt-0 last:pb-0"
              >
                <item.Icon className="mt-1 h-5 w-5 shrink-0 text-text-secondary" aria-hidden="true" />
                <div>
                  <h3 className="mb-1 font-display text-xl font-bold text-text-primary">
                    {item.title}
                  </h3>
                  <p className={BODY}>{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Shell>

      {/* 5. Progress: split, mirrored from the practice section (text
          left, screen right at 768px+). Mobile keeps the page's order:
          screen first, then text. */}
      <Shell>
        <SectionHeading eyebrow="Your progress" title="See where you stand, session after session." />
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
          <ScreenSlot
            id="progress"
            label="Progress: score trajectory and competency bars"
            alt="First Call progress view with a score trajectory chart and bars for each competency"
            aspect="16/9"
            className="md:order-2"
          />
          <div className="md:order-1">
            <p className={BODY}>
              Every answer feeds eight core competencies. Over time you see
              your session scores, your strongest area, and the one that keeps
              costing you points.
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              <span className="font-semibold text-text-secondary">The eight: </span>
              {COMPETENCIES.join(", ")}.
            </p>
            <h3 className="mt-8 mb-2 border-t border-border pt-6 font-display text-2xl font-bold text-text-primary">
              Drill the weak spot
            </h3>
            <p className={BODY}>
              Found the competency that keeps dragging you down? Pull questions
              for it from the Question Bank and work it on purpose.
            </p>
          </div>
        </div>
      </Shell>

      {/* 6. Closing: who it's for + the CTA, merged into one ending. A
          centred CTA on the same raised band as the loop section, so the
          page is bookended. Text column capped at 640px. */}
      <Shell label="Get started" band>
        <div className="mx-auto max-w-[640px] text-center">
          <Eyebrow center>Who it&apos;s for</Eyebrow>
          <h2 className="mb-5 font-display text-3xl font-bold leading-tight text-balance text-text-primary lg:text-5xl">
            Anyone with a fire oral board coming up.
          </h2>
          <p className={`mb-8 ${BODY}`}>
            Entry-level or lateral, any department. You don&apos;t need fire
            experience to use it. The questions cover what oral boards
            consistently evaluate, so the practice carries over wherever
            you&apos;re testing.
          </p>
          {/* Stacked full width on mobile, primary on top. */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
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
          <p className="mt-8 text-base leading-relaxed text-text-muted">
            New to the board?{" "}
            <Link href="/guides/how-to-prepare-for-a-firefighter-oral-board" className={TEXT_LINK}>
              Read how to prepare for a firefighter oral board
            </Link>
            , or check the{" "}
            <Link href="/faq" className={TEXT_LINK}>
              FAQ
            </Link>
            .
          </p>
        </div>
      </Shell>
    </main>
  );
}
