<template>
  <div class="comment">
    <div class="content">
      <!-- 内容 -->
      <div class="container">
        <section class="list">
          <!-- 待循环 -->
          <div class="card">
            <div class="card-main">
              <ul class="card-inner essay-card">
                <li>
                  <table class="table table-striped">
                    <thead>
                      <tr id="first">
                        <td v-for="item of options" :key="item">{{item}}</td>
                      </tr>
                    </thead>
                    <tbody id="app">
                      <tr>
                        <td>
                          <img class="c_avatar" src="./../../../assets/bg/icon/none.png" alt />
                          <span class="names">Clover</span>
                        </td>
                        <td>2</td>
                        <td>1</td>
                        <td>2</td>
                        <td>2</td>
                        <td></td>
                        <router-view></router-view>
                      </tr>
                    </tbody>
                  </table>
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
  name: "",
  data() {
    return {
      options: ["作者", "评论", "回复至", "提交于", "QQ"]
    };
  }
};
</script>

<style  scoped>
.card {
  margin-top: 65px;
}
.c_avatar {
  width: 45px;
  height: 45px;
}
.table th,
.table td {
  vertical-align: middle;
  text-align: center;
}
</style>