<template>
  <div class="backhome">
    <Head v-on:childByValue="childByValue" />

    <div class="slide">
      <div class="top">
        <a v-show="!flag" class="title chinese-font" href="/">
          <img src="./../../assets/media_icon/clover leaf.png" alt />
        </a>
        <a v-show="flag" class="title chinese-font" href="/">Clover</a>
      </div>

      <ul class="menu">
        <li>
          <router-link to="/backhome/center">
            <i class="fab fa-fort-awesome"></i>
            <span>首页</span>
          </router-link>
        </li>
        <li class="menu-title">我的</li>
        <li>
          <router-link to="/backhome/personal">
            <i class="fas fa-user"></i>
            <span>账号</span>
          </router-link>
        </li>

        <li class="menu-title">功能</li>

        <li>
          <router-link to="/backhome/essay">
            <i class="fas fa-feather"></i>
            <span>撰写</span>
          </router-link>
        </li>

        <li>
          <router-link to="/backhome/edit">
            <i class="fas fa-edit"></i>
            <span>编辑</span>
          </router-link>
        </li>

        <li>
          <router-link to="/backhome/comment">
            <i class="fas fa-comment-dots"></i>
            <span>评论</span>
          </router-link>
        </li>

        <li class="menu-title">个性化</li>
        <li>
          <router-link to="/backhome/home_picture">
            <i class="fas fa-comment-dots"></i>
            <span>封面设置</span>
          </router-link>
        </li>
        <li>
          <router-link to="/backhome/top_column">
            <i class="fas fa-comment-dots"></i>
            <span>顶栏定制</span>
          </router-link>
        </li>
        <li>
          <router-link to="/backhome/background">
            <i class="fas fa-comment-dots"></i>
            <span>背景模式</span>
          </router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
    <!-- 内容 -->

    <Foot />
  </div>
</template>

<script>
import Head from "./Head";

import Foot from "./Foot";
import $ from "jquery";
import store from "./../../store/store";
export default {
  name: "backhome",
  components: { Head, Foot },

  data() {
    return {
      flag: true
    };
  },
  methods: {
    childByValue: function(childValue) {
      // childValue就是子组件传过来的值
      this.flag = childValue;
    }


  },
 
  mounted() {
    $(function() {
      let index = sessionStorage.getItem("sliderStatus");
      $(".menu li").removeClass("actives");
      $(".menu li")
        .eq(index)
        .addClass("actives");
      $(".menu li").on("click", function() {
        store.commit("sliderList", $(this).index());

        $(".menu li").removeClass("actives");
        $(this).addClass("actives");
      });
    });
  }
};
</script>

<style scoped>
.slide {
  width: 240px;
  position: fixed;
  transition: all 0.5s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  left: 0;
  top: 0;
  z-index: 30;
  background: #fff;

  height: 100%;
}
.slide li a span {
  width: 100%;
}

.title {
  display: block;
  height: 70px;
  line-height: 70px;
  padding: 0 20px;
  background: #fff;
  text-align: center;
  white-space: nowrap;
}
.menu {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.menu a {
  color: #515a6e;
}
.menu li {
  line-height: 48px;
  min-height: 48px;
}
.menu-title {
  padding: 0 10px;
}
.menu li a {
  position: relative;
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  width: 100%;
  letter-spacing: 0.3px;
  color: #78828a;
  text-decoration: none;
  transition: all 0.5s;
  white-space: nowrap;
}
.menu li {
  font-size: 14px;
}

.menu li:hover a {
  background-color: #f5f5f5;
}
.siderbar-mini .menu li:hover a {
  background-color: #6777ef;
  color: #fff !important;
}
.siderbar-mini .menu li a::before {
  transition: all 0.5s;
}
.siderbar-mini .menu li:hover a::before {
  background-color: #fff;
}

.iconSlide {
  margin-right: 25px;
}
.menu li a svg {
  width: 28px;
  margin-right: 20px;
  text-align: center;
}
.menu-title {
  padding: 3px 15px;
  color: #a1a8ae;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  user-select: none;
}

.actives a {
  color: #6777ef !important;
  font-weight: 600;
  padding-left: 16px !important;
  background-color: transparent;
}
.siderbar-mini .actives a {
  color: #6777ef !important;
  font-weight: 600;
  padding-left: 0px !important;
  background-color: transparent;
}

.actives a::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  height: 25px;
  width: 4px;
  background-color: #6777ef;
}

/* siderbar mini */
.siderbar-mini {
  width: 65px;
  overflow: initial !important;
  position: absolute;
  box-shadow: none;
  position: fixed;
}
.siderbar-mini menu {
  padding: 0;
}
.siderbar-mini li {
  padding: 10px;
}
.siderbar-mini li a {
  box-shadow: 0 4px 8px #acb5f6;
  background-color: #6777ef;
  color: #fff;
}
.siderbar-mini .title {
  padding: 0 !important;
}
.siderbar-mini li a svg {
  margin: 0;
  font-size: 20px;
}

.slider .menu li a {
  white-space: nowrap !important;
}
.siderbar-mini li a span {
  width: 0;
  overflow: hidden;
  visibility: hidden;
  white-space: nowrap;
}
.siderbar-mini li a {
  border-radius: 3px;
  height: 45px;
  padding: 0;
  justify-content: center;
}
.siderbar-mini a svg {
  margin: 0;
}
.siderbar-mini .menu-title {
  display: none;
}
.top a img {
  width: 50px;
  height: 50px;
}
</style>
