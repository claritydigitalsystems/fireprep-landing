# FirePrep Landing Page — Claude Code Execution Prep

**Date:** April 30, 2026
**Use this document to:** Run the Claude Code session that rebuilds the landing page.

---

## Part 1 — Pre-Flight Checklist

Do this BEFORE opening Claude Code. ~5 minutes. Prevents painful mistakes.

### 1. Confirm Claude Code is installed and authenticated
- Open your terminal
- Run: `claude --version`
- If installed, you'll see a version number
- If not installed, install via: `npm install -g @anthropic-ai/claude-code` (requires Node.js)
- When you first run `claude`, it will ask how to authenticate. **Choose your Claude Pro/Max subscription account, NOT API key.** This uses your existing subscription instead of billing per-token.

### 2. Clone the repo locally (if you haven't already)
```bash
cd ~/your-projects-folder
git clone https://github.com/claritydigitalsystems/fire-landing-page.git
cd fire-landing-page
```

### 3. Create a working branch — DO NOT work on `main`
```bash
git checkout -b landing-redesign-v1
```

This is the single most important step. All Claude Code changes will go on this branch. Your live `main` branch (deployed to Vercel) stays untouched until you're ready to merge.

### 4. Verify the dev server runs
```bash
npm install
npm run dev
```
- Should open on `http://localhost:3000`
- Confirm the current page loads correctly
- Then stop the server (Ctrl+C) — Claude Code will run it itself when needed

### 5. Save the two reference documents into the repo

Create a `docs/` folder in the repo root and save both documents there:
```
fire-landing-page/
  docs/
    direction-v1.1.md       (the direction document)
    copy-v1.md              (the copy document)
```

This way Claude Code can read them directly via file paths instead of you pasting them into chat. **Critical for keeping the session clean.**

### 6. Open Claude Code in the repo
```bash
cd fire-landing-page
claude
```

You're now in a Claude Code session, in your repo, on a fresh branch. Ready to start.

---

## Part 2 — Starting Prompt

Copy everything between the lines below and paste it as your FIRST message in Claude Code. Don't add to it. Don't remove from it. Just paste.

---

```
I'm rebuilding the FirePrep landing page. This is an existing Next.js + Tailwind project deployed on Vercel. The current version was AI-generated and needs significant rework.

Two reference documents are in the repo at ./docs/:
- ./docs/direction-v1.1.md — full structural and design spec
- ./docs/copy-v1.md — final locked copy for every section

Read both documents in full before doing anything else. They are the authoritative spec for this redesign. If anything I say in chat conflicts with them, ask me which is correct.

Working agreement:
1. We're on branch `landing-redesign-v1`. Do not commit to `main`.
2. Make changes in small, reviewable steps. Show me what you're going to change before making large edits.
3. After each section is implemented, pause and let me review the rendered output before moving to the next section.
4. Use the existing Tailwind config and design tokens where possible. Don't introduce new dependencies unless necessary.
5. Visual direction is locked to Option A in the direction doc: refine the existing dark + orange aesthetic, do not redesign from scratch.
6. Final copy is locked in copy-v1.md. Use it exactly. If a phrase doesn't fit a layout, ask before rewording.

Locked decisions to apply immediately:
- Hero headline: use Option A from copy-v1.md ("Practice the oral board the way you'll be graded on it.")
- Section 3 (product preview): build Option B (visual flow diagram). No real screenshots — there's no UI yet. Build the diagram in CSS/SVG inline.
- All cuts listed in direction-v1.1.md Section 8 must be removed.
- All additions listed in direction-v1.1.md Section 9 must be present.

First task: Read both reference documents, then give me a brief written plan of how you'll approach the work — what order you'll tackle sections in, what you anticipate as the trickiest parts, and what (if anything) you need clarified before you start. Do not make any code changes yet.
```

---

## Part 3 — Working-Session Protocol

How to actually work with Claude Code so the session doesn't drift.

### Rule 1 — Make Claude Code show before it changes
For any non-trivial change, ask: *"Show me what you're going to change before you change it."* Claude Code will describe the diff. You approve, then it executes. This catches misinterpretations early and saves rework.

### Rule 2 — One section at a time, then preview
After Claude Code finishes a section:
1. Save and let the dev server hot-reload (`npm run dev` if not already running)
2. Open `localhost:3000` in your browser
3. Look at the rendered section
4. Tell Claude Code what to fix or move on

Don't let it implement all 7 sections before you've looked at any of them. You'll end up with compounded errors that are harder to unwind.

### Rule 3 — Commit after every working section
After a section looks right:
```bash
git add .
git commit -m "Section X: [what you did]"
```

This gives you safe rollback points. If section 4 breaks something in section 2, you can revert just that.

### Rule 4 — Push to GitHub regularly to get Vercel previews
```bash
git push origin landing-redesign-v1
```

Vercel auto-builds preview deployments for non-main branches. After pushing, you'll get a unique preview URL (e.g., `landing-redesign-v1-fire-landing-page.vercel.app`). Check the rendered page on the actual Vercel preview, not just localhost — sometimes builds behave differently in production.

