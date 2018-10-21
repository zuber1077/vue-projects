const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");
const BooksController = require("./controllers/BooksController");
module.exports = (app) => {
  app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)
  app.post('/login', AuthenticationController.login)
  app.get("/books", BooksController.index);
  app.get("/books/:bookId", BooksController.show);
  app.post("/books", BooksController.post);
}