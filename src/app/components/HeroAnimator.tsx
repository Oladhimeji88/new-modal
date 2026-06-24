'use client';

import { useEffect } from "react";

// Each hero column is a vertical stack of absolutely-positioned images inside
// the 752px "Mask Group". To scroll them seamlessly we measure each column's
// real content height at runtime (rather than hard-coding it), clone the stack
// above and below, and translate by exactly that height — so the loop repeats
// with no visible jump. Speeds differ slightly per column for a soft parallax.
const COLUMNS = [
  { direction: "up", speed: 24 }, // px per second
  { direction: "down", speed: 30 },
  { direction: "up", speed: 27 },
] as const;

const MARKER = "data-hero-animated";

export function HeroAnimator() {
  useEffect(() => {
    const styleEl = document.createElement("style");
    document.head.appendChild(styleEl);

    // Two frames: one for layout to settle, one to measure final heights.
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        const track = document.querySelector(
          '[data-name="Mask Group"] > [data-name="Container"]'
        ) as HTMLElement | null;
        if (!track) return;

        const cols = Array.from(
          track.querySelectorAll(':scope > [data-name="Container"]')
        ) as HTMLElement[];
        if (cols.length < 3) return;

        let keyframes = "";

        cols.slice(0, 3).forEach((colEl, i) => {
          if (colEl.hasAttribute(MARKER)) return;

          const originals = Array.from(colEl.children) as HTMLElement[];
          if (!originals.length) return;

          // Measure the real content extent from the actual <img> rectangles.
          // Some columns wrap images in an inset-0 / overflow-clip box, so the
          // direct children report a clipped height — the images themselves
          // give the true top/bottom of the stack.
          const colRect = colEl.getBoundingClientRect();
          const imgs = Array.from(colEl.querySelectorAll("img"));
          let minTop = Infinity;
          let maxBottom = -Infinity;
          imgs.forEach((img) => {
            const r = img.getBoundingClientRect();
            const top = r.top - colRect.top;
            const bottom = r.bottom - colRect.top;
            if (top < minTop) minTop = top;
            if (bottom > maxBottom) maxBottom = bottom;
          });
          // Fall back to the column box if there were no measurable images.
          if (!Number.isFinite(minTop) || !Number.isFinite(maxBottom)) {
            minTop = 0;
            maxBottom = colEl.offsetHeight;
          }

          const period = Math.round(maxBottom - minTop);
          if (!Number.isFinite(period) || period <= 0) return;

          colEl.setAttribute(MARKER, "1");

          // Stack identical copies above and below so the viewport is always
          // filled while the column drifts a full period in either direction.
          // Each wrapper is a full period tall so inset-0 image boxes inside a
          // column render fully in the copies (instead of collapsing to zero
          // height, which left blank gaps between repeats).
          [-3, -2, -1, 1, 2, 3].forEach((mult) => {
            const wrapper = document.createElement("div");
            wrapper.setAttribute("data-hero-clone", "1");
            wrapper.style.cssText = `position:absolute;top:${mult * period}px;left:0;right:0;height:${period}px;`;
            originals.forEach((child) => wrapper.appendChild(child.cloneNode(true)));
            colEl.appendChild(wrapper);
          });

          // Extend the original column's inset-0 (full-height) image box to a
          // full period so its images line up with the copies and the strip
          // stays continuous across the loop seam. The Mask Group still clips
          // the visible area, so this only affects the off-screen tiling.
          originals.forEach((el) => {
            if (typeof el.className === "string" && el.className.includes("inset-0")) {
              el.style.height = `${period}px`;
              el.style.bottom = "auto";
            }
          });

          const { direction, speed } = COLUMNS[i];
          const name = `heroDrift${i}_${period}`;
          const duration = Math.max(16, Math.round(period / speed));

          keyframes +=
            direction === "up"
              ? `@keyframes ${name}{from{transform:translate3d(0,0,0)}to{transform:translate3d(0,${-period}px,0)}}`
              : `@keyframes ${name}{from{transform:translate3d(0,${-period}px,0)}to{transform:translate3d(0,0,0)}}`;

          colEl.style.willChange = "transform";
          colEl.style.animation = `${name} ${duration}s linear infinite`;
        });

        styleEl.textContent = keyframes;
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      styleEl.remove();

      const track = document.querySelector(
        '[data-name="Mask Group"] > [data-name="Container"]'
      );
      track?.querySelectorAll(`[${MARKER}]`).forEach((colEl) => {
        const el = colEl as HTMLElement;
        el.removeAttribute(MARKER);
        el.style.animation = "";
        el.style.willChange = "";
        el.querySelectorAll('[data-hero-clone="1"]').forEach((clone) => clone.remove());
      });
    };
  }, []);

  return null;
}
