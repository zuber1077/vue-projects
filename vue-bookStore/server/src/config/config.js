const Sequelize = require("sequelize");
const Op = Sequelize.Op;
module.exports = {
  port: process.env.PORT || 8082,
  db: {
    database: process.env.DB_NAME || 'vuebookstore',
    user: process.env.DB_USER || 'vuebookstore',
    password: process.env.DB_PASS || 'vuebookstore',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './vuebookstore.sqlite',
      operatorsAliases: false
    } 
  }
}