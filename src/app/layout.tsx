import type { Metadata } from 'next';
import '../app/globals.css';
import '../assets/scss/main.scss';
import { Inter } from 'next/font/google';
import { UserProvider } from '../context/UserContext';

// Configure the Inter font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico', // Standard favicon
    shortcut: '/favicon.ico',
  },
  title: 'Lingroks - Your All-in-One Language Tool',
  description:
    'Lingroks is a language translator and learning platform that helps you learn and translate languages in a fun and interactive way.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
