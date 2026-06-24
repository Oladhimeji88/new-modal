'use client';

// Lightweight, browser-persisted blog store.
// Posts are managed from /nativeblogtrack and rendered on /blog and
// /blog/[slug]. Persistence is localStorage so content survives reloads in the
// same browser without requiring a backend or database.

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string; // newline-separated paragraphs
  image: string; // data URL or public path; empty -> branded gradient cover
  author: string;
  category: string;
  date: string; // ISO date string (yyyy-mm-dd)
};

const STORAGE_KEY = 'nativetalk_blog_posts_v1';
export const BLOG_EVENT = 'nativetalk-blog-updated';

const SEED: BlogPost[] = [
  {
    id: 'seed-omnichannel',
    slug: 'why-omnichannel-communication-wins-in-africa',
    title: 'Why omnichannel communication is winning across Africa',
    excerpt:
      'Customers no longer pick one channel. They call, they message on WhatsApp, they DM on Instagram — and they expect the same business to remember them everywhere.',
    body: [
      'Across Africa, the businesses growing fastest are the ones that meet customers wherever the conversation starts. A customer might call to ask about pricing, follow up on WhatsApp, and confirm an order through Instagram — all in the same afternoon.',
      'When those conversations live in separate apps and separate phones, context is lost. The teammate who answers the WhatsApp message has no idea the customer already called twice. That gap is where trust quietly erodes.',
      'An omnichannel platform fixes this by putting every conversation — calls, WhatsApp, Instagram, Facebook, website chat — into one shared workspace. Your team sees the full history, picks up where the last person left off, and responds like one coordinated business instead of five disconnected inboxes.',
      'The result is faster response times, fewer dropped leads, and a customer experience that feels personal even as you scale.',
    ].join('\n'),
    image: '/product/business-app.png',
    author: 'NativeTalk Team',
    category: 'Product',
    date: '2026-06-10',
  },
  {
    id: 'seed-virtual-numbers',
    slug: 'virtual-numbers-explained',
    title: 'Virtual numbers, explained: business calling without a SIM',
    excerpt:
      'A virtual number gives you a professional business line that rings on the app you already use — no extra SIM, no extra phone, no missed calls.',
    body: [
      'A virtual phone number is a real, callable number that is not tied to a physical SIM card. Instead of plugging a card into a device, the number lives in the cloud and routes calls to the NativeTalk app on any phone or computer.',
      'For a business, that means you can separate work calls from personal ones, hand the same number to several teammates, and keep working even when someone is out of the office. Calls route to whoever is available.',
      'Virtual numbers also unlock features a normal SIM cannot: call recording, routing rules, extensions, masking, and a clean log of every interaction. You get the reliability of a traditional phone line with the flexibility of software.',
    ].join('\n'),
    image: '/product/voip.png',
    author: 'NativeTalk Team',
    category: 'Guides',
    date: '2026-05-22',
  },
  {
    id: 'seed-ai-summaries',
    slug: 'ai-call-summaries-for-busy-teams',
    title: 'How AI call summaries give busy teams their time back',
    excerpt:
      'Nobody has time to re-listen to every call. AI summaries turn each conversation into a short, searchable record your whole team can act on.',
    body: [
      'Every call carries useful information — a commitment made, a complaint raised, a next step agreed. But that information is trapped in audio that nobody has time to revisit.',
      'AI call summaries solve this by automatically turning each conversation into a concise written record: what was discussed, what was decided, and what happens next. Managers get visibility without sitting in on calls, and teammates get a shared memory they can search.',
      'For growing businesses, this is the difference between knowing what is happening across the team and guessing. It is reporting that writes itself.',
    ].join('\n'),
    image: '/product/crm.png',
    author: 'NativeTalk Team',
    category: 'AI',
    date: '2026-05-03',
  },
];

function read(): BlogPost[] {
  if (typeof window === 'undefined') return SEED;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED));
      return SEED;
    }
    const parsed = JSON.parse(raw) as BlogPost[];
    if (!Array.isArray(parsed)) return SEED;
    return parsed;
  } catch {
    return SEED;
  }
}

function write(posts: BlogPost[]) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  window.dispatchEvent(new CustomEvent(BLOG_EVENT));
}

export function getPosts(): BlogPost[] {
  return read().slice().sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): BlogPost | undefined {
  return read().find((p) => p.slug === slug);
}

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80);
}

function uniqueSlug(base: string, ignoreId?: string): string {
  const posts = read();
  let slug = base || 'post';
  let n = 2;
  while (posts.some((p) => p.slug === slug && p.id !== ignoreId)) {
    slug = `${base}-${n++}`;
  }
  return slug;
}

export function upsertPost(input: Partial<BlogPost> & { title: string }): BlogPost {
  const posts = read();
  const now = new Date();
  const today = now.toISOString().slice(0, 10);

  if (input.id) {
    const idx = posts.findIndex((p) => p.id === input.id);
    if (idx !== -1) {
      const existing = posts[idx];
      const base = slugify(input.title);
      const updated: BlogPost = {
        ...existing,
        ...input,
        slug: input.slug || uniqueSlug(base, existing.id),
      };
      posts[idx] = updated;
      write(posts);
      return updated;
    }
  }

  const base = slugify(input.title);
  const created: BlogPost = {
    id: `post-${Date.now().toString(36)}-${Math.floor(performance.now())}`,
    slug: uniqueSlug(base),
    title: input.title,
    excerpt: input.excerpt ?? '',
    body: input.body ?? '',
    image: input.image ?? '',
    author: input.author || 'NativeTalk Team',
    category: input.category || 'General',
    date: input.date || today,
  };
  write([created, ...posts]);
  return created;
}

export function deletePost(id: string) {
  write(read().filter((p) => p.id !== id));
}

export function readingTime(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
