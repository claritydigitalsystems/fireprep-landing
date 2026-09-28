import type { Guide, GuideSection } from "./types";
import { A, H2, H3, LI, Note, P, Strong, UL } from "./prose";

/** Every H2 in this guide, in order. The headings below and the table of
    contents both render from here. */
const SECTIONS = {
  normal: { id: "normal", title: "Nerves are normal, and they mean you care" },
  delivery: { id: "delivery", title: "Why nerves hit your delivery, not your content" },
  reps: { id: "reps", title: "The fix: reps, out loud, under pressure" },
  inTheRoom: { id: "in-the-room", title: "In the room" },
  nightBefore: { id: "night-before", title: "The night before and the morning of" },
} satisfies Record<string, GuideSection>;

export const guide: Guide = {
  meta: {
    slug: "interview-nerves",
    title: "How to Handle Nerves at Your Fire Oral Board",
    description:
      "Oral board nerves are normal. Why they hit your delivery harder than your content, how to train them down with reps, and what to do in the room.",
    summary:
      "Why nerves hit your delivery, how reps fix it, and what to do in the room when they show up anyway.",
    published: "2026-09-28",
    readMinutes: 6,
    related: ["how-to-prepare-for-a-firefighter-oral-board", "what-oral-boards-look-for"],
    endCta: "playbook",
  },
  sections: Object.values(SECTIONS),
  takeaways: [
    "Almost everyone is nervous at an oral board, and panels expect it.",
    "Nerves mostly hit your delivery, because the room and the format are new.",
    "The fix is reps: answer out loud, on a timer, with pressure added on purpose.",
    "In the room, take one slow breath before you answer, and stop when you've made your point.",
    "One weak answer doesn't sink the board unless you carry it into the next one.",
  ],
  Intro,
  Body,
};

function Intro() {
  return (
    <P>
      Almost everyone is nervous at an oral board. People who run into
      burning buildings for a living will tell you their board was one of
      the most nerve-racking things they&apos;ve done. So if your heart is
      pounding just thinking about it, you&apos;re in good company.
    </P>
  );
}

function Body() {
  return (
    <>
      <H2 id={SECTIONS.normal.id}>{SECTIONS.normal.title}</H2>
      <P>
        Nerves are your body treating something as important. That&apos;s
        accurate. The goal isn&apos;t to feel nothing. It&apos;s to keep the
        nerves from getting between you and a clear answer. Panels expect
        candidates to be nervous, and a little of it showing won&apos;t cost
        you.
      </P>
      {/* TODO-VERIFY: "a little of it showing won't cost you" is general
          advice. Confirm Scott is comfortable stating it. */}

      <H2 id={SECTIONS.delivery.id}>{SECTIONS.delivery.title}</H2>
      <P>
        Most nervous candidates know what they want to say. What falls apart
        is saying it: the answer comes out rushed, out of order, or trails off
        at the end. That happens because the room is new. You&apos;ve thought
        about your answers plenty, but you&apos;ve rarely said them out loud,
        to people, on a clock, with something at stake.
      </P>
      <P>
        Everything unfamiliar about the room competes for your attention.
        When the format itself feels new, there&apos;s less of you left over
        for the answer.
      </P>

      <H2 id={SECTIONS.reps.id}>{SECTIONS.reps.title}</H2>
      <P>
        You can&apos;t think your way out of nerves the night before. What
        works is making the format familiar. Answer out loud, on a timer,
        many times, until hearing a question and starting to talk feels
        routine. Each rep makes the real room a little less new.
      </P>
      <UL>
        <LI>
          <Strong>Out loud, every time.</Strong> Answering in your head
          doesn&apos;t train delivery.
        </LI>
        <LI>
          <Strong>Add pressure on purpose.</Strong> A timer, a recording, a
          friend sitting across from you, questions you haven&apos;t seen.
        </LI>
        <LI>
          <Strong>Don&apos;t script.</Strong> Practicing a script makes you
          comfortable with the script, not with answering. Practice with
          questions you can&apos;t predict.
        </LI>
      </UL>

      <H2 id={SECTIONS.inTheRoom.id}>{SECTIONS.inTheRoom.title}</H2>

      <H3>Breathe before you answer</H3>
      <P>
        One slow breath after the question ends. It feels like a long pause
        to you. To the panel, it looks like someone thinking before they
        speak.
      </P>

      <H3>It&apos;s fine to say you&apos;re taking a moment</H3>
      {/* TODO-VERIFY: confirm that asking for a moment, or for the question
          to be repeated, is generally acceptable in the boards Scott knows. */}
      <P>
        &ldquo;Let me think about that for a second&rdquo; is a complete
        sentence, and it&apos;s better than starting before you know where
        you&apos;re going. If you didn&apos;t catch the whole question, asking
        for it again is usually fine too.
      </P>

      <H3>Answer, then stop</H3>
      <P>
        When you&apos;ve made your point, finish the thought and stop talking.
        Nervous candidates tend to keep going, repeating themselves or adding
        things that weaken what they already said. A clean ending is part of a
        strong answer.
      </P>

      <H3>Don&apos;t fill the silence</H3>
      <P>
        Panel members are often writing while you finish, and some are
        told not to react. The silence after your answer isn&apos;t a sign
        you did badly. Let it sit, and wait for the next question.
      </P>

      <H3>Recovering from a weak answer</H3>
      <P>
        Every candidate has at least one answer they wish they could redo.
        Each question is usually scored on its own, so one weak answer
        doesn&apos;t sink the board unless you carry it into the next one.
        Let it go and give the next question your full attention.
      </P>

      <Note>
        The candidates who look calm usually aren&apos;t calmer. They&apos;ve
        just done it enough times that the format stopped being the hard part.
      </Note>

      <H2 id={SECTIONS.nightBefore.id}>{SECTIONS.nightBefore.title}</H2>
      <UL>
        <LI>
          <Strong>Stop cramming.</Strong> A light review of your stories is
          fine. New material the night before just adds noise.
        </LI>
        <LI>
          <Strong>Get everything ready early.</Strong> Clothes, documents,
          directions, parking. Fewer decisions in the morning means fewer
          things to be nervous about.
        </LI>
        <LI>
          <Strong>Sleep and eat like it matters.</Strong> Because it does.
        </LI>
        <LI>
          <Strong>Warm up out loud.</Strong> Talk through a story or two on the
          drive so the first words you say that day aren&apos;t in front of the
          panel.
        </LI>
        <LI>
          <Strong>Arrive early.</Strong> Give yourself time to settle instead
          of walking in out of breath.
        </LI>
      </UL>
      <P>
        The free <A href="/playbook">Board Day Playbook</A> walks through all
        of it, from the night before to the thank-you note. For the bigger
        picture, read{" "}
        <A href="/guides/how-to-prepare-for-a-firefighter-oral-board">
          how to prepare for a firefighter oral board
        </A>
        , or <A href="/how-it-works">see how First Call gives you the reps</A>.
      </P>
    </>
  );
}
