import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Startup Dose',
  description: 'One startup a day',
  keywords: 'startup, growth, entrepreneurship, business',
  authors: [{ name: 'Startup Dose Team' }],
  openGraph: {
    title: 'Startup Dose',
    description: 'One startup a day',
    type: 'website',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" className="dark">
      <body className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 transition-colors duration-200 min-h-screen flex flex-col">
        <Header />
        <main role="main" className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
