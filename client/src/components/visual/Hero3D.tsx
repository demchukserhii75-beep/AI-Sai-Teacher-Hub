import { Suspense, lazy } from 'react';
import { useEnable3D } from '../../lib/useDevice';

const HeroScene = lazy(() => import('./HeroScene'));

/**
 * Pure-CSS stand-in shown on mobile, for reduced-motion users, and while the
 * WebGL bundle loads. Keeps the hero looking intentional even without 3D.
 */
function HeroFallback() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient opacity-80 blur-2xl animate-float" />
      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient shadow-glow animate-float-slow" />
    </div>
  );
}

/**
 * The hero visual: a real WebGL scene where it's worth it, a CSS fallback elsewhere.
 */
export default function Hero3D() {
  const enable3D = useEnable3D();

  if (!enable3D) return <HeroFallback />;

  return (
    <Suspense fallback={<HeroFallback />}>
      <HeroScene />
    </Suspense>
  );
}
