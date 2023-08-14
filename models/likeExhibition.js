const Sequelize = require('sequelize');

class LikeExhibition extends Sequelize.Model{
  static initiate(sequelize) {
    LikeExhibition.init(
      {
        like_exhibition_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
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
        modelName: "LikeExhibition",
        tableName: "like_exhibition",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db){ 
    db.LikeExhibition.belongsTo(db.Exhibition, { foreignKey: "exhibition_id" });
    db.LikeExhibition.belongsTo(db.User, { foreignKey: "user_id" });
  }
}
module.exports = LikeExhibition;