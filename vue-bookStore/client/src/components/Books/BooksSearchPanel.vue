<template>
  <panel title="Search">
    <v-text-field prepend-icon="search" v-model="search" label="Search by book title, author or genre"></v-text-field> <br>
  </panel>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function(value) {
      const route = {
        name: 'books'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route) // push to url
    }, 700),
    '$route.query.search': { // put the text agin to the textarea
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style>

</style>
