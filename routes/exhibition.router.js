const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB 이하 파일 크기 제한 (필요에 따라 조절)
});

const ExhibitionController = require('../controllers/exhibiton.controller');
const exhibitionController = new ExhibitionController();
const multidata = upload.fields([{ name: "userId" }, { name: "title" }, { name: "instroduction" }, { name: "startDate" }, { name: "endDate" }, { name: "mainImageUrl" }, { name: "exhibitionCategoryId" }, { name: "postDetail" }, { name: "postImages", maxCount: 10 }]);
router.post('/create', multidata,exhibitionController.createExhibition);
module.exports = router;