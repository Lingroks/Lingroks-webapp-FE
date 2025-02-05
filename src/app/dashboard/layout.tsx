import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description:
    'Access your personal dashboard on Your App. Manage your settings, view analytics, and stay updated.',

  keywords: [
    'dashboard',
    'Translate web pages with AI',
    'Free AI text-to-speech tool',
    'Summarize articles using AI',
    'Audio to text',
    'Insights'
  ],
  // Open Graph (OG) metadata
  openGraph: {
    title: 'Dashboard',
    description: 'Access your personal dashboard on Your App.',
    url: 'https://lingroks.live/dashboard',
    siteName: 'Lingroks',
    images: [
      {
        url: 'https://lingroks.live/lingroks-dashboard.png',
        width: 1200,
        height: 630,
        alt: 'Dashboard Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Dashboard',
    description:
      'Access your personal dashboard on Your App. Manage your settings, view analytics, and stay updated.',
    images: ['https://lingroks.live/hero-main.png'],
    site: '@lingroks',
  },

  // Robots & Canonical URL
  robots: {
    index: true, // Allow indexing
    follow: true, // Allow following links
  },
  alternates: {
    canonical: 'https://lingroks.live/dashboard',
  },

  // Icons (Favicon & App Icons)
  icons: {
    icon: '/favicon.ico',
  },

  // Theme & Viewport
  themeColor: '#ffffff',
  colorScheme: 'light dark',
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
    maximumScale: 1.0,
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="dashlay">{children}</div>
    </>
  );
}
