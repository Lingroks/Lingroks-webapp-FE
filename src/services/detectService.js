// services/detectLanguage.js

import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = process.env.process.env.NEXT_PUBLIC_BASE_URL;

const DETECT_URL = `${BASE_URL}/v1/detect`;

// Fetch auth token from localStorage
const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

const detectLanguageService = {
  async detectLanguage(text) {
    const token = getAuthToken();
    console.log('Auth Token detectttttt:', token);
    if (!token) {
      toast.error('Authentication token is missing.');
      throw new Error('Authentication token is missing.');
    }

    try {
      const response = await axios.post(
        `${DETECT_URL}/`,
        { text },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
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
