import type { Metadata } from 'next';
import Apply from '@/components/Apply';

export const metadata: Metadata = {
  title: 'Apply for Internship | Join Gentrobyte',
  description:
    'Apply for an internship at Gentrobyte. Fill out our multi-step application form and take the first step toward your dream tech career.',
};

export default function ApplyPage() {
  return <Apply />;
}
