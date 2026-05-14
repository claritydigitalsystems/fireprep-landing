import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — FirePrep",
  description: "How FirePrep handles your information when you join our waitlist.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 pt-16 pb-20 lg:px-8">

      <h1 className="mb-4 font-display text-4xl font-bold text-text-primary lg:text-5xl">
        Privacy Policy
      </h1>
      <p className="mb-10 text-sm italic text-text-secondary">
        Last updated: May 14, 2026
      </p>

      <p className="mb-4 leading-relaxed text-text-secondary">
        This policy describes how FirePrep handles your information when you
        join our waitlist.
      </p>

      <h2 className="mb-4 mt-10 font-body text-2xl font-semibold text-text-primary">
        Who we are
      </h2>
      <p className="mb-4 leading-relaxed text-text-secondary">
        FirePrep is operated by Clarity Digital Systems. If you have any
        questions about this policy, you can reach us at{" "}
        <a
          href="mailto:scott@claritydigitalsystems.com"
          className="text-orange underline-offset-2 hover:underline"
        >
          scott@claritydigitalsystems.com
        </a>
        .
      </p>

      <h2 className="mb-4 mt-10 font-body text-2xl font-semibold text-text-primary">
        What we collect
      </h2>
      <p className="mb-4 leading-relaxed text-text-secondary">
        When you join the FirePrep waitlist, we collect your email address.
        That&apos;s it. We do not currently collect any other personal
        information through this site.
      </p>
      <p className="mb-4 leading-relaxed text-text-secondary">
        We use Google Analytics 4 to understand how visitors use our site (see
        the section below for details). We do not use cookies for advertising.
        We do not sell or share your data with third parties for marketing
        purposes.
      </p>

      <h2 className="mb-4 mt-10 font-body text-2xl font-semibold text-text-primary">
        How we use your email
      </h2>
      <p className="mb-4 leading-relaxed text-text-secondary">
        We use your email address to:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 leading-relaxed text-text-secondary">
        <li>Notify you when FirePrep is available</li>
        <li>Send occasional updates about our progress</li>
        <li>Respond to questions you send us</li>
      </ul>
      <p className="mb-4 leading-relaxed text-text-secondary">
        We do not send marketing emails for unrelated products. We do not share
        your email with other companies for them to market to you.
      </p>

      <h2 className="mb-4 mt-10 font-body text-2xl font-semibold text-text-primary">
        Analytics
      </h2>
      <p className="mb-4 leading-relaxed text-text-secondary">
        We use Google Analytics 4 (GA4), a service provided by Google, to
        understand how visitors find and use our site. GA4 helps us see basic
        information like how many people visit, which pages they view, what
        device they&apos;re on, and where they&apos;re coming from (for example,
        a Reddit post or a search engine).
      </p>
      <p className="mb-4 leading-relaxed text-text-secondary">
        To do this, GA4 sets cookies in your browser and collects information
        including your IP address (anonymized by Google), browser type, device
        type, pages you visit on our site, and how long you stay. This
        information is sent to and stored by Google. We use it to improve the
        site — we do not use it for advertising, and we do not share it with
        third parties beyond Google.
      </p>
      <p className="mb-4 leading-relaxed text-text-secondary">
        If you prefer not to be tracked by Google Analytics, you can install
        Google&apos;s official{" "}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange underline-offset-2 hover:underline"
        >
          Google Analytics Opt-out Browser Add-on
        </a>
        , which prevents GA4 from collecting any information about your visits.
        Most ad-blocking browser extensions (such as uBlock Origin) and
        privacy-focused browsers (such as Brave) also block GA4 by default.
      </p>
      <p className="mb-4 leading-relaxed text-text-secondary">
        You can review Google&apos;s privacy practices at{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange underline-offset-2 hover:underline"
        >
          policies.google.com/privacy
        </a>
        .
      </p>

      <h2 className="mb-4 mt-10 font-body text-2xl font-semibold text-text-primary">
        Where your data is stored
      </h2>
      <p className="mb-4 leading-relaxed text-text-secondary">
        Your email is stored by MailerLite, an email service provider we use to
        manage our waitlist. MailerLite acts as a data processor on our behalf.
        You can review their privacy practices at{" "}
        <a
          href="https://www.mailerlite.com/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange underline-offset-2 hover:underline"
        >
          mailerlite.com/legal/privacy-policy
        </a>
        .
      </p>
      <p className="mb-4 leading-relaxed text-text-secondary">
        We do not store your email in any other location or database.
      </p>

      <h2 className="mb-4 mt-10 font-body text-2xl font-semibold text-text-primary">
        How long we keep your data
      </h2>
      <p className="mb-4 leading-relaxed text-text-secondary">
        We keep your email until:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 leading-relaxed text-text-secondary">
        <li>You ask to be removed from the waitlist, or</li>
        <li>
          FirePrep is launched and you choose to convert your waitlist spot into
          an account, or
        </li>
        <li>
          We wind down the waitlist (in which case we will notify you and delete
          the data within 30 days)
        </li>
      </ul>

      <h2 className="mb-4 mt-10 font-body text-2xl font-semibold text-text-primary">
        Your rights
      </h2>
      <p className="mb-4 leading-relaxed text-text-secondary">You can:</p>
      <ul className="mb-4 list-disc space-y-2 pl-6 leading-relaxed text-text-secondary">
        <li>Ask what data we have about you</li>
        <li>Ask us to correct or delete your data</li>
        <li>
          Unsubscribe from our emails at any time using the link in any email we
          send
        </li>
      </ul>
      <p className="mb-4 leading-relaxed text-text-secondary">
        To exercise any of these rights, email{" "}
        <a
          href="mailto:scott@claritydigitalsystems.com"
          className="text-orange underline-offset-2 hover:underline"
        >
          scott@claritydigitalsystems.com
        </a>
        . We will respond within 30 days.
      </p>

      <h2 className="mb-4 mt-10 font-body text-2xl font-semibold text-text-primary">
        Children
      </h2>
      <p className="mb-4 leading-relaxed text-text-secondary">
        FirePrep is intended for adults applying for fire service positions. We
        do not knowingly collect data from anyone under 18. If you believe a
        minor has signed up, contact us and we will delete the record.
      </p>

      <h2 className="mb-4 mt-10 font-body text-2xl font-semibold text-text-primary">
        Changes to this policy
      </h2>
      <p className="mb-4 leading-relaxed text-text-secondary">
        We may update this policy as FirePrep develops. When we do, we will
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
