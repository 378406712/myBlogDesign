<template >
  <div class="heads  navs clearFix">
    <div class="avatar" @click="show=!show">
      <a class="user" href="javascript:;">
        <img src="./../../assets/bg/icon/none.png" alt />
      </a>
      <transition name="slide-fade">
        <ul  v-if="show" class="options">
          <li>
            <a class="user-center" href="#">用户中心</a>
          </li>
          <li>
            <a class="quit" href="#">退出</a>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
export default {
  name: "heads",
  data() {
    return {
      show: false
    };


  },

  mounted(){
    //   $(function(){
    //     window.onscroll=function(){
    //  var scrollTop = document.documentElement.scrollTop||document.body.scrollTop
    //     if(scrollTop>56){
    //       $(".heads").addClass('navs')
         
    //     }else{
    //         $(".heads").removeClass('navs')
    //     }


    //     }
   
     
    //   })
  }
};
</script>

<style  scoped>
.heads {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;

  height: 56px;
  z-index: 30;
}
.navs::before {
    background-color: hsla(0,0%,100%,.4);
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
  content: "";
  display: block;
  height: 100%;
  opacity: 1;
  position: absolute;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  z-index: -1;
}
.avatar {
  position: relative;
  float: right;
  margin-right: 40px;
  padding-top: 10px;
}
.options {
  position: absolute;
  right: 0px;
  top: 56px;
  z-index: 2;
  transform: scale(1, 1);
  min-width: 120px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06), 0 0 3px rgba(0, 0, 0, 0.18),
    0 1px 3px rgba(0, 0, 0, 0.18);
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding-bottom: 8px !important;
padding-top: 8px !important;
  border-radius: 4px 0 4px 4px;
  transition-duration: 0.3s;
  background-color: #fff;
  text-align: center;
}
.options li {
  line-height: 20px;
}
.options li a {
  text-decoration: none;
  padding: 7px 10px;
  font-size: 14px;
  text-overflow: unset;
  white-space: normal;
  transition: 0.3s all;
  color: inherit;
  z-index: 1;
  display: block;
}
.user img {
  width: 30px;
  height: 30px;
  line-height: 30px;
}
 .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.user-center ,.quit{
  transition: .3s all;
}
.user-center:hover ,.quit:hover{
    background-color: #f5f5f5;
}
</style>