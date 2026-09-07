import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pangasinan Heritage Digital Showcase',
  description: 'Discover the cultural heritage and iconic tourist sites of Pangasinan, Philippines.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0077a8" />
      </head>
      <body>{children}</body>
    </html>
  );
}
