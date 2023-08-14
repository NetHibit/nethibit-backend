const Sequelize = require("sequelize");

class Mypage extends Sequelize.Model{
  static initiate(sequelize) {
    Mypage.init(
      {
        mypage_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        profileImage_url: Sequelize.STRING,
        introduction: Sequelize.STRING,
        created_at: {
          type: Sequelize.DATE,
          allowNull: true,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: "Mypage",
        tableName: "mypage",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Mypage.belongsTo(db.User, { foreignKey: "user_id" });
  }
}

module.exports = Mypage;
