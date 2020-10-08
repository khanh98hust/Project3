<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Slider></Slider>
    <!-- contact menu -->
    <div id="context-menu">
      <div class="item">
        <i class="fa fa-cut"></i> Cut
      </div>
      <div class="item">
        <i class="fa fa-clone"></i> Copy
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
  </div>
</template>


<script>
import Slider from './components/Slider'
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    Slider,
    HelloWorld
  }
}
window.addEventListener("contextmenu",function(event){
  event.preventDefault();
  var contextElement = document.getElementById("context-menu");
  contextElement.style.top = event.offsetY + "px";
  contextElement.style.left = event.offsetX + "px";
  contextElement.classList.add("active");
});
window.addEventListener("click",function(){
  document.getElementById("context-menu").classList.remove("active");
});
</script>

<style>
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
</style>
