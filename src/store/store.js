import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        //存储共有数据
        flag:true
    },
    mutations:{
        initstoreList(state,status){
            state.flag = status
        }
    }
})

export default store;