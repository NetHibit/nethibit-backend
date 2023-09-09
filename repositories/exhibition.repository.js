const Exhibition = require("../models/exhibition");
const User = require("../models/users");

class ExhibitionRepository {
  findById = async (exhibitionId) => {
      const getExhibition = await Exhibition.findByPk(exhibitionId);

      if (!getExhibition) {
        throw new Error("Exhibition not found"); // 데이터가 없을 경우 예외 처리
      }

      return getExhibition;
    
  }
    createExhibition = async (userId, title, instroduction, mainIamgeUrl,startDate, endDate, exhibitionCategoryId) => {
      const createExhibitionData = await Exhibition.create({
        user_id : userId,
        title,
        instroduction,
        main_image:mainIamgeUrl,
        start_date : startDate,
        end_date:endDate,
        like_count : 0,
        exhibition_category_id : exhibitionCategoryId,
      });
        return createExhibitionData;
  }
}
module.exports = ExhibitionRepository;