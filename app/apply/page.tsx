import type { Metadata } from 'next';
import Apply from '@/components/Apply';

export const metadata: Metadata = {
  title: 'Apply for Gentrobyte Internship',
  description: 'Submit your application for the Gentrobyte Internship 2026 program.',
};

export default function ApplyPage() {
  return <Apply />;
}
