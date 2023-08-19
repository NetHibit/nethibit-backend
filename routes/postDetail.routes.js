const express = require('express');
const router = express.Router();

const PostDetailController = require("../controllers/postDetail.controller");
const postDetailController = new PostDetailController();
router.post('/create', postDetailController.createPostDetail);

module.exports = router;