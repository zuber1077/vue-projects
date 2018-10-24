import Api from '@/services/Api'

export default {
  index(result) {
    return Api().get(`index`, result)
  },
  post(image) {
    return Api().post(`index`, image);
  }
  // put(book) {
  //   return Api().put(`books/${book.id}`, book)
  // }
}