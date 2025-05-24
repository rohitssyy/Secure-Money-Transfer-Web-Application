import axios from 'axios';

// Use environment variable (recommended)
const BASE_URL = import.meta.env.VITE_API_URL;

// Reusable axios instance
const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // optional: if you send cookies
});

export default api;
