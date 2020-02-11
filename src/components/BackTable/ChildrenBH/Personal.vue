<template>
  <div class="personal">
    <div class="grey_bg">
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
                                  @click="alterForm.dialogFormVisible = true"
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
                                  @click="ruleForm.dialogPersonalVisible = true"
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
                                <h4>最近使用服务</h4>
                              </div>
                              <div class="card-body">
                                <div
                                  id="main"
                                  style="width: 600px;height:400px"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <!-- 表单 修改密码 -->
    <el-dialog
      top="2%"
      width="35%"
      :close-on-click-modal="false"
      title="修改账号密码"
      custom-class="alertPwd"
      :visible.sync="alterForm.dialogFormVisible"
    >
      <el-form v-model="alterForm.form">
        <el-form-item id="labels" label="原密码">
          <el-input
            v-model="alterForm.originPass"
            autocomplete="off"
            clearable
          ></el-input>
        </el-form-item>

        <el-form-item id="labels" label="新密码">
          <el-input
            v-model="alterForm.newPass"
            show-password
            clearable
          ></el-input>
        </el-form-item>

        <el-form-item id="labels" label="再次输入新密码">
          <el-input
            v-model="alterForm.againPass"
            show-password
            clearable
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="alterPass">确 定</el-button>
        <el-button @click="alterForm.dialogFormVisible = false"
          >取 消</el-button
        >
      </div>
    </el-dialog>

    <!-- 表单 个人信息 -->
    <el-dialog
      top="2%"
      width="50%"
      title="个人信息"
      :visible.sync="ruleForm.dialogPersonalVisible"
    >
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        :label-position="ruleForm.labelPosition"
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
                style="width: 85%"
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
                :options="ruleForm.area.options"
                v-model="ruleForm.area.hometown"
                @change="handleChange"
                clearable
              ></el-cascader>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="头像">
              <el-upload
                action="#"
                list-type="picture-card"
                :limit="1"
                show-file-list
                :before-upload="beforeupload"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item>
              <el-image width="80%" class="showPic" :src="ruleForm.url" alt="">
                <div slot="error" class="image-slot">
                  <i style="fontSize:28px" class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="个性签名" id="labels" prop="desc">
          <el-input
            type="textarea"
            style="width: 91.5%"
            v-model="ruleForm.desc"
          ></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="setPersonal">提 交</el-button>
        <el-button @click="ruleForm.dialogPersonalVisible = false"
          >取 消</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import $ from "jquery";
import { mapState } from "vuex";
import { JSEncrypt } from "jsencrypt";
import "../../../assets/css/personal.css";
import { regionData, CodeToText } from "element-china-area-data";

