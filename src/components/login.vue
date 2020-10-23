<template>
  <div id="login">
    <h1 class="text-center">login</h1>
    <div class="form-group d-flex justify-content-center mt-5">
      <div class="p-5 form">
          <form method="post">
          <h1 class="text-center">Login here</h1>
          <label for="email"><h5>Email</h5></label>
          <input type="text" id="email" class="form-control" placeholder="Email@domain.com">
          <br>
          <label for="pas"><h5>Password</h5></label>
          <input type="text" id="pas" class="form-control">
          <br>
          <button type="submit" class="btn btn-primary" @click="login">Login</button>
          <h3>To Register New Account → <button type="button" class="btn btn-outline-primary">Register</button></h3>
      </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    login(){
      return this.$router.push('/')
    }
  }
}
</script>

<style scoped>
#login{
  color: white;
  background-image: url('../../public/background.png');
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100vh;
}
.form{
  width: 600px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10%;
}
</style>