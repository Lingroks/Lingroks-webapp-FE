import axios from "axios";
import jwtDecode from "jwt-decode"; // Install using: npm install jwt-decode
import { toast } from "react-toastify";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Helper function to check token expiration
const isTokenExpired = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.exp * 1000 < Date.now(); // Convert exp (seconds) to ms and compare
  } catch (error) {
    return true; // Treat invalid token as expired
  }
};

// Function to handle session expiration
const handleSessionExpiration = () => {
  toast.error("Session expired. Please log in again.");
  localStorage.removeItem("authToken");
  localStorage.removeItem("userProfile");
  window.dispatchEvent(new Event("logout"));
  window.location.href = "/auth/login"; // ✅ Redirect to login page
};

// Request Interceptor: Attach Authorization Token
axiosInstance.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem("authToken");

    if (token) {
      if (isTokenExpired(token)) {
        handleSessionExpiration(); // ✅ Handle expired token before request
        return Promise.reject(new Error("Token expired"));
      }
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

// Response Interceptor: Handle Unauthorized Errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== "undefined") {
        handleSessionExpiration(); // ✅ Handle unauthorized access
      }
    } else if (error.response?.status === 500) {
      toast.error("Server error. Please try again later.");
    } else {
      toast.error(error.response?.data?.message || "An error occurred.");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;


// import axios from 'axios';

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// const axiosInstance = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//   },
// });

// // Request Interceptor: Attach Authorization Token
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     console.error('Request Error:', error);
//     return Promise.reject(error);
//   }
// );

// // Response Interceptor: Handle Unauthorized Errors

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       // ✅ Trigger auth redirect inside a React component
//       if (typeof window !== 'undefined') {
//         // ✅ Remove token and log out user when unauthorized
//         toast.error('Session expired. Please log in again.');
//         localStorage.removeItem('authToken');
//         localStorage.removeItem('userProfile');
//         window.dispatchEvent(new Event('logout')); 
//       }
//     } else if (error.response?.status === 500) {
//       toast.error('Server error. Please try again later.');
//     } else {
//       toast.error(error.response?.data?.message || 'An error occurred.');
//     }
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
