export default eventHandler(async (event) => {
  let today = new Date();

  return {
    langcode: event.context.params.langcode,
    isoFormat: today.toISOString(),
    dateString: today.toDateString(),
    timeString: today.toTimeString(),
    localeString: today.toLocaleString(),
    customFormat: today.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }),
  };
});