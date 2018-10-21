const {Book} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const books = await Book.findAll({
        limit: 10 
      })
      res.send(books)
    } catch (error) {
      res.status(500).send({ error: "an error has occurred trying to fetch the books" });
    }
  },
  async show (req, res) {
    try {
      const book = await Book.findById(req.params.bookId)
      res.send(book)
    } catch (error) {
      res.status(500).send({ error: "an error has occurred trying to show the books" });
    }
  },
  async post (req, res) {
    try {
      const book = await Book.create(req.body)
      res.send(book)
    } catch (error) {
      res.status(500).send({ error: "an error has occurred trying to create the book" });
    }
  },
  async put (req, res) {
    try {
      const book = await Book.update(req.body, {
        where: {
          id: req.params.bookId
        }
      })
      res.send(req.body)
    } catch (error) {
      res.status(500).send({ error: "an error has occurred trying to update the book" });
    }
  }
}