<template>
<div>
  <panel title="Book Metadata">
    <v-layout>
      <v-flex xs6>
        <div class="book-title"> {{book.title}} </div>
        <div class="book-author"> {{book.author}}</div>
        <div class="book-genres"> {{book.genres}}</div>
         <v-btn router :to="{name: 'book-edit', params() { return{ bookId: book.id }}}"  class="yellow" >Edit</v-btn>
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
export default {
  props: [
    'book'
  ]
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
