import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-12 lg:py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Left — wordmark + tagline */}
          <div>
            <span className="font-display text-lg font-bold tracking-wider text-text-primary">
              <span className="text-orange">FIRE</span>PREP
            </span>
            <p className="mt-1 text-xs text-text-secondary">
              Built by an active firefighter.
            </p>
          </div>

          {/* Right — links + copyright */}
          <div className="flex flex-col gap-2 sm:items-end">
            <p className="text-xs text-text-muted">
              <Link href="/privacy" className="transition-colors hover:text-text-secondary">Privacy</Link>
              {" · "}
              <Link href="/terms" className="transition-colors hover:text-text-secondary">Terms</Link>
              {" · "}
              <a href="mailto:hello@fireprep.com" className="transition-colors hover:text-text-secondary">Contact</a>
            </p>
            <p className="text-xs text-text-muted">© 2026 FirePrep</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
