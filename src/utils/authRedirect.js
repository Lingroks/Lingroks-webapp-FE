import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const useAuthRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    toast.error('Session expired. Please log in again.');
    localStorage.removeItem('authToken');
    localStorage.removeItem('userProfile'); // Optional
    router.push('/auth/login'); // Redirect to login page
  }, [router]);
};

export default useAuthRedirect;
