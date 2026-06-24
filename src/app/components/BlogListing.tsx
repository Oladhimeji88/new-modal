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

function BlogCard({
  post,
  featured,
  onOpen,
}: {
  post: BlogPost;
  featured?: boolean;
  onOpen: (slug: string) => void;
}) {
  return (
    <article
      className={`nt-blog-card ${featured ? 'is-featured' : ''}`}
      role="link"
      tabIndex={0}
      onClick={() => onOpen(post.slug)}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(post.slug)}
    >
      <div className="nt-blog-card-media">
        {post.image ? (
          <img src={post.image} alt={post.title} />
        ) : (
          <span className="nt-blog-card-fallback">{post.category}</span>
        )}
      </div>
      <div className="nt-blog-card-overlay">
        <span className="nt-blog-card-cat">{post.category}</span>
        <h3 className="nt-blog-card-title">{post.title}</h3>
        {featured ? <p className="nt-blog-card-excerpt">{post.excerpt}</p> : null}
        <span className="nt-blog-card-meta">
          {post.author} · {formatDate(post.date)} · {readingTime(post.body)} min read
        </span>
      </div>
    </article>
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
          <section className="nt-blog-grid" aria-label="All articles">
            {posts.map((post, i) => (
              <BlogCard key={post.id} post={post} featured={i === 0} onOpen={open} />
            ))}
          </section>
        )}
      </main>
    </NavigationWrapper>
  );
}
