import type { Guide, GuideSection } from "./types";
import { A, H2, H3, LI, Note, P, Strong, UL } from "./prose";

/* Rule for every guide: cover everything AROUND answering. No sample
   questions with model answers, no scripted answers. That's the app's job,
   and scripts are the failure these guides teach against. */

/** Every H2 in this guide. The headings below render from here, and
    meta.highlights picks from here, so the /guides preview always matches
    the article. */
const SECTIONS = {
  whatItIs: { id: "what-it-is", title: "What the oral board is, and why it matters so much" },
  howYoureScored: { id: "how-youre-scored", title: "How panels evaluate you" },
  questionTypes: { id: "question-types", title: "The main question types" },
  storyInventory: { id: "story-inventory", title: "Build a story inventory, not a script" },
  practiceOutLoud: { id: "practice-out-loud", title: "Practice out loud, and record yourself" },
  practiceOnAClock: { id: "practice-on-a-clock", title: "Practice under a clock" },
  research: { id: "research", title: "Research the department" },
  mistakes: { id: "mistakes", title: "Common mistakes" },
  timeline: { id: "timeline", title: "A simple prep timeline" },
  whereFirstCallFits: { id: "where-first-call-fits", title: "Where First Call fits" },
} satisfies Record<string, GuideSection>;

export const guide: Guide = {
  meta: {
    slug: "how-to-prepare-for-a-firefighter-oral-board",
    title: "How to Prepare for a Firefighter Oral Board",
    description:
      "A firefighter's guide to preparing for the fire department oral board: how panels score you, the question types, building stories, and practicing out loud.",
    summary:
      "What the oral board is, how panels score it, and a prep plan that works without memorized answers.",
    published: "2026-09-28",
    readMinutes: 9,
    related: ["what-oral-boards-look-for", "interview-nerves"],
    highlights: [
      SECTIONS.howYoureScored,
      SECTIONS.questionTypes,
      SECTIONS.storyInventory,
      SECTIONS.practiceOutLoud,
      SECTIONS.timeline,
    ],
    endCta: "practice",
  },
  Body,
};

