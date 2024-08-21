import axios from 'axios';

const API_URL = 'http://localhost:8000'; // Adjust this to your backend's URL and port

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// API related functions

export const fetchData = async () => {
  const response = await fetch('/api/data');
  return response.json();
};

export default apiClient;
