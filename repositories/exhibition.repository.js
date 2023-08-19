const Exhibition = require("../models/exhibition");
const User = require("../models/users");

class ExhibitionRepository {
  findById = async (exhibitionId) => {
    console.log(typeof(exhibitionId));
      const getExhibition = await Exhibition.findByPk(exhibitionId);

      if (!getExhibition) {
        throw new Error("Exhibition not found"); // 데이터가 없을 경우 예외 처리
      }

      return getExhibition;
    
  }
    createExhibition = async (user_id, title, instroduction, contents, start_date, end_date, like_count, exhibition_category_id) => {
      const createExhibitionData = await Exhibition.create({
        user_id,
        title,
        instroduction,
        contents,
        start_date,
        end_date,
        like_count,
        exhibition_category_id,
      });
        return createExhibitionData;
  }
}
module.exports = ExhibitionRepository;