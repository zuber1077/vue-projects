<template>
<div>
  <v-layout>
    <v-flex xs6>
      <book-metadata :book="book" />
    </v-flex>
    <v-flex xs6 class="ml-2">
        <youtube-view :youtubeId="book.youtubeId" />
    </v-flex>
  </v-layout>
  <v-layout class="mt-2">
    <v-flex xs6>
        <all-book-page :book="book"/>
    </v-flex>
    <v-flex xs6 class="ml-2">
      <sample-book :book="book"/>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
import {mapState} from 'vuex'
import SampleBook from './SampleBook'
import BookMetadata from './BookMetadata'
import YoutubeView from './YoutubeView'
import BooksService from '@/services/BooksService'
import BookHistoryService from '@/services/BookHistoryService'
import AllBookPage from './AllBookPage'
export default {
  components: {
    BookMetadata,
    YoutubeView,
    SampleBook,
    AllBookPage
  },
  data() {
    return {
      book: {}
    }
  },
   computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  async mounted() {
    const bookId = this.route.params.bookId
    this.book = (await BooksService.show(bookId)).data

  if (this.isUserLoggedIn) {
    BookHistoryService.post({
      bookId: bookId,
      userId: this.user.id 
    })    
  }
  },
}
</script>

<style scoped>

</style>
