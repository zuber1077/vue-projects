const {Book} = require('../models')
const Sequelize = require('sequelize');

module.exports = {
  async index (req, res) {
    try {
      let books = null
      const search = req.query.search
      if (search) {
        books = await Book.findAll({
          where: {
            [Sequelize.Op.or]: [
              {title: {[Sequelize.Op.like]: '%' + search + '%'}},
              {author: {[Sequelize.Op.like]: '%' + search + '%'}},
              {genres: {[Sequelize.Op.like]: '%' + search + '%'}},
            ]
          }
        })
      } else {
        books = await Book.findAll({
          limit: 10 
        })
      }
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