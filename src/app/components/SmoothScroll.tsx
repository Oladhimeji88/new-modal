'use client';

import { useEffect } from 'react';

// Lightweight, dependency-free smooth (inertia) scrolling for the whole site.
// - Desktop / mouse only: touch devices already scroll smoothly natively and
//   hijacking them feels worse, so we skip them.
// - Respects prefers-reduced-motion.
// - Yields to inner scrollable areas (menus, textareas, modals).
// - Uses behavior:"instant" per frame so it doesn't fight CSS scroll-behavior
//   (anchor links stay smooth via CSS; the wheel is smoothed here).
export function SmoothScroll() {
  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;

    const EASE = 0.12;
    let target = window.scrollY;
    let current = window.scrollY;
    let running = false;
    let rafId = 0;

    const maxScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const clamp = (v: number) => Math.max(0, Math.min(v, maxScroll()));

    const loop = () => {
      current += (target - current) * EASE;
      if (Math.abs(target - current) < 0.5) {
        current = target;
        window.scrollTo({ top: current, left: 0, behavior: 'instant' as ScrollBehavior });
        running = false;
        return;
      }
      window.scrollTo({ top: current, left: 0, behavior: 'instant' as ScrollBehavior });
      rafId = requestAnimationFrame(loop);
    };

    const start = () => {
      if (!running) {
        running = true;
        rafId = requestAnimationFrame(loop);
      }
    };

    // Don't hijack the wheel when the pointer is over something that can still
    // scroll in the wheel's direction (dropdowns, the mobile menu, textareas…).
    const scrollableAncestorCanScroll = (node: EventTarget | null, deltaY: number) => {
      let el = node as HTMLElement | null;
      while (el && el !== document.body && el !== document.documentElement) {
        if (el.nodeType === 1) {
          const style = getComputedStyle(el);
          const oy = style.overflowY;
          if ((oy === 'auto' || oy === 'scroll') && el.scrollHeight > el.clientHeight + 1) {
            const atTop = el.scrollTop <= 0;
            const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
            if (deltaY < 0 && !atTop) return true;
            if (deltaY > 0 && !atBottom) return true;
          }
        }
        el = el.parentElement;
      }
      return false;
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return; // pinch-zoom
      if (scrollableAncestorCanScroll(e.target, e.deltaY)) return;
      e.preventDefault();
      const delta = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
      target = clamp(target + delta);
      start();
    };

    // Keep our target in sync when the page is scrolled by other means
    // (anchor jumps, scrollbar drag, keyboard) while we're idle.
    const onScroll = () => {
      if (!running) {
        target = window.scrollY;
        current = window.scrollY;
      }
    };

    const onResize = () => {
      target = clamp(target);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return null;
}
