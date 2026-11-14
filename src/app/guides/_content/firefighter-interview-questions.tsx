import type { Guide, GuideSection } from "./types";
import { H2, LI, P, Strong, UL } from "./prose";

/* Rule for every guide: cover everything AROUND answering. No sample
   questions with model answers, no scripted answers. That's the app's job,
   and scripts are the failure these guides teach against. */

/** Every H2 in this guide. The headings below render from here, so the
    table of contents always matches the article. */
const SECTIONS = {
  threeTypes: {
    id: "the-three-types-of-firefighter-interview-questions",
    title: "The three types of firefighter interview questions",
  },
  behavioral: { id: "behavioral-questions", title: "Behavioral questions: “Tell us about a time…”" },
  situational: { id: "situational-questions", title: "Situational questions: “What would you do if…”" },
  values: { id: "values-questions", title: "Values questions: “Why this job?”" },
  howToPractice: { id: "how-to-practice-them", title: "How to practice them" },
} satisfies Record<string, GuideSection>;

export const guide: Guide = {
  meta: {
    slug: "firefighter-interview-questions",
    title: "Firefighter Interview Questions: The Three Types and How to Approach Them",
    description:
      "Firefighter interview questions mostly fall into three types: behavioral, situational, and values. What each one tests, how to approach it, and examples to practice out loud.",
    summary:
      "Behavioral, situational, and values questions: what each type tests, how to approach it, and example questions to practice out loud.",
    published: "2026-11-14",
    updated: "2026-11-14",
    readMinutes: 7,
    related: ["what-oral-boards-look-for", "interview-nerves"],
    endCta: "practice",
  },
  sections: Object.values(SECTIONS),
  takeaways: [
    "Most firefighter interview questions are behavioral, situational, or values questions. Formats vary by department.",
    "Behavioral: one specific, real event, focused on what you did and how it turned out.",
    "Situational: use the facts given, state your priorities, and commit to an action.",
    "Values: concrete, honest reasons tied to the actual job.",
    "Practice out loud with real stories, not memorized scripts.",
  ],
  Intro,
  Body,
};

function Intro() {
  return (
    <P>
      Most firefighter interview questions fall into three types: behavioral
      questions about what you have done, situational questions about what
      you would do, and values questions about why you want the job and how
      you think about it. The number of questions, the format, and the time
      you get vary by department. But if you can recognize the type in the
      first few seconds, you know what the panel is listening for. This guide
      covers what each type tests, how to approach it, and example questions
      to practice out loud. It doesn&apos;t include sample answers, on
      purpose.
    </P>
  );
}

