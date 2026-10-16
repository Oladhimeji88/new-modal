import { BlogPostView } from '../../../src/app/components/BlogPostView';

export const dynamic = 'force-dynamic';

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BlogPostView slug={slug} />;
}
