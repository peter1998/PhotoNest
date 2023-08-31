const express = require("express");
const router = express.Router();
const {
  sendSuccess,
  sendError,
  sendBadRequest,
} = require("../../utils/responseHandlers");
const Profile = require("../../models/profile");
const { authenticate } = require("../../middleware/authMiddleware");

router.put("/:userId", authenticate, async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (req.user.id !== req.params.userId) {
      return sendBadRequest(res, "You can only update your own profile");
    }

    await Profile.updateProfile(req.params.userId, {
      username,
      email,
      password,
    });
    sendSuccess(res, null, "Profile updated successfully!");
  } catch (err) {
    sendError(res, err.message);
  }
});

router.get("/:userId", authenticate, async (req, res) => {
  try {
    const profile = await Profile.getUserProfile(req.params.userId);
    if (profile) {
      sendSuccess(res, profile);
    } else {
      sendError(res, "Profile not found", 404);
    }
  } catch (err) {
    sendError(res, err.message);
  }
});

module.exports = router;
