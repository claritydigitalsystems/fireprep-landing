"use client";

export default function Navbar() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function scrollToWaitlist() {
    document.getElementById("waitlist-form")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-6 lg:h-16 lg:px-12">

        {/* Wordmark — scrolls to top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="font-display text-lg font-bold tracking-wider text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:text-xl"
        >
          <span className="text-orange">FIRE</span>PREP
        </button>

        {/* Join Waitlist — scrolls to hero form */}
        <button
          type="button"
          onClick={scrollToWaitlist}
          className="cursor-pointer rounded-lg bg-orange px-5 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-orange-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Join Waitlist
        </button>

      </div>
    </nav>
  );
}
