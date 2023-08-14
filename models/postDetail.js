const Sequelize = require("sequelize");

class PostDetail extends Sequelize.Model{
  static initiate(sequelize) {
    PostDetail.init(
      {
        post_detail_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: Sequelize.STRING,
        },
        content: {
          type: Sequelize.STRING,
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
        modelName: "PostDetail",
        tableName: "post_detail",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );8
  }
  static associate(db) {
    db.PostDetail.belongsTo(db.Exhibition, { foreignKey: "exhibition_id" });
    db.PostDetail.hasMany(db.PostImage, { foreignKey: "post_detail_id" });
  }
}
module.exports = PostDetail;
