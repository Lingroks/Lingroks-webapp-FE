import { toast } from 'react-toastify';
import axiosInstance from '../utils/axoisInstance.js';

// Register a new user

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Create an Axios instance

const displayToast = (type, message) => {
  if (type === 'success') {
    toast.success(message, { position: 'top-right' });
  } else if (type === 'error') {
    toast.error(message, { position: 'top-right' });
  }
};

export const registerUser = async (
  firstName,
  lastName,
  email,
  password,
  navigate
) => {
  if (!firstName || !lastName || !email || !password) {
    toast.error('Please fill out all fields');
    return;
  }

  console.log('Before validation:', {
    firstName,
    lastName,
    email,
    password,
  });

  try {
    const payload = {
      firstName,
      lastName,
      email,
      password: password.trim(),
    };

    const response = await axiosInstance.post('/users', payload);
    const data = response.data; 
    console.log('Response:', data);
    displayToast('success', 'User registered successfully!');
    navigate(`/auth/verify-email?email=${encodeURIComponent(email)}`);
  } catch (error) {
    displayToast(
      'error',
      error.response?.data?.message || 'Registration failed!'
    );
    throw error;
  }
};

// Login User
export const loginUser = async (email, password, navigate, updateUser) => {


  if (!email || !password) {
    toast.error('Please fill out all fields');
    return;
  }

  try {
    const payload = {
      email,
      password: password.trim(),
    };

    const response = await axiosInstance.post('/users/tokens', payload);
    const data = response.data; 
    console.log('Login successful:', data);

    // Save token or session (if needed)
    localStorage.setItem('authToken', data.token);

    const userProfile = await fetchUserProfile(data.token);
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    updateUser(userProfile);

    // Navigate to dashboard after successful login
    navigate('/dashboard');
  } catch (error) {
    toast.error(error.response?.data?.message || 'Login failed!');
    throw error;
  }
};

// Fetch User Profile
export const fetchUserProfile = async (token) => {
  try {
    const response = await axiosInstance.get('/users/profile', {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data.user;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    displayToast('error', 'Failed to fetch user profile!');
    throw error;
  }
};

// Request Password Reset
export const requestPasswordReset = async (email, navigate) => {
  if (!email) {
    toast.error('Please provide an email address');
    return;
  }

  try {
    const response = await axiosInstance.post('/users/request-pwd-reset', { email });

    if (response.data.success) {
      displayToast('success', response.data.message);
      navigate('/auth/forgot-password/reset-password');
    } else {
      displayToast('error', 'Failed to send password reset token');
    }
  } catch (error) {
    displayToast('error', error.response?.data?.message || 'Failed to request password reset');
    throw error;
  }
};

// Reset Password with OTP
export const resetPassword = async (email, password, otp, navigate) => {
  if (!email || !password || !otp) {
    toast.error('Please fill out all fields');
    return;
  }

  try {
    const payload = { email, password, otp };
    const response = await axiosInstance.post('/users/reset-pwd', payload);

    if (response.data.success) {
      displayToast('success', response.data.message);
      navigate('/auth/forgot-password/reset-successful');
    } else {
      displayToast('error', 'Failed to reset password');
    }
  } catch (error) {
    displayToast('error', error.response?.data?.message || 'Password reset failed');
    throw error;
  }
};

// Logout User
export const logoutUser = (navigate) => {
  // Clear the authentication token from localStorage (or sessionStorage if you are using that)
  localStorage.removeItem('authToken');
  localStorage.removeItem('userProfile');
  displayToast('success', 'Successfully logged out');
  // Redirect to the login page (or home page)
  navigate('/auth/login');
};

// Example protected route usage
export const accessProtectedRoute = async () => {
  const response = await axiosInstance.post('/users/protected');
  return response.data;
};