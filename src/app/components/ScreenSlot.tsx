import fs from "node:fs";
import path from "node:path";
import Image, { getImageProps } from "next/image";
import { ImageIcon } from "lucide-react";

/* Screenshot slots. Each slot has an id and looks for its files by
   convention:

     /public/screens/<dir>/<id>-desktop.png   shown at 768px and up
     /public/screens/<dir>/<id>-mobile.png    shown under 768px (optional)

   Dropping a file with that name in is the whole swap: no code change.
   Until a file exists the slot renders a labeled placeholder at the same
   size, so layouts can be judged before the captures are made.

   The check runs on the server at render time. In `next dev` a dropped file
   shows on the next reload; in production it shows after the next build. */

const DEFAULT_DIR = "/screens/how-it-works";

function publicFileExists(src: string) {
  return fs.existsSync(path.join(process.cwd(), "public", src));
}

export function slotPaths(id: string, dir = DEFAULT_DIR) {
  return {
    desktop: `${dir}/${id}-desktop.png`,
    mobile: `${dir}/${id}-mobile.png`,
  };
}

/* ── Placeholder ──────────────────────────────────────────────────────────
   A container-query card, so the same markup reads right in a 100px phone
   screen (icon only) and a full-width slot (label plus filenames). Dashed
   edge on the existing border token: deliberate, not broken. */
