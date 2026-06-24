import { BlogAdmin } from '../../src/app/components/BlogAdmin';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'NativeTalk · Blog Manager',
  robots: { index: false, follow: false },
};

export default function NativeBlogTrackPage() {
  return <BlogAdmin />;
}
