const {
  sequelize,
  Book,
  User
} = require('../src/models')

const Promise = require('bluebird')
const books = require('./books.json')
const users = require('./users.json')

sequelize.sync({force: true})
.then(async function () {
  await Promise.all(
    users.map(user => {
      User.create(user)
    })
  )
  await Promise.all(
    books.map(book => {
      Book.create(book)
    })
  )
});