const connection = require("../db/db.js");

class Profile {
  static async getByUserId(userId) {
    const [profile] = await connection
      .promise()
      .query("SELECT * FROM profiles WHERE user_id = ?", [userId]);
    return profile[0];
  }

  // ... Add other methods as needed (e.g., createProfile, updateProfile)
}

module.exports = Profile;
