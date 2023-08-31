const connection = require("../db/db.js");

const createUsersTable = `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL, 
    email VARCHAR(255) NOT NULL UNIQUE,
    admin BOOLEAN DEFAULT FALSE,
    number_of_photos INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`;

const createPhotosTable = `
  CREATE TABLE IF NOT EXISTS photos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    path VARCHAR(255) NOT NULL,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
  )
`;

const createCommentsTable = `
  CREATE TABLE IF NOT EXISTS comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    photo_id INT,
    user_id INT,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (photo_id) REFERENCES photos(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
  )
`;

const createContactsTable = `
  CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`;

const createProfilesTable = `
  CREATE TABLE IF NOT EXISTS profiles (
    user_id INT PRIMARY KEY,
    profile_image_path VARCHAR(255),
    bio TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
  )
`;

const setupDatabase = async () => {
  try {
    await connection.promise().query(createUsersTable);
    console.log("Users table created or already exists.");

    await connection.promise().query(createPhotosTable);
    console.log("Photos table created or already exists.");

    await connection.promise().query(createCommentsTable);
    console.log("Comments table created or already exists.");

    await connection.promise().query(createContactsTable);
    console.log("Contacts table created or already exists.");

    await connection.promise().query(createProfilesTable);
    console.log("Profiles table created or already exists.");

    connection.end();
  } catch (error) {
    console.error("Error setting up database:", error);
    connection.end();
  }
};

setupDatabase();
