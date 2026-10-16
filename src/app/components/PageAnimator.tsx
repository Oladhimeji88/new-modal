'use client';

import { useEffect } from "react";

const REVEAL_SELECTOR = [
  '[data-name="Section"] [class*="text-[66"]',
  '[data-name="Section"] [class*="text-[76"]',
  '[data-name="Section"] [class*="text-[80"]',
  '[data-name="Section"] [class*="text-[64"]',
  '[data-name="Section"] [class*="text-[56"]',
  '[data-name="Section"] [class*="text-[54"]',
  '[data-name="Section"] [class*="text-[48"]',
  '[data-name="Section"] [class*="text-[40"]',
  '[data-name="Section"] [class*="text-[32"]',
  '[data-name="Section"] [class*="text-[24"]',
  '[data-name="Section"] [class*="text-[20"]',
  '[data-name="Section"] [class*="text-[18"]',
  '[data-name="Section"] [class*="text-[16"]',
  '[data-name="Section"] [data-name="Link"]',
  '[data-name="Section"] [data-name="Button"]',
].join(",");

const IMAGE_SELECTOR = [
  '[data-name="Section"] img',
  '[data-name="Section"] [data-name*="image" i]',
  '[data-name="Section"] [data-name*="Picture" i]',
].join(",");

export function PageAnimator() {
  useEffect(() => {
    const items = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)
    ).filter((el) => {
      if (el.closest('[data-name="SharedHeader"], [data-name="Footer"]')) return false;
      const rect = el.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    });

    const images = Array.from(
      document.querySelectorAll<HTMLElement>(IMAGE_SELECTOR)
    ).filter((el) => {
      if (el.closest('[data-name="SharedHeader"], [data-name="Footer"]')) return false;
      const rect = el.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    });

    items.forEach((el, index) => {
      if (el.dataset.ntReveal) return;
      el.dataset.ntReveal = "1";
      el.classList.add("nt-reveal");
      el.style.animationDelay = `${Math.min(index % 8, 7) * 55}ms`;
    });

    images.forEach((el, index) => {
      if (el.dataset.ntReveal) return;
      el.dataset.ntReveal = "1";
      el.classList.add("nt-reveal-image");
      el.style.animationDelay = `${Math.min(index % 6, 5) * 70}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("nt-in-view");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -72px 0px" }
    );

    [...items, ...images].forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
