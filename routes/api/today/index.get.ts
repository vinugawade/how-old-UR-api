// routes/api/today/index.ts
// This route handles requests to /api/today endpoint.
export default eventHandler((event) => {
  try {
    const custom: any = getQuery(event).custom || '';
    return $fetch(`/api/en/today?custom=${custom}`, {
        method: 'GET',
      }
    );
  } catch (error) {
    // Handle errors if needed
    console.error(`Error in /api/today route handler:`, error);
    return {
      error: 'Internal Server Error',
      errorMessage: error.message,
    };
  }
});