<template>
  <div class="register">
    <div class="registers">
      <h3 class="register_logo">New Account</h3>
      <form action class="register_form">
        <p>
          <input
            type="text"
            v-model="username"
            class="input user"
            name="user"
            placeholder="用户名"
            required
          />
        </p>
        <p>
          <input type="email" class="input mail" v-model=" e_mail" name="mail" placeholder="电子邮箱" required />
        </p>

        <p>
          <input
            type="password"
            v-model="pass1"
            class="input password1"
            name="password"
            placeholder="密码"
            required
          />
        </p>
        <p>
          <input
            type="password"
            v-model="pass2"
            class="input password2"
            name="password"
            placeholder="确认密码"
            required
          />
        </p>
        <p class="warnings" :class="{none:flag}">
          <strong :class="{none:tag}">
            <span class="mistake">错误</span>
            ：{{w_user}}
          </strong>
          <br />
          <strong :class="{none:lab}">
            <span class="mistake">错误</span>
            ：{{w_mail}}
          </strong>
          <br/>
          <strong :class="{none:peg}">
            <span class="mistake">错误</span>
            ：{{w_pass}}
          </strong>
          <br />

          <!-- 滑块 -->
        </p>
        <p class="submit">
          <input type="hidden" name="register" value="ok" />
          <input type="" class="submit_register" @click="confirm" value="注册" />
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
    return {
      flag: true,
      tag: true,
      peg: true,
      lab:true,
      username: "",
      pass1: "",
      pass2: "",
      e_mail:"",
      w_user: "",
      w_pass: "",
      w_mail:""
    };
  },
  methods: {
    confirm() {
      var reg = /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)\S{8,}$/;
      var exp =/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      if (this.username.length > 10) {
        this.w_user = "用户名长度需少于10位。";
        this.flag = false;
        this.tag = false;
      }
      if (this.pass1 !== this.pass2) {
        this.w_pass = "两次输入的密码不一致。";

        this.flag = false;
        this.peg = false;
      }
      if (this.pass1 == this.pass2 && !reg.test(this.pass1)) {
        this.flag = false;
        this.peg = false;
        this.w_pass =
          "密码必须符合由数字,大写字母,小写字母,至少其中两种组成，且长度不小于8，同时第一位不能为数字";
      }
      if(!exp.test(this.e_mail)){
       
         this.w_mail='邮箱格式不正确。 '
         this.flag = false;
        this.lab = false;
      }

      if (
        this.username.length < 10 &&
        this.pass1 === this.pass2 &&
     
        reg.test(this.pass1)&&
        exp.test(this.e_mail)
      ) {
     console.log(1)
      }
    }
  },
  updated() {
    this.$nextTick(() => {});
  }
};
</script>

<style  scoped>
.registers {
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
  width: 300px;
  transition: 0.4s ease all;
}
.submit_register:hover {
  background: #ff5656;
  border-color: #e67474;
  color: #fff;
}
.input {
  width: 300px;
  margin-bottom: 6px;
  padding: 12px 10px;
  border: 1px #ddd solid;
  outline: 0;
  border-radius: 3px;
  font-size: 16px;
  font: 300 14px miranafont, "Hiragino Sans GB", "Microsoft YaHei", STXihei,
    SimSun, sans-serif;
  -webkit-transition: 0.4s ease all;
  -moz-transition: 0.4s ease all;
  -o-transition: 0.4s ease all;
  transition: 0.4s ease all;
}
.warnings {
  text-align: left;
  font-size: 12px;
  width: 300px;
  margin: 0 34px 24px;
  padding: 8px;
  background: rgba(241, 241, 241, 0.5);
}

strong {
  font-weight: normal;
  color: #404040;
}
.mistake {
  font-weight: 900;
}
.none {
  display: none;
}
</style>