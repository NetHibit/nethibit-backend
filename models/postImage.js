const Sequelize = require('sequelize');

class PostImage extends Sequelize.Model {
  static initiate(sequelize) {
    PostImage.init(
      {
        post_image_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        image_url: Sequelize.STRING,
        created_at: {
          type: Sequelize.DATE,
          allowNull: true,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: "PostImage",
        tableName: "post_image",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.PostImage.belongsTo(db.PostDetail, { foreignKey: "post_detail_id" });
  }
}

module.exports = PostImage;