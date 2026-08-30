# Landing Polish v4 — hero mockup sharpen/contrast/size

Scope: ONLY the hero device mockup (laptop + phone frames). Everything else on the page stays as-is. Goal: make the mockup read as a sharp, high-contrast, industrial/tactical product object (matching the app's gritty aesthetic), NOT a soft glossy floating app-store graphic. All prior rules hold (no em dashes, flat surfaces, amber only on good elements, keep film-grain).

Reference for the WRONG direction (do NOT emulate): glossy white floating laptops with glow halos, heavy 3D perspective, pillowy rounded buttons, decorative stars. The mockup should feel like hard equipment sitting in the page, not a bouncy consumer-SaaS hero.

## Fixes
1. CONTRAST (this is the priority — the frames currently read as faint smudges on the navy, same class of issue the app fixed at launch):
   - Frame borders / outlines: switch from the faint --fp-border (#1e2d45) to a STRONGER, brighter edge. Use #2a3a56 (border-strong) at minimum; go a step brighter if still faint (e.g. ~#3a4d6e) so the laptop and phone read as crisp, hard-edged objects with clearly visible outlines against the navy body.
   - The "APP PREVIEW" placeholder labels are too dim to read. Bump them to a clearly legible muted (e.g. --fp-text-muted #7d92ad or brighter), and increase letter-spacing slightly so they read as an intentional label, not an accident.
   - The laptop's screen panel and the phone's screen panel can sit slightly darker/inset so the brighter frame edge frames them (screen recessed, frame edge crisp).

2. SHARPEN (slightly — keep a small radius, do NOT go fully square; real devices are rounded, we just want crisper/harder, not pillowy):
   - Reduce the border-radius on the laptop screen area and the phone body a step (less rounded than now). Small radius, hard edge. Industrial, not glossy.
   - Make the frame outline a touch thicker/harder if it helps the "solid object" read. No glow, no drop-shadow halo, no floating effect.

3. SIZE:
   - Scale the whole mockup DOWN a step. It currently dominates / feels oversized. Make it a tighter product shot so it balances the text column rather than overpowering it. Keep the laptop as the main element with the phone overlapping (that overlap is approved).

4. Keep: front-facing flat composition (no 3D angle), placeholder screens with the TODO comment for real screenshots, the phone overlapping the laptop's lower corner.

## Not touched
Everything else on the page. This is a hero-mockup-only pass.
