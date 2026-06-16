import { useEffect, useState } from 'react';

/** True when the user has asked the OS to reduce motion. */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return reduced;
}

/** True on coarse-pointer / narrow screens — used to skip heavy WebGL on phones. */
export function useIsMobile(breakpoint = 768): boolean {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [breakpoint]);

  return mobile;
}

/**
 * Decide whether the expensive 3D scene should render.
 * Disabled for reduced-motion users and on mobile, where it costs more than it gives.
 */
export function useEnable3D(): boolean {
  const reduced = usePrefersReducedMotion();
  const mobile = useIsMobile();
  return !reduced && !mobile;
}
