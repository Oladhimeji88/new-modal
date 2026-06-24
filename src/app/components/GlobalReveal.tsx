'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Framer-style enter animations applied across every page EXCEPT the homepage
// (which has its own purpose-built PageAnimator/HeroAnimator). Text fades up,
// media settles in with a scale + blur, and siblings stagger for rhythm.

const TARGETS = [
  // Product / legal landing pages
  '.nt-product-hero-copy > *',
  '.nt-product-hero-media',
  '.nt-product-pillars article',
  '.nt-product-pricing > div > *',
  '.nt-product-plans article',
  '.nt-legal-hero > *',
  '.nt-legal-section',
  // Blog
  '.nt-blog-masthead > *',
  '.nt-blog-featured',
  '.nt-blog-row',
  '.nt-blog-article > *',
  '.nt-blog-related-card',
  // FAQ
  '.nt-faq-hero > *',
  '.nt-faq-group',
  '.nt-faq-cta',
  // Figma-exported pages (contact / pricing / about): key text, cards, media
  '.nt-page-content [data-name="Hero"] [class*="text-["]',
  '.nt-page-content [data-name="Card"]',
  '.nt-page-content [data-name="CTA"] [class*="text-["]',
  '.nt-page-content [data-name="Form-Section"] [class*="text-["]',
  '.nt-page-content [data-name*="PricingCard"]',
  '.nt-page-content [data-name="about-us-page"] [class*="text-["]',
].join(',');

const MEDIA = '.nt-product-hero-media,.nt-blog-cover,.nt-blog-article-cover';

export function GlobalReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Home has its own animation system.
    if (pathname === '/') return;

    let observer: IntersectionObserver | null = null;
    let safety: ReturnType<typeof setTimeout> | null = null;

    const raf = requestAnimationFrame(() => {
      const all = Array.from(document.querySelectorAll<HTMLElement>(TARGETS)).filter((el) => {
        if (el.dataset.ntAnim) return false;
        if (el.closest('[data-name="SharedHeader"], [data-name="SharedFooter"], .nt-mobile-menu')) {
          return false;
        }
        const rect = el.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      });

      if (!all.length) return;

      const groupIndex = new Map<Element | null, number>();

      all.forEach((el) => {
        el.dataset.ntAnim = '1';
        const isMedia = el.tagName === 'IMG' || el.matches(MEDIA);
        el.classList.add(isMedia ? 'nt-anim-img' : 'nt-anim');

        const parent = el.parentElement;
        const idx = groupIndex.get(parent) ?? 0;
        groupIndex.set(parent, idx + 1);
        el.style.transitionDelay = `${Math.min(idx, 7) * 70}ms`;
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('nt-anim-in');
            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -64px 0px' }
      );

      all.forEach((el) => observer?.observe(el));

      // Safety net: never leave content hidden if the observer doesn't fire.
      safety = setTimeout(() => {
        all.forEach((el) => el.classList.add('nt-anim-in'));
      }, 1600);
    });

    return () => {
      cancelAnimationFrame(raf);
      if (safety) clearTimeout(safety);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
