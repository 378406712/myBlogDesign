<template>
  <div class="edit">
    <div class="grey_bg">
      <div class="content">
        <div class="content-header">
          <div class="container">
            <h1 class="content-heading">编辑文章</h1>
          </div>
        </div>

        <!-- 内容 -->
        <div class="container">
          <section class="list">
            <!-- 待循环 -->
            <div class="card">
              <div class="card-main">
                <ul class="card-inner">
                  <li class="card-search">
                    <span
                      class="el-icon-search"
                      :class="{ searh_color: flag }"
                    ></span>
                    <input
                      @focus="flag = !flag"
                      @blur="flag = !flag"
                      :class="{ orange: flag }"
                      class="search"
                      type="text"
                      v-model="search"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section class="list">
            <!-- 待循环 -->
            <div class="card">
              <div class="card-main">
                <ul class="card-inner essay-card">
                  <li>
                    <table class="table table-striped">
                      <thead>
                        <tr id="first">
                          <td v-for="item of characters" :key="item">
                            {{ item }}
                          </td>
                        </tr>
                      </thead>
                      <tbody id="app">
                        <tr v-for="item of filterItem" :key="item.id">
                          <td>{{ item.caption | limit }}</td>
                          <td>{{ item.content | limit }}</td>
                          <td>
                            <router-link :to="'/backhome/compile/' + item.id">
                              <button class="btn btn-primary edits">
                                编辑
                              </button>
                            </router-link>

                            <button
                              class="btn btn-danger del"
                              @click="del(item.id)"
                            >
                              删除
                            </button>
                          </td>
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
  </div>
</template>

<script>
import "../../../../assets/css/essay_compile_edit.css";

export default {
  inject: ["reload"],
  name: "edit",
  data() {
    return {
      search: "",
      flag: false,
      characters: ["caption", "content", "operation"],
      items: [],
      search: ""
    };
  },
  mounted() {
    this.$axios
      .get("https://myblog-bb162.firebaseio.com/essay.json")
      .then(res => {
        return res.data;
      })
      .then(data => {
        let dataArr = [];
        for (let key in data) {
          data[key].id = key; //添加唯一标识key值
          if (data[key].content.length > 75) {
            data[key].content = data[key].content.slice(0, 75) + " ...";
          }
          if (data[key].caption.length > 15) {
            data[key].caption = data[key].caption.slice(0, 75) + " ...";
          }
          dataArr.push(data[key]);
        }
        this.items = dataArr.reverse();
      });
  },
  methods: {
    del(id) {
      this.$axios
        .delete("https://myblog-bb162.firebaseio.com/essay/" + id + ".json")
        .then(res => {
          this.reload();
        });
    }
  },
  computed: {
    filterItem() {
      return this.items.filter(data => {
        return data.caption.match(this.search);
      });
    }
  }
};
</script>

<style scoped>
.content-header {
  background-image: url("./../../../assets/bg/bg_back/bg-edit.png");
}
</style>
<style>
#particles-js {
  z-index: 999;
  position: absolute;
  left: 240px;
  top: 0;
}
</style>
<style></style>