### Rule 5 — When something feels off, stop and chat
If Claude Code is generating output that drifts from the spec, don't just ask it to "fix it" — that often makes it worse. Instead:
1. Stop the current direction
2. Open a new chat with regular Claude (here)
3. Paste the section that's wrong + the relevant spec excerpt
4. Get clarity on what *should* be there
5. Go back to Claude Code with specific direction

This costs you 5 minutes of context-switching but saves you hours of going in circles.

### Rule 6 — Don't merge to main until you've previewed everything
When all sections are done and you're satisfied with the Vercel preview:
1. Final review on the preview URL
2. Compare side-by-side with the spec docs — anything missed?
3. Open a pull request from `landing-redesign-v1` → `main` on GitHub
4. Merge when satisfied
5. Vercel deploys main to your live URL

---

## Part 4 — What Success Looks Like

By the end of this session, you should have:

- ✅ A new branch `landing-redesign-v1` with the redesigned page
- ✅ All 15 cuts from the direction doc applied
- ✅ All 8 additions from the direction doc present
- ✅ All copy from copy-v1.md applied verbatim (or with logged exceptions if a phrase didn't fit a layout)
- ✅ A working Vercel preview URL
- ✅ A clear sense of what (if anything) still needs polish

You should NOT have:

- ❌ Anything merged to `main`
- ❌ Any new dependencies you don't recognize
- ❌ Any "AI-generated" feeling content sneaking back in (sci-fi language, marketing fluff, vague claims)

---

## Part 5 — When You Hit Friction

Predicted friction points and how to handle them:

**Friction 1: Claude Code wants to refactor too much**
It might suggest restructuring components, changing the file layout, or adding state management. **Decline anything outside the redesign scope.** Tell it: *"That's out of scope for this session. Stay focused on the spec."*

**Friction 2: Copy doesn't fit a designed layout**
Some headlines or body paragraphs may overflow visually. Claude Code will want to either truncate or rewrite. **Tell it to surface the issue, not silently rewrite.** You decide whether to adjust copy or adjust layout.

**Friction 3: Section 3 (product preview diagram) is harder than expected**
Building a visual flow diagram from scratch in CSS/SVG is real work. If Claude Code struggles, alternatives in priority order:
1. Simplified 3-step horizontal layout with icons (lucide-react has decent ones)
2. Three text cards with arrow connectors between them
3. Worst case: skip Section 3 for now, add a placeholder, address in a future session

**Friction 4: You hate something Claude Code produces**
This will happen. Don't argue with it. Just say *"This isn't right. [Specific reason.] Try this instead: [direction]."* The more specific your feedback, the better the next iteration.

**Friction 5: You run out of token budget mid-session**
On Pro plan, the 5-hour rolling window can get tight on heavy sessions. If you see warnings:
1. Commit what you have
2. Push to GitHub
3. Wait for the window to reset (or upgrade to Max if this becomes regular)
4. Resume with: *"Read direction-v1.1.md and copy-v1.md again. I want to continue from [section X]."*

---

## Part 6 — After the Session

Once the redesigned page is live on `main`:

1. **Verify the form actually captures emails somewhere.** If the form just shows a success state but doesn't write to a database or email tool, you'll lose every signup. This is the most likely thing to be silently broken at launch. Test it yourself end-to-end.

2. **Set up the email capture backend** (if not done in this session):
   - Quickest option: ConvertKit / Mailerlite free tier — paste a form embed, done in 15 minutes
   - Stack-consistent option: Supabase table + edge function (matches your main app stack but is more work)

3. **Capture the same onboarding fields the main app will use** — target department, role (entry-level confirmed), hiring timeline. Per your locked product decisions, this data is needed for hire-outcome tracking later.

4. **Add Privacy + Terms pages.** Required for email collection. Don't have to be elaborate — a simple statement of what you do with emails is enough for pre-launch. Templates exist online; can be a 30-minute task.

5. **Set up basic analytics.** Vercel Analytics free tier or Plausible. You'll want to know how many people land on the page vs. how many sign up.

---

## Part 7 — Project Continuity

This session affects the broader FirePrep project as follows:

- **Phase 0 / Phase 0.5:** Untouched. Landing page work is parallel to the technical blueprint.
- **Phase 3 (Functional MVP) downstream impact:** The waitlist signup form should capture the same onboarding data the main app will collect (target department, role, timeline). If you don't capture it now, you'll have a gap in your hire-outcome tracking later.
- **No locked decisions changed by this session.**

---

## Sources Reminder

All decisions in the direction and copy documents are sourced. If Claude Code questions a choice during execution, point it at the source. Examples:

- "Single-CTA hero" → NN/g landing page hero clarity research
- "Multi-attempt acknowledgment language" → ConversionXL audience-message match research
- "Founder section honesty over polish" → Y Combinator Startup School / Basecamp / 37signals pre-launch guidance
- "BARS scoring methodology" → Smith & Kendall (1963)
- "Plain language for fire service" → Practitioner standard locked in your project framework

---

**End of document.**

**Now: do the pre-flight checklist (5 minutes), then paste the starting prompt into Claude Code.**
