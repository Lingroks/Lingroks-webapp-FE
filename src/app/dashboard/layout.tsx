import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description:
    'Access your personal dashboard on Your App. Manage your settings, view analytics, and stay updated.',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='dashlay'>{children}</div>
    </>
  );
}
