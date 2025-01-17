import { toast } from 'react-toastify';

/**
 * Copies the provided text to the clipboard and shows appropriate toast messages.
 *
 * @param {string} text - The text to copy to the clipboard.
 */
export const copyToClipboard = (text) => {
  if (!text) {
    toast.error('No text to copy!');
    return;
  }

  navigator.clipboard
    .writeText(text)
    .then(() => {
      toast.success('Text copied to clipboard!');
    })
    .catch((err) => {
      console.error('Failed to copy text:', err);
      toast.error('Failed to copy text. Try again.');
    });
};
