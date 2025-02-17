// // services/translateService.js

import axios from "axios";
import { toast } from "react-toastify";
import detectLanguageService from "./detectService";
import checkProtectedRoute from "./protectedService"; 
import axiosInstance from "../utils/axoisInstance"; 

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
// const TRANSLATE_URL = `${BASE_URL}/translate`;

// // Fetch auth token from localStorage
// const getAuthToken = () => {
//   return localStorage.getItem("authToken");
// };

// const translateService = {
//   async generateTranslatedText(text, targetLanguage) {
//     const token = getAuthToken();
//     if (!token) {
//       toast.error("Authentication token is missing.");
//       throw new Error("Authentication token is missing.");
//     }

//     try {
//       // ✅ Step 1: Check protected route before proceeding
//       await checkProtectedRoute();

//       // Step 2: Detect language
//       const detectedLanguage = await detectLanguageService.detectLanguage(text);
//       if (!detectedLanguage || detectedLanguage.error) {
//         toast.error("Error in language detection.");
//         throw new Error("Language detection failed.");
//       }

//       // Step 3: Proceed to translation
//       const response = await axios.post(
//         `${TRANSLATE_URL}/`,
//         { text, targetLanguage },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       toast.success("Text translated successfully!");
//       console.log(response.data.response);
//       return response.data.response[targetLanguage];
//     } catch (error) {
//       toast.error("Error in translation.");
//       throw error;
//     }
//   },

//   async translateUrlPageContent(url, targetLanguage) {
//     const token = getAuthToken();
//     if (!token) throw new Error("Authentication token is missing.");

//     try {
//       // ✅ Check protected route before proceeding
//       await checkProtectedRoute();

//       const response = await axios.post(
//         `${TRANSLATE_URL}/url`,
//         { url, targetLanguage },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       toast.success("Page translated successfully!");
//       console.log(response.data.response);
//       return response.data.response;
//     } catch (error) {
//       toast.error("Error in translation.");
//       throw error;
//     }
//   },

//   async generateSpeech(text) {
//     const token = getAuthToken();
//     if (!token) {
//       toast.error("Authentication token is missing.");
//       throw new Error("Authentication token is missing.");
//     }

//     try {
//       // ✅ Check protected route before proceeding
//       await checkProtectedRoute();

//       const response = await axios.post(
//         `${TRANSLATE_URL}/speech`,
//         { text },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       toast.success("Audio generated successfully!");
//       return response.data.fileDownloadUrl;
//     } catch (error) {
//       toast.error("Error in generating audio.");
//       throw error;
//     }
//   },
// };

// export default translateService;

// services/translateService.js


const TRANSLATE_URL = "/translate"; // Base URL is already set in axiosInstance

const translateService = {
  async generateTranslatedText(text, targetLanguage) {
    try {
      // ✅ Step 1: Check protected route before proceeding
      await checkProtectedRoute();

      // Step 2: Detect language
      const detectedLanguage = await detectLanguageService.detectLanguage(text);
      if (!detectedLanguage || detectedLanguage.error) {
        toast.error("Error in language detection.");
        throw new Error("Language detection failed.");
      }

      // Step 3: Proceed to translation
      const response = await axiosInstance.post(`${TRANSLATE_URL}/`, {
        text,
        targetLanguage,
      });

      toast.success("Text translated successfully!");
      console.log(response.data.response);
      return response.data.response[targetLanguage];
    } catch (error) {
      toast.error("Error in translation.");
      throw error;
    }
  },

  async translateUrlPageContent(url, targetLanguage) {
    try {
      // ✅ Check protected route before proceeding
      await checkProtectedRoute();

      const response = await axiosInstance.post(`${TRANSLATE_URL}/url`, {
        url,
        targetLanguage,
      });

      toast.success("Page translated successfully!");
      console.log(response.data.response);
      return response.data.response;
    } catch (error) {
      toast.error("Error in translation.");
      throw error;
    }
  },

  async generateSpeech(text) {
    try {
      // ✅ Check protected route before proceeding
      await checkProtectedRoute();

      const response = await axiosInstance.post(`${TRANSLATE_URL}/speech`, {
        text,
      });

      toast.success("Audio generated successfully!");
      return response.data.fileDownloadUrl;
    } catch (error) {
      toast.error("Error in generating audio.");
      throw error;
    }
  },
};

export default translateService;
