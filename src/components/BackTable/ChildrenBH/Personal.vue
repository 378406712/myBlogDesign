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
                      <p class="section-lead">{{ e_mail }}</p>
                      <div class="row mt-sm-4">
                        <div class="col-lg-6">
                          <div class="card card-large-icons">
                            <div class="card-icon bg-primary text-white">
                              <i class="fas fa-lock"></i>
                            </div>
                            <div class="card-body">
                              <h4>修改密码</h4>
                              <p>定期修改为高强度密码以保护您的账号</p>
                              <a
                                href="javascript:;"
                                class="card-cta"
                                @click="dialogFormVisible = true"
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
                              <h4>个人信息</h4>
                              <p>个性化设置资料</p>
                              <a
                                href="##"
                                class="card-cta"
                                data-toggle="modal"
                                data-target="#ga-modal"
                                @click="dialogPersonalVisible = true"
                              >
                                立即设置
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
                                @click="removePass"
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

    <!-- 表单 修改密码 -->
    <el-dialog
      top="2%"
      width="35%"
      title="修改账号密码"
      custom-class="alertPwd"
      :visible.sync="dialogFormVisible"
    >
      <el-form v-model="form">
        <el-form-item id="labels" label="原密码">
          <el-input
            v-model="originPass"
            autocomplete="off"
            clearable
          ></el-input>
        </el-form-item>

        <el-form-item id="labels" label="新密码">
          <el-input v-model="newPass" show-password clearable></el-input>
        </el-form-item>

        <el-form-item id="labels" label="再次输入新密码">
          <el-input v-model="againPass" show-password clearable></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="alterPass">确 定</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>

    <!-- 表单 个人信息 -->
    <el-dialog
      top="2%"
      width="50%"
      title="个人信息"
      :visible.sync="dialogPersonalVisible"
    >
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        :label-position="labelPosition"
        label-width="80px"
      >
        <el-row :gutter="10">
          <el-col :span="12">
            <el-form-item
              prop="nickname"
              :rules="{ required: true, message: '昵称不能为空' }"
              id="labels"
              label="昵称"
            >
              <el-input
                type="nickname"
                v-model="ruleForm.nickname"
                clearable
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item id="labels" label="性别">
          <el-radio v-model="ruleForm.sex" label="男" border size="small"
            >男</el-radio
          >
          <el-radio v-model="ruleForm.sex" label="女" border size="small"
            >女</el-radio
          >
        </el-form-item>
        <el-form-item label="生日">
          <el-col :span="12">
            <el-form-item prop="birthday">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.birthday"
                style="width: 85%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-row :gutter="10">
          <el-col :span="12">
            <el-form-item id="labels" label="职业">
              <el-input v-model.trim="ruleForm.job" clearable></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item id="labels" label="家乡">
              <el-cascader
                :options="area.options"
                v-model="area.hometown"
                @change="handleChange"
                clearable
              ></el-cascader>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="头像">
          <el-upload
            action="#"
            list-type="picture-card"
            :limit="1"
            show-file-list

            :file-list="ruleForm.fileList"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog
            :append-to-body="true"
            :visible.sync="ruleForm.dialogVisible"
          >
            <img width="100%" :src="ruleForm.dialogImageUrl" alt="" />
          
          </el-dialog>
        </el-form-item>
        <el-form-item label="个性签名" id="labels" prop="desc">
          <el-input
            type="textarea"
            style="width: 90%;"
            v-model="ruleForm.desc"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="setPersonal">提 交</el-button>
        <el-button @click="dialogPersonalVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import $ from "jquery";
import { JSEncrypt } from "jsencrypt";
import { regionData } from "element-china-area-data";

