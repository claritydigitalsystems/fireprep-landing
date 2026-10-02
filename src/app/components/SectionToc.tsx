"use client";

import { useEffect, useState } from "react";
import { Eyebrow } from "./PageParts";

export type TocSection = { id: string; title: string };

/** Sidebar jump list for long pages (guides, FAQ): the page's H2s, with the
    section you're reading marked in amber. Not sticky itself; the page
    wraps it (and anything stacked under it) in the sticky element. */
export function SectionToc({
  sections,
  title = "In this guide",
  headingId = "toc-heading",
}: {
  sections: TocSection[];
  title?: string;
  headingId?: string;
}) {
  const active = useActiveSection(sections);
  return (
    <nav aria-labelledby={headingId}>
      <Eyebrow as="h2" id={headingId}>
        {title}
      </Eyebrow>
      <ol className="mt-4 border-l border-border">
        {sections.map((s) => {
          const on = s.id === active;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={on ? "location" : undefined}
                className={`-ml-px block border-l-2 py-2 pl-4 text-base leading-snug motion-safe:transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  on
                    ? "border-accent text-text-primary"
                    : "border-transparent text-text-muted hover:text-text-primary"
                }`}
              >
                {s.title}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** The id of the last H2 whose top has scrolled above 40% of the viewport,
    falling back to the first section. The observer only wakes us when a
    heading crosses that line, so there's no scroll listener. */
function useActiveSection(sections: TocSection[]) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const headings = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (headings.length === 0) return;

    const update = () => {
      const line = window.innerHeight * 0.4;
      let current = headings[0].id;
      for (const h of headings) {
        if (h.getBoundingClientRect().top <= line) current = h.id;
      }
      setActive(current);
    };

    const observer = new IntersectionObserver(update, {
      rootMargin: "0px 0px -60% 0px",
    });
    headings.forEach((h) => observer.observe(h));
    update();
    return () => observer.disconnect();
  }, [sections]);

  return active;
}
