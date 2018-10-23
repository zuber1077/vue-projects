<template>
<v-layout >
  <v-flex xs6>
    <books-bookmark />
    <recently-viewed-books class="mt-2" />
  </v-flex>
  <v-flex xs6 class="ml-2">
    <books-search-panel />
    <books-panel class="mt-2" />
  </v-flex>
</v-layout>
</template>

<script>
import {mapState} from 'vuex'
import BooksPanel from './BooksPanel'
import BooksSearchPanel from './BooksSearchPanel'
import BooksBookmark from './BooksBookmark'
import RecentlyViewedBooks from './RecentlyViewedBooks'
import BooksService from '@/services/BooksService'
export default {
  components: {
    BooksPanel,
    BooksSearchPanel,
    BooksBookmark,
    RecentlyViewedBooks
  },
  data() {
    return {
      books: null
    }
  },
   computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
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
