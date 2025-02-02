import axios from 'axios';
import { toast } from 'react-toastify';

/**
 * Service to generate text insights.
 * @param {string | string[]} document - The input document(s) to analyze.
 * @param {string} analysisType - The type of analysis to perform.
 * @returns {Promise<Object>} - The analyzed insight.
 */

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const INSIGHT_URL = `${BASE_URL}/text-insight`; // Removed extra `/` at the end

const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

export const generateTextInsight = async (document, analysisType) => {
  if (!document || (Array.isArray(document) && document.length === 0)) {
    throw new Error('Document is required for text insight');
  }
  if (!analysisType) {
    throw new Error('Analysis type is required');
  }

  const token = getAuthToken();
  if (!token) {
    toast.error('Authentication token is missing.');
    throw new Error('Authentication token is missing.');
  }

  try {
    const payload = {
      document: Array.isArray(document) ? document : [document], // Ensure array format
      analysisType,
    };

    console.log('Sending payload:', JSON.stringify(payload, null, 2)); // Debugging

    const response = await axios.post(INSIGHT_URL, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json', // Ensure JSON format
      },
    });

    toast.success('Text insight generated successfully!');
    return response.data;
  } catch (error) {
    console.error('API Error:', error?.response?.data || error.message); // Debugging

    toast.error('Error in generating text insight.');
    throw error;
  }
};
