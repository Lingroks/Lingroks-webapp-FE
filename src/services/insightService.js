import axios from 'axios';
import { toast } from 'react-toastify';


/**
 * Service to generate text insights.
 * @param {string} document - The input document to analyze.
 * @param {string} analysisType - The type of analysis to perform.
 * @returns {Promise<Object>} - The analyzed insight.
 */

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const INSIGHT_URL = `${BASE_URL}/text-insight`;

const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

export const generateTextInsight = async (document, analysisType) => {
  if (!document) {
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
    const response = await axios.post(
      `${INSIGHT_URL}/`,
      { document, analysisType },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success('Text insight generated successfully!');
    return response.data;
  } catch (error) {
    toast.error('Error in generating text insight.');
    throw error;
  }
};
