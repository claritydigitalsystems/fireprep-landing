import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  Clock,
  EyeOff,
  ListChecks,
  MessageSquareQuote,
  Mic,
  Ruler,
  Scale,
  ShieldCheck,
  Target,
  TrendingUp,
  Volume2,
  type LucideIcon,
} from "lucide-react";
import JsonLd from "../components/JsonLd";
import { CtaBlock, PageHeader, Section, SectionHeading, TEXT_LINK } from "../components/PageParts";
import { pageMetadata } from "../lib/site";
import { breadcrumbLd } from "../lib/schema";

export const metadata = pageMetadata({
  title: "How It Works",
  description:
    "Answer real fire oral board questions out loud, on a timer, and get every answer scored criterion by criterion against a rubric written for that question.",
  path: "/how-it-works",
});

const LOOP: { n: string; title: string; body: string; Icon: LucideIcon }[] = [
  {
    n: "01",
    title: "The board asks",
    body: "You get a real oral board question. Turn on the read-aloud board and it's asked out loud, the way a panel would ask it.",
    Icon: Volume2,
  },
  {
    n: "02",
    title: "You answer out loud",
    body: "On a timer, no script, no notes on screen. You talk it through the way you'll have to in the room.",
    Icon: Mic,
  },
  {
    n: "03",
    title: "It gets scored",
    body: "Your answer is scored criterion by criterion against a rubric written for that exact question.",
    Icon: Target,
  },
  {
    n: "04",
    title: "You see what to fix",
    body: "What landed, what didn't, and the one or two things to focus on before your next rep.",
    Icon: TrendingUp,
  },
];

const SCORING: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "A rubric for every question",
    body: "Each question has its own criteria and defined score levels. A teamwork question is graded on teamwork, not on a generic checklist.",
    Icon: Ruler,
  },
  {
    title: "Feedback that quotes you",
    body: "The feedback points to what you actually said, so you can see exactly which part of your answer earned the score and which part cost you.",
    Icon: MessageSquareQuote,
  },
  {
    title: "Substance, not accent",
    body: "Scoring works from a transcript of your answer. It grades what you said, not your accent or your speaking style.",
    Icon: Scale,
  },
  {
    title: "Strict on purpose",
    body: "A practice tool that grades easier than the real board gives you false confidence. First Call would rather tell you now.",
    Icon: ShieldCheck,
  },
];

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

/** Chevron sitting in the gap after a loop step: below it when stacked,
    to its right on desktop. Decorative; the <ol> carries the order. */
function Connector() {
  return (
    <span
      aria-hidden="true"
      className="absolute left-1/2 top-full flex h-8 -translate-x-1/2 items-center lg:left-full lg:top-1/2 lg:h-auto lg:w-8 lg:-translate-y-1/2 lg:translate-x-0 lg:justify-center"
    >
      <ChevronRight className="hidden h-6 w-6 text-accent lg:block" />
      <ChevronDown className="h-6 w-6 text-accent lg:hidden" />
    </span>
  );
}

