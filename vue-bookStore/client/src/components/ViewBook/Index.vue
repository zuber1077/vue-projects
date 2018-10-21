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
import SampleBook from './SampleBook'
import BookMetadata from './BookMetadata'
import YoutubeView from './YoutubeView'
import Panel from '@/components/Panel'
import BooksService from '@/services/BooksService'
import AllBookPage from './AllBookPage'
export default {
  components: {
    Panel,
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
  async mounted() {
    const bookId = this.$store.state.route.params.bookId
    this.book = (await BooksService.show(bookId)).data
  },
}
</script>

<style scoped>

</style>
