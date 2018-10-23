const {History, Book, User} = require('../models')
const Sequelize = require('sequelize');
const _ = require('lodash');
module.exports = {
  async index (req, res) {
    try {
      const {userId} = req.query
      const histories = await History.findAll({
        where: {
          UserId: userId
        },
        include: [
          {
            model: Book
          }
        ] 
      }).map(history => history.toJSON())
        .map(history => Object.assign({}, 
          history.Book, 
          history
        ))
      res.send(_.uniq(histories))
    } catch (error) {
      res.status(500).send({ error: "an error has occurred trying to fetch the history" });
    }
  },
  async post (req, res) {
    try {
      const {bookId, userId} = req.body
      const history = await History.create({
        BookId: bookId,
        UserId: userId
      })  
    res.send(history)
    } catch (error) {
      res.status(500).send({ error: "an error has occurred trying to create the history object" });
    }
  }
}