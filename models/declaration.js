const Sequelize = require('sequelize');

class Declaration extends Sequelize.Model{
  static initiate(sequelize) {
    Declaration.init(
      {
        declaration_id: {
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
        modelName: "Declaration",
        tableName: "declarations",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Declaration.belongsTo(db.User, { foreignKey: "whistleblower_id" });
    db.Declaration.belongsTo(db.User, { foreignKey: "perpetrator_id" });
  }
  
} 


module.exports = Declaration;