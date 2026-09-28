import type { Metadata } from "next";

/** The marketing site's canonical origin. Canonicals, the sitemap, Open
    Graph URLs and JSON-LD ids all build from this, so the www host is the
    only one search engines are ever told about. */
export const SITE_URL = "https://www.firstcallprep.com";

export const SITE_NAME = "First Call Prep";

export const SUPPORT_EMAIL = "support@firstcallprep.com";

/** Default share image. The demo poster is 2:1 with the wordmark in frame,
    which is what summary_large_image crops to. */
export const OG_IMAGE = {
  url: "/firstcall-demo-poster.jpg",
  width: 2160,
  height: 1080,
  alt: "The First Call dashboard, ready to start an oral board practice session",
};

/** Next merges metadata shallowly: a page that sets `openGraph` replaces the
    root's `openGraph` wholesale. Every page goes through this helper so each
    one gets the full set (canonical, OG, Twitter) rather than half of it. */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  const fullTitle = `${title} | First Call`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      type,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
