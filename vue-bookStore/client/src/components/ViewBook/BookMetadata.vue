<template>
<div>
  <panel title="Book Metadata">
    <v-layout>
      <v-flex xs6>
        <div class="book-title"> {{book.title}} </div>
        <div class="book-author"> {{book.author}}</div>
        <div class="book-genres"> {{book.genres}}</div>
         <v-btn router :to="{name: 'book-edit', params() { return{ bookId: book.id }}}"  class="yellow" >Edit</v-btn>
         <v-btn v-if="isUserLoggedIn && !bookmark" router dark class="black" @click="setAsbookmark">Set As Bookmark</v-btn>
         <v-btn v-if="isUserLoggedIn && bookmark" router class="white" @click="unsetAsbookmark">Unset As Bookmark</v-btn>
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
      bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  watch: {
    async book () {
      if (!this.isUserLoggedIn) {
        return
      }

      try {
        const bookmarks = (await BookmarksService.index({
          bookId: this.$store.state.route.params.bookId,
          // bookId: this.book.id,
          userId: this.user.id
        })).data
        if (bookmarks.length) {
          this.bookmark = bookmarks[0]
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  methods: {
    async setAsbookmark () {
      try {
        this.bookmark = (await BookmarksService.post({
          // bookId: this.book.id,
          bookId: this.$store.state.route.params.bookId,
          userId: this.user.id
        })).data
      } catch (error) {
        console.log(error);
      }
    },
    async unsetAsbookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
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
