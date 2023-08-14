const Sequelize = require("sequelize");

class Scrap extends Sequelize.Model{
  static initiate(sequelize) {
    Scrap.init(
      {
        scrap_id: {
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
        modelName: "Scrap",
        tableName: "scrap",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Scrap.belongsTo(db.Goods, { foreignKey: "goods_id" });
    db.Scrap.belongsTo(db.User, { foreignKey: "user_id" });
  }
}
module.exports = Scrap;
