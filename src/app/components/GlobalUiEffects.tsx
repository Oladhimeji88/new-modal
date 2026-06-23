'use client';

import { useEffect } from "react";

const COUNTER_PATTERN = /^(\d[\d,]*)(\+?)$/;

function formatNumber(value: number) {
  return Math.round(value).toLocaleString("en-US");
}

export function GlobalUiEffects() {
  useEffect(() => {
    const counters = Array.from(document.querySelectorAll<HTMLElement>("p")).filter((el) => {
      const text = el.textContent?.trim() ?? "";
      return COUNTER_PATTERN.test(text) && el.getBoundingClientRect().width > 0;
    });

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          if (el.dataset.ntCounted) return;
          el.dataset.ntCounted = "1";

          const text = el.textContent?.trim() ?? "";
          const match = text.match(COUNTER_PATTERN);
          if (!match) return;

          const target = Number(match[1].replace(/,/g, ""));
          const suffix = match[2] ?? "";
          const duration = target >= 1000000 ? 1800 : 1300;
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = `${formatNumber(target * eased)}${suffix}`;
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          counterObserver.unobserve(el);
        });
      },
      { threshold: 0.45 }
    );

    counters.forEach((el) => counterObserver.observe(el));

    const logoRows = Array.from(
      document.querySelectorAll<HTMLElement>(".nt-trusted-logo-track")
    );

    logoRows.forEach((row) => {
      if (row.dataset.ntCloned) return;
      row.dataset.ntCloned = "1";
      const children = Array.from(row.children) as HTMLElement[];
      children.forEach((child) => {
        const clone = child.cloneNode(true) as HTMLElement;
        clone.setAttribute("aria-hidden", "true");
        clone.classList.add("nt-logo-clone");
        row.appendChild(clone);
      });
    });

    return () => {
      counterObserver.disconnect();
    };
  }, []);

  return null;
}
