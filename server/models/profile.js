const connection = require("../db/db.js");

class Profile {
  static async getUserProfile(userId) {
    const [user] = await connection
      .promise()
      .query("SELECT username, email, created_at FROM users WHERE id = ?", [
        userId,
      ]);
    return user[0];
  }

  static async updateProfile(userId, { username, email, password }) {
    await connection
      .promise()
      .query(
        "UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?",
        [username, email, password, userId]
      );
  }

  static async getUserPhotos(userId) {
    const [photos] = await connection
      .promise()
      .query(
        "SELECT * FROM photos WHERE user_id = ? ORDER BY uploaded_at DESC",
        [userId]
      );
    return photos;
  }

  static async deletePhoto(userId, photoId) {
    await connection
      .promise()
      .query("DELETE FROM photos WHERE id = ? AND user_id = ?", [
        photoId,
        userId,
      ]);
  }

  static async countUserPhotos(userId) {
    const [result] = await connection
      .promise()
      .query("SELECT COUNT(*) as totalPhotos FROM photos WHERE user_id = ?", [
        userId,
      ]);
    return result[0].totalPhotos;
  }

  static async changePassword(userId, newPassword) {
    await connection
      .promise()
      .query("UPDATE users SET password = ? WHERE id = ?", [
        newPassword,
        userId,
      ]);
  }
}

module.exports = Profile;
