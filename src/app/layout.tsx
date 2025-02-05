import type { Metadata } from 'next';
import Script from 'next/script';
import '../app/globals.css';
import '../assets/scss/main.scss';
// import { Inter } from 'next/font/google';
import { UserProvider } from '../context/UserContext';

// Configure the Inter font
// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
//   display: 'swap',
// });

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  title: 'Lingroks - Your All-in-One Language Tool',
  description:
    'Lingroks is a language translator and learning platform that helps you learn and translate languages in a fun and interactive way.',
  keywords: [
    'AI translation tool',
    'AI text-to-speech converter',
    'Free AI translation',
    'AI-powered communication tool',
  ],
  openGraph: {
    title: 'Lingroks - Your All-in-One Language Tool',
    description:
      'Lingroks is a language translator and learning platform that helps you learn and translate languages in a fun and interactive way.',
    url: 'https://lingroks.live',
    siteName: 'Lingroks',
    images: [
      {
        url: 'https://lingroks.live/hero-main.png',
        width: 1200,
        height: 630,
        alt: 'Home Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Lingroks - Your All-in-One Language Tool',
    description:
      'Lingroks is a language translator and learning platform that helps you learn and translate languages in a fun and interactive way.',
    images: ['https://lingroks.live/lingroks-dashboard.png'],
    site: '@lingroks',
  },

  // Robots & Canonical URL
  robots: {
    index: true, // Allow indexing
    follow: true, // Allow following links
  },
  alternates: {
    canonical: 'https://lingroks.live/',
  },
  themeColor: '#ffffff',
  colorScheme: 'light dark',
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
    maximumScale: 1.0,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Amplitude Script */}
        <Script
          src="https://cdn.amplitude.com/script/911d66f270261720f85ea7a0b6f7780b.js"
          strategy="afterInteractive"
        />
        <Script id="amplitude-init" strategy="afterInteractive">
          {`
            window.amplitude.init('911d66f270261720f85ea7a0b6f7780b', {
              fetchRemoteConfig: true,
              autocapture: true
            });
          `}
        </Script>
      </head>
      <body>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
