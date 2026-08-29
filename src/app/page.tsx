import Image from "next/image";
import { Play } from "lucide-react";
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

    </main>
  );
}
