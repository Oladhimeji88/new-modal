'use client';

import { NavigationWrapper } from './NavigationWrapper';
import { ScrollToTop } from './ScrollToTop';

type QA = { q: string; a: string };
type Group = { title: string; items: QA[] };

const GROUPS: Group[] = [
  {
    title: 'Getting started',
    items: [
      {
        q: 'What is a virtual phone system?',
        a: 'A virtual phone system replaces traditional desk phones and SIM cards with software. Your business numbers live in the cloud and ring on the NativeTalk app across phones and computers, so your team can make and receive calls anywhere with an internet connection.',
      },
      {
        q: 'How does NativeTalk work?',
        a: 'You get one or more virtual business numbers, then route calls and messages to the right teammates through the NativeTalk app. Calls, WhatsApp, Instagram, Facebook, and website chat all flow into one shared workspace, with logs, recordings, and routing rules handled for you.',
      },
      {
        q: 'Do I need a SIM card or special hardware?',
        a: 'No. NativeTalk runs entirely in software on devices you already own. There is no SIM card to buy and no equipment to install for the core calling and messaging experience.',
      },
    ],
  },
  {
    title: 'For your business',
    items: [
      {
        q: 'How does NativeTalk help businesses?',
        a: 'NativeTalk centralizes every customer conversation so nothing gets lost between channels. Teams respond faster, managers get visibility into calls and messages, and customers experience one coordinated business instead of scattered inboxes. Add-ons like AI call summaries turn conversations into searchable records.',
      },
      {
        q: 'Can I get international numbers on NativeTalk?',
        a: 'NativeTalk supports virtual numbers across multiple African markets and is expanding coverage. For specific country availability and international routing, reach out to our team and we will confirm what is available for your use case.',
      },
      {
        q: 'Can my whole team use the same number?',
        a: 'Yes. A single business number can route to multiple teammates with extensions, call routing, and shared visibility, so calls reach whoever is available and every interaction is tracked.',
      },
    ],
  },
  {
    title: 'Pricing & plans',
    items: [
      {
        q: 'How much does it cost to use NativeTalk?',
        a: 'Pricing depends on the product and plan. The Business App starts at NGN 2,500 per user per month, with Standard and Enterprise options for larger teams. CRM and VoIP have their own pricing. See the pricing page for a full, side-by-side comparison.',
      },
      {
        q: 'Which billing terms are available?',
        a: 'Self-serve plans support Monthly, Quarterly, Biannual, and Annual billing, with discounts on Biannual and Annual terms. Enterprise and VoIP services are priced directly with our sales team.',
      },
      {
        q: 'What is the AI Executive Summary add-on?',
        a: 'It is a premium add-on that automatically summarizes calls, surfaces conversation insights, and powers analytics and performance reporting — giving busy teams reporting that effectively writes itself.',
      },
    ],
  },
];

function FaqItem({ q, a }: QA) {
  return (
    <details className="nt-faq-item">
      <summary className="nt-faq-summary">
        {q}
        <span className="nt-faq-icon" aria-hidden>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
      </summary>
      <p className="nt-faq-answer">{a}</p>
    </details>
  );
}

export function FaqPage() {
  return (
    <NavigationWrapper>
      <ScrollToTop />
      <main className="nt-faq-page">
        <header className="nt-faq-hero">
          <span className="nt-faq-eyebrow-pill">Help Center</span>
          <div className="nt-faq-hero-copy">
            <h1 className="nt-faq-title">
              <span className="nt-faq-title-main">Frequently asked</span>{' '}
              <span className="nt-faq-title-accent">questions</span>
            </h1>
            <p className="nt-faq-intro">
              Everything you need to know about NativeTalk — virtual numbers, business calling,
              messaging, pricing, and how it all works together.
            </p>
          </div>
        </header>

        <div className="nt-faq-body">
          {GROUPS.map((group) => (
            <section className="nt-faq-group" key={group.title}>
              <h2>{group.title}</h2>
              <div className="nt-faq-list">
                {group.items.map((item) => (
                  <FaqItem key={item.q} {...item} />
                ))}
              </div>
            </section>
          ))}

          <div className="nt-faq-cta">
            <div>
              <h3>Still have questions?</h3>
              <p>Our team is ready to help you find the right setup.</p>
            </div>
            <a href="/contact">Contact us</a>
          </div>
        </div>
      </main>
    </NavigationWrapper>
  );
}
