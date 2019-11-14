<template>
  <div class="register">
    <div class="registers">
      <h3 class="register_logo">New Account</h3>
      <form action class="register_form">
        <p>
     
          <input type="password" class="input password" placeholder="用户名" />
        </p>
        <p>

          <input type="mail" class="input password" placeholder="电子邮箱" />
        </p>

        <p>
   
          <input type="password" class="input password1" placeholder="密码" />
        </p>
        <p>
      
          <input type="password" class="input password2" placeholder="确认密码" />
        </p>

        <!-- 滑块 -->
        <p class="submit">
          <input type="hidden" name="register" value="ok" />
          <input type="submit" class="submit_register" value="注册" />
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import "./../assets/login_register.css";
export default {
  name: "Register",
  data() {
    return {};
  }
};
</script>

<style  scoped>
.registers{
  margin-top: -100px;
}
.register_logo {
  font-size: 24px;
  color: #666;
  font-family: "Noto Serif SC", "Source Han Serif SC", "Source Han Serif",
    source-han-serif-sc, "PT Serif", "SongTi SC", "MicroSoft Yahei", Georgia,
    serif;
}
.submit_register {
  color: #666;
  background: #eee;
  border-radius: 0%;
  width:300px;
  transition: 0.4s ease all;
}
.submit_register:hover {
  background: #ff5656;
  border-color: #e67474;
  color: #fff;
}
.input{
  width: 300px;
    margin-bottom: 6px;
    padding: 12px 10px;
    border: 1px #ddd solid;
    outline: 0;
    border-radius: 3px;
    font-size: 16px;
    font: 300 14px miranafont,"Hiragino Sans GB","Microsoft YaHei",STXihei,SimSun,sans-serif;
    -webkit-transition: .4s ease all;
    -moz-transition: .4s ease all;
    -o-transition: .4s ease all;
    transition: .4s ease all;
}
</style>