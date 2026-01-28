import type { Metadata } from 'next';
import Achievements from '@/components/Achievements';

export const metadata: Metadata = {
  title: 'Gentrobyte Internship Success Stories',
  description: 'Celebrating the achievements and success stories of our Gentrobyte internship alumni.',
};

export default function AchievementsPage() {
  return <Achievements />;
}
