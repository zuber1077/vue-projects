module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define("History", {});

  History.associate = function (models) {
    History.belongsTo(models.User)
    History.belongsTo(models.Book)
  }

  return History
}

