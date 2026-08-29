import Image from "next/image";
import { Check, ChevronDown, ChevronRight, ListChecks, Mic, Play, Ruler, Target, TrendingUp } from "lucide-react";
import { APP_URL } from "./lib/links";

export default function Home() {
  return (
    <main className="flex flex-col bg-background">

      {/* ── Section 1: Hero ── */}
      <section className="relative">
        <div className="mx-auto w-full max-w-7xl px-6 py-[80px] lg:px-12 lg:py-[120px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Left — copy */}
            <div>
              <p className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Free while in beta · Real candidates, real feedback
              </p>

              <h1 className="mb-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-text-primary md:text-6xl lg:text-7xl">
                Practice the oral board the way it&apos;s actually scored.
              </h1>

              <p className="mb-6 text-lg leading-relaxed text-text-secondary lg:text-xl">
                The oral board is the most subjective-feeling part of fire
                hiring, and the part most candidates prepare for blind. First
                Call scores your spoken answers against the same competencies
                panels use, criterion by criterion, the moment you finish. You
                see what landed, what didn&apos;t, and what to fix before it
                counts.
              </p>

              <p className="mb-8 text-base leading-relaxed text-text-secondary">
                Built by an active firefighter, on a rubric sourced from real
                fire-service hiring criteria, not generic interview tips.
              </p>

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                <a
                  href={APP_URL}
                  className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Start free
                </a>
                <a
                  href="#watch"
                  className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
                >
                  <Play className="h-4 w-4" aria-hidden="true" />
                  Watch how it works (60 sec)
                </a>
              </div>

              <p className="mt-4 text-sm text-text-muted">
                Free while I run live beta testing with real candidates. No
                credit card.
              </p>
            </div>

            {/* Right — hero image */}
            <div className="relative min-h-[320px] overflow-hidden rounded-md ring-1 ring-border lg:min-h-[500px]">
              <Image
                src="/firefighters.jpg"
                alt="Two firefighters silhouetted against a live training burn"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── Video slot ── target of the hero's secondary CTA.
           TODO: the 60-second demo video asset does not exist yet. Before
           launch, replace the placeholder frame below with a <video> element
           (poster + <source>), same as the old fire-loop band did. ── */}
      <section id="watch" className="scroll-mt-20">
        <div className="mx-auto w-full max-w-7xl px-6 pb-[80px] lg:px-12 lg:pb-[120px]">
          <div className="mx-auto max-w-4xl">
            <div className="flex aspect-video w-full flex-col items-center justify-center rounded-md border border-border bg-surface">
              <Play className="mb-4 h-10 w-10 text-text-muted" aria-hidden="true" />
              <p className="font-display text-lg font-semibold text-text-secondary">
                Demo video coming soon
              </p>
              <p className="mt-1 text-sm text-text-muted">
                A 60-second walkthrough of a full session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Two-grader demo ──
           The left card is a representative composite of instant-scoring
           tools. The right card mirrors the shape the app actually returns:
           real competency name, 0 to 3 anchor score, "what the panel heard"
           and "to reach a 3". Do not prettify the right side. ── */}
      <section>
        <div className="mx-auto w-full max-w-7xl px-6 py-[80px] lg:px-12 lg:py-[120px]">

          <div className="mb-12 lg:mb-16">
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              How it works
            </p>
            <h2 className="mb-4 font-display text-4xl font-bold leading-tight text-text-primary lg:text-5xl">
              Anyone can hand you a score. We show you why.
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-text-secondary">
              The same answer, two kinds of feedback. One tells you
              you&apos;re great. One tells you the truth.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">

            {/* Shared question + answer */}
            <div className="rounded-md border border-border bg-surface p-6 lg:p-8">
              <p className="mb-2 font-display text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                Question
              </p>
              <p className="mb-6 text-base leading-relaxed text-text-primary lg:text-lg">
                Tell us about a time you worked through a conflict with a
                coworker.
              </p>
              <p className="mb-2 font-display text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                Answer
              </p>
              <p className="text-base italic leading-relaxed text-text-secondary lg:text-lg">
                &ldquo;I always get along with everyone on the crew. If
                there&apos;s ever a problem I just stay professional and handle
                it. Being a team player is one of my biggest strengths.&rdquo;
              </p>
            </div>

            {/* The two graders */}
            <div className="mt-6 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">

              {/* Left — most tools. Hollow praise, so the score reads dull
                  olive rather than a healthy success green. */}
              <div className="rounded-md border border-border bg-surface p-6 lg:p-8">
                <p className="mb-6 font-display text-lg font-bold uppercase tracking-[0.12em] text-text-secondary">
                  Most tools
                </p>
                <div className="mb-5 flex items-baseline gap-3">
                  <span className="font-display text-5xl font-bold leading-none text-[#7d9463]">
                    92%
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-lg font-semibold text-[#7d9463]">
                    <Check className="h-5 w-5" aria-hidden="true" />
                    Strong answer
                  </span>
                </div>
                <p className="mb-5 text-base leading-relaxed text-text-primary">
                  &ldquo;Great job. Strong teamwork and professionalism.
                  You&apos;re interview-ready.&rdquo;
                </p>
                <p className="text-sm leading-relaxed text-text-muted">
                  Right keywords, confident tone. Never notices the answer
                  describes no actual conflict.
                </p>
              </div>

              {/* Right — First Call. The one saturated element on the page. */}
              <div className="rounded-md border border-accent bg-surface p-6 lg:p-8">
                <p className="mb-6 font-display text-lg font-bold uppercase tracking-[0.12em] text-text-primary">
                  First Call
                </p>
                <div className="mb-5 flex items-baseline gap-3">
                  <span className="font-display text-5xl font-bold leading-none text-text-primary">
                    1 <span className="text-text-muted">/</span> 3
                  </span>
                  <span className="text-lg font-semibold text-text-secondary">
                    Teamwork &amp; Collaboration
                  </span>
                </div>
                <p className="mb-5 text-base leading-relaxed text-text-primary">
                  <span className="font-semibold">What the panel heard:</span>{" "}
                  a claim about being a team player, but no real situation and
                  nothing you actually did. Boards read this as dodging the
                  question.
                </p>
                <p className="text-base leading-relaxed text-accent">
                  <span className="font-semibold">To reach a 3:</span> name one
                  real disagreement. What it was, what you did, how it ended.
                </p>
              </div>

            </div>

            {/* Closing + honesty label */}
            <p className="mt-10 text-center font-display text-xl font-bold leading-snug text-text-primary lg:text-2xl">
              The first score feels good.{" "}
              <span className="text-accent">
                The second one gets you hired.
              </span>
            </p>
            <p className="mt-3 text-center text-sm text-text-muted">
              Illustrative example.{" "}
              <a
                href={APP_URL}
                className="text-text-secondary underline underline-offset-2 transition-colors hover:text-text-primary"
              >
                Try it free
              </a>{" "}
              to see the full feedback on your own answers.
            </p>

          </div>
        </div>
      </section>

      {/* ── Section 3: Why First Call (the wedge) ──
           Names two approaches, never companies. First Call reads as the
           resolution of the tradeoff, not as a third option in the list. ── */}
      <section>
        <div className="mx-auto w-full max-w-7xl px-6 py-[80px] lg:px-12 lg:py-[120px]">

          <div className="mb-12 lg:mb-16">
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Why First Call
            </p>
            <h2 className="mb-4 font-display text-4xl font-bold leading-tight text-text-primary lg:text-5xl">
              Real feedback used to mean waiting for a person. Not anymore.
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-text-secondary">
              Every way to prep the oral board makes you pick one.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">

            {/* The two poles */}
            <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
              <div className="rounded-md border border-border bg-surface p-6 lg:p-8">
                <h3 className="mb-3 font-display text-2xl font-bold leading-snug text-text-primary">
                  Fast, but hollow
                </h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  Instant tools score you in seconds, but most just mirror your
                  confidence back. Hit the keywords, get a green light, walk in
                  exactly as unprepared as you started.
                </p>
              </div>

              <div className="rounded-md border border-border bg-surface p-6 lg:p-8">
                <h3 className="mb-3 font-display text-2xl font-bold leading-snug text-text-primary">
                  Real, but rationed
                </h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  A real coach gives real feedback, but they cost a lot, book
                  out, and cap you at a couple sessions a month. A handful of
                  honest reps when you need a hundred.
                </p>
              </div>
            </div>

            {/* The resolution */}
            <div className="mt-6 rounded-md border border-border border-l-[3px] border-l-accent bg-surface-raised p-6 lg:p-8">
              <h3 className="mb-3 font-display text-2xl font-bold leading-snug text-accent">
                First Call
              </h3>
              <p className="text-base leading-relaxed text-text-primary lg:text-lg">
                Every answer graded against a research-backed rubric, built on
                published fire-service competency frameworks. Criterion by
                criterion, the moment you finish, as many reps as you want.
                Rigorous scoring at software speed.
              </p>
            </div>

            <p className="mt-10 text-center font-display text-xl font-bold leading-snug text-text-primary lg:text-2xl">
              Practice like it&apos;s real. As often as it takes.
            </p>

          </div>
        </div>
      </section>

      {/* ── Section 4: Practice, Score, Track ──
           Carries the nav's #how-it-works anchor. Flat cards, no deepening
           gradient across the three. Track is the #2 differentiator, so it
           alone takes a subtle amber node accent. ── */}
      <section id="how-it-works" className="scroll-mt-20">
        <div className="mx-auto w-full max-w-7xl px-6 py-[80px] lg:px-12 lg:py-[120px]">

          <div className="mb-12 lg:mb-16">
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              How it works
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight text-text-primary lg:text-5xl">
              Every session, end to end.
            </h2>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row lg:items-stretch">

              {/* Node 01 — Practice */}
              <div className="flex-1 rounded-md border border-border bg-surface p-6 lg:p-8">
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-display text-xl tracking-widest text-text-muted">
                    01
                  </p>
                  <Mic className="h-6 w-6 text-text-secondary" aria-hidden="true" />
                </div>
                <h3 className="mb-3 font-display text-2xl font-bold uppercase text-text-primary lg:text-3xl">
                  Practice
                </h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  Answer real oral board questions out loud, on the clock.
                  Recorded, transcribed, and ready to grade. The way
                  you&apos;ll have to deliver it in the room.
                </p>
              </div>

              {/* Connector */}
              <div
                aria-hidden="true"
                className="flex shrink-0 items-center justify-center py-5 text-text-muted lg:px-5 lg:py-0"
              >
                <ChevronRight className="hidden h-10 w-10 lg:block" />
                <ChevronDown className="h-10 w-10 lg:hidden" />
              </div>

              {/* Node 02 — Score */}
              <div className="flex-1 rounded-md border border-border bg-surface p-6 lg:p-8">
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-display text-xl tracking-widest text-text-muted">
                    02
                  </p>
                  <Target className="h-6 w-6 text-text-secondary" aria-hidden="true" />
                </div>
                <h3 className="mb-3 font-display text-2xl font-bold uppercase text-text-primary lg:text-3xl">
                  Score
                </h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  Every answer broken down criterion by criterion. See which
                  parts landed, which fell short, and exactly what to fix, the
                  moment you finish.
                </p>
              </div>

              {/* Connector */}
              <div
                aria-hidden="true"
                className="flex shrink-0 items-center justify-center py-5 text-text-muted lg:px-5 lg:py-0"
              >
                <ChevronRight className="hidden h-10 w-10 lg:block" />
                <ChevronDown className="h-10 w-10 lg:hidden" />
              </div>

              {/* Node 03 — Track. Pulled up as the #2 differentiator. */}
              <div className="flex-1 rounded-md border border-border border-t-[3px] border-t-accent bg-surface p-6 lg:p-8">
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-display text-xl tracking-widest text-accent">
                    03
                  </p>
                  <TrendingUp className="h-6 w-6 text-accent" aria-hidden="true" />
                </div>
                <h3 className="mb-3 font-display text-2xl font-bold uppercase text-text-primary lg:text-3xl">
                  Track
                </h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  Every answer feeds eight fire-service competencies, scored
                  and tracked across every session. You see exactly where
                  you&apos;re strong and where you keep losing points, so you
                  can drill the weak spots on purpose. Walk in with all eight
                  dialed, and you&apos;ll be the most prepared candidate in the
                  room.
                </p>
              </div>

            </div>

            <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-text-muted lg:mt-12">
              3 to 8 questions per session. Criterion-level scoring on every
              answer. Eight competencies tracked across all of them, so you
              know exactly what to sharpen before the panel does.
            </p>
          </div>

        </div>
      </section>

      {/* ── Section 5: The rubric ──
           Full proof of the #1 differentiator. Each card leads with a bold
           one-line verdict. Exactly one graphic on the page lives here: the
           0/1/2/3 anchor scale on card 1. Cards 2 and 3 stay text-only. ── */}
      <section id="rubric" className="scroll-mt-20">
        <div className="mx-auto w-full max-w-7xl px-6 py-[80px] lg:px-12 lg:py-[120px]">

          <div className="mb-12 lg:mb-16">
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              The rubric
            </p>
            <h2 className="mb-4 font-display text-4xl font-bold leading-tight text-text-primary lg:text-5xl">
              Not a vibe. A rubric.
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-text-secondary">
              Most tools give you a number and a pat on the back. Here&apos;s
              what&apos;s actually behind your score.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-4">

            {/* Card 1 — carries the anchor-scale graphic */}
            <div className="rounded-md border border-border bg-surface p-6 lg:p-8">
              <div className="mb-3 flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl font-bold leading-snug text-text-primary lg:text-3xl">
                  A defined bar, and where you landed.
                </h3>
                <Ruler className="mt-1 h-6 w-6 shrink-0 text-text-secondary" aria-hidden="true" />
              </div>
              <p className="text-base leading-relaxed text-text-secondary lg:text-lg">
                Every answer is scored 0 to 3 on each criterion, against
                written anchors that define exactly what a 0, 1, 2, and 3 look
                like. The same rating structure used in formal interview
                research, built for the fire-service oral board. No mystery
                number. A defined bar, and where you landed against it.
              </p>

              {/* The one graphic. The paragraph above already states the
                  scale, so this is decorative for screen readers. */}
              <div className="mt-6 flex items-center gap-3" aria-hidden="true">
                <span className="flex h-8 w-8 items-center justify-center rounded border border-border font-display text-sm font-semibold text-text-muted">
                  0
                </span>
                <span className="h-px w-4 bg-border" />
                <span className="flex h-8 w-8 items-center justify-center rounded border border-border font-display text-sm font-semibold text-text-muted">
                  1
                </span>
                <span className="h-px w-4 bg-border" />
                <span className="flex h-8 w-8 items-center justify-center rounded border border-border font-display text-sm font-semibold text-text-muted">
                  2
                </span>
                <span className="h-px w-4 bg-border" />
                <span className="flex h-8 w-8 items-center justify-center rounded border border-accent font-display text-sm font-semibold text-accent">
                  3
                </span>
              </div>
            </div>

            {/* Card 2 — text only */}
            <div className="rounded-md border border-border bg-surface p-6 lg:p-8">
              <div className="mb-3 flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl font-bold leading-snug text-text-primary lg:text-3xl">
                  Eight real competencies, not a template.
                </h3>
                <ListChecks className="mt-1 h-6 w-6 shrink-0 text-text-secondary" aria-hidden="true" />
              </div>
              <p className="text-base leading-relaxed text-text-secondary lg:text-lg">
                Composure under pressure. Decision-making. Communication.
                Integrity. Teamwork. Eight competencies drawn from real
                fire-service hiring criteria, not a generic interview template.
                The areas boards actually weigh, scored the way they weigh
                them.
              </p>
            </div>

            {/* Card 3 — text only */}
            <div className="rounded-md border border-border bg-surface p-6 lg:p-8">
              <div className="mb-3 flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl font-bold leading-snug text-text-primary lg:text-3xl">
                  Graded on what the question actually asked.
                </h3>
                <Target className="mt-1 h-6 w-6 shrink-0 text-text-secondary" aria-hidden="true" />
              </div>
              <p className="text-base leading-relaxed text-text-secondary lg:text-lg">
                This is the part most tools skip. A teamwork question is graded
                on teamwork. A decision-making question is graded on
                decision-making. Every question carries its own rubric, so
                you&apos;re never dinged for missing something the question
                never asked. You get scored on what was actually being tested.
              </p>
            </div>

            <p className="mx-auto max-w-3xl pt-6 text-center text-sm leading-relaxed text-text-muted">
              Sourced from published fire-service frameworks and the interview
              research behind them. Not generic tips dressed up with a score.
            </p>

          </div>
        </div>
      </section>

    </main>
  );
}