function Body() {
  return (
    <>
      <P>
        You can ace the written test, crush the physical agility, and still
        lose the job in a twenty-minute conversation. The oral board is where
        a lot of hiring processes get decided, and it&apos;s the part most
        candidates prepare for the least. This guide covers what the board is,
        how you&apos;re scored, and how to prepare in a way that holds up when
        you&apos;re actually sitting in the chair.
      </P>

      <H2 id={SECTIONS.whatItIs.id}>{SECTIONS.whatItIs.title}</H2>
      <P>
        The oral board is a structured interview. You sit in front of a panel,
        usually a few people from the department and sometimes from outside
        it, and answer a set of questions. Every candidate gets the same
        questions, and every panel member scores your answers.
      </P>
      {/* TODO-VERIFY: weighting varies by department. Confirm this general
          framing matches what Scott has seen across departments. */}
      <P>
        In many departments, that score carries a lot of weight in where you
        land on the hiring list, and sometimes whether you make the list at
        all. Written tests and physical agility often work like gates: pass
        and you move on. The board is where candidates who all passed the
        gates get separated from each other. That&apos;s why it deserves more
        of your prep time than it usually gets.
      </P>

      <H2 id={SECTIONS.howYoureScored.id}>{SECTIONS.howYoureScored.title}</H2>
      <P>
        The board can feel subjective from the candidate&apos;s side of the
        table. It&apos;s less subjective than it feels. Most oral boards are
        built on two ideas that come straight out of hiring research:
      </P>
      <UL>
        <LI>
          <Strong>Consistent questions.</Strong> Every candidate gets the same
          questions in the same order, so answers can be compared fairly.
        </LI>
        <LI>
          <Strong>Structured criteria.</Strong> Panel members score each
          answer against defined criteria, often on a rating scale with a
          written description of what a weak, average, and strong answer looks
          like.
        </LI>
      </UL>
      {/* TODO-VERIFY: "most" boards use structured scoring. Keep "most" or
          soften to "many" based on Scott's experience. */}
      <P>
        That means you&apos;re not being judged on whether the panel liked
        you. You&apos;re being judged on whether your answer hit the things
        they were told to listen for. Once you understand that, preparation
        gets a lot more concrete. For a closer look at the criteria, read{" "}
        <A href="/guides/what-oral-boards-look-for">what oral boards look for</A>.
      </P>

      <H2 id={SECTIONS.questionTypes.id}>{SECTIONS.questionTypes.title}</H2>
      <P>
        Questions vary by department, but most fall into a few families.
        Knowing which kind you&apos;re being asked tells you what kind of
        answer the panel is listening for.
      </P>

      <H3>Behavioral: &ldquo;Tell us about a time&hellip;&rdquo;</H3>
      <P>
        These ask about something you&apos;ve actually done. The idea behind
        them is that how you handled real situations is the best predictor of
        how you&apos;ll handle the next one. The panel wants a real situation,
        what you specifically did, and how it turned out. A general statement
        about the kind of person you are doesn&apos;t answer a behavioral
        question, no matter how well you say it.
      </P>

      <H3>Situational: &ldquo;What would you do if&hellip;&rdquo;</H3>
      <P>
        These put you in a hypothetical, often a conflict between two things
        that both matter, like loyalty to a crewmember and doing the right
        thing. The panel is listening for your reasoning: what you notice,
        what you prioritize, who you&apos;d involve, and whether your answer
        holds up to the values the department cares about.
      </P>

      <H3>Motivation and values</H3>
      <P>
        Why this job, why this department, what you&apos;ve done to prepare,
        what you&apos;d bring. These sound like softballs. They aren&apos;t.
        Nearly every candidate says they want to help people, so the answers
        that stand out are the specific ones, grounded in things you&apos;ve
        actually done.
      </P>

      <Note>
        <Strong>No model answers here, on purpose.</Strong> A memorized answer
        to a predicted question is the most common way good candidates score
        badly. The rest of this guide is about preparing so you can answer
        whatever they ask.
      </Note>

      <H2 id={SECTIONS.storyInventory.id}>{SECTIONS.storyInventory.title}</H2>
      <P>
        Instead of writing answers to guessed questions, build a list of real
        experiences from your own life that you can pull from when a question
        lands. Work, school, sports, the military, volunteering, family. The
        stories don&apos;t have to be dramatic. They have to be real and yours.
      </P>
      <P>For each story, know these cold:</P>
      <UL>
        <LI>The situation, in a sentence or two.</LI>
        <LI>What you personally did. Not the team, you.</LI>
        <LI>How it ended, and what you&apos;d do differently.</LI>
        <LI>Which qualities it shows: teamwork, integrity, composure, and so on.</LI>
      </UL>
      <P>
        A good story can answer several different questions. A time you
        handled a coworker who was cutting corners might speak to integrity,
        conflict, and communication, depending on what&apos;s asked. When you
        know your stories this well, you can adapt them in the moment instead
        of reciting something that only half fits.
      </P>

      <H2 id={SECTIONS.practiceOutLoud.id}>{SECTIONS.practiceOutLoud.title}</H2>
      <P>
        Thinking through an answer and saying it are two different skills.
        Plenty of candidates know exactly what they want to say and then hear
        themselves ramble, lose the thread, or run out of words once they
        start talking. The only fix is saying your answers out loud, a lot.
      </P>
      <P>
        Record yourself and listen back. It&apos;s uncomfortable and it&apos;s
        worth it. Listen for whether you actually answered the question, how
        long it took you to get to the point, filler words, and whether the
        ending lands or trails off. Then do it again.
      </P>

      <H2 id={SECTIONS.practiceOnAClock.id}>{SECTIONS.practiceOnAClock.title}</H2>
      {/* TODO-VERIFY: time limits vary. Confirm "a couple of minutes" is a
          fair general range for a single answer. */}
      <P>
        Many boards give you a set amount of time, often a couple of minutes
        per answer, and some will cut you off. Even when there&apos;s no hard
        limit, the panel has a lot of candidates to get through. Practice with
        a timer running so you learn what a complete answer feels like inside
        the time you&apos;ll actually get, and so the clock stops feeling like
        pressure.
      </P>

      <H2 id={SECTIONS.research.id}>{SECTIONS.research.title}</H2>
      <P>
        Know the department you&apos;re sitting in front of: the size of the
        community, the number of stations, the kinds of calls they run, their
        mission statement and values, and anything notable they&apos;ve done
        recently. Station visits, where the department allows them, are one of
        the best ways to learn this, and you&apos;ll learn things about the job
        you can&apos;t get online.
      </P>
      <P>
        The point isn&apos;t to recite facts. It&apos;s so your answers about
        why you want this job are specific to this department and not
        something you could say anywhere.
      </P>

      <H2 id={SECTIONS.mistakes.id}>{SECTIONS.mistakes.title}</H2>
      <UL>
        <LI>
          <Strong>Memorized scripts.</Strong> They sound rehearsed, and they
          break the moment the question is worded a little differently than
          you expected.
        </LI>
        <LI>
          <Strong>Rambling.</Strong> Long answers aren&apos;t better answers.
          If the panel has to dig for your point, you&apos;ve lost points.
        </LI>
        <LI>
          <Strong>Generic answers.</Strong> &ldquo;I&apos;m a team
          player&rdquo; is a claim, not evidence. Specifics are what score.
        </LI>
        <LI>
          <Strong>Answering a different question.</Strong> Nerves push people
          toward the answer they prepared instead of the question they were
          asked. Listen to the whole question before you start.
        </LI>
      </UL>

      <H2 id={SECTIONS.timeline.id}>{SECTIONS.timeline.title}</H2>
      <H3>Weeks out</H3>
      <UL>
        <LI>Build your story inventory.</LI>
        <LI>Start practicing out loud, several times a week, on a timer.</LI>
        <LI>Record yourself and review. Pick one thing to fix at a time.</LI>
        <LI>Research the department and visit a station if you can.</LI>
      </UL>
      <H3>The week of</H3>
      <UL>
        <LI>Keep practicing, but stop adding new material.</LI>
        <LI>Run a few full sessions back to back to build stamina.</LI>
        <LI>Sort out logistics: location, parking, what you&apos;re wearing.</LI>
      </UL>
      <H3>The day of</H3>
      <UL>
        <LI>Arrive early. Give yourself time to settle.</LI>
        <LI>Listen to each full question. Answer it, then stop.</LI>
      </UL>
      <P>
        For the full day-of checklist, from the night before through the
        thank-you note, get the free{" "}
        <A href="/playbook">Board Day Playbook</A>. If nerves are your biggest
        worry, read{" "}
        <A href="/guides/interview-nerves">how to handle oral board nerves</A>.
      </P>

      <H2 id={SECTIONS.whereFirstCallFits.id}>{SECTIONS.whereFirstCallFits.title}</H2>
      <P>
        First Call exists for the hardest part of this plan: practicing out
        loud and getting honest, structured feedback on how you did. You
        answer real oral board questions on a timer, and every answer is
        scored against a rubric written for that question.{" "}
        <A href="/how-it-works">See how it works</A>.
      </P>
    </>
  );
}
