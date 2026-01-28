import type { Metadata } from 'next';
import About from '@/components/About';

export const metadata: Metadata = {
  title: 'About Gentrobyte Internship',
  description: 'Learn about Gentrobyte\'s mission and our professional internship programs designed for tech leaders.',
};

export default function AboutPage() {
  return <About />;
}
