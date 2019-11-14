<template>
  <div class="login">
    <div id="bg_lr">
      <img src="./../assets/bg_login.png" alt />
    </div>
    <div class="logins">
      <h1 class="login_logo">用户登录</h1>
      <form action class="login_form">
        <p>
          <label for="accounts">用户名或电子邮件</label>
          <br />
          <input type="text"   @focus="flag=!flag" @blur="flag=!flag" :class="{'red':flag}" class="input account" />
        </p>

        <p>
          <label for="password">密码</label>
          <br />
          <input type="password"   @focus="tag=!tag" @blur="tag=!tag" :class="{'red':tag}" class="input password" />
        </p>
        <!-- 滑块 -->
        <p class="submit">
        
          <input type="submit" class="submit_login" value="登入" />
         
        
        </p>
        <p class="notice">请先注册！Register first, plz!</p>
        <p class="toregister">
          
          <router-link to="/register">
          Register 
          </router-link>| 

          <router-view></router-view>
           El Psy Congroo
          </p>
      </form>
    </div>
  </div>
</template>

<script>
import './../assets/login_register.css'
export default {
  name: "Login",
  data() {
    return {
      flag:false,
      tag:false
    };
  }
};
</script>

<style scoped>
 .red{
   border:1px solid #ff5656;
 }
 .toregister,.notice{
   text-align: center
 }
 .toregister a {
   text-decoration: underline
 }
</style>