import Script from "next/script";

/** Microsoft Clarity: session recordings + heatmaps for the MARKETING SITE ONLY.
    Disclosed in the app's canonical privacy policy, §4 "Session recordings"
    (P3-161). Rendered only when NEXT_PUBLIC_CLARITY_PROJECT_ID is set, which
    is Production-only in Vercel, so local dev and preview deploys never load it.

    It cannot see inside the embedded taster: that's the app's own
    cross-origin iframe, and the policy relies on that being true. Never add
    Clarity to the app.

    Masking is configured in the Clarity dashboard (Balanced: all input and
    textarea contents hidden). The snippet below is Microsoft's standard
    loader; the project ID is passed through JSON.stringify so it is always
    a safely quoted string. */
export default function Clarity({ projectId }: { projectId: string }) {
  return (
    <Script id="ms-clarity" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", ${JSON.stringify(projectId)});`}
    </Script>
  );
}