function Placeholder({
  label,
  alt,
  files,
  kind = "Screenshot",
}: {
  label: string;
  alt: string;
  files: string[];
  kind?: string;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className="@container absolute inset-0 bg-surface p-2"
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-[4px] border border-dashed border-border-strong px-3 text-center">
        <ImageIcon className="h-5 w-5 shrink-0 text-text-muted" aria-hidden="true" />
        <p className="hidden font-display text-xs font-semibold uppercase tracking-[0.18em] text-text-muted @[200px]:block">
          {kind}
        </p>
        <p className="hidden max-w-[36ch] font-display text-base font-semibold leading-snug text-text-secondary @[200px]:block @[420px]:text-lg">
          {label}
        </p>
        <p className="hidden font-mono text-xs leading-relaxed text-text-muted @[280px]:block">
          {files.map((f) => (
            <span key={f} className="block">
              {f}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

/** One screenshot (or its placeholder) filling a positioned parent. For
    screens that already have a frame, like DeviceMockup's laptop and phone. */
export function ScreenFill({
  src,
  label,
  alt,
  sizes,
  eager = false,
}: {
  src: string;
  label: string;
  alt: string;
  sizes: string;
  eager?: boolean;
}) {
  if (!publicFileExists(src)) {
    return <Placeholder label={label} alt={alt} files={[src.split("/").pop()!]} />;
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      className="object-cover object-top"
    />
  );
}

type Frame = "browser" | "phone" | "none";

/** A framed, responsive screenshot slot.
    - `aspect` is the desktop ratio, `mobileAspect` the ratio used under
      768px when a mobile file exists. Write them CSS-style: "16/10".
    - `mobileSrc={false}` opts out of a mobile image entirely (used by the
      annotated slot, whose anchor points are measured on the desktop
      capture).
    - Frames match the homepage DeviceMockup: dark body, 1.5px outline,
      small radii, the same tight shadow. A browser frame whose slot has a
      mobile capture turns into a phone shell under 768px, so a phone
      screenshot never sits in a desktop browser window. */
export default function ScreenSlot({
  id,
  label,
  alt,
  dir = DEFAULT_DIR,
  desktopSrc,
  mobileSrc,
  aspect = "16/10",
  mobileAspect = "9/19.5",
  frame = "browser",
  sizes = "(max-width: 767px) 100vw, 50vw",
  mobileSizes = "(max-width: 767px) 80vw, 1px",
  eager = false,
  className = "",
  placeholderKind,
}: {
  id: string;
  label: string;
  alt: string;
  dir?: string;
  desktopSrc?: string;
  mobileSrc?: string | false;
  aspect?: string;
  mobileAspect?: string;
  frame?: Frame;
  sizes?: string;
  mobileSizes?: string;
  eager?: boolean;
  className?: string;
  /** Small label above the placeholder title. Defaults to "Screenshot";
      photo slots pass "Photo". */
  placeholderKind?: string;
}) {
  const paths = slotPaths(id, dir);
  const desktop = desktopSrc ?? paths.desktop;
  const mobile = mobileSrc === false ? null : (mobileSrc ?? paths.mobile);

  const hasDesktop = publicFileExists(desktop);
  const hasMobile = mobile !== null && publicFileExists(mobile);
  const phoneBelowMd = hasMobile && frame === "browser";

  const loading = eager ? ("eager" as const) : ("lazy" as const);
  const fetchPriority = eager ? ("high" as const) : undefined;

  let screen: React.ReactNode;
  if (hasDesktop && hasMobile) {
    const common = { alt, fill: true, loading, fetchPriority };
    const {
      props: { srcSet: mobileSet },
    } = getImageProps({ ...common, src: mobile!, sizes: mobileSizes });
    const { props: desktopProps } = getImageProps({ ...common, src: desktop, sizes });
    screen = (
      <picture>
        <source media="(max-width: 767px)" srcSet={mobileSet} />
        {/* getImageProps output: next/image's optimized srcset on a plain
            <img>, the documented art-direction pattern. */}
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img {...desktopProps} className="object-cover object-top" />
      </picture>
    );
  } else if (hasMobile) {
    // Mobile capture only: show it under 768px and keep the placeholder on
    // desktop, rather than cropping a phone screen into a 16:10 window.
    // The hidden branch is display:none, so its lazy image never loads.
    screen = (
      <>
        <div className="absolute inset-0 md:hidden">
          <Image
            src={mobile!}
            alt={alt}
            fill
            sizes={mobileSizes}
            loading={loading}
            fetchPriority={fetchPriority}
            className="object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 hidden md:block">
          <Placeholder label={label} alt={alt} files={[desktop.split("/").pop()!]} kind={placeholderKind} />
        </div>
      </>
    );
  } else if (hasDesktop) {
    screen = (
      <Image
        src={desktop}
        alt={alt}
        fill
        sizes={sizes}
        loading={loading}
        fetchPriority={fetchPriority}
        className="object-cover object-top"
      />
    );
  } else {
    const files = [desktop, ...(mobile ? [mobile] : [])].map((f) => f.split("/").pop()!);
    screen = <Placeholder label={label} alt={alt} files={files} kind={placeholderKind} />;
  }

  // Aspect ratios ride on CSS variables so any "w/h" string works without
  // generating a Tailwind class per ratio.
  const aspectVars = {
    "--slot-aspect": aspect,
    "--slot-aspect-m": hasMobile ? mobileAspect : aspect,
  } as React.CSSProperties;
  const screenBox =
    "relative w-full overflow-hidden bg-device-screen aspect-(--slot-aspect-m) md:aspect-(--slot-aspect)";

  if (frame === "none") {
    return (
      <div data-slot={id} className={`${className}`} style={aspectVars}>
        <div className={`${screenBox} rounded-md border border-border`}>{screen}</div>
      </div>
    );
  }

  if (frame === "phone") {
    return (
      <div data-slot={id} className={`mx-auto w-full max-w-[280px] ${className}`} style={aspectVars}>
        <div className="rounded-[0.75rem] border-[1.5px] border-text-muted bg-device-body p-1 shadow-[0_6px_8px_-2px_rgba(0,0,0,0.9)]">
          <div aria-hidden="true" className="mx-auto mb-1 h-[2px] w-6 rounded-full bg-device-detail" />
          <div className={`${screenBox} rounded-[0.4rem]`}>{screen}</div>
        </div>
      </div>
    );
  }

  // Browser frame: the homepage laptop lid without the base.
  return (
    <div
      data-slot={id}
      className={`${phoneBelowMd ? "mx-auto max-w-[280px] md:max-w-none" : ""} w-full ${className}`}
      style={aspectVars}
    >
      <div
        className={`overflow-hidden border-[1.5px] border-text-muted bg-device-body shadow-[0_6px_8px_-2px_rgba(0,0,0,0.9)] ${
          phoneBelowMd ? "rounded-[0.75rem] p-1 md:rounded-[6px] md:p-0" : "rounded-[6px]"
        }`}
      >
        {phoneBelowMd && (
          <div aria-hidden="true" className="mx-auto mb-1 h-[2px] w-6 rounded-full bg-device-detail md:hidden" />
        )}
        <div
          aria-hidden="true"
          className={`items-center gap-1.5 px-2.5 py-2 ${phoneBelowMd ? "hidden md:flex" : "flex"}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-device-detail" />
          <span className="h-1.5 w-1.5 rounded-full bg-device-detail" />
          <span className="h-1.5 w-1.5 rounded-full bg-device-detail" />
        </div>
        <div
          className={`${screenBox} ${
            phoneBelowMd ? "rounded-[0.4rem] md:rounded-none md:border-t md:border-device-detail" : "border-t border-device-detail"
          }`}
        >
          {screen}
        </div>
      </div>
    </div>
  );
}
