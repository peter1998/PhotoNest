const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Welcome to the Photo Website API!");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
