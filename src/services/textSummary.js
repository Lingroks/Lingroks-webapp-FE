// services/textSummaryService.js

import axios from "axios";
import { toast } from "react-toastify";
import checkProtectedRoute from "./protectedService"; 

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const SUMMARY_URL = `${BASE_URL}/generate`;

const getAuthToken = () => {
  return localStorage.getItem("authToken");
};

/**
 * Service to generate text summary.
 * @param {string} text - The input text to summarize.
 * @returns {Promise<string>} - The summarized text.
 */
export const generateTextSummary = async (text) => {
  if (!text) {
    throw new Error("Text is required for summarization");
  }

  const token = getAuthToken();
  if (!token) {
    toast.error("Authentication token is missing.");
    throw new Error("Authentication token is missing.");
  }

  try {
    // ✅ Step 1: Check protected route before proceeding
    await checkProtectedRoute();

    // Step 2: Proceed with summarization
    const response = await axios.post(
      `${SUMMARY_URL}/text-summary`,
      { text },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("Text summarized successfully!");
    return response.data.response;
  } catch (error) {
    toast.error("Error in generating summary.");
    throw error;
  }
};
