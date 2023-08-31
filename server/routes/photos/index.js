const express = require("express");
const multer = require("multer");
const router = express.Router();
const { sendSuccess, sendError } = require("../../utils/responseHandlers");
const { authenticate, adminOnly } = require("../../middleware/authMiddleware");
const {
  uploadPhotoToDatabase,
  getAllPhotos,
  getPhoto,
  deletePhoto,
  getPhotosWithComments,
} = require("../../utils/dbOperations");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post(
  "/upload",
  authenticate,
  upload.single("photo"),
  async (req, res) => {
    try {
      const uploadedPhoto = await uploadPhotoToDatabase(req.file, req.user.id);
      sendSuccess(res, uploadedPhoto, "Photo uploaded successfully!");
    } catch (err) {
      sendError(res, err.message);
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const photos = await getAllPhotos();
    sendSuccess(res, photos);
  } catch (err) {
    sendError(res, err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const photo = await getPhoto(req.params.id);
    if (photo) {
      sendSuccess(res, photo);
    } else {
      sendError(res, "Photo not found", 404);
    }
  } catch (err) {
    sendError(res, err.message);
  }
});

router.delete("/:id", authenticate, async (req, res) => {
  try {
    const result = await deletePhoto(req.params.id, req.user.id);
    sendSuccess(res, null, result.message);
  } catch (err) {
    sendError(res, err.message);
  }
});

router.get("/admin/all", [authenticate, adminOnly], async (req, res) => {
  try {
    const photos = await getPhotosWithComments();
    sendSuccess(res, photos);
  } catch (err) {
    sendError(res, err.message);
  }
});

module.exports = router;
