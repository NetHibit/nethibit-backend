const PostDetailRepository = require("../repositories/postDetail.repository");
const ExhibitionRepository = require("../repositories/exhibition.repository");
const { create } = require("../models/postDetail");

class PostDetailService {
    postDetailRepository = new PostDetailRepository();
    exhibitionRepository = new ExhibitionRepository();

    createPostDetail = async (title, content, exhibitionId) => {
        const getExhibition = await this.exhibitionRepository.findById(exhibitionId);
        const createPostDetailData = await this.postDetailRepository.createPostDetail(title, content, getExhibition);
        return {
          postDetailId: createPostDetailData.post_detail_id,
        };
    }
}
module.exports = PostDetailService;