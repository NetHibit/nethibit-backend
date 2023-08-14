const Sequelize = require('sequelize');

class ExhibitionCategory extends Sequelize.Model{
  static initiate(sequelize) {
    ExhibitionCategory.init(
      {
        exhibition_category_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        content: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: true,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: "ExhibitionCategory",
        tableName: "exhibition_category",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.ExhibitionCategory.hasMany(db.Exhibition, {foreignKey: "exhibition_category_id",});
  }
}
module.exports = ExhibitionCategory