function Body() {
  return (
    <>
      <H2 id={SECTIONS.threeTypes.id}>{SECTIONS.threeTypes.title}</H2>
      <P>
        Most oral boards are structured. Every candidate gets the same
        questions, and the panel scores each answer against criteria set ahead
        of time. Personnel research has long found that structured interviews
        are more consistent and more predictive than open-ended conversations
        (Campion, Palmer &amp; Campion, 1997). Within that structure, questions
        tend to come in three types, and knowing which one you&apos;ve been
        asked is the first step to answering it well.
      </P>

      <H2 id={SECTIONS.behavioral.id}>{SECTIONS.behavioral.title}</H2>
      <P>
        <Strong>What they test.</Strong>{" "}How you&apos;ve handled something
        before is good evidence of how you&apos;ll handle it again. Researchers
        built a whole interview format around that idea, the behavior
        description interview (Janz, 1982). The panel wants one real event,
        told with enough detail to believe it.
      </P>
      <P>
        <Strong>How to approach them.</Strong>
      </P>
      <UL>
        <LI>
          Pick one specific event, not a summary of how you usually act.
          &ldquo;I stay calm under pressure&rdquo; is a claim. The night at work
          when you stayed calm is evidence.
        </LI>
        <LI>
          Spend most of your time on what you did. Set the scene quickly, then
          get to your actions and your reasons.
        </LI>
        <LI>
          Say how it turned out, honestly. If it didn&apos;t go perfectly, say
          what you&apos;d do differently. That usually lands better than a
          story where everything went right.
        </LI>
        <LI>
          STAR (situation, task, action, result) is a useful check that
          nothing&apos;s missing. You don&apos;t need to say the letters or
          follow the order exactly.
        </LI>
        <LI>
          Your example doesn&apos;t have to come from the fire service. Work,
          school, sports, family, and volunteering all count, as long as
          it&apos;s real and it&apos;s yours.
        </LI>
      </UL>
      <P>
        <Strong>Practice questions.</Strong>
      </P>
      <UL>
        <LI>Tell us about a time you had to learn something new quickly.</LI>
        <LI>
          Tell us about a time you had to explain something to someone who
          didn&apos;t get it the first time.
        </LI>
        <LI>
          Tell us about a time you made a mistake that affected someone else.
        </LI>
      </UL>

      <H2 id={SECTIONS.situational.id}>{SECTIONS.situational.title}</H2>
      <P>
        <Strong>What they test.</Strong>{" "}These give you a scenario and ask
        what you would do. They were developed from incidents on the job
        (Latham, Saari, Pursell &amp; Campion, 1980), on the idea that what you
        say you&apos;d do reflects how you&apos;d actually approach it. The
        panel is listening to your judgment: what you notice, what you put
        first, and whether you land on a decision.
      </P>
      <P>
        <Strong>How to approach them.</Strong>
      </P>
      <UL>
        <LI>
          Work with the facts they give you. You usually aren&apos;t expected
          to know a department&apos;s policies unless the question gives them
          to you. If something important is missing, say
          what you&apos;d assume and keep going.
        </LI>
        <LI>
          Say your priorities out loud. Safety, the people involved, your
          crew, and the chain of command often all come into it. Which one
          comes first, and why, is often what separates one answer from
          another.
        </LI>
        <LI>
          Commit to an action. Weighing options is good. Ending on &ldquo;it
          depends&rdquo; isn&apos;t.
        </LI>
        <LI>
          Keep it realistic. A heroic answer that skips the ordinary, correct
          steps tends to stand out for the wrong reasons.
        </LI>
      </UL>
      <P>
        <Strong>Practice questions.</Strong>
      </P>
      <UL>
        <LI>
          You notice a crewmate skipping a safety step during a training
          drill. What do you do?
        </LI>
        <LI>
          A resident asks you to come back after your shift to help with
          something at their house. How do you handle it?
        </LI>
        <LI>
          You&apos;re given a task you&apos;ve never done, and your officer is
          tied up. What do you do?
        </LI>
      </UL>

      <H2 id={SECTIONS.values.id}>{SECTIONS.values.title}</H2>
      <P>
        <Strong>What they test.</Strong>{" "}These ask about your reasons for
        wanting the job and how you think about what it asks of you: service,
        integrity, teamwork, pressure. There&apos;s no event to retell and no
        scenario to solve. The panel is listening for whether your reasons are
        concrete, honest, and still hold up when you think about what the work
        actually involves.
      </P>
      <P>
        <Strong>How to approach them.</Strong>
      </P>
      <UL>
        <LI>
          Be specific. &ldquo;I want to help people&rdquo; is where a lot of
          answers start. What in your own life makes that true is what makes
          yours different.
        </LI>
        <LI>
          Connect it to the actual job, including the parts that aren&apos;t
          exciting.
        </LI>
        <LI>
          Choose honest over impressive. Panels hear a lot of polished
          answers.
        </LI>
        <LI>
          A short story can support a values answer, but come back to the
          question. Don&apos;t let it turn into a behavioral answer.
        </LI>
      </UL>
      <P>
        <Strong>Practice questions.</Strong>
      </P>
      <UL>
        <LI>Why do you want to be a firefighter?</LI>
        <LI>What does public service mean to you?</LI>
        <LI>How do you think this job will change your life outside of work?</LI>
      </UL>

      <H2 id={SECTIONS.howToPractice.id}>{SECTIONS.howToPractice.title}</H2>
      <P>
        <Strong>Say your answers out loud.</Strong>{" "}An answer that sounds
        fine in your head often comes out longer, flatter, or more scattered
        when you actually say it. Timing yourself shows you whether you&apos;re
        rambling.
      </P>
      <P>
        <Strong>Prepare stories, not scripts.</Strong>{" "}Build a list of real
        experiences you can draw from, and get comfortable telling each one. A
        memorized script tends to sound memorized, and it breaks when the panel
        asks a follow-up.
      </P>
      <P>
        <Strong>Why there are no sample answers here.</Strong>{" "}A strong
        answer is built from your own experiences and reasons. A borrowed one
        gives the panel something they&apos;ve likely heard before, and it
        isn&apos;t yours to defend when they dig in.
      </P>
      <P>
        <Strong>Add a little pressure.</Strong>{" "}Practice with a friend, at a
        mock board, or against a timer. That&apos;s what First Call is built
        for: questions read out loud, an answer on the clock, and a score
        against a rubric written for that question.
      </P>
    </>
  );
}
