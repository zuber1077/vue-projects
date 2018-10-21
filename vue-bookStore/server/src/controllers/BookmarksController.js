const {Bookmark} = require('../models')
const Sequelize = require('sequelize');

module.exports = {
  async index (req, res) {
    try {
      const {bookId, userId} = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          BookId: bookId,
          UserId: userId
        }
      })
      res.send(bookmark)
    } catch (error) {
      res.status(500).send({ error: "an error has occurred trying to fetch the bookmark" });
    }
  },
  async post (req, res) {
    try {
      const bookmark = req.body
      await Bookmark.create(bookmark)
      res.send(bookmark)
    } catch (error) {
      res.status(500).send({ error: "an error has occurred trying to create the bookmark" });
    }
  },
  async delete (req, res) {
    try {
      const {bookId, userId} = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          BookId: bookId,
          UserId: userId
        }
      })
      res.send(bookmark)
    } catch (error) {
      res.status(500).send({ error: "an error has occurred trying to fetch the bookmark" });
    }
  }
}