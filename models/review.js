const Sequelize = require("sequelize");

class Review extends Sequelize.Model{
  static initiate(sequelize) {
    Review.init(
      {
        review_id: {
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
        modelName: "Review",
        tableName: "review",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Review.belongsTo(db.User, { foreignKey: "user_id" });
    db.Review.belongsTo(db.Goods, { foreignKey: "goods_id" });
  }
}

module.exports = Review;
