import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';

export const isTokenExpired = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

    if (decodedToken.exp < currentTime) {
      toast.error('Session expired. Please log in again.');
      return true;
    }
    return false;
  } catch (error) {
    toast.error('Invalid token. Please log in again.');
    console.error('Token decoding error:', error);
    return true;
  }
};
