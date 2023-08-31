const express = require("express");
const router = express.Router();
const { sendSuccess, sendError } = require("../../utils/responseHandlers");
const { authenticate, adminOnly } = require("../../middleware/authMiddleware");
const Contact = require("../../models/contact");

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      sendError(res, "All fields are required", 400);
      return;
    }
    await Contact.addMessage(req.body);
    sendSuccess(res, null, "Contact form submitted successfully!");
  } catch (err) {
    sendError(res, err.message);
  }
});

router.get("/admin/all", [authenticate, adminOnly], async (req, res) => {
  try {
    const contactForms = await Contact.getAllMessages();
    sendSuccess(res, contactForms);
  } catch (err) {
    sendError(res, err.message);
  }
});

module.exports = router;
