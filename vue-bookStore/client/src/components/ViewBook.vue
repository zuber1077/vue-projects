<template>
<v-layout column container>
  <v-flex xs6>
    <panel title="Books">
      
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
      book: null
    }
  },
  async mounted() {
    const bookId = this.$store.state.route.params.bookId
    this.book = await BooksService.show(bookId)
  },
}
</script>

<style scoped>

</style>
