'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BLOG_EVENT, formatDate, getPosts, type BlogPost } from '../lib/blogStore';

// Expanding-card gallery used in the homepage "Our Story" section. All cards
// share an equal (narrow) width by default; hovering a card smoothly animates
// it to a wider width while the others recede. Each card links to its article.
export function StoryBlog() {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const load = () => setPosts(getPosts().slice(0, 6));
    load();
    window.addEventListener(BLOG_EVENT, load);
    window.addEventListener('storage', load);
    return () => {
      window.removeEventListener(BLOG_EVENT, load);
      window.removeEventListener('storage', load);
    };
  }, []);

  if (posts.length === 0) return null;

  return (
    <div className="nt-story-gallery" data-name="story-gallery">
      {posts.map((post) => (
        <button
          key={post.id}
          type="button"
          className="nt-story-card"
          aria-label={post.title}
          onClick={() => router.push(`/blog/${post.slug}`)}
        >
          <div className="nt-story-card-media">
            {post.image ? (
              <img src={post.image} alt={post.title} />
            ) : (
              <span className="nt-story-card-fallback">{post.category}</span>
            )}
          </div>
          <div className="nt-story-card-overlay">
            <span className="nt-story-card-cat">{post.category}</span>
            <span className="nt-story-card-title">{post.title}</span>
            <span className="nt-story-card-meta">{formatDate(post.date)}</span>
          </div>
        </button>
      ))}
    </div>
  );
}
