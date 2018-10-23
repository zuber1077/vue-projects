const {
  sequelize,
  Book,
  User,
  Bookmark,
  History
} = require('../src/models')

const Promise = require('bluebird')
const books = require('./books.json')
const users = require('./users.json')
const bookmark = require('./bookmark.json')
const histories = require('./histories.json')

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
  await Promise.all(
    bookmark.map(bookmark => {
      Bookmark.create(bookmark);
    })
  )
  await Promise.all(
    histories.map(history => {
      History.create(history);
    })
  )
});