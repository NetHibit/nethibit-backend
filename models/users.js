const Sequelize = require("sequelize");

class User extends Sequelize.Model{
  static initiate(sequelize) {
    User.init(
      {
        user_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        ID:Sequelize.STRING,
        nickname: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        phone: Sequelize.STRING,
        name: Sequelize.STRING,
        birth: Sequelize.DATE,
      },
      {
        sequelize,
        timestamps: false,
        modelName: "Users",
        tableName: "users",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    
    db.User.hasMany(db.Mypage, { foreignKey: "user_id" });
    db.User.hasMany(db.Following, { foreignKey: "my_id" });
    db.User.hasMany(db.Declaration, { foreignKey: "whistleblower_id" });
    db.User.hasMany(db.Goods, { foreignKey: "user_id" });
    db.User.hasMany(db.Review, { foreignKey: "user_id" });
    db.User.hasMany(db.Transaction, { foreignKey: "user_id" });
    db.User.hasMany(db.Exhibition, { foreignKey: "user_id" });
    db.User.hasMany(db.LikeExhibition, { foreignKey: "user_id" });
    db.User.hasMany(db.Guestbook, { foreignKey: "user_id" });
    db.User.hasMany(db.Scrap, { foreignKey: "user_id" });
  }
}
module.exports = User;
