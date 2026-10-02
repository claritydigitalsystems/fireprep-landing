"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { APP_URL } from "../lib/links";

/** Sends a GA4 `signup_click` event when any link to the app's /signup is
    clicked, anywhere on the site. GA4's automatic outbound-click tracking
    does not fire for app.firstcallprep.com (same registrable domain), so
    this replaces it. One delegated listener on document, so buttons added
    later are covered without changes here.

    Sends ONE parameter, `cta`: which button was clicked, read from the
    link's data-cta attribute ("playbook" on the Playbook signup buttons),
    or "main" when the link has none. It is a button label only, never
    anything about the visitor, the taster, or any id. GA4 already records
    the page it happened on. Privacy §4 discloses "whether a visitor
    clicked through to sign up"; keep it that narrow.

    Outside production GA4 isn't loaded, so nothing is sent (it only logs
    a console warning in dev and preview). */
export default function SignupClickTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a");
      if (!link) return;
      const href = link.getAttribute("href");
      // Attribution.tsx may append ?src=taste and UTM params, so match on
      // the path prefix, never the full href. /login is deliberately excluded.
      if (!href || !href.startsWith(`${APP_URL}/signup`)) return;
      const cta = link.dataset.cta === "playbook" ? "playbook" : "main";
      sendGAEvent("event", "signup_click", { cta });
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
