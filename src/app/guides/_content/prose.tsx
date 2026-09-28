import Link from "next/link";

/* The guide body vocabulary. Content files compose these instead of raw
   tags, so every guide gets the same type scale and rhythm without a prose
   plugin. Body text is 16px on mobile, 18px on desktop. */

export function H2({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-12 mb-4 scroll-mt-20 font-display text-3xl font-bold leading-tight text-text-primary first:mt-0 lg:text-[2.1rem]"
    >
      {children}
    </h2>
  );
}

export function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-8 mb-3 font-display text-xl font-bold leading-snug text-text-primary lg:text-2xl">
      {children}
    </h3>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-base leading-[1.7] text-text-secondary lg:text-lg">
      {children}
    </p>
  );
}

export function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-text-primary">{children}</strong>;
}

export function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mb-6 space-y-3 text-base leading-[1.65] text-text-secondary lg:text-lg">
      {children}
    </ul>
  );
}

export function OL({ children }: { children: React.ReactNode }) {
  return (
    <ol className="mb-6 list-decimal space-y-3 pl-6 text-base leading-[1.65] text-text-secondary marker:font-display marker:font-bold marker:text-accent lg:text-lg">
      {children}
    </ol>
  );
}

/** Bullet: a short amber tick instead of a browser disc. */
export function LI({ children }: { children: React.ReactNode }) {
  return (
    <li className="relative pl-6 before:absolute before:left-0 before:top-[0.8em] before:h-px before:w-3 before:bg-accent">
      {children}
    </li>
  );
}

/** Numbered list item: pairs with OL, no custom bullet. */
export function NLI({ children }: { children: React.ReactNode }) {
  return <li className="pl-1">{children}</li>;
}

/** Margin note: the homepage .fp-callout treatment. */
export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="fp-callout my-8 p-5 text-base leading-relaxed text-text-secondary lg:text-lg">
      {children}
    </div>
  );
}

/** Internal link. Descriptive text only, never "click here". */
export function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-text-primary underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-accent"
    >
      {children}
    </Link>
  );
}
