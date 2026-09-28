import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { CtaBlock, Eyebrow, TEXT_LINK } from "../components/PageParts";
import { pageMetadata } from "../lib/site";
import { breadcrumbLd, founderLd } from "../lib/schema";

export const metadata = pageMetadata({
  title: "About",
  description:
    "First Call was built by a firefighter who spent two years learning how to win the oral board, then built the practice tool he wished he had.",
  path: "/about",
});

/* Copy is Scott's draft, used as written. He finalizes it.
   Layout: the story runs on the homepage's numbered amber rail, one step per
   beat, with "It worked." pulled out as the one large statement. */

const STORY = [
  {
    id: "the-grind",
    label: "The grind",
    paragraphs: [
      "When I decided I was getting hired, I went all in for two years. I interviewed with close to ten departments. I recorded myself answering questions and made myself listen back. I wrote out answers, took them apart, and took notes on what actually landed. I did in-person prep classes run by chiefs, made station visits, read the books, talked to everyone on the job who'd give me the time, and learned exactly how the hiring process works from the inside.",
      "The whole time, one part was harder to prepare for than everything else: the oral board. It's the highest-stakes part of hiring and the one with the least real way to practice. Friends can't score you. Coaching is expensive and you get it once. Question lists just teach you to sound rehearsed. There was no way to practice out loud and get honest, structured feedback on where I actually stood.",
    ],
  },
  {
    id: "why-it-exists",
    label: "Why it exists",
    paragraphs: [
      "But I never stopped thinking about that gap. Alongside the career, I earned a master's in human-computer interaction and spent years studying the research on how people perform under evaluation and how good tools actually measure it. So I built the thing that should have existed: an app where you record a real answer and it scores you against a real oral-board rubric, the same way a panel would. Not \"did that feel okay.\" Real feedback on where you're strong, where you're weak, and whether you're getting better.",
    ],
  },
  {
    id: "the-standard",
    label: "The standard behind it",
    paragraphs: [
      "Everything in it is built on how fire-service oral boards actually evaluate candidates and on validated research about what separates a strong interview from a weak one. None of it is guessed. The point is simple: walk into your board already knowing how you sound, instead of finding out when it counts.",
    ],
  },
];

function StoryStep({
  n,
  label,
  paragraphs,
  last = false,
}: {
  n: string;
  label: string;
  paragraphs: string[];
  last?: boolean;
}) {
  return (
    <div className="grid grid-cols-[28px_1fr] gap-x-4 lg:grid-cols-[48px_1fr] lg:gap-x-5">
      <div className="flex flex-col items-center">
        <span className="font-display text-2xl font-bold leading-none text-accent">
          {n}
        </span>
        {!last && (
          <span aria-hidden="true" className="fp-rail-connector mt-3 w-px flex-1" />
        )}
      </div>
      <div className={last ? "" : "pb-10 lg:pb-12"}>
        <h2 className="mb-4 font-display text-2xl font-bold leading-snug text-text-primary lg:text-3xl">
          {label}
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-text-secondary">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const [grind, why, standard] = STORY;

  return (
    <main className="flex flex-col bg-background">
      <JsonLd data={founderLd} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      {/* Hero. Photo slot: when Scott supplies a real portrait, turn this
          into a two-column grid (lg:grid-cols-[1.4fr_1fr]) and drop the
          image in the right column, same frame as the homepage About photo:
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md border border-border">
              <Image src="/scott-portrait.jpg" alt="Scott Shimala in station gear" fill
                sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" priority />
            </div>
          No stock image in the meantime. */}
      <section>
        <div className="mx-auto w-full max-w-7xl px-6 pt-[64px] pb-[40px] lg:px-12 lg:pt-[96px] lg:pb-[64px]">
          <div className="max-w-3xl">
            <Eyebrow>About</Eyebrow>
            <h1 className="mb-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-text-primary md:text-5xl lg:text-6xl">
              Built by a firefighter who cracked the interview the hard way.
            </h1>
            <p className="text-lg leading-relaxed text-text-secondary lg:text-xl">
              The oral board is where most people lose the job. I spent two
              years learning how to win it, and then I built the tool I wish
              I&apos;d had.
            </p>
            <p className="mt-6 font-display text-base font-semibold text-text-primary">
              Scott Shimala &middot; Firefighter, founder of First Call
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-7xl px-6 pb-[48px] lg:px-12 lg:pb-[72px]">
          <div className="max-w-3xl">
            <StoryStep n="01" label={grind.label} paragraphs={grind.paragraphs} />
          </div>
        </div>
      </section>

      {/* Proof: the one large statement on the page. */}
      <section aria-labelledby="on-the-job">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl border-y border-border py-10 lg:py-14">
            <h2 id="on-the-job" className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-text-muted">
              On the job
            </h2>
            <p className="font-display text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
              It worked.{" "}
              <span className="text-accent">
                I&apos;ve been on the job for almost nine years now.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-7xl px-6 py-[48px] lg:px-12 lg:py-[72px]">
          <div className="max-w-3xl">
            <StoryStep n="02" label={why.label} paragraphs={why.paragraphs} />
            <StoryStep n="03" label={standard.label} paragraphs={standard.paragraphs} last />

            <p className="mt-10 text-base leading-relaxed text-text-muted">
              Want the mechanics?{" "}
              <Link href="/how-it-works" className={TEXT_LINK}>
                See how First Call scores an answer
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CtaBlock title="If you've got a board coming up, the worst way to walk in is untested.">
        Try one real question free, or create an account and run a full
        practice board.
      </CtaBlock>
    </main>
  );
}
