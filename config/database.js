const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  username: "root",
  password: "1234",
  database: "nethibitDB",
  host: "127.0.0.1",
  dialect: "mysql",
});

module.exports = sequelize;