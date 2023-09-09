const ExhibitionService = require("../service/exhibtion.service");
const ImageUploader = require("../service/imageUploader");
class ExhibitionController{
    exhibitionService = new ExhibitionService();

    createExhibition = async (req, res, next) => {
        const userId = req.body.userId;
        const title = req.body.title;
        const instroduction = req.body.instroduction;
        const startDate = req.body.startDate;
        const endDate = req.body.endDate;
        const mainImageUrl = req.body.mainImageUrl;
        const exhibitionCategoryId = req.body.exhibitionCategoryId;
        const postDetail = JSON.parse(req.body.postDetail);
        const image = req.files;
        const postImages = image.postImages;
        const uploadImageUrls = await ImageUploader.uploadImagesToS3(postImages);
        // const postDetailPath = postImages.map(img => img.path); // 일단 로컬 주소 저장 후에 s3에 저장된 url 주소를 저장하는 식으로 바꿀예정

        const createExhibitionData = await this.exhibitionService.createExhibition(
          userId,
          title,
          instroduction,
          mainImageUrl,
          exhibitionCategoryId,
          startDate,
          endDate
        );
        res.status(201).json({ uploadImageUrls });
    }
}
module.exports = ExhibitionController;