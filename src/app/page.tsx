import Image from "next/image";
import { Check, ChevronDown, ChevronRight, ListChecks, Mic, Play, Ruler, Target, TrendingUp } from "lucide-react";
import WaitlistForm from "./components/WaitlistForm";
import { APP_URL } from "./lib/links";

export default function Home() {
  return (
    <main className="flex flex-col bg-background">

      {/* ── Section 1: Hero ── */}
      <section className="relative">
        <div className="mx-auto w-full max-w-7xl px-6 py-[56px] lg:px-12 lg:py-[80px]">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">

            {/* Left: copy */}
            <div>
              <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Free while in beta · Real candidates, real feedback
              </p>

              <h1 className="mb-5 font-display text-5xl font-bold leading-[1.05] tracking-tight text-text-primary md:text-6xl lg:text-7xl">
                Practice the oral board the way it&apos;s actually scored.
              </h1>

              <p className="mb-5 text-lg leading-relaxed text-text-secondary lg:text-xl">
                The oral board is the most subjective-feeling part of fire
                hiring, and the part most candidates prepare for blind. First
                Call scores your spoken answers against{" "}
                <strong className="font-semibold text-text-primary">
                  the same competencies panels use
                </strong>
                , criterion by criterion, the moment you finish. You
                see what landed, what didn&apos;t, and what to fix before it
                counts.
              </p>

              <p className="mb-7 text-base leading-relaxed text-text-secondary">
                Built by an active firefighter, on a rubric sourced from real
                fire-service hiring criteria, not generic interview tips.
              </p>

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                <a
                  href={APP_URL}
                  className="rounded-md bg-accent px-8 py-4 text-base font-semibold text-background transition-colors hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Start free
                </a>
                {/* Transparent outlined counterpart, so the pair reads as one
                    primary and one secondary rather than a button and a link. */}
                <a
                  href="#watch"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-6 py-4 text-base font-medium text-text-secondary transition-colors hover:border-text-secondary hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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

            {/* Right: hero image */}
            <div className="relative h-[280px] overflow-hidden rounded-md ring-1 ring-border lg:h-[400px]">
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

              {/* Left: most tools. Hollow praise, so the score reads dull
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

              {/* Right: First Call. The one saturated element on the page. */}
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

      {/* ── Section 3: Differentiators (replaces the old comparison) ──
           Two claims on a numbered rail. Each gets exactly one device: 01 a
           margin callout, 02 a rising-bar sparkline. Amber marks only the
           First Call side of each claim. ── */}
      <section id="why" className="scroll-mt-20">
        <div className="mx-auto w-full max-w-7xl px-6 py-[80px] lg:px-12 lg:py-[120px]">

          <div className="mb-12 lg:mb-16">
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Why First Call
            </p>
            <h2 className="mb-4 font-display text-4xl font-bold leading-tight text-text-primary lg:text-5xl">
              Built to grade like a board.
              <br />
              Not like a chatbot.
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-text-secondary">
              Two things separate First Call from every other way to prep. Both
              are things a keyword grader or a busy coach can&apos;t give you.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">

            {/* 01 */}
            <div className="grid grid-cols-[48px_1fr] gap-x-5">
              <div className="flex flex-col items-center">
                <span className="font-display text-2xl font-bold leading-none text-accent">
                  01
                </span>
                <span
                  aria-hidden="true"
                  className="fp-rail-connector mt-3 w-px flex-1"
                />
              </div>

              <div className="pb-12 lg:pb-16">
                <div className="mb-3 flex items-center gap-3">
                  <Ruler className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <h3 className="font-display text-2xl font-bold leading-snug text-text-primary lg:text-3xl">
                    Research-backed scoring, not a vibe check
                  </h3>
                </div>

                <p className="text-base leading-relaxed text-text-secondary lg:text-lg">
                  Every answer is graded on{" "}
                  <span className="font-medium text-text-primary">
                    behaviorally anchored rating scales
                  </span>
                  , the same 0 to 3 anchored method used in formal hiring
                  research, built on published fire-service competency
                  frameworks.
                </p>

                <div className="fp-callout mt-5 p-4 lg:p-5">
                  <p className="text-base leading-relaxed text-text-secondary">
                    Each question carries its own rubric. You&apos;re scored on
                    what it actually tests, never dinged for what it never
                    asked.
                  </p>
                </div>
              </div>
            </div>

            {/* 02 */}
            <div className="grid grid-cols-[48px_1fr] gap-x-5">
              <div className="flex flex-col items-center">
                <span className="font-display text-2xl font-bold leading-none text-accent">
                  02
                </span>
              </div>

              <div>
                <div className="mb-3 flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <h3 className="font-display text-2xl font-bold leading-snug text-text-primary lg:text-3xl">
                    Progress you can see, rep after rep
                  </h3>
                </div>

                <p className="text-base leading-relaxed text-text-secondary lg:text-lg">
                  Every answer feeds eight fire-service competencies, tracked
                  across every session. You watch each one climb over time, and
                  see exactly which keep costing you points.
                </p>

                {/* The shape is the claim: one competency climbing over reps.
                    Decorative for screen readers; the caption states it. */}
                <div className="fp-spark mt-6" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  Practice becomes a plan: drill the weak competency, watch it
                  move, walk in with all eight dialed.
                </p>
              </div>
            </div>

            {/* Closer */}
            <div className="mt-12 border-t border-border pt-8 lg:mt-16">
              <p className="text-base leading-relaxed text-text-primary lg:text-lg">
                Instant tools score fast but grade shallow. Human coaches grade
                deep but can&apos;t be there at 11pm for your hundredth rep.{" "}
                <strong className="font-semibold text-accent">
                  First Call is the only one that grades with real rigor and
                  remembers everything, as many times as you need it.
                </strong>
              </p>
            </div>

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

              {/* Node 01: Practice */}
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

              {/* Node 02: Score */}
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

              {/* Node 03: Track. Pulled up as the #2 differentiator. */}
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
                  Every answer feeds eight fire-service competencies, tracked
                  across every session. See where you keep losing points, drill
                  those, and walk in with all eight dialed.
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

      {/* ── Fire video banner ── full-bleed break between how-it-works and
           the rubric. The poster Image sits UNDER the video rather than on the
           <video poster> attribute: globals.css hides video[autoplay] under
           prefers-reduced-motion, and a hidden video shows no poster, so the
           still has to be its own layer to survive that rule. ── */}
      <section aria-label="No more guessing" className="relative overflow-hidden">
        <div className="relative h-[40vh] w-full lg:h-[58vh]">

          <Image
            src="/firefighters.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />

          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/fire-loop.mp4" type="video/mp4" />
          </video>

          {/* Legibility wash. Structural, not decorative. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black/60"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <p className="font-display text-4xl font-bold leading-tight text-text-primary lg:text-6xl">
              No more guessing.
            </p>
            <p className="mt-3 max-w-2xl font-display text-2xl font-bold leading-snug text-text-primary lg:text-4xl">
              Walk in knowing exactly what panels are{" "}
              <span className="text-accent">scoring.</span>
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

            {/* Card 1: carries the anchor-scale graphic */}
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

            {/* Card 2: text only */}
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

            {/* Card 3: text only */}
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

      {/* ── Section 6: About (founder) ──
           Founder trust as support for the rigor claim, not as the lead. ── */}
      <section id="about" className="scroll-mt-20">
        <div className="mx-auto w-full max-w-7xl px-6 py-[80px] lg:px-12 lg:py-[120px]">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

            {/* Photo slot. TODO: founder.jpg is the training-burn shot, not a
                portrait. Scott to supply a real portrait; drop it in here and
                update the alt text. Frame and sizing stay as-is. */}
            <div
              className="relative w-full overflow-hidden rounded-md border border-border lg:order-last"
              style={{ aspectRatio: "1035/691", maxHeight: "560px" }}
            >
              <Image
                src="/founder.jpg"
                alt="Scott Shimala, active firefighter and founder of First Call"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Copy */}
            <div>
              <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                About
              </p>
              <h2 className="mb-8 font-display text-4xl font-bold leading-tight text-text-primary lg:text-5xl">
                Why I&apos;m building this.
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-text-secondary">
                <p>
                  I&apos;m Scott, an active firefighter. Before I got hired, I
                  went through hiring process after hiring process, different
                  departments, different formats, the same panel asking
                  variations of the same questions.
                </p>
                <p>
                  I learned the prep gap firsthand. The advice online is
                  generic. The good coaching is expensive and books out. And
                  the scoring criteria panels actually use have been public for
                  decades, rooted in real fire-service competency frameworks,
                  but no tool ever used them to grade your practice.
                </p>
                <p>
                  So I built the one that does. First Call grades against those
                  frameworks the way a board would, so you get real signal on
                  every rep instead of a pat on the back.
                </p>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <p className="font-display text-base font-semibold text-text-primary">
                  Scott Shimala · Active firefighter, building First Call.
                </p>
                <p className="mt-1 text-sm text-text-muted">
                  Free while I test it with real candidates.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 7: Conversion slot ──
           The swappable module. The FRAME below is fixed: eyebrow, headline,
           subcopy, CTA, micro-copy, dormant secondary. Flipping beta -> paid
           swaps the CONTENTS of these slots and changes no structure. ── */}
      <section>
        <div className="mx-auto w-full max-w-7xl px-6 py-[120px] lg:px-12 lg:py-[160px]">
          <div className="mx-auto max-w-xl text-center">

            {/* slot: eyebrow */}
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Start now
            </p>

            {/* slot: headline */}
            <h2 className="mb-6 font-display text-4xl font-bold leading-tight text-text-primary lg:text-5xl">
              It&apos;s built. It&apos;s free. Go use it.
            </h2>

            {/* slot: subcopy */}
            <p className="mb-10 text-lg leading-relaxed text-text-secondary">
              First Call is live and free while I test it with real
              candidates. Real questions, real scoring, real feedback on every
              answer. No credit card, no catch. I&apos;m looking for candidates
              who&apos;ll actually use it and tell me what&apos;s working.
            </p>

            {/* slot: primary CTA */}
            <a
              href={APP_URL}
              className="inline-block rounded-md bg-accent px-8 py-4 text-base font-semibold text-background transition-colors hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Start practicing free
            </a>

            {/* slot: micro-copy */}
            <p className="mt-4 text-sm text-text-muted">
              Free while in beta. Takes about a minute to start your first
              session.
            </p>

            {/* slot: dormant secondary. Built and wired to the retired
                MailerLite form, deliberately hidden. Remove the `hidden`
                attribute to bring it back; nothing else needs to change. */}
            <div hidden className="mt-10 border-t border-border pt-8">
              <p className="mb-4 text-sm text-text-secondary">
                Not ready? Get notified as it grows
              </p>
              <WaitlistForm id="notify-form" />
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
