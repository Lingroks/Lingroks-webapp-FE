import axiosInstance from '../utils/axoisInstance.js';
import { toast } from 'react-toastify';

// Register a new user

const BASE_URL = 'http://localhost:8000/v1';

// Function to display toast messages
const displayToast = (type, message) => {
  if (type === 'success') {
    toast.success(message, { position: 'top-right' });
  } else if (type === 'error') {
    toast.error(message, { position: 'top-right' });
  }
};

// Password validation criteria
export const validatePassword = (password) => {
  const criteria = {
    hasUppercase: /[A-Z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    minLength: password.length >= 8,
  };
  return criteria;
};

let isLoading = false;

export const getLoadingState = () => isLoading;

const setLoadingState = (state) => {
  isLoading = state;
};

export const registerUser = async (firstName, lastName, email, password) => {
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
    setLoadingState(true);
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

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Response:', data);

    displayToast('success', 'User registered successfully!');
  } catch (error) {
    displayToast(
      'error',
      error.response?.data?.message || 'Registration failed!'
    );
    throw error;
  } finally {
    setLoadingState(false);
  }
};

// Login user
export const loginUser = async (email, password) => {
  const response = await axiosInstance.post('/users/tokens', {
    email,
    password,
  });
  return response.data; // Return the response data for the caller
};

// Verify user OTP
export const verifyOTP = async (email, otp) => {
  const response = await axiosInstance.post('/users/verify-email', {
    email,
    otp,
  });
  return response.data;
};

// Request password reset
export const requestPasswordReset = async (email) => {
  const response = await axiosInstance.post('/users/request-pwd-reset', {
    email,
  });
  return response.data;
};

// Reset password
export const resetPassword = async (email, otp, password) => {
  const response = await axiosInstance.post('/users/reset-pwd', {
    email,
    otp,
    password,
  });
  return response.data;
};

// Example protected route usage
export const accessProtectedRoute = async () => {
  const response = await axiosInstance.post('/users/protected');
  return response.data;
};
