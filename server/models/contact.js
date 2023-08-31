const connection = require("../db/db.js");

class Contact {
  static async addMessage({ name, email, message }) {
    const result = await connection
      .promise()
      .query(
        "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)",
        [name, email, message]
      );
    return result[0].insertId;
  }

  static async getAllMessages() {
    const [messages] = await connection
      .promise()
      .query("SELECT * FROM contact_messages ORDER BY created_at DESC");
    return messages;
  }

  static async getMessageById(id) {
    const [result] = await connection
      .promise()
      .query("SELECT * FROM contact_messages WHERE id = ?", [id]);
    return result[0];
  }

  static async deleteMessage(id) {
    await connection
      .promise()
      .query("DELETE FROM contact_messages WHERE id = ?", [id]);
  }

  static async countMessages() {
    const [result] = await connection
      .promise()
      .query("SELECT COUNT(*) as totalMessages FROM contact_messages");
    return result[0].totalMessages;
  }
}

module.exports = Contact;
