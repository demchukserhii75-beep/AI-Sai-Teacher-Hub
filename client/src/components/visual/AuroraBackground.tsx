/**
 * Animated aurora background — soft, slowly drifting color blobs behind the page.
 * Pure CSS (blurred gradients + keyframes), so it's cheap and runs everywhere.
 * Honors prefers-reduced-motion via the global CSS rule that freezes animations.
 */
export default function AuroraBackground({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      {/* base wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-cyan-50" />

      {/* drifting aurora blobs */}
      <div className="absolute -top-32 -left-24 h-[42rem] w-[42rem] rounded-full bg-brand-400/30 blur-[120px] animate-aurora" />
      <div className="absolute top-1/4 -right-24 h-[38rem] w-[38rem] rounded-full bg-accent-violet/25 blur-[120px] animate-aurora [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 h-[34rem] w-[34rem] rounded-full bg-accent-cyan/25 blur-[120px] animate-aurora [animation-delay:-12s]" />

      {/* subtle grid texture for depth */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(11,15,31,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(11,15,31,0.6) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />
    </div>
  );
}
