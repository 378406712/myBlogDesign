<template>
  <div class="center">
    <div class="content">
      <div class="content-header">
        <div class="container">
          <h1 class="content-heading">用户中心</h1>
        </div>
      </div>

      <!-- 内容 -->
      <div class="container">
        <section class="list">
          <!-- 待循环 -->
          <div class="card">
            <div class="card-main">
              <div class="myAccount">
                <div class="account">
                  <a
                    @click="drawer = true"
                    style="color:white"
                    href="javascript:;"
                    to="/backhome/personal"
                    class="btn btn-mine btn-icon icon-left btn-primary"
                  >
                    <i class="fas fa-address-card"></i>
                    我的资料
                  </a>

                  <el-drawer style="padding:20px" title="个人资料" :visible.sync="drawer" :with-header="false">
                    <!-- 头像 -->
                    <div class="demo-fit" style="padding:20px">
                      <div class="block" v-for="fit in fits" :key="fit">
                        <el-avatar
                          style="vertical-align:middle"
                          shape="circle"
                          :size="100"
                          :fit="fit"
                          :src="url"
                        ></el-avatar>
                        <span class="title" style="margin-left:20px">昵称 ： {{ fit }}</span>
                        
                  
                      </div>
                    </div>
                  </el-drawer>
                </div>
              </div>
              <ul class="card-inner card-mine">
                <li>用户名 :</li>
                <li v-changeColor="{font:21+'px'}">{{username}}</li>
                <li>邮箱 :</li>
                <li v-changeColor="{font:21+'px'}">{{e_mail}}</li>
              </ul>
            </div>
          </div>
        </section>
        <section class="list">
          <!-- 待循环 -->
          <div class="card">
            <div class="card-main">
              <el-table :data="tableData2" style="width: 100%" :row-class-name="tableRowClassName">
                <el-table-column prop="time" label="登录时间" width="180"></el-table-column>
                <el-table-column prop="ip" label="ip" width="180"></el-table-column>
                <el-table-column prop="os" label="设备信息"></el-table-column>
                <el-table-column prop="browser.version" label="浏览器信息"></el-table-column>
                <el-table-column prop label="操作">
                  <!-- <el-button type="primary" icon="el-icon-check"  @click="open" circle></el-button> -->
                  <template slot-scope="scope">
                    <el-button type="danger" icon="el-icon-delete" @click="open(scope.row)" circle></el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>


<script>
import store from "./../../../store/store";
export default {
  name: "center",
  data() {
    return {
      username: "",
      e_mail: "",
      tableData2: [],
      id: "",
      flag: true,
      drawer: false,
      fits: ["Clover"],
      url: "https://q4.qlogo.cn/g?b=qq&nk=378406712@qq.com&s=3?d=retro",
      numberValidateForm: {
        age: ""
      },
      radio: "1"
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 1) {
        return "warning-row";
      } else if (rowIndex % 2 === 0) {
        return "success-row";
      }
      return "";
    },

    open(val) {
      // console.log(val._id);
      this.$confirm("此操作将删除该记录 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios
            .get("/api/deleteUserInfo", {
              params: {
                _id: val._id
              }
            })
            .then(res => {
              this.getInfo();
              this.$message({
                type: "success",
                message: "删除成功!"
              });
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    getInfo() {
      this.$axios
        .get("/api/getUserInfo", {
          params: {
            username: this.username
          }
        })
        .then(res => {
          res.data.map((item, index) => {
            item.browser.version = item.browser.version.replace("/", " ");
          });

          this.tableData2 = res.data.reverse();
        });
    },
    jumpToPersonal() {
      this.$router.push("/backhome/personal");
      this.$store.commit("initstoreList", "true");
    },
    submitForm(formName) {
      // this.$refs[formName].validate(valid => {
      //   if (valid) {
      //     alert("submit!");
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
    },
    resetForm(formName) {
      // this.$refs[formName].resetFields();
    }
  },

  created() {
    let info = JSON.parse(localStorage.getItem("token"));
    this.username = info.data.username;
    this.e_mail = info.data.e_mail;
  },
  mounted() {
    this.getInfo();
  }
};
</script>

<style>
.content-header {
  background-image: url("./../../../assets/bg/bg_back/bg.png");
}
.card-mine li {
  margin-bottom: 10px !important;
}
button:focus {
  outline: none;

  box-shadow: none;
}
.el-table .warning-row {
  background: #c8e6e8;
}
.account {
  float: right;
}

</style>