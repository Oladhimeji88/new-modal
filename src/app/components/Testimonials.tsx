'use client';

// Replaces the Figma testimonial marquee. Text-only cards (no avatars), an
// expanded set of testimonials, and two rows scrolling in opposite directions
// with a seamless CSS loop (each row's content is duplicated and translated
// -50%). Hovering pauses the motion.

type Testimonial = { quote: string; name: string; role: string };

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'NativeTalk helped us sound like one team across Lagos, Abuja, and Port Harcourt. Customers reach the right desk faster, and our managers can finally see call performance without chasing WhatsApp updates.',
    name: 'Tunde Adeyemi',
    role: 'Founder, Lekki Retail Hub',
  },
  {
    quote:
      'We set up a full call centre in a day. Routing, recordings, and reports mean nothing slips through, even on our busiest delivery weeks.',
    name: 'Amara Okeke',
    role: 'Operations Lead, Kano Logistics',
  },
  {
    quote:
      'Our support team handles three times the call volume without extra phones. The shared inbox keeps every conversation in one place.',
    name: 'Chidi Nwosu',
    role: 'CEO, PayQuick',
  },
  {
    quote:
      'Patients used to get lost between lines. Now every call is logged and followed up — our no-show rate dropped noticeably.',
    name: 'Fatima Bello',
    role: 'Customer Success, Abuja Clinics',
  },
  {
    quote:
      'Virtual numbers let my reps work from anywhere and still look professional. No SIM swapping, no missed leads.',
    name: 'Emeka Obi',
    role: 'Sales Director, Onitsha Traders',
  },
  {
    quote:
      'Instagram, WhatsApp, and calls on one screen changed everything. We reply in minutes instead of hours.',
    name: 'Zainab Yusuf',
    role: 'Founder, StyleHub NG',
  },
  {
    quote:
      'Call masking keeps our riders and customers numbers private. It built trust with our customers fast.',
    name: 'Bola Adesanya',
    role: 'Manager, Ibadan Foods',
  },
  {
    quote:
      'The AI call summaries save my team hours every week. I see what is happening without sitting in on calls.',
    name: 'Ifeoma Eze',
    role: 'Director, GreenMart',
  },
  {
    quote:
      'Setup was painless and the rates beat our old PBX. We scaled to five branches without new hardware.',
    name: 'Samuel Johnson',
    role: 'COO, FastCredit',
  },
  {
    quote:
      'Customers feel heard because nobody repeats themselves. Every agent sees the full conversation history.',
    name: 'Ngozi Okafor',
    role: 'Founder, Bloom Beauty',
  },
  {
    quote:
      'Reliability is the difference. Calls connect, quality is clear, and support actually answers when we need them.',
    name: 'Yusuf Ibrahim',
    role: 'Lead, Kaduna Telecom',
  },
  {
    quote:
      'I run my whole shop from my phone now. One number, every channel, zero stress.',
    name: 'Grace Etim',
    role: 'Owner, Calabar Crafts',
  },
];

function Card({ t }: { t: Testimonial }) {
  return (
    <div className="nt-tm-card">
      <p className="nt-tm-quote">{t.quote}</p>
      <div className="nt-tm-person">
        <span className="nt-tm-name">{t.name}</span>
        <span className="nt-tm-role">{t.role}</span>
      </div>
    </div>
  );
}

export function Testimonials() {
  const mid = Math.ceil(TESTIMONIALS.length / 2);
  const rowA = TESTIMONIALS.slice(0, mid);
  const rowB = TESTIMONIALS.slice(mid);

  return (
    <div className="nt-tm" data-name="testimonials">
      <div className="nt-tm-row nt-tm-row-a">
        {[...rowA, ...rowA].map((t, i) => (
          <Card key={`a-${i}`} t={t} />
        ))}
      </div>
      <div className="nt-tm-row nt-tm-row-b">
        {[...rowB, ...rowB].map((t, i) => (
          <Card key={`b-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}
