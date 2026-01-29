import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hilal ABACI - Software Developer',
  description:
    'Hi! My name is Hilal Abaci and I live and work as a freelance Full Stack Web Developer in London, United Kingdom.',
  keywords: [
    'Hilal Abaci',
    'Software Developer',
    'Full Stack Web Developer',
    'Front End Developer',
    'React JS Developer',
    'Freelance Web Developer',
  ],
  metadataBase: new URL('https://www.hilalabaci.com'),
  openGraph: {
    siteName: 'hilalabaci',
    title: 'Hilal Abaci - Full Stack Web Developer',
    description:
      'Hi! My name is Hilal Abaci and I live and work as a freelance Full Stack Web Developer in London, United Kingdom.',
    url: 'https://www.hilalabaci.com',
    type: 'website',
    images: [
      {
        url: '/logo/logo32.png',
        width: 32,
        height: 32,
        alt: 'Hilal Abaci Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hilal Abaci - Full Stack Web Developer',
    description:
      'Hi! My name is Hilal Abaci and I live and work as a freelance Full Stack Web Developer in London, United Kingdom.',
    images: ['/logo/logo32.png'],
  },
  icons: {
    icon: [
      { url: '/logo/logo.ico', sizes: '192x192', type: 'image/x-icon' },
      { url: '/logo/logo.png', type: 'image/png' },
    ],
    apple: '/logo/logo.png',
  },

  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
