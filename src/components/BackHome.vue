<template>
  <div class="backhome">
    <Head />

    <div class="slide">
      <div class="top">
        <a class="title" href="/">MINT CANDY</a>
      </div>
      <ul class="menu">
        <li>
          <a class="menu-title" href="#">我的</a>
          <ul class="menu-item">
            <li>
              <router-link to="/backhome/mine">
                <span class="el-icon-s-custom iconSlide"></span>用户中心
              </router-link>
            </li>
            <li>
              <router-link to="/backhome/essay"> <span class="el-icon-edit iconSlide"></span>撰写文章</router-link>
            </li>
            <li>
              <router-link to="/backhome/edit"><span class="el-icon-collection iconSlide"></span>我的博文</router-link>
            </li>
            <li>
              <router-link to="/backhome/comment"><span class="el-icon-chat-square iconSlide"></span>评论管理</router-link>
            </li>
           
            <!-- <li>
              <a href="#">邀请链接</a>
            </li> -->
          </ul>
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

export default {
  name: "backhome",
  components: { Head, Foot },

  data() {
    return {};
  }
};
</script>

<style  scoped>
/* .content {
  margin-left: 240px;
}
.content-header {
  background-image: url("./../assets/bg.png");
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: -58px;
  padding-top: 68px;
  padding-bottom: 58px;
  overflow: hidden;
  box-shadow: 0 0px 0 rgb(67, 47, 40), 0 0 15px #412f1c,
    0 1px 3px rgba(0, 0, 0, 0.05);
}
.container {
  margin-right: auto;
  margin-left: auto;
  padding-right: 10px;
  padding-left: 10px;
  max-width: 960px;
}
.content-heading {
  font-weight: 300;
  color: #fff;
  font-size: 44px;
  line-height: 48px;
  margin-top: 48px;
  margin-bottom: 12px;
}
.list {
  margin-bottom: 48px;
  margin-right: -10px;
  margin-left: -10px;
  padding-left: 16px;
  padding-right: 16px;
}
.card {
  overflow: hidden;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0px 0 #e5e5e5, 0 0 15px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.05);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 24px;
  margin-bottom: 24px;
}
.card-main {
  margin: 24px 16px;
  width: 100%;
}
.card-inner {
  margin: 12px 0;
  margin: 24px 16px;
}
.card-inner li {
  line-height: 20px;
}

.el-table__row{
    width:100%
} */

.slide {
  width: 240px;
  position: fixed;
  border-right: 1px solid #dadada;
  left: 0;
  top: 0;
  z-index: 30;
  background: transparent;

  height: 100%;
}

.title {
  display: block;
  height: 56px;
  line-height: 56px;
  padding: 0 20px;
  background: #fff;
  border-bottom: 1px solid #dadada;
}
.menu {
  display: flex;
  flex-direction: column;
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
.menu-item li a {
  font-weight: 400;
  min-height: 36px;
  padding-left: 36px;
  display: block;
  transition: 0.3s all;
}

.menu-item a:hover {
  background-color: #f5f5f5;
}
.iconSlide{
  margin-right: 25px;
}
</style>
