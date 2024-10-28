// app/page.tsx
import Link from 'next/link';
export default function Home() {
  return (
    <>
       <p>
        This is Homepage with a link to <Link href="/about" className='text-red-500'>About</Link> page
       </p>
    </>
  );
}
