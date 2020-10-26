<template>
  <div class="main">
    <!-- contact menu -->
    <div id="context-menu">
      <div class="item">
        <i class="fa fa-clone"></i> Add new item
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
    <h5>Folder</h5>
    <div class="d-flex flex-wrap mt-5">
      <div v-for="item in folders" :key="item.id" class="ml-5 mb-5 p-2 folder d-flex">
        <i class="fas fa-folder-open" style="font-size : 20px"></i> <p class="ml-3">{{item}}</p>
      </div>
    </div>

    <h5>Files</h5>
    <div class="d-flex flex-wrap mt-5">
      <div class="ml-5 mb-4 file">
        <div class="icon">
          <i class="far fa-file-word"></i>
        </div>
        <p class="ml-3"><i class="far fa-file-word"></i>  Filename</p>
      </div>

      <div class="ml-5 mb-4 file">
        <div class="icon">
          <i class="far fa-file-pdf"></i>
        </div>
        <p class="ml-3"><i class="far fa-file-pdf"></i>  Filename</p>
      </div>

      <div class="ml-5 mb-4 file">
        <div class="icon">
          <i class="fas fa-file-audio"></i>
        </div>
        <p class="ml-3"><i class="far fa-file-audio"></i>  Filename</p>
      </div>

      <div class="ml-5 mb-4 file">
        <div class="icon">
          <i class="far fa-file-archive"></i>
        </div>
        <p class="ml-3"><i class="far fa-file-archive"></i>  Filename</p>
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
</template>

<script>
window.addEventListener("contextmenu",function(event){
  // console.log(event);
  event.preventDefault();
  var contextElement = document.getElementById("context-menu");
  contextElement.style.top = event.clientY  + "px";
  contextElement.style.left = event.clientX  + "px";
  contextElement.classList.add("active");
});
window.addEventListener("click",function(){
  document.getElementById("context-menu").classList.remove("active");
});
</script>

<script>
import api from '../sevices/api';
export default {
  data(){
    return {
      folders : []
    }
  },
  methods:{
    getdata(){
      return api.get('/files')
      .then(res => {
        this.folders = res.data.folders;
        console.log(this.folders);
      })
      .catch(err => console.log('err: ', err))
    }
  },
  created(){
    this.getdata()
  }
}
</script>

<style scoped>

#context-menu {
  position:fixed;
  z-index:10000;
  width:150px;
  background:#1b1a1a;
  border-radius:5px;
  transform:scale(0);
  transform-origin:top left;
}
#context-menu.active {
  transform:scale(1);
  transition:transform 300ms ease-in-out;
}
#context-menu .item {
  cursor: pointer;
  padding:8px 10px;
  font-size:15px;
  color:#eee;
}
#context-menu .item:hover {
  background:#555;
}
#context-menu .item i {
  display:inline-block;
  margin-right:5px;
}
#context-menu hr {
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
</style>