import axios from 'axios';


const BASE_URL =  'http://localhost:8000/v1'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Add request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add Authorization token to headers if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Modify or log the response before returning it
    return response;
  },
  (error) => {
    // Handle global response errors
    if (error.response) {
      if (error.response.status === 401) {
        toast.error('Unauthorized. Please log in again.');
      } else if (error.response.status === 500) {
        toast.error('Server error. Please try again later.');
      } else {
        toast.error(error.response.data?.message || 'An error occurred.');
      }
    } else {
      toast.error('Network error. Please check your connection.');
    }
    return Promise.reject(error);
  }
);