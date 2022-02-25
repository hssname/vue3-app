<template>
  <div class="login-page">
    <div class="login-bg">
      <div class="login-logo"><img src="@/assets/images/login/sie-logo.png" /></div>
      <div class="form"><login-form /></div>
    </div>
  </div>
</template>

<script>
import loginForm from '../../components/loginForm.vue'
export default {
  name: 'login',
  components: {loginForm},

}
</script>

<style lang="scss" scoped>
.login-page{
  width: 100%;
  height: 100%;
  .login-bg{
     background: url('@/assets/images/login/login-bg.jpg') 50% no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: relative;
    .login-logo{
      position: absolute;
      height: 65px;
      left: 10px;
      top: 10px;
     img{
       display: block;
       width: 100%;
       height: 100%;
     }
    }
  }
}
</style>