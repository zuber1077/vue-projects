module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define("Book", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    genres: DataTypes.STRING,
    coverImage: DataTypes.STRING,
    youtubeId: DataTypes.STRING,
    samplePage: DataTypes.TEXT,
    allbookPage: DataTypes.TEXT
  });

  return Book
}

