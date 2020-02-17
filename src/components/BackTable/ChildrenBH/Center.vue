<template>
  <div class="center">
    <div class="grey_bg">
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
                      @click="showUserInfo"
                      style="color:white"
                      href="javascript:;"
                      to="/backhome/personal"
                      class="btn btn-mine btn-icon icon-left btn-primary"
                    >
                      <i class="fas fa-address-card"></i>
                      我的资料
                    </a>

                    <el-drawer
                      custom-class="drawers"
                      title="个人资料"
                      :visible.sync="drawer"
                      :with-header="false"
                    >
                      <!-- 头像 -->
                      <el-divider content-position="left" style="padding:20px"
                        ><el-button type="primary" round @click="jumpToPersonal"
                          >编辑资料</el-button
                        ></el-divider
                      >
                      <div
                        class="demo-fit"
                        style="padding:20px 20px 0px 20px;diplay:flex"
                      >
                        <div class="block">
                          <el-avatar
                            style="vertical-align:middle"
                            shape="circle"
                            :size="100"
                            :src="userInfoData.uploadUrl"
                          ></el-avatar>
                          <div class="block_item1">
                            <span class="title" style="margin-left:20px"
                              >昵称 ： {{ userInfoData.nickname }}</span
                            >
                            <span
                              class="title"
                              style="margin-left:20px;marginTop:10px"
                              >性别 ：
                              <svg
                                v-if="userInfoData.sex == '男'"
                                aria-hidden="true"
                                class="icon_svg"
                              >
                                <use xlink:href="#iconnan"></use>
                              </svg>
                              <svg
                                v-if="userInfoData.sex == '女'"
                                aria-hidden="true"
                                class="icon_svg"
                              >
                                <use xlink:href="#iconnv"></use>
                              </svg>
                            </span>
                          </div>
                        </div>
                        <el-divider></el-divider>
                      </div>
                      <!-- 个性签名，地区，职业等 -->
                      <div class="more_detail">
                        <p>
                          <svg aria-hidden="true" class="icon_svg">
                            <use xlink:href="#iconqianming"></use></svg
                          >个性签名：{{ userInfoData.desc }}
                        </p>
                        <el-divider></el-divider>
                        <p>
                          <svg aria-hidden="true" class="icon_svg">
                            <use xlink:href="#iconlingdai"></use></svg
                          >职业：{{ userInfoData.job }}
                        </p>

                        <p>
                          <svg aria-hidden="true" class="icon_svg">
                            <use xlink:href="#iconnb-"></use></svg
                          >家乡：{{ userInfoData.hometown }}
                        </p>

                        <p>
                          <svg aria-hidden="true" class="icon_svg">
                            <use xlink:href="#icondangao"></use></svg
                          >生日：{{ userInfoData.birthday }}
                        </p>
                      </div>
                    </el-drawer>
                  </div>
                </div>
            <el-row  type ="flex">
                <el-col :span="8"> 
                  <el-row>
                    <el-col>
                <ul class="card-inner card-mine">
                  <li>用户名 :</li>
                  <li v-changeColor="{ font: 21 + 'px' }">{{ username }}</li>
                  <li>邮箱 :</li>
                  <li v-changeColor="{ font: 21 + 'px' }">{{ e_mail }}</li>
                  <li>
                  
                  </li>
                </ul>
                  </el-col>
                  <el-col>饼图</el-col>
                 </el-row>
                </el-col>
                <el-col  :span="16">
              <div id="main" style="width: 600px;height:400px;"></div>
                </el-col>
            </el-row>
              </div>
            </div>
          </section>
          <section class="list">
            <!-- 待循环 -->
            <div class="card">
              <div class="card-main">
                <div style="margin-bottom: 20px">
                  <el-button ref="allDelete" type="primary" @click="allDelete"
                    >批量删除</el-button
                  >
                </div>
                <el-table
                  @selection-change="handleSelectionChange"
                  border
                  style="width: 100%"
                  :data="
                    tableData2.filter(
                      data =>
                        !search ||
                        data.time
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        data.ip.toLowerCase().includes(search.toLowerCase()) ||
                        data.os.toLowerCase().includes(search.toLowerCase()) ||
                        data.browser.version
                          .toLowerCase()
                          .includes(search.toLowerCase())
                    )
                  "
                >
                  <el-table-column type="selection" width="55">
                  </el-table-column>
                  <el-table-column
                    prop="time"
                    label="登录时间"
                    width="180"
                  ></el-table-column>
                  <el-table-column
                    prop="ip"
                    label="ip"
                    width="180"
                  ></el-table-column>
                  <el-table-column prop="os" label="设备信息"></el-table-column>
                  <el-table-column
                    prop="browser.version"
                    label="浏览器信息"
                  ></el-table-column>
                  <el-table-column>
                    <template slot="header" slot-scope="scope">
                      <el-input
                        v-model="search"
                        size="mini"
                        placeholder="输入关键字搜索"
                        @change="show(scope.row)"
                      />
                    </template>
                    <template slot-scope="scope">
                      <el-button
                        type="danger"
                        icon="el-icon-delete"
                        @click="open(scope.row)"
                        circle
                      ></el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
            <!-- 分页 -->
            <Paginations
              :msg="length"
              :size="size"
              :page="page"
              v-on:sizeValue="sizeValue"
              v-on:pageValue="pageValue"
            />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "./../../../store/store"
