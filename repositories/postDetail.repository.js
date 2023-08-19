const PostDetail = require("../models/postDetail");
const Exhibition = require("../models/exhibition")
class PostDetailRepository {
    createPostDetail = async (title, content, exhibition) => {
      const createPostDetail = await PostDetail.create({
        title,
        content,
        exhibition_id: exhibition.exhibition_id,
      });
        return createPostDetail;
  }
}
module.exports = PostDetailRepository;