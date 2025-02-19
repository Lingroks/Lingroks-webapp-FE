// services/protectedService.js

import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const PROTECTED_URL = `${BASE_URL}/users/protected`;


const checkProtectedRoute = async () => {
  try {
    await axiosInstance.post(PROTECTED_URL, {}); // No need to manually set headers
    return true; // Proceed if successful
  } catch (error) {
    toast.error("Access denied. Please check your subscription or log in again.");
    throw new Error("Access denied.");
  }
};

export default checkProtectedRoute;
