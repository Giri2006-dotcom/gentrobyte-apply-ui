import type { Metadata } from 'next';
import Achievements from '@/components/Achievements';

export const metadata: Metadata = {
  title: 'Achievements & Success Stories | Gentrobyte',
  description:
    'Celebrating our milestones, awards, and the success stories of our incredible interns and team members.',
};

export default function AchievementsPage() {
  return <Achievements />;
}
