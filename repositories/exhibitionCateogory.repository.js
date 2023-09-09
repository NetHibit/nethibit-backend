const ExhibitionCategory = require("../models/exhibitionCategory");

class ExhibitionCategoryRepository {
    findById = async (exhibitionCategoryId) => {
        const getExhibitionCategory = await ExhibitionCategory.findByPk(exhibitionCategoryId);
        
        if (!exhibitionCategoryId) {
            throw new Error("Invalid value");
        }
        return getExhibitionCategory;

    }
    
}

module.exports = ExhibitionCategoryRepository;