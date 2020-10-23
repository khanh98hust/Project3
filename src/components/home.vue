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
        <div class="dropdown mt-5">
          <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Create new file
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
        <br>
        <a type="file" href="">Upload files </a>
        <br>
        <a href="">upload folder</a>
        <br>
        <a href="">New folder</a>
        <br>
        <a href="">New shared folder</a>
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

</style>