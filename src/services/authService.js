import axiosInstance from '../utils/axoisInstance.js';
import { toast } from 'react-toastify';

// Register a new user

const BASE_URL = 'http://localhost:8000/v1';

// Create an Axios instance



// Function to display toast messages
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

    const response = await fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // const response = await axiosInstance.post('/users', payload);

    if (!response.ok) {
      const errorData = await response.json();
      toast.error(errorData.message || 'Registration failed!');
      return;
    }

    const data = await response.json();
    console.log('Response:', data);
    displayToast('success', 'User registered successfully!');
    // navigate('/auth/login');
    // navigate(`/auth/verify-email`, { state: { email } });
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

    const response = await fetch(`${BASE_URL}/users/tokens`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Login successful:', data);

    // Save token or session (if needed)
    localStorage.setItem('authToken', data.token);

    // Update the user context
    updateUser(data.user);

    // Navigate to dashboard after successful login
    navigate('/dashboard');
  } catch (error) {
    toast.error(error.response?.data?.message || 'Login failed!');
    throw error;
  }
};

// // Verify user OTP
// export const verifyOTP = async (email, otp) => {
//   const response = await axiosInstance.post('/users/verify-email', {
//     email,
//     otp,
//   });
//   return response.data;
// };

// Request password reset
export const requestPasswordReset = async (email, navigate) => {
  if (!email) {
    toast.error('Please provide an email address');
    return;
  }

  try {
    const payload = { email };
    // const response = await axiosInstance.post(`${BASE_URL}/request-pwd-reset`, payload);
    const response = await fetch(`${BASE_URL}/users/request-pwd-reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });
    // Parse the JSON body
    const data = await response.json();

    // Check if success is true
    if (data.success) {
      displayToast('success', data.message);
      navigate('/auth/forgot-password/reset-password');
    } else {
      displayToast('error', 'Failed to send password reset token');
    }
  } catch (error) {
    displayToast(
      'error',
      error.response?.data?.message || 'Failed to request password reset'
    );
    throw error;
  }
};

// Reset password with OTP
export const resetPassword = async (email, password, otp,navigate) => {
  if (!email || !password || !otp) {
    toast.error('Please fill out all fields');
    return;
  }

  try {
    const payload = {
      email,
      password,
      otp,
    };

    // const response = await axiosInstance.post(`${BASE_URL}/reset-pwd`, payload);
    const response = await fetch(`${BASE_URL}/users/reset-pwd`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (data.success) {
      displayToast('success', data.message);
      navigate('/auth/forgot-password/reset-successful');
    } else {
      displayToast('error', 'Failed to reset password');
    }
  } catch (error) {
    displayToast(
      'error',
      error.response?.data?.message || 'Password reset failed'
    );
    throw error;
  }
};

// Logout User
export const logoutUser = (navigate) => {
  // Clear the authentication token from localStorage (or sessionStorage if you are using that)
  localStorage.removeItem('authToken');
  displayToast('success', 'Successfully logged out');
  // Redirect to the login page (or home page)
  navigate('/auth/login');
};

// Example protected route usage
export const accessProtectedRoute = async () => {
  const response = await axiosInstance.post('/users/protected');
  return response.data;
};