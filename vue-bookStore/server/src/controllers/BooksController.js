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
  async post (req, res) {
    try {
      const book = await Book.create(req.body)
      res.send(book)
    } catch (error) {
      res.status(500).send({ error: "an error has occurred trying to create the book" });
    }
  }
}