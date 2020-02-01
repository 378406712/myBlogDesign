<template>
  <div class="login">
    <div id="bg_lr">
      <img src="./../assets/bg_login.png" alt />
    </div>
    <div v-if="checkin" class="logins">
      <h1 class="login_logo">用户登录</h1>
      <form action class="login_form">
        <p>
          <label for="accounts">用户名或电子邮件</label>
          <br />
          <input
            type="text"
            v-model="user"
            @focus="flag=!flag"
            @blur="flag=!flag"
            :class="{'red':flag}"
            class="input account"
          />
        </p>

        <p>
          <label for="password">密码</label>
          <br />
          <input
            type="password"
            v-model="password"
            @focus="tag=!tag"
            @blur="tag=!tag"
            :class="{'red':tag}"
            class="input password"
          />
        </p>
        <!-- 滑块 -->
        <p class="submit">
          <a @click="tologin" class="submit_login">登入</a>
        </p>
        <p class="notice">请先注册！Register first, plz!</p>
        <p class="toregister">
          <router-link to="/register">Register</router-link>|
          <router-view></router-view>El Psy Congroo
        </p>
      </form>
    </div>
    <div v-if="!checkin" class="logins detail">
      <div class="check">
        <p class="login_avatar">
          <a href="#" title="更换头像">
            <img src="./../assets/avatar.jpg" alt />
          </a>
        </p>
        <p class="login_user">
          欢迎,
          <strong>{{a_user}}</strong>
        </p>
        <p class="e_mail">{{e_mail}}</p>
        <p class="ex-logout">
          <!-- <a href="/">首页</a> -->
          <router-link to="/">首页</router-link>
          <router-link :to="{name:'center'}">后台</router-link>
          <router-view></router-view>
          <a href="javascript:;" @click="toquit">登出？</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import "./../assets/login_register.css";
import resizeImage from "./../assets/login";
import getInfo from "./../assets/info";
import $ from "jquery";
import { JSEncrypt } from "jsencrypt";
export default {
  name: "Login",

  data() {
    return {
      flag: false,
      tag: false,
      checkin: true,
      user: "",
      password: "",
      a_user: "",
      e_mail: null
    };
  },
  methods: {
    //登录
    tologin() {
    
      this.$axios.get("api/getPublicKey").then(res => {
        //先获取公钥
      
        if (res.data.status === 0) {
          let encryptor = new JSEncrypt(); //实例化
          encryptor.setPublicKey(res.data.resultmap); //设置公钥

          let LoginData = {
            username: this.user,
            password: encryptor.encrypt(this.password)
          };

          //登录
          this.$axios.post("api/userLogin", LoginData).then(res => {
          
            if (res.data.status == "0") {
              this.$message({
                showClose: true,
                message: "不存在用户",
                type: "error"
              });
            } else if (res.data.status == "2") {
              this.$message({
                showClose: true,
                message: "密码不正确",
                type: "error"
              });
            } else if (res.data.status == "1") {
              this.e_mail = res.data.e_mail;

              //设置token作登录判断，存入localstorage并设置过期时间
              let setTime = new Date().getTime() + 1000 * 60 * 30; // 设置30分钟后数据过期,main.js下做判断
              let datas = res.data;
              localStorage.setItem(
                "token",
                JSON.stringify({
                  data: datas,
                  expiration: setTime
                })
              );

              //用户名密码都正确
              var data = JSON.parse(res.config.data);
              this.a_user = data.username;

              this.$message({
                message: "登录成功",
                type: "success"
              });
              this.checkin = false;

              //设备信息
              /*
               * 获取系统版本信息
               */

              //console.log(getInfo.getOsInfo()) //OS信息
              //console.log(getInfo.getDigits());
              //console.log(getInfo.getBrowser());
            let InfoData = {
              username: this.user,
              e_mail:this.e_mail,
              os:getInfo.getOsInfo(),
              digits:getInfo.getDigits(),
              browser:getInfo.getBrowser()

            }
              //登录信息,登录时间,ip,设备信息
              this.$axios.post('api/postServerInfo',InfoData)
            }
          });
        }
      });
    },
    //登出
    toquit() {
      localStorage.removeItem("token");
      this.checkin = true;
    }
  },

  mounted() {
    $("#bg_lr").css({
      position: "absolute",
      top: "0px",
      left: "0px",
      width: "100%",
      height: "100%",
      "z-index": -1,
      overflow: "hidden"
    });

    $(window).resize(() => {
      resizeImage("bg_lr");
    });
  }
};
</script>

<style scoped>
.red {
  border: 1px solid #ff5656;
}
.submit_login {
  display: block;
  padding: 12px 10px;
  transition: color 0.3s ease;
}
.submit_login:hover {
  color: #fff !important;
}
.toregister,
.notice {
  text-align: center;
}
.toregister a {
  text-decoration: underline;
}

.check {
  width: 100%;
  margin: 10% 0 12%;
  text-align: center;
  font-size: 16px;
  color: #555;
}

.login_avatar img {
  border-radius: 100%;
  border: 1px solid #ddd;
  padding: 5px;
  width: 110px;
  height: 110px;
  max-width: 100%;
}
.login_user {
  margin: 16px;
  font-size: 20px;
  text-align: center;
}
.login_user strong {
  font-weight: 700;
}
.e_mail,
.ex-logout,
.login_avatar {
  margin: 12.8px;
}
.ex-logout a {
  color: #555;
  text-decoration: underline;
  margin: 0 20px;
  font-size: 16px;
  transition: color 0.3s ease;
}
.ex-logout a:hover {
  color: #fff;
}
</style>