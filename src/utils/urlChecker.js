/**
 * Checks if the given string is a valid URL.
 * @param {string} string - The string to check.
 * @returns {boolean} - True if the string is a valid URL, false otherwise.
 */
export const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };