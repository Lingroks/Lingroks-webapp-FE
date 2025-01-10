import axiosInstance from "../utils/axoisInstance";

// Register a new user
export const registerUser = async (email, password) => {
  const response = await axiosInstance.post("/users/register", { email, password });
  return response.data; // Return the response data for the caller
};

// Login user
export const loginUser = async (email, password) => {
  const response = await axiosInstance.post("/users/login", { email, password });
  return response.data; // Return the response data for the caller
};

// Verify user OTP
export const verifyOTP = async (userId, otp) => {
  const response = await axiosInstance.post(`/users/verify-otp`, { userId, otp });
  return response.data;
};
