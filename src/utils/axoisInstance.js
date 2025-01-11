import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 8000,
});

export default axiosInstance;
