// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import changeColor from './directive/randomColor' //随机颜色
import VueParticles from 'vue-particles' //粒子特效 
// import VueLazyload from 'vue-lazyload'//懒加载
import store from './store/store' //vuex
// import qs from 'qs';//qs模块，序列化传输数据给后台，否则后台拿不到
// Vue.prototype.$qs = qs
import Axios from 'axios'//axios请求后台
import VueSwal from 'vue-swal'//弹窗

Vue.use(VueSwal)
import BootstrapVue from 'bootstrap-vue'
// main.js 中
 
import fontawesome from '@fortawesome/fontawesome'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(solid)
fontawesome.library.add(regular)
fontawesome.library.add(brands)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.prototype.$liu = new Vue() //添加liu属性，用于监听

Vue.prototype.$axios = Axios
Vue.config.productionTip = false
Vue.use(BootstrapVue)

// Vue.use(VueLazyload)
Vue.use(VueParticles)
Vue.use(changeColor)
Vue.use(ElementUI)

//字数过滤
Vue.filter('limit',(words)=>{

  if (words !== "" &&  words.length > 30) {
    return words.slice(0, 30) + "...";
  } else {
    return words;
  }

 
})
//登录状态超过15分钟，清除localStorage下token
let data = localStorage.token;
if(data){
  data = JSON.parse(data);

let time = data.expiration;
let value = data.data;
// console.log(time,value)
if (new Date().getTime() > time) {
    // 这里开始执行超时的代码
  delete localStorage.token;

}
}



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // preLoad:1.3,


  router,
  store,//挂载
  components: { App },
  template: '<App/>'
})
