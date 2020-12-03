<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <!-- <Main></Main> -->
    
  </div>
</template>

<script>
import Header from './components/share/header'
// import Main from './components/main'
export default {
  name: 'App',
  components: {
    Header,
    // Main,
    // Slider
  },
  data(){
    return{
    }
  }
}
</script>

<style>
#app{
  font-family: 'Work Sans', sans-serif;
}
</style>
