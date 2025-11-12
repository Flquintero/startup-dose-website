import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Startup Dose',
  description: 'Your source for startup insights and growth strategies',
  keywords: 'startup, growth, entrepreneurship, business',
  authors: [{ name: 'Startup Dose Team' }],
  openGraph: {
    title: 'Startup Dose',
    description: 'Your source for startup insights and growth strategies',
    type: 'website',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body>
        <main role="main">{children}</main>
      </body>
    </html>
  );
}
