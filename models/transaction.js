const Sequelize = require('sequelize');

class Transaction extends Sequelize.Model{
  static initiate(sequelize) {
    Transaction.init(
      {
        transaction_id: {
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
        modelName: "transaction",
        tableName: "Transaction",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Transaction.belongsTo(db.User, { foreignKey: "user_id" });
    db.Transaction.belongsTo(db.Goods, { foreignKey: "goods_id" });
  }
}

module.exports = Transaction;