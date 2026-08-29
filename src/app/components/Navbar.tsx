"use client";

import Image from "next/image";
import { APP_URL } from "../lib/links";

export default function Navbar() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-6 lg:h-16 lg:px-12">

        {/* Wordmark, scrolls to top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Image
            src="/firstcall-logo-dark.png"
            alt="First Call, fire interview prep"
            width={1393}
            height={382}
            priority
            className="hidden h-9 w-auto lg:block"
          />
          <span className="font-display text-lg font-bold tracking-wider text-text-primary lg:hidden">
            <span className="text-accent">FIRST</span>CALL
          </span>
        </button>

        {/* Right-side group: section links, sign in, primary CTA */}
        <div className="flex items-center gap-6 lg:gap-8">
          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            <a
              href="#how-it-works"
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              How it works
            </a>
            <a
              href="#rubric"
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              The rubric
            </a>
          </div>

          <a
            href={APP_URL}
            className="hidden text-sm text-text-secondary transition-colors hover:text-text-primary sm:block"
          >
            Sign in
          </a>

          <a
            href={APP_URL}
            className="rounded-md bg-accent px-5 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Start free
          </a>
        </div>

      </div>
    </nav>
  );
}