import Paginations from "../Pagination"
import "../../../assets/css/center.css"
import { CodeToText } from "element-china-area-data"
export default {
  name: "center",
  components: { Paginations },
  data() {
    return {
      disabled: true,
      id: "",
      url: "",
      flag: true,
      drawer: false,
      e_mail: "",
      username: "",
      length: "",
      tableData2: [],
      search: "",
      userInfoData: {
        url:
          "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      },
      page: 1,
      size: 8
    };
  },
  methods: {
    open(val) {
      this.$confirm("此操作将删除该记录 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios
            .get("/api/deleteServerInfo", {
              params: {
                _id: val._id
              }
            })
            .then(res => {
              this.getServerInfo();
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
          })
        })
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    getServerInfo() {
      this.$axios
        .get("/api/getServerInfo", {
          params: {
            username: this.username
          }
        })
        .then(res => {
         if(res.data.length!=0){
             res.data.map((item, index) => {
            item.browser.version = item.browser.version.replace("/", " ");
          })
          this.length = res.data.length
          this.$store.commit("settingList", {
            username: this.username,
            mode: "loginCounts",
            data: this.length
          })
          this.tableData2 = res.data
            .reverse()
            .slice(this.size * (this.page - 1), this.size * this.page);
          if (this.tableData2.length == 0) {
            this.page -= 1
            this.getServerInfo()
          }
         }
         else{
            this.tableData2 = res.data
         }
        })
    },
    jumpToPersonal() {
      this.$router.push("/backhome/personal")
      this.$store.commit("sliderList", 2)
      this.$router.go(0)
    },
    submitForm(formName) {},
    resetForm(formName) {},
    getUserInfo() {
      this.$axios
        .get("/api/userInfoData", {
          params: {
            username: this.username
          }
        })
        .then(res => {
          this.userInfoData = res.data;
          let hometown = [];
          res.data.hometown.map((item, index) => {
            hometown += CodeToText[item] + " ";
            this.userInfoData.hometown = hometown;
          });
          if (this.userInfoData.hometown.length == 0) {
            this.userInfoData.hometown = "";
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    showUserInfo() {
      this.drawer = true;
      this.getUserInfo();
    },
    pageValue(pageValue) {
      this.page = pageValue;
      this.getServerInfo();
    },
    sizeValue(sizeValue) {
      this.size = sizeValue;
      this.getServerInfo();
    },
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    allDelete() {
      if (this.multipleSelection) {
        this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            const data = [];
            this.multipleSelection.map(item => {
              Object.getOwnPropertyNames(item).forEach(function(key) {
                if (key == "_id") {
                  data.push(item[key])
                }
              })
            })
            this.$axios
              .get("/api/deleteAllServerInfo", {
                params: {
                  _id: JSON.stringify(data)
                }
              })
              .then(res => {
                if (res.data.status == "0") {
                  this.$message({
                    type: "success",
                    message: "删除成功!"
                  })
                  this.getServerInfo();//bug 此处不执行
                } else {
                  this.$message({
                    type: "error",
                    message: "网络可能有点问题～"
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
      } else {
        this.$message({
          message: "先选中～",
          type: "warning"
        });
      }
    }
  },
  created() {
    let info = JSON.parse(localStorage.getItem("token"));
    this.username = info.data.username;
    this.e_mail = info.data.e_mail;
    this.getUserInfo();
  },
  mounted() {
    this.drawChart();
   this.getServerInfo();
  }
};
</script>
<style scoped>
.content-header {
  background-image: url("./../../../assets/bg/bg_back/bg.png");
}
</style>
