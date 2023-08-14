const Sequelize = require("sequelize");

class Goods extends Sequelize.Model{
  static initiate(sequelize) {
    Goods.init(
      {
        goods_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        content: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        title: Sequelize.STRING,
        contents: Sequelize.STRING,
        price: Sequelize.INTEGER,
        soldout: Sequelize.BOOLEAN,
        created_at: {
          type: Sequelize.DATE,
          allowNull: true,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: "Goods",
        tableName: "goods",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Goods.belongsTo(db.User, { foreignKey: "user_id" });
    db.Goods.belongsTo(db.GoodsCategory, { foreignKey: "goods_category_id" });
    db.Goods.hasMany(db.GoodsImage, { foreignKey: "goods_id" });
    db.Goods.hasMany(db.Review, { foreignKey: "goods_id" });
    db.Goods.hasMany(db.Transaction, { foreignKey: "goods_id" });
    db.Goods.hasMany(db.Scrap, { foreignKey: "goods_id" });
  }
}

module.exports = Goods;
