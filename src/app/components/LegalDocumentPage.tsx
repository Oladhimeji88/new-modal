import { NavigationWrapper } from "./NavigationWrapper";
import { ScrollToTop } from "./ScrollToTop";

type LegalSection = {
  title: string;
  body: string[];
};

type LegalDocumentPageProps = {
  title: string;
  eyebrow: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalDocumentPage({
  title,
  eyebrow,
  updated,
  intro,
  sections,
}: LegalDocumentPageProps) {
  return (
    <NavigationWrapper>
      <ScrollToTop />
      <main className="nt-legal-page">
        <section className="nt-legal-hero">
          <p className="nt-legal-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="nt-legal-updated">Last updated: {updated}</p>
          <p className="nt-legal-intro">{intro}</p>
        </section>
        <section className="nt-legal-content" aria-label={title}>
          {sections.map((section) => (
            <article className="nt-legal-section" key={section.title}>
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </section>
      </main>
    </NavigationWrapper>
  );
}
