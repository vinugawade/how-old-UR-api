// routes/api/today/index.ts
// This route handles requests to /api/today endpoint.
export default eventHandler((event) => {
  try {
    return $fetch(`/api/en/today`, {
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