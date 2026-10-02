import type { Metadata } from "next";
import { Geist, Geist_Mono, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Attribution from "./components/Attribution";
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

export const metadata: Metadata = {
  title: "First Call · Fire Interview Prep",
  description:
    "Practice the fire oral board out loud. Every answer is scored against a rubric written for that question. Built by a firefighter for entry-level candidates.",
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
