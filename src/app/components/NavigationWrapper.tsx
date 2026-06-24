'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ProductsDropdown } from './ProductsDropdown';
import { SharedHeader } from './SharedHeader';
import { SharedFooter } from './SharedFooter';
import { GlobalUiEffects } from './GlobalUiEffects';
import { GlobalReveal } from './GlobalReveal';

interface NavigationWrapperProps {
  children: React.ReactNode;
}

export function NavigationWrapper({ children }: NavigationWrapperProps) {
  const router = useRouter();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const navItem = target.closest<HTMLElement>("[data-nav]");
      const productMenuItem = target.closest<HTMLElement>('[data-name="Link"]');
      const isProductMenuLink = !!productMenuItem?.closest(".nt-products-menu");

      const rawText = (
        navItem?.dataset.nav ??
        (isProductMenuLink ? productMenuItem?.textContent : target.textContent) ??
        ""
      ).trim().toLowerCase();

      // Product dropdown cards carry a long concatenated label
      // (e.g. "nativetalkbusinessnativetalk business"). Resolve the intended
      // product by keyword so each card links to its page.
      const resolveProduct = (value: string): string | null => {
        if (value.includes("voip")) return "voip";
        if (value.includes("crm")) return "crm";
        if (value.includes("enterprise")) return "enterprise";
        if (value.includes("business")) return "business";
        if (value.includes("personal")) return "personal";
        return null;
      };

      const text = isProductMenuLink
        ? resolveProduct(rawText) ?? rawText
        : rawText;

      const parentParagraph = target.closest('p');
      const hasNavParent = (
        navItem?.closest('[data-name="SharedHeader"]') ||
        parentParagraph?.closest('[data-name="SharedHeader"]') ||
        parentParagraph?.closest('[data-name="SharedFooter"]') ||
        productMenuItem?.closest(".nt-products-menu")
      );

      const isNavText = text === 'about us' ||
                        text === 'about' ||
                        text === 'contact' ||
                        text === 'contact us' ||
                        text === 'pricing' ||
                        text === 'products' ||
                        text === 'personal' ||
                        text === 'business' ||
                        text === 'nativetalk business' ||
                        text === 'crm' ||
                        text === 'nativetalk crm' ||
                        text === 'voip' ||
                        text === 'nativetalk voip' ||
                        text === 'enterprise' ||
                        text === 'blog' ||
                        text === 'faq' ||
                        text === 'faqs' ||
                        text === 'terms' ||
                        text === 'privacy';

      const isNavLink = (!!hasNavParent && isNavText) || isProductMenuLink;

      const isLogo = target.closest('[data-name="Component 3"]') ||
                     target.closest('[data-name="NativeTalk"]');

      if (isNavLink || isLogo) {
        e.preventDefault();
        e.stopPropagation();

        if (isLogo) {
          router.push('/');
        } else if (text === 'about us' || text === 'about') {
          router.push('/about');
        } else if (text === 'contact' || text === 'contact us') {
          router.push('/contact');
        } else if (text === 'pricing') {
          router.push('/pricing');
        } else if (text === 'personal') {
          router.push('/personal');
        } else if (text === 'business' || text === 'nativetalk business') {
          router.push('/business-app');
        } else if (text === 'crm' || text === 'nativetalk crm') {
          router.push('/crm');
        } else if (text === 'voip' || text === 'nativetalk voip') {
          router.push('/voip');
        } else if (text === 'enterprise') {
          router.push('/enterprise');
        } else if (text === 'terms') {
          router.push('/terms');
        } else if (text === 'privacy') {
          router.push('/privacy');
        } else if (text === 'faq' || text === 'faqs') {
          router.push('/faq');
        } else if (text === 'blog') {
          router.push('/blog');
        } else {
          router.push('/');
        }
      }
    };

    const style = document.createElement('style');
    style.textContent = `
      /* Hide per-page headers */
      [data-name="Navbar"],
      [data-name="Header"],
      [data-name="about-us-page"] > div:first-child,
      [data-name="1440w default"] > [data-name="Header"] {
        display: none !important;
      }

      /* Hide per-page footers */
      [data-name="Footer"] {
        display: none !important;
      }

      /* Shared header interactivity */
      [data-name="SharedHeader"] [data-name="Links"] p,
      [data-name="SharedHeader"] [data-name="Button"],
      [data-name="Component 3"],
      [data-name="NativeTalk"] {
        cursor: pointer !important;
      }
      [data-name="SharedHeader"] [data-name="Links"] p {
        transition: opacity 0.2s ease;
      }
      [data-name="SharedHeader"] [data-name="Links"] p:hover {
        opacity: 1 !important;
      }
    `;
    document.head.appendChild(style);

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      if (style.parentNode) style.parentNode.removeChild(style);
    };
  }, [router]);

  return (
    <div className="nt-site-shell relative flex flex-col min-h-screen">
      <SharedHeader />
      <ProductsDropdown />
      <GlobalUiEffects />
      <GlobalReveal />
      <div className="nt-page-content flex-1">
        {children}
      </div>
      <SharedFooter />
    </div>
  );
}
