const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");
const BooksController = require("./controllers/BooksController");
const BookmarksController = require("./controllers/BookmarksController");
const HistoriesController = require("./controllers/HistoriesController");
module.exports = (app) => {
  app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register);
  app.post('/login', AuthenticationController.login);

  app.get("/books", BooksController.index);
  app.get("/books/:bookId", BooksController.show);
  app.post("/books", BooksController.post);
  app.put("/books/:bookId", BooksController.put);

  app.get('/bookmarks', BookmarksController.index)
  app.post('/bookmarks', BookmarksController.post)
  app.delete('/bookmarks/:bookmarkId', BookmarksController.delete)

  app.get('/histories', HistoriesController.index)
  app.post('/histories', HistoriesController.post)
}