import Link from "next/link";
import { ChevronDown } from "lucide-react";
import JsonLd from "../components/JsonLd";
import { CtaBlock, PageHeader, TEXT_LINK } from "../components/PageParts";
import { APP_URL } from "../lib/links";
import { pageMetadata, SITE_URL, SUPPORT_EMAIL } from "../lib/site";
import { breadcrumbLd } from "../lib/schema";

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
  q: string;
  answer: string;
  link?: { href: string; label: string; external?: boolean };
};

const FAQS: Faq[] = [
  {
    q: "What is First Call?",
    answer:
      "First Call is a practice tool for the fire service oral board. You answer real oral board questions out loud, on a timer, and every answer is scored against a rubric written for that question. You see what landed, what didn't, and what to work on next.",
    link: { href: "/how-it-works", label: "See how it works." },
  },
  {
    q: "Who built it?",
    answer:
      "Scott Shimala, a firefighter who spent two years preparing for oral boards before getting hired, and who has a master's in human-computer interaction.",
    link: { href: "/about", label: "Read the story." },
  },
  {
    q: "Is the feedback from AI?",
    answer:
      "Yes. AI does the scoring, but it doesn't decide what a good answer is. Every question has its own rubric, written by a person, with specific criteria and a defined description of each score level. The AI's job is to measure your answer against that rubric. The rubric sets the bar, not the AI's opinion.",
  },
  {
    q: "How is this different from practicing with a friend or reading question lists?",
    answer:
      "A friend can listen, but they can't score you against defined criteria, and they'll usually go easy on you. Question lists show you what might be asked, but reading answers doesn't prepare you to say one out loud under pressure, and memorized answers tend to sound rehearsed. First Call has you actually answer, out loud, then scores you the same way every time.",
  },
  {
    q: "Does it grade my accent or how I sound?",
    answer:
      "No. Your answer is converted to a transcript and the content is what gets scored: what you said, how you structured it, and whether it answered the question. Accent and speaking style aren't part of the score.",
  },
  {
    q: "Why don't I see my words while I talk?",
    answer:
      "Real oral boards don't give you a teleprompter, so First Call doesn't either. Practicing without seeing your words builds the habit of answering from what you know, the way you'll have to in the room.",
  },
  /* Kept general on purpose and checked against the app Privacy page
     (last updated September 5, 2026): transcript-only feedback, scheduled
     recording deletion, deletion on request. No retention numbers here, so
     this can't drift from the policy. */
  {
    q: "What happens to my recordings?",
    answer:
      "Your recording is converted to text, and your feedback is generated from that transcript. Voice recordings are deleted on a set schedule rather than kept indefinitely, and you can ask for your account and all of its data to be deleted at any time. The Privacy page has the full details.",
    link: { href: `${APP_URL}/privacy`, label: "Read the Privacy page.", external: true },
  },
  {
    q: "Do I need fire service experience?",
    answer:
      "No. The questions are the kind oral boards ask entry-level candidates, and none of them require you to have worked in the fire service. Your answers can draw on work, school, sports, volunteering, or anything else from your own life.",
  },
  {
    q: "Does it work for lateral candidates?",
    answer:
      "Yes. Oral boards evaluate the same core competencies whether you're new or already on the job somewhere else. You'll have more fire experience to draw on in your answers, and the scoring will hold you to the same standard.",
  },
  {
    q: "What do I need?",
    answer:
      "A phone or computer with a microphone, and a quiet space where you can talk out loud. That's it.",
  },
  /* TODO-VERIFY: "A short session fits in a lunch break." Check against real
     3-question session times (timer plus reading feedback). */
  {
    q: "How long does a session take?",
    answer:
      "It depends on the length you pick. Sessions are 3, 5, or 8 questions, each on its own timer, plus time to read your feedback. A short session fits in a lunch break.",
  },
  {
    q: "How much does it cost?",
    answer: "First Call is free while in beta. No credit card needed to sign up.",
  },
  {
    q: "Will the questions be exactly what my department asks?",
    answer:
      "No one can promise that, and you should be skeptical of anyone who does. Departments write their own questions. What First Call covers is what oral boards consistently evaluate, so the skills you build carry over to whatever you're actually asked.",
  },
  {
    q: "Why is the scoring so strict?",
    answer:
      "On purpose. Real boards are strict. A practice tool that grades easier than the real thing feels good and leaves you unprepared. If First Call is going to be wrong about you, it's better for it to be tough than generous.",
  },
  /* TODO-VERIFY: "A real person reads every message." Keep only if true. */
  {
    q: "How do I get help?",
    answer: `Email ${SUPPORT_EMAIL}. A real person reads every message.`,
  },
];

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

      <PageHeader eyebrow="FAQ" title="Questions, answered straight.">
        <p>
          What First Call is, how the scoring works, and what happens to your
          data. If something isn&apos;t covered here, email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className={TEXT_LINK}>
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </PageHeader>

      {/* Native <details>: keyboard and screen-reader support for free, no
          client JS, and the answers stay in the HTML for search engines. */}
      <section>
        <div className="mx-auto w-full max-w-7xl px-6 pb-[32px] lg:px-12">
          <div className="max-w-3xl border-t border-border">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group border-b border-border">
                <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background [&::-webkit-details-marker]:hidden">
                  <h2 className="font-display text-xl font-bold leading-snug text-text-primary lg:text-2xl">
                    {faq.q}
                  </h2>
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
      </section>

      <CtaBlock title="Easier to try it than read about it.">
        Answer one real oral board question and see how it scores. No account
        needed.
      </CtaBlock>
    </main>
  );
}
