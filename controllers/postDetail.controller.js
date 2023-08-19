const PostDetailService = require("../service/postDetail.service");

class PostDetailController{
    postDetailService = new PostDetailService();

    createPostDetail = async (req, res, next) => {
      const { title, content, exhibitionId } = req.body;
      console.log(exhibitionId);
        const createPostDetailData =
          await this.postDetailService.createPostDetail(
            title,
            content,
            exhibitionId
          );
        res.status(201).json({data:createPostDetailData});
    }
}
module.exports = PostDetailController;