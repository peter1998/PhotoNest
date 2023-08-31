require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(cors());

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Welcome to the Photo Website API!");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
