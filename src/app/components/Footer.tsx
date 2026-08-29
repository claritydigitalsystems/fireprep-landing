import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-12 lg:py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Left: logo */}
          <div>
            <Image
              src="/firstcall-logo-dark.png"
              alt="First Call, fire interview prep"
              width={1393}
              height={382}
              className="h-11 w-auto"
            />
          </div>

          {/* Right: links + copyright */}
          <div className="flex flex-col gap-2 sm:items-end">
            <p className="text-xs text-text-muted">
              <Link href="/privacy" className="transition-colors hover:text-text-secondary">Privacy</Link>
              {" · "}
              <Link href="/terms" className="transition-colors hover:text-text-secondary">Terms</Link>
              {" · "}
              <a href="mailto:support@firstcallprep.com" className="transition-colors hover:text-text-secondary">Contact</a>
            </p>
            <p className="text-xs text-text-muted">© 2026 First Call</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
