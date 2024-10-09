// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link href="/about">Go to About Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
