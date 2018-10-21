<template>
<v-layout>
  <v-flex xs4>
    <panel title="Books Metadata">
      <v-text-field required :rules="[required]" v-model="book.title" label="Title"></v-text-field>
      <v-text-field required :rules="[required]" v-model="book.author" label="Author"></v-text-field>
      <v-text-field required :rules="[required]" v-model="book.genres" label="Genres"></v-text-field>
      <v-text-field required :rules="[required]" v-model="book.coverImage" label="Cover Image"></v-text-field>
      <v-text-field required :rules="[required]" v-model="book.youtubeId" label="Youtube Id"></v-text-field>
    </panel>
  </v-flex>
  <v-flex xs8>
    <panel title="Books Structure" class="ml-4">
     <v-textarea required :rules="[required]" v-model="book.samplePage" label="Sample Page"></v-textarea>
     <v-textarea required :rules="[required]" v-model="book.allbookPage" label="Allbook Page"></v-textarea>
     <v-alert  class="ml-4" :value="error"  transition="scale-transition" error >{{error}}</v-alert>
    </panel>
     <v-btn dark class="blue-grey" @click="update">Update Book</v-btn>
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
      book: {
        title: null,
        author: null,
        genres: null,
        coverImage: null,
        youtubeId: null,
        samplePage: null,
        allbookPage: null
      },
      error: null,
      required:  (value) => !!value || 'This field is Required.'
    }
  },
  methods: {
    async update() {
      this.error = null
      const areAllFieldsFilledIn = Object
      .keys(this.book)
      .every(key => !!this.book[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all required fields.'
        return
      }
        const bookId = this.$store.state.route.params.bookId
      try{
        await BooksService.put(this.book)
        this.$router.push({
          name: 'book',
          params: {
            bookId: bookId
          }
        })
      } catch (error) {
        console.log(error);
      }
    }
  },
  async mounted() {
     try {
        const bookId = this.$store.state.route.params.bookId
        this.book = (await BooksService.show(bookId)).data
      } catch (error) {
        console.log(error);
      }
  }
}
</script>


<style scoped>

</style>
