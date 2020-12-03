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
        <div class="main">
          <!-- contact menu -->
          <!-- contextMenu folder -->
          <vue-context ref="menu">
              <li>
                  <a href="#"><i class="fas fa-folder-open" style="font-size: 20px"></i> Open</a>
              </li>
              <li>
                  <a href="#"><i class="fas fa-trash" style="font-size: 20px"></i> Delete</a>
              </li>
              <li>
                  <a href="#"><i class="fas fa-registered" style="font-size: 20px"></i> Rename</a>
              </li>
          </vue-context>

          <!-- contextMenu file -->
          <vue-context ref="menu2">
              <li>
                  <a href="#"><i class="fas fa-share" style="font-size: 20px"></i> Share</a>
              </li>
              <li>
                  <a href="#"><i class="fas fa-truck-moving" style="font-size: 20px"></i> Move</a>
              </li>
              <li>
                  <a href="#"><i class="fas fa-trash" style="font-size: 20px"></i> Delete</a>
              </li>
              <li>
                  <a href="#"><i class="fas fa-registered" style="font-size: 20px"></i> Rename</a>
              </li>
              <li>
                  <a href="#"><i class="fas fa-download" style="font-size: 20px"></i> Download</a>
              </li>
          </vue-context>
          <br>
          <h5>Folder > img</h5>
          <hr>
          <br>
          <h5>Tệp</h5>
          <div class="d-flex flex-wrap mt-5" @contextmenu.prevent="$refs.menu.open">
              <div class="ml-5 mb-5 p-2 folder d-flex">
                <i class="fas fa-folder-open" style="font-size : 20px"></i> <p class="ml-3">img 1</p>
              </div>
              <div class="ml-5 mb-5 p-2 folder d-flex">
                <i class="fas fa-folder-open" style="font-size : 20px"></i> <p class="ml-3">img 2</p>
              </div>
              <div class="ml-5 mb-5 p-2 folder d-flex">
                <i class="fas fa-folder-open" style="font-size : 20px"></i> <p class="ml-3">img 3</p>
              </div>
          </div>
          <div class="d-flex flex-wrap mt-5" @contextmenu.prevent="$refs.menu2.open">
            <div class="ml-5 mb-4 file">
              <div class="icon">
                <i class="far fa-file-word"></i>
              </div>
              <p class="ml-3"><i class="far fa-file-word"></i>  anh1.png</p>
            </div>

            <div class="ml-5 mb-4 file">
              <div class="icon1">
                <img src="/anh1.png" alt="" style="height : 100px">
              </div>
              <p class="ml-3"><i class="far fa-file-word"></i>  anh2.png</p>
            </div>
            <div class="ml-5 mb-4 file">
              <div class="icon">
                <i class="far fa-file-word"></i>
              </div>
              <p class="ml-3"><i class="far fa-file-word"></i>  Filename</p>
            </div>

            <div class="ml-5 mb-4 file">
              <div class="icon">
                <i class="far fa-file-word"></i>
              </div>
              <p class="ml-3"><i class="far fa-file-word"></i>  Filename</p>
            </div>

            <div class="ml-5 mb-4 file">
              <div class="icon">
                <i class="far fa-file-word"></i>
              </div>
              <p class="ml-3"><i class="far fa-file-word"></i>  Filename</p>
            </div>

          </div>

        </div>
      </div>
      <div class="col-2 left">
        <div class="mt-5">
          <input type="file" ref="file" style="display: none">
          <button class="fileOpen" @click.prevent="$refs.file.click()"><a href=""><h4>Upload a file</h4></a></button>
        </div>
        <div class="mt-5">
          <input type="file" ref="file" style="display: none">
          <button class="fileOpen" @click.prevent="$refs.file.click()"><a href=""><h4>Upload folder</h4></a></button>
        </div>
        <div class="mt-5">
          <input type="file" ref="file" style="display: none">
          <button class="fileOpen" @click.prevent="$refs.file.click()"><a href=""><h4>New shared folder</h4></a></button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import VueContext from 'vue-context';
  export default {
    components : {
      VueContext
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

.folder ,.file{
  border: 1px solid rgb(156, 156, 156);
  border-radius: 10px;
  width: 190px;
  cursor: pointer;
}
.folder:hover, .file:hover{
  background-color: rgb(173, 173, 173);
}
.icon{
  padding: 60px 70px;
  font-size: 50px;
}
.icon1{
  
  padding: 30px 14px;
  font-size: 80px;
}
.main {
    overflow-y: auto;
    height: 84vh;
}
.main::-webkit-scrollbar {
    margin-left: 50px;
    -webkit-appearance: none;
}

.main::-webkit-scrollbar:vertical {
    width: 11px;
}

.main::-webkit-scrollbar:horizontal {
    height: 11px;
}

.main::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 2px solid white; /* should match background, can't be transparent */
    background-color: rgba(0, 0, 0, .5);
}
.fileOpen{
  border : none;
  background-color: rgba(255, 255, 255, 0)
}
</style>