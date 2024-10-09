// app/about/page.tsx
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the About Page of the website.</p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}