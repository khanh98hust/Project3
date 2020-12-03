<template>
  <div class="home">
    <h1 class="text-center animate__animated animate__flipInY" style="color : red; padding : 5px 0px;margin-bottom: 0rem !important;">My drive</h1>
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
        <div class="mt-5">
          <input type="file" ref="file" style="display: none">
          <button class="fileOpen" @click="$refs.file.click()"><a href=""><h4>Upload a file</h4></a></button>
        </div>
        <div class="mt-5">
          <input type="file" ref="file" style="display: none">
          <button class="fileOpen" @click="$refs.file.click()"><a href=""><h4>Upload folder</h4></a></button>
        </div>
        <div class="mt-5">
          <input type="file" ref="file" style="display: none">
          <button class="fileOpen" @click="$refs.file.click()"><a href=""><h4>New shared folder</h4></a></button>
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

.fileOpen{
  border : none;
  background-color: rgba(255, 255, 255, 0)
}
</style>