const postController = require("../controllers/postController");
const express = require("express");
const router = express.Router();

router.get("/posts", postController.getpost);

// router.post("/create", postController.create_post);
router.post("/create", postController.create_post);

module.exports = router;
