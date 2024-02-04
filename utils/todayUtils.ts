// utils/todayUtils.ts

/**
 * Common logic to generate the response object for today's date and time details.
 * @param {Object} param - The param object representing the incoming request.
 * @returns {Object} - Response object with today's date and time details.
 */
export function generateTodayResponse(param: { langcode?: string; }): any {
  // Get the user-specified language code from the route params or default to 'en'
  const langcode = param.langcode;

  // Validate and set the language code
  const validatedLangcode = validateAndSetLanguage(langcode);

  // Get today's date and time
  const today = new Date();

  // Response object with today's date and time details
  const response = {
    langcode: validatedLangcode,
    formats: {
      isoString: today.toISOString(),
      dateString: today.toDateString(),
      timeString: today.toTimeString(),
      localeString: today.toLocaleString(),
      fullString: new Intl.DateTimeFormat(validatedLangcode, {
        dateStyle: 'full',
        timeStyle: 'long',
      }).format(today),
    },
  };

  return response;
}
