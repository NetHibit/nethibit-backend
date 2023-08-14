const Sequelize = require("sequelize");

class Guestbook extends Sequelize.Model{
  static initiate(sequelize) {
    Guestbook.init(
      {
        guestbook_id: {
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
        modelName: "Guestbook",
        tableName: "guestbook",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Guestbook.belongsTo(db.Exhibition, { foreignKey: "exhibition_id" });
    db.Guestbook.belongsTo(db.User, { foreignKey: "user_id" });
  }
}
module.exports = Guestbook;
