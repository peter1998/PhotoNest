const connection = require("../db/db.js");

class User {
  static async getAll() {
    const [users] = await connection.promise().query("SELECT * FROM users");
    return users;
  }

  static async getById(id) {
    const [user] = await connection
      .promise()
      .query("SELECT * FROM users WHERE id = ?", [id]);
    return user[0];
  }

  static async createUser({ username, password, email }) {
    const result = await connection
      .promise()
      .query("INSERT INTO users (username, password, email) VALUES (?, ?, ?)", [
        username,
        password,
        email,
      ]);
    return result[0].insertId;
  }

  static async updateUser(id, { username, password, email }) {
    await connection
      .promise()
      .query(
        "UPDATE users SET username = ?, password = ?, email = ? WHERE id = ?",
        [username, password, email, id]
      );
  }

  static async deleteUser(id) {
    await connection.promise().query("DELETE FROM users WHERE id = ?", [id]);
  }

  static async validateCredentials(username, password) {
    const [user] = await connection
      .promise()
      .query("SELECT * FROM users WHERE username = ? AND password = ?", [
        username,
        password,
      ]);
    return user[0];
  }
}

module.exports = User;
