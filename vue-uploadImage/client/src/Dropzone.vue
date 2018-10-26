<template>
  <form
  @submit.prevent="sendFile" 
   enctype="multipart/form-data">

  <div v-if="message"
  :class="`message ${error ? 'is-danger' : 'is-success'}`"
  > 
    <div class="message-body">{{message}}</div>
  </div>

    <div class="dropzone">
      <input
       type="file"
       ref="file"
       @change="sendFile"
       class="input-file" />

      <p v-if="!uploading" class="call-to-action">
        Drag your files here
      </p>
      <p v-if="uploading" class="progress-bar">
        <progress class="progress is-primary" :value="progress" max="100">
          {{progress}} %
        </progress>
      </p>
    </div>
    <div class="content">
      <div class="columns is-multiline is-mobile is-centered">
        <div v-for="file in uploadFiles" :key="file" class="column is-4" style="min-width: 150px; max-width: 228px;">
          <figure class="card image imageFade tooltip is-tooltip-primary item-shadow">
            <img :src="file">
          </figure>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Dropzone',
  data() {
    return {
      file: '',
      message: '',
      error: false,
      uploading: false,
      uploadFiles: [],
      progress: 0
    }
  },
  methods: {
   async sendFile() {
      const file = this.$refs.file.files[0];
      const formData = new FormData();
      formData.append('file', file)
      try {
        this.uploading = true;
        const res = await axios.post('/dropzone', formData, {
          onUploadProgress: e => this.progress = Math.round(e.loaded * 100 / e.total)
        });
        this.uploadFiles.push(res.data.file);
        this.uploading = false;
      } catch (err) { 
        this.message = err.response.data.error;
        this.error = true;
        this.uploading = false;
      }
    }
  }
}
</script>

<style scoped>
  .dropzone {
    min-height: 200px;
    padding: 10px 10px;
    position: relative;
    cursor: pointer;
    outline: 2px dashed grey;
    outline-offset: -10px;
    background-color: lightcyan;
    color: dimgray;
  }
  .input-file {
    opacity: 0;
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }
  .dropzone:hover {
    background: lightblue;
  }

  .dropzone .call-to-action {
    font-size: 1.2rem;
    text-align: center;
    padding: 70px 0;
  }
  .dropzone .progress-bar {
    text-align: center;
    padding: 70px 10px;
  }
  .imageFade {
    animation-name: fadeIn;
    animation-duration: 1s;
    animation-timing-function: ease;
}
.item-shadow {
    transition: all 0.2s ease-in-out;
}
.tooltip {
    position: relative;
}
</style>
