<template>
  <div class="main">
    <br>
    <h5>Folder</h5>
    <div class="d-flex flex-wrap mt-5">
      <router-link to="/img">
        <div class="ml-5 mb-5 p-2 folder d-flex" @contextmenu.prevent="$refs.menu.open">
          <i class="fas fa-folder-open" style="font-size: 20px"></i>
          <p class="ml-3">img</p>
        </div>
      </router-link>
      <div
        v-for="item in folders"
        :key="item.id"
        class="ml-5 mb-5 p-2 folder d-flex"
        @contextmenu.prevent="$refs.menu.open"
      >
        <i class="fas fa-folder-open" style="font-size: 20px"></i>
        <p class="ml-3">{{ item }}</p>
      </div>
    </div>

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

    <h5>Files</h5>
    <div class="d-flex flex-wrap mt-5" @contextmenu.prevent="$refs.menu2.open">
      <div class="ml-5 mb-4 file">
        <div class="icon">
          <i class="far fa-file-word"></i>
        </div>
        <p class="ml-3"><i class="far fa-file-word"></i> Filename.docx</p>
      </div>

      <div class="ml-5 mb-4 file">
        <div class="icon">
          <i class="far fa-file-pdf"></i>
        </div>
        <p class="ml-3"><i class="far fa-file-pdf"></i> Filename.pdf</p>
      </div>

      <div class="ml-5 mb-4 file">
        <div class="icon">
          <i class="fas fa-file-audio"></i>
        </div>
        <p class="ml-3"><i class="far fa-file-audio"></i> Filename.mp3</p>
      </div>

      <div class="ml-5 mb-4 file">
        <div class="icon">
          <i class="far fa-file-archive"></i>
        </div>
        <p class="ml-3"><i class="far fa-file-archive"></i> Filename.zip</p>
      </div>

      <div class="ml-5 mb-4 file">
        <div class="icon">
          <i class="far fa-file-word"></i>
        </div>
        <p class="ml-3"><i class="far fa-file-word"></i> Filename.docx</p>
      </div>

      <div class="ml-5 mb-4 file">
        <div class="icon">
          <i class="far fa-file-word"></i>
        </div>
        <p class="ml-3"><i class="far fa-file-word"></i> Filename.docx</p>
      </div>

      <div class="ml-5 mb-4 file">
        <div class="icon">
          <i class="far fa-file-word"></i>
        </div>
        <p class="ml-3"><i class="far fa-file-word"></i> Filename.docx</p>
      </div>

      <div class="ml-5 mb-4 file">
        <div class="icon">
          <i class="far fa-file-word"></i>
        </div>
        <p class="ml-3"><i class="far fa-file-word"></i> Filename.docx</p>
      </div>

      <div class="ml-5 mb-4 file">
        <div class="icon">
          <i class="far fa-file-word"></i>
        </div>
        <p class="ml-3"><i class="far fa-file-word"></i> Filename.docx</p>
      </div>

      <div class="ml-5 mb-4 file">
        <div class="icon">
          <i class="far fa-file-word"></i>
        </div>
        <p class="ml-3"><i class="far fa-file-word"></i> Filename.docx</p>
      </div>
    </div>

  </div>
</template>

<script>
import api from "../sevices/api";
import VueContext from 'vue-context';
export default {
  components: {
    VueContext
  },
  data() {
    return {
      folders: [],
    };
  },
  methods: {
    getdata() {
      return api
        .get("/files")
        .then((res) => {
          this.folders = res.data.folders;
          // console.log(this.folders);
        })
        .catch((err) => console.log("err: ", err));
    },
  },
  created() {
    this.getdata();
  },
};
</script>

<style scoped>
@import '~vue-context/dist/css/vue-context.css';

.folder,
.file {
  border: 1px solid rgb(156, 156, 156);
  border-radius: 10px;
  width: 190px;
  cursor: pointer;
}
.folder:hover,
.file:hover {
  background-color: rgb(173, 173, 173);
}
.icon {
  padding: 60px 70px;
  font-size: 50px;
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
  background-color: rgba(0, 0, 0, 0.5);
}
.mb-4,
.my-4 {
  margin-bottom: 4.5rem !important;
}

.fileOpen{
  border : none;
  background-color: rgba(255, 255, 255, 0)
}
</style>