export default function HowItWorksPage() {
  return (
    <main className="flex flex-col bg-background">
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "How It Works", path: "/how-it-works" },
        ])}
      />

      <PageHeader
        eyebrow="How it works"
        title="Practice the oral board out loud. Get scored like a real panel."
      >
        <p>
          First Call asks you real oral board questions, you answer out loud,
          and every answer is scored against a rubric built for that question.
          Here&apos;s what a session looks like, start to finish.
        </p>
      </PageHeader>

      {/* 1. The loop: same flat node + amber chevron flow as the homepage's
          Practice / Score / Track, stretched to four steps. */}
      <Section>
        <SectionHeading eyebrow="The loop" title="One question, start to finish." />
        <ol className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {LOOP.map((step, i) => (
            <li key={step.n} className="relative flex">
              <div
                className={`w-full rounded-md border border-border-strong bg-surface p-6 ${
                  i === LOOP.length - 1
                    ? "border-t-[3px] border-t-accent"
                    : "border-t-2 border-t-border-strong"
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={`font-display text-3xl font-bold tracking-widest ${
                      i === LOOP.length - 1 ? "text-accent" : "text-text-secondary"
                    }`}
                  >
                    {step.n}
                  </span>
                  <step.Icon
                    className={`h-6 w-6 ${i === LOOP.length - 1 ? "text-accent" : "text-text-secondary"}`}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mb-2 font-display text-2xl font-bold leading-snug text-text-primary">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  {step.body}
                </p>
              </div>
              {i < LOOP.length - 1 && <Connector />}
            </li>
          ))}
        </ol>
      </Section>

      {/* 2. Scoring. The one amber-edged callout carries the "strict" point,
          since that is the claim a skeptic pushes on. */}
      <Section>
        <SectionHeading eyebrow="The scoring" title="What makes the scoring different.">
          <p>
            Most practice tools hand you a number. First Call shows you the bar
            and where you landed against it.
          </p>
        </SectionHeading>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
          {SCORING.map((item) => (
            <div key={item.title} className="rounded-md border border-border bg-surface p-6 lg:p-8">
              <div className="mb-3 flex items-center gap-3">
                <item.Icon className="h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
                <h3 className="font-display text-2xl font-bold leading-snug text-text-primary">
                  {item.title}
                </h3>
              </div>
              <p className="text-base leading-relaxed text-text-secondary">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. Realistic practice */}
      <Section>
        <SectionHeading eyebrow="The practice" title="Built to feel like the room.">
          <p>
            The closer practice is to the real thing, the less the real thing
            surprises you.
          </p>
        </SectionHeading>
        <div className="mx-auto max-w-5xl">
          <ul className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            {PRACTICE.map((item) => (
              <li key={item.title} className="flex gap-4 border-t border-border py-6">
                <item.Icon className="mt-1 h-5 w-5 shrink-0 text-text-secondary" aria-hidden="true" />
                <div>
                  <h3 className="mb-1 font-display text-xl font-bold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-text-secondary">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="fp-callout mt-4 p-5">
            <p className="text-base leading-relaxed text-text-secondary">
              <span className="font-semibold text-text-primary">
                No live transcript while you talk.
              </span>{" "}
              That&apos;s on purpose. Real boards don&apos;t give you a
              teleprompter, so practice shouldn&apos;t either.
            </p>
          </div>
        </div>
      </Section>

      {/* 4. Progress. Chips reuse the homepage rubric card's chip recipe. */}
      <Section>
        <SectionHeading eyebrow="Your progress" title="See where you stand, session after session.">
          <p>
            Every answer feeds eight core competencies. Over time you see your
            session scores, your strongest area, and the one that keeps
            costing you points.
          </p>
        </SectionHeading>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.18em] text-text-muted">
              The eight competencies
            </h3>
            <ul className="flex flex-wrap gap-2">
              {COMPETENCIES.map((name) => (
                <li
                  key={name}
                  className="rounded border border-border bg-surface-raised px-3 py-1.5 text-base text-[#c5d0de]"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-md border border-border bg-surface p-6">
            <h3 className="mb-2 font-display text-2xl font-bold text-text-primary">
              Drill the weak spot
            </h3>
            <p className="mb-5 text-base leading-relaxed text-text-secondary">
              Found the competency that keeps dragging you down? Pull questions
              for it from the Question Bank and work it on purpose.
            </p>
            <div className="fp-spark" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Who it's for */}
      <Section>
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Who it's for" title="Anyone with a fire oral board coming up.">
            <p>
              Entry-level or lateral, any department. You don&apos;t need fire
              experience to use it. The questions cover what oral boards
              consistently evaluate, so the practice carries over wherever
              you&apos;re testing.
            </p>
          </SectionHeading>
          <p className="text-base leading-relaxed text-text-muted">
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
      </Section>

      <CtaBlock title="Try one question free.">
        Answer a real oral board question out loud and see how it scores. No
        account needed. When you want the full loop, a free account takes about
        a minute.
      </CtaBlock>
    </main>
  );
}
