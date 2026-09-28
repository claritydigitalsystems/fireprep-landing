import Link from "next/link";
import { ChevronDown } from "lucide-react";
import JsonLd from "../components/JsonLd";
import { CtaBlock, Eyebrow, TEXT_LINK } from "../components/PageParts";
import { SectionToc } from "../components/SectionToc";
import { APP_URL } from "../lib/links";
import { pageMetadata, SITE_URL, SUPPORT_EMAIL } from "../lib/site";
import { breadcrumbLd } from "../lib/schema";
import { OpenFromHash } from "./OpenFromHash";

export const metadata = pageMetadata({
  title: "FAQ",
  description:
    "Straight answers about First Call: how the oral board scoring works, what happens to your recordings, who it's for, and what it costs.",
  path: "/faq",
});

/** One source for both the rendered list and the FAQPage schema, so the two
    can never drift. `answer` is plain text; `link` is appended as a final
    sentence (rendered as a link, and as its label text in the schema). */
type Faq = {
  /** Anchor for deep links (/faq#<id>): the slug of the question as first
      published. Keep it when the question is reworded, so links hold. */
  id: string;
  q: string;
  answer: string;
  link?: { href: string; label: string; external?: boolean };
};

/** A category: an H2 on the page and a jump link in the sidebar. */
type FaqGroup = { id: string; title: string; faqs: Faq[] };

