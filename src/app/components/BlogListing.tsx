'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { NavigationWrapper } from './NavigationWrapper';
import { ScrollToTop } from './ScrollToTop';
import {
  BLOG_EVENT,
  formatDate,
  getPosts,
  readingTime,
  type BlogPost,
} from '../lib/blogStore';

function Cover({ post, className }: { post: BlogPost; className?: string }) {
  if (post.image) {
    return (
      <div className={`nt-blog-cover ${className ?? ''}`}>
        <img src={post.image} alt={post.title} />
      </div>
    );
  }
  return (
    <div className={`nt-blog-cover nt-blog-cover-empty ${className ?? ''}`} aria-hidden>
      <span>{post.category}</span>
    </div>
  );
}

export function BlogListing() {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[] | null>(null);

  useEffect(() => {
    const load = () => setPosts(getPosts());
    load();
    window.addEventListener(BLOG_EVENT, load);
    window.addEventListener('storage', load);
    return () => {
      window.removeEventListener(BLOG_EVENT, load);
      window.removeEventListener('storage', load);
    };
  }, []);

  const open = (slug: string) => router.push(`/blog/${slug}`);

  const featured = posts?.[0];
  const rest = posts?.slice(1) ?? [];

  return (
    <NavigationWrapper>
      <ScrollToTop />
      <main className="nt-blog-page">
        <header className="nt-blog-masthead">
          <p className="nt-blog-eyebrow">The NativeTalk Blog</p>
          <h1>Ideas on communication, built for African businesses</h1>
          <p className="nt-blog-sub">
            Product thinking, practical guides, and stories on calling, messaging, and growing
            customer relationships.
          </p>
        </header>

        {posts === null ? (
          <p className="nt-blog-loading">Loading articles…</p>
        ) : posts.length === 0 ? (
          <p className="nt-blog-loading">No articles yet. Check back soon.</p>
        ) : (
          <>
            {featured && (
              <article
                className="nt-blog-featured"
                onClick={() => open(featured.slug)}
                role="link"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && open(featured.slug)}
              >
                <Cover post={featured} className="nt-blog-featured-cover" />
                <div className="nt-blog-featured-body">
                  <span className="nt-blog-tag">{featured.category}</span>
                  <h2>{featured.title}</h2>
                  <p className="nt-blog-excerpt">{featured.excerpt}</p>
                  <p className="nt-blog-meta">
                    {featured.author} · {formatDate(featured.date)} ·{' '}
                    {readingTime(featured.body)} min read
                  </p>
                </div>
              </article>
            )}

            {rest.length > 0 && (
              <section className="nt-blog-list" aria-label="All articles">
                {rest.map((post) => (
                  <article
                    key={post.id}
                    className="nt-blog-row"
                    onClick={() => open(post.slug)}
                    role="link"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && open(post.slug)}
                  >
                    <div className="nt-blog-row-text">
                      <span className="nt-blog-tag">{post.category}</span>
                      <h3>{post.title}</h3>
                      <p className="nt-blog-excerpt">{post.excerpt}</p>
                      <p className="nt-blog-meta">
                        {post.author} · {formatDate(post.date)} · {readingTime(post.body)} min read
                      </p>
                    </div>
                    <Cover post={post} className="nt-blog-row-cover" />
                  </article>
                ))}
              </section>
            )}
          </>
        )}
      </main>
    </NavigationWrapper>
  );
}
