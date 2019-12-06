<template>
  <div class="mine">
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
              <ul class="card-inner">
                <li>用户名</li>
                <li>{{username}}</li>
                <li>邮箱</li>
                <li>{{e_mail}}</li>
              </ul>
            </div>
          </div>
        </section>
        <section class="list">
          <!-- 待循环 -->
          <div class="card">
            <div class="card-main">
              <el-table :data="tableData2" style="width: 100%" :row-class-name="tableRowClassName">
                <el-table-column prop="date" label="日期" width="180"></el-table-column>
                <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
              </el-table>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "mine",

  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    }
  },
  data() {
    return {
      tableData2: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  created(){
    let {userid,mail} =this.$route.params
      this.username =userid
    this.e_mail =mail
   
  }
};
</script>

<style>
.content-header {
  background-image: url("./../../../assets/bg/bg_back/bg.png");
}
</style>