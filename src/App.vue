<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>

<style>
@import "./common/font.css";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/*  chrome，safari滚动条 */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background: #fe9600;
}

::-webkit-scrollbar-track {
  background-color: #eee;
}

body {
  font-family: "Noto Serif SC", "Source Han Serif SC", "Source Han Serif",
    source-han-serif-sc, "PT Serif", "SongTi SC", "MicroSoft Yahei", Georgia,
    serif;

  color: #515a6e;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
}
.chinese-font{
  font-family: 'Merriweather Sans', Helvetica, Tahoma, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei', 'WenQuanYi Micro Hei', sans-serif;
}
li {
  list-style: none;
}
a,
a:hover {
  text-decoration: none;
}

img {
  border: 0;
}
input:focus,
textarea:focus {
  outline: none;
}
.clearFix::before,
.clearFix::after {
  content: "";
  display: block;
  clear: both;
}
.content-mini{
   padding-left: 90px!important;
   
}
.navbar-mini{
  left:65px!important
}

.content {
    padding-left: 270px;
    padding-right: 30px;
    padding-top: 80px;
    width: 100%;
    position: relative;
    transition: padding .5s;
    margin-bottom: 30px;
}
.grey_bg{
      background-color: #f4f6f9;
  overflow: hidden;
}
.content-header {
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
  width:100%;
  padding-right: 10px;
  padding-left: 10px;
 
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
}
.card-inner {
  margin: 12px 0;
  margin: 24px 16px;
}
.card-inner li {
  line-height: 20px;
}

.el-table__row {
  width: 100%;
}

.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}

/* icon font */
.icon_svg{
  width: 25px;
  height: 25px;
  margin-right: 10px;
  vertical-align: middle
}
</style>
