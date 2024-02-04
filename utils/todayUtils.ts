// utils/todayUtils.ts

/**
 * Common logic to generate the response object for today's date and time details.
 * @param {Object} param - The param object representing the incoming request.
 * @returns {Object} - Response object with today's date and time details.
 */
export function generateTodayResponse(param: { langcode?: string; custom?: string }): any {
  // Get the user-specified language code from the route params or default to 'en'
  const langcode = param.langcode;
  const custom = param.custom;

  // Validate and set the language code
  const validatedLangcode = validateAndSetLanguage(langcode);

  // Get today's date and time
  const today = new Date();

  // Response object with today's date and time details
  const response = {
    langcode: validatedLangcode,
    formats: {
      isoFormat: today.toISOString(),
      dateString: today.toDateString(),
      timeString: today.toTimeString(),
      localeString: today.toLocaleString(),
      customFormat: getCustomFormattedDate(today, validatedLangcode, custom),
    },
  };

  return response;
}

/**
 * Function to get a custom-formatted date based on the provided format.
 * @param {Date} date - The date object to format.
 * @param {string} langcode - The language code for localization.
 * @param {string} format - The custom date format.
 * @returns {string} - The formatted date string.
 */
function getCustomFormattedDate(date: Date, langcode: string, format: string): string {
  const customFormatOptions: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  return new Intl.DateTimeFormat(langcode, customFormatOptions).format(date);
}
