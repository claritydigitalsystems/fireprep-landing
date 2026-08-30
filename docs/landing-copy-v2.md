# First Call — Landing Page Copy v2 (Live-Product Rebuild)

Supersedes the v1 waitlist copy (docs/copy-v1.md) and direction (docs/direction-v1.1.md).
This document is the authoritative copy for every section. Where a phrase does not fit a layout, surface it, do not silently reword.

## Global copy + build rules (apply to every section)

1. No em dashes anywhere. Use periods, commas, or restructured sentences. Em dashes are an AI-writing tell.
2. Sentence case for body and subheads. Eyebrows are the one allowed all-caps element (short tracked labels only).
3. Aesthetic already migrated to the app tokens (navy #0a0e1a, amber #f59e0b, Barlow / Barlow Condensed). Keep them.
4. Kill the AI-look vocabulary: no rounded-2xl on everything, no hover:-translate-y-1 card lifts, no gradient-fill cards. Flat surfaces, restrained radius.
5. Keep the film-grain overlay from globals.css (the feTurbulence noise). It is the page's one signature.
6. Amber = "the real / graded thing", used with restraint (primary CTA, single-word emphasis, the one graphic, the First Call side of the demo). Not flooded.
7. Waitlist is fully retired. No waitlist copy, button, or mechanic anywhere. The MailerLite wiring stays in the repo but dormant/unlinked.
8. Launch gates: the 60-second demo video must exist before launch (hero secondary CTA points at it); the inline free-taste grader must exist before flipping to paid.

## Nav

Left: First Call logo (links to top). Right group, in order:
- How it works  -> #how-it-works
- The rubric  -> #rubric
- Sign in  -> https://app.firstcallprep.com  (quiet text link)
- Start free  -> https://app.firstcallprep.com  signup (primary amber button)
Mobile keeps the existing FIRSTCALL wordmark fallback. No "About" link, no waitlist button.

## Section 1 — Hero

Eyebrow: FREE WHILE IN BETA — REAL CANDIDATES, REAL FEEDBACK
(note: render that dash as a comma or bullet in the eyebrow, no em dash)

Headline: Practice the oral board the way it's actually scored.

Subhead: The oral board is the most subjective-feeling part of fire hiring, and the part most candidates prepare for blind. First Call scores your spoken answers against the same competencies panels use, criterion by criterion, the moment you finish. You see what landed, what didn't, and what to fix before it counts.

Support line: Built by an active firefighter, on a rubric sourced from real fire-service hiring criteria, not generic interview tips.

CTAs: [ Start free ]  and  Watch how it works (60 sec)
- Primary "Start free" -> https://app.firstcallprep.com signup
- Secondary "Watch how it works (60 sec)" -> PLACEHOLDER pending the demo video. Wire to a video section/modal built before launch.

Micro-copy under CTAs: Free while I run live beta testing with real candidates. No credit card.

Hero image: keep firefighters.jpg (the training-burn shot).

## Section 2 — Two-grader demo

Job: make rigor legible by showing it against its absence. A skimmer must get it from the numbers + colors in about 2 seconds.
BUILD-CRITICAL: the LEFT ("Most tools") side may be a representative composite. The RIGHT (First Call) side must mirror what the app actually returns (real competency name, real 0 to 3 anchor logic, real "what the panel heard" / "to reach a 3" shape). Do not prettify the right side.

Eyebrow: HOW IT WORKS
Headline: Anyone can hand you a score. We show you why.
Setup line: The same answer, two kinds of feedback. One tells you you're great. One tells you the truth.

Shared question/answer card (labels are just "QUESTION" and "ANSWER"):
- QUESTION: Tell us about a time you worked through a conflict with a coworker.
- ANSWER (italic): "I always get along with everyone on the crew. If there's ever a problem I just stay professional and handle it. Being a team player is one of my biggest strengths."

Left column, label "MOST TOOLS" (label sized as a real header, not fine print):
- 92%  (check)  Strong answer
- "Great job. Strong teamwork and professionalism. You're interview-ready."
- (muted footnote) Right keywords, confident tone. Never notices the answer describes no actual conflict.
Visual: the 92% and "Strong answer" use a muted, slightly sickly green (not a healthy success-green). Hollow praise should not look genuinely good.

Right column, label "FIRST CALL" (amber border on this card only, the one saturated element):
- 1 / 3  Teamwork & Collaboration
- What the panel heard: a claim about being a team player, but no real situation and nothing you actually did. Boards read this as dodging the question.
- (amber emphasis) To reach a 3: name one real disagreement. What it was, what you did, how it ended.

Closing line (centered): The first score feels good. The second one gets you hired.  (second sentence in amber)
Honesty label (centered, small, muted): Illustrative example. Try it free to see the full feedback on your own answers.

## Section 3 — Why First Call (the wedge)

Job: turn the one demo into the category claim. Name two approaches, never companies. Never frame a First Call non-feature as an absence.

Eyebrow: WHY FIRST CALL
Headline: Real feedback used to mean waiting for a person. Not anymore.
Setup line: Every way to prep the oral board makes you pick one.

Pole 1 — Fast, but hollow: Instant tools score you in seconds, but most just mirror your confidence back. Hit the keywords, get a green light, walk in exactly as unprepared as you started.

Pole 2 — Real, but rationed: A real coach gives real feedback, but they cost a lot, book out, and cap you at a couple sessions a month. A handful of honest reps when you need a hundred.

First Call (accented as the resolution): Every answer graded against a research-backed rubric, built on published fire-service competency frameworks. Criterion by criterion, the moment you finish, as many reps as you want. Rigorous scoring at software speed.

Closing line: Practice like it's real. As often as it takes.

## Section 4 — Practice, Score, Track

Job: how it works. Keep the three-node flow. Pull "Track" up (it is the #2 differentiator, longitudinal competency analytics). Flat cards, no deepening gradient across the three; if Track needs emphasis use a subtle amber accent on the node, not a gradient.

Eyebrow: HOW IT WORKS
Headline: Every session, end to end.

Node 01 — Practice: Answer real oral board questions out loud, on the clock. Recorded, transcribed, and ready to grade. The way you'll have to deliver it in the room.

Node 02 — Score: Every answer broken down criterion by criterion. See which parts landed, which fell short, and exactly what to fix, the moment you finish.

Node 03 — Track: Every answer feeds eight fire-service competencies, scored and tracked across every session. You see exactly where you're strong and where you keep losing points, so you can drill the weak spots on purpose. Walk in with all eight dialed, and you'll be the most prepared candidate in the room.

Caption under the flow: 3 to 8 questions per session. Criterion-level scoring on every answer. Eight competencies tracked across all of them, so you know exactly what to sharpen before the panel does.

## Section 5 — The rubric

Job: full proof of the #1 differentiator (rigor). This is where per-question calibration lives.
Scannability: each card gets a BOLD one-line verdict above its paragraph. One graphic only: a mini 0 . 1 . 2 . 3 anchor scale on Card 1, with the "3" marked in amber. Keep one small icon per card. No chips on Card 2, no graphics on Cards 2 or 3.

Eyebrow: THE RUBRIC
Headline: Not a vibe. A rubric.
Setup line: Most tools give you a number and a pat on the back. Here's what's actually behind your score.

Card 1 — bold verdict: A defined bar, and where you landed.
Paragraph: Every answer is scored 0 to 3 on each criterion, against written anchors that define exactly what a 0, 1, 2, and 3 look like. The same rating structure used in formal interview research, built for the fire-service oral board. No mystery number. A defined bar, and where you landed against it.
(Card 1 carries the 0.1.2.3 anchor-scale graphic.)

Card 2 — bold verdict: Eight real competencies, not a template.
Paragraph: Composure under pressure. Decision-making. Communication. Integrity. Teamwork. Eight competencies drawn from real fire-service hiring criteria, not a generic interview template. The areas boards actually weigh, scored the way they weigh them.

Card 3 — bold verdict: Graded on what the question actually asked.
Paragraph: This is the part most tools skip. A teamwork question is graded on teamwork. A decision-making question is graded on decision-making. Every question carries its own rubric, so you're never dinged for missing something the question never asked. You get scored on what was actually being tested.

Closing line: Sourced from published fire-service frameworks and the interview research behind them. Not generic tips dressed up with a score.

## Section 6 — About (founder)

Job: founder trust, as SUPPORT for the rigor (not the lead). Named. Photo is a build-time drop-in (Scott to supply); leave a real-photo slot. The current founder.jpg is a training-burn shot, not a portrait.

Eyebrow: ABOUT
Headline: Why I'm building this.

Body:
Paragraph 1: I'm Scott, an active firefighter. Before I got hired, I went through hiring process after hiring process, different departments, different formats, the same panel asking variations of the same questions.
Paragraph 2: I learned the prep gap firsthand. The advice online is generic. The good coaching is expensive and books out. And the scoring criteria panels actually use have been public for decades, rooted in real fire-service competency frameworks, but no tool ever used them to grade your practice.
Paragraph 3: So I built the one that does. First Call grades against those frameworks the way a board would, so you get real signal on every rep instead of a pat on the back.

Signature / photo caption:
Scott Shimala . Active firefighter, building First Call.
Free while I test it with real candidates.

(No oral-board-evaluator disclaimer, no waitlist line, no department.)

## Section 7 — Conversion slot (beta now, pricing later)

The swappable module. Build the FRAME fixed (eyebrow, headline slot, subcopy slot, CTA slot, micro-copy slot) and put the beta contents in it now. Flipping to paid later swaps contents into the same slots. No structural change on the flip.

Eyebrow: START NOW
Headline: It's built. It's free. Go use it.
Subcopy: First Call is live and free while I test it with real candidates. Real questions, real scoring, real feedback on every answer. No credit card, no catch. I'm looking for candidates who'll actually use it and tell me what's working.
Primary CTA: [ Start practicing free ]  -> https://app.firstcallprep.com signup
Micro-copy under CTA: Free while in beta. Takes about a minute to start your first session.
Dormant secondary line (BUILD HIDDEN): a "Not ready? Get notified as it grows" line wired to the retired MailerLite form, built but hidden. Do not show it now.

## Footer

Keep the existing structure. Fixes:
- Contact scott@firstcallprep.com -> support@firstcallprep.com
- Keep Privacy and Terms links.
- Keep "© 2026 First Call".
- No waitlist, no "established 2026", no version tags.
