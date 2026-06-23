import { NavigationWrapper } from "./NavigationWrapper";
import { ScrollToTop } from "./ScrollToTop";

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
          {bullets.map((bullet) => (
            <article key={bullet}>
              <span />
              <p>{bullet}</p>
            </article>
          ))}
        </section>

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
