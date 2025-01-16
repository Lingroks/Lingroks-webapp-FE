// services/translateService.js

import axios from 'axios';
import { toast } from 'react-toastify';
import detectLanguageService from './detectService';


const API_BASE_URL = 'http://localhost:8000/v1/translate'; // Adjust based on your backend proxy configuration

// Fetch auth token from localStorage
const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

const translateService = {
  async generateTranslatedText(text, targetLanguage) {
    const token = getAuthToken();
    if (!token) {
      toast.error('Authentication token is missing.');
      throw new Error('Authentication token is missing.');
    }

    try {
      // Step 1: Detect language
      const detectedLanguage = await detectLanguageService.detectLanguage(text);
      if (!detectedLanguage || detectedLanguage.error) {
        toast.error('Error in language detection.');
        throw new Error('Language detection failed.');
      }

      // Step 2: Proceed to translation
      const response = await axios.post(
        `${API_BASE_URL}/translate`,  // Adjust to your translation endpoint
        { text, targetLanguage },  // Pass the target language to the API
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success('Text translated successfully!');
      return response.data.response[targetLanguage];  // Adjust based on the API response structure
    } catch (error) {
      toast.error('Error in translation.');
      throw error;
    }
  },

  async translateUrlPageContent(url, targetLanguage) {
    const token = getAuthToken();
    if (!token) throw new Error('Authentication token is missing.');

    const response = await axios.post(
      `${API_BASE_URL}/url`,
      { url, targetLanguage },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );
    return response.data.response;
  },

  async generateSpeech(text) {
    const token = getAuthToken();
    if (!token) throw new Error('Authentication token is missing.');
    if (!token) {
      toast.error('Authentication token is missing.');
    }
    try {
      const response = await axios.post(
        `${API_BASE_URL}/speech`,
        { text },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          // withCredentials: true,
        }
      );
      toast.success('Audio generated successfully!');

      return response.data.fileDownloadUrl;
    } catch (error) {
      toast.error('Error in generating audio.');
      throw error;
    }
  },
};

export default translateService;
