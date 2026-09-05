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
    running this a hundred times can never stack or duplicate params. */
function decorate(attr: Attr) {
  const params = new URLSearchParams();
  // src=taste is what tells the app a signup came from the embedded grader
  // rather than a cold CTA, so it is set only by a real result message.
  if (attr.tasted === true) params.set("src", "taste");
  for (const key of UTM_KEYS) {
    const value = attr[key];
    if (value) params.set(key, value);
  }
  const query = params.toString();

  const links = document.querySelectorAll<HTMLAnchorElement>(
    `a[href^="${APP_URL}/signup"], a[href^="${APP_URL}/login"]`,
  );

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;
    const base = href.split("?")[0].split("#")[0];
    // The selector already guarantees this, but attribution params must never
    // land on a third-party host, so assert it at the point of writing.
    if (!base.startsWith(`${APP_URL}/`)) return;

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
