const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const {
  sendSuccess,
  sendError,
  sendBadRequest,
} = require("../../utils/responseHandlers");

const { addUser, getUserById: getUser } = require("../../utils/dbOperations");

const {
  ensureAuthenticated: authenticate,
  ensureAdmin: authorizeAdmin,
} = require("../../middleware/authentication");

router.post("/register", async (req, res) => {
  try {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
      return sendBadRequest(res, "All fields are required");
    }
    const userId = await addUser({ username, password, email });
    sendSuccess(res, { userId: userId }, "User registered successfully!");
  } catch (err) {
    console.error("Error occurred:", err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.validateCredentials(username, password);
    if (user) {
      sendSuccess(res, user, "Login successful!");
    } else {
      sendBadRequest(res, "Invalid credentials");
    }
  } catch (err) {
    console.error("Error occurred:", err);
    sendError(res, err.message);
  }
});

router.get("/logout", authenticate, (req, res) => {
  sendSuccess(res, null, "Logout successful!");
});

router.get("/all", [authenticate, authorizeAdmin], async (req, res) => {
  try {
    const users = await User.getAll();
    sendSuccess(res, users);
  } catch (err) {
    console.error("Error occurred:", err);
    sendError(res, err.message);
  }
});

router.get("/:id", authenticate, async (req, res) => {
  try {
    const user = await getUser(req.params.id);
    if (user) {
      sendSuccess(res, user);
    } else {
      sendError(res, "User not found", 404);
    }
  } catch (err) {
    console.error("Error occurred:", err);
    sendError(res, err.message);
  }
});

router.put("/:id/update", authenticate, async (req, res) => {
  try {
    const { username, password, email } = req.body;
    await User.updateUser(req.params.id, { username, password, email });
    sendSuccess(res, null, "User updated successfully!");
  } catch (err) {
    console.error("Error occurred:", err);
    sendError(res, err.message);
  }
});

router.delete("/:id", [authenticate, authorizeAdmin], async (req, res) => {
  try {
    await User.deleteUser(req.params.id);
    sendSuccess(res, null, "User deleted successfully!");
  } catch (err) {
    console.error("Error occurred:", err);
    sendError(res, err.message);
  }
});

module.exports = router;
