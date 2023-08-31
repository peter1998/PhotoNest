const express = require("express");
const router = express.Router();
const Comment = require("../../models/Comment");
const {
  sendSuccess,
  sendError,
  sendBadRequest,
} = require("../../utils/responseHandlers");
const { authenticate } = require("../../middleware/authMiddleware");

router.post("/:photoId", authenticate, async (req, res) => {
  try {
    const { photoId } = req.params;
    const { content } = req.body;
    const commentId = await Comment.addComment({
      content: content,
      user_id: req.user.id,
      photo_id: photoId,
    });

    sendSuccess(res, { commentId: commentId }, "Comment added successfully!");
  } catch (error) {
    sendError(res, error.message);
  }
});

router.get("/:photoId", async (req, res) => {
  try {
    const { photoId } = req.params;
    const comments = await Comment.getByPhotoId(photoId);

    if (comments.length > 0) {
      sendSuccess(res, comments);
    } else {
      sendBadRequest(res, "No comments found for this photo.");
    }
  } catch (error) {
    sendError(res, error.message);
  }
});

router.delete("/:commentId", authenticate, async (req, res) => {
  try {
    const { commentId } = req.params;

    await Comment.deleteComment(commentId);
    sendSuccess(res, null, "Comment deleted successfully!");
  } catch (error) {
    sendError(res, error.message);
  }
});

module.exports = router;
