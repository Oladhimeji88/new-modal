'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Jump to top instantly on navigation. Without "instant" the global
    // `scroll-behavior: smooth` would animate a scroll-to-top on every page
    // change, which reads as janky. Wheel + anchor scrolling stay smooth.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
}
