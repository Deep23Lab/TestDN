import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'A Story of Strength',
  description: 'A dark-to-light storytelling page about a relationship that turned painful and became self-awareness.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
