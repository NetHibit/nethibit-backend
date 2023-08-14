const { Exhibition,User } = require('../models/models');

class ExhibitionRepository {
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