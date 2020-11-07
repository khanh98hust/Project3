<template>
  <div style="background-color : #13123c" class="d-flex justify-content-between">
    <div class="d-flex">
      <img src="drive_2020q4_48dp.png" alt="">
      <h3 class="nav-link">Drive</h3>
    </div>
    <ul class="nav mr-5">
        <li class="nav-item">
          <router-link 
           to="/"
           tag="a"
           class="nav-link"
           active-class="active"
           exact > Home </router-link>
        </li>
        <li v-if="$store.state.login == false" class="nav-item">
            <router-link 
            to="login"
            tag="a"
            class="nav-link"
            active-class="active"> Login
            </router-link>
        </li>
        <li v-if="$store.state.login == true" class="nav-link">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Khanh
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button @click="logout"  class="dropdown-item">Logout</button>
            </div>
          </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  methods:{
    logout(){
      localStorage.clear();
      this.$store.state.login = false;
      return this.$router.push('/login')
    }
  }
};
</script>

<style scoped>
.nav-link{
  font-size: 20px;
  color : white
}
.active{
  color: rgb(123, 255, 0)
}
</style>
