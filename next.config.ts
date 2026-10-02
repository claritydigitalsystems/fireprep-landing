import type { NextConfig } from "next";
import { APP_URL } from "./src/app/lib/links";

const nextConfig: NextConfig = {
  // Dev only: lets phone testing over a Cloudflare quick tunnel load the
  // dev server's JS and HMR (otherwise client components never hydrate).
  // Ignored by production builds (CCP-037).
  allowedDevOrigins: ["*.trycloudflare.com"],

  // The legal pages are canonical in the app, not here (P3-161): this site
  // links to them rather than hosting its own copy. These 308s keep old
  // bookmarks and search-indexed links to the retired local /privacy and
  // /terms pointed at the canonical versions instead of 404ing.
  async redirects() {
    return [
      {
        source: "/privacy",
        destination: `${APP_URL}/privacy`,
        permanent: true,
      },
      {
        source: "/terms",
        destination: `${APP_URL}/terms`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