export default {
  name: "personal",
  data() {
    return {
      //地区多选
      src:"",
      area: {
        options: regionData
      },
      dialogFormVisible: false,
      originPass: "",
      newPass: "",
      againPass: "",
      form: "",

      ruleForm: {
        username: "",
        nickname: "",
        sex: "",
        hometown: [],
        job: "",
        birthday: "",
        desc: "",
        dialogImageUrl: "",
        dialogVisible: false,
fileList:[]      },

      labelPosition: "right",
      dialogPersonalVisible: false //个人信息
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
      this.ruleForm.hometown = value;
    },
    //修改密码
    alterPass() {
      if (this.originPass == "" || this.againPass == "" || this.newPass == "") {
        swal({
          title: "有未输入内容!",
          text: "请重新输入",
          icon: "warning",
          button: "OK"
        });
      } else if (this.originPass == this.newPass && this.originPass != "") {
        swal({
          title: "修改密码失败!",
          text: "原密码与新密码相同",
          icon: "warning",
          button: "OK"
        });
      } else if (this.newPass == this.againPass && this.newPass != "") {
        this.$axios.get("/api/getPublicKey").then(res => {
          //先获取公钥
          if (res.data.status === 0) {
            let encryptor = new JSEncrypt(); //实例化
            encryptor.setPublicKey(res.data.resultmap); //设置公钥

            let PwdData = {
              e_mail: this.e_mail,
              originPass: encryptor.encrypt(this.originPass),
              againPass: encryptor.encrypt(this.againPass)
            };
            this.$axios.post("/api/userPassAlter", PwdData).then(res => {
              if (res.data.status == "0") {
                swal({
                  title: "修改密码成功!",
                  text: "请重新登录",
                  icon: "success",
                  button: "OK"
                }).then(() => {
                  delete localStorage.token;
                  this.$router.go(0);
                });
              } else if (res.data.status == "1") {
                swal({
                  title: "修改密码失败!",
                  text: "原密码错误",
                  icon: "error",
                  button: "OK"
                });
              } else if (res.date.status == "2") {
                swal({
                  title: "修改密码失败!",
                  text: "网络好像有点问题～",
                  icon: "warn",
                  button: "OK"
                });
              }
            });
          } else {
            //网络问题
          }
        });
      } else if (this.newPass != this.againPass) {
        swal({
          title: "修改密码失败!",
          text: "两次输入不符合",
          icon: "error",
          button: "OK"
        });
      }
    },
    //设置个人资料
    setPersonal() {
      let {
        username,
        nickname,
        sex,
        desc,
        hometown,
        job,
        birthday,
        fileList
      } = this.ruleForm;
      let userInfo = {
        username,
        nickname,
        desc,
        sex,
        hometown,
        job,
        birthday,
    fileList
};

//

this.param = new FormData();
      this.param.append("file", file, file.name);

      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      this.$axios.post("/api/userInfoAdd", userInfo).then(res => {
        console.log(res);
        if (res.data == "0") {
          swal({
            title: "设置成功!",
            icon: "success",
            button: "Aww yiss!"
          }).then(() => {
            this.$router.go(0);
          });
        } else if (res.data == "1") {
          swal({
            title: "更新成功!",

            icon: "success",
            button: "Aww yiss!"
          }).then(() => {
            this.$router.go(0);
          });
        } else {
          swal({
            title: "设置失败!",
            text: "网络好像有点问题",
            icon: "error",
            button: "yiss Aww!"
          });
        }
      });
      console.log(userInfo);
    },
    //删除账号
    removePass() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let removeData = {
            params: {
              e_mail: this.e_mail
            }
          };
          this.$axios.get("/api/userRemove", removeData).then(res => {
            if (res.data.status == "0") {
              swal({
                title: "删除成功!",
                icon: "success",
                button: "Aww yiss!"
              }).then(() => {
                delete localStorage.token;
                this.$router.go(0);
              });
            } else {
              swal({
                title: "删除失败,网络好像出了小差～",
                icon: "error",
                button: "yiss Aww!"
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //图片上传
    handleRemove(file, fileList) {
      //console.log(file, fileList);
    },
    //图片点击放大
    handlePictureCardPreview(file) {
      this.ruleForm.dialogImageUrl = file.url;
      this.ruleForm.dialogVisible = true;
    },
   
    //覆盖默认的上传行为
    httprequest() {}
  },
  created() {
    let info = JSON.parse(localStorage.getItem("token"));

    this.ruleForm.username = info.data.username;
    this.e_mail = info.data.e_mail;
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
.el-radio {
  margin: 0;
}
</style>

<style>
.el-form-item__label {
  font-weight: 800;
  color: #34395e;
  font-size: 12px;
  letter-spacing: 0.5px;

  font-family: none;
}
.el-dialog__body {
  padding: 25px;
  padding-top: 15px;
}
.el-dialog {
  border-radius: 0.3rem;
}
.el-dialog__title {
  font-size: 18px;
  margin-bottom: 0;
  line-height: 1.5;
  font-weight: 700;
  color: #6c757d;
}
.swal-button {
  padding: 7px 19px;
  border-radius: 5px;
  background-color: #3085d6;
  font-size: 1.1rem;
  font-family: none;
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.3);
  padding: 10px 25px;
}
.swal-footer {
  text-align: center;
}
</style>
