'use client';

// Accordion for the pricing page "Common Questions" section. Replaces the
// static Figma rows (questions only, no answers, no toggle) with real content.
const ITEMS: { q: string; a: string }[] = [
  {
    q: 'What is a virtual phone system?',
    a: 'A virtual phone system replaces SIM cards and desk phones with software. Your business numbers live in the cloud and ring on the NativeTalk app across phones and computers, so your team can call and be reached anywhere with an internet connection.',
  },
  {
    q: 'How does billing work for NativeTalk?',
    a: 'Self-serve plans (Business App and CRM) are billed per user, and you can choose Monthly, Quarterly, Biannual, or Annual terms — with discounts on the longer terms. VoIP services are billed monthly and arranged directly with our sales team.',
  },
  {
    q: 'Can I cancel my subscription at any time?',
    a: 'Yes. Self-serve subscriptions can be cancelled anytime from your account, and your plan stays active until the end of the current billing term. Enterprise agreements follow the terms set with your account manager.',
  },
  {
    q: 'Do I need a physical SIM to use NativeTalk?',
    a: 'No. NativeTalk runs entirely in software — your numbers live in the cloud and ring on the app, with no SIM card and no extra hardware required for the core calling and messaging experience.',
  },
  {
    q: 'What are the rates for international calls?',
    a: 'You can make local and international calls at low rates over the internet, without expensive SIM plans. Exact per-destination rates vary by country — contact our team for a current rate breakdown for the markets you call most.',
  },
];

export function PricingFaq() {
  return (
    <div className="nt-faq-list nt-home-faq" data-name="pricing-faq">
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
