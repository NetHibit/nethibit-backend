const ExhibitionRepository = require('../repositories/exhibition.repository');

class ExhibitionService {
  exhibitionRespository = new ExhibitionRepository();

  createExhibition = async(
    user_id,
    title,
    instroduction,
    contents,
    start_date,
    end_date,
    like_count,
    exhibition_category_id
  ) => {
      const createExhibitionData = await this.exhibitionRespository.createExhibiton(user_id, title, instroduction, contents, start_date, end_date, like_count, exhibition_category_id);
      return {
        title: createExhibitionData.titl
    }
  }
}