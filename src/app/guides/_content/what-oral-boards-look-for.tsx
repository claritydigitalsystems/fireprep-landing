import type { Guide, GuideSection } from "./types";
import { A, H2, LI, Note, P, Strong, UL } from "./prose";

/** Every H2 in this guide, in order. The headings below and the table of
    contents both render from here. */
const SECTIONS = {
  criteria: { id: "criteria", title: "Boards score against criteria, not vibes" },
  competencies: { id: "competencies", title: "The core competencies, in plain language" },
  specifics: { id: "specifics", title: "Specifics beat polish" },
  answerTheQuestion: { id: "answer-the-question", title: "Answer the question that was asked" },
  rehearsed: { id: "rehearsed", title: "Why rehearsed answers score badly" },
  feedback: { id: "feedback", title: "How to read scored feedback, and what to work on next" },
} satisfies Record<string, GuideSection>;

export const guide: Guide = {
  meta: {
    slug: "what-oral-boards-look-for",
    title: "What Fire Oral Boards Actually Look For",
    description:
      "Fire oral boards score against defined criteria, not gut feel. Learn the core competencies panels evaluate and why specific, honest answers beat polished ones.",
    summary:
      "The competencies panels score, why specifics beat polish, and how to use feedback to get better.",
    published: "2026-09-28",
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
    plain: "Can you get a point across clearly, in order, without making the listener work for it?",
  },
  {
    name: "Decision-making",
    plain: "When there's no perfect option, how do you weigh it, and do you actually make the call?",
  },
  {
    name: "Composure",
    plain: "Do you stay level when things get tense, including in the interview itself?",
  },
  {
    name: "Teamwork",
    plain: "Do you work well with people, including the ones you don't get along with?",
  },
  {
    name: "Integrity",
    plain: "Do you do the right thing when it's inconvenient, or when nobody would know?",
  },
  {
    name: "Adaptability",
    plain: "How do you handle change, criticism, and plans that fall apart?",
  },
  {
    name: "Public service",
    plain: "Do you understand that the job is serving the community, and does it show in what you've done?",
  },
  {
    name: "Job knowledge",
    plain: "Do you understand what the job really involves, and have you done the work to learn about it?",
  },
];

function Intro() {
  return (
    <P>
      A lot of candidates walk out of an oral board with no idea how it
      went. It felt fine. They were friendly. Then the list comes out and
      they&apos;re lower than they expected. Most of that confusion comes
      from not knowing what the panel was actually listening for. Here it
      is.
    </P>
  );
}

function Body() {
  return (
    <>
      <H2 id={SECTIONS.criteria.id}>{SECTIONS.criteria.title}</H2>
      <P>
        Most fire oral boards are structured. Each question is tied to one or
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
        same handful of qualities. Here are eight that cover most of what
        you&apos;ll be scored on:
      </P>
      <dl className="mb-8 divide-y divide-border border-y border-border">
        {COMPETENCIES.map((c) => (
          <div key={c.name} className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[180px_1fr] sm:gap-6">
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
          <Strong>Look for patterns, not single scores.</Strong> One weak
          answer is noise. The same competency scoring low across several
          answers is a signal.
        </LI>
        <LI>
          <Strong>Fix one thing at a time.</Strong> Pick the weakest area, work
          on it for a few sessions, then check whether it moved.
        </LI>
        <LI>
          <Strong>Read what was missing, not just the number.</Strong> The
          useful part of feedback is the gap between what you said and what a
          strong answer includes.
        </LI>
        <LI>
          <Strong>Re-answer, don&apos;t re-read.</Strong> After you read the
          feedback, answer again out loud. That&apos;s where the improvement
          actually happens.
        </LI>
      </UL>
      <P>
        That loop is what First Call is built around: every answer is scored
        against criteria for that question, and your results roll up into
        these eight competencies so you can see which one to work on.{" "}
        <A href="/how-it-works">See how the scoring works</A>, or start with the
        full guide on{" "}
        <A href="/guides/how-to-prepare-for-a-firefighter-oral-board">
          how to prepare for a firefighter oral board
        </A>
        .
      </P>
    </>
  );
}
