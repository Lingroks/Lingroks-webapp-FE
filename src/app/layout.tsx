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
  title: 'Your AI-Powered Companion for All Things Content',
  description:
    'Lingroks is an AI-powered communication platform that breaks language barriers effortlessly. With real-time translation, summarization, and text-to-speech, it enables seamless global communication for individuals, businesses, and professionals. Whether browsing the web, engaging with content, or collaborating across languages, Lingroks ensures smarter and more efficient interactions—powered by advanced AI to transform how people connect and access information worldwide.',
  keywords: [
    'AI translation tool',
    'AI text-to-speech converter',
    'Free AI translation',
    'AI-powered communication tool',
  ],
  openGraph: {
    title: 'Your AI-Powered Companion for All Things Content',
    description:
      'Lingroks is an AI-powered communication platform that breaks language barriers effortlessly. With real-time translation, summarization, and text-to-speech, it enables seamless global communication for individuals, businesses, and professionals. Whether browsing the web, engaging with content, or collaborating across languages, Lingroks ensures smarter and more efficient interactions—powered by advanced AI to transform how people connect and access information worldwide.',
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
    title: 'Your AI-Powered Companion for All Things Content',
    description:
      'Lingroks is an AI-powered communication platform that breaks language barriers effortlessly. With real-time translation, summarization, and text-to-speech, it enables seamless global communication for individuals, businesses, and professionals. Whether browsing the web, engaging with content, or collaborating across languages, Lingroks ensures smarter and more efficient interactions—powered by advanced AI to transform how people connect and access information worldwide.',
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
