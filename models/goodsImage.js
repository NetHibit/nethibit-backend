const Sequelize = require("sequelize");


class GoodsImage extends Sequelize.Model{
  static initiate(sequelize) {
    GoodsImage.init(
      {
        goods_image_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        image_url: {
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
        modelName: "GoodsImage",
        tableName: "goods_image",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.GoodsImage.belongsTo(db.Goods, { foreignKey: "goods_id" });
  }
}
module.exports = GoodsImage;
