import axiosInstance from '../utils/axiosInstance';

// Register a new user
export const registerUser = async (email, password) => {
  const response = await axiosInstance.post('/users', {
    email,
    password,
    firstName,
    lastName,
  });
  return response.data; // Return the response data for the caller
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
