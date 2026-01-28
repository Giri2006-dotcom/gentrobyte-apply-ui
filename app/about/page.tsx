import type { Metadata } from 'next';
import About from '@/components/About';

export const metadata: Metadata = {
  title: 'About Gentrobyte | Our Mission & Vision',
  description:
    'Learn about Gentrobyte\'s mission to empower the next generation of tech leaders through innovative internship programs and real-world experience.',
};

export default function AboutPage() {
  return <About />;
}
