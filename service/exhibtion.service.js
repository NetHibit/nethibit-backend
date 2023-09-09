const ExhibitionRepository = require('../repositories/exhibition.repository');
const UserRepository = require("../repositories/user.respository");
const ExhibitionCategoryRepository = require("../repositories/exhibitionCateogory.repository");

class ExhibitionService {
  exhibitionRespository = new ExhibitionRepository();
  userRepository = new UserRepository();
  exhibitionCategoryRepository = new ExhibitionCategoryRepository();
  createExhibition = async(
    userId,
    title,
    instroduction,
    mainIamgeUrl,
    exhibitionCategoryId,
    startDate,
    endDate,
    ) => {
    const getUser = await this.userRepository.findById(userId);
    const getExhibitionCategoryId = await this.exhibitionCategoryRepository.findById(exhibitionCategoryId);
    const createExhibitionData =
      await this.exhibitionRespository.createExhibition(
        getUser.user_id,
        title,
        instroduction,
        mainIamgeUrl,
        startDate,
        endDate,
        getExhibitionCategoryId.exhibition_category_id
      );
    return {
      userId: createExhibitionData.user_id,
      title: title,
      instroduction: instroduction,
      startDate: startDate,
      endDate: endDate,
      exhibitionCategoryId: getExhibitionCategoryId.exhibition_category_id,
    };
  }
}
module.exports = ExhibitionService;