export default {
  name: "personal",
  data() {
    return {
      //修改密码表单
      alterForm: {
        dialogFormVisible: false,
        originPass: "",
        newPass: "",
        againPass: "",
        form: ""
      },
      //个人信息表单
      ruleForm: {
        username: "",
        nickname: "",
        sex: "",
        hometown: [],
        job: "",
        birthday: "",
        desc: "",
        url: "",
        area: {
          options: regionData
        },
        param: new FormData(),
        labelPosition: "right",
        dialogPersonalVisible: false
      },
      //数据可视化
      settingData: {},
      settingSum: 0
    };
  },
  methods: {
    //地区处理
    handleChange(value) {
      this.ruleForm.hometown = value;
    },
    //修改密码
    alterPass() {
      let { originPass, againPass, newPass } = this.alterForm;
      if (originPass == "" || againPass == "" || newPass == "") {
        swal({
          title: "有未输入内容!",
          text: "请重新输入",
          icon: "warning",
          button: "OK"
        });
      } else if (originPass == newPass && originPass != "") {
        swal({
          title: "修改密码失败!",
          text: "原密码与新密码相同",
          icon: "warning",
          button: "OK"
        });
      } else if (newPass == againPass && newPass != "") {
        this.$axios.get("/api/getPublicKey").then(res => {
          //先获取公钥
          if (res.data.status === 0) {
            let encryptor = new JSEncrypt(); //实例化
            encryptor.setPublicKey(res.data.resultmap); //设置公钥

            let PwdData = {
              e_mail: this.e_mail,
              originPass: encryptor.encrypt(originPass),
              againPass: encryptor.encrypt(againPass)
            };
            this.$axios.post("/api/userPassAlter", PwdData).then(res => {
              if (res.data.status == "0") {
                swal({
                  title: "修改密码成功!",
                  text: "请重新登录",
                  icon: "success",
                  button: "OK"
                })
                  .then(() => {
                    delete localStorage.token;
                    this.$router.go(0);
                  })
                  .then(() => {
                    this.$store.commit("settingList", {
                      username: this.ruleForm.username,
                      mode: "alterPass",
                      data: 1
                    });

                    this.$axios.post(
                      "/api/optionStatistical",
                      this.statistical
                    );
                  });
              } else if (res.data.status === "1") {
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
      } else if (newPass != againPass) {
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
        url,
        username,
        e_mail,
        nickname,
        sex,
        desc,
        hometown,
        job,
        birthday
      } = this.ruleForm;
      if (hometown.length === 0) {
        hometown = this.ruleForm.area.hometown;
      }
      let userInfo = {
        url,
        username,
        e_mail,
        nickname,
        desc,
        sex,
        job,
        birthday,
        hometown
      };
      this.ruleForm.param.append("message", JSON.stringify(userInfo));
      this.$axios.post("/api/userInfoAdd", this.ruleForm.param).then(res => {
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
          })
            .then(() => {
              this.$router.go(0);
            })
            .then(() => {
              this.$store.commit("settingList", {
                username: this.ruleForm.username,
                mode: "updateData",
                data: 1
              });

              this.$axios.post("/api/optionStatistical", this.statistical);
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
    },
    //获取个人资料显示在表单
    getPersonal() {
      let getPersonalData = this.$axios
        .get("/api/userInfoData", {
          params: {
            username: this.ruleForm.username
          }
        })
        .then(res => {
          let {
            nickname,
            sex,
            hometown,
            job,
            birthday,
            desc,
            uploadUrl
          } = res.data;
          this.ruleForm.nickname = nickname;
          this.ruleForm.sex = sex;
          this.ruleForm.job = job;
          this.ruleForm.birthday = birthday;
          this.ruleForm.desc = desc;
          this.ruleForm.url = uploadUrl;
          this.ruleForm.area.hometown = hometown;
        });
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

    //阻止upload的自动上传，进行再操作
    beforeupload(file) {
      //创建临时的路径来展示图片
      var windowURL = window.URL || window.webkitURL;
      this.ruleForm.url = windowURL.createObjectURL(file);
      //重新写一个表单上传的方法
      this.ruleForm.param.append("file", file, file.name);
      return false;
    },
    //覆盖默认的上传行为
    httprequest() {},
    //echarts可视化图
    drawChart() {
      let myChart = this.$echarts.init(document.getElementById("main"));

      // 指定图表的配置项和数据
      let option = {
        title: [
          {
            text: "Echats Provide",
            textStyle: {
              fontSize: 16,
              color: "black"
            },
            left: "2%"
          },
          {
            text: "合计",
            subtext: this.settingSum + "个",
            textStyle: {
              fontSize: 20,
              color: "black"
            },
            subtextStyle: {
              fontSize: 20,
              color: "black"
            },
            textAlign: "center",
            x: "34.5%",
            y: "44%"
          }
        ],
        tooltip: {
          trigger: "item",
          formatter: function(parms) {
            var str =
              parms.seriesName +
              "</br>" +
              parms.marker +
              "" +
              parms.data.legendname +
              "</br>" +
              "数量：" +
              parms.data.value +
              "</br>" +
              "占比：" +
              parms.percent +
              "%";
            return str;
          }
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          left: "70%",
          align: "left",
          top: "middle",
          textStyle: {
            color: "#8C8C8C"
          },
          height: 250
        },
        series: [
          {
            name: "标题",
            type: "pie",
            center: ["35%", "50%"],
            radius: ["40%", "65%"],
            clockwise: false, //饼图的扇区是否是顺时针排布
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "outter",
                formatter: function(parms) {
                  return parms.data.legendname;
                }
              }
            },
            labelLine: {
              normal: {
                length: 5,
                length2: 3,
                smooth: true
              }
            },
            data: [
              {
                value: this.settingData.alterPass,
                legendname: "修改密码",
                name: `修改密码  ${this.settingData.alterPass}`,
                itemStyle: { color: "#8d7fec" }
              },
              {
                value: this.settingData.updateData,
                legendname: "更新资料",
                name: `更新资料  ${this.settingData.updateData}`,
                itemStyle: { color: "#e75fc3" }
              },
              {
                value: this.settingData.editEssay,
                legendname: "撰写文章",
                name: `撰写文章  ${this.settingData.editEssay}`,
                itemStyle: { color: "#f87be2" }
              },
              {
                value: this.settingData.readComment,
                legendname: "查看评论",
                name: `查看评论  ${this.settingData.readComment}`,
                itemStyle: { color: "#f2719a" }
              },
              {
                value: this.settingData.loginCounts,
                legendname: "登陆次数",
                name: `登陆次数  ${this.settingData.loginCounts}`,
                itemStyle: { color: "#57e7ec" }
              }
            ]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  created() {
    let info = JSON.parse(localStorage.getItem("token"));
    this.ruleForm.username = info.data.username;
    this.e_mail = info.data.e_mail;
    this.ruleForm.e_mail = info.data.e_mail;
    this.getPersonal();

    this.$axios
      .get("/api/optionStatistical", {
        params: {
          username: info.data.username
        }
      })
      .then(res => {
        if (res.data.length != 0) {
          this.$store.commit("settingList", ...res.data);
        }
        delete this.statistical._id;

        this.settingData = this.statistical;
        Object.keys(this.settingData).forEach((item, key) => {
          if (item != "_id" && item != "username") {
            this.settingSum += this.settingData[item];
          }
        });
        this.drawChart();
      });
  },
  mounted() {},
  computed: {
    ...mapState({
      statistical: state => state.setting
    })
  }
};
</script>

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
