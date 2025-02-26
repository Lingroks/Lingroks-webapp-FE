
import { toast } from "react-toastify";
import axiosInstance from "@/utils/axoisInstance";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const PROTECTED_URL = `${BASE_URL}/users/protected`;

const checkProtectedRoute = async () => {
  try {
    await axiosInstance.post(PROTECTED_URL, {});
    return true; 
  } catch (error) {
    console.error("Protected Route Error:", error?.response?.data?.message);
    const errorMessage =
      error?.response?.data?.message || "Access denied. Log in again.";
    
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
