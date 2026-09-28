import { SITE_NAME, SITE_URL, SUPPORT_EMAIL } from "./site";

/** JSON-LD builders. Stable @ids let the site-wide Organization and
    WebSite nodes be referenced from page-level nodes without repeating them. */

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const FOUNDER_ID = `${SITE_URL}/about#scott`;

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE_NAME,
  alternateName: "First Call",
  url: SITE_URL,
  logo: `${SITE_URL}/firstcall-logo-dark.png`,
  email: SUPPORT_EMAIL,
  founder: { "@id": FOUNDER_ID },
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { "@id": ORG_ID },
};

export const founderLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": FOUNDER_ID,
  name: "Scott Shimala",
  jobTitle: "Firefighter",
  url: `${SITE_URL}/about`,
  worksFor: { "@id": ORG_ID },
  description:
    "Firefighter and founder of First Call, an oral board practice tool for fire service candidates.",
};

/** No `offers` on purpose: the only honest price is "free while in beta",
    and a published price of 0 would outlive the beta in search results. */
export const softwareAppLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "First Call",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  url: SITE_URL,
  description:
    "Practice the fire service oral board out loud and get every answer scored against a rubric written for that question.",
  publisher: { "@id": ORG_ID },
};

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
