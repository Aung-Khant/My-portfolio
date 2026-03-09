/**
 * GPU-friendly fluid background. Uses only transform/opacity (compositor-only).
 * No JS animation, no filter animation — avoids layout thrashing and lag.
 */
export function FluidBackground() {
  return (
    <div
      className="fluid-bg"
      aria-hidden
    >
      <div className="fluid-bg__blob fluid-bg__blob--1" />
      <div className="fluid-bg__blob fluid-bg__blob--2" />
      <div className="fluid-bg__blob fluid-bg__blob--3" />
    </div>
  );
}
