// services/protectedService.js

// import axios from "axios";
import axiosInstance from "@/utils/axoisInstance";
import { toast } from "react-toastify";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const PROTECTED_URL = `${BASE_URL}/users/protected`;

const checkProtectedRoute = async () => {
  try {
    await axiosInstance.post(PROTECTED_URL, {}); // No need to manually set headers
    return true; // Proceed if successful
  } catch (error: any) {
    const errorMessage =
      error?.response?.data?.message || "Access denied. Please try again.";
    
    toast.error(errorMessage);
    throw new Error(errorMessage);
  }
};

export default checkProtectedRoute;



// import { toast } from "react-toastify";

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
// const PROTECTED_URL = `${BASE_URL}/users/protected`;

// const checkProtectedRoute = async () => {
//   try {
//     const response = await fetch(PROTECTED_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({}),
//     });

//     if (!response.ok) {
//       toast.error("Access denied. Please check your subscription or log in again.");
//       throw new Error("Access denied.");
//     }

//     return true; // Proceed if successful
//   } catch (error) {
//     toast.error("Access denied. Please check your subscription or log in again.");
//     throw error;
//   }
// };

// export default checkProtectedRoute;
