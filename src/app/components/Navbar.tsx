"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { APP_URL } from "../lib/links";

const SECTION_LINKS = [
  { href: "#why", label: "Why First Call" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#rubric", label: "The rubric" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function scrollToTop() {
    setMenuOpen(false);
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
          {/* Mobile fallback wordmark. FIRST is the canonical logo orange, so
              it matches the artwork used at lg+ and in the footer. */}
          <span className="font-display text-2xl font-bold tracking-wider text-text-primary lg:hidden">
            <span className="text-logo">FIRST</span>CALL
          </span>
        </button>

        {/* Desktop: inline links, sign in, primary CTA */}
        <div className="flex items-center gap-3 lg:gap-8">
          <div className="hidden items-center gap-8 lg:flex">
            {SECTION_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={APP_URL}
            className="hidden text-sm text-text-secondary transition-colors hover:text-text-primary lg:block"
          >
            Sign in
          </a>

          <a
            href={APP_URL}
            className="rounded-md bg-accent px-4 py-2 text-base font-semibold text-background transition-colors hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:px-5 lg:text-sm"
          >
            Start free
          </a>

          {/* Mobile menu toggle. 44px tap target. */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="-mr-2 flex h-11 w-11 cursor-pointer items-center justify-center rounded-md text-text-secondary transition-colors hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
          >
            {menuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

      </div>

      {/* Mobile menu panel. Everything the desktop bar shows inline, stacked
          at 44px minimum tap height. Closes on tap. */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="border-t border-border bg-background lg:hidden"
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-3">
          {SECTION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex min-h-[44px] items-center border-b border-border text-base text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}

          <a
            href={APP_URL}
            onClick={() => setMenuOpen(false)}
            className="flex min-h-[44px] items-center border-b border-border text-base text-text-secondary transition-colors hover:text-text-primary"
          >
            Sign in
          </a>

          <a
            href={APP_URL}
            onClick={() => setMenuOpen(false)}
            className="mt-4 mb-2 flex min-h-[44px] items-center justify-center rounded-md bg-accent px-5 text-base font-semibold text-background transition-colors hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Start free
          </a>
        </div>
      </div>
    </nav>
  );
}
