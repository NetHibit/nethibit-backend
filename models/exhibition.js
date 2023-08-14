const Sequelize = require("sequelize");

class Exhibition extends Sequelize.Model {
  static initiate(sequelize) {
    Exhibition.init(
      {
        exhibition_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        title: Sequelize.STRING,
        main_image: Sequelize.STRING,
        introduction: Sequelize.STRING,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
        like_count: Sequelize.INTEGER,
        created_at: {
          type: Sequelize.DATE,
          allowNull: true,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: "Exhibition",
        tableName: "exhibitions",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Exhibition.belongsTo(db.User, { foreignKey: "user_id" });
    db.Exhibition.belongsTo(db.ExhibitionCategory, {foreignKey: "exhibition_category_id",});
    db.Exhibition.hasMany(db.LikeExhibition, { foreignKey: "exhibition_id" });
    db.Exhibition.hasMany(db.PostDetail, { foreignKey: "exhibition_id" });
    db.Exhibition.hasMany(db.Guestbook, { foreignKey: "exhibition_id" });
  }
}
module.exports = Exhibition;
