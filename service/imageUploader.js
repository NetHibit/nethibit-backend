const express = require("express");
const router = express.Router();
const path =require("path");

let AWS = require("aws-sdk");
AWS.config.loadFromPath(__dirname + "/../config/awsconfig.json");
let s3 = new AWS.S3();

const uploadImagesToS3 = async (images) => {
  const uploadedImageUrls = [];

  for (const image of images) {
    const imageKey = Date.now().toString() + path.extname(image.originalname);

    // S3에 이미지 업로드
    await s3
      .upload({
        Key: imageKey,
        Body: image.buffer, // 이미지 파일의 바이너리 데이터
        ContentType: image.mimetype,
        Bucket: "nethibit-bucket/exhibtion", // S3 버킷 이름
        ACL: "public-read-write", // 업로드된 파일 ACL 설정
      })
      .promise();

    // 업로드된 이미지의 S3 URL 획득
    const imageUrl = `https://nethibit-bucket.s3.amazonaws.com/${imageKey}`;

    // 업로드된 이미지의 URL을 배열에 추가
    uploadedImageUrls.push(imageUrl);
  }

  return uploadedImageUrls;
};

module.exports = {
  uploadImagesToS3,
};



