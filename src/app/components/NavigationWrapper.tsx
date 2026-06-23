'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ProductsDropdown } from './ProductsDropdown';
import { SharedHeader } from './SharedHeader';
import { SharedFooter } from './SharedFooter';
import { GlobalUiEffects } from './GlobalUiEffects';

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
      const text = (
        navItem?.dataset.nav ??
        (isProductMenuLink ? productMenuItem?.textContent : target.textContent) ??
        ""
      ).trim().toLowerCase();

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
          router.push('/personal');
        } else if (text === 'crm' || text === 'nativetalk crm') {
          router.push('/enterprise');
        } else if (text === 'voip' || text === 'nativetalk voip') {
          router.push('/voip');
        } else if (text === 'enterprise') {
          router.push('/enterprise');
        } else if (text === 'terms') {
          router.push('/terms');
        } else if (text === 'privacy') {
          router.push('/privacy');
        } else if (text === 'faq' || text === 'faqs') {
          router.push('/#faq');
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
      <div className="nt-page-content flex-1">
        {children}
      </div>
      <SharedFooter />
    </div>
  );
}
