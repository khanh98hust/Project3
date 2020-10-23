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
           class="nav-link" > Home </router-link>
        </li>
        <li class="nav-item">
            <router-link 
            to="login"
            tag="a"
            class="nav-link"> Login
            </router-link>
        </li>

    </ul>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.nav-link{
  font-size: 20px;
  color : white
}
</style>
