const postController = require("../controllers/postController");
const express = require("express");
const router = express.Router();


router.post("/create", postController.create_post);

router.get("/posts", postController.getpost);


module.exports = router;
