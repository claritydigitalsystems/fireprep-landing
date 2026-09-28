import JsonLd from "../components/JsonLd";
import { CtaBlock, PageHeader } from "../components/PageParts";
import { pageMetadata } from "../lib/site";
import { breadcrumbLd } from "../lib/schema";
import { GUIDES } from "./_content";
import { GuideCard } from "./_content/GuideCard";

export const metadata = pageMetadata({
  title: "Fire Oral Board Guides",
  description:
    "Short, practical guides to preparing for the fire service oral board, written by a firefighter. How panels score, how to practice, and handling nerves.",
  path: "/guides",
});

export default function GuidesIndex() {
  return (
    <main className="flex flex-col bg-background">
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ])}
      />

      <PageHeader eyebrow="Guides" title="Prepare for the oral board like it counts.">
        <p>
          Short, practical guides to the fire service oral board, written by a
          firefighter. How you&apos;re scored, how to practice, and how to
          show up ready. No scripts, no model answers.
        </p>
      </PageHeader>

      <section>
        <div className="mx-auto w-full max-w-7xl px-6 pb-[32px] lg:px-12">
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {GUIDES.map(({ meta }) => (
              <li key={meta.slug}>
                <GuideCard meta={meta} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBlock />
    </main>
  );
}
