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

.content {
  margin-left: 240px;
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

/* 文章页重复样式 */

.active {
  background: #fe9600 !important;
  color: #fff !important;
  border-radius: 3px;
  font-size: 10px !important;
  transform: translate(-3px, -28px);
}
.essay-title {
  width: 100%;
  height: 60px;
  margin-bottom: 30px;
  padding-left: 21px;
  border-radius: 3px;
  border: 1px solid #ddd;
  transition: all 0.3s;
}
.essay-content {
  position: relative;
  color: #404040;
  font-size: 15px;
}
.tit {
  padding: 21px 0;
  font-weight: 600;
}
.area {
  border-radius: 3px;
  display: block;
  width: 100%;
  height: 180px;
  margin-bottom: 10px;
  color: #535a63;
  border: 1px solid #ddd;
  background-color: transparent;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  resize: vertical;
  padding: 21px 21px 20px;
  line-height: 1.5;
}
.input_label {
  position: absolute;
  left: 16px;
  top: 20px;
  padding: 0 6px;
  transform-origin: 0 0;
  pointer-events: none;
  transition: all 0.25s;
  font-size: 16px;
  color: #404040;
}
.submit-btn {
  margin: 30px 0;
}

.publish {
  float: left;
  text-align: center;
  border-radius: 3px;
  display: block;
  width: calc(80% - 46px);
  margin: 0;
  padding: 15px 25px;
  text-transform: none;
  color: #535a63;
  background: 0 0;
  border-right: 0;
  -webkit-transition: all 0.1s ease-out;
  -moz-transition: all 0.1s ease-out;
  transition: all 0.1s ease-out;
  box-shadow: none;
  border: 1px solid #ccc;
  text-shadow: none;
  transition: all 0.3s;
}
.publish:hover {
  border: 1px solid #fe9600 !important;
  color: #fe9600;
}

.orange {
  border: 1px solid #fe9600 !important;
}

.essay-card li {
  margin-bottom: 20px;
  font-weight: 500;
}
.essay-card li span {
  letter-spacing: 2px;
}

/*** CUSTOM FILE INPUT STYE ***/
.wrap-custom-file {
  position: relative;
  float: right;

  width: 150px;
  height: 150px;
  margin: 0 0.5rem 1rem;
  text-align: center;
}
.wrap-custom-file input[type="file"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  overflow: hidden;
  opacity: 0;
}
.wrap-custom-file label {
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  overflow: hidden;
  padding: 0 0.5rem;
  cursor: pointer;
  background-color: #fff;
  border-radius: 4px;
  -webkit-transition: -webkit-transform 0.4s;
  transition: -webkit-transform 0.4s;
  transition: transform 0.4s;
  transition: transform 0.4s, -webkit-transform 0.4s;
}
.wrap-custom-file label span {
  display: block;
  margin-top: 2rem;
  font-size: 1.4rem;
  color: #777;
  -webkit-transition: color 0.4s;
  transition: color 0.4s;
}
.wrap-custom-file label .fa {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  -webkit-transform: translatex(-50%);
  transform: translatex(-50%);
  font-size: 1.5rem;
  color: lightcoral;
  -webkit-transition: color 0.4s;
  transition: color 0.4s;
}
.wrap-custom-file label:hover {
  -webkit-transform: translateY(-1rem);
  transform: translateY(-1rem);
}
.wrap-custom-file label:hover span,
.wrap-custom-file label:hover .fa {
  color: #333;
}
.wrap-custom-file label.file-ok {
  background-size: cover;
  background-position: center;
}
.wrap-custom-file label.file-ok span {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.3rem;
  font-size: 1.1rem;
  color: #000;
  background-color: rgba(255, 255, 255, 0.7);
}
.wrap-custom-file label.file-ok .fa {
  display: none;
}
</style>
