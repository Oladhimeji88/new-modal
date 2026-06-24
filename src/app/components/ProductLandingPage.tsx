import type { ReactNode } from "react";
import { NavigationWrapper } from "./NavigationWrapper";
import { ScrollToTop } from "./ScrollToTop";

// Modern line icons cycled across the capability cards.
const PILLAR_ICONS: ReactNode[] = [
  // Phone / call
  <svg key="phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>,
  // Team / inbox
  <svg key="team" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>,
  // Routing / share
  <svg key="route" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <path d="m8.59 13.51 6.83 3.98M15.41 6.51 8.59 10.49" />
  </svg>,
  // Channels / message
  <svg key="chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
  </svg>,
  // Analytics / chart
  <svg key="chart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </svg>,
  // AI / sparkle
  <svg key="spark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3v3m0 12v3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M3 12h3m12 0h3M5.6 18.4l2.1-2.1m8.6-8.6 2.1-2.1" />
    <circle cx="12" cy="12" r="3" />
  </svg>,
];

type Plan = {
  name: string;
  price: string;
  details: string;
  cta: string;
};

type ProductLandingPageProps = {
  label: string;
  title: string;
  subtitle: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  bullets: string[];
  plans: Plan[];
  note?: string;
  gallery?: string[];
};

export function ProductLandingPage({
  label,
  title,
  subtitle,
  description,
  image,
  bullets,
  plans,
  note,
  gallery,
}: ProductLandingPageProps) {
  return (
    <NavigationWrapper>
      <ScrollToTop />
      <main className="nt-product-page">
        <section className="nt-product-hero">
          <div className="nt-product-hero-copy">
            <p className="nt-product-label">{label}</p>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{description}</p>
            <div className="nt-product-actions">
              <a href="/pricing">Get started</a>
              <a href="/contact">Talk to sales</a>
            </div>
          </div>
          <div className="nt-product-hero-media nt-reveal-image">
            <img src={image.src} alt={image.alt} />
          </div>
        </section>

        <section className="nt-product-pillars" aria-label={`${label} capabilities`}>
          {bullets.map((bullet, i) => (
            <article key={bullet}>
              <span className="nt-product-pillar-icon">{PILLAR_ICONS[i % PILLAR_ICONS.length]}</span>
              <p>{bullet}</p>
            </article>
          ))}
        </section>

        {gallery && gallery.length > 0 ? (
          <section className="nt-product-gallery" aria-label={`${label} gallery`}>
            <p className="nt-product-label">A closer look</p>
            <div className="nt-product-gallery-viewport">
              <div className="nt-product-gallery-track">
                {[...gallery, ...gallery].map((src, i) => (
                  <div className="nt-product-gallery-item" key={`${src}-${i}`}>
                    <img src={src} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="nt-product-pricing" aria-label={`${label} pricing`}>
          <div>
            <p className="nt-product-label">Pricing</p>
            <h2>Choose the right path for your team</h2>
            {note ? <p>{note}</p> : null}
          </div>
          <div className="nt-product-plans">
            {plans.map((plan) => (
              <article key={plan.name}>
                <h3>{plan.name}</h3>
                <strong>{plan.price}</strong>
                <p>{plan.details}</p>
                <a href={plan.cta.toLowerCase().includes("sales") ? "/contact" : "/pricing"}>{plan.cta}</a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </NavigationWrapper>
  );
}
