import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — FirePrep",
  description: "Terms governing your use of FirePrep's pre-launch waitlist.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 pt-16 pb-20 lg:px-8">

      <h1 className="mb-4 font-display text-4xl font-bold text-text-primary lg:text-5xl">
        Terms of Service
      </h1>
      <p className="mb-10 text-sm italic text-text-secondary">
        Last updated: May 1, 2026
      </p>

      <p className="mb-4 leading-relaxed text-text-secondary">
        These terms apply to your use of fireprep.com and your participation in
        the FirePrep waitlist. By submitting your email through this site, you
        agree to these terms.
      </p>

      <h2 className="mb-4 mt-10 font-body text-2xl font-semibold text-text-primary">
        What FirePrep is
      </h2>
      <p className="mb-4 leading-relaxed text-text-secondary">
        FirePrep is a forthcoming web application designed to help fire service
        candidates prepare for oral board interviews. The product is currently
        in development and not yet available.
      </p>
      <p className="mb-4 leading-relaxed text-text-secondary">
        This site is a pre-launch waitlist &mdash; its only function is to
        collect email addresses from people interested in being notified when
        the product launches.
      </p>

      <h2 className="mb-4 mt-10 font-body text-2xl font-semibold text-text-primary">
        Who operates this site
      </h2>
      <p className="mb-4 leading-relaxed text-text-secondary">
        This site is operated by Clarity Digital Systems. References to
        &ldquo;we,&rdquo; &ldquo;us,&rdquo; and &ldquo;our&rdquo; refer to
        Clarity Digital Systems. References to &ldquo;you&rdquo; refer to
        anyone visiting this site or joining the waitlist.
      </p>

      <h2 className="mb-4 mt-10 font-body text-2xl font-semibold text-text-primary">
        What we promise
      </h2>
      <p className="mb-4 leading-relaxed text-text-secondary">
        If you join the waitlist:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 leading-relaxed text-text-secondary">
        <li>We will notify you by email when FirePrep is available</li>
        <li>
          We will handle your email according to our Privacy Policy
        </li>
      </ul>
      <p className="mb-4 leading-relaxed text-text-secondary">
        That&apos;s the entire scope of these terms.
      </p>

      <h2 className="mb-4 mt-10 font-body text-2xl font-semibold text-text-primary">
        What we do not promise
      </h2>
      <p className="mb-4 leading-relaxed text-text-secondary">
        We do not promise:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 leading-relaxed text-text-secondary">
        <li>A specific launch date for FirePrep</li>
        <li>That FirePrep will be free, paid, or any specific price</li>
        <li>
          That you will be granted access to FirePrep when it launches
        </li>
        <li>
          That FirePrep will be available in your region or for your specific
          role
        </li>
        <li>
          That FirePrep will improve your interview outcomes or hiring success
        </li>
      </ul>
      <p className="mb-4 leading-relaxed text-text-secondary">
        The product is in active development and details may change.
      </p>

      <h2 className="mb-4 mt-10 font-body text-2xl font-semibold text-text-primary">
        Your responsibilities
      </h2>
      <p className="mb-4 leading-relaxed text-text-secondary">
        You agree to:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 leading-relaxed text-text-secondary">
        <li>Provide a real email address you control</li>
        <li>
          Not submit emails belonging to other people without their permission
        </li>
        <li>
          Not attempt to interfere with the site, our services, or other users
        </li>
      </ul>

      <h2 className="mb-4 mt-10 font-body text-2xl font-semibold text-text-primary">
        Intellectual property
      </h2>
      <p className="mb-4 leading-relaxed text-text-secondary">
        The FirePrep name, logo, written content, and design on this site belong
        to Clarity Digital Systems. You may not copy, redistribute, or use them
        for commercial purposes without permission.
      </p>

      <h2 className="mb-4 mt-10 font-body text-2xl font-semibold text-text-primary">
        Disclaimers
      </h2>
      <p className="mb-4 leading-relaxed text-text-secondary">
        This site is provided &ldquo;as is&rdquo; without warranties of any
        kind. We do not guarantee that the site will always be available,
        error-free, or secure.
      </p>
      <p className="mb-4 leading-relaxed text-text-secondary">
        To the fullest extent permitted by law, Clarity Digital Systems is not
        liable for any damages arising from your use of this site or your
        participation in the waitlist, beyond what we have promised in these
        terms.
      </p>

      <h2 className="mb-4 mt-10 font-body text-2xl font-semibold text-text-primary">
        Governing law
      </h2>
      <p className="mb-4 leading-relaxed text-text-secondary">
        These terms are governed by the laws of the State of Wyoming, without
        regard to conflict of laws principles. Any disputes will be resolved in
        the state or federal courts located in Wyoming.
      </p>

      <h2 className="mb-4 mt-10 font-body text-2xl font-semibold text-text-primary">
        Changes to these terms
      </h2>
      <p className="mb-4 leading-relaxed text-text-secondary">
        We may update these terms as FirePrep develops. When we do, we will
        update the &ldquo;Last updated&rdquo; date at the top. Material changes
        will be communicated by email to current waitlist members.
      </p>

      <h2 className="mb-4 mt-10 font-body text-2xl font-semibold text-text-primary">
        Contact
      </h2>
      <p className="leading-relaxed text-text-secondary">
        <a
          href="mailto:scott@claritydigitalsystems.com"
          className="text-orange underline-offset-2 hover:underline"
        >
          scott@claritydigitalsystems.com
        </a>
      </p>
      <p className="mt-1 leading-relaxed text-text-secondary">
        Clarity Digital Systems
      </p>

    </main>
  );
}
