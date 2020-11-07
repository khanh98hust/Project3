<template>
  <div class="home">
    <h1 class="text-center animate__animated animate__flipInY" style="color : red; padding : 5px 0px;margin-bottom: 0rem !important;">► My drive ◄</h1>
    <hr>
    <div class="row">
      <div class="col-2 left">
        <div class="ml-2">
          <h1>Home</h1>
          <br>
          <h3>Files</h3>
          <hr>
          <h5>All file</h5>
          <h5>Shared</h5>
          <h5>File request</h5>
        </div>
      </div>
      <div class="col-8">
        <Main></Main>
      </div>
      <div class="col-2 left">
        <div class="upload-btn-wrapper mb-4 mt-5">
          <button class="btn">Upload a file</button>
          <input type="file" name="myfile" />
        </div>
        <div class="upload-btn-wrapper mb-4">
          <button class="btn">Upload folder</button>
          <input type="file" name="myfile" />
        </div>
        <div class="upload-btn-wrapper">
          <button class="btn">New shared folder</button>
          <input type="file" name="myfile" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Main from './main';
  export default {
    components : {
      Main
    }
  }
</script>

<style scoped>
.left{
  background-color:#f1f1f1;
  height: 99vh;
  border-radius: 10px;
}
.home{
  height: 93vh;
  overflow-x: hidden;
  overflow-y: hidden;
}

/* buttom file */
.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.btn {
  width: 220px;
  border: 2px solid gray;
  color: gray;
  background-color: white;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
}

.upload-btn-wrapper input[type=file] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
</style>