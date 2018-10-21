import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/Home";
import Register from "@/components/Register";
import Login from "@/components/Login";
import Books from "@/components/Books/Index";
import CreateBook from "@/components/CreateBook";
import ViewBook from "@/components/ViewBook/Index";
import EditBook from "@/components/EditBook";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/books",
      name: "books",
      component: Books
    },
    {
      path: "/books/create",
      name: "book-create",
      component: CreateBook
    },
    {
      path: "/books/:bookId",
      name: "book",
      component: ViewBook
    },
    {
      path: "/books/:bookId/edit",
      name: "book-edit",
      component: EditBook
    }
  ]
});
