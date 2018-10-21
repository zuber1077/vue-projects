const path = require('path')

const Sequelize = require("sequelize");
const Op = Sequelize.Op;
module.exports = {
  port: process.env.PORT || 8082,
  db: {
    database: process.env.DB_NAME || "vuebookstore",
    user: process.env.DB_USER || "vuebookstore",
    password: process.env.DB_PASS || "vuebookstore",
    options: {
      dialect: process.env.DIALECT || "sqlite",
      host: process.env.HOST || "localhost",
      storage: path.resolve(__dirname, "../../vuebookstore.sqlite"),
      operatorsAliases: false
    }
  },
  authentication: {
    jwtSecret: process.env.JWR_SECRET || 'mysecret!'
  }
};