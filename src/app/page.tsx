import Image from "next/image";
import { Ban, ChevronDown, ChevronRight, Gauge, Hourglass, Mic, Target, Timer, TrendingUp } from "lucide-react";
import WaitlistForm from "./components/WaitlistForm";

export default function Home() {
  return (
    <main className="flex flex-col">

      {/* ── Section 1: Hero ── */}
      <section className="relative">
        <div className="mx-auto w-full max-w-7xl px-6 py-[80px] lg:px-12 lg:py-[120px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Left — copy */}
            <div>
              <p className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.18em] text-orange">
                Join the Waitlist · Launching Soon
              </p>

              <h1 className="mb-6 font-display text-5xl font-bold leading-tight tracking-tight text-text-primary whitespace-nowrap md:text-6xl lg:text-7xl">
                Land your career.
              </h1>

              <p className="mb-6 text-lg leading-relaxed text-text-secondary lg:text-xl">
                Oral board practice graded against real fire-service competency
                frameworks. See exactly which criteria you&apos;re hitting,
                which you&apos;re missing, and what to fix before the panel.
              </p>

              <div className="mb-8">
                <p className="mb-3 text-sm text-text-secondary">
                  Get on the list to lock in:
                </p>
                <ul className="space-y-2">
                  {[
                    "90 days free at launch",
                    "Early access before public release",
                    "Direct input on what gets built",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 shrink-0 rounded-full bg-orange"
                      />
                      <span className="text-sm font-medium text-text-primary">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <WaitlistForm />
            </div>

            {/* Right — hero image */}
            <div className="relative min-h-[320px] overflow-hidden rounded-2xl ring-1 ring-border lg:min-h-[500px]">
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

      {/* ── Section 2: Why This Exists ── */}
      <section className="bg-surface">
        <div className="mx-auto w-full max-w-7xl px-6 py-[80px] lg:px-12 lg:py-[120px]">

          <div className="mb-16 lg:mb-20">
            <div aria-hidden="true" className="mb-3 h-[2px] w-10 bg-orange" />
            <h2 className="font-display text-4xl font-bold leading-tight text-text-primary lg:text-5xl">
              Why this exists.
            </h2>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10">

            {/* Left — The prep gap: recessed surface, muted gray left border */}
            <div
              className="rounded-2xl border border-border bg-background p-10 lg:p-12"
              style={{ borderLeft: "2px solid #444444" }}
            >
              <h2 className="font-display text-4xl font-bold leading-tight text-text-primary lg:text-5xl">
                The prep gap
              </h2>
              <div className="h-[3px] w-12 bg-zinc-700 mt-2 mb-8" />
              <div className="space-y-8">
                <div>
                  <p className="mb-1 font-display text-lg tracking-widest text-text-muted">01</p>
                  <p className="mb-2 font-display text-lg font-bold leading-snug text-text-primary lg:text-xl">
                    Most candidates rehearse blind.
                  </p>
                  <p className="text-base leading-relaxed text-text-secondary">
                    Reading question lists and rehearsing in your head doesn&apos;t
                    prepare you for the panel.
                  </p>
                </div>
                <div>
                  <p className="mb-1 font-display text-lg tracking-widest text-text-muted">02</p>
                  <p className="mb-2 font-display text-lg font-bold leading-snug text-text-primary lg:text-xl">
                    Panels score against criteria you&apos;ve never seen.
                  </p>
                  <p className="text-base leading-relaxed text-text-secondary">
                    Specific competencies, weighted in specific ways, that almost
                    no candidate has reviewed.
                  </p>
                </div>
                <div>
                  <p className="mb-1 font-display text-lg tracking-widest text-text-muted">03</p>
                  <p className="mb-2 font-display text-lg font-bold leading-snug text-text-primary lg:text-xl">
                    &ldquo;Prepared&rdquo; and &ldquo;prepared correctly&rdquo; are different things.
                  </p>
                  <p className="text-base leading-relaxed text-text-secondary">
                    The gap between them is where careers are lost.
                  </p>
                </div>
              </div>
            </div>

            {/* Right — What FirePrep does: activated, thicker orange border, subtle glow */}
            <div className="rounded-2xl border border-border border-l-[3px] border-l-orange bg-surface-raised p-10 lg:p-12 shadow-[0_0_28px_rgba(249,115,22,0.07)] bg-orange-950/30">
              <h2 className="font-display text-4xl font-bold leading-tight text-text-primary lg:text-5xl">
                What FirePrep does
              </h2>
              <div className="h-[3px] w-12 bg-orange-500 mt-2 mb-8" />
              <div className="space-y-8">
                <div>
                  <p className="mb-1 font-display text-lg tracking-widest text-orange-400">01</p>
                  <p className="mb-2 font-display text-lg font-bold leading-snug text-text-primary lg:text-xl">
                    Practice out loud, on the clock.
                  </p>
                  <p className="text-base leading-relaxed text-text-secondary">
                    Real questions, real timing — the way you&apos;ll have to
                    deliver in the room.
                  </p>
                </div>
                <div>
                  <p className="mb-1 font-display text-lg tracking-widest text-orange-400">02</p>
                  <p className="mb-2 font-display text-lg font-bold leading-snug text-text-primary lg:text-xl">
                    Get scored on the same competencies panels use.
                  </p>
                  <p className="text-base leading-relaxed text-text-secondary">
                    Composure, decision-making, communication, integrity,
                    teamwork.
                  </p>
                </div>
                <div>
                  <p className="mb-1 font-display text-lg tracking-widest text-orange-400">03</p>
                  <p className="mb-2 font-display text-lg font-bold leading-snug text-text-primary lg:text-xl">
                    See exactly which side you&apos;re on.
                  </p>
                  <p className="text-base leading-relaxed text-text-secondary">
                    Criterion-level feedback the moment you finish — not weeks
                    after a rejection letter.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 3: Product Preview ── */}
      <section>
        <div className="mx-auto w-full max-w-7xl px-6 py-[80px] lg:px-12 lg:py-[120px]">

          {/* Section header */}
          <div className="mb-16 lg:mb-20">
            <div aria-hidden="true" className="mb-3 h-[2px] w-10 bg-orange" />
            <h2 className="font-display text-4xl font-bold leading-tight text-text-primary lg:text-5xl">
              Every session, end to end.
            </h2>
          </div>

          {/* Flow — capped width, centered */}
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col lg:flex-row lg:items-stretch">

              {/* Node 01 — Practice */}
              <div className="flex-1 rounded-2xl border border-border bg-gradient-to-br from-zinc-900 to-orange-950/10 p-6 lg:p-8">
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-display text-xl tracking-widest text-orange-400">01</p>
                  <Mic className="h-6 w-6 text-orange" aria-hidden="true" />
                </div>
                <h3 className="mb-3 font-display text-2xl font-bold uppercase text-text-primary lg:text-3xl">
                  Practice
                </h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  Spoken-aloud answers, on the clock. Real questions, recorded,
                  transcribed, and ready to grade.
                </p>
              </div>

              {/* Connector */}
              <div
                aria-hidden="true"
                className="flex shrink-0 items-center justify-center py-5 text-orange opacity-50 lg:px-5 lg:py-0"
              >
                <ChevronRight className="hidden h-12 w-12 lg:block" />
                <ChevronDown className="h-12 w-12 lg:hidden" />
              </div>

              {/* Node 02 — Score */}
              <div className="flex-1 rounded-2xl border border-border bg-gradient-to-br from-zinc-900 to-orange-950/20 p-6 lg:p-8">
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-display text-xl tracking-widest text-orange-400">02</p>
                  <Target className="h-6 w-6 text-orange" aria-hidden="true" />
                </div>
                <h3 className="mb-3 font-display text-2xl font-bold uppercase text-text-primary lg:text-3xl">
                  Score
                </h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  Every answer broken down by criterion. See exactly which parts
                  you hit, which you missed, and what to fix on the next one.
                </p>
              </div>

              {/* Connector */}
              <div
                aria-hidden="true"
                className="flex shrink-0 items-center justify-center py-5 text-orange opacity-50 lg:px-5 lg:py-0"
              >
                <ChevronRight className="hidden h-12 w-12 lg:block" />
                <ChevronDown className="h-12 w-12 lg:hidden" />
              </div>

              {/* Node 03 — Track */}
              <div className="flex-1 rounded-2xl border border-border bg-gradient-to-br from-zinc-900 to-orange-950/40 p-6 lg:p-8">
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-display text-xl tracking-widest text-orange-400">03</p>
                  <TrendingUp className="h-6 w-6 text-orange" aria-hidden="true" />
                </div>
                <h3 className="mb-3 font-display text-2xl font-bold uppercase text-text-primary lg:text-3xl">
                  Track
                </h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  Competency averages across every session. Know where you stand
                  before the panel does.
                </p>
              </div>

            </div>

            {/* Caption */}
            <p className="mt-10 text-center text-sm leading-relaxed text-text-muted lg:mt-12">
              5–10 questions per session. Criterion-level scoring on every answer.
              Competency trends across all your sessions — so you know exactly
              what to fix before the panel.
            </p>
          </div>

        </div>
      </section>

      {/* ── Video Transition ── */}
      <section
        className="relative h-[40vh] overflow-hidden md:h-[60vh]"
        style={{
          backgroundImage: "url(/firefighters.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Video — shown on all screen sizes */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/firefighters.jpg"
          aria-hidden="true"
        >
          <source src="/fire-loop.mp4" type="video/mp4" />
        </video>

        {/* Dark gradient overlay — ensures text legibility over any video frame */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/60"
        />

        {/* Overlay text */}
        <div className="relative z-20 flex h-full items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            <h2 className="mb-3 font-display text-4xl font-bold uppercase tracking-tight text-text-primary md:text-6xl">
              No more guessing.
            </h2>
            <h2 className="font-display text-4xl font-bold uppercase leading-snug tracking-tight text-text-primary md:text-6xl">
              Walk in knowing exactly what panels are{" "}
              <span className="text-orange">scoring.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* ── Section 4: Built for Entry-Level & Lateral ── */}
      <section className="bg-surface">
        <div className="mx-auto w-full max-w-7xl px-6 py-[80px] lg:px-12 lg:py-[100px]">

          {/* Header block */}
          <div className="mb-14 lg:mb-16">
            <div aria-hidden="true" className="mb-3 h-[2px] w-10 bg-orange" />
            <h2 className="mb-5 font-display text-4xl font-bold leading-tight text-text-primary lg:text-5xl">
              Built for entry-level and lateral candidates — whether it&apos;s
              your first attempt or your fifth.
            </h2>
            <p className="max-w-3xl text-xl leading-relaxed text-text-secondary">
              Generic prep books are static. FirePrep questions are curated,
              regularly updated, and randomized — closer to how real panels
              actually run.
            </p>
          </div>

          {/* 2×2 grid — card surfaces with top orange border + top-left icon */}
          <div className="mx-auto max-w-6xl grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">

            {/* Card 01 — Ban */}
            <div className="rounded-2xl border border-border border-t-[3px] border-t-orange bg-surface-raised p-8">
              <Ban className="mb-6 h-9 w-9 text-orange" aria-hidden="true" />
              <p className="font-display text-lg font-semibold leading-snug text-text-primary lg:text-xl">
                Generic interview prep doesn&apos;t translate to the fire
                service.
              </p>
            </div>

            {/* Card 02 — Timer */}
            <div className="rounded-2xl border border-border border-t-[3px] border-t-orange bg-surface-raised p-8">
              <Timer className="mb-6 h-9 w-9 text-orange" aria-hidden="true" />
              <p className="font-display text-lg font-semibold leading-snug text-text-primary lg:text-xl">
                Reading questions in your head isn&apos;t practice. Answering
                them out loud, on the clock, while being scored is.
              </p>
            </div>

            {/* Card 03 — Gauge */}
            <div className="rounded-2xl border border-border border-t-[3px] border-t-orange bg-surface-raised p-8">
              <Gauge className="mb-6 h-9 w-9 text-orange" aria-hidden="true" />
              <p className="font-display text-lg font-semibold leading-snug text-text-primary lg:text-xl">
                You don&apos;t just need to answer well. You need to show,
                under pressure and time limits, why they need you on this
                department.
              </p>
            </div>

            {/* Card 04 — Hourglass */}
            <div className="rounded-2xl border border-border border-t-[3px] border-t-orange bg-surface-raised p-8">
              <Hourglass className="mb-6 h-9 w-9 text-orange" aria-hidden="true" />
              <p className="font-display text-lg font-semibold leading-snug text-text-primary lg:text-xl">
                Falling short isn&apos;t a hiccup — it&apos;s potentially a
                career delayed by years. Make the next attempt the last.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── Section 5: Founder ── */}
      <section>
        <div className="mx-auto w-full max-w-7xl px-6 py-[80px] lg:px-12 lg:py-[120px]">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

            {/* Image — first in DOM (top on mobile), pushed to right column on desktop */}
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-border lg:order-last"
              style={{ aspectRatio: "1035/691", maxHeight: "560px" }}
            >
              <Image
                src="/founder.jpg"
                alt="Founder of FirePrep, an active firefighter"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Right — Header + body paragraphs */}
            <div>
              <div className="mb-8">
                <div aria-hidden="true" className="mb-3 h-[2px] w-10 bg-orange" />
                <h2 className="font-display text-4xl font-bold leading-tight text-text-primary lg:text-5xl">
                  Why I&apos;m building this.
                </h2>
              </div>
              <div className="space-y-6 text-lg leading-relaxed text-text-secondary">
                <p>
                  I&apos;m an active firefighter. Before I got hired, I went
                  through many hiring processes — different departments,
                  different formats, different versions of the same panel
                  sitting across from me asking variations of the same
                  questions.
                </p>
                <p>
                  I learned the prep gap firsthand. The advice online is
                  generic. The expensive coaching options are opaque. The
                  actual scoring criteria panels use are public — rooted in
                  fire service competency frameworks that have been around for
                  decades — but no tool actually uses them to grade your
                  practice.
                </p>
                <p>
                  What I have is the candidate&apos;s perspective — across many
                  processes, across departments, and the kind of pattern
                  recognition you only get from going through it more than once.
                  I built FirePrep to share that with the next person walking
                  in.
                </p>
                <p>
                  This is being built openly. Waitlist members get input on
                  what gets built and what changes. The goal is to make the
                  prep tool I wish I&apos;d had on attempt one.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 6: How It Works ── */}
      <section className="bg-surface">
        <div className="mx-auto w-full max-w-7xl px-6 py-[80px] lg:px-12 lg:py-[120px]">

          <div className="mb-16 lg:mb-20">
            <div aria-hidden="true" className="mb-3 h-[2px] w-10 bg-orange" />
            <h2 className="font-display text-4xl font-bold leading-tight text-text-primary lg:text-5xl">
              How it works.
            </h2>
          </div>

          <div className="mx-auto max-w-4xl">

            {/* Point 01 — no top divider */}
            <div className="pb-10 lg:pb-12">
              <p className="mb-3 font-mono text-xs tracking-widest text-orange">
                01 — INPUT
              </p>
              <h3 className="mb-4 font-display text-2xl font-bold leading-snug text-text-primary lg:text-3xl">
                Real questions, real timing.
              </h3>
              <p className="text-base leading-relaxed text-text-secondary lg:text-lg">
                Practice questions drawn from the kinds of behavioral and
                situational scenarios oral boards actually ask. Speak your
                answer out loud, on the clock, the way you&apos;ll have to in
                front of the panel.
              </p>
            </div>

            {/* Point 02 */}
            <div className="border-t border-border-subtle py-10 lg:py-12">
              <p className="mb-3 font-mono text-xs tracking-widest text-orange">
                02 — EVALUATION
              </p>
              <h3 className="mb-4 font-display text-2xl font-bold leading-snug text-text-primary lg:text-3xl">
                Scored against fire-service competencies.
              </h3>
              <p className="text-base leading-relaxed text-text-secondary lg:text-lg">
                Every answer evaluated against the same competency areas oral
                boards score: composure under pressure, decision-making,
                communication, integrity, and fire service knowledge. Built on
                structured interview research methodology and informed by NFPA
                1001&apos;s professional qualification framework.
              </p>
            </div>

            {/* Point 03 */}
            <div className="border-t border-border-subtle py-10 lg:py-12">
              <p className="mb-3 font-mono text-xs tracking-widest text-orange">
                03 — OUTPUT
              </p>
              <h3 className="mb-4 font-display text-2xl font-bold leading-snug text-text-primary lg:text-3xl">
                AI grading, not generic feedback.
              </h3>
              <p className="text-base leading-relaxed text-text-secondary lg:text-lg">
                AI evaluates each criterion individually. See exactly which
                criteria you hit, which you missed, and what specifically to fix
                on the next attempt — not vague &ldquo;good job&rdquo; feedback.
              </p>
            </div>

            {/* Point 04 */}
            <div className="border-t border-border-subtle pt-10 lg:pt-12">
              <p className="mb-3 font-mono text-xs tracking-widest text-orange">
                04 — ANALYSIS
              </p>
              <h3 className="mb-4 font-display text-2xl font-bold leading-snug text-text-primary lg:text-3xl">
                Trends that show your prep working.
              </h3>
              <p className="text-base leading-relaxed text-text-secondary lg:text-lg">
                Competency scores roll up across all your sessions. See where
                you&apos;re consistently strong, where you keep losing points,
                and walk into the real panel knowing exactly what you&apos;ve
                fixed.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── Section 7: Final CTA ── */}
      <section>
        <div className="mx-auto w-full max-w-7xl px-6 py-[120px] lg:px-12 lg:py-[160px]">
          <div className="mx-auto max-w-xl text-center">

            <div aria-hidden="true" className="mx-auto mb-4 h-[2px] w-10 bg-orange" />
            <h2 className="mb-6 font-display text-5xl font-bold leading-tight text-text-primary lg:text-6xl">
              Get on the list.
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-text-secondary">
              Free first 90 days at launch. Early access before public release.
              Direct input on what gets built.
            </p>
            <WaitlistForm id="final-cta-form" />
            <p className="mt-4 text-xs tracking-wide text-text-muted">
              No credit card. No spam. Unsubscribe anytime.
            </p>

          </div>
        </div>
      </section>

    </main>
  );
}
