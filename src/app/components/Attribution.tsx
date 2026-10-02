"use client";

import { useEffect } from "react";
import { APP_URL } from "../lib/links";

/** Attribution carried from a landing visit into the app's signup page.
    app.firstcallprep.com cannot read this origin's localStorage, so storage is
    only the holding pen: the actual transport is the query string this module
    writes onto the app-bound CTA links. */
const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

type UtmKey = (typeof UTM_KEYS)[number];

type Attr = Partial<Record<UtmKey, string>> & { tasted?: boolean };

const STORAGE_KEY = "fc_attr";

function readAttr(): Attr {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? (parsed as Attr) : {};
  } catch {
    // Private mode, disabled storage, or a corrupt blob. Attribution is best
    // effort: a visitor who loses it still gets an undecorated, working CTA.
    return {};
  }
}

function writeAttr(attr: Attr) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(attr));
  } catch {
    /* See readAttr: never let storage failure break the page. */
  }
}

/** Rewrites every app signup/login CTA to carry the stored attribution.
    Idempotent by construction: each href is rebuilt from its bare route, so
    running this a hundred times can never stack or duplicate params. The one
    param carried over from the authored href is a non-taste `src` (e.g. the
    Playbook CTAs' src=playbook): it names the CTA itself, so it wins over the
    visitor-level taste flag on that link. Decoration only ever writes taste
    or main, so a surviving src that is neither can only have come from the
    markup. */
function decorate(attr: Attr) {
  // src=taste is what tells the app a signup came from the embedded grader
  // rather than a cold CTA, so it is set only by a real result message.
  // Everyone else gets src=main, so a main-CTA signup is distinguishable from
  // one that lost its attribution (e.g. a browser switch) and arrived bare.
  const visitorSrc = attr.tasted === true ? "taste" : "main";
  const utm = new URLSearchParams();
  for (const key of UTM_KEYS) {
    const value = attr[key];
    if (value) utm.set(key, value);
  }

  const links = document.querySelectorAll<HTMLAnchorElement>(
    `a[href^="${APP_URL}/signup"], a[href^="${APP_URL}/login"]`,
  );

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;
    const [base, rest = ""] = href.split("#")[0].split("?");
    // The selector already guarantees this, but attribution params must never
    // land on a third-party host, so assert it at the point of writing.
    if (!base.startsWith(`${APP_URL}/`)) return;

    // taste and main are only ever written by this function, so on a re-run
    // they are not "authored" and must yield to the current visitor value
    // (main becomes taste once a result arrives).
    const authoredSrc = new URLSearchParams(rest).get("src");
    const src =
      authoredSrc && authoredSrc !== "taste" && authoredSrc !== "main"
        ? authoredSrc
        : visitorSrc;
    const params = new URLSearchParams();
    params.set("src", src);
    utm.forEach((value, key) => params.set(key, value));
    const query = params.toString();

    const next = query ? `${base}?${query}` : base;
    // An unchanged write still emits a mutation record. Skipping it keeps the
    // observer below from re-entering on our own edits.
    if (href !== next) link.setAttribute("href", next);
  });
}

export default function Attribution() {
  useEffect(() => {
    // 1. Capture utm_* off this page load. Nothing else from the URL is ever
    //    read or stored. Newer non-empty values win over what is already held.
    const search = new URLSearchParams(window.location.search);
    const attr: Attr = readAttr();
    let captured = false;
    for (const key of UTM_KEYS) {
      const value = search.get(key)?.trim();
      if (value) {
        attr[key] = value;
        captured = true;
      }
    }
    if (captured) writeAttr(attr);

    let current = attr;
    decorate(current);

    // 2. The embedded grader reporting a finished attempt. The origin check is
    //    the whole security boundary here: any page can postMessage at us.
    function onMessage(event: MessageEvent) {
      if (event.origin !== APP_URL) return;

      const data = event.data as { type?: unknown; event?: unknown } | null;
      if (!data || typeof data !== "object") return;
      if (data.type !== "fc-taste" || data.event !== "result") return;

      if (current.tasted === true) return;
      current = { ...current, tasted: true };
      writeAttr(current);
      decorate(current);
    }

    // 3. childList only, deliberately: attribute records are not delivered, so
    //    rewriting an href cannot re-trigger this. The page is static, so the
    //    handful of records React emits on hydration cost nothing.
    const observer = new MutationObserver(() => decorate(current));

    window.addEventListener("message", onMessage);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("message", onMessage);
      observer.disconnect();
    };
  }, []);

  return null;
}
