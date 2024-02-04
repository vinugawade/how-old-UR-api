// routes/api/today/index.ts
// This route handles requests to /api/today endpoint.
export default async (event: { context: { params: { langcode?: string; }; query: { custom?: string } } }): Promise<any> => {
  try {
    return await $fetch('/api/en/today');
  } catch (error) {
    // Handle errors if needed
    console.error(`Error in /api/today route handler:`, error);
    return {
      error: 'Internal Server Error',
      errorMessage: error.message,
    };
  }
};