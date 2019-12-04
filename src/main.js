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

// import qs from 'qs';//qs模块，序列化传输数据给后台，否则后台拿不到
// Vue.prototype.$qs = qs
import Axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
// main.js 中
 



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



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // preLoad:1.3,


  router,
  components: { App },
  template: '<App/>'
})
