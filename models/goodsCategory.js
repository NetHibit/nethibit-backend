const Sequelize = require("sequelize");

class GoodsCategory extends Sequelize.Model{
  static initiate(sequelize) {
    GoodsCategory.init(
      {
        goods_category_id: {
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
        modelName: "GoodsCategory",
        tableName: "goods_category",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.GoodsCategory.hasMany(db.Goods, { foreignKey: "goods_category_id" });
  }
}
module.exports = GoodsCategory;
