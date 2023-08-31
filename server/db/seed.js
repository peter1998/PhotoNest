const connection = require("./db.js");

const seedUsers = `
  INSERT INTO users (username, password, email, admin) VALUES 
    ('JohnDoe', 'password123', 'john@example.com', false),
    ('JaneDoe', 'password123', 'jane@example.com', false),
    ('Admin', 'adminpass', 'admin@example.com', true);
`;

const seedPhotos = `
  INSERT INTO photos (user_id, path) VALUES 
    (1, '/images/1.jpg'),
    (1, '/images/2.png'),
    (2, '/images/3.jpg');
`;

const seedComments = `
  INSERT INTO comments (photo_id, user_id, content) VALUES 
    (1, 2, 'Nice photo, John!'),
    (2, 2, 'Another great one!'),
    (3, 1, 'Lovely shot, Jane.');
`;

const seedContacts = `
  INSERT INTO contacts (name, email, message) VALUES 
    ('Visitor1', 'visitor1@example.com', 'Great website!'),
    ('Visitor2', 'visitor2@example.com', 'Loved the photos.');
`;

const seedProfiles = `
  INSERT INTO profiles (user_id, profile_image_path, bio) VALUES 
    (1, '/images/4.jpg', 'Hello, I am John.'),
    (2, '/images/5.png', 'Hello, I am Jane.'),
    (3, '/images/6.png', 'Hello, I am Admin.');
`;

const seedDatabase = async () => {
  try {
    await connection.promise().query(seedUsers);
    console.log("Seeded users.");

    await connection.promise().query(seedPhotos);
    console.log("Seeded photos.");

    await connection.promise().query(seedComments);
    console.log("Seeded comments.");

    await connection.promise().query(seedContacts);
    console.log("Seeded contacts.");

    await connection.promise().query(seedProfiles);
    console.log("Seeded profiles.");

    connection.end();
  } catch (error) {
    console.error("Error seeding database:", error);
    connection.end();
  }
};

seedDatabase();
