import type { Metadata } from 'next';
import Internships from '@/components/Internships';

export const metadata: Metadata = {
  title: 'Gentrobyte Internship Opportunities',
  description: 'Explore Gentrobyte internship roles in Software Engineering, UI/UX Design, and more.',
};

export default function InternshipsPage() {
  return <Internships />;
}
