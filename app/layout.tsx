import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gentrobyte Internships | Build, Learn, Achieve',
  description:
    'Join Gentrobyte internship programs and gain hands-on experience in cutting-edge technologies. Apply now for frontend, backend, design, and marketing internships.',
  keywords: [
    'internships',
    'tech internships',
    'gentrobyte',
    'software development',
    'frontend',
    'backend',
    'UI/UX design',
  ],
  authors: [{ name: 'Gentrobyte' }],
  openGraph: {
    title: 'Gentrobyte Internships | Build, Learn, Achieve',
    description:
      'Join our mission to innovate and grow with real-world projects.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
