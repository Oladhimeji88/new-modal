'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { NavigationWrapper } from './NavigationWrapper';
import { ScrollToTop } from './ScrollToTop';
import {
  BLOG_EVENT,
  formatDate,
  getPost,
  getPosts,
  readingTime,
  type BlogPost,
} from '../lib/blogStore';

export function BlogPostView({ slug }: { slug: string }) {
  const router = useRouter();
  const [state, setState] = useState<{ post?: BlogPost; ready: boolean }>({ ready: false });

  useEffect(() => {
    const load = () => setState({ post: getPost(slug), ready: true });
    load();
    window.addEventListener(BLOG_EVENT, load);
    window.addEventListener('storage', load);
    return () => {
      window.removeEventListener(BLOG_EVENT, load);
      window.removeEventListener('storage', load);
    };
  }, [slug]);

  const { post, ready } = state;
  const related = post ? getPosts().filter((p) => p.id !== post.id).slice(0, 3) : [];

  return (
    <NavigationWrapper>
      <ScrollToTop />
      <main className="nt-blog-page nt-blog-article-page">
        {!ready ? (
          <p className="nt-blog-loading">Loading…</p>
        ) : !post ? (
          <div className="nt-blog-missing">
            <h1>Article not found</h1>
            <p>This article may have been moved or removed.</p>
            <button type="button" className="nt-blog-back" onClick={() => router.push('/blog')}>
              ← Back to the blog
            </button>
          </div>
        ) : (
          <article className="nt-blog-article">
            <button type="button" className="nt-blog-back" onClick={() => router.push('/blog')}>
              ← All articles
            </button>
            <span className="nt-blog-tag">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="nt-blog-article-meta">
              {post.author} · {formatDate(post.date)} · {readingTime(post.body)} min read
            </p>

            {post.image ? (
              <div className="nt-blog-article-cover">
                <img src={post.image} alt={post.title} />
              </div>
            ) : null}

            <div className="nt-blog-article-body">
              {post.body
                .split('\n')
                .map((para) => para.trim())
                .filter(Boolean)
                .map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
            </div>

            {related.length > 0 && (
              <section className="nt-blog-related" aria-label="More articles">
                <h2>More from NativeTalk</h2>
                <div className="nt-blog-related-grid">
                  {related.map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      className="nt-blog-related-card"
                      onClick={() => router.push(`/blog/${r.slug}`)}
                    >
                      <span className="nt-blog-related-media">
                        {r.image ? (
                          <img src={r.image} alt={r.title} />
                        ) : (
                          <span className="nt-blog-related-fallback">{r.category}</span>
                        )}
                      </span>
                      <span className="nt-blog-related-title">{r.title}</span>
                    </button>
                  ))}
                </div>
              </section>
            )}
          </article>
        )}
      </main>
    </NavigationWrapper>
  );
}
