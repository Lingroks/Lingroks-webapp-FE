// services/translateService.js

import axios from 'axios';
import { toast } from 'react-toastify';
import detectLanguageService from './detectService';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const TRANSLATE_URL = `${BASE_URL}/translate`;

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
        toast.error('Error in language detection. transss');
        throw new Error('Language detection failed.');
      }

      // Step 2: Proceed to translation
      const response = await axios.post(
        `${TRANSLATE_URL}/`,
        { text, targetLanguage },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success('Text translated successfully!');
      console.log(response.data.response);
      return response.data.response[targetLanguage];
    } catch (error) {
      toast.error('Error in translation.');
      throw error;
    }
  },

  async translateUrlPageContent(url, targetLanguage) {
    const token = getAuthToken();
    if (!token) throw new Error('Authentication token is missing.');

    try {
      const response = await axios.post(
        `${TRANSLATE_URL}/url`,
        { url, targetLanguage },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success('Page translated successfully!');
      console.log(response.data.response);
      return response.data.response;
    } catch (error) {
      toast.error('Error in translation.');
      throw error;
    }
  },

  async generateSpeech(text) {
    const token = getAuthToken();
    if (!token) throw new Error('Authentication token is missing.');
    if (!token) {
      toast.error('Authentication token is missing.');
    }
    try {
      const response = await axios.post(
        `${TRANSLATE_URL}/speech`,
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
