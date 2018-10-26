<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <upload />
        </div>
        <div class="column">
          <multiple-uploads />
        </div>
      </div>

      <dropzone />

    </div>
  </div>
</template>

<script>
import upload from './upload.vue';
import MultipleUploads from './MultipleUploads.vue';
import Dropzone from './Dropzone.vue';

export default {
  name: 'App',
  components: {
    upload,
    MultipleUploads,
    Dropzone
  }
}
</script>

<style>
</style>
