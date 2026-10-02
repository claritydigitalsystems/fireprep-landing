import type { Metadata } from "next";
import { Geist, Geist_Mono, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Attribution from "./components/Attribution";
import JsonLd from "./components/JsonLd";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "./lib/site";
import { organizationLd, websiteLd } from "./lib/schema";
import SignupClickTracker from "./components/SignupClickTracker";
import { GoogleAnalytics } from "@next/third-parties/google";

// Set in Vercel for Production ONLY. Unset in local dev and preview deploys,
// so GA4 never loads there and our own testing stays out of the data.
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Barlow ships as static weights only (no variable axis), so declare the
// weights the page actually uses: 400/500/600/700.
const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const DEFAULT_TITLE = "First Call · Fire Interview Prep";
const DEFAULT_DESCRIPTION =
  "Practice the fire oral board out loud. Every answer is scored against a rubric written for that question. Built by a firefighter for entry-level candidates.";

// Site-wide defaults. Inner pages override through pageMetadata() in
// lib/site.ts, which restates OG and Twitter in full because Next merges
// those objects shallowly.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | First Call",
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${barlowCondensed.variable} ${barlow.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={organizationLd} />
        <JsonLd data={websiteLd} />
        <Attribution />
        <Navbar />
        {children}
        <Footer />
        <SignupClickTracker />
      </body>
      {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
    </html>
  );
}