const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "getting-started",
    title: "Getting started",
    faqs: [
      {
        id: "what-is-first-call",
        q: "What is First Call?",
        answer:
          "First Call is a practice tool for the fire service oral board. You answer real oral board questions out loud, on a timer, and every answer is scored against a rubric written for that question. You see what landed, what didn't, and what to work on next.",
        link: { href: "/how-it-works", label: "See how it works." },
      },
      {
        id: "who-built-it",
        q: "Who built it?",
        answer:
          "Scott Shimala, a firefighter who spent two years preparing for oral boards before getting hired, and who has a master's in human-computer interaction.",
        link: { href: "/about", label: "Read the story." },
      },
      {
        id: "do-i-need-fire-service-experience",
        q: "Do I need fire service experience?",
        answer:
          "No. The questions are the kind oral boards ask entry-level candidates, and none of them require you to have worked in the fire service. Your answers can draw on work, school, sports, volunteering, or anything else from your own life.",
      },
      {
        id: "does-it-work-for-lateral-candidates",
        q: "Does it work for lateral candidates?",
        answer:
          "Yes. Oral boards evaluate the same core competencies whether you're new or already on the job somewhere else. You'll have more fire experience to draw on in your answers, and the scoring will hold you to the same standard.",
      },
      {
        id: "what-do-i-need",
        q: "What do I need?",
        answer:
          "A phone or computer with a microphone, and a quiet space where you can talk out loud. That's it.",
      },
    ],
  },
  {
    id: "how-the-scoring-works",
    title: "How the scoring works",
    faqs: [
      {
        id: "is-the-feedback-from-ai",
        q: "Is the feedback from AI?",
        answer:
          "Yes. AI does the scoring, but it doesn't decide what a good answer is. Every question has its own rubric, written by a person, with specific criteria and a defined description of each score level. The AI's job is to measure your answer against that rubric. The rubric sets the bar, not the AI's opinion.",
      },
      {
        id: "how-is-this-different-from-practicing-with-a-friend-or-reading-question-lists",
        q: "How is this different from practicing with a friend or reading question lists?",
        answer:
          "A friend can listen, but they can't score you against defined criteria, and they'll usually go easy on you. Question lists show you what might be asked, but reading answers doesn't prepare you to say one out loud under pressure, and memorized answers tend to sound rehearsed. First Call has you actually answer, out loud, then scores you the same way every time.",
      },
      {
        id: "does-it-grade-my-accent-or-how-i-sound",
        q: "Does it grade my accent or how I sound?",
        answer:
          "No. Your answer is converted to a transcript and the content is what gets scored: what you said, how you structured it, and whether it answered the question. Accent and speaking style aren't part of the score.",
      },
      {
        id: "why-is-the-scoring-so-strict",
        q: "Why is the scoring so strict?",
        answer:
          "On purpose. Real boards are strict. A practice tool that grades easier than the real thing feels good and leaves you unprepared. If First Call is going to be wrong about you, it's better for it to be tough than generous.",
      },
    ],
  },
  {
    id: "the-practice",
    title: "The practice",
    faqs: [
      /* TODO-VERIFY: "A short session fits in a lunch break." Check against real
         3-question session times (timer plus reading feedback). */
      {
        id: "how-long-does-a-session-take",
        q: "How long does a session take?",
        answer:
          "It depends on the length you pick. Sessions are 3, 5, or 8 questions, each on its own timer, plus time to read your feedback. A short session fits in a lunch break.",
      },
      {
        id: "why-dont-i-see-my-words-while-i-talk",
        q: "Why don't I see my words while I talk?",
        answer:
          "Real oral boards don't give you a teleprompter, so First Call doesn't either. Practicing without seeing your words builds the habit of answering from what you know, the way you'll have to in the room.",
      },
      {
        id: "will-the-questions-be-exactly-what-my-department-asks",
        q: "Will the questions be exactly what my department asks?",
        answer:
          "No one can promise that, and you should be skeptical of anyone who does. Departments write their own questions. What First Call covers is what oral boards consistently evaluate, so the skills you build carry over to whatever you're actually asked.",
      },
    ],
  },
  {
    id: "privacy-cost-and-help",
    title: "Privacy, cost, and help",
    faqs: [
      /* Kept general on purpose and checked against the app Privacy page
         (last updated September 5, 2026): transcript-only feedback, scheduled
         recording deletion, deletion on request. No retention numbers here, so
         this can't drift from the policy. */
      {
        id: "what-happens-to-my-recordings",
        q: "What happens to my recordings?",
        answer:
          "Your recording is converted to text, and your feedback is generated from that transcript. Voice recordings are deleted on a set schedule rather than kept indefinitely, and you can ask for your account and all of its data to be deleted at any time. The Privacy page has the full details.",
        link: { href: `${APP_URL}/privacy`, label: "Read the Privacy page.", external: true },
      },
      {
        id: "how-much-does-it-cost",
        q: "How much does it cost?",
        answer: "First Call is free while in beta. No credit card needed to sign up.",
      },
      /* TODO-VERIFY: "A real person reads every message." Keep only if true. */
      {
        id: "how-do-i-get-help",
        q: "How do I get help?",
        answer: `Email ${SUPPORT_EMAIL}. A real person reads every message.`,
      },
    ],
  },
];

const FAQS = FAQ_GROUPS.flatMap((g) => g.faqs);

function faqLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.link ? `${f.answer} ${f.link.label}` : f.answer,
      },
    })),
    url: `${SITE_URL}/faq`,
  };
}

function Answer({ faq }: { faq: Faq }) {
  const { answer, link } = faq;
  // The support address is written out in the text; make it clickable.
  const parts = answer.split(SUPPORT_EMAIL);
  return (
    <p className="text-base leading-relaxed text-text-secondary lg:text-lg">
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && (
            <a href={`mailto:${SUPPORT_EMAIL}`} className={TEXT_LINK}>
              {SUPPORT_EMAIL}
            </a>
          )}
        </span>
      ))}
      {link && (
        <>
          {" "}
          {link.external ? (
            <a href={link.href} className={TEXT_LINK}>
              {link.label}
            </a>
          ) : (
            <Link href={link.href} className={TEXT_LINK}>
              {link.label}
            </Link>
          )}
        </>
      )}
    </p>
  );
}

/* Layout, the guide template pattern. Below 1080px: one centred column at
   the current reading width (48rem), category links as a row under the
   hero, contact card just above the closing CTA. From 1080px: the questions
   column plus a sticky sidebar (category links, then the contact card), and
   the hero spans both columns so everything shares one left edge. */
