// services/detectLanguage.js

import axios from 'axios';
import { toast } from 'react-toastify';

const API_BASE_URL = 'http://localhost:8000/v1/detect'; // Adjust based on your backend proxy configuration

// Fetch auth token from localStorage
const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

const detectLanguageService = {
  async detectLanguage(text) {
    const token = getAuthToken();
    if (!token) {
      toast.error('Authentication token is missing.');
      throw new Error('Authentication token is missing.');
    }

    try {
      const response = await axios.post(
        `${API_BASE_URL}/`,
        { text },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        //   withCredentials: true,
        }
      );
      toast.success('Language detected successfully!');
      return response.data.response;
    } catch (error) {
      toast.error('Error in language detection.');
      throw error;
    }
  },
};

export default detectLanguageService;
