<template>
  <div class="personal">
    <div class="content">
      <!-- 内容 -->
      <div class="container">
        <section class="list">
          <!-- 待循环 -->
          <div class="card">
            <div class="card-main">
              <ul class="card-inner essay-card">
                <li>
                  <section class="section">
                    <div class="section-header">
                      <h1>我的账号</h1>
                    </div>
                    <div class="section-body">
                      <h2 class="section-title">欢迎, clover_1996!</h2>
                      <p class="section-lead">378406712@qq.com</p>
                      <div class="row mt-sm-4">
                        <div class="col-lg-6">
                          <div class="card card-large-icons">
                            <div class="card-icon bg-primary text-white">
                              <i class="fas fa-lock"></i>
                            </div>
                            <div class="card-body">
                              <h4 >修改密码</h4>
                              <p>定期修改为高强度密码以保护您的账号</p>
                              <a
                                href="##"
                                class="card-cta"
                                data-toggle="modal"
                                data-target="#change-password-modal"
                                @click="alterPass"
                              >
                                立即修改
                                <i class="fas fa-chevron-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="card card-large-icons">
                            <div class="card-icon bg-primary text-white">
                              <i class="fas fa-shield-alt"></i>
                            </div>
                            <div class="card-body">
                              <h4>二步验证</h4>
                              <p>为您的帐号添加一道额外的安全保障</p>
                              <a
                                href="##"
                                class="card-cta"
                                data-toggle="modal"
                                data-target="#ga-modal"
                              >
                                立即开启
                                <i class="fas fa-chevron-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="card card-large-icons">
                            <div class="card-icon bg-primary text-white">
                              <i class="fas fa-skull"></i>
                            </div>
                            <div class="card-body">
                              <h4>删除账号</h4>
                              <p>您的所有数据都会被删除，无法找回</p>
                              <a
                                href="##"
                                class="card-cta"
                                data-toggle="modal"
                                data-target="#kill-modal"
                              >
                                申请删除
                                <i class="fas fa-chevron-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="card">
                            <div class="card-header">
                              <h4>最近五分钟使用IP</h4>
                            </div>
                            <div class="card-body">
                              <table class="table table-striped">
                                <thead>
                                  <tr>
                                    <th scope="col">IP</th>
                                    <th scope="col">归属地</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td colspan="2">
                                      <strong>最近五分钟未使用服务</strong>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div class="card">
                            <div class="card-header">
                              <h4>最近十次登录IP</h4>
                            </div>
                            <div class="card-body">
                              <table class="table table-striped">
                                <thead>
                                  <tr>
                                    <th scope="col">IP</th>
                                    <th scope="col">归属地</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>180.168.208.130</td>
                                    <td>上海市电信</td>
                                  </tr>
                                  <tr>
                                    <td>112.65.61.94</td>
                                    <td>上海市徐汇区联通漕河泾数据中心</td>
                                  </tr>
                                  <tr>
                                    <td>35.194.133.30</td>
                                    <td>台湾省彰化县Google云计算数据中心</td>
                                  </tr>
                                  <tr>
                                    <td>120.204.218.64</td>
                                    <td>上海市移动</td>
                                  </tr>
                                  <tr>
                                    <td>121.69.97.22</td>
                                    <td>北京市鹏博士宽带</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"personal",
    data(){
        return {

        }
    },
    methods:{
          alterPass(){
                   console.log(123)
        this.$axios.post('/api/userPassAlter').then((res)=>{
                console.log(res)
         
        })
    }
    }
  

};
</script>

<style scoped>
.section .section-header {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  background-color: #6777ef;

  border-radius: 3px;
  border: none;
  position: relative;
  margin-bottom: 30px;
  padding: 20px;
  display: flex;
  align-items: center;
}
.section > *:first-child {
  margin-top: -7px;
}
.section .section-header h1 {
  margin-bottom: 0;
  font-weight: 700;
  display: inline-block;
  font-size: 24px;
  margin-top: 3px;
  color: #fff;
}
.navbar-bg {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 115px;
  background-color: #6777ef;
  z-index: -1;
}
.section .section-title {
  font-size: 18px;
  color: #191d21;
  font-weight: 600;
  position: relative;
  margin: 30px 0 25px 0;
}
.section .section-title:before {
  content: " ";
  border-radius: 5px;
  height: 8px;
  width: 30px;
  background-color: #6777ef;
  display: inline-block;
  margin-top: 6px;
  margin-right: 15px;
}
.section .section-title + .section-lead {
  margin-top: -20px;
}
.section .section-lead {
  margin-left: 45px;
}
p,
ul:not(.list-unstyled),
ol {
  line-height: 28px;
}
.card.card-large-icons .card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 150px;
  border-radius: 3px 0 0 3px;
}
.card-icon svg {
  font-size: 60px !important;
}
.card.card-large-icons .card-body {
  padding: 25px 30px;
}
.card.card-large-icons .card-body h4 {
  font-size: 18px;
}
.card.card-large-icons .card-body p {
  opacity: 0.6;
  font-weight: 500;
}
.bg-primary {
  background-color: #6777ef !important;
}
.card.card-large-icons {
  display: flex;
  flex-direction: row;
}
.fa,
.fas {
  font-weight: 900;
}
</style>