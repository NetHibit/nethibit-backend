const ExhibitionService = require('../service/exhibtion.service');

class ExhibitionController{
    exhibitionService = new ExhibitionService();

    createExhibition = async (req, res, next) => {
        const { user_id, title, instroduction, contents, start_date, end_date, like_count, exhibition_category_id } = req.body;

        const createExhibitionData =
          await this.exhibitionService.createExhibition(
            user_id,
            title,
            instroduction,
            contents,
            start_date,
            end_date,
            like_count,
            exhibition_category_id
            );
        res.status(201).json({data:createExhibitionData});
    }
}
module.exports = ExhibitionController;