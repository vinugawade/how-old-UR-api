// utils/languageUtils.ts
// This module provides utility functions related to language codes.

// Default language code if not provided or invalid
const defaultLanguage = 'en';

/**
 * Validates and sets the language code.
 * @param {string} langcode - The language code to validate.
 * @returns {string} - The validated language code or default language if invalid.
 * @throws {Error} - If the provided language code is invalid.
 */
export const validateAndSetLanguage = (langcode: string): string => {
  // List of supported language codes
  const supportedLanguages = ['hi', 'es', 'fr', 'de', 'it', 'ja', 'ko', 'pt', 'ru', 'zh', 'ar', 'en', 'nl'];

  if (!langcode || !supportedLanguages.includes(langcode)) {
    throw new Error(`Invalid or missing language code. Using default language: ${defaultLanguage}`);
  }

  return langcode;
};
