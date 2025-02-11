// services/protectedService.js

import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const PROTECTED_URL = `${BASE_URL}/protected`;

// Fetch auth token from localStorage
const getAuthToken = () => {
  return localStorage.getItem("authToken");
};

// ✅ Check if the protected route is accessible before proceeding
const checkProtectedRoute = async () => {
  const token = getAuthToken();
  if (!token) {
    toast.error("Authentication token is missing.");
    throw new Error("Authentication token is missing.");
  }

  try {
    await axios.post(
      PROTECTED_URL,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return true; // Proceed if successful
  } catch (error) {
    toast.error("Access denied. Please check your subscription or login again.");
    throw new Error("Access denied.");
  }
};

export default checkProtectedRoute;
