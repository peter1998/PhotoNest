const User = require("../models/user");
const Profile = require("../models/profile");
const Photo = require("../models/photo");
const Contact = require("../models/contact");
const Comment = require("../models/comment");

module.exports = {
  addUser: async (userData) => {
    return await User.createUser(userData);
  },
  getUserById: async (id) => {
    return await User.getById(id);
  },
  validateUserCredentials: async (username, password) => {
    return await User.validateCredentials(username, password);
  },

  getUserProfile: async (userId) => {
    return await Profile.getUserProfile(userId);
  },
  updateUserProfile: async (userId, data) => {
    await Profile.updateProfile(userId, data);
  },
  getUserPhotos: async (userId) => {
    return await Profile.getUserPhotos(userId);
  },

  getAllPhotos: async () => {
    return await Photo.getAll();
  },
  getPhotoById: async (id) => {
    return await Photo.getById(id);
  },
  addPhoto: async (photoData) => {
    return await Photo.addPhoto(photoData);
  },
  updatePhoto: async (id, photoData) => {
    await Photo.updatePhoto(id, photoData);
  },
  deletePhoto: async (id) => {
    await Photo.deletePhoto(id);
  },

  addContactMessage: async (messageData) => {
    return await Contact.addMessage(messageData);
  },
  getAllContactMessages: async () => {
    return await Contact.getAllMessages();
  },
  getContactMessageById: async (id) => {
    return await Contact.getMessageById(id);
  },
  deleteContactMessage: async (id) => {
    await Contact.deleteMessage(id);
  },

  getCommentsByPhotoId: async (photoId) => {
    return await Comment.getByPhotoId(photoId);
  },
  addComment: async (commentData) => {
    return await Comment.addComment(commentData);
  },
  updateComment: async (id, content) => {
    await Comment.updateComment(id, content);
  },
  deleteComment: async (id) => {
    await Comment.deleteComment(id);
  },
};
