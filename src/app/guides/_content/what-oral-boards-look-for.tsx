import type { Guide, GuideSection } from "./types";
import { A, H2, LI, Note, P, Strong, UL } from "./prose";

/** Every H2 in this guide, in order. The headings below and the table of
    contents both render from here. */
const SECTIONS = {
  criteria: { id: "criteria", title: "Boards score against criteria, not vibes" },
  competencies: { id: "competencies", title: "What boards look for in a firefighter interview" },
  specifics: { id: "specifics", title: "Specifics beat polish" },
  answerTheQuestion: { id: "answer-the-question", title: "Answer the question that was asked" },
  rehearsed: { id: "rehearsed", title: "Why rehearsed answers score badly" },
  feedback: { id: "feedback", title: "How to read scored feedback, and what to work on next" },
} satisfies Record<string, GuideSection>;

export const guide: Guide = {
  meta: {
    slug: "what-oral-boards-look-for",
    title: "What Oral Boards Look For in a Firefighter Interview",
    description:
      "What oral boards look for in a firefighter interview: answers scored against defined criteria, the core competencies, and why specifics beat polish.",
    summary:
      "The competencies panels score, why specifics beat polish, and how to use feedback to get better.",
    published: "2026-09-28",
    updated: "2026-10-31",
    readMinutes: 6,
    related: ["how-to-prepare-for-a-firefighter-oral-board", "interview-nerves"],
    endCta: "playbook",
  },
  sections: Object.values(SECTIONS),
  takeaways: [
    "On most boards, each panel member scores your answer against a rating sheet, not on how friendly the room feels.",
    "Most questions are aimed at one or two core competencies, so ask yourself which one is being tested.",
    "Back up every claim about yourself with something you actually did.",
    "Listen to the whole question and answer that one, not the one you prepared.",
    "Know your stories cold, but don't memorize your sentences.",
  ],
  Intro,
  Body,
};

const COMPETENCIES: { name: string; plain: string }[] = [
  {
    name: "Communication",
    plain: "Can you get your point across clearly and in order, with the right amount of detail for the question?",
  },
  {
    name: "Decision-Making & Problem-Solving",
    plain: "Can you work through a problem, weigh the options, and land on a call you can defend?",
  },
  {
    name: "Composure Under Pressure",
    plain: "Do you stay steady when the stakes rise, without panicking, getting defensive, or getting frustrated? That includes the interview itself.",
  },
  {
    name: "Teamwork & Collaboration",
    plain: "Do you pull your weight, back up your teammates, handle disagreement, and put the crew ahead of your own credit?",
  },
  {
    name: "Integrity & Ethics",
    plain: "Do you tell the truth, own your mistakes, and hold the standard even when nobody's watching?",
  },
  {
    name: "Adaptability",
    plain: "When plans change or new information comes in, do you adjust and keep working?",
  },
  {
    name: "Customer Service / Public Interaction",
    plain: "Do you treat people with respect and real concern on their worst days, and represent the department well?",
  },
  {
    name: "Professional/Technical Knowledge",
    plain: "Do you understand what the job involves, and have you done the work to learn it?",
  },
];

function Intro() {
  return (
    <>
      <P>
        Oral boards look for specific, honest answers that show the qualities
        the department is hiring for, and they score them against a rating
        sheet, not on whether they liked you.
      </P>
      <P>
        A lot of candidates walk out of an oral board with no idea how it
        went. It felt fine. They were friendly. Then the list comes out and
        they&apos;re lower than they expected. Most of that confusion comes
        from not knowing what the panel was actually listening for. Here it
        is.
      </P>
    </>
  );
}