const LAYOUT = "mx-auto w-full max-w-3xl min-[1080px]:max-w-[calc(48rem+19rem)]";

const SECTIONS = FAQ_GROUPS.map(({ id, title }) => ({ id, title }));

function ContactCard({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-md border border-border bg-surface p-5 ${className}`}>
      <p className="mb-1 font-display text-lg font-bold leading-snug text-text-primary">
        Still have a question?
      </p>
      <p className="text-base leading-relaxed text-text-secondary">
        Email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`} className={`${TEXT_LINK} break-all`}>
          {SUPPORT_EMAIL}
        </a>
      </p>
    </div>
  );
}

export default function FaqPage() {
  return (
    <main className="flex flex-col bg-background">
      <JsonLd data={faqLd()} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <OpenFromHash />

      {/* Same type and rhythm as PageHeader, on the centred layout. */}
      <section className="px-6 pt-[64px] pb-[40px] lg:px-12 lg:pt-[96px] lg:pb-[56px]">
        <div className={LAYOUT}>
          <div className="max-w-3xl">
            <Eyebrow>FAQ</Eyebrow>
            <h1 className="mb-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-text-primary md:text-5xl lg:text-6xl">
              Questions, answered straight.
            </h1>
            <div className="text-lg leading-relaxed text-text-secondary">
              <p>
                What First Call is, how the scoring works, and what happens to
                your data. If something isn&apos;t covered here, email{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`} className={TEXT_LINK}>
                  {SUPPORT_EMAIL}
                </a>
                .
              </p>
            </div>
          </div>

          <nav aria-label="FAQ sections" className="mt-8 min-[1080px]:hidden">
            <ul className="flex flex-wrap gap-2">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="inline-flex min-h-[44px] items-center rounded-md border border-border px-4 text-base text-text-secondary transition-colors hover:border-border-strong hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* Native <details>: keyboard and screen-reader support for free, and
          the answers stay in the HTML for search engines. OpenFromHash only
          adds deep links. */}
      <section className="px-6 pb-[32px] lg:px-12">
        <div
          className={`${LAYOUT} min-[1080px]:grid min-[1080px]:grid-cols-[minmax(0,48rem)_15rem] min-[1080px]:gap-x-16`}
        >
          <div className="min-w-0 space-y-12 lg:space-y-16">
            {FAQ_GROUPS.map((group) => (
              <div key={group.id}>
                <h2
                  id={group.id}
                  className="mb-2 scroll-mt-20 font-display text-3xl font-bold leading-tight text-text-primary lg:text-[2.1rem]"
                >
                  {group.title}
                </h2>
                <div className="border-t border-border">
                  {group.faqs.map((faq) => (
                    <details
                      key={faq.id}
                      id={faq.id}
                      className="group scroll-mt-20 border-b border-border"
                    >
                      <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background [&::-webkit-details-marker]:hidden">
                        <h3 className="font-body text-lg font-medium leading-snug tracking-normal text-text-primary">
                          {faq.q}
                        </h3>
                        <ChevronDown
                          className="h-5 w-5 shrink-0 text-text-secondary transition-transform group-open:rotate-180 group-open:text-accent"
                          aria-hidden="true"
                        />
                      </summary>
                      <div className="pb-6 pr-9">
                        <Answer faq={faq} />
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <aside className="hidden min-[1080px]:block">
            <div className="sticky top-24 space-y-8">
              <SectionToc sections={SECTIONS} title="On this page" />
              <ContactCard />
            </div>
          </aside>
        </div>
      </section>

      <div className="px-6 pt-[40px] lg:px-12 min-[1080px]:hidden">
        <div className={LAYOUT}>
          <ContactCard />
        </div>
      </div>

      <CtaBlock title="Easier to try it than read about it.">
        Answer one real oral board question and see how it scores. No account
        needed.
      </CtaBlock>
    </main>
  );
}
