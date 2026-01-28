import type { Metadata } from 'next';
import Internships from '@/components/Internships';

export const metadata: Metadata = {
  title: 'Internship Opportunities | Gentrobyte Careers',
  description:
    'Explore our diverse range of internship positions in Frontend, Backend, UI/UX Design, Digital Marketing, and Data Science. Find your perfect role.',
};

export default function InternshipsPage() {
  return <Internships />;
}
