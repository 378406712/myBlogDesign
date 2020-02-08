import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        //存储共有数据
        flag:true,
        avatar:null,
        slider:0,
        setting:{
            alterPass:0,
            setData:0,
            updateData:0,
            editEssay:0,
            readComment:0,
            coverSetting:0,
            bgSetting:0,
            topColumnSet:0,
            loginCounts:0
        }
    },
    mutations:{
        initstoreList(state,payload){
            state.flag = payload
        },
        sliderList(state,payload){
            
            state.slider = payload
                
            sessionStorage.setItem('sliderStatus',payload)
                },
        userAvatar(state,payload){
            state.avatar = payload
        },
        setting(state,payload){
            console.log(payload,'000000000')
            sessionStorage.setItem('setting',state.setting)
        }
    }
})

export default store;