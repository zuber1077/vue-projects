<template>
<div id="app" class="row">
  <div style="width: 30%; margin: 25px auto;" v-if="!image">
  <h1 style="text-align: center">Upload new Image</h1>
      <form enctype="multipart/form-data">
          <div class="form-group">
              <input class="form-control" type="text" v-model="upload.name" name="name" placeholder="name">
          </div>
          <div class="form-group">
              <label for="image">Image</label>
              <input type="file" id="image" name="upload.image" @change="onFileChange" accept="image/*" required>
          </div>
          <div class="form-group">
              <button @click="uploadIt" class="btn btn-lg btn-primary btn-block">Submit!</button>
          </div>
      </form>
  </div>
  <div v-else>
    <img :src="upload.image" />
  </div>
</div>
</template>

<script>
import UploadImageService from '@/services/UploadImageService'
export default {
data() {
  return {
    upload: {
      name: null,
      image: null
    },
    result: null
  }
},
methods: {
  onFileChange(e) {
    var files = e.target.files || e.dataTransfer.files;
    if (!files.length)
      return;
    this.createImage(files[0]);
  },
  createImage(file) {
    // var image = new Image();
    var reader = new FileReader();
    var vm = this;

    reader.onload = (e) => {
      vm.image = e.target.result;
    };
    reader.readAsDataURL(file);
  },
  async uploadIt() {
    try {
      await UploadImageService.post(this.upload)
        this.$router.push({
          name: 'index'
      }) 
    } catch (error) {
      console.log(error);
    }
  }
  
},
async mounted() {
    // do a request to the backend for image upload
    this.result = (await UploadImageService.index()).data
  }
}
</script>

<style>
.row {
  text-align: center;
}
img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}
</style>
