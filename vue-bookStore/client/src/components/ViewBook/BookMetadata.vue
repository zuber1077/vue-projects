<template>
<div>
  <panel title="Book Metadata">
    <v-layout>
      <v-flex xs6>
        <div class="book-title"> {{book.title}} </div>
        <div class="book-author"> {{book.author}}</div>
        <div class="book-genres"> {{book.genres}}</div>
         <v-btn router :to="{name: 'book-edit', params() { return{ bookId: book.id }}}"  class="yellow" >Edit</v-btn>
         <v-btn v-if="isUserLoggedIn && !isBookmarked" router dark class="black" @click="unbookmark">Bookmark</v-btn>
         <v-btn v-if="isUserLoggedIn && isBookmarked" router class="white" @click="bookmark">UnBookmark</v-btn>
      </v-flex>
      <v-flex xs6>
        <img class="book-coverImage" :src="book.coverImage" />
        <br>
        {{book.genres}}
      </v-flex>
    </v-layout>
  </panel>
</div>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: [
    'book'
  ],
  data() {
    return {
      isBookmarked: false
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted() {
    try {
      const bookmark = (await BookmarksService.index({
        bookId: this.$store.state.route.params.bookId,
        userId: this.$store.state.user.id
      })).data    
      this.isBookmarked = !!bookmark
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async bookmark () {
      try {
        await BookmarksService.post({
          bookId: this.$store.state.route.params.bookId,
          userId: this.$store.state.user.id
        })
      } catch (error) {
        console.log(error);
      }
    },
    async unbookmark () {
      try {
        await BookmarksService.delete({
          bookId: this.$store.state.route.params.bookId,
          userId: this.$store.state.user.id
        })
      } catch (error) {
        console.log(error);
      }
    }
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
