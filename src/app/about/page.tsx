import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — FirePrep",
  description: "About FirePrep and the firefighter who built it.",
};

export default function AboutPage() {
  return (
    <main className="bg-background">
      <div className="mx-auto w-full max-w-7xl px-6 py-[80px] lg:px-12 lg:py-[120px]">

        {/* Hero — H1, body prose, and photo */}
        <section className="mx-auto mb-20 max-w-5xl pt-8 lg:mb-28 lg:pt-12">
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-6">
            <div className="space-y-6">
              <div className="flex items-stretch gap-4">
                <div aria-hidden="true" className="w-1 self-stretch bg-orange" />
                <h1 className="font-display text-4xl font-bold leading-tight text-text-primary lg:text-5xl">
                  Why this exists, and who&apos;s building it.
                </h1>
              </div>
              <p className="text-lg leading-relaxed text-text-secondary">
                FirePrep is an oral board prep tool for firefighter candidates.
                It runs full mock interviews — voice in, structured feedback out
                — built around the same kinds of competencies real hiring panels
                score against. It&apos;s designed for entry-level and lateral
                candidates testing in the US. It&apos;s currently pre-launch,
                refining with input from real candidates before opening to the
                public.
              </p>
            </div>
            <div className="mx-auto flex flex-col items-center">
              <Image
                src="/scott-headshot.jpg"
                alt="Scott, Indianapolis Fire Department firefighter and FirePrep founder"
                width={852}
                height={812}
                preload
                className="h-64 w-64 rounded-2xl object-cover lg:h-80 lg:w-80"
              />
              <p className="mt-4 text-xs text-zinc-500">
                Scott · Indianapolis Fire Department · 8 years
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl">

          {/* Section 2 — Why I built this */}
          <section className="mb-20 lg:mb-28">
            <div className="mb-8">
              <div aria-hidden="true" className="mb-3 h-[2px] w-10 bg-orange" />
              <h2 className="font-display text-3xl font-bold leading-tight text-text-primary lg:text-4xl">
                Why I built this.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-text-secondary">
              <p>
                Three years. Four hiring processes. Eight departments. The first
                oral board ended my chances on day one — I didn&apos;t know what
                they were scoring.
              </p>
              <p>
                I walked in thinking I&apos;d be fine. I&apos;d been told I
                interviewed well. I&apos;d done my research on the department. I
                had answers ready for the questions I expected. What I
                didn&apos;t have was any idea what the panel was actually
                evaluating, how they were scoring it, or why the answers I
                thought were strong were getting me ranked low.
              </p>
              <div className="rounded border border-dashed border-zinc-700 bg-zinc-900/50 px-4 py-3 text-sm italic text-text-muted">
                [PLACEHOLDER — specific moment / specific feeling about the
                first failure goes here. The real version names what it felt
                like to get the rejection, what changed in the months after,
                what kept me from quitting. Probably 60–80 words. To be written
                in real-content phase.]
              </div>
              <p>
                By the second process I started studying the structure of oral
                boards instead of the content. By the third I had a framework.
                By the fourth I had two offers in the same week and chose my career department.
              </p>
              <p>
                I wasn&apos;t a better firefighter on attempt four than I was on
                attempt one. I was a better candidate. The gap between those two
                things is the entire reason this product exists.
              </p>
            </div>
          </section>

          {/* Section 3 — What I learned that no one told me */}
          <section className="mb-20 lg:mb-28">
            <div className="mb-8">
              <div aria-hidden="true" className="mb-3 h-[2px] w-10 bg-orange" />
              <h2 className="font-display text-3xl font-bold leading-tight text-text-primary lg:text-4xl">
                What I learned that no one told me.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-text-secondary">
              <p>
                Oral boards aren&apos;t conversations. They&apos;re scored
                evaluations against criteria you can&apos;t see.
              </p>
              <div className="rounded border border-dashed border-zinc-700 bg-zinc-900/50 px-4 py-3 text-sm italic text-text-muted">
                [PLACEHOLDER — the specific insight goes here. The real version
                describes what changed between attempt one and attempt four —
                the realization that panels are scoring against fixed criteria,
                that &ldquo;good answer&rdquo; is not a feeling, that you can
                prepare for the structure even when you can&apos;t predict the
                questions. Probably 100–120 words. This is the most important
                paragraph on the page and it gets written carefully in the
                real-content phase.]
              </div>
              <p>
                Once I understood that, everything changed. I stopped trying to
                memorize answers. I started learning how panels score — what
                they&apos;re listening for in the first thirty seconds, what
                makes a &ldquo;3&rdquo; different from a &ldquo;2,&rdquo; what
                kills an otherwise strong answer. None of this is hidden.
                It&apos;s just not taught.
              </p>
              <p>That&apos;s the gap this product fills.</p>
            </div>
          </section>

          {/* Section 4 — What FirePrep actually is */}
          <section className="mb-20 lg:mb-28">
            <div className="mb-8">
              <div aria-hidden="true" className="mb-3 h-[2px] w-10 bg-orange" />
              <h2 className="font-display text-3xl font-bold leading-tight text-text-primary lg:text-4xl">
                What FirePrep actually is.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-text-secondary">
              <p>
                FirePrep gives you full mock oral board sessions — you answer
                real questions out loud, the system evaluates each answer
                against criterion-level scoring anchors, and you get feedback
                that names specifically what worked, what didn&apos;t, and why.
              </p>
              <p>
                It&apos;s not a chatbot. It&apos;s not a question bank with
                sample answers. It&apos;s an evaluation experience designed to
                feel like the real thing — including the part where you have to
                perform under pressure with no second tries.
              </p>
              <p>
                The scoring is built around the same kinds of competencies real
                fire-service hiring panels evaluate against — composure,
                decision-making, judgment, communication. The feedback names
                specific evidence from your answer, not generic praise.
              </p>
              <p>
                I also happen to have a master&apos;s in human-computer
                interaction, which is why the product is built the way it is —
                not as a question generator with AI bolted on, but as an actual
                evaluation experience designed for how candidates learn under
                pressure.
              </p>
              <p>It&apos;s the prep tool I wish I&apos;d had on attempt one.</p>
            </div>
          </section>

          {/* Section 5 — What I'm still figuring out */}
          <section className="mb-20 lg:mb-28">
            <div className="mb-8">
              <div aria-hidden="true" className="mb-3 h-[2px] w-10 bg-orange" />
              <h2 className="font-display text-3xl font-bold leading-tight text-text-primary lg:text-4xl">
                What I&apos;m still figuring out.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-text-secondary">
              <p>
                The product isn&apos;t done. I&apos;m building it solo, refining
                the question bank, tightening the rubrics, putting it in front
                of real candidates before opening it up.
              </p>
              <div className="rounded border border-dashed border-zinc-700 bg-zinc-900/50 px-4 py-3 text-sm italic text-text-muted">
                [PLACEHOLDER — specifics about current state go here. Real
                version names what&apos;s working, what&apos;s still rough,
                what&apos;s coming next. Could include: how many questions are
                written, what categories are covered, what&apos;s getting tested
                before launch, what the timeline looks like. Probably 80–100
                words. Honest, specific, no hedging. To be written in
                real-content phase.]
              </div>
              <p>
                I&apos;d rather ship something narrower and real than something
                broader and faked. The waitlist exists so the people who&apos;ll
                get the most out of this get it first, and so I can keep
                refining based on what real candidates actually need.
              </p>
            </div>
          </section>

          {/* Section 6 — If you're testing soon */}
          <section>
            <div className="mb-8">
              <div aria-hidden="true" className="mb-3 h-[2px] w-10 bg-orange" />
              <h2 className="font-display text-3xl font-bold leading-tight text-text-primary lg:text-4xl">
                If you&apos;re testing soon.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-text-secondary">
              <p>
                If you&apos;re in a hiring process, or about to be, the waitlist
                is open.
              </p>
              <p>
                No pitch. No urgency. Just: when this is ready, you&apos;ll be
                first to know.
              </p>
            </div>
            <div className="mt-10">
              <Link
                href="/#waitlist-form"
                className="inline-block rounded-lg bg-orange px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-orange-hover"
              >
                Join the waitlist
              </Link>
            </div>
          </section>

          </div>
        </div>
      </div>
    </main>
  );
}
