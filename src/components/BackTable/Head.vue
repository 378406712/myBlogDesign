<template >
  <div class="heads navs clearFix">
    <nav class="navbar">
      <form class="form-inline mr-auto">
        <ul class="navbar-nav mr-3">
          <li>
            <a href="#" data-toggle="sidebar" class="nav-link nav-link-lg">
              <i class="fas fa-bars"></i>
            </a>
          </li>
        </ul>
      </form>

      <ul class="navbar-nav navbar-right">
        <li class="dropdown">
          <a
            href="#"
            data-toggle="dropdown"
            class="nav-link dropdown-toggle nav-link-lg nav-link-user"
            aria-expanded="false"
          >
            <img
              alt="image"
              src="https://q4.qlogo.cn/g?b=qq&amp;nk=378406712@qq.com&amp;s=3?d=retro"
              class="rounded-circle mr-1"
            />
            <div class="d-sm-none d-lg-inline-block">Hi, clover_1996</div>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a href="/user/profile" class="dropdown-item has-icon">
              <i class="fas fa-user"></i> 我的账号
            </a>

            <a href="/user/invite" class="dropdown-item has-icon">
              <i class="fas fa-laugh-squint"></i> 修改资料
            </a>
            <div class="dropdown-divider"></div>
            <a href="/user/logout" class="dropdown-item has-icon text-danger">
              <i class="fas fa-sign-out-alt"></i> 退出登录
            </a>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "heads",
  data() {
    return {
      show: false
    };
  },

  mounted() {

   
     
      $(".navbar-nav").click( function(e) {
      
      $(".dropdown-menu").toggleClass("show");
      e.stopPropagation();
    });
       $(window).click("click", function() {
      $(".dropdown-menu").removeClass("show");
    });
  }
};
</script>

<style  scoped>
.heads {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: rgba(200, 230, 232, 0.5);
  height: 56px;
  z-index: 30;
}

.navbar {
  height: 56px;
  left: 250px;
  right: 5px;
  position: absolute;
  z-index: 890;
  background-color: transparent;
}
.navbar .nav-link {
  padding-left: 15px !important;
  padding-right: 15px !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  height: 100%;
}
.navbar .nav-link.nav-link-lg svg {
  margin-left: 0 !important;
  font-size: 18px;
  line-height: 32px;
  font-weight: 900;
}

.navbar-nav {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.dropdown,
.dropleft,
.dropright,
.dropup {
  position: relative;
}
.navbar .nav-link {
  color: #007bff;
  padding-left: 15px !important;
  padding-right: 15px !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  height: 100%;
}
.navbar .nav-link.nav-link-user img {
  width: 30px;
}
.mr-1,
.mx-1 {
  margin-right: 0.25rem !important;
}
.rounded-circle {
  border-radius: 50% !important;
}
img {
  vertical-align: middle;
  border-style: none;
}
.dropdown-menu {
  position: absolute;
  box-shadow: 0 10px 40px 0 rgba(51, 73, 94, 0.15);
  border: none;
  width: 200px;
}
.dropdown-menu-right {
  right: 0;
  left: auto;
}
</style>