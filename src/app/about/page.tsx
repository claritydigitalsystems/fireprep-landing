import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { CtaBlock, Eyebrow, TEXT_LINK } from "../components/PageParts";
import ScreenSlot from "../components/ScreenSlot";
import { pageMetadata } from "../lib/site";
import { breadcrumbLd, founderLd } from "../lib/schema";

export const metadata = pageMetadata({
  title: "About",
  description:
    "First Call was built by a firefighter who spent two years learning how to win the oral board, then built the practice tool he wished he had.",
  path: "/about",
});

/* Copy is Scott's draft, used as written. He finalizes it.
   Layout: hero with the founder photo slot, a credentials strip, then the
   story in a centred reading column, broken by "It worked." on a
   full-bleed raised band (the /how-it-works band treatment). */

/** Credentials strip. Stacked under 768px: "Human-Computer Interaction"
    won't fit a third of a 375px screen without wrapping. */
const CREDENTIALS = [
  { value: "Close to 10", label: "oral boards" },
  { value: "9 years", label: "on the job" },
  { value: "M.S.", label: "Human-Computer Interaction" },
];

const STORY = [
  {
    id: "the-grind",
    label: "The grind",
    paragraphs: [
      "When I decided I was getting hired, I went all in for two years. I interviewed with close to ten departments. I recorded myself answering questions and made myself listen back. I wrote out answers, took them apart, and took notes on what actually landed. I did in-person prep classes run by chiefs, made station visits, read the books, talked to everyone on the job who'd give me the time, and learned exactly how the hiring process works.",
      "The whole time, one part was harder to prepare for than everything else: the oral board. It's the highest-stakes part of hiring and the one with the least real way to practice. Friends can't score you. Coaching is expensive. Question lists just teach you to sound rehearsed. There was no way to practice out loud and get honest, structured feedback on where I actually stood.",
    ],
  },
  {
    id: "why-it-exists",
    label: "Why it exists",
    paragraphs: [
      "But I never stopped thinking about that gap. Alongside the career, I earned a master's in human-computer interaction, a research-heavy program, and the work I did through it focused on public safety recruitment and hiring. So I built the thing that should have existed: a full mock oral board. A panel reads you each question out loud, you answer on the clock, and every answer is scored against a rubric built for that specific question, the way a structured board scores it. Not \"did that feel okay.\" Real feedback on where you're strong, where you're weak, and whether you're getting better.",
    ],
  },
  {
    id: "the-standard",
    label: "The standard behind it",
    paragraphs: [
      "Everything in it is built on how fire-service oral boards actually evaluate candidates and on published research about what separates a strong interview from a weak one. The point is simple: walk into your board already knowing how you sound, instead of finding out when it counts.",
    ],
  },
];

function StorySection({
  label,
  paragraphs,
}: {
  label: string;
  paragraphs: string[];
}) {
  return (
    <div>
      <h2 className="mb-4 font-display text-2xl font-bold leading-snug text-text-primary lg:text-3xl">
        {label}
      </h2>
      <div className="space-y-5 text-lg leading-relaxed text-text-secondary">
        {paragraphs.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
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

      {/* Hero. Photo slot: drop the portrait at /public/about/founder.jpg
          (about 4:5, one image at every width). Until then the slot shows a
          labeled placeholder at the same size. */}
      <section>
        <div className="mx-auto w-full max-w-7xl px-6 pt-[64px] pb-[40px] lg:px-12 lg:pt-[96px] lg:pb-[64px]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center md:gap-12 lg:gap-16">
            <div>
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
            <ScreenSlot
              id="founder"
              label="Founder photo"
              alt="Scott Shimala, firefighter and founder of First Call"
              desktopSrc="/about/founder.jpg"
              mobileSrc={false}
              aspect="4/5"
              frame="none"
              placeholderKind="Photo"
              sizes="(max-width: 767px) 340px, 380px"
              eager
              className="mx-auto w-full max-w-[340px] md:mr-0 md:max-w-[380px]"
            />
          </div>
        </div>
      </section>

      {/* Credentials strip. */}
      <section aria-label="Credentials">
        <div className="mx-auto w-full max-w-7xl px-6 pb-[48px] lg:px-12 lg:pb-[72px]">
          <dl className="grid grid-cols-1 divide-y divide-border border-y border-border md:grid-cols-3 md:divide-x md:divide-y-0">
            {CREDENTIALS.map((c) => (
              <div
                key={c.label}
                className="flex flex-col-reverse gap-1 py-6 text-center md:px-8 md:py-8 md:text-left md:first:pl-0 md:last:pr-0"
              >
                <dt className="text-base text-text-muted">{c.label}</dt>
                <dd className="font-display text-4xl font-bold leading-none text-text-primary lg:text-5xl">
                  {c.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-7xl px-6 pb-[48px] lg:px-12 lg:pb-[72px]">
          <div className="mx-auto max-w-3xl">
            <StorySection label={grind.label} paragraphs={grind.paragraphs} />
          </div>
        </div>
      </section>

      {/* Proof: the one large statement on the page, on the raised band. */}
      <section aria-labelledby="on-the-job" className="border-y border-border bg-surface">
        <div className="mx-auto w-full max-w-7xl px-6 py-[56px] lg:px-12 lg:py-[80px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="on-the-job" className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-text-muted">
              On the job
            </h2>
            <p className="font-display text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
              It worked.{" "}
              <span className="text-accent">
                I&apos;ve been on the job for nine years now.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-7xl px-6 py-[48px] lg:px-12 lg:py-[72px]">
          <div className="mx-auto max-w-3xl space-y-10 lg:space-y-12">
            <StorySection label={why.label} paragraphs={why.paragraphs} />
            <StorySection label={standard.label} paragraphs={standard.paragraphs} />

            <p className="text-base leading-relaxed text-text-muted">
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
