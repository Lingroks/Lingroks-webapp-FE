import axios from 'axios';
import { toast } from 'react-toastify';

/**
 * Service to generate text summary.
 * @param {string} text - The input text to summarize.
 * @returns {Promise<string>} - The summarized text.
 */

const API_BASE_URL = 'http://localhost:8000/v1/generate';

const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

export const generateTextSummary = async (text) => {
  if (!text) {
    throw new Error('Text is required for summarization');
  }

  // try {
  //     const response = await axios.post('/generate/text-summary', { text });
  //     return response.data.response; // Assuming the response contains a `response` field
  // } catch (error) {
  //     if (error.response && error.response.data && error.response.data.message) {
  //         throw new Error(error.response.data.message);
  //     }
  //     throw new Error('Failed to generate text summary');
  // }

  const token = getAuthToken();
  if (!token) throw new Error('Authentication token is missing.');
  if (!token) {
    toast.error('Authentication token is missing.');
  }

  try {
    const response = await axios.post(
      `${API_BASE_URL}/text-summary`,
      { text },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success('Text translated successfully!');
    return response.data.response;
  } catch (error) {
    toast.error('Error in generating summary.');
    throw error;
  }
};
