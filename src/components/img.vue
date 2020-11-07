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
        <div class="main">
          <!-- contact menu -->
          <div id="contextMenu">
            <div class="item">
              <div class="upload-btn-wrapper">
                <button class="btn">New file</button>
                <input type="file" name="myfile" />
              </div>
            </div>
            <div class="item">
              <i class="fa fa-paste"></i> Paste
            </div>
            <div class="item">
              <i class="fa fa-trash"></i> Delete
            </div>
            <hr>
            <div class="item">
              <i class="fa fa-sync"></i> Reload
            </div>
            <div class="item">
              <i class="fa fa-times"></i> Exit
            </div>
          </div>
          <br>
          <h5>Folder > img</h5>
          <hr>
          <br>
          <h5>Tệp</h5>
          <div class="d-flex flex-wrap mt-5">
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
          <div class="d-flex flex-wrap mt-5">
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
  export default {
    components : {
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
#contextMenu {
  position:fixed;
  z-index:10000;
  width:150px;
  background:#1b1a1a;
  border-radius:5px;
  transform:scale(0);
  transform-origin:top left;
}
#contextMenu.active {
  transform:scale(1);
  transition:transform 300ms ease-in-out;
}
#contextMenu .item {
  cursor: pointer;
  padding:8px 10px;
  font-size:15px;
  color:#eee;
}
#contextMenu .item:hover {
  background:#555;
}
#contextMenu .item i {
  display:inline-block;
  margin-right:5px;
}
#contextMenu hr {
  margin:2px 0px;
  border-color:#555;
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
  padding: 30px 70px;
  font-size: 80px;
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


/* buttom file */
.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.btn {
  font-weight: bold;
}

.upload-btn-wrapper input[type=file] {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
</style>