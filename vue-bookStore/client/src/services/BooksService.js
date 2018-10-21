import Api from '@/services/Api'

export default {
  index () {
    return Api().get('books')
  },
  show(bookId) {
    return Api().get(`books/${bookId}`)
  },
  post (book) {
    return Api().post('books', book)
  },
  put (book) {
    return Api().put(`books/${book.id}`, book)
  }
}