# Landing Page Polish Pass v2 (design + fixes) — CORRECTED

Root problem: sections read as flat "boxes with text," too tall, unfinished. Every text-heavy section needs ONE structural device + ONE content-carrying visual, nothing else. Amber (#f59e0b) ONLY where it means "the good / First Call thing." Restraint is the point: substance made legible, NOT a chart-fest. No decorative gradients, glows, or card-lift hovers. Keep the film-grain overlay. No em dashes.

## FINAL SECTION ORDER (target)
1. Hero
2. Video placeholder (id="watch")
3. Two-grader demo (STATIC illustrative content, not interactive)
4. Differentiators / "Why First Call" (NEW design — replaces the old comparison section)
5. How it works: Practice / Score / Track (STAYS — id="how-it-works")
6. Fire video banner (full width)
7. The rubric (id="rubric")
8. About (id="about")
9. Conversion slot

## THE KEY STRUCTURAL CHANGE
- The current section commented "Section 3: Why First Call (the wedge)" — the one with headline "Real feedback used to mean waiting for a person. Not anymore." and the Fast-but-hollow / Real-but-rationed / First Call blocks — is DELETED and REPLACED by the new Differentiators section below.
- The current "Section 4: Practice, Score, Track" (id="how-it-works") STAYS as its own how-it-works section. It keeps id="how-it-works". It gets a light polish (flat cards, no gradients) but is NOT replaced and is NOT the differentiators.
- Net section count is the same (we swap one section's content, keep the other).

## Nav
- Two distinct items: "Why First Call" -> #why (the new differentiators section) and "How it works" -> #how-it-works (Practice/Score/Track). Plus "The rubric" -> #rubric, "Sign in", and the "Start free" button.
- The new Differentiators section gets id="why".

## Section: Differentiators / "Why First Call" (NEW — replaces old comparison)
Two differentiators on a NUMBERED RAIL.
- id="why". Eyebrow WHY FIRST CALL. Headline "Built to grade like a board. Not like a chatbot." (two lines). Setup line: "Two things separate First Call from every other way to prep. Both are things a keyword grader or a busy coach can't give you." in #7d92ad.
- Layout: 2-col grid, LEFT column narrow (~48px) rail holding the number (01, 02) in amber; item 01 has a thin vertical connector line (gradient #1e2d45 fading to transparent) running down toward 02. RIGHT column holds content.
- Differentiator 01: amber ti-ruler-measure icon + bold title "Research-backed scoring, not a vibe check". Paragraph: "Every answer is graded on behaviorally anchored rating scales, the same 0 to 3 anchored method used in formal hiring research, built on published fire-service competency frameworks." with "behaviorally anchored rating scales" emphasized (#f0f4f8, medium weight). Then a CALLOUT block: background #111827, amber LEFT border (2px), square corners, text #7d92ad: "Each question carries its own rubric. You're scored on what it actually tests, never dinged for what it never asked."
- Differentiator 02: amber ti-trending-up icon + bold title "Progress you can see, rep after rep". Paragraph: "Every answer feeds eight fire-service competencies, tracked across every session. You watch each one climb over time, and see exactly which keep costing you points." Then a SMALL BAR SPARKLINE: ~6 vertical bars rising left-to-right, first four muted (#1e2d45 / #2a3a56), last two amber (#f59e0b; final bar full height + full opacity, second-to-last ~55% opacity). Caption under it (#6b7688): "Practice becomes a plan: drill the weak competency, watch it move, walk in with all eight dialed."
- Closer: below a 0.5px #1e2d45 top border, one line: "Instant tools score fast but grade shallow. Human coaches grade deep but can't be there at 11pm for your hundredth rep. First Call is the only one that grades with real rigor and remembers everything, as many times as you need it." — the final sentence ("First Call is the only one...") in amber-emphasized bold, rest in #f0f4f8.

## Section: How it works / Practice, Score, Track (STAYS — light polish only)
- Keep this section and its 3 nodes (Practice, Score, Track) and id="how-it-works".
- Polish only: flat cards (#111827, 0.5px #1e2d45 border), NO deepening gradient across the three, NO hover-lift. Track node keeps a subtle amber accent (top border or numeral) to signal it's the differentiator-adjacent one.
- Tighten the Track node subtext to: "Every answer feeds eight fire-service competencies, tracked across every session. See where you keep losing points, drill those, and walk in with all eight dialed."
- Keep the caption under the flow ("3 to 8 questions per session...").

## Section 1 — Hero (quick fixes)
- REDUCE hero vertical height (tighten top/bottom padding + element gaps).
- SHRINK the hero image (right column) — cap its height so text and image feel balanced, not image-dominant.
- In the subhead, BOLD the five words "the same competencies panels use".
- Primary CTA "Start free": make it BIGGER (more padding, larger text).
- Secondary CTA "Watch how it works (60 sec)": TRANSPARENT OUTLINED button (light or amber border, transparent fill), beside Start free.

## Fire video banner (RESTORE)
- Use public/fire-loop.mp4 (currently unused). Full-bleed width, ~40vh mobile / ~55-60vh desktop. autoplay muted loop playsInline, poster=firefighters.jpg, dark gradient overlay. Respect prefers-reduced-motion (poster shows, video hidden).
- Placement: BETWEEN the Practice/Score/Track section (how-it-works) and the rubric section.
- Overlay text (no em dashes): "No more guessing." and "Walk in knowing exactly what panels are scoring." with "scoring." in amber. Centered, Barlow Condensed.

## Section: The rubric (RELAYOUT — id="rubric")
- Eyebrow THE RUBRIC, headline "Not a vibe. A rubric.", setup line stay.
- Cards 1 and 2 SIDE BY SIDE (2-col grid, stack on mobile), each #111827 / 0.5px #1e2d45:
  - Card 1 "A defined bar, and where you landed": amber ti-ruler-measure icon + bold title, short paragraph, then the 0 1 2 3 ANCHOR SCALE as 4 connected segments — 0/1/2 muted (#0a0e1a fill, #1e2d45 border, gray text), 3 highlighted (amber border, amber text, rgba(245,158,11,0.12) fill).
  - Card 2 "Eight real competencies": amber ti-list-check icon + bold title, short paragraph, then competency CHIPS (#1a2235 bg, 0.5px #1e2d45 border, #c5d0de text, ~11px): Composure, Decision-making, Communication, Integrity, Teamwork, and a muted "+3 more".
- Card 3 "Graded on what the question actually asked" FULL WIDTH below: #141b2e bg, amber LEFT border 2px, amber ti-target icon + bold title, small amber tag on the right "MOST TOOLS SKIP THIS" (amber text, faint amber bg), paragraph #c5d0de.
- Sourcing line quiet (#6b7688, ~13px) centered at bottom.

## Section: About (density fix + signature move — id="about")
- REDUCE section height (too tall / empty now).
- Move the SIGNATURE block ("Scott Shimala . Active firefighter, building First Call." + "Free while I test it with real candidates.") to sit UNDER THE PHOTO (right column), not under the text column.
- Hinge sentence "So I built the one that does." leads its paragraph with slightly brighter weight (#f0f4f8). Subtle.
- Photo stays founder.jpg (real portrait later; leave a TODO comment).

## Section: Conversion slot (quick fix)
- BOLD the sentence "Real questions, real scoring, real feedback on every answer. No credit card, no catch." within the subcopy. Rest normal weight.
- Keep the dormant "Not ready? Get notified" line HIDDEN.
