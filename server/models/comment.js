const connection = require("../db/db.js");

class Comment {
  static async getByPhotoId(photoId) {
    const [comments] = await connection
      .promise()
      .query(
        "SELECT * FROM comments WHERE photo_id = ? ORDER BY created_at DESC",
        [photoId]
      );
    return comments;
  }

  static async addComment({ content, user_id, photo_id }) {
    const result = await connection
      .promise()
      .query(
        "INSERT INTO comments (content, user_id, photo_id) VALUES (?, ?, ?)",
        [content, user_id, photo_id]
      );
    return result[0].insertId;
  }

  static async updateComment(id, { content }) {
    await connection
      .promise()
      .query("UPDATE comments SET content = ? WHERE id = ?", [content, id]);
  }

  static async deleteComment(id) {
    await connection.promise().query("DELETE FROM comments WHERE id = ?", [id]);
  }

  static async countCommentsByPhoto(photoId) {
    const [result] = await connection
      .promise()
      .query(
        "SELECT COUNT(*) as totalComments FROM comments WHERE photo_id = ?",
        [photoId]
      );
    return result[0].totalComments;
  }

  static async getCommentsByUser(user_id) {
    const [comments] = await connection
      .promise()
      .query(
        "SELECT * FROM comments WHERE user_id = ? ORDER BY created_at DESC",
        [user_id]
      );
    return comments;
  }
}

module.exports = Comment;
