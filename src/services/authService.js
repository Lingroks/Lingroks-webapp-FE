import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL || "http://localhost:5000/api",
  timeout: 5000,
});

export default axiosInstance;
