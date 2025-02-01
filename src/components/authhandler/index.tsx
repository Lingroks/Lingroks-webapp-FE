import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthHandler = () => {
  const router = useRouter();

  useEffect(() => {
    const handleLogout = () => {
      router.push('/auth/login'); // Redirect to login page
    };

    window.addEventListener('logout', handleLogout);
    return () => window.removeEventListener('logout', handleLogout);
  }, [router]);

  return null; // This component does not render anything
};

export default AuthHandler;
