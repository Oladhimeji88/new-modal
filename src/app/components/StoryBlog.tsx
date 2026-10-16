'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BLOG_EVENT, getPosts, type BlogPost } from '../lib/blogStore';

// Homepage "Our Story" blog showcase: three recent posts — one wide lead tile
// and two smaller tiles — each with the image on top and a serif-italic title
// plus a muted category label below. Cards link to their article.
export function StoryBlog() {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const load = () => setPosts(getPosts().slice(0, 3));
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
    <div className="nt-story-grid" data-name="story-grid">
      {posts.map((post, i) => (
        <button
          key={post.id}
          type="button"
          className={`nt-story-tile ${i === 0 ? 'is-lead' : ''}`}
          aria-label={post.title}
          onClick={() => router.push(`/blog/${post.slug}`)}
        >
          <div className="nt-story-tile-media">
            {post.image ? (
              <img src={post.image} alt={post.title} />
            ) : (
              <span className="nt-story-tile-fallback">{post.category}</span>
            )}
          </div>
          <h3 className="nt-story-tile-title">{post.title}</h3>
          <p className="nt-story-tile-cat">{post.category}</p>
        </button>
      ))}
    </div>
  );
}
