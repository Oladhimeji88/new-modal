'use client';

import { useState, useEffect, useRef } from "react";
import Container from "../../imports/Container";

const HEADER_HEIGHT = 80;

export function ProductsDropdown() {
  const [visible, setVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearHideTimer = () => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  };

  const scheduleHide = () => {
    clearHideTimer();
    hideTimerRef.current = setTimeout(() => setVisible(false), 120);
  };

  useEffect(() => {
    const isProductsNavItem = (el: HTMLElement | null): boolean => {
      if (!el) return false;
      if (el.dataset.nav !== "products") return false;
      return !!el.closest('[data-name="SharedHeader"]');
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const navItem = target.closest<HTMLElement>("[data-nav]");
      if (isProductsNavItem(navItem)) {
        clearHideTimer();
        setVisible(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const navItem = target.closest<HTMLElement>("[data-nav]");
      if (isProductsNavItem(navItem)) {
        scheduleHide();
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      clearHideTimer();
    };
  }, []);

  const handleDropdownMouseEnter = () => clearHideTimer();
  const handleDropdownMouseLeave = () => scheduleHide();

  if (!visible) return null;

  return (
    <>
      <div
        className="nt-products-backdrop fixed inset-x-0 bottom-0 z-40"
        style={{ top: HEADER_HEIGHT }}
      />
      <div
        ref={dropdownRef}
        onMouseEnter={handleDropdownMouseEnter}
        onMouseLeave={handleDropdownMouseLeave}
        className="nt-products-menu fixed left-0 right-0 z-50 w-full"
        style={{ top: HEADER_HEIGHT }}
      >
        <Container />
      </div>
    </>
  );
}
