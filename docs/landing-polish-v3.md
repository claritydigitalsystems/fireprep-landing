# Landing Polish v3 (compress + style + hero mockup)

Continues from v2. All prior rules hold: no em dashes; flat surfaces; amber (#f59e0b) ONLY on good/First-Call elements; keep film-grain overlay; no decorative gradients or hover-lifts. This pass is about VERTICAL COMPRESSION (several sections are too tall to fit a laptop screen), a few STYLING bumps, and a HERO MOCKUP.

## Section 1 — Hero (trim + mockup + move a line)
- TRIM the H1 so it's shorter and less vertically tall. Current headline "Practice the oral board the way it's actually scored." is too large/tall. Keep the same words but reduce the font-size and/or line-height so it occupies less vertical space (it currently wraps to 3 very tall lines). Aim for a tighter, still-bold headline.
- TIGHTEN the subhead block — reduce its size slightly and its vertical footprint. Same copy, less bulk.
- REPLACE the hero image (currently firefighters.jpg burn photo) with a DEVICE MOCKUP built in CSS. IMPORTANT STYLE: use FLAT, STRAIGHT-ON (front-facing) device frames, NOT angled/3D/perspective frames (CSS perspective mockups look cheap; flat ones look clean). 
  - A laptop frame (simple rounded-rect screen area + a thin browser-style top bar with 3 small dots) showing a DESKTOP app screen, and a phone frame (rounded-rect + small notch/speaker line) showing a MOBILE app screen. 
  - Composition: laptop as the main element, phone overlapping slightly in front of the laptop's lower-right or lower-left corner (the standard "works on desktop and mobile" arrangement). 
  - Screen content is a PLACEHOLDER for now: a clean dark navy panel (use the app surface tokens) with a small centered muted "App preview" label. Do NOT invent fake UI that misrepresents the real app. 
  - Leave a clear TODO comment in the markup: "TODO: replace placeholder panels with real app screenshots — dashboard/feedback on the laptop, a mobile session/feedback screen on the phone (launch-gated asset)". 
  - The screenshots will be dropped in later as <img> inside each frame, so structure the frames so a single image can fill each screen area cleanly. 
  - JUDGED ON RENDER: if the flat CSS frames do not look good/premium against the current burn photo, the burn photo (firefighters.jpg) is the fallback — say so in your eyeball notes so Scott can make the call.
- firefighters.jpg is NOT deleted (still used as the fire-banner poster). It just no longer appears in the hero.
- MOVE the line "Built by an active firefighter, on a rubric sourced from real fire-service hiring criteria, not generic interview tips." to sit UNDER the mockup image (right column), not in the left text column.
- Keep the eyebrow, the two CTAs (bigger Start free + outlined Watch), and the micro-copy.

## Section 2 — Two-grader demo (COMPRESS + rename eyebrow)
- RENAME the eyebrow from "How it works" to "THE DIFFERENCE" (fixes a collision: the Practice/Score/Track section also uses "How it works"). This is the ONLY eyebrow rename.
- COMPRESS the section vertically. It's currently too tall. Tighten: the gap between the headline/setup and the question card; the padding inside the question/answer card; the gap between the question card and the two verdict cards; and internal card padding. Same content, less height. Goal: the whole section feels tighter, not airy.

## Section 4 — Differentiators (COMPRESS vertical rhythm)
- The design is correct and stays (numbered rail, callout, sparkline, closer). It's just TOO TALL.
- Reduce vertical spacing: the gap between the setup line and differentiator 01; the gap between 01 and 02 (the connector line can shorten); the space around the callout and the sparkline; and the gap before the closer. Tighten line-heights where generous. Same content, noticeably shorter.

## Section 5 — Practice/Score/Track (ADD STYLING LIFE — keep "How it works" eyebrow)
- This is the real "How it works" section; its eyebrow "How it works" STAYS (it's section 2's that changes).
- It currently reads "very plain." Add restrained visual interest WITHOUT spectacle:
  - Give the connector chevrons between cards more presence (larger, amber-tinted, or a thin connecting line so the three read as a genuine flow).
  - Add a touch more definition to the cards: a slightly stronger border, or a subtle top-accent hairline on each (Track keeps its amber accent as the emphasized one).
  - Consider the step numbers (01/02/03) larger or amber to anchor each card.
- Keep flat surfaces, no gradients, no hover-lift. Restraint still applies; just less bare than now.

## Section 6 — Rubric (SIZING bumps only, layout is good)
- The layout/content is approved. Only sizing changes:
  - Card H2 titles ("A defined bar, and where you landed", "Eight real competencies", "Graded on what the question actually asked") — make them BIGGER.
  - The icons next to those titles — make them BIGGER to match.
  - The "MOST TOOLS SKIP THIS" pill/tag — make it BIGGER (more padding + larger text).
  - The bottom sourcing line ("Sourced from published fire-service frameworks...") — make it slightly BIGGER (it's too small right now).
- Respect CCP-028-style hierarchy: these are legitimate size increases toward the 16px+ body floor and clearer heading scale, not arbitrary.

## Not touched this pass
- Video placeholder section, About, Conversion slot: leave as-is (already approved), except nothing.
