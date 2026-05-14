import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald, Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Analytics from "./components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: "variable",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: "variable",
});

export const metadata: Metadata = {
  title: "FirePrep — Oral Board Practice for Fire Candidates",
  description:
    "AI-graded oral board practice mapped to the same competency frameworks panels use. Built by an active firefighter for entry-level candidates.",
  verification: {
    google: "XgDKkIQuvFZN_fyckMlVsJZYzHuqsui_rpqueLZ4FKQ",
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
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${interTight.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
