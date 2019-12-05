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
                <span class="el-icon-s-custom iconSlide"></span>用户中心(Mine)
              </router-link>
            </li>
            <li>
              <router-link to="/backhome/essay"> <span class="el-icon-edit iconSlide"></span>撰写文章(Essay)</router-link>
            </li>
            <li>
              <router-link to="/backhome/edit"><span class="el-icon-collection iconSlide"></span>我的博文(Edit)</router-link>
            </li>
            <li>
              <router-link to="/backhome/comment"><span class="el-icon-chat-square iconSlide"></span>评论管理(Comment)</router-link>
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
import $ from 'jquery'
export default {
  name: "backhome",
  components: { Head, Foot },

  data() {
    return {};
  },
  mounted(){
       //文字点击特效
    var a_idx = 0;
    $(document).ready(function($) {
      $("body").click(function(e) {
        var a = new Array(
          "ヾ(◍°∇°◍)ﾉﾞ",
          "富强",
          "民主",
          "文明",
          "和谐",
          "自由",
          "平等",
          "公正",
          "法治",
          "爱国",
          "敬业",
          "诚信",
          "友善"
        );
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
          y = e.pageY;
        $i.css({
          "z-index": 5,
          top: y - 20,
          left: x,
          position: "absolute",
          color: "#FF0000",
          "font-weight": "bold",
          "font-size": "14px"
        });
        $("body").append($i);
        $i.animate({ top: y - 180, opacity: 0 }, 1500, function() {
          $i.remove();
        });
      });
    });
  }
};
</script>

<style  scoped>
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
