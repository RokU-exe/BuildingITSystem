import apiClient from '../api/client';

export const signup = async (email, password, name) => {
  const response = await apiClient.post('/auth/signup', { email, password, name });
  return response.data;
};

export const login = async (email, password) => {
  const response = await apiClient.post('/auth/login', { email, password });
  return response.data;
};

export const logout = async () => {
  const response = await apiClient.post('/auth/logout');
  return response.data;
};

export const updateProfile = async (name, avatar_url) => {
  const response = await apiClient.put('/profile', { name, avatar_url });
  return response.data;
};

export const updatePassword = async (newPassword) => {
  const response = await apiClient.post('/auth/update-password', { newPassword });
  return response.data;
};
