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
data(){
  return {
      username:'',
  e_mail:'',
  tableData2: [
  
      ]
  }
},
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
 
  created() {
    let info  = JSON.parse(localStorage.getItem("token"));
    this.username = info.data.username;
    this.e_mail = info.data.e_mail;

  },
  mounted(){

    this.$axios.get('/api/getUserInfo',{
      params:{
        username:this.username
      }
    }).then((res)=>{
      console.log(res.data)

    // res.data.match((item,res)=>{



    // })



      this.tableData2 = res.data
    })


  }
};
</script>

<style>
.content-header {
  background-image: url("./../../../assets/bg/bg_back/bg.png");
}
.card-mine li {
  margin-bottom: 10px!important;
}
</style>