const Sequelize = require("sequelize");

class Following extends Sequelize.Model{
  static initiate(sequelize) {
    Following.init(
      {
        followers_id: {
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
        modelName: "Following",
        tableName: "following",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Following.belongsTo(db.User, { foreignKey: "my_id" });
    db.Following.belongsTo(db.User, { foreignKey: "following_user_id" });
  }
}
module.exports = Following;
