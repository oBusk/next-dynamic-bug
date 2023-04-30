/** Function to simulate data fetch via non-`fetch()` */
export async function fakeDataFetch() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Return timestamp so we can tell difference between different fetches
  return new Date().toISOString();
}
