import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('books', {
      params: {
        search: search
      }
    })
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