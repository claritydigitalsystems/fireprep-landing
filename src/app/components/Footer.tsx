import Image from "next/image";
import { APP_URL } from "../lib/links";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-12 lg:py-10">
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:text-left">

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
          <div className="flex flex-col items-center gap-2 sm:items-end">
            <div className="flex flex-wrap items-center justify-center gap-x-2 text-base text-text-muted sm:justify-end">
              <a href={`${APP_URL}/privacy`} className="px-1 py-1 transition-colors hover:text-text-secondary">Privacy</a>
              <span aria-hidden="true">·</span>
              <a href={`${APP_URL}/terms`} className="px-1 py-1 transition-colors hover:text-text-secondary">Terms</a>
              <span aria-hidden="true">·</span>
              <a href="mailto:support@firstcallprep.com" className="px-1 py-1 transition-colors hover:text-text-secondary">Contact</a>
            </div>
            <p className="text-base text-text-muted">© 2026 First Call</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
