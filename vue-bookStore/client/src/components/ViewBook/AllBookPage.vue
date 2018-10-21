<template>
<panel title="All Book Pages">
  <textarea readonly v-model="book.allbookPage"></textarea>
</panel>
</template>

<script>
export default {
  props: [
    'book'
  ]
}
</script>

<style scoped>
textarea{ 
  width: 100%;
  font-family: monospace;
  border: none;
  height: 500px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 20px;
}
</style>
