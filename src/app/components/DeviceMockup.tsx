/** The homepage hero's laptop + phone mockup, shared so other pages reuse
    the exact same hardware instead of a copy.

    Frames are deliberately FLAT and front-facing. No perspective or 3D
    rotation: angled CSS mockups read as cheap. Hard edges, small radii, no
    glow or drop-shadow halo. This should read as equipment sitting in the
    page, not a floating SaaS graphic.

    The screens are slots: each is a positioned box at a fixed aspect ratio
    (16:10 laptop, 9:18 phone), and whatever is passed in fills it. Pass a
    `fill` next/image or a ScreenFill. ScreenSlot's frames copy these
    classes (outline, body, radii, shadow); change both together. */

export default function DeviceMockup({
  laptopScreen,
  phoneScreen,
}: {
  laptopScreen: React.ReactNode;
  phoneScreen: React.ReactNode;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[420px] pb-8">

      {/* Laptop */}
      <div className="rounded-t-[6px] border-[1.5px] border-b-0 border-text-muted bg-device-body shadow-[0_6px_8px_-2px_rgba(0,0,0,0.9)]">
        {/* Browser-style chrome */}
        <div aria-hidden="true" className="flex items-center gap-1.5 px-2.5 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-device-detail" />
          <span className="h-1.5 w-1.5 rounded-full bg-device-detail" />
          <span className="h-1.5 w-1.5 rounded-full bg-device-detail" />
        </div>
        {/* Laptop screen area, recessed below the frame */}
        <div className="relative aspect-[16/10] w-full overflow-hidden border-t border-device-detail bg-device-screen">
          {laptopScreen}
        </div>
      </div>
      {/* Laptop base, slightly wider than the lid. Its top edge is
          the hinge line, since the lid carries border-b-0. */}
      <div
        aria-hidden="true"
        className="relative left-1/2 h-2 w-[106%] -translate-x-1/2 rounded-b-[4px] border-[1.5px] border-device-edge bg-device-body shadow-[0_6px_8px_-2px_rgba(0,0,0,0.9)]"
      />

      {/* Phone, overlapping the laptop's lower-right corner. The ring
          is a knockout in the page colour, not a glow: it keeps the
          phone edge legible where it crosses the laptop. */}
      <div className="absolute bottom-0 right-3 w-[25%] min-w-[80px] rounded-[0.75rem] border-[1.5px] border-text-muted bg-device-body p-1 shadow-[0_6px_8px_-2px_rgba(0,0,0,0.9)] ring-[3px] ring-background">
        <div aria-hidden="true" className="mx-auto mb-1 h-[2px] w-6 rounded-full bg-device-detail" />
        {/* Phone screen area, recessed below the frame */}
        <div className="relative aspect-[9/18] w-full overflow-hidden rounded-[0.4rem] bg-device-screen">
          {phoneScreen}
        </div>
      </div>

    </div>
  );
}
