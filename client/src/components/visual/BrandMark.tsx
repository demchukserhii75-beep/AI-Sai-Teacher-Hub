import { GraduationCap } from 'lucide-react';

/**
 * The AI-SAI brand lockup: a gradient glyph tile + animated wordmark.
 * `compact` hides the wordmark (used in the tight dock on small screens).
 */
export default function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5 select-none">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient shadow-glow-sm">
        <GraduationCap className="h-5 w-5 text-white" strokeWidth={2.4} />
        <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/40" />
      </span>
      {!compact && (
        <span className="font-display text-lg font-extrabold tracking-tight leading-none">
          AI<span className="text-gradient">·</span>SAI
        </span>
      )}
    </span>
  );
}
