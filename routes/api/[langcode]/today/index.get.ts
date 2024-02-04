// routes/api/[langcode]/today/index.get.ts
// This route handles requests to /api/[langcode]/today endpoint.

export default eventHandler((event) => {
  const langcode: string = event.context.params.langcode;
  const custom: any = getQuery(event).custom || 'EEEE, MMMM dd, yyyy hh:mm a zzz';

  try {
    return generateTodayResponse({ langcode, custom });
  } catch (error) {
    // Handle errors if needed
    console.error(`Error in /api/${langcode}/today route handler:`, error);
    return {
      error: 'Internal Server Error',
      errorMessage: error.message,
    };
  }
});