<template>
  <div class="register">
    <vue-particles
      color="#E16B8C"
      :particleOpacity="0.5"
      :clickEffect="false"
      :particlesNumber="99"
      shapeType="circle"
      :particleSize="1"
      linesColor="#E16B8C"
      :lineOpacity="0.5"
      :moveSpeed="2"
      class="lizi"
    ></vue-particles>
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
          <input
            type="email"
            class="input mail"
            v-model=" e_mail"
            name="mail"
            placeholder="电子邮箱"
            required
          />
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
          <br />
          <strong :class="{none:peg}">
            <span class="mistake">错误</span>
            ：{{w_pass}}
          </strong>
          <br />

          <!-- 滑块 -->
        </p>
        <p class="submit">
          <input type="hidden" name="register" value="ok" />
          <a class="submit_register" @click="confirm">注册</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import '../assets/css/login_register.css'
import $ from 'jquery'
import { JSEncrypt } from 'jsencrypt'

export default {
  name: 'Register',
  data() {
    return {
      flag: true,
      tag: true,
      peg: true,
      lab: true,

      username: '',
      pass1: '',
      pass2: '',
      e_mail: '',

      w_user: '',
      w_pass: '',
      w_mail: '',
      timer: null,
      num: 3
    }
  },
  methods: {
    confirm() {
      var reg = /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)\S{8,}$/
      var exp = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
      if (this.username.length > 10) {
        this.w_user = '用户名长度需少于10位。'
        this.flag = false
        this.tag = false
      }
      if (this.username == '') {
        this.w_user = '用户名不能为空。'
        this.flag = false
        this.tag = false
      }
      if (this.pass1 !== this.pass2) {
        this.w_pass = '两次输入的密码不一致。'

        this.flag = false
        this.peg = false
      }
      if (this.pass1 == this.pass2 && !reg.test(this.pass1)) {
        this.flag = false
        this.peg = false
        this.w_pass =
          '密码必须符合由数字,大写字母,小写字母,至少其中两种组成，且长度不小于8，同时第一位不能为数字'
      }
      if (!exp.test(this.e_mail)) {
        this.w_mail = '邮箱格式不正确。'
        this.flag = false
        this.lab = false
      }

      if (
        this.username.length < 10 &&
        this.username != '' &&
        this.pass1 === this.pass2 &&
        reg.test(this.pass1) &&
        exp.test(this.e_mail)
      ) {
        this.$axios.get('api/getPublicKey').then(res => {
          if (res.data.status === 0) {
            let encryptor = new JSEncrypt() //实例化
            encryptor.setPublicKey(res.data.resultmap) //设置公钥

            let registerData = {
              username: this.username,
              password: encryptor.encrypt(this.pass2),
              e_mail: this.e_mail
            }

            this.$axios
              .post('api/userRegister', registerData)
              .then(res => {
                if (res.data == '-1') {
                  //用户名已经存在
                  this.$message({
                    showClose: true,
                    message: '用户名已存在',
                    type: 'error'
                  })
                }
                if (res.data == '0') {
                  //邮箱已经被注册
                  this.$message({
                    showClose: true,
                    message: '邮箱已经被注册',
                    type: 'error'
                  })
                }
                if (res.data == '1') {
                  this.$message({
                    message: `注册成功,${this.num}秒后跳转~`,
                    type: 'success'
                  })
                  setTimeout(() => {
                    this.$router.push('/login')
                  }, 3000)
                }
                if (res.data == '2') {
                  //注册失败
                  this.$message({
                    showClose: true,
                    message: '好像发生了点问题，再试一次吧~',
                    type: 'error'
                  })
                }
              })
              .catch(() => {
                this.$message({
                  showClose: true,
                  message: '网络好像有点问题~。',
                  type: 'error'
                })
              })
          }
        })
      }
    }
  }
}
</script>

<style  scoped>
.registers {
  margin-top: -100px;
}
.register_logo {
  font-size: 24px;
  color: #666;
  font-family: 'Noto Serif SC', 'Source Han Serif SC', 'Source Han Serif',
    source-han-serif-sc, 'PT Serif', 'SongTi SC', 'MicroSoft Yahei', Georgia,
    serif;
}
.submit_register {
  color: #666;
  background: #eee;
  border-radius: 0%;
  width: 300px;
  transition: 0.4s ease all;
  padding: 12px 10px;
}
.submit_register:hover {
  background: #ff5656;
  border-color: #e67474;
  color: #fff !important;
}
.input {
  width: 300px;
  margin-bottom: 6px;
  padding: 12px 10px;
  border: 1px #ddd solid;
  outline: 0;
  border-radius: 3px;
  font-size: 16px;
  font: 300 14px miranafont, 'Hiragino Sans GB', 'Microsoft YaHei', STXihei,
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
.submit_register {
  display: block;
}
</style>