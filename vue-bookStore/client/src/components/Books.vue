<template>
<v-layout column container>
  <v-flex xs6>
    <panel title="Books">
      <v-btn slot="action" class="blue-grey lighten-1" router dark medium absolute right middle fab to="books/create"><v-icon>add</v-icon></v-btn>
      <div class="book" v-for="book in books" :key="book.id">
        <v-layout>
          <v-flex xs6>
            <div class="book-title">
              {{book.title}}
            </div>
            <div class="book-author">
              {{book.author}}
            </div>
            <div class="book-genres">
              {{book.genres}}
            </div>
            <v-btn router :to="{name: 'book', params: {bookId: book.id}}" dark class="blue-grey" @click="create">View</v-btn>
          </v-flex>
          <v-flex xs6>
            <img class="book-coverImage" :src="book.coverImage" />
          </v-flex>
        </v-layout>
      </div>
    </panel>
  </v-flex>
</v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import BooksService from '@/services/BooksService'
export default {
  components: {
    Panel
  },
  data() {
    return {
      books: null
    }
  },
  async mounted() {
    // do a request to the backend for all the books
    this.books = (await BooksService.index()).data
  }
}
</script>


<style scoped>
.book{
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.book-title{
  font-size: 30px;
}
.book-author{
  font-size: 24px;
}
.book-genres{
  font-size: 18px;
}
.book-coverImage{
  width: 70%;
  margin: 0 auto;
}
</style>
