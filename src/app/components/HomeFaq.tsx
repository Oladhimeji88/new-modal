'use client';

// Accordion for the homepage FAQ section. Replaces the static Figma question
// list (which had no answers and no toggle) with real, expandable content.
const ITEMS: { q: string; a: string }[] = [
  {
    q: 'What is a virtual phone system?',
    a: 'A virtual phone system replaces traditional desk phones and SIM cards with software. Your business numbers live in the cloud and ring on the NativeTalk app across phones and computers, so your team can make and receive calls anywhere with an internet connection.',
  },
  {
    q: 'How does NativeTalk work?',
    a: 'You get one or more virtual business numbers, then route calls and messages to the right teammates through the NativeTalk app. Calls, WhatsApp, Instagram, Facebook, and website chat all flow into one shared workspace, with logs, recordings, and routing rules handled for you.',
  },
  {
    q: 'How does NativeTalk help businesses?',
    a: 'NativeTalk centralizes every customer conversation so nothing gets lost between channels. Teams respond faster, managers get visibility into calls and messages, and customers experience one coordinated business instead of scattered inboxes — with AI call summaries turning conversations into searchable records.',
  },
  {
    q: 'Can I get international numbers on NativeTalk?',
    a: 'NativeTalk supports virtual numbers across multiple African markets and is expanding coverage, and you can make local and international calls at low rates over the internet. For specific country availability, reach out and our team will confirm what is available for your use case.',
  },
  {
    q: 'How much does it cost to use NativeTalk?',
    a: 'Pricing depends on the product and plan. The Business App starts at ₦2,500 per user per month, with Standard and Enterprise options for larger teams; CRM and VoIP have their own pricing. Visit the pricing page for a full, side-by-side comparison.',
  },
];

export function HomeFaq() {
  return (
    <div className="nt-faq-list nt-home-faq" data-name="home-faq">
      {ITEMS.map((item) => (
        <details className="nt-faq-item" key={item.q}>
          <summary className="nt-faq-summary">
            {item.q}
            <span className="nt-faq-icon" aria-hidden>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1V13M1 7H13"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </summary>
          <p className="nt-faq-answer">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
