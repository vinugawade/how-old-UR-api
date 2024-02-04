// routes/api/[langcode]/today/index.get.ts
// This route handles requests to /api/[langcode]/today endpoint.

export default async (event: { context: { params: { langcode?: string; }; query: { custom?: string } } }): Promise<any> => {
  let langcode = event.context.params.langcode;
  try {
    return generateTodayResponse(event);
  } catch (error) {
    // Handle errors if needed
    console.error(`Error in /api/${langcode}/today route handler:`, error);
    return {
      error: 'Internal Server Error',
      errorMessage: error.message,
    };
  }
};