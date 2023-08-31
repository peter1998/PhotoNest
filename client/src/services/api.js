import axios from "axios";

const API_URL = "http://localhost:5000/api";

const api = {
  // User routes
  registerUser: (data) => {
    return axios.post(`${API_URL}/users/register`, data);
  },

  loginUser: (data) => {
    return axios.post(`${API_URL}/users/login`, data);
  },

  logoutUser: () => {
    return axios.get(`${API_URL}/users/logout`);
  },

  getUserById: (id) => {
    return axios.get(`${API_URL}/users/${id}`);
  },

  updateUser: (id, data) => {
    return axios.put(`${API_URL}/users/${id}/update`, data);
  },

  getAllUsers: () => {
    return axios.get(`${API_URL}/users/all`);
  },

  deleteUser: (id) => {
    return axios.delete(`${API_URL}/users/${id}`);
  },

  // Profile routes
  getProfile: (userId) => {
    return axios.get(`${API_URL}/profiles/${userId}`);
  },

  updateProfile: (userId, data) => {
    return axios.put(`${API_URL}/profiles/${userId}`, data);
  },

  // Photo routes
  uploadPhoto: (photoData) => {
    return axios.post(`${API_URL}/photos/upload`, photoData);
  },

  getAllPhotos: () => {
    return axios.get(`${API_URL}/photos`);
  },

  getPhoto: (photoId) => {
    return axios.get(`${API_URL}/photos/${photoId}`);
  },

  deletePhoto: (photoId) => {
    return axios.delete(`${API_URL}/photos/${photoId}`);
  },

  getAdminPhotos: () => {
    return axios.get(`${API_URL}/photos/admin/all`);
  },

  // Comment routes
  addComment: (photoId, commentData) => {
    return axios.post(`${API_URL}/comments/${photoId}`, commentData);
  },

  getComments: (photoId) => {
    return axios.get(`${API_URL}/comments/${photoId}`);
  },

  deleteComment: (commentId) => {
    return axios.delete(`${API_URL}/comments/${commentId}`);
  },

  // Contact routes
  submitContactForm: (data) => {
    return axios.post(`${API_URL}/contacts`, data);
  },

  getAllContactForms: () => {
    return axios.get(`${API_URL}/contacts/admin/all`);
  },
};

export default api;
