<template>
  <div class="home_page">
    <!-- <div class="scrollbar" id="bar"></div> -->
    <!-- 主体区 -->
    <section class="main_container">
      <!-- 壁纸 -->
      <div class="header_top">
        <figure id="centerBg">
          <div class="focus_info">
            <div class="header_avatar">
              <a href>
                <img src="./../assets/avatar.jpg" alt />
              </a>
            </div>
            <div class="header_info">
              <p>猫になりたい</p>
              <div class="social_media">
                <li class="bg-pre">
                  <img class="left_arrow" src="./../assets/media_icon/next-b.svg" alt />
                </li>
                <li>
                  <a href>
                    <img src="./../assets/media_icon/github.png" alt />
                  </a>
                </li>
                <li>
                  <a href>
                    <img src="./../assets/media_icon/qq.png" alt />
                  </a>
                </li>
                <li>
                  <a href>
                    <img src="./../assets/media_icon/bilibili.png" alt />
                  </a>
                </li>
                <li>
                  <a href>
                    <img src="./../assets/media_icon/wangyiyun.png" alt />
                  </a>
                </li>
                <li class="bg-next">
                  <img src="./../assets/media_icon/next-b.svg" alt />
                </li>
              </div>
            </div>
          </div>
        </figure>
      </div>

      <!-- page内容 -->
      <div id="page" class="site wrapper">
        <header class="site_header shadow" role="banner">
          <div class="site_top">
            <div class="site_branding">
              <a href>
                <span>Mint Candy</span>
              </a>
            </div>

            <div class="h_user_avatar" @mouseenter="flag=!flag" @mouseleave="flag=!flag">
              <img src="./../assets/avatar.jpg" alt />
              <transition name="fade">
                <div class="header_user_menu" v-show="flag">
                  <div class="header_user_name">
                    Signed in as
                    <div class="userName">轻度</div>
                  </div>
                  <div class="menu_option">
                    <a href target="_blank">管理中心</a>
                    <a href target="_blank">撰写文章</a>
                    <a href target="_blank">个人资料</a>
                    <a href target="_blank">退出登录</a>
                  </div>
                </div>
              </transition>
            </div>

            <div class="search_box">
              <span class="iconfont icon-search" @click="toSearch"></span>
            </div>

            <div class="lower">
              <nav>
                <div class="menu">
                  <ul>
                    <li>
                      <a href="#">Login</a>
                    </li>
                    <li>
                      <a href="#">归档</a>
                    </li>
                    <li>
                      <a href="#">时光轴</a>
                    </li>
                    <li>
                      <a href="#">About Me</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </section>

    <!-- 点击向上 -->
    <button id="GoTop"></button>
    <!-- 搜索页面框 -->
    <form action class="js_search search_model">
      <div class="search_inner">
        <div class="micro">
          <p>想要找点什么呢?</p>
          <span class="iconfont icon-search"></span>
          <input type="seach" class="text-input" placeholder="Search" required />
        </div>
      </div>

      <div class="search_close" @click="exitSearch"></div>
    </form>
  </div>
</template>

<script>
import "./../assets/home.css";
import $ from "jquery";
export default {
  name: "home",

  data() {
    return {
      flag: false
    };
  },
  methods: {
    toSearch() {
      $(".js_search").toggleClass("is-visible");
    },
    exitSearch() {
      $(".js_search").removeClass("is-visible");
    }
  },
  mounted() {
    function fun() {
      let h = $(window).height() + "px";
      $("#centerBg").css("height", h);
    }
    fun();
    $(function() {
      $(window).resize(() => {
        fun();
      });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
