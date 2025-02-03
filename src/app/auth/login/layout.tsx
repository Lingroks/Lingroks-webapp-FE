import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Log In',
    description: 'Log in to access your dashboard and other lingroks features.',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='loglay'>{children}</div>
    </>
  );
}
