import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        //存储共有数据
        flag:true,
        avatar:null,
        slider:0
    },
    mutations:{
        initstoreList(state,payload){
            state.flag = payload
        },
        sliderList(state,payload){
            
            state.slider = payload
                
            sessionStorage.setItem('sliderStatus',payload)
            console.log(sessionStorage)
                },
        userAvatar(state,payload){
            state.avatar = payload
        }
    }
})

export default store;