"use client";

import { useEffect, useRef, useState } from "react";
import { APP_URL } from "../lib/links";

// Floor for a height message, so a bad or zero-height report can never
// collapse the section to nothing.
const MIN_HEIGHT = 480;
// Roughly the consent card the widget opens on, so the first height message
// nudges the section rather than jumping it.
const DEFAULT_HEIGHT = 760;

/** The app's free-taste grader, embedded. The iframe carries its own heading
    ("A short version of the real thing"), so this section deliberately has
    none: two stacked headings would read as two sections. */
export default function TryEmbed() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(DEFAULT_HEIGHT);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      // Any page on the internet can postMessage at this window. The exact
      // origin match is what makes everything below trustworthy.
      if (event.origin !== APP_URL) return;
      // Same origin is necessary but not sufficient: it must be our frame.
      if (frameRef.current && event.source !== frameRef.current.contentWindow) {
        return;
      }

      const data = event.data as {
        type?: unknown;
        event?: unknown;
        height?: unknown;
      } | null;
      if (!data || typeof data !== "object" || data.type !== "fc-taste") return;

      if (data.event === "height") {
        const reported = data.height;
        if (typeof reported !== "number" || !Number.isFinite(reported)) return;
        setHeight(Math.max(MIN_HEIGHT, Math.round(reported)));
        return;
      }

      if (data.event === "result") {
        const reduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        sectionRef.current?.scrollIntoView({
          behavior: reduced ? "auto" : "smooth",
          block: "start",
        });
      }
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <section id="try" ref={sectionRef} className="scroll-mt-20">
      <div className="mx-auto w-full max-w-7xl px-6 py-[56px] lg:px-12 lg:py-[80px]">
        {/* The widget is 900px wide; max-w-5xl frames it without letting it
            stretch on a wide desktop. */}
        <div className="mx-auto max-w-5xl">
          {/* The frame is always sized to the height the widget reports, so
              it never needs a scrollbar of its own. Suppressing it is what
              stops the frame from swallowing wheel and touch on a short
              viewport: without this, scrolling over the taster runs the
              frame's content to its end before the page starts to move.
              Because the height is always the full content height, hiding
              the overflow cannot clip anything.

              scrolling="no" is the deprecated presentational attribute, and
              it is deliberate: CSS overflow on the element does not govern a
              cross-origin frame's own viewport, so the attribute is the part
              that actually does the work here.

              Loads eagerly on purpose. Do not add loading="lazy" back: a lazy
              frame starts fetching only as it nears the viewport, so the
              taster visibly popped in underneath the reader mid-scroll. The
              cost of loading it for visitors who never reach the section is
              accepted, since loading the widget spends nothing. Only
              recording does. */}
          <iframe
            ref={frameRef}
            src={`${APP_URL}/try`}
            title="Try one real oral board question"
            allow="microphone"
            scrolling="no"
            className="block w-full border-0"
            style={{ height, overflow: "hidden" }}
          />
        </div>
      </div>
    </section>
  );
}
