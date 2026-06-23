'use client';

import { useEffect } from "react";

// Each column's scroll distance (px) = max_image_bottom - min_image_top
// Col 1: images from top=-265 to bottom≈996  → N=1261
// Col 2: images from top=-209 to bottom≈777  → N=986
// Col 3: images from top=-28  to bottom≈950  → N=979
const COLS = [
  { N: 1261, direction: "up",   duration: 25 },
  { N: 986,  direction: "down", duration: 25 },
  { N: 979,  direction: "up",   duration: 28 },
] as const;

const MARKER = "data-hero-animated";

export function HeroAnimator() {
  useEffect(() => {
    // Inject keyframes
    const styleEl = document.createElement("style");
    styleEl.textContent = COLS.map(({ N, direction }) => {
      const name = `heroScroll${direction === "up" ? "Up" : "Down"}${N}`;
      return direction === "up"
        ? `@keyframes ${name} { from { transform: translateY(0); } to { transform: translateY(-${N}px); } }`
        : `@keyframes ${name} { from { transform: translateY(-${N}px); } to { transform: translateY(0); } }`;
    }).join("\n");
    document.head.appendChild(styleEl);

    // Wait one frame so Figma components have painted
    const raf = requestAnimationFrame(() => {
      const container4 = document.querySelector(
        '[data-name="Mask Group"] > [data-name="Container"]'
      ) as HTMLElement | null;
      if (!container4) return;

      const cols = Array.from(
        container4.querySelectorAll(':scope > [data-name="Container"]')
      ) as HTMLElement[];
      if (cols.length < 3) return;

      cols.slice(0, 3).forEach((colEl, i) => {
        // Guard against double-init on hot reload
        if (colEl.hasAttribute(MARKER)) return;
        colEl.setAttribute(MARKER, "1");

        const { N, direction, duration } = COLS[i];

        const originals = Array.from(colEl.children);
        const fillCount = Math.max(originals.length, 6);
        const fillItems = Array.from({ length: fillCount }, (_, index) =>
          originals[index % originals.length]
        );

        [-N * 2, -N, N, N * 2, N * 3].forEach((offset) => {
          const offsetWrapper = document.createElement("div");
          offsetWrapper.setAttribute("data-hero-clone", "1");
          offsetWrapper.style.cssText = `position:absolute;top:${offset}px;left:0;right:0;`;

          fillItems.forEach((child) => {
            offsetWrapper.appendChild(child.cloneNode(true));
          });
          colEl.appendChild(offsetWrapper);
        });

        // Apply the animation
        const animName = `heroScroll${direction === "up" ? "Up" : "Down"}${N}`;
        colEl.style.animation = `${animName} ${duration}s linear infinite`;
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      styleEl.remove();
      // Remove clones and reset animation on unmount
      const container4 = document.querySelector(
        '[data-name="Mask Group"] > [data-name="Container"]'
      );
      container4?.querySelectorAll(`[${MARKER}]`).forEach((colEl) => {
        const el = colEl as HTMLElement;
        el.removeAttribute(MARKER);
        el.style.animation = "";
        el.querySelectorAll('[data-hero-clone="1"]').forEach((clone) => clone.remove());
      });
    };
  }, []);

  return null;
}
