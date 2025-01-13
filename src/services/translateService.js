// services/translateService.js

import axios from 'axios';
import { toast } from 'react-toastify';

const API_BASE_URL = 'http://localhost:8000/v1//translate'; // Adjust based on your backend proxy configuration

// Fetch auth token from localStorage
const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

const translateService = {
  async generateTranslatedText(text) {
    const token = getAuthToken();
    if (!token) throw new Error('Authentication token is missing.');
    if (!token) {
      toast.error('Authentication token is missing.');
    }

    const response = await axios.post(
      `${API_BASE_URL}/`,
      { text },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.response;
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

    const response = await axios.post(
      `${API_BASE_URL}/speech`,
      { text },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("Text translated successfully!");
    return response.data.fileDownloadUrl;
  },
};

export default translateService;
