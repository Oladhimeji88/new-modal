'use client';

import { useEffect, useRef, useState } from 'react';
import {
  BLOG_EVENT,
  deletePost,
  formatDate,
  getPosts,
  upsertPost,
  type BlogPost,
} from '../lib/blogStore';

type Draft = {
  id?: string;
  title: string;
  category: string;
  author: string;
  date: string;
  excerpt: string;
  body: string;
  image: string;
};

const EMPTY: Draft = {
  title: '',
  category: 'General',
  author: 'NativeTalk Team',
  date: '',
  excerpt: '',
  body: '',
  image: '',
};

export function BlogAdmin() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [draft, setDraft] = useState<Draft>(EMPTY);
  const [status, setStatus] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

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

  const editing = Boolean(draft.id);

  const resetForm = () => {
    setDraft(EMPTY);
    if (fileRef.current) fileRef.current.value = '';
  };

  const startEdit = (post: BlogPost) => {
    setDraft({
      id: post.id,
      title: post.title,
      category: post.category,
      author: post.author,
      date: post.date,
      excerpt: post.excerpt,
      body: post.body,
      image: post.image,
    });
    setStatus('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onImage = (file?: File) => {
    if (!file) return;
    if (file.size > 3 * 1024 * 1024) {
      setStatus('Image is larger than 3MB — please choose a smaller file.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setDraft((d) => ({ ...d, image: String(reader.result) }));
    reader.readAsDataURL(file);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draft.title.trim()) {
      setStatus('A title is required.');
      return;
    }
    const saved = upsertPost({
      id: draft.id,
      title: draft.title.trim(),
      category: draft.category.trim() || 'General',
      author: draft.author.trim() || 'NativeTalk Team',
      date: draft.date || undefined,
      excerpt: draft.excerpt.trim(),
      body: draft.body,
      image: draft.image,
    });
    setStatus(editing ? `Updated “${saved.title}”.` : `Published “${saved.title}”.`);
    resetForm();
  };

  const remove = (post: BlogPost) => {
    if (typeof window !== 'undefined' && !window.confirm(`Delete “${post.title}”? This cannot be undone.`)) {
      return;
    }
    deletePost(post.id);
    if (draft.id === post.id) resetForm();
    setStatus(`Deleted “${post.title}”.`);
  };

  return (
    <div className="nt-admin">
      <header className="nt-admin-head">
        <div>
          <p className="nt-admin-eyebrow">NativeTalk · Blog Manager</p>
          <h1>{editing ? 'Edit article' : 'Create a new article'}</h1>
        </div>
        <a className="nt-admin-view" href="/blog" target="_blank" rel="noreferrer">
          View blog ↗
        </a>
      </header>

      <div className="nt-admin-grid">
        <form className="nt-admin-form" onSubmit={submit}>
          <label className="nt-admin-field">
            <span>Title</span>
            <input
              type="text"
              value={draft.title}
              onChange={(e) => setDraft({ ...draft, title: e.target.value })}
              placeholder="A clear, specific headline"
            />
          </label>

          <div className="nt-admin-row">
            <label className="nt-admin-field">
              <span>Category</span>
              <input
                type="text"
                value={draft.category}
                onChange={(e) => setDraft({ ...draft, category: e.target.value })}
                placeholder="Product, Guides, AI…"
              />
            </label>
            <label className="nt-admin-field">
              <span>Author</span>
              <input
                type="text"
                value={draft.author}
                onChange={(e) => setDraft({ ...draft, author: e.target.value })}
              />
            </label>
            <label className="nt-admin-field">
              <span>Date</span>
              <input
                type="date"
                value={draft.date}
                onChange={(e) => setDraft({ ...draft, date: e.target.value })}
              />
            </label>
          </div>

          <label className="nt-admin-field">
            <span>Excerpt</span>
            <textarea
              rows={2}
              value={draft.excerpt}
              onChange={(e) => setDraft({ ...draft, excerpt: e.target.value })}
              placeholder="One or two sentences shown on the blog feed."
            />
          </label>

          <label className="nt-admin-field">
            <span>Body</span>
            <textarea
              rows={10}
              value={draft.body}
              onChange={(e) => setDraft({ ...draft, body: e.target.value })}
              placeholder="Write your article. Separate paragraphs with a blank line."
            />
          </label>

          <label className="nt-admin-field">
            <span>Cover image</span>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={(e) => onImage(e.target.files?.[0])}
            />
          </label>

          {draft.image ? (
            <div className="nt-admin-preview">
              <img src={draft.image} alt="Cover preview" />
              <button type="button" onClick={() => setDraft({ ...draft, image: '' })}>
                Remove image
              </button>
            </div>
          ) : null}

          <div className="nt-admin-actions">
            <button type="submit" className="nt-admin-primary">
              {editing ? 'Save changes' : 'Publish article'}
            </button>
            {editing && (
              <button type="button" className="nt-admin-secondary" onClick={resetForm}>
                Cancel edit
              </button>
            )}
          </div>

          {status && <p className="nt-admin-status">{status}</p>}
        </form>

        <aside className="nt-admin-list">
          <h2>Published articles ({posts.length})</h2>
          {posts.length === 0 ? (
            <p className="nt-admin-empty">No articles yet. Create your first one.</p>
          ) : (
            <ul>
              {posts.map((post) => (
                <li key={post.id} className={draft.id === post.id ? 'is-active' : ''}>
                  <div className="nt-admin-thumb" aria-hidden>
                    {post.image ? <img src={post.image} alt="" /> : <span>{post.category}</span>}
                  </div>
                  <div className="nt-admin-item-body">
                    <strong>{post.title}</strong>
                    <span className="nt-admin-item-meta">
                      {post.category} · {formatDate(post.date)}
                    </span>
                    <div className="nt-admin-item-actions">
                      <button type="button" onClick={() => startEdit(post)}>
                        Edit
                      </button>
                      <a href={`/blog/${post.slug}`} target="_blank" rel="noreferrer">
                        View
                      </a>
                      <button type="button" className="nt-admin-delete" onClick={() => remove(post)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </aside>
      </div>
    </div>
  );
}