function Body() {
  return (
    <>
      <H2 id={SECTIONS.criteria.id}>{SECTIONS.criteria.title}</H2>
      <P>
        Most firefighter oral boards are structured. Each question is tied to one or
        more things the department wants to measure, and each panel member has
        a rating sheet that describes what a weak, acceptable, and strong
        answer looks like. They score what you say against that sheet.
      </P>
      <P>
        This is good news. It means the board isn&apos;t a personality contest,
        and it means you can prepare for it. A friendly panel that smiles and
        nods is still scoring you against the sheet. A stone-faced one might be
        scoring you well.
      </P>

      <H2 id={SECTIONS.competencies.id}>{SECTIONS.competencies.title}</H2>
      <P>
        Departments name them differently, but most boards come back to the
        same handful of qualities. Here they are in plain language: eight
        that cover most of what boards look for.
      </P>
      <dl className="mb-8 divide-y divide-border border-y border-border">
        {COMPETENCIES.map((c) => (
          <div key={c.name} className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[220px_1fr] sm:gap-6">
            <dt className="font-display text-lg font-bold text-text-primary">{c.name}</dt>
            <dd className="text-base leading-relaxed text-text-secondary lg:text-lg">{c.plain}</dd>
          </div>
        ))}
      </dl>
      <P>
        Most questions are aimed at one or two of these. When you hear a
        question, it&apos;s worth asking yourself which one it&apos;s really
        testing, because that tells you what the answer needs to show.
      </P>

      <H2 id={SECTIONS.specifics.id}>{SECTIONS.specifics.title}</H2>
      <P>
        Rating sheets reward evidence. &ldquo;I&apos;m a hard worker&rdquo; is
        a claim. A real situation where you did the hard work, what it took,
        and how it turned out is evidence. The polished claim almost always
        scores lower than the plain, specific story, even if the story is told
        a little awkwardly.
      </P>
      <P>
        If you only change one thing about how you answer, make it this: every
        time you say something about yourself, back it up with something you
        actually did.
      </P>

      <H2 id={SECTIONS.answerTheQuestion.id}>{SECTIONS.answerTheQuestion.title}</H2>
      <P>
        It sounds obvious. It&apos;s one of the most common ways candidates
        lose points. Under pressure, people hear a few familiar words and
        launch into the answer they prepared, which is close to the question
        but not the question. If they asked about a time you disagreed with a
        supervisor, an answer about a disagreement with a coworker misses,
        however good it is.
      </P>
      <P>
        Listen to the whole question. If you need a second to think, take it.
        It&apos;s better than a fast answer to the wrong thing.
      </P>

      <H2 id={SECTIONS.rehearsed.id}>{SECTIONS.rehearsed.title}</H2>
      <P>
        The panel is there to find out who you are and how you think. A
        memorized answer hides both. It tends to sound flat, it tends to be a
        little off from the actual question, and it falls apart if a panel
        member asks a follow-up. Worse, it signals that you prepared a
        performance instead of preparing yourself.
      </P>
      <Note>
        Know your stories cold. Don&apos;t memorize your sentences. The goal is
        to be so familiar with your own experiences that you can tell any of
        them, in your own words, in whatever direction the question needs.
      </Note>

      <H2 id={SECTIONS.feedback.id}>{SECTIONS.feedback.title}</H2>
      <P>
        Whether it comes from a mentor, a class, or a tool, scored feedback is
        only useful if you act on it. A few rules:
      </P>
      <UL>
        <LI>
          <Strong>Look for patterns, not single scores.</Strong>{" "}One weak
          answer is noise. The same competency scoring low across several
          answers is a signal.
        </LI>
        <LI>
          <Strong>Fix one thing at a time.</Strong>{" "}Pick the weakest area, work
          on it for a few sessions, then check whether it moved.
        </LI>
        <LI>
          <Strong>Read what was missing, not just the number.</Strong>{" "}The
          useful part of feedback is the gap between what you said and what a
          strong answer includes.
        </LI>
        <LI>
          <Strong>Re-answer, don&apos;t re-read.</Strong>{" "}After you read the
          feedback, answer again out loud. That&apos;s where the improvement
          actually happens.
        </LI>
      </UL>
      <P>
        That loop is exactly what First Call is for, and it&apos;s built to
        feel like a real board. Turn on First Call Live and a panel reads you
        the question out loud. You answer on the clock. Then your answer is
        scored against a rubric written for that specific question, with
        weak-to-strong descriptions like the ones on a board&apos;s rating
        sheet, drawn from the frameworks fire departments publish for their
        own hiring.
      </P>
      <P>
        You see which criteria you hit, which ones you missed, and the one
        thing to focus on next time. Every answer rolls up into these eight
        competencies, so after a few sessions the pattern shows: which one
        keeps costing you points, and whether it&apos;s moving. Answer, see
        the gap, answer again.
      </P>
      <P>
        Plenty of candidates walk into their board having never once heard
        how their answers would score. You don&apos;t have to be one of them.
      </P>
      <P>
        <A href="/how-it-works">See how the scoring works</A>, or start with the
        full guide on{" "}
        <A href="/guides/how-to-prepare-for-a-firefighter-oral-board">
          how to prepare for a firefighter interview
        </A>
        .
      </P>
    </>
  );
}
