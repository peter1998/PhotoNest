const connection = require("../db/db.js");

class Photo {
  static async getAll() {
    const [photos] = await connection
      .promise()
      .query("SELECT * FROM photos ORDER BY upload_date DESC");
    return photos;
  }

  static async getPhotosWithPagination(offset, limit) {
    const [photos] = await connection
      .promise()
      .query(
        "SELECT * FROM photos ORDER BY upload_date DESC LIMIT ? OFFSET ?",
        [limit, offset]
      );
    return photos;
  }

  static async getById(id) {
    const [photo] = await connection
      .promise()
      .query("SELECT * FROM photos WHERE id = ?", [id]);
    return photo[0];
  }

  static async addPhoto({ title, description, url, user_id }) {
    const result = await connection
      .promise()
      .query(
        "INSERT INTO photos (title, description, url, user_id) VALUES (?, ?, ?, ?)",
        [title, description, url, user_id]
      );
    return result[0].insertId;
  }

  static async updatePhoto(id, { title, description, url }) {
    await connection
      .promise()
      .query(
        "UPDATE photos SET title = ?, description = ?, url = ? WHERE id = ?",
        [title, description, url, id]
      );
  }

  static async deletePhoto(id) {
    await connection.promise().query("DELETE FROM photos WHERE id = ?", [id]);
  }

  static async countPhotos() {
    const [result] = await connection
      .promise()
      .query("SELECT COUNT(*) as totalPhotos FROM photos");
    return result[0].totalPhotos;
  }

  static async getPhotosByUser(user_id) {
    const [photos] = await connection
      .promise()
      .query(
        "SELECT * FROM photos WHERE user_id = ? ORDER BY upload_date DESC",
        [user_id]
      );
    return photos;
  }
}

module.exports = Photo;
