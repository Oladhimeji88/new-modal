'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import svgPaths from "../../imports/ContactUsPage/svg-q7igkv02dk";

function LogoGroup1() {
  return (
    <div className="absolute inset-[22.68%_55.19%_28.51%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.2499 18.1857">
        <g id="Group">
          <path d={svgPaths.p1f075af0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p16e7b000} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3a471370} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2566100} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p7f66880} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p164d0190} fill="var(--fill-0, white)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function LogoGroup2() {
  return (
    <div className="absolute inset-[0_0_0_48.46%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.0067 37.2611">
        <g id="Group">
          <path d={svgPaths.p1a9441b0} fill="var(--fill-0, #3EBF0F)" id="Vector" />
          <path d={svgPaths.p40cf100} fill="var(--fill-0, #3EBF0F)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[37.261px] relative shrink-0 w-[130px]" data-name="Component 3">
      <div className="absolute contents inset-0">
        <div className="absolute bg-white inset-[11.02%_8.12%_19.7%_57.55%]" />
        <div className="absolute contents inset-[22.68%_55.19%_28.51%_0]" data-name="Group">
          <LogoGroup1 />
        </div>
        <LogoGroup2 />
      </div>
    </div>
  );
}

function NavLinks() {
  const links = ["Products", "About us", "Blog", "Contact us", "Pricing", "FAQ"];

  return (
    <div
      className="[word-break:break-word] content-stretch flex font-['Outfit:Medium',sans-serif] gap-[32px] items-start leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap"
      data-name="Links"
    >
      {links.map((link) => (
        <button
          className="opacity-90 relative shrink-0 cursor-pointer bg-transparent border-0 p-0 text-inherit font-inherit"
          data-nav={link.toLowerCase()}
          key={link}
          type="button"
        >
          {link === "Products" ? (
            <span className="nt-products-nav-label inline-flex items-center gap-[6px]">
              {link}
              <svg aria-hidden="true" className="nt-products-nav-arrow" fill="none" height="12" viewBox="0 0 12 12" width="12">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
              </svg>
            </span>
          ) : (
            link
          )}
        </button>
      ))}
    </div>
  );
}

function DownloadButton() {
  return (
    <a
      className="nt-header-cta bg-[#3ebf0f] content-stretch flex items-center px-[24px] py-[14px] relative rounded-[999px] shrink-0 cursor-pointer no-underline"
      data-name="Button"
      href="/personal"
    >
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">
        Download App
      </p>
    </a>
  );
}

export function SharedHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const solid = pathname !== "/" || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`nt-shared-header ${solid ? "is-scrolled" : ""} content-stretch flex h-[80px] items-center justify-between px-[112px] relative shrink-0 w-full z-40`}
      data-name="SharedHeader"
    >
      <Logo />
      <NavLinks />
      <DownloadButton />
    </div>
  );
}
