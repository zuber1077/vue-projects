<template>
<panel title="Sample Book">
  <textarea readonly v-model="book.samplePage"></textarea>
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
