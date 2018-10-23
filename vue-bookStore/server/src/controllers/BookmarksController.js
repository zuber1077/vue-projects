const {Bookmark, Book} = require('../models')
const Sequelize = require('sequelize');
module.exports = {
  async index (req, res) {
    try {
      const {bookId, userId} = req.query
      const where = {
        UserId: userId
      }
      if (bookId) {
        where.BookId = bookId
      }
      const bookmarks = await Bookmark.findAll({
        where: where,
        include: [
          {
            model: Book
          }
        ] 
      }).map(bookmark => bookmark.toJSON())
        .map(bookmark => Object.assign({}, 
          bookmark.Book, 
          bookmark
        ))
      res.send(bookmarks)
    } catch (error) {
      res.status(500).send({ error: "an error has occurred trying to fetch the bookmark" });
    }
  },
  async post (req, res) {
    try {
      const {bookId, userId} = req.body
      const bookmark = await Bookmark.findOne({
        where: {
          BookId: bookId,
          UserId: userId
        }
      })
      if (bookmark) {
        return res.status(400).send({
          error: 'you already have this set as a bookmark'
        })
      }

      const newBookmark = await Bookmark.create({
        BookId: bookId,
        UserId: userId
      })  
    res.send(newBookmark)
    } catch (error) {
      res.status(500).send({ error: "an error has occurred trying to create the bookmark" });
    }
  },
  async delete (req, res) {
    try {
      const {bookmarkId} = req.params
      const bookmark = await Bookmark.findById(bookmarkId)
      await bookmark.destroy()
      res.send(bookmark)
    } catch (error) {
      res.status(500).send({ error: "an error has occurred trying to delete the bookmark" });
    }
  }
}