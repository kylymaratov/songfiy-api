export const baseUrl =
  import.meta.env.MODE === 'production'
    ? '/api/v1'
    : 'http://localhost:5000/api/v1